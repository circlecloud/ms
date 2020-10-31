import { server, MiaoScriptConsole, event, plugin } from "@ccms/api"
import { injectable, inject, postConstruct } from "@ccms/container"
import { getPluginMetadata } from "./utils"

export namespace interfaces {
    @injectable()
    export abstract class Plugin implements plugin.Plugin {
        public description: plugin.PluginMetadata
        public logger: Console
        @inject(server.Console)
        private Console: MiaoScriptConsole

        constructor() {
            this.description = getPluginMetadata(this)
        }

        @postConstruct()
        private initialize() {
            // @ts-ignore
            this.logger = new this.Console(this.description.prefix || this.description.name)
        }

        public load() { }
        public enable() { }
        public disable() { }
    }
    export interface ExecMetadata extends plugin.BaseMetadata {
        /**
         * 执行器所在对象 用于绑定this
         */
        target?: any
        /**
         * 执行器
         */
        executor?: string
    }
    export interface CommandMetadata extends ExecMetadata {
        /**
         * 命令别名
         */
        alias?: string[]
        /**
         * 命令描述
         */
        description?: string
        /**
         * 参数列表
         */
        paramtypes?: string[]
    }
    export interface ListenerMetadata extends ExecMetadata {
        /**
         * 监听优先级
         */
        priority?: event.EventPriority
        /**
         * 是否忽略已取消的事件
         */
        ignoreCancel?: boolean
    }
    export interface ConfigMetadata extends plugin.BaseMetadata {
        /**
         * 配置文件版本号
         */
        version?: number
        /**
         * 实体变量名称
         */
        variable?: string
        /**
         * 配置文件格式 默认 yml
         */
        format?: string
        /**
         * 自动保存 默认为 false
         */
        autosave?: boolean
        /**
         * 配置文件名称
         */
        filename?: string
        /**
         * 配置文件全路径
         */
        file?: any
    }
}
