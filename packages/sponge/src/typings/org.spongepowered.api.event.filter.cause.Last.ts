declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    namespace cause {
                        // @ts-ignore
                        interface Last {
                            /**
                             * If specified the possible type for the returned object (normally
                             * specified by the type of the annotated parameter) is restricted to only
                             * the specified types.
                             * <p>For exampled annotating a parameter of type Monster would normally
                             * accept all entities extending Monster, however with the includes
                             * specified as Enderman and Zombie the possible Monsters returned would be
                             * restricted to entities extending either Enderman and Zombie.</p>
                             */
                            // @ts-ignore
                             typeFilter(): any;
                            /**
                             * If true then the behavior of the typeFilter is reversed and the specified
                             * types are excluded rather than included.
                             */
                            // @ts-ignore
                             inverse(): boolean;
                        }
                    }
                }
            }
        }
    }
}
