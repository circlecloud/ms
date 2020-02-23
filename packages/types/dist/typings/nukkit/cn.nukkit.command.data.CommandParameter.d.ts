declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace data {
                // @ts-ignore
                 class CommandParameter extends java.lang.Object {
                    // @ts-ignore
                    constructor(name: string, type: string, optional: boolean)
                    // @ts-ignore
                    constructor(name: string, type: cn.nukkit.command.data.CommandParamType, optional: boolean)
                    // @ts-ignore
                    constructor(name: string, optional: boolean)
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, optional: boolean, enumType: string)
                    // @ts-ignore
                    constructor(name: string, optional: boolean, enumValues: string)
                    // @ts-ignore
                    constructor(name: string, enumType: string)
                    // @ts-ignore
                    constructor(name: string, enumValues: string)
                    // @ts-ignore
                    public static ARG_TYPE_STRING: string;
                    // @ts-ignore
                    public static ARG_TYPE_STRING_ENUM: string;
                    // @ts-ignore
                    public static ARG_TYPE_BOOL: string;
                    // @ts-ignore
                    public static ARG_TYPE_TARGET: string;
                    // @ts-ignore
                    public static ARG_TYPE_PLAYER: string;
                    // @ts-ignore
                    public static ARG_TYPE_BLOCK_POS: string;
                    // @ts-ignore
                    public static ARG_TYPE_RAW_TEXT: string;
                    // @ts-ignore
                    public static ARG_TYPE_INT: string;
                    // @ts-ignore
                    public static ENUM_TYPE_ITEM_LIST: string;
                    // @ts-ignore
                    public static ENUM_TYPE_BLOCK_LIST: string;
                    // @ts-ignore
                    public static ENUM_TYPE_COMMAND_LIST: string;
                    // @ts-ignore
                    public static ENUM_TYPE_ENCHANTMENT_LIST: string;
                    // @ts-ignore
                    public static ENUM_TYPE_ENTITY_LIST: string;
                    // @ts-ignore
                    public static ENUM_TYPE_EFFECT_LIST: string;
                    // @ts-ignore
                    public static ENUM_TYPE_PARTICLE_LIST: string;
                    // @ts-ignore
                    public name: string;
                    // @ts-ignore
                    public type: cn.nukkit.command.data.CommandParamType;
                    // @ts-ignore
                    public optional: boolean;
                    // @ts-ignore
                    public options: number;
                    // @ts-ignore
                    public enumData: cn.nukkit.command.data.CommandEnum;
                    // @ts-ignore
                    public postFix: string;
                    // @ts-ignore
                    protected static fromString(param: string): cn.nukkit.command.data.CommandParamType;
                }
            }
        }
    }
}
