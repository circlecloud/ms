declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    // @ts-ignore
                     class PluginDescription extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(name: string, main: string, version: string, author: string, depends: java.util.Set, softDepends: java.util.Set, file: java.io.File, description: string)
                        /**
                         * Friendly name of the plugin.
                         */
                        // @ts-ignore
                        public getName(): string;
                        /**
                         * Plugin main class. Needs to extend {@link Plugin}.
                         */
                        // @ts-ignore
                        public getMain(): string;
                        /**
                         * Plugin version.
                         */
                        // @ts-ignore
                        public getVersion(): string;
                        /**
                         * Plugin author.
                         */
                        // @ts-ignore
                        public getAuthor(): string;
                        /**
                         * Plugin hard dependencies.
                         */
                        // @ts-ignore
                        public getDepends(): java.util.Set;
                        /**
                         * Plugin soft dependencies.
                         */
                        // @ts-ignore
                        public getSoftDepends(): java.util.Set;
                        /**
                         * File we were loaded from.
                         */
                        // @ts-ignore
                        public getFile(): java.io.File;
                        /**
                         * Optional description.
                         */
                        // @ts-ignore
                        public getDescription(): string;
                        /**
                         * Friendly name of the plugin.
                         */
                        // @ts-ignore
                        public setName(name: string): void;
                        /**
                         * Plugin main class. Needs to extend {@link Plugin}.
                         */
                        // @ts-ignore
                        public setMain(main: string): void;
                        /**
                         * Plugin version.
                         */
                        // @ts-ignore
                        public setVersion(version: string): void;
                        /**
                         * Plugin author.
                         */
                        // @ts-ignore
                        public setAuthor(author: string): void;
                        /**
                         * Plugin hard dependencies.
                         */
                        // @ts-ignore
                        public setDepends(depends: java.util.Set): void;
                        /**
                         * Plugin soft dependencies.
                         */
                        // @ts-ignore
                        public setSoftDepends(softDepends: java.util.Set): void;
                        /**
                         * File we were loaded from.
                         */
                        // @ts-ignore
                        public setFile(file: java.io.File): void;
                        /**
                         * Optional description.
                         */
                        // @ts-ignore
                        public setDescription(description: string): void;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
