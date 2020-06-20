import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'
import thread_pool from '@ccms/common/dist/thread-pool'

const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const AtomicBoolean = Java.type("java.util.concurrent.atomic.AtomicBoolean")
const Thread = Java.type('java.lang.Thread')

const taskId = new AtomicInteger(0)
const tasks: { [key: number]: task.Cancelable } = {}
const executor = thread_pool.create({
    groupName: '@ccms/spring'
})

@provideSingleton(task.TaskManager)
export class SpringTaskManager implements task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    private innerTaskId: any
    private innerTasks: { [s: string]: task.Cancelable }
    private innerExecutor: java.util.concurrent.ThreadPoolExecutor

    constructor() {
        this.innerTaskId = taskId
        this.innerTasks = tasks
        this.innerExecutor = executor
    }

    create(func: Function): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !') }
        return new SpringTask(this.pluginInstance, func)
    }
    callSyncMethod(func: Function): any {
        return func()
    }
    disable() {
        Object.values(this.innerTasks).forEach((task) => task?.cancel())
        this.innerExecutor.shutdown()
    }
}

export class SpringTask extends task.Task {
    public id = taskId.incrementAndGet()
    private running = new AtomicBoolean(true)

    run(...args: any[]) {
        if (this.laterTime > 0) {
            try {
                Thread.sleep(this.laterTime)
            } catch (ex) {
                Thread.currentThread().interrupt()
            }
        }
        while (this.running.get()) {
            try {
                this.func(...args)
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
            delete tasks[this.id]
        }
    }

    submit(...args: any[]): task.Cancelable {
        tasks[this.id] = this
        executor.execute((() => this.run(...args)) as any)
        return {
            cancel: () => {
                return this.cancel()
            }
        }
    }
}
