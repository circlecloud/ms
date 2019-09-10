import { injectable, postConstruct } from "inversify";
import { getPluginMetadata } from './utils'

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
        target?: any;
    }
}
