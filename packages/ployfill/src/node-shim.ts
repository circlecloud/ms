import { EventEmitter } from 'events'

const Thread = Java.type('java.lang.Thread')
const ThreadGroup = Java.type("java.lang.ThreadGroup")
const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const LinkedBlockingQueue = Java.type("java.util.concurrent.LinkedBlockingQueue")
const TimeUnit = Java.type('java.util.concurrent.TimeUnit')
const DelayQueue = Java.type('java.util.concurrent.DelayQueue')
const JavaScriptTask = Java.type(base.getJavaScriptTaskClass().name)

const threadCount = new AtomicInteger(0)
const threadGroup = new ThreadGroup("@ccms/ployfill-micro-task")
const microTaskPool = new ThreadPoolExecutor(
    100, 200, 60, Packages.java.util.concurrent.TimeUnit.SECONDS,
    new LinkedBlockingQueue(300),
    (run: any) => new Thread(threadGroup, run, "@ccms/micro-task-" + threadCount.incrementAndGet()),
    new ThreadPoolExecutor.CallerRunsPolicy()
)
class Process extends EventEmitter {
    env = {
        __noSuchProperty__: (prop) => {
            return Packages.java.lang.System.getenv(prop)
        }
    }
    platform = Packages.java.lang.System.getProperty("os.name")
    on(event: string | symbol, listener: (...args: any[]) => void) {
        return super.on(event, (...args) => {
            try {
                listener(...args)
            } catch (error) {
                try {
                    super.emit('error', error)
                } catch (error) {
                    console.ex(error)
                }
            }
        })
    }
    nextTick(func: Function) {
        microTaskPool.execute(func)
    }
    exit(code: number) {
        process.emit('exit', code)
        microTaskPool.shutdown()
        console.log('process exit await microTaskPool termination...')
        microTaskPool.awaitTermination(5000, TimeUnit.MILLISECONDS)
    }
}

class EventLoop {
    private eventLoopMainThread = undefined
    private eventLoopTaskQueue = new DelayQueue()

    constructor() {
        this.eventLoopMainThread = new Thread(() => {
            let task = undefined
            try {
                while ((task = this.eventLoopTaskQueue.take()) != undefined) {
                    try {
                        task.getTask()()
                    } catch (error) {
                        try {
                            process.emit('error', error)
                        } catch (error) {
                            console.error(error)
                            console.ex(error)
                        }
                    }
                }
            } catch (error) {
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
        process.on('exit', () => this.eventLoopMainThread.interrupt())
    }

    startEventLoop() {
        this.eventLoopMainThread.start()
    }

    private putDelayTask(callback: Function, ms: number) {
        this.eventLoopTaskQueue.put(new JavaScriptTask(callback, ms))
    }

    private timeoutCount = new AtomicInteger(0)
    private timeoutTasks = []
    setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]) {
        let taskId = this.timeoutCount.incrementAndGet()
        this.timeoutTasks[taskId] = callback
        console.trace(`create setTimeout task ${taskId} => ${callback}`)
        this.putDelayTask(() => {
            if (this.timeoutTasks[taskId]) {
                callback(...args)
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
                callback(...args)
                this.putDelayTask(intervalTask, ms)
            } else {
                console.trace(`ignore setInterval task ${taskId} because it's cancelled!`)
            }
        }
        this.putDelayTask(intervalTask, ms)
        return taskId
    }
    clearInterval(taskId: number) {
        delete this.intervalTasks[taskId]
    }
}
global.setGlobal('process', new Process(), {})
const eventLoop = new EventLoop()
global.setGlobal('eventLoop', eventLoop, {})
eventLoop.startEventLoop()
global.setGlobal('queueMicrotask', (func: any) => microTaskPool.execute(func), {})
global.setGlobal('setTimeout', eventLoop.setTimeout.bind(eventLoop), {})
global.setGlobal('clearTimeout', eventLoop.clearTimeout.bind(eventLoop), {})
global.setGlobal('setImmediate', (callback: (...args: any[]) => void, ...args: any[]) => eventLoop.setTimeout(callback, 0, ...args), {})
global.setGlobal('clearImmediate ', eventLoop.clearTimeout.bind(eventLoop), {})
global.setGlobal('setInterval', eventLoop.setInterval.bind(eventLoop), {})
global.setGlobal('clearInterval', eventLoop.clearInterval.bind(eventLoop), {})
