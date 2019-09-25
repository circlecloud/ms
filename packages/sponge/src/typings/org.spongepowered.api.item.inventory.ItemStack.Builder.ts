declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace ItemStack {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            // @ts-ignore
                             from(value: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Sets the {@link ItemType} of the item stack.
                             */
                            // @ts-ignore
                             itemType(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            // @ts-ignore
                             getCurrentItem(): org.spongepowered.api.item.ItemType;
                            /**
                             * Sets the quantity of the item stack.
                             */
                            // @ts-ignore
                             quantity(quantity: number): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Adds a {@link Key} and related {@link Object} value to apply to the
                             * resulting {@link ItemStack}. Note that the resulting
                             * {@link ItemStack} may not actually accept the provided {@code Key}
                             * for various reasons due to support or simply that the value itself
                             * is not supported. Offering custom data is not supported through this,
                             * use {@link #itemData(DataManipulator)} instead.
                             */
                            // @ts-ignore
                             keyValue(key: org.spongepowered.api.data.key.Key, value: any): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Sets the {@link DataManipulator} to add to the {@link ItemStack}.
                             */
                            // @ts-ignore
                             itemData(itemData: org.spongepowered.api.data.manipulator.DataManipulator): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Sets the {@link ImmutableDataManipulator} to add to the
                             * {@link ItemStack}.
                             */
                            // @ts-ignore
                             itemData(itemData: org.spongepowered.api.data.manipulator.ImmutableDataManipulator): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Adds a {@link Key} and related {@link Object} value to apply to the
                             * resulting {@link ItemStack}. Note that the resulting
                             * {@link ItemStack} may not actually accept the provided {@code Key}
                             * for various reasons due to support or simply that the value itself
                             * is not supported. Offering custom data is not supported through this,
                             * use {@link #itemData(DataManipulator)} instead.
                             */
                            // @ts-ignore
                             add(key: org.spongepowered.api.data.key.Key, value: any): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Sets all the settings in this builder from the item stack blueprint.
                             */
                            // @ts-ignore
                             fromItemStack(itemStack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Sets the data to recreate a {@link BlockState} in a held {@link ItemStack}
                             * state.
                             */
                            // @ts-ignore
                             fromBlockState(blockState: org.spongepowered.api.block.BlockState): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Attempts to reconstruct the builder with all of the data from
                             * {@link ItemStack#toContainer()} including all custom data.
                             */
                            // @ts-ignore
                             fromContainer(container: org.spongepowered.api.data.DataView): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Reconstructs this builder to use the {@link ItemStackSnapshot}
                             * for all the values and data it may contain.
                             */
                            // @ts-ignore
                             fromSnapshot(snapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Attempts to reconstruct a {@link BlockSnapshot} including all data
                             * and {@link TileEntity} related data if necessary for creating an
                             * {@link ItemStack} representation.
                             */
                            // @ts-ignore
                             fromBlockSnapshot(blockSnapshot: org.spongepowered.api.block.BlockSnapshot): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            // @ts-ignore
                             remove(manipulatorClass: any): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            // @ts-ignore
                             apply(predicate: any, consumer: any): org.spongepowered.api.item.inventory.ItemStack.Builder;
                            /**
                             * Builds an instance of an ItemStack.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.item.inventory.ItemStack;
                        }
                    }
                }
            }
        }
    }
}
