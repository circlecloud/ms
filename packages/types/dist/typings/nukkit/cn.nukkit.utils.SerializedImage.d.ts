declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class SerializedImage extends java.lang.Object {
                // @ts-ignore
                constructor(width: number, height: number, data: number)
                // @ts-ignore
                public static EMPTY: cn.nukkit.utils.SerializedImage;
                // @ts-ignore
                public width: number;
                // @ts-ignore
                public height: number;
                // @ts-ignore
                public data: number[];
                // @ts-ignore
                public static fromLegacy(skinData: number): cn.nukkit.utils.SerializedImage;
            }
        }
    }
}
