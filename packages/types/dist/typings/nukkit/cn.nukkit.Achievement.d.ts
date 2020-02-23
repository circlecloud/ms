declare namespace cn {
    namespace nukkit {
        // @ts-ignore
         class Achievement extends java.lang.Object {
            // @ts-ignore
            constructor(message: string, requires: string)
            // @ts-ignore
            public static achievements: java.util.HashMap;
            // @ts-ignore
            public message: string;
            // @ts-ignore
            public requires: java.lang.String[];
            // @ts-ignore
            public static broadcast(player: cn.nukkit.Player, achievementId: string): boolean;
            // @ts-ignore
            public static add(name: string, achievement: cn.nukkit.Achievement): boolean;
            // @ts-ignore
            public getMessage(): string;
            // @ts-ignore
            public broadcast(player: cn.nukkit.Player): void;
        }
    }
}
