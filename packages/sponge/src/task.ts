import { task, plugin } from '@ccms/api'
import { inject, provideSingleton, postConstruct } from '@ccms/container'

const Sponge = Java.type("org.spongepowered.api.Sponge")
const Task = Java.type("org.spongepowered.api.scheduler.Task")
const Consumer = Java.type('java.util.function.Consumer')
const Callable = Java.type('java.util.concurrent.Callable')
const TimeUnit = Java.type('java.util.concurrent.TimeUnit')

@provideSingleton(task.TaskManager)
export class SpongeTaskManager extends task.TaskManager {
    private syncExecutor: any

    @postConstruct()
    initialize() {
        this.syncExecutor = Sponge.getScheduler().createSyncExecutor(base.getInstance())
    }

    create0(owner: plugin.Plugin, func: Function, id: number): task.Task {
        return new SpongeTask(owner, func, id)
    }
    callSyncMethod(func: Function): any {
        return this.syncExecutor.execute(() => func())
    }
    disable0() {
        Sponge.getScheduler().getScheduledTasks(base.getInstance()).forEach((task: task.Cancelable) => task.cancel())
    }
}

export class SpongeTask extends task.Task {
    submit0(...args: any[]): task.Cancelable {
        let run = Task.builder().execute(new Consumer({ accept: () => this.run(...args) }))
        if (this.isAsync) { run.async() }
        if (this.laterTime) { run.delayTicks(this.laterTime) }
        if (this.interval) { run.intervalTicks(this.interval) }
        return run.submit(base.getInstance())
    }
}
