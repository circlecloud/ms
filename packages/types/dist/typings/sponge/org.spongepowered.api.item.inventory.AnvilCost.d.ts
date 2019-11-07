// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface AnvilCost extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Returns the level cost.
                         */
                        // @ts-ignore
                         getLevelCost(): number;
                        /**
                         * Returns the material cost.
                         */
                        // @ts-ignore
                         getMaterialCost(): number;
                        /**
                         * Returns a modified copy of the Costs
                         */
                        // @ts-ignore
                         withLevelCost(levelCost: number): org.spongepowered.api.item.inventory.AnvilCost;
                        /**
                         * Returns a modified copy of the Costs
                         */
                        // @ts-ignore
                         withMaterialCost(materialCost: number): org.spongepowered.api.item.inventory.AnvilCost;
                    }
                }
            }
        }
    }
}
