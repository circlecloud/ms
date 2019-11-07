declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                     class CommandContext extends java.lang.Object {
                        /**
                         * Create a new empty CommandContext.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static TARGET_BLOCK_ARG: string;
                        // @ts-ignore
                        public static TAB_COMPLETION: string;
                        /**
                         * Gets all values for the given argument. May return an empty list if no
                         * values are present.
                         */
                        // @ts-ignore
                        public getAll(key: string): java.util.Collection;
                        /**
                         * Gets all values for the given argument. May return an empty list if no
                         * values are present.
                         */
                        // @ts-ignore
                        public getAll(key: org.spongepowered.api.text.Text): java.util.Collection;
                        /**
                         * Gets the value for the given key if the key has only one value.
                         * <p>An empty {@link Optional} indicates that there are either zero or more
                         * than one values for the given key. Use {@link #hasAny(Text)} to verify
                         * which.</p>
                         */
                        // @ts-ignore
                        public getOne(key: string): java.util.Optional;
                        /**
                         * Gets the value for the given key if the key has only one value.
                         * <p>An empty {@link Optional} indicates that there are either zero or more
                         * than one values for the given key. Use {@link #hasAny(Text)} to verify
                         * which.</p>
                         */
                        // @ts-ignore
                        public getOne(key: org.spongepowered.api.text.Text): java.util.Optional;
                        /**
                         * Gets the value for the given key if the key has only one value, throws an
                         * exception otherwise.
                         */
                        // @ts-ignore
                        public requireOne(key: string): java.lang.Object;
                        /**
                         * Gets the value for the given key if the key has only one value, throws an
                         * exception otherwise.
                         */
                        // @ts-ignore
                        public requireOne(key: org.spongepowered.api.text.Text): java.lang.Object;
                        /**
                         * Insert an argument into this context.
                         */
                        // @ts-ignore
                        public putArg(key: string, value: java.lang.Object): void;
                        /**
                         * Insert an argument into this context.
                         */
                        // @ts-ignore
                        public putArg(key: org.spongepowered.api.text.Text, value: java.lang.Object): void;
                        /**
                         * Perform a permissions check, throwing an exception if the required
                         * permissions are not present.
                         */
                        // @ts-ignore
                        public checkPermission(commander: org.spongepowered.api.command.CommandSource, permission: string): void;
                        /**
                         * Returns whether this context has any value for the given argument key.
                         */
                        // @ts-ignore
                        public hasAny(key: string): boolean;
                        /**
                         * Returns whether this context has any value for the given argument key.
                         */
                        // @ts-ignore
                        public hasAny(key: org.spongepowered.api.text.Text): boolean;
                        /**
                         * Gets a snapshot of the data inside this context to allow it to be
                         * restored later.
                         * <p>This is only guaranteed to create a <em>shallow copy</em> of the
                         * backing store. If any value is mutable, any changes to that value
                         * will be reflected in this snapshot. It is therefore not recommended
                         * that you keep this snapshot around for longer than is necessary.</p>
                         */
                        // @ts-ignore
                        public createSnapshot(): org.spongepowered.api.command.args.CommandContext.Snapshot;
                        /**
                         * Resets a {@link CommandContext} to a previous state using a previously
                         * created {@link Snapshot}.
                         */
                        // @ts-ignore
                        public applySnapshot(snapshot: org.spongepowered.api.command.args.CommandContext.Snapshot): void;
                    }
                }
            }
        }
    }
}
