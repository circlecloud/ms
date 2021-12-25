import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'
import thread_pool from '@ccms/common/dist/thread-pool'

const AtomicBoolean = Java.type("java.util.concurrent.atomic.AtomicBoolean")
const Thread = Java.type('java.lang.Thread')

@provideSingleton(task.TaskManager)
export class SpringTaskManager extends task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    private tasks: { [s: string]: task.Cancelable }
    private executor: java.util.concurrent.ThreadPoolExecutor

    constructor() {
        super()
        this.tasks = {}
        this.executor = thread_pool.create({
            groupName: '@ccms/spring'
        })
    }

    create0(owner: plugin.Plugin, func: Function, id: number): task.Task {
        return new SpringTask(owner, func, id, this)
    }
    callSyncMethod(func: Function): any {
        return func()
    }
    disable0() {
        Object.values(this.tasks).forEach((task) => task?.cancel())
        this.executor.shutdown()
    }
    nextId() {
        return this.taskId.incrementAndGet()
    }
    submit(id: number, task: SpringTask, func: Function) {
        this.tasks[id] = task
        this.executor.execute(func as any)
    }
    cancel(id: number) {
        delete this.tasks[id]
    }
}

export class SpringTask extends task.Task {
    private id: number
    private taskManager: SpringTaskManager
    private running = new AtomicBoolean(true)

    constructor(owner: plugin.Plugin, func: Function, id: number, taskManager: SpringTaskManager) {
        super(owner, func, id)
        this.id = taskManager.nextId()
        this.taskManager = taskManager
    }

    run(...args: any[]) {
        if (this.laterTime > 0) {
            try {
                Thread.sleep(this.laterTime)
            } catch (ex: any) {
                Thread.currentThread().interrupt()
            }
        }
        while (this.running.get()) {
            try {
                this.func(...args)
            } catch (ex: any) {
                console.error("Task exec error:", ex)
                console.ex(ex)
            }
            // If we have a interval of 0 or less, only run once
            if (this.interval <= 0) { break }
            try {
                Thread.sleep(this.interval)
            } catch (ex: any) {
                Thread.currentThread().interrupt()
            }
        }
        this.cancel()
    }

    cancel0() {
        var wasRunning = this.running.getAndSet(false)
        if (wasRunning) {
            this.taskManager.cancel(this.id)
            return true
        }
        return false
    }

    submit0(...args: any[]) {
        this.taskManager.submit(this.id, this, () => this.run(...args))
    }
}
