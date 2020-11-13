import { task, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

var Runnable = Java.type('java.lang.Runnable')
let TimeUnit = Java.type('java.util.concurrent.TimeUnit')

@provideSingleton(task.TaskManager)
export class BungeeTaskManager extends task.TaskManager {
    create0(owner: plugin.Plugin, func: Function, id: number): task.Task {
        return new BungeeTask(owner, func, id)
    }
    callSyncMethod(func: Function): any {
        return func()
    }
    disable0() {
        base.getInstance().getProxy().getScheduler().cancel(base.getInstance())
    }
}

export class BungeeTask extends task.Task {
    submit0(...args: any[]): task.Cancelable {
        let run = new Runnable({ run: () => this.run(...args) })
        if (this.isAsync) {
            return base.getInstance().getProxy().getScheduler().runAsync(base.getInstance(), run)
        }
        if (this.interval) {
            return base.getInstance().getProxy().getScheduler().schedule(base.getInstance(), run, this.laterTime * 50, this.interval * 50, TimeUnit.MILLISECONDS)
        } else {
            return base.getInstance().getProxy().getScheduler().schedule(base.getInstance(), run, this.laterTime * 50, TimeUnit.MILLISECONDS)
        }
    }
}
