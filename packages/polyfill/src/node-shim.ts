import { EventEmitter } from 'events'

const System = Java.type('java.lang.System')
const Thread = Java.type('java.lang.Thread')
const ManagementFactory = Java.type('java.lang.management.ManagementFactory')
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
const threadGroup = new ThreadGroup("@ccms/micro-task")
const microTaskPool = new ThreadPoolExecutor(
    100, 200, 60, TimeUnit.SECONDS,
    new LinkedBlockingQueue(1024),
    new ThreadFactory((run: any) => new Thread(threadGroup, run, "@ccms/micro-task-" + threadCount.incrementAndGet()))
)
class Process extends EventEmitter {
    readonly version = base.version
    readonly versions = []
    readonly config = {}
    readonly pid: number = parseInt(ManagementFactory.getRuntimeMXBean().getName().split('@')[0])
    readonly ppid: number
    title: string
    readonly arch: string = System.getProperty("os.arch")
    readonly platform = System.getProperty("os.name")

    env = {
        __noSuchProperty__: (prop) => {
            return System.getenv(prop)
        }
    }

    stdout = System.out
    stderr = System.err
    stdin = System.in

    execArgv = ''
    execPath = ''

    private queueMicrotaskExecuteTimeout = 5000

    constructor() {
        super()
        this.on('exit', () => {
            console.log(`await microTaskPool termination! queueTask: ${microTaskPool.shutdownNow().size()} remainTask: ${threadGroup.activeCount()}`)
            microTaskPool.awaitTermination(this.queueMicrotaskExecuteTimeout, TimeUnit.MILLISECONDS)
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
    nextTick(callback: Function, ...args: any[]): void {
        try {
            microTaskPool.submit(new Callable({
                call: () => {
                    try {
                        callback(args)
                    } catch (origin: any) {
                        try {
                            super.emit('error', origin)
                        } catch (error: any) {
                            console.ex(origin)
                            console.ex(error)
                        }
                    }
                }
            })).get(this.queueMicrotaskExecuteTimeout, TimeUnit.MILLISECONDS)
        } catch (error: any) {
            if (error instanceof InterruptedException) {
                return console.warn(`FixedThreadPool isInterrupted exit! Task ${callback.name || '<anonymous>'} exec exit!`)
            }
            if (error instanceof TimeoutException) {
                return console.warn(`Task ${callback.name || '<anonymous>'} => ${callback} exec time greater than ${this.queueMicrotaskExecuteTimeout}ms!`)
            }
            throw error.getCause && error.getCause() || error
        }
    }
    exit(code: number) {
        console.log(`process exit by code ${code}!`)
        this.emit('exit', this.exitCode = code)
    }
    exitCode = 0
    openStdin() {
        throw new Error('MiaoScript unsupport openStdin.')
    }
    chdir(directory: string): void {
        console.error('MiaoScript unsupport chdir. lock at ' + root)
    }
    cwd() {
        return root
    }
    getgid(): number {
        throw new Error('MiaoScript unsupport getgid.')
    }
    setgid(id: number | string) {
        throw new Error('MiaoScript unsupport setgid.')
    }
    getuid(): number {
        throw new Error('MiaoScript unsupport getuid.')
    }
    setuid(id: number | string) {
        throw new Error('MiaoScript unsupport setuid.')
    }
    setUncaughtExceptionCaptureCallback(cb: ((err: Error) => void) | null) {
        if (cb == null) {
            this.removeAllListeners('error')
        } else {
            this.on('error', cb)
        }
    }
    hasUncaughtExceptionCaptureCallback() {
        return this.listenerCount('error') > 0
    }
    kill(pid: number, signal?: string | number): true {
        throw new Error('MiaoScript unsupport kill.')
        return true
    }
}

class EventLoop {
    private threadCount = new AtomicInteger(0)
    private eventLoopMainThread = undefined
    private eventLoopTaskQueue = new DelayQueue()
    private taskExecuteTimeout = 3000
    private fixedThreadPool = undefined

    constructor() {
        this.taskExecuteTimeout = parseInt(process.env.MS_TASK_EXECUTE_TIMEOUT) || 3000
        this.fixedThreadPool = new ThreadPoolExecutor(
            8, 16, 0, TimeUnit.SECONDS,
            new LinkedBlockingQueue(1024),
            new ThreadFactory((run: any) => {
                let thread = new Thread(run, "@ccms/event-loop-" + this.threadCount.incrementAndGet())
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
        }, "@ccms/event-loop")
        this.eventLoopMainThread.setDaemon(true)
        process.on('exit', () => {
            this.eventLoopMainThread.interrupt()
            this.fixedThreadPool.shutdownNow()
            console.log(`await fixedThreadPool termination!`)
            this.fixedThreadPool.awaitTermination(this.taskExecuteTimeout, TimeUnit.MILLISECONDS)
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
        if (this.fixedThreadPool.isShutdown()) {
            return console.warn(`FixedThreadPool isTerminated! ignore Task ${name}!`)
        }
        try {
            this.fixedThreadPool.submit(new Callable({
                call: () => {
                    try {
                        callback.apply(undefined, args)
                    } catch (cause: any) {
                        cause = cause.getCause ? cause.getCause() : cause
                        try {
                            process.emit('error', cause)
                        } catch (error: any) {
                            console.error(cause)
                            console.ex(cause)
                        }
                    }
                }
            })).get(this.taskExecuteTimeout, TimeUnit.MILLISECONDS)
        } catch (error: any) {
            if (error instanceof InterruptedException) {
                return console.warn(`FixedThreadPool isInterrupted exit! Task ${name} exec exit!`)
            }
            if (error instanceof TimeoutException) {
                return console.warn(`Task ${name} => ${callback} exec time greater than ${this.taskExecuteTimeout}ms!`)
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
Object.defineProperty(process, require('core-js/es/symbol/to-string-tag'), { value: 'process' })
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
