declare namespace cn {
    namespace nukkit {
        namespace dispenser {
            // @ts-ignore
             class ProjectileDispenseBehavior extends java.lang.Object implements cn.nukkit.dispenser.DispenseBehavior {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(entity: string)
                // @ts-ignore
                public dispense(source: cn.nukkit.block.BlockDispenser, item: cn.nukkit.item.Item): void;
                // @ts-ignore
                protected getEntityType(): string;
                /**
                 * you can add extra data of projectile here
                 */
                // @ts-ignore
                protected correctNBT(nbt: cn.nukkit.nbt.tag.CompoundTag): void;
            }
        }
    }
}
