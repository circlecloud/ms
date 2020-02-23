declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class AvailableCommandsPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static ARG_FLAG_VALID: number;
                    // @ts-ignore
                    public static ARG_FLAG_ENUM: number;
                    // @ts-ignore
                    public static ARG_FLAG_POSTFIX: number;
                    // @ts-ignore
                    public static ARG_FLAG_SOFT_ENUM: number;
                    // @ts-ignore
                    public static ARG_TYPE_INT: number;
                    // @ts-ignore
                    public static ARG_TYPE_FLOAT: number;
                    // @ts-ignore
                    public static ARG_TYPE_VALUE: number;
                    // @ts-ignore
                    public static ARG_TYPE_WILDCARD_INT: number;
                    // @ts-ignore
                    public static ARG_TYPE_OPERATOR: number;
                    // @ts-ignore
                    public static ARG_TYPE_TARGET: number;
                    // @ts-ignore
                    public static ARG_TYPE_WILDCARD_TARGET: number;
                    // @ts-ignore
                    public static ARG_TYPE_FILE_PATH: number;
                    // @ts-ignore
                    public static ARG_TYPE_STRING: number;
                    // @ts-ignore
                    public static ARG_TYPE_POSITION: number;
                    // @ts-ignore
                    public static ARG_TYPE_MESSAGE: number;
                    // @ts-ignore
                    public static ARG_TYPE_RAWTEXT: number;
                    // @ts-ignore
                    public static ARG_TYPE_JSON: number;
                    // @ts-ignore
                    public static ARG_TYPE_COMMAND: number;
                    // @ts-ignore
                    public commands: java.util.Map;
                    // @ts-ignore
                    public softEnums: java.util.Map;
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
