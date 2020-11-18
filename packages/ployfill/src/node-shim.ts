import { EventEmitter } from 'events'

const Thread = Java.type('java.lang.Thread')
const ThreadGroup = Java.type("java.lang.ThreadGroup")
const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const LinkedBlockingQueue = Java.type("java.util.concurrent.LinkedBlockingQueue")
const TimeUnit = Java.type("java.util.concurrent.TimeUnit")

const threadCount = new AtomicInteger(0)
const threadGroup = new ThreadGroup("@ccms/ployfill-micro-task")
const microTaskPool = new ThreadPoolExecutor(
    10, 100, 60, Packages.java.util.concurrent.TimeUnit.SECONDS,
    new LinkedBlockingQueue(500),
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
    queueMicrotask(func: Function) {
        microTaskPool.execute(func)
    }
    exit(code: number) {
        process.emit('exit', code)
        microTaskPool.shutdown()
        console.log('await microTaskPool termination...')
        microTaskPool.awaitTermination(5000, TimeUnit.MILLISECONDS)
    }
}
const timeoutCount = new AtomicInteger(0)
const timeoutTasks = []
function setTimeout(func: Function, time: number, ...args: any[]) {
    let taskId = timeoutCount.incrementAndGet()
    timeoutTasks[taskId] = func
    process.nextTick(() => {
        Thread.sleep(time)
        if (timeoutTasks[taskId]) { func(...args) }
    })
    return taskId
}
function clearTimeout(taskId: number) {
    delete timeoutTasks[taskId]
}
const intervalCount = new AtomicInteger(0)
const intervalTasks = []
function setInterval(func: Function, time: number, ...args: any[]) {
    let taskId = intervalCount.incrementAndGet()
    intervalTasks[taskId] = func
    process.nextTick(() => {
        Thread.sleep(time)
        while (intervalTasks[taskId]) {
            func(...args)
            Thread.sleep(time)
        }
    })
    return taskId
}
function clearInterval(taskId: number) {
    delete intervalTasks[taskId]
}
global.setGlobal('process', new Process(), {})
global.setGlobal('queueMicrotask', (func: any) => microTaskPool.execute(func), {})
global.setGlobal('setTimeout', setTimeout, {})
global.setGlobal('clearTimeout', clearTimeout, {})
global.setGlobal('setImmediate', (func: Function, ...args: any[]) => setTimeout(func, 0, ...args), {})
global.setGlobal('clearImmediate ', clearTimeout, {})
global.setGlobal('setInterval', setInterval, {})
global.setGlobal('clearInterval', clearInterval, {})
