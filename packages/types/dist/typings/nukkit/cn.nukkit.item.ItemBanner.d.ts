declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemBanner extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer)
                // @ts-ignore
                constructor(meta: java.lang.Integer, count: number)
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public getBaseColor(): number;
                // @ts-ignore
                public setBaseColor(color: cn.nukkit.utils.DyeColor): void;
                // @ts-ignore
                public getType(): number;
                // @ts-ignore
                public setType(type: number): void;
                // @ts-ignore
                public addPattern(pattern: cn.nukkit.utils.BannerPattern): void;
                // @ts-ignore
                public getPattern(index: number): cn.nukkit.utils.BannerPattern;
                // @ts-ignore
                public removePattern(index: number): void;
                // @ts-ignore
                public getPatternsSize(): number;
                // @ts-ignore
                public correctNBT(): void;
            }
        }
    }
}
