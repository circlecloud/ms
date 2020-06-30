import { EventEmitter } from 'events'

const Thread = Java.type('java.lang.Thread')
const ThreadGroup = Java.type("java.lang.ThreadGroup")
const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const LinkedBlockingQueue = Java.type("java.util.concurrent.LinkedBlockingQueue")

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
    nextTick(func: Function) {
        microTaskPool.execute(func)
    }
    queueMicrotask(func: Function) {
        microTaskPool.execute(func)
    }
    exit(code: number) {
        process.emit('exit', code)
        microTaskPool.shutdown()
    }
}
global.setGlobal('process', new Process(), {})
global.setGlobal('queueMicrotask', (func: any) => microTaskPool.execute(func), {})
