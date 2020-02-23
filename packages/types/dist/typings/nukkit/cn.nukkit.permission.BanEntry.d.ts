declare namespace cn {
    namespace nukkit {
        namespace permission {
            // @ts-ignore
             class BanEntry extends java.lang.Object {
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                public static format: string;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getCreationDate(): java.util.Date;
                // @ts-ignore
                public setCreationDate(creationDate: java.util.Date): void;
                // @ts-ignore
                public getSource(): string;
                // @ts-ignore
                public setSource(source: string): void;
                // @ts-ignore
                public getExpirationDate(): java.util.Date;
                // @ts-ignore
                public setExpirationDate(expirationDate: java.util.Date): void;
                // @ts-ignore
                public hasExpired(): boolean;
                // @ts-ignore
                public getReason(): string;
                // @ts-ignore
                public setReason(reason: string): void;
                // @ts-ignore
                public getMap(): java.util.LinkedHashMap;
                // @ts-ignore
                public static fromMap(map: java.util.Map): cn.nukkit.permission.BanEntry;
                // @ts-ignore
                public getString(): string;
                // @ts-ignore
                public static fromString(str: string): cn.nukkit.permission.BanEntry;
            }
        }
    }
}
