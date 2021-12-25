import { EventEmitter } from 'events'

const System = Java.type('java.lang.System')
const Thread = Java.type('java.lang.Thread')
const InterruptedException = Java.type('java.lang.InterruptedException')
const ThreadGroup = Java.type("java.lang.ThreadGroup")
const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const Callable = Java.type('java.util.concurrent.Callable')
const ThreadFactory = Java.type("java.util.concurrent.ThreadFactory")
const TimeoutException = Java.type('java.util.concurrent.TimeoutException')
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const LinkedBlockingQueue = Java.type("java.util.concurrent.LinkedBlockingQueue")
const TimeUnit = Java.type('java.util.concurrent.TimeUnit')
const DelayQueue = Java.type('java.util.concurrent.DelayQueue')
const JavaScriptTask = Java.type(base.getJavaScriptTaskClass().name)

const threadCount = new AtomicInteger(0)
const threadGroup = new ThreadGroup("@ccms/ployfill-micro-task")
const microTaskPool = new ThreadPoolExecutor(
    100, 200, 60, TimeUnit.SECONDS,
    new LinkedBlockingQueue(300),
    new ThreadFactory((run: any) => new Thread(threadGroup, run, "@ccms/micro-task-" + threadCount.incrementAndGet()))
)
class Process extends EventEmitter {
    env = {
        __noSuchProperty__: (prop) => {
            return System.getenv(prop)
        }
    }
    platform = System.getProperty("os.name")
    constructor() {
        super()
        this.on('exit', () => {
            console.log(`await microTaskPool termination! queueTask: ${microTaskPool.shutdownNow().size()} remainTask: ${threadGroup.activeCount()}`)
            microTaskPool.awaitTermination(3000, TimeUnit.MILLISECONDS)
        })
    }
    on(event: string | symbol, listener: (...args: any[]) => void) {
        return super.on(event, (...args) => {
            try {
                listener(...args)
            } catch (origin: any) {
                try {
                    super.emit('error', origin)
                } catch (error: any) {
                    console.ex(origin)
                    console.ex(error)
                }
            }
        })
    }
    nextTick(func: Function, ...args: any[]) {
        microTaskPool.execute(() => {
            try {
                func(args)
            } catch (origin: any) {
                try {
                    super.emit('error', origin)
                } catch (error: any) {
                    console.ex(origin)
                    console.ex(error)
                }
            }
        })
    }
    exit(code: number) {
        console.log(`process exit by code ${code}!`)
        this.emit('exit', code)
    }

    toString() {
        return "[object process]"
    }
}

class EventLoop {
    private eventLoopMainThread = undefined
    private eventLoopTaskQueue = new DelayQueue()
    private taskExecTimeout = 3
    private fixedThreadPool = undefined

    constructor() {
        this.taskExecTimeout = parseInt(process.env.MS_NODE_EVENT_LOOP_TIMEOUT) || 3
        this.fixedThreadPool = new ThreadPoolExecutor(
            1, 1, 0, TimeUnit.SECONDS,
            new LinkedBlockingQueue(300),
            new ThreadFactory((run: any) => {
                let thread = new Thread(run, "@ccms/node-shim/event-loop-exec")
                thread.setDaemon(true)
                return thread
            }))
        this.eventLoopMainThread = new Thread(() => {
            let task = undefined
            try {
                while (!this.eventLoopMainThread.isInterrupted()) {
                    task = this.eventLoopTaskQueue.take()
                    try {
                        task.getTask()()
                    } catch (cause: any) {
                        try {
                            process.emit('error', cause)
                        } catch (error: any) {
                            console.error(cause)
                            console.ex(cause)
                        }
                    }
                }
            } catch (error: any) {
                console.log(`EventLoop Thread isInterrupted exit! remainTask: ${this.eventLoopTaskQueue.size()}`)
                this.eventLoopTaskQueue.clear()
                this.eventLoopTaskQueue = undefined
                this.timeoutCount = undefined
                this.timeoutTasks = undefined
                this.intervalCount = undefined
                this.intervalTasks = undefined
                this.eventLoopMainThread = undefined
            }
        }, "@ccms/node-shim/event-loop")
        this.eventLoopMainThread.setDaemon(true)
        process.on('exit', () => {
            this.eventLoopMainThread.interrupt()
            this.fixedThreadPool.shutdownNow()
            console.log(`await fixedThreadPool termination!`)
            this.fixedThreadPool.awaitTermination(3000, TimeUnit.MILLISECONDS)
        })
    }

    startEventLoop() {
        this.eventLoopMainThread.start()
    }

    private putDelayTask(id: number, callback: Function, ms: number) {
        this.eventLoopTaskQueue.put(new JavaScriptTask(id, callback, ms))
    }

    private limitTimeTask(name: string, callback: Function, ...args: any[]) {
        if (!callback) {
            throw new Error(`task ${name} callback function can't be null!`)
        }
        if (this.fixedThreadPool.isShutdown()) { return console.warn(`FixedThreadPool isTerminated! ignore Task ${name}!`) }
        try {
            this.fixedThreadPool.submit(new Callable({
                call: () => {
                    try {
                        callback.apply(undefined, args)
                    } catch (cause: any) {
                        cause = cause.getCause && cause.getCause() || cause
                        try {
                            process.emit('error', cause)
                        } catch (error: any) {
                            console.error(cause)
                            console.ex(cause)
                        }
                    }
                }
            })).get(this.taskExecTimeout, TimeUnit.SECONDS)
        } catch (error: any) {
            if (error instanceof InterruptedException) {
                return console.warn(`FixedThreadPool isInterrupted exit! Task ${name} exec exit!`)
            }
            if (error instanceof TimeoutException) {
                return console.warn(`Task ${name} => ${callback} exec time greater than ${this.taskExecTimeout}s!`)
            }
            throw error.getCause && error.getCause() || error
        }
    }

    private timeoutCount = new AtomicInteger(0)
    private timeoutTasks = []
    setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]) {
        let taskId = this.timeoutCount.incrementAndGet()
        this.timeoutTasks[taskId] = callback
        console.trace(`create setTimeout task ${taskId} => ${callback}`)
        this.putDelayTask(taskId, () => {
            if (this.timeoutTasks[taskId]) {
                this.limitTimeTask(`setTimeout-${taskId}`, callback, ...args)
            } else {
                console.trace(`ignore setTimeout ${ms}ms task ${taskId} because it's cancelled!`)
            }
        }, ms)
        return taskId
    }
    clearTimeout(taskId: number) {
        delete this.timeoutTasks[taskId]
    }

    private intervalCount = new AtomicInteger(0)
    private intervalTasks = []
    setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]) {
        let taskId = this.intervalCount.incrementAndGet()
        this.intervalTasks[taskId] = callback
        console.trace(`create setInterval ${ms}ms task ${taskId} => ${callback}`)
        let intervalTask = () => {
            if (this.intervalTasks[taskId]) {
                this.limitTimeTask(`setInterval-${taskId}`, callback, ...args)
                this.putDelayTask(taskId, intervalTask, ms)
            } else {
                console.trace(`ignore setInterval task ${taskId} because it's cancelled!`)
            }
        }
        this.putDelayTask(taskId, intervalTask, ms)
        return taskId
    }
    clearInterval(taskId: number) {
        delete this.intervalTasks[taskId]
    }
}
global.setGlobal('process', new Process(), {})
Object.defineProperty(process, require('core-js/es/symbol/to-string-tag'), { value: '[object process]' })
const eventLoop = new EventLoop()
Object.defineProperty(process, 'eventLoop', { value: eventLoop })
eventLoop.startEventLoop()
global.setGlobal('queueMicrotask', (func: any, ...args: any[]) => process.nextTick(func, args), {})
global.setGlobal('setTimeout', eventLoop.setTimeout.bind(eventLoop), {})
global.setGlobal('clearTimeout', eventLoop.clearTimeout.bind(eventLoop), {})
global.setGlobal('setInterval', eventLoop.setInterval.bind(eventLoop), {})
global.setGlobal('clearInterval', eventLoop.clearInterval.bind(eventLoop), {})
global.setGlobal('setImmediate', (callback: (...args: any[]) => void, ...args: any[]) => eventLoop.setTimeout(callback, 0, ...args), { writable: true })
global.setGlobal('clearImmediate ', eventLoop.clearTimeout.bind(eventLoop), { writable: true })
