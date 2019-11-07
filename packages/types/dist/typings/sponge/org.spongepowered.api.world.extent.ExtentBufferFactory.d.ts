// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface ExtentBufferFactory {
                        /**
                         * Returns a new biome buffer of the desired size.
                         */
                        // @ts-ignore
                         createBiomeBuffer(size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new biome buffer of the desired size and minimum position.
                         */
                        // @ts-ignore
                         createBiomeBuffer(min: any /*Vector3i*/, size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new biome buffer of the desired size.
                         */
                        // @ts-ignore
                         createBiomeBuffer(xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new biome buffer of the desired size and minimum position.
                         */
                        // @ts-ignore
                         createBiomeBuffer(xMin: number, yMin: number, zMin: number, xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new biome buffer of the desired size. This buffer is thread
                         * safe.
                         */
                        // @ts-ignore
                         createThreadSafeBiomeBuffer(size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new biome buffer of the desired size an minimum position. This
                         * buffer is thread safe.
                         */
                        // @ts-ignore
                         createThreadSafeBiomeBuffer(min: any /*Vector3i*/, size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new biome buffer of the desired size. This buffer is thread
                         * safe.
                         */
                        // @ts-ignore
                         createThreadSafeBiomeBuffer(xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new biome buffer of the desired size. This buffer is thread
                         * safe.
                         */
                        // @ts-ignore
                         createThreadSafeBiomeBuffer(xMin: number, yMin: number, zMin: number, xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBiomeVolume;
                        /**
                         * Returns a new block buffer of the desired size.
                         */
                        // @ts-ignore
                         createBlockBuffer(size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new block buffer of the desired size and minimum position.
                         */
                        // @ts-ignore
                         createBlockBuffer(min: any /*Vector3i*/, size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new block buffer of the desired size.
                         */
                        // @ts-ignore
                         createBlockBuffer(xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new block buffer of the desired size and minimum position.
                         */
                        // @ts-ignore
                         createBlockBuffer(xMin: number, yMin: number, zMin: number, xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new block buffer of the desired size. This buffer is thread
                         * safe.
                         */
                        // @ts-ignore
                         createThreadSafeBlockBuffer(size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new block buffer of the desired size and minimum position. This
                         * buffer is thread safe.
                         */
                        // @ts-ignore
                         createThreadSafeBlockBuffer(min: any /*Vector3i*/, size: any /*Vector3i*/): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new block buffer of the desired size. This buffer is thread
                         * safe.
                         */
                        // @ts-ignore
                         createThreadSafeBlockBuffer(xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new block buffer of the desired size and minimum position. This
                         * buffer is thread safe.
                         */
                        // @ts-ignore
                         createThreadSafeBlockBuffer(xMin: number, yMin: number, zMin: number, xSize: number, ySize: number, zSize: number): org.spongepowered.api.world.extent.MutableBlockVolume;
                        /**
                         * Returns a new archetype volume of the desired size.
                         */
                        // @ts-ignore
                         createArchetypeVolume(size: any /*Vector3i*/, origin: any /*Vector3i*/): org.spongepowered.api.world.extent.ArchetypeVolume;
                        /**
                         * Returns a new archetype volume of the desired size.
                         */
                        // @ts-ignore
                         createArchetypeVolume(size: any /*Vector3i*/): org.spongepowered.api.world.extent.ArchetypeVolume;
                    }
                }
            }
        }
    }
}
