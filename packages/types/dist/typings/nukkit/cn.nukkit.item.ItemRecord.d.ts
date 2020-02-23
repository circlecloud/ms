declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
            abstract class ItemRecord extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number)
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public abstract getSoundId(): string;
            }
        }
    }
}
