declare namespace cn {
    namespace nukkit {
        // @ts-ignore
         class AdventureSettings extends java.lang.Object {
            // @ts-ignore
            constructor(player: cn.nukkit.Player)
            // @ts-ignore
            public static PERMISSION_NORMAL: number;
            // @ts-ignore
            public static PERMISSION_OPERATOR: number;
            // @ts-ignore
            public static PERMISSION_HOST: number;
            // @ts-ignore
            public static PERMISSION_AUTOMATION: number;
            // @ts-ignore
            public static PERMISSION_ADMIN: number;
            // @ts-ignore
            public clone(newPlayer: cn.nukkit.Player): cn.nukkit.AdventureSettings;
            // @ts-ignore
            public set(type: cn.nukkit.AdventureSettings.Type, value: boolean): cn.nukkit.AdventureSettings;
            // @ts-ignore
            public get(type: cn.nukkit.AdventureSettings.Type): boolean;
            // @ts-ignore
            public update(): void;
        }
    }
}
