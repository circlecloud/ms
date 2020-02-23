declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class AdventureSettingsPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static PERMISSION_NORMAL: number;
                    // @ts-ignore
                    public static PERMISSION_OPERATOR: number;
                    // @ts-ignore
                    public static PERMISSION_HOST: number;
                    // @ts-ignore
                    public static PERMISSION_AUTOMATION: number;
                    // @ts-ignore
                    public static PERMISSION_ADMIN: number;
                    // @ts-ignore
                    public static BITFLAG_SECOND_SET: number;
                    // @ts-ignore
                    public static WORLD_IMMUTABLE: number;
                    // @ts-ignore
                    public static NO_PVP: number;
                    // @ts-ignore
                    public static AUTO_JUMP: number;
                    // @ts-ignore
                    public static ALLOW_FLIGHT: number;
                    // @ts-ignore
                    public static NO_CLIP: number;
                    // @ts-ignore
                    public static WORLD_BUILDER: number;
                    // @ts-ignore
                    public static FLYING: number;
                    // @ts-ignore
                    public static MUTED: number;
                    // @ts-ignore
                    public static BUILD_AND_MINE: number;
                    // @ts-ignore
                    public static DOORS_AND_SWITCHES: number;
                    // @ts-ignore
                    public static OPEN_CONTAINERS: number;
                    // @ts-ignore
                    public static ATTACK_PLAYERS: number;
                    // @ts-ignore
                    public static ATTACK_MOBS: number;
                    // @ts-ignore
                    public static OPERATOR: number;
                    // @ts-ignore
                    public static TELEPORT: number;
                    // @ts-ignore
                    public flags: number;
                    // @ts-ignore
                    public commandPermission: number;
                    // @ts-ignore
                    public flags2: number;
                    // @ts-ignore
                    public playerPermission: number;
                    // @ts-ignore
                    public customFlags: number;
                    // @ts-ignore
                    public entityUniqueId: number;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public getFlag(flag: number): boolean;
                    // @ts-ignore
                    public setFlag(flag: number, value: boolean): void;
                    // @ts-ignore
                    public pid(): number;
                }
            }
        }
    }
}
