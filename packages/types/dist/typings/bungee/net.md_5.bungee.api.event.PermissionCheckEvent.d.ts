declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    // @ts-ignore
                     class PermissionCheckEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.CommandSender, permission: string, hasPermission: boolean)
                        // @ts-ignore
                        public hasPermission(): boolean;
                        /**
                         * The command sender being checked for a permission.
                         */
                        // @ts-ignore
                        public getSender(): net.md_5.bungee.api.CommandSender;
                        /**
                         * The permission to check.
                         */
                        // @ts-ignore
                        public getPermission(): string;
                        /**
                         * The outcome of this permission check.
                         */
                        // @ts-ignore
                        public setHasPermission(hasPermission: boolean): void;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
