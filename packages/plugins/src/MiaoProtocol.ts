import { task, server, constants } from "@ccms/api";
import { inject } from "@ccms/container";
import { plugin, interfaces, cmd } from "@ccms/plugin";

import http from '@ccms/common/dist/http'
import * as fs from '@ccms/common/dist/fs'

@plugin({ name: 'MiaoProtocol', prefix: 'MPTL', version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoProtocol extends interfaces.Plugin {
    @inject(server.Server)
    private server: server.Server;
    @inject(task.TaskManager)
    private taskManager: task.TaskManager;

    private pipeline: any

    enable() {
        let count = 0
        let wait = this.taskManager.create(() => {
            this.pipeline = this.server.getNettyPipeline()
            if (this.pipeline) {
                wait.cancel()
            } else if (count++ > 30) {
                wait.cancel()
                this.logger.console('§cNetty通道注入失败 §4所有功能将无法使用！')
            }
        }).later(20).timer(40).submit()
    }

}
