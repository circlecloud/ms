import { task, plugin } from '@ms/api'
import { injectable, inject } from '@ms/container';

var Consumer = Java.type('java.util.function.Consumer');
var Task = Java.type("org.spongepowered.api.scheduler.Task");

@injectable()
export class SpongeTaskManager implements task.TaskManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    create(func: Function): task.Task {
        if (Object.prototype.toString.call(func) !== "[object Function]") { throw TypeError('第一个参数 Task 必须为 function !'); };
        return new SpongeTask(this.pluginInstance, func);
    }
}

export class SpongeTask extends task.Task {
    submit(): task.Cancelable {
        let run = Task.builder().execute(new Consumer({
            accept: () => this.run()
        }));
        if (this.isAsync) { run.async() }
        if (this.laterTime) { run.delayTicks(this.laterTime) }
        if (this.interval) { run.intervalTicks(this.interval) }
        return run.submit(this.plugin)
    }
}
