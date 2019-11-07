declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    // @ts-ignore
                     class Cause extends java.lang.Object {
                        /**
                         * Creates a new {@link Builder} to make a new {@link Cause}.
                         */
                        // @ts-ignore
                        public static builder(): org.spongepowered.api.event.cause.Cause.Builder;
                        /**
                         * Constructs a new cause with the specified event context and cause.
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, cause: java.lang.Object): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Constructs a new cause with the specified event context and causes.
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, cause: java.lang.Object, causes: java.lang.Object): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Constructs a new cause with the specified event context and causes.
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, iterable: java.lang.Iterable): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Gets the event context relating to this cause.
                         */
                        // @ts-ignore
                        public getContext(): org.spongepowered.api.event.cause.EventContext;
                        /**
                         * Gets the root {@link Object} of this cause.
                         */
                        // @ts-ignore
                        public root(): java.lang.Object;
                        /**
                         * Gets the first <code>T</code> object of this {@link Cause}, if available.
                         */
                        // @ts-ignore
                        public first(target: java.lang.Class): java.util.Optional;
                        /**
                         * Gets the last object instance of the {@link Class} of type
                         * <code>T</code>.
                         */
                        // @ts-ignore
                        public last(target: java.lang.Class): java.util.Optional;
                        /**
                         * Gets the object immediately before the object that is an instance of the
                         * {@link Class} passed in.
                         */
                        // @ts-ignore
                        public before(clazz: java.lang.Class): java.util.Optional;
                        /**
                         * Gets the object immediately after the object that is an instance of the
                         * {@link Class} passed in.
                         */
                        // @ts-ignore
                        public after(clazz: java.lang.Class): java.util.Optional;
                        /**
                         * Returns whether the target class matches any object of this {@link Cause}
                         * .
                         */
                        // @ts-ignore
                        public containsType(target: java.lang.Class): boolean;
                        /**
                         * Checks if this cause contains of any of the provided {@link Object}. This
                         * is the equivalent to checking based on {@link #equals(Object)} for each
                         * object in this cause.
                         */
                        // @ts-ignore
                        public contains(object: java.lang.Object): boolean;
                        /**
                         * Gets an {@link ImmutableList} of all objects that are instances of the
                         * given {@link Class} type <code>T</code>.
                         */
                        // @ts-ignore
                        public allOf(target: java.lang.Class): java.util.List;
                        /**
                         * Gets an immutable {@link List} with all object causes that are not
                         * instances of the provided {@link Class}.
                         */
                        // @ts-ignore
                        public noneOf(ignoredClass: java.lang.Class): java.util.List;
                        /**
                         * Gets an {@link List} of all causes within this {@link Cause}.
                         */
                        // @ts-ignore
                        public all(): java.util.List;
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         */
                        // @ts-ignore
                        public with(additional: java.lang.Object): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         */
                        // @ts-ignore
                        public with(additional: java.lang.Object, additionals: java.lang.Object): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         */
                        // @ts-ignore
                        public with(iterable: java.lang.Iterable): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Merges this cause with the other cause.
                         */
                        // @ts-ignore
                        public with(cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.cause.Cause;
                        // @ts-ignore
                        public iterator(): java.util.Iterator;
                        // @ts-ignore
                        public equals(object: java.lang.Object): boolean;
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
