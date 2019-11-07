// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    // @ts-ignore
                     class Context extends java.lang.Object {
                        /**
                         * Create a new context instance.
                         */
                        // @ts-ignore
                        constructor(key: string, value: string)
                        // @ts-ignore
                        public static USER_KEY: string;
                        // @ts-ignore
                        public static WORLD_KEY: string;
                        // @ts-ignore
                        public static DIMENSION_KEY: string;
                        // @ts-ignore
                        public static REMOTE_IP_KEY: string;
                        // @ts-ignore
                        public static LOCAL_HOST_KEY: string;
                        // @ts-ignore
                        public static LOCAL_IP_KEY: string;
                        // @ts-ignore
                        public static LOCAL_PORT_KEY: string;
                        /**
                         * Gets the context key.
                         */
                        // @ts-ignore
                        public getKey(): string;
                        /**
                         * Gets the context value.
                         */
                        // @ts-ignore
                        public getValue(): string;
                        /**
                         * Alias method for {@link #getKey()}.
                         */
                        // @ts-ignore
                        public getType(): string;
                        /**
                         * Alias method for {@link #getValue()}.
                         */
                        // @ts-ignore
                        public getName(): string;
                        // @ts-ignore
                        public setValue(value: string): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
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
