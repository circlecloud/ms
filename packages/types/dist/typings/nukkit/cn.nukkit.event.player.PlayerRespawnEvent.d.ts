declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerRespawnEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, position: cn.nukkit.level.Position)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, position: cn.nukkit.level.Position, firstSpawn: boolean)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getRespawnPosition(): cn.nukkit.level.Position;
                    // @ts-ignore
                    public setRespawnPosition(position: cn.nukkit.level.Position): void;
                    // @ts-ignore
                    public isFirstSpawn(): boolean;
                }
            }
        }
    }
}
