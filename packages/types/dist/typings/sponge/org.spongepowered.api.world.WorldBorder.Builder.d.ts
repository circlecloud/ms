declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace WorldBorder {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Copies the required data from the passed {@code WorldBorder}.
                         */
                        // @ts-ignore
                         from(border: org.spongepowered.api.world.WorldBorder): org.spongepowered.api.world.WorldBorder.Builder;
                        /**
                         * Sets the diameter of this world border.
                         */
                        // @ts-ignore
                         diameter(diameter: number): org.spongepowered.api.world.WorldBorder.Builder;
                        /**
                         * Sets the centre of this world border.
                         */
                        // @ts-ignore
                         center(x: number, z: number): org.spongepowered.api.world.WorldBorder.Builder;
                        /**
                         * Sets the warning time of this world border.
                         */
                        // @ts-ignore
                         warningTime(time: number): org.spongepowered.api.world.WorldBorder.Builder;
                        /**
                         * Sets the warning distance of this world border.
                         */
                        // @ts-ignore
                         warningDistance(distance: number): org.spongepowered.api.world.WorldBorder.Builder;
                        /**
                         * Sets the damage threshold of this world border.
                         */
                        // @ts-ignore
                         damageThreshold(distance: number): org.spongepowered.api.world.WorldBorder.Builder;
                        /**
                         * Sets the damage amount of this world border.
                         */
                        // @ts-ignore
                         damageAmount(damage: number): org.spongepowered.api.world.WorldBorder.Builder;
                        /**
                         * Builds the world border from the information given. If no information
                         * is given, a {@code WorldBorder} with default properties is built.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.world.WorldBorder;
                    }
                }
            }
        }
    }
}
