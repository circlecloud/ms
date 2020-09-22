import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

const Bukkit = Java.type('org.bukkit.Bukkit')
const BukkitRunnable = Java.type('org.bukkit.scheduler.BukkitRunnable')
const Callable = Java.type('java.util.concurrent.Callable')

@provideSingleton(task.TaskManager)
export class BukkitTaskManager extends task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    create0(func: Function): task.Task {
        return new BukkitTask(this.pluginInstance, func)
    }
    callSyncMethod(func: Function): any {
        return Bukkit.getScheduler().callSyncMethod(this.pluginInstance, new Callable({ call: () => func() })).get()
    }
    disable0() {
        Bukkit.getScheduler().cancelTasks(this.pluginInstance)
    }
}

export class BukkitTask extends task.Task {
    submit0(...args: any[]): task.Cancelable {
        let run = new BukkitRunnable({ run: () => this.run(...args) })
        let funcName = `runTask${this.interval ? 'Timer' : 'Later'}${this.isAsync ? 'Asynchronously' : ''}`
        if (this.interval) {
            return run[funcName](this.plugin, this.laterTime, this.interval)
        } else {
            return run[funcName](this.plugin, this.laterTime)
        }
    }
}
