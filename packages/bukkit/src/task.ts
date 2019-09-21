import { task, plugin } from '@ms/api'
import { injectable, inject } from '@ms/container';

let BukkitRunnable = Java.type('org.bukkit.scheduler.BukkitRunnable');

@injectable()
export class BukkitTaskManager implements task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    create(func: Function): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !'); };
        return new BukkitTask(this.pluginInstance, func);
    }
}

export class BukkitTask extends task.Task {
    submit(): task.Cancelable {
        let run = new BukkitRunnable({
            run: () => this.run()
        })
        let funcName = `runTask${this.interval ? 'Timer' : 'Later'}${this.isAsync ? 'Asynchronously' : ''}`
        if (this.interval) {
            return run[funcName](this.plugin, this.laterTime, this.interval)
        } else if (this.laterTime) {
            return run[funcName](this.plugin, this.laterTime)
        } else {
            return run[funcName](this.plugin)
        }
    }
}
