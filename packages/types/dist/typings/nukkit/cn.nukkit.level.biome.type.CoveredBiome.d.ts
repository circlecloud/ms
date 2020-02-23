declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace biome {
                namespace type {
                    // @ts-ignore
                    abstract class CoveredBiome extends cn.nukkit.level.biome.Biome {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public synchronizeCover: java.lang.Object;
                        /**
                         * A single block placed on top of the surface blocks
                         */
                        // @ts-ignore
                        public getCoverBlock(): number;
                        /**
                         * The amount of times the surface block should be used
                         * <p>
                         * If &lt; 0 bad things will happen!
                         * </p>
                         */
                        // @ts-ignore
                        public getSurfaceDepth(y: number): number;
                        /**
                         * Between cover and ground
                         */
                        // @ts-ignore
                        public abstract getSurfaceBlock(y: number): number;
                        /**
                         * The metadata of the surface block
                         */
                        // @ts-ignore
                        public getSurfaceMeta(y: number): number;
                        /**
                         * The amount of times the ground block should be used
                         * <p>
                         * If &lt; 0 bad things will happen!
                         */
                        // @ts-ignore
                        public getGroundDepth(y: number): number;
                        /**
                         * Between surface and stone
                         */
                        // @ts-ignore
                        public abstract getGroundBlock(y: number): number;
                        /**
                         * The metadata of the ground block
                         */
                        // @ts-ignore
                        public getGroundMeta(y: number): number;
                        /**
                         * The block used as stone/below all other surface blocks
                         */
                        // @ts-ignore
                        public getStoneBlock(): number;
                        /**
                         * Called before a new block column is covered. Biomes can update any relevant variables here before covering.
                         * <p>
                         * Biome covering is synchronized on the biome, so thread safety isn't an issue.
                         * </p>
                         */
                        // @ts-ignore
                        public preCover(x: number, z: number): void;
                    }
                }
            }
        }
    }
}
