import { injectable, postConstruct } from "inversify";
import { getPluginMetadata } from './utils'

export namespace interfaces {
    @injectable()
    export abstract class Plugin {
        public description: PluginMetadata;
        protected logger: Console;

        @postConstruct()
        private init() {
            this.logger = global.console;
        }

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
