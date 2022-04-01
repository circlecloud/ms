import { task, plugin } from '@ccms/api'
import { provideSingleton } from '@ccms/container'

const Bukkit = Java.type('org.bukkit.Bukkit')
const BukkitRunnable = Java.type('org.bukkit.scheduler.BukkitRunnable')
const Callable = Java.type('java.util.concurrent.Callable')

@provideSingleton(task.TaskManager)
export class BukkitTaskManager extends task.TaskManager {
    create0(owner: plugin.Plugin, func: Function, id: number): task.Task {
        return new BukkitTask(owner, func, id)
    }
    callSyncMethod(func: Function): any {
        return Bukkit.getScheduler().callSyncMethod(base.getInstance(), new Callable({ call: () => func() })).get()
    }
    disable0() {
        Bukkit.getScheduler().cancelTasks(base.getInstance())
    }
}

export class BukkitTask extends task.Task {
    submit0(...args: any[]): task.Cancelable {
        let run = new BukkitRunnable({ run: () => this.run(...args) })
        let suffix = this.isAsync ? 'Asynchronously' : ''
        if (this.interval) {
            return run[`runTaskTimer${suffix}`](base.getInstance(), this.laterTime, this.interval)
        } else {
            return run[`runTaskLater${suffix}`](base.getInstance(), this.laterTime)
        }
    }
}
