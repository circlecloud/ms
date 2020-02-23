declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerMoveEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, from: cn.nukkit.level.Location, to: cn.nukkit.level.Location)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, from: cn.nukkit.level.Location, to: cn.nukkit.level.Location, resetBlocks: boolean)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFrom(): cn.nukkit.level.Location;
                    // @ts-ignore
                    public setFrom(from: cn.nukkit.level.Location): void;
                    // @ts-ignore
                    public getTo(): cn.nukkit.level.Location;
                    // @ts-ignore
                    public setTo(to: cn.nukkit.level.Location): void;
                    // @ts-ignore
                    public isResetBlocksAround(): boolean;
                    // @ts-ignore
                    public setResetBlocksAround(value: boolean): void;
                    // @ts-ignore
                    public setCancelled(): void;
                }
            }
        }
    }
}
