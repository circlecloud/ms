declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class ClientboundMapItemDataPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public eids: number[];
                    // @ts-ignore
                    public mapId: number;
                    // @ts-ignore
                    public update: number;
                    // @ts-ignore
                    public scale: number;
                    // @ts-ignore
                    public isLocked: boolean;
                    // @ts-ignore
                    public width: number;
                    // @ts-ignore
                    public height: number;
                    // @ts-ignore
                    public offsetX: number;
                    // @ts-ignore
                    public offsetZ: number;
                    // @ts-ignore
                    public dimensionId: number;
                    // @ts-ignore
                    public decorators: cn.nukkit.network.protocol.ClientboundMapItemDataPacket.MapDecorator[];
                    // @ts-ignore
                    public colors: number[];
                    // @ts-ignore
                    public image: java.awt.image.BufferedImage;
                    // @ts-ignore
                    public static TEXTURE_UPDATE: number;
                    // @ts-ignore
                    public static DECORATIONS_UPDATE: number;
                    // @ts-ignore
                    public static ENTITIES_UPDATE: number;
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
