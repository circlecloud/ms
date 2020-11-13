import { plugin, task } from '@ccms/api'
import { provideSingleton, Autowired } from '@ccms/container'

@provideSingleton(PluginTaskManager)
export class PluginTaskManager {
    @Autowired()
    private taskManager: task.TaskManager

    constructor() {
        process.on('plugin.after.disable', this.cancelTask.bind(this))
    }

    private cancelTask(pluginInstance: plugin.Plugin) {
        this.taskManager.disable(pluginInstance)
    }
}
