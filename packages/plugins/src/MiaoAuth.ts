/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { plugin, server } from '@ccms/api'
import { Autowired } from '@ccms/container'
import { Cmd, interfaces, JSPlugin, Tab } from '@ccms/plugin'

import type { MiaoReward } from './MiaoReward'
import * as fs from '@ccms/common/dist/fs'

@JSPlugin({ version: '1.0.0', author: 'MiaoWoo', source: __filename, depends: ['MiaoReward'] })
export class MiaoAuth extends interfaces.Plugin {
    @Autowired()
    private Server: server.Server
    @Autowired()
    private pluginManager: plugin.PluginManager

    private MiaoReward: MiaoReward

    load() {
    }

    enable() {
        this.MiaoReward = this.pluginManager.getPlugin('MiaoReward') as MiaoReward
        if (!this.MiaoReward) { return this.logger.error('当前脚本插件需要 MiaoReward 作为前置插件!') }

    }

    disable() {
    }

    @Cmd({ autoMain: true })
    msma() { }

    cmdbind(sender: org.bukkit.entity.Player) {
        if (!sender.getItemInHand) { return this.logger.sender(sender, '§4控制台无法执行此命令!') }
        if (!this.MiaoReward.serverInfo) { return this.logger.sender(sender, '§4当前服务器尚未配置 请联系管理员配置MiaoReward!') }
        this.MiaoReward.scanAuth(sender, 'bind', { title: '账号绑定', content: '是否绑定' }, (token, user) => {

        }, () => {

        })
    }

    @Tab()
    tabmsma() { }
}
