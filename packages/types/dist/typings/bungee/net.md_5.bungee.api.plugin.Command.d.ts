declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    // @ts-ignore
                    abstract class Command extends java.lang.Object {
                        /**
                         * Construct a new command with no permissions or aliases.
                         */
                        // @ts-ignore
                        constructor(name: string)
                        /**
                         * Construct a new command.
                         */
                        // @ts-ignore
                        constructor(name: string, permission: string, aliases: string)
                        /**
                         * Execute this command with the specified sender and arguments.
                         */
                        // @ts-ignore
                        public abstract execute(sender: net.md_5.bungee.api.CommandSender, args: string): void;
                        /**
                         * Check if this command can be executed by the given sender.
                         */
                        // @ts-ignore
                        public hasPermission(sender: net.md_5.bungee.api.CommandSender): boolean;
                        // @ts-ignore
                        public getName(): string;
                        // @ts-ignore
                        public getPermission(): string;
                        // @ts-ignore
                        public getAliases(): java.lang.String[];
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
