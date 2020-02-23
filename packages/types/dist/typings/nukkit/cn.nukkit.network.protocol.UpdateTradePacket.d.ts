declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class UpdateTradePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public windowId: number;
                    // @ts-ignore
                    public windowType: number;
                    // @ts-ignore
                    public unknownVarInt1: number;
                    // @ts-ignore
                    public tradeTier: number;
                    // @ts-ignore
                    public trader: number;
                    // @ts-ignore
                    public player: number;
                    // @ts-ignore
                    public displayName: string;
                    // @ts-ignore
                    public screen2: boolean;
                    // @ts-ignore
                    public isWilling: boolean;
                    // @ts-ignore
                    public offers: number[];
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
