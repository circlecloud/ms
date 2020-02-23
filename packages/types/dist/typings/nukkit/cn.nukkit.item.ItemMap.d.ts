declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemMap extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer)
                // @ts-ignore
                constructor(meta: java.lang.Integer, count: number)
                // @ts-ignore
                public static mapCount: number;
                // @ts-ignore
                public setImage(file: java.io.File): void;
                // @ts-ignore
                public setImage(image: java.awt.image.BufferedImage): void;
                // @ts-ignore
                protected loadImageFromNBT(): java.awt.image.BufferedImage;
                // @ts-ignore
                public getMapId(): number;
                // @ts-ignore
                public sendImage(p: cn.nukkit.Player): void;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public getMaxStackSize(): number;
            }
        }
    }
}
