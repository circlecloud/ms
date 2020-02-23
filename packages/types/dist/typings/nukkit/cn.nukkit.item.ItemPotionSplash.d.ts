declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemPotionSplash extends cn.nukkit.item.ProjectileItem {
                // @ts-ignore
                constructor(meta: java.lang.Integer)
                // @ts-ignore
                constructor(meta: java.lang.Integer, count: number)
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public getProjectileEntityType(): string;
                // @ts-ignore
                public getThrowForce(): number;
                // @ts-ignore
                protected correctNBT(nbt: cn.nukkit.nbt.tag.CompoundTag): void;
            }
        }
    }
}
