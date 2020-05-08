import { server, MiaoScriptConsole, event } from "@ccms/api";
import { injectable, inject, postConstruct } from "@ccms/container";
import { getPluginMetadata } from "./utils";

export namespace interfaces {
    @injectable()
    export abstract class Plugin {
        public description: PluginMetadata;
        public logger: Console;
        @inject(server.Console)
        private Console: MiaoScriptConsole;

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
    interface BaseMetadata {
        /**
         * 名称 为空则为对象名称
         */
        name?: string;
        /**
         * 支持的服务器列表 为空则代表所有
         */
        servers?: string[];
    }
    export interface PluginMetadata extends BaseMetadata {
        /**
         * 插件名称
         */
        name: string;
        /**
         * 前缀
         */
        prefix?: string;
        /**
         * 插件版本
         */
        version: string;
        /**
         * 插件版本
         */
        author: string | string[];
        /**
         * 插件源文件 必须指定为 __filename
         */
        source: string;
        /**
         * 插件类型 默认为 ioc 执行 MiaoScript 加载逻辑
         */
        type?: string;
        /**
         * 插件本体
         */
        target?: any;
    }
    export interface ExecMetadata extends BaseMetadata {
        /**
         * 执行器
         */
        executor?: string;
    }
    export interface CommandMetadata extends ExecMetadata {
        /**
         * 参数列表
         */
        paramtypes?: string[];
    }
    export interface ListenerMetadata extends ExecMetadata {
        /**
         * 监听优先级
         */
        priority?: event.EventPriority;
        /**
         * 是否忽略已取消的事件
         */
        ignoreCancel?: boolean;

    }
    export interface ConfigMetadata extends BaseMetadata {
        /**
         * 配置文件版本号
         */
        version?: number;
        /**
         * 实体变量名称
         */
        variable?: string;
        /**
         * 配置文件格式 默认 yml
         */
        format?: string;
    }
    export type PluginLike = Plugin | string;
}
