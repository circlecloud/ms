import { task, plugin } from '@ms/api'
import { inject, provideSingleton } from '@ms/container';

var Runnable = Java.type('java.lang.Runnable')
let TimeUnit = Java.type('java.util.concurrent.TimeUnit')

@provideSingleton(task.TaskManager)
export class BungeeTaskManager implements task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    create(func: Function): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !'); };
        return new BungeeTask(this.pluginInstance, func);
    }
    callSyncMethod(func: Function): any {
        return func();
    }
}

export class BungeeTask extends task.Task {
    submit(): task.Cancelable {
        let run = new Runnable({ run: () => this.run() })
        if (this.isAsync) {
            return this.plugin.getProxy().getScheduler().runAsync(this.plugin, run)
        }
        if (this.interval) {
            return this.plugin.getProxy().getScheduler().schedule(this.plugin, run, this.laterTime, this.interval, TimeUnit.MILLISECONDS)
        } else {
            return this.plugin.getProxy().getScheduler().schedule(this.plugin, run, this.laterTime, TimeUnit.MILLISECONDS)
        }
    }
}
