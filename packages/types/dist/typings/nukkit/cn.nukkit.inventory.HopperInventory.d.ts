declare namespace cn {
    namespace nukkit {
        namespace inventory {
            // @ts-ignore
             class HopperInventory extends cn.nukkit.inventory.ContainerInventory {
                // @ts-ignore
                constructor(hopper: cn.nukkit.blockentity.BlockEntityHopper)
                // @ts-ignore
                public getHolder(): cn.nukkit.blockentity.BlockEntityHopper;
            }
        }
    }
}
