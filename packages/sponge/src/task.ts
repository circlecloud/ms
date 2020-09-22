import { task, plugin } from '@ccms/api'
import { inject, provideSingleton, postConstruct } from '@ccms/container'

const Sponge = Java.type("org.spongepowered.api.Sponge")
const Task = Java.type("org.spongepowered.api.scheduler.Task")
const Consumer = Java.type('java.util.function.Consumer')
const Callable = Java.type('java.util.concurrent.Callable')
const TimeUnit = Java.type('java.util.concurrent.TimeUnit')

@provideSingleton(task.TaskManager)
export class SpongeTaskManager extends task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private syncExecutor: any

    @postConstruct()
    initialize() {
        this.syncExecutor = Sponge.getScheduler().createSyncExecutor(this.pluginInstance)
    }

    create0(func: Function): task.Task {
        return new SpongeTask(this.pluginInstance, func)
    }
    callSyncMethod(func: Function): any {
        // @ts-ignore
        return this.syncExecutor.schedule(new Callable({ call: () => func() }), java.lang.Long.valueOf(0), TimeUnit.NANOSECONDS).get()
    }
    disable0() {
        Sponge.getScheduler().getScheduledTasks(this.pluginInstance).forEach((task: task.Cancelable) => task.cancel())
    }
}

export class SpongeTask extends task.Task {
    submit0(...args: any[]): task.Cancelable {
        let run = Task.builder().execute(new Consumer({ accept: () => this.run(...args) }))
        if (this.isAsync) { run.async() }
        if (this.laterTime) { run.delayTicks(this.laterTime) }
        if (this.interval) { run.intervalTicks(this.interval) }
        return run.submit(this.plugin)
    }
}
