declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class LevelSoundEventPacketV2 extends cn.nukkit.network.protocol.LevelSoundEventPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public sound: number;
                    // @ts-ignore
                    public x: number;
                    // @ts-ignore
                    public y: number;
                    // @ts-ignore
                    public z: number;
                    // @ts-ignore
                    public extraData: number;
                    // @ts-ignore
                    public entityIdentifier: string;
                    // @ts-ignore
                    public isBabyMob: boolean;
                    // @ts-ignore
                    public isGlobal: boolean;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public pid(): number;
                }
            }
        }
    }
}
