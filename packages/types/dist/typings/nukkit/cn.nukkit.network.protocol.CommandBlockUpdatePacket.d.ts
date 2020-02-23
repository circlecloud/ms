declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class CommandBlockUpdatePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isBlock: boolean;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public commandBlockMode: number;
                    // @ts-ignore
                    public isRedstoneMode: boolean;
                    // @ts-ignore
                    public isConditional: boolean;
                    // @ts-ignore
                    public minecartEid: number;
                    // @ts-ignore
                    public command: string;
                    // @ts-ignore
                    public lastOutput: string;
                    // @ts-ignore
                    public name: string;
                    // @ts-ignore
                    public shouldTrackOutput: boolean;
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
