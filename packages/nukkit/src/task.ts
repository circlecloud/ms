import { task, plugin } from '@ms/api'
import { injectable, inject } from '@ms/container';

const Nukkit: cn.nukkit.Server = base.getInstance().getServer();
const NukkitRunnable = Java.type('cn.nukkit.scheduler.NukkitRunnable');
const Callable = Java.type('java.util.concurrent.Callable')

@injectable()
export class NukkitTaskManager implements task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    create(func: Function): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !'); };
        return new NukkitTask(this.pluginInstance, func);
    }
    callSyncMethod(func: Function): any {
        return func()
    }
}

export class NukkitTask extends task.Task {
    submit(): task.Cancelable {
        let run = new NukkitRunnable({
            run: () => this.run()
        })
        let funcName = `runTask${this.interval ? 'Timer' : 'Later'}${this.isAsync ? 'Asynchronously' : ''}`
        if (this.interval) {
            run[funcName](this.plugin, this.laterTime, this.interval);
        } else {
            run[funcName](this.plugin, this.laterTime);
        }
        return run;
    }
}
