import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

const AtomicBoolean = Java.type("java.util.concurrent.atomic.AtomicBoolean")
const Thread = Java.type('java.lang.Thread')
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const ThreadPoolTaskExecutor = Java.type('org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor')

let executor: any
let tasks: { [key: number]: task.Cancelable } = {}
let taskId = 0

@provideSingleton(task.TaskManager)
export class SpringTaskManager implements task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    constructor() {
        executor = new ThreadPoolTaskExecutor()
        executor.setCorePoolSize(10)
        executor.setMaxPoolSize(100)
        executor.setQueueCapacity(500)
        executor.setKeepAliveSeconds(60)
        executor.setThreadNamePrefix("@ccms/spring-")
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy())
        executor.initialize()
    }

    create(func: Function): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !') }
        return new SpringTask(this.pluginInstance, func)
    }
    callSyncMethod(func: Function): any {
        return func()
    }
    disable() {
        Object.values(tasks).forEach((task) => task.cancel())
        executor.shutdown();
    }
}

export class SpringTask extends task.Task {
    public id = taskId++
    private running = new AtomicBoolean(true)

    run() {
        if (this.laterTime > 0) {
            try {
                Thread.sleep(this.laterTime)
            } catch (ex) {
                Thread.currentThread().interrupt()
            }
        }
        while (this.running.get()) {
            try {
                this.func()
            } catch (t) {
                console.error("Task exec error:", t)
                console.ex(t)
            }
            // If we have a interval of 0 or less, only run once
            if (this.interval <= 0) { break }
            try {
                Thread.sleep(this.interval)
            } catch (ex) {
                Thread.currentThread().interrupt()
            }
        }
        this.cancel()
    }

    cancel(): any {
        var wasRunning = this.running.getAndSet(false)
        if (wasRunning) {
            tasks[this.id] = undefined
        }
    }

    submit(): task.Cancelable {
        tasks[this.id] = this
        executor.execute(this.run.bind(this))
        return {
            cancel: () => {
                return this.cancel()
            }
        }
    }
}
