import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'
import thread_pool from '@ccms/common/dist/thread-pool'

const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const AtomicBoolean = Java.type("java.util.concurrent.atomic.AtomicBoolean")
const Thread = Java.type('java.lang.Thread')

@provideSingleton(task.TaskManager)
export class SpringTaskManager extends task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    private taskId: any
    private tasks: { [s: string]: task.Cancelable }
    private executor: java.util.concurrent.ThreadPoolExecutor

    constructor() {
        super()
        this.taskId = new AtomicInteger(0)
        this.tasks = {}
        this.executor = thread_pool.create({
            groupName: '@ccms/spring'
        })
    }

    create0(func: Function): task.Task {
        return new SpringTask(this.pluginInstance, func, this)
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

    constructor(plugin: any, func: Function, taskManager: SpringTaskManager) {
        super(plugin, func)
        this.id = taskManager.nextId()
        this.taskManager = taskManager
    }

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

    cancel0(): any {
        var wasRunning = this.running.getAndSet(false)
        if (wasRunning) {
            this.taskManager.cancel(this.id)
        }
    }

    submit0(...args: any[]) {
        this.taskManager.submit(this.id, this, () => this.run(...args))
        return {
            cancel: () => {
                return this.cancel0()
            }
        }
    }
}
