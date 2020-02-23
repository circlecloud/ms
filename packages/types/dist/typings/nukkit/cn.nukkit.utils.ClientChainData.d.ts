declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class ClientChainData extends java.lang.Object implements cn.nukkit.utils.LoginChainData {
                // @ts-ignore
                public static UI_PROFILE_CLASSIC: number;
                // @ts-ignore
                public static UI_PROFILE_POCKET: number;
                // @ts-ignore
                public static of(buffer: number): cn.nukkit.utils.ClientChainData;
                // @ts-ignore
                public static read(pk: cn.nukkit.network.protocol.LoginPacket): cn.nukkit.utils.ClientChainData;
                // @ts-ignore
                public getUsername(): string;
                // @ts-ignore
                public getClientUUID(): java.util.UUID;
                // @ts-ignore
                public getIdentityPublicKey(): string;
                // @ts-ignore
                public getClientId(): number;
                // @ts-ignore
                public getServerAddress(): string;
                // @ts-ignore
                public getDeviceModel(): string;
                // @ts-ignore
                public getDeviceOS(): number;
                // @ts-ignore
                public getDeviceId(): string;
                // @ts-ignore
                public getGameVersion(): string;
                // @ts-ignore
                public getGuiScale(): number;
                // @ts-ignore
                public getLanguageCode(): string;
                // @ts-ignore
                public getXUID(): string;
                // @ts-ignore
                public getCurrentInputMode(): number;
                // @ts-ignore
                public getDefaultInputMode(): number;
                // @ts-ignore
                public getCapeData(): string;
                // @ts-ignore
                public getUIProfile(): number;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public isXboxAuthed(): boolean;
            }
        }
    }
}
