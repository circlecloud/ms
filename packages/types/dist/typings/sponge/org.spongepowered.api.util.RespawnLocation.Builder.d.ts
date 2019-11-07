// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace RespawnLocation {
                    // @ts-ignore
                     class Builder extends org.spongepowered.api.data.persistence.AbstractDataBuilder {
                        /**
                         * Creates a new {@link Builder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Sets the {@link UUID} of the provided {@link World} into this
                         * builder.
                         */
                        // @ts-ignore
                        public world(world: org.spongepowered.api.world.World): org.spongepowered.api.util.RespawnLocation.Builder;
                        /**
                         * Sets the {@link UUID} of the desired {@link World}. There are no
                         * validation checks to whether a world exists with the provided uuid,
                         * mainly for reasons when multiple worlds are loaded and unloaded.
                         */
                        // @ts-ignore
                        public world(worldId: java.util.UUID): org.spongepowered.api.util.RespawnLocation.Builder;
                        /**
                         * Sets the {@link UUID} of the {@link Location} provided {@link World},
                         * and the {@link Vector3d} position to respawn at.
                         */
                        // @ts-ignore
                        public location(location: org.spongepowered.api.world.Location): org.spongepowered.api.util.RespawnLocation.Builder;
                        /**
                         * Sets the {@link Vector3d} position of where to respawn at.
                         */
                        // @ts-ignore
                        public position(position: any /*Vector3d*/): org.spongepowered.api.util.RespawnLocation.Builder;
                        /**
                         * Sets whether the position to respawn at is forced or can be varied
                         * for safety.
                         */
                        // @ts-ignore
                        public forceSpawn(isForced: boolean): org.spongepowered.api.util.RespawnLocation.Builder;
                        // @ts-ignore
                        protected buildContent(container: org.spongepowered.api.data.DataView): java.util.Optional;
                        // @ts-ignore
                        public reset(): org.spongepowered.api.util.RespawnLocation.Builder;
                        // @ts-ignore
                        public from(value: org.spongepowered.api.util.RespawnLocation): org.spongepowered.api.util.RespawnLocation.Builder;
                        /**
                         * Creates a new {@link RespawnLocation} from this builder.
                         */
                        // @ts-ignore
                        public build(): org.spongepowered.api.util.RespawnLocation;
                    }
                }
            }
        }
    }
}
