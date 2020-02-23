declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                // @ts-ignore
                 class EncapsulatedPacket extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public reliability: number;
                    // @ts-ignore
                    public hasSplit: boolean;
                    // @ts-ignore
                    public length: number;
                    // @ts-ignore
                    public messageIndex: java.lang.Integer;
                    // @ts-ignore
                    public orderIndex: java.lang.Integer;
                    // @ts-ignore
                    public orderChannel: java.lang.Integer;
                    // @ts-ignore
                    public splitCount: java.lang.Integer;
                    // @ts-ignore
                    public splitID: java.lang.Integer;
                    // @ts-ignore
                    public splitIndex: java.lang.Integer;
                    // @ts-ignore
                    public buffer: number[];
                    // @ts-ignore
                    public needACK: boolean;
                    // @ts-ignore
                    public identifierACK: java.lang.Integer;
                    // @ts-ignore
                    public getOffset(): number;
                    // @ts-ignore
                    public static fromBinary(binary: number): cn.nukkit.raknet.protocol.EncapsulatedPacket;
                    // @ts-ignore
                    public static fromBinary(binary: number, internal: boolean): cn.nukkit.raknet.protocol.EncapsulatedPacket;
                    // @ts-ignore
                    public getTotalLength(): number;
                    // @ts-ignore
                    public toBinary(): number[];
                    // @ts-ignore
                    public toBinary(internal: boolean): number[];
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public clone(): cn.nukkit.raknet.protocol.EncapsulatedPacket;
                }
            }
        }
    }
}
