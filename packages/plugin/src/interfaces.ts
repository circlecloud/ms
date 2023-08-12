import { server, MiaoScriptConsole, event, plugin, task, command } from "@ccms/api"
import { injectable, inject, postConstruct, Autowired } from "@ccms/container"
import { getPluginMetadata } from "./utils"
import { PluginEventManager } from "./event"
import { PluginCommandManager } from "./command"

const File = Java.type('java.io.File')

export namespace interfaces {
    @injectable()
    export abstract class Plugin implements plugin.Plugin {
        public description: plugin.PluginMetadata
        public logger: MiaoScriptConsole
        @inject(server.Console)
        private Console: MiaoScriptConsole
        @Autowired()
        private taskManager: task.TaskManager
        @Autowired()
        private eventManager: PluginEventManager
        @Autowired()
        private commandManager: PluginCommandManager

        constructor() {
            this.description = getPluginMetadata(this)
        }

        @postConstruct()
        private initialize() {
            // @ts-ignore
            this.logger = new this.Console(this.description.prefix || this.description.name)
        }

        public getDataFolder() {
            let parent = new File(this.description.source).parent
            let dataFolder = new File(parent, this.description.name)
            return dataFolder.getAbsolutePath()
        }

        /**
         * 注册命令
         * @param executor 命令执行器
         */
        public registryCommand(executor: any) {
            this.commandManager.registryCommand(this, executor)
        }
        /**
         * 注销命令
         * @param executor 命令执行器
         */
        public unregistryCommand(executor: any) {
            this.commandManager.unregistryCommand(this, executor)
        }
        /**
         * 注册事件
         * @param listener 事件监听器
         */
        public registryListener(listener: any) {
            this.eventManager.registryListener(this, listener)
        }
        /**
         * 注销事件
         * @param listener 事件监听器
         */
        public unregistryListener(listener: any) {
            this.eventManager.unregistryListener(this, listener)
        }
        /**
         * 创建任务
         * @param func 任务内容
         * @returns 任务
         */
        public createTask(func: Function) {
            return this.taskManager.create(func, this)
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
        /**
         * 自动化主命令
         */
        autoMain?: boolean
        /**
         * 子命令权限效验
         */
        permission?: boolean | string
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
        /**
         * 依赖插件 没有就不加载
         */
        plugins?: string[]
    }
    export interface ConfigMetadata extends plugin.BaseMetadata {
        /**
         * 配置文件版本号
         */
        version?: number
        /**
         * 默认配置
         */
        default?: any
        /**
         * 实体变量名称
         */
        variable?: string
        /**
         * 配置文件格式 默认 yml
         */
        format?: string
        /**
         * 是否合并默认配置
         */
        migrate?: boolean
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
    export interface PlayerDataMetadata extends plugin.BaseMetadata {
        /**
         * 配置文件版本号
         */
        version?: number
        /**
         * 默认配置
         */
        default?: any
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
         * 配置文件名称 默认玩家名称
         */
        filename?: "username" | "uuid"
        /**
         * 配置文件目录 默认 playerdata
         */
        dir?: string
        /**
         * 配置文件子目录 默认为空
         */
        subdir?: string
    }
}
