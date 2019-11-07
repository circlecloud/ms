declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface InteractableVolume extends org.spongepowered.api.world.extent.MutableBlockVolume {
                        /**
                         * Simulates hitting a block as if a player had done so.
                         * <p>The difference between this and {@link #digBlock} is that this will
                         * only do a single instantaneous "click" whereas digBlock will simulate
                         * holding the primary mouse button until the block breaks.</p>
                         */
                        // @ts-ignore
                         hitBlock(position: any /*Vector3i*/, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulates hitting a block as if a player had done so.
                         * <p>The difference between this and {@link #digBlock} is that this will
                         * only do a single instantaneous "click" whereas digBlock will simulate
                         * holding the primary mouse button until the block breaks.</p>
                         */
                        // @ts-ignore
                         hitBlock(x: number, y: number, z: number, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulates the interaction the block as if a player had done so.
                         */
                        // @ts-ignore
                         interactBlock(position: any /*Vector3i*/, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulates the interaction the block as if a player had done so.
                         */
                        // @ts-ignore
                         interactBlock(x: number, y: number, z: number, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulates the interaction the block using the given item as if the player
                         * had done so.
                         */
                        // @ts-ignore
                         interactBlockWith(position: any /*Vector3i*/, itemStack: org.spongepowered.api.item.inventory.ItemStack, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulates the interaction the block using the given item as if the player
                         * had done so.
                         */
                        // @ts-ignore
                         interactBlockWith(x: number, y: number, z: number, itemStack: org.spongepowered.api.item.inventory.ItemStack, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulates the placement of a block at the given location as if a player
                         * had done so.
                         */
                        // @ts-ignore
                         placeBlock(position: any /*Vector3i*/, block: org.spongepowered.api.block.BlockState, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulates the placement of a block at the given location as if a player
                         * had done so.
                         */
                        // @ts-ignore
                         placeBlock(x: number, y: number, z: number, block: org.spongepowered.api.block.BlockState, side: org.spongepowered.api.util.Direction, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulate the digging of the block as if a player had done so.
                         */
                        // @ts-ignore
                         digBlock(position: any /*Vector3i*/, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulate the digging of the block as if a player had done so.
                         */
                        // @ts-ignore
                         digBlock(x: number, y: number, z: number, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulate the digging of the block with the given tool as if a player had
                         * done so.
                         */
                        // @ts-ignore
                         digBlockWith(position: any /*Vector3i*/, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Simulate the digging of the block with the given tool as if a player had
                         * done so.
                         */
                        // @ts-ignore
                         digBlockWith(x: number, y: number, z: number, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Gets the time it takes to dig this block with the specified item in
                         * ticks.
                         */
                        // @ts-ignore
                         getBlockDigTimeWith(position: any /*Vector3i*/, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): number;
                        /**
                         * Gets the time it takes to dig this block with the specified item in
                         * ticks.
                         */
                        // @ts-ignore
                         getBlockDigTimeWith(x: number, y: number, z: number, itemStack: org.spongepowered.api.item.inventory.ItemStack, profile: org.spongepowered.api.profile.GameProfile): number;
                        // @ts-ignore
                         getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker;
                    }
                }
            }
        }
    }
}
