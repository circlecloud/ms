declare namespace cn {
    namespace nukkit {
        namespace permission {
            // @ts-ignore
             class BanList extends java.lang.Object {
                // @ts-ignore
                constructor(file: string)
                // @ts-ignore
                public isEnable(): boolean;
                // @ts-ignore
                public setEnable(enable: boolean): void;
                // @ts-ignore
                public getEntires(): java.util.LinkedHashMap;
                // @ts-ignore
                public isBanned(name: string): boolean;
                // @ts-ignore
                public add(entry: cn.nukkit.permission.BanEntry): void;
                // @ts-ignore
                public addBan(target: string): cn.nukkit.permission.BanEntry;
                // @ts-ignore
                public addBan(target: string, reason: string): cn.nukkit.permission.BanEntry;
                // @ts-ignore
                public addBan(target: string, reason: string, expireDate: java.util.Date): cn.nukkit.permission.BanEntry;
                // @ts-ignore
                public addBan(target: string, reason: string, expireDate: java.util.Date, source: string): cn.nukkit.permission.BanEntry;
                // @ts-ignore
                public remove(name: string): void;
                // @ts-ignore
                public removeExpired(): void;
                // @ts-ignore
                public load(): void;
                // @ts-ignore
                public save(): void;
            }
        }
    }
}
