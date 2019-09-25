declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    // @ts-ignore
                     class Cause {
                        /**
                         * Creates a new {@link Builder} to make a new {@link Cause}.
                         */
                        // @ts-ignore
                        public static builder(): org.spongepowered.api.event.cause.Cause.Builder;
                        /**
                         * Constructs a new cause with the specified event context and cause.
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, cause: any): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Constructs a new cause with the specified event context and causes.
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, cause: any, causes: any): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Constructs a new cause with the specified event context and causes.
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, iterable: any): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Gets the event context relating to this cause.
                         */
                        // @ts-ignore
                        public getContext(): org.spongepowered.api.event.cause.EventContext;
                        /**
                         * Gets the root {@link Object} of this cause.
                         */
                        // @ts-ignore
                        public root(): any;
                        /**
                         * Gets the first <code>T</code> object of this {@link Cause}, if available.
                         */
                        // @ts-ignore
                        public first(target: any): any;
                        /**
                         * Gets the last object instance of the {@link Class} of type
                         * <code>T</code>.
                         */
                        // @ts-ignore
                        public last(target: any): any;
                        /**
                         * Gets the object immediately before the object that is an instance of the
                         * {@link Class} passed in.
                         */
                        // @ts-ignore
                        public before(clazz: any): any;
                        /**
                         * Gets the object immediately after the object that is an instance of the
                         * {@link Class} passed in.
                         */
                        // @ts-ignore
                        public after(clazz: any): any;
                        /**
                         * Returns whether the target class matches any object of this {@link Cause}
                         * .
                         */
                        // @ts-ignore
                        public containsType(target: any): boolean;
                        /**
                         * Checks if this cause contains of any of the provided {@link Object}. This
                         * is the equivalent to checking based on {@link #equals(Object)} for each
                         * object in this cause.
                         */
                        // @ts-ignore
                        public contains(object: any): boolean;
                        /**
                         * Gets an {@link ImmutableList} of all objects that are instances of the
                         * given {@link Class} type <code>T</code>.
                         */
                        // @ts-ignore
                        public allOf(target: any): any[] /*java.util.List*/;
                        /**
                         * Gets an immutable {@link List} with all object causes that are not
                         * instances of the provided {@link Class}.
                         */
                        // @ts-ignore
                        public noneOf(ignoredClass: any): any[] /*java.util.List*/;
                        /**
                         * Gets an {@link List} of all causes within this {@link Cause}.
                         */
                        // @ts-ignore
                        public all(): any[] /*java.util.List*/;
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         */
                        // @ts-ignore
                        public with(additional: any): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         */
                        // @ts-ignore
                        public with(additional: any, additionals: any): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         */
                        // @ts-ignore
                        public with(iterable: any): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Merges this cause with the other cause.
                         */
                        // @ts-ignore
                        public with(cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.cause.Cause;
                        // @ts-ignore
                        public iterator(): any;
                        // @ts-ignore
                        public equals(object: any): boolean;
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
