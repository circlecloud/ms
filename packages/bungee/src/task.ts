import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

var Runnable = Java.type('java.lang.Runnable')
let TimeUnit = Java.type('java.util.concurrent.TimeUnit')

@provideSingleton(task.TaskManager)
export class BungeeTaskManager extends task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    create(func: Function, plugin?: plugin.Plugin): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !') };
        let task = new BungeeTask(this.pluginInstance, func)
        if (plugin) { return this.pluginCreate(plugin, task) }
        return task
    }
    callSyncMethod(func: Function): any {
        return func()
    }
    disable(plugin?: plugin.Plugin) {
        if (plugin) { return this.pluginDisable(plugin) }
        this.pluginInstance.getProxy().getScheduler().cancel(this.pluginInstance)
    }
}

export class BungeeTask extends task.Task {
    submit0(...args: any[]): task.Cancelable {
        let run = new Runnable({ run: () => this.run(...args) })
        if (this.isAsync) {
            return this.plugin.getProxy().getScheduler().runAsync(this.plugin, run)
        }
        if (this.interval) {
            return this.plugin.getProxy().getScheduler().schedule(this.plugin, run, this.laterTime * 50, this.interval * 50, TimeUnit.MILLISECONDS)
        } else {
            return this.plugin.getProxy().getScheduler().schedule(this.plugin, run, this.laterTime * 50, TimeUnit.MILLISECONDS)
        }
    }
}
