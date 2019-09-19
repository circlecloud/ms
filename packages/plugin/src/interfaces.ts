import { injectable, postConstruct } from "inversify";

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
        name: string;
        version: string;
        author: string | string[];
        source: string;
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
    }
    export type PluginLike = Plugin | string;
}
