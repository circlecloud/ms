declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
            abstract class ProjectileItem extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number, name: string)
                // @ts-ignore
                public abstract getProjectileEntityType(): string;
                // @ts-ignore
                public abstract getThrowForce(): number;
                // @ts-ignore
                public onClickAir(player: cn.nukkit.Player, directionVector: cn.nukkit.math.Vector3): boolean;
                // @ts-ignore
                protected correctNBT(nbt: cn.nukkit.nbt.tag.CompoundTag): void;
            }
        }
    }
}
