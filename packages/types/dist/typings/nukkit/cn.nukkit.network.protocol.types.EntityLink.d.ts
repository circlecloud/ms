declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace types {
                    // @ts-ignore
                     class EntityLink extends java.lang.Object {
                        // @ts-ignore
                        constructor(fromEntityUniquieId: number, toEntityUniquieId: number, type: number, immediate: boolean)
                        // @ts-ignore
                        public static TYPE_REMOVE: number;
                        // @ts-ignore
                        public static TYPE_RIDER: number;
                        // @ts-ignore
                        public static TYPE_PASSENGER: number;
                        // @ts-ignore
                        public fromEntityUniquieId: number;
                        // @ts-ignore
                        public toEntityUniquieId: number;
                        // @ts-ignore
                        public type: number;
                        // @ts-ignore
                        public immediate: boolean;
                    }
                }
            }
        }
    }
}
