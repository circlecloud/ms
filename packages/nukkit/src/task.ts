import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

const NukkitRunnable = Java.type('cn.nukkit.scheduler.NukkitRunnable')

@provideSingleton(task.TaskManager)
export class NukkitTaskManager extends task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    create0(func: Function): task.Task {
        return new NukkitTask(this.pluginInstance, func)
    }
    callSyncMethod(func: Function): any {
        return func()
    }
    disable0() {
        base.getInstance().getServer().getScheduler().cancelTask(this.pluginInstance)
    }
}

export class NukkitTask extends task.Task {
    submit0(...args: any[]): task.Cancelable {
        let run = new NukkitRunnable({ run: () => this.run(...args) })
        let funcName = `runTask${this.interval ? 'Timer' : 'Later'}${this.isAsync ? 'Asynchronously' : ''}`
        if (this.interval) {
            return run[funcName](this.plugin, this.laterTime, this.interval)
        } else {
            return run[funcName](this.plugin, this.laterTime)
        }
    }
}
