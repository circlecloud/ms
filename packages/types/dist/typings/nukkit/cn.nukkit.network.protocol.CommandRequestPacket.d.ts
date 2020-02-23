declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class CommandRequestPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static TYPE_PLAYER: number;
                    // @ts-ignore
                    public static TYPE_COMMAND_BLOCK: number;
                    // @ts-ignore
                    public static TYPE_MINECART_COMMAND_BLOCK: number;
                    // @ts-ignore
                    public static TYPE_DEV_CONSOLE: number;
                    // @ts-ignore
                    public static TYPE_AUTOMATION_PLAYER: number;
                    // @ts-ignore
                    public static TYPE_CLIENT_AUTOMATION: number;
                    // @ts-ignore
                    public static TYPE_DEDICATED_SERVER: number;
                    // @ts-ignore
                    public static TYPE_ENTITY: number;
                    // @ts-ignore
                    public static TYPE_VIRTUAL: number;
                    // @ts-ignore
                    public static TYPE_GAME_ARGUMENT: number;
                    // @ts-ignore
                    public static TYPE_INTERNAL: number;
                    // @ts-ignore
                    public command: string;
                    // @ts-ignore
                    public data: cn.nukkit.network.protocol.types.CommandOriginData;
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
