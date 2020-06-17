const Thread = Java.type('java.lang.Thread')
const ThreadGroup = Java.type("java.lang.ThreadGroup")
const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const LinkedBlockingQueue = Java.type("java.util.concurrent.LinkedBlockingQueue")

interface ThreadPoolConfig {
    corePoolSize?: number
    maximumPoolSize?: number
    keepAliveTime?: number
    workQueueSize?: number
    groupName: string
}

export default {
    create(config: ThreadPoolConfig): java.util.concurrent.ThreadPoolExecutor {
        let threadCount = new AtomicInteger(0)
        config = {
            corePoolSize: 10,
            maximumPoolSize: 100,
            keepAliveTime: 60,
            workQueueSize: 500,
            ...config
        }
        return new ThreadPoolExecutor(
            config.corePoolSize, config.maximumPoolSize, config.keepAliveTime, Packages.java.util.concurrent.TimeUnit.SECONDS,
            new LinkedBlockingQueue(config.workQueueSize),
            (run: any) => new Thread(new ThreadGroup(config.groupName), run, config.groupName + "-" + threadCount.incrementAndGet()),
            new ThreadPoolExecutor.CallerRunsPolicy()
        )
    }
}
