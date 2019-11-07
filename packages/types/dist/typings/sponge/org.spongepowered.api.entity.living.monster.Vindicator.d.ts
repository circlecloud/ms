declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        // @ts-ignore
                        interface Vindicator extends org.spongepowered.api.entity.living.monster.Monster {
                            /**
                             * Gets the {@link Value} for whether this vindicator is considered a
                             * "johnny" vindicator. "Johnny" vindicators will deal more damage and
                             * often times carry an {@link ItemTypes#IRON_AXE} of sorts.
                             */
                            // @ts-ignore
                             johnny(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
