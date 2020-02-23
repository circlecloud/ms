declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemDye extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer)
                // @ts-ignore
                constructor(dyeColor: cn.nukkit.utils.DyeColor)
                // @ts-ignore
                constructor(dyeColor: cn.nukkit.utils.DyeColor, amount: number)
                // @ts-ignore
                constructor(meta: java.lang.Integer, amount: number)
                // @ts-ignore
                public static WHITE: number;
                // @ts-ignore
                public static ORANGE: number;
                // @ts-ignore
                public static MAGENTA: number;
                // @ts-ignore
                public static LIGHT_BLUE: number;
                // @ts-ignore
                public static YELLOW: number;
                // @ts-ignore
                public static LIME: number;
                // @ts-ignore
                public static PINK: number;
                // @ts-ignore
                public static GRAY: number;
                // @ts-ignore
                public static LIGHT_GRAY: number;
                // @ts-ignore
                public static CYAN: number;
                // @ts-ignore
                public static PURPLE: number;
                // @ts-ignore
                public static BLUE: number;
                // @ts-ignore
                public static BROWN: number;
                // @ts-ignore
                public static GREEN: number;
                // @ts-ignore
                public static RED: number;
                // @ts-ignore
                public static BLACK: number;
                // @ts-ignore
                public static getColor(meta: number): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public getDyeColor(): cn.nukkit.utils.DyeColor;
                // @ts-ignore
                public static getColorName(meta: number): string;
            }
        }
    }
}
