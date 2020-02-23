declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            interface LoginChainData {
                // @ts-ignore
                 getUsername(): string;
                // @ts-ignore
                 getClientUUID(): java.util.UUID;
                // @ts-ignore
                 getIdentityPublicKey(): string;
                // @ts-ignore
                 getClientId(): number;
                // @ts-ignore
                 getServerAddress(): string;
                // @ts-ignore
                 getDeviceModel(): string;
                // @ts-ignore
                 getDeviceOS(): number;
                // @ts-ignore
                 getDeviceId(): string;
                // @ts-ignore
                 getGameVersion(): string;
                // @ts-ignore
                 getGuiScale(): number;
                // @ts-ignore
                 getLanguageCode(): string;
                // @ts-ignore
                 getXUID(): string;
                // @ts-ignore
                 isXboxAuthed(): boolean;
                // @ts-ignore
                 getCurrentInputMode(): number;
                // @ts-ignore
                 getDefaultInputMode(): number;
                // @ts-ignore
                 getCapeData(): string;
                // @ts-ignore
                 getUIProfile(): number;
            }
        }
    }
}
