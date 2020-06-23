/// <reference types="@javatypes/jdk" />

import { task, server } from "@ccms/api";
import { inject } from "@ccms/container";
import { plugin, interfaces, cmd } from "@ccms/plugin";

import http from '@ccms/common/dist/http'
import * as fs from '@ccms/common/dist/fs'

@plugin({ name: 'MiaoPluginManager', prefix: 'MPM', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class MiaoPluginManager extends interfaces.Plugin {
    @inject(server.Server)
    private server: server.Server;
    @inject(task.TaskManager)
    private taskManager: task.TaskManager;

    private serverPluginsFolder: string;
    private resourceAPIs = new Map<string, ResourceAPI>()

    enable() {
        this.resourceAPIs.set("spigot", new SpigotResourceAPI())
        this.resourceAPIs.set("bukkit", new BukkitResourceAPI())
    }

    @cmd()
    mpman(sender: any, command: string, args: string[]) {

    }
    @cmd()
    bktman(sender: any, command: string, args: string[]) {
        this.main(sender, "bukkit", args[0], args.slice(1))
    }
    @cmd()
    sptman(sender: any, command: string, args: string[]) {
        this.main(sender, "spigot", args[0], args.slice(1))
    }

    main(sender: any, target: string, command: string, args: string[]) {
        let api = this.resourceAPIs.get(target);
        this.taskManager.create(() => {
            switch (command) {
                case "s":
                case "search":
                    this.logger.sender(sender, `§6正在从 §a${api.name()} §6搜索插件 §b${args[0]} §6请稍候...`)
                    let result = api.search(args[0])
                    for (let item of result) {
                        this.logger.sender(sender, "ID:", item.id, "名称:", item.name)
                    }
                    break;
                case "d":
                case "download":
                    http.download(api.download(Number(args[0])), fs.concat(this.server.getPluginsFolder(), args[1] + '.jar'))
                    break;
                default:
            }
        }).async().submit();
    }
}

class Resource {
    id: number;
    name: string;
}

interface ResourceAPI {
    name(): string;
    search(name: string): Resource[];
    download(id: number): string;
}

class BukkitResourceAPI implements ResourceAPI {
    private host = "https://servermods.forgesvc.net/servermods";
    name() {
        return "BukkitDev"
    }
    search(name: string) {
        return http.get(`${this.host}/projects?search=${name}`);
    }
    download(id: number) {
        let list = JSON.parse(http.get(`${this.host}/files?projectIds=${id}`));
        let lastest = list[list.lenght - 1];
        return lastest.downloadUrl;
    }
}

class SpigotResourceAPI implements ResourceAPI {
    private host = "https://api.spiget.org/v2";
    name() {
        return "SpigotMC"
    }
    search(name: string) {
        return http.get(`${this.host}/search/resources/${name}`);
    }
    download(id: number) {
        return `${this.host}/resources/${id}/download`
    }
}