import { injectable } from "@ms/container";

export namespace interfaces {
    @injectable()
    export abstract class Plugin {
        public description: PluginMetadata;
        public logger: Console;

        public load() { }
        public enable() { }
        public disable() { }
    }
    export interface PluginMetadata {
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
    export interface CommandMetadata {
        name?: string;
        executor?: string;
        paramtypes?: string[];
    }
    export interface TabCompleterMetadata {
        name?: string;
        executor?: string;
        paramtypes?: string[];
    }
    export interface ListenerMetadata {
        name?: string;
        executor?: string;
        servertype?: string;
    }
    export type PluginLike = Plugin | string;
}
