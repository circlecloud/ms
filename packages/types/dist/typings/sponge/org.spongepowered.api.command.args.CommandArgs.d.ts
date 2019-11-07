// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                     class CommandArgs extends java.lang.Object {
                        /**
                         * Create a new CommandArgs instance with the given raw input and arguments.
                         */
                        // @ts-ignore
                        constructor(rawInput: string, args: java.util.List)
                        /**
                         * Return whether more arguments remain to be read.
                         */
                        // @ts-ignore
                        public hasNext(): boolean;
                        /**
                         * Try to read the next argument without advancing the current index.
                         */
                        // @ts-ignore
                        public peek(): string;
                        /**
                         * Try to read the next argument, advancing the current index if successful.
                         */
                        // @ts-ignore
                        public next(): string;
                        /**
                         * Try to read the next argument, advancing the current index if successful
                         * or returning an absent optional if not.
                         */
                        // @ts-ignore
                        public nextIfPresent(): java.util.Optional;
                        /**
                         * Create a parse exception with the provided message which has the position
                         * of the last parsed argument attached. The returned exception must be
                         * thrown at the target
                         */
                        // @ts-ignore
                        public createError(message: org.spongepowered.api.text.Text): org.spongepowered.api.command.args.ArgumentParseException;
                        /**
                         * Gets a list of all arguments as a string. The returned list is immutable.
                         */
                        // @ts-ignore
                        public getAll(): java.util.List;
                        /**
                         * Return this arguments object's current state. Can be used to reset with
                         * the {@link #setState(Object)} method.
                         */
                        // @ts-ignore
                        public getState(): java.lang.Object;
                        /**
                         * Restore the arguments object's state to a state previously used.
                         */
                        // @ts-ignore
                        public setState(state: java.lang.Object): void;
                        /**
                         * Return the raw string used to provide input to this arguments object.
                         */
                        // @ts-ignore
                        public getRaw(): string;
                        /**
                         * Get an arg at the specified position.
                         */
                        // @ts-ignore
                        public get(index: number): string;
                        /**
                         * Insert an arg as the next arg to be returned by {@link #next()}.
                         */
                        // @ts-ignore
                        public insertArg(value: string): void;
                        /**
                         * Remove the arguments parsed between startState and endState.
                         */
                        // @ts-ignore
                        public removeArgs(startState: java.lang.Object, endState: java.lang.Object): void;
                        /**
                         * Remove the arguments parsed between two snapshots.
                         */
                        // @ts-ignore
                        public removeArgs(startSnapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot, endSnapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot): void;
                        /**
                         * Returns the number of arguments
                         */
                        // @ts-ignore
                        public size(): number;
                        /**
                         * Gets the current position in raw input.
                         */
                        // @ts-ignore
                        public getRawPosition(): number;
                        /**
                         * Gets a snapshot of the data inside this context to allow it to be
                         * restored later.
                         */
                        // @ts-ignore
                        public getSnapshot(): org.spongepowered.api.command.args.CommandArgs.Snapshot;
                        /**
                         * Resets a {@link CommandArgs} to a previous state using a previously
                         * created {@link CommandArgs.Snapshot}.
                         */
                        // @ts-ignore
                        public applySnapshot(snapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot): void;
                        /**
                         * Resets a {@link CommandArgs} to a previous state using a previously
                         * created {@link CommandArgs.Snapshot}.
                         * <p>If resetArgs is set to false, this snapshot will not reset the
                         * argument list to its previous state, only the index.</p>
                         */
                        // @ts-ignore
                        public applySnapshot(snapshot: org.spongepowered.api.command.args.CommandArgs.Snapshot, resetArgs: boolean): void;
                    }
                }
            }
        }
    }
}
