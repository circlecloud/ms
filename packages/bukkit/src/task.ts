import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container';

const Bukkit = Java.type('org.bukkit.Bukkit');
const BukkitRunnable = Java.type('org.bukkit.scheduler.BukkitRunnable');
const Callable = Java.type('java.util.concurrent.Callable')

@provideSingleton(task.TaskManager)
export class BukkitTaskManager implements task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    create(func: Function): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !'); };
        return new BukkitTask(this.pluginInstance, func);
    }
    callSyncMethod(func: Function): any {
        return Bukkit.getScheduler().callSyncMethod(this.pluginInstance, new Callable({ call: () => func() })).get()
    }
    disable() {
        Bukkit.getScheduler().cancelTasks(this.pluginInstance);
    }
}

export class BukkitTask extends task.Task {
    submit(...args: any[]): task.Cancelable {
        let run = new BukkitRunnable({ run: () => this.run(...args) })
        let funcName = `runTask${this.interval ? 'Timer' : 'Later'}${this.isAsync ? 'Asynchronously' : ''}`
        if (this.interval) {
            return run[funcName](this.plugin, this.laterTime, this.interval)
        } else {
            return run[funcName](this.plugin, this.laterTime)
        }
    }
}
