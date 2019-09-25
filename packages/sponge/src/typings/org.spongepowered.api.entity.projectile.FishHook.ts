declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    // @ts-ignore
                    interface FishHook extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets the hooked entity for this fish hook.
                         * <p>Fishooks can attach to {@link Entity} objects in the world, as though
                         * they are temporarily leashed. The hooked entity may also be null.</p>
                         */
                        // @ts-ignore
                         getHookedEntity(): any;
                        /**
                         * Sets the hooked entity for this fish hook.
                         * <p>Fishhooks can attach to {@link Entity} objects in the world, as though
                         * they are temporarily leashed. The hooked entity may also be null.</p>
                         */
                        // @ts-ignore
                         setHookedEntity(entity: org.spongepowered.api.entity.Entity): void;
                    }
                }
            }
        }
    }
}
