import { server, MiaoScriptConsole } from "@ms/api";
import { METADATA_KEY } from './constants'
import { injectable, inject, postConstruct } from "@ms/container";
import { getPluginMetadata } from "./utils";

export namespace interfaces {
    @injectable()
    export abstract class Plugin {
        public description: PluginMetadata;
        public logger: Console;

        constructor(@inject(server.Console) Console: MiaoScriptConsole) {
            this.description = getPluginMetadata(this)
            // @ts-ignore
            this.logger = new Console(this.description.prefix || this.description.name)
        }

        public load() { }
        public enable() { }
        public disable() { }
    }
    interface BaseMetadata {
        name?: string;
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
         * 插件本体
         */
        target?: any;
    }
    interface ExecMetadata extends BaseMetadata {
        executor?: string;
    }
    export interface CommandMetadata extends ExecMetadata {
        paramtypes?: string[];
    }
    export interface TabCompleterMetadata extends ExecMetadata {
        paramtypes?: string[];
    }
    export interface ListenerMetadata extends ExecMetadata {
    }
    export type PluginLike = Plugin | string;
}
