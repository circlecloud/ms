declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class ContainerSetDataPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static PROPERTY_FURNACE_TICK_COUNT: number;
                    // @ts-ignore
                    public static PROPERTY_FURNACE_LIT_TIME: number;
                    // @ts-ignore
                    public static PROPERTY_FURNACE_LIT_DURATION: number;
                    // @ts-ignore
                    public static PROPERTY_FURNACE_FUEL_AUX: number;
                    // @ts-ignore
                    public static PROPERTY_BREWING_STAND_BREW_TIME: number;
                    // @ts-ignore
                    public static PROPERTY_BREWING_STAND_FUEL_AMOUNT: number;
                    // @ts-ignore
                    public static PROPERTY_BREWING_STAND_FUEL_TOTAL: number;
                    // @ts-ignore
                    public windowId: number;
                    // @ts-ignore
                    public property: number;
                    // @ts-ignore
                    public value: number;
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
