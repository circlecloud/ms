import { plugin, interfaces, cmd } from "@ms/plugin";

import http from '@ms/common/dist/http'

@plugin({ name: 'MiaoPluginManager', prefix: 'MPM', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class MiaoPluginManager extends interfaces.Plugin {
    @cmd()
    mpman(sender: any, command: string, args: string[]) {

    }
    @cmd()
    bktman(sender: any, command: string, args: string[]) {
        switch (args[0]) {
            case "s":
            case "search":
                if (args[1]) {
                    let result = http.get('https://servermods.forgesvc.net/servermods/projects?search=' + args[1])
                    for (let item of result) {
                        this.logger.sender(sender, "ID:", item.id, "名称:", item.name, JSON.stringify(item))
                    }
                }
                break;
            default:
        }
    }
}
