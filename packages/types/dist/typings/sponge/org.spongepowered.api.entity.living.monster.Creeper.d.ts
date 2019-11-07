// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        // @ts-ignore
                        interface Creeper extends org.spongepowered.api.entity.living.monster.Monster, org.spongepowered.api.entity.explosive.FusedExplosive {
                            /**
                             * Gets the current {@link Value value} of whether this {@link Creeper}
                             * is considered "charged". Note that "charged" creepers will likely
                             * cause larger than normal explosions.
                             */
                            // @ts-ignore
                             charged(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
