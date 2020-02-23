declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class TextPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_RAW: number;
                    // @ts-ignore
                    public static TYPE_CHAT: number;
                    // @ts-ignore
                    public static TYPE_TRANSLATION: number;
                    // @ts-ignore
                    public static TYPE_POPUP: number;
                    // @ts-ignore
                    public static TYPE_JUKEBOX_POPUP: number;
                    // @ts-ignore
                    public static TYPE_TIP: number;
                    // @ts-ignore
                    public static TYPE_SYSTEM: number;
                    // @ts-ignore
                    public static TYPE_WHISPER: number;
                    // @ts-ignore
                    public static TYPE_ANNOUNCEMENT: number;
                    // @ts-ignore
                    public static TYPE_JSON: number;
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public source: string;
                    // @ts-ignore
                    public message: string;
                    // @ts-ignore
                    public parameters: java.lang.String[];
                    // @ts-ignore
                    public isLocalized: boolean;
                    // @ts-ignore
                    public xboxUserId: string;
                    // @ts-ignore
                    public platformChatId: string;
                    // @ts-ignore
                    public pid(): number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                }
            }
        }
    }
}
