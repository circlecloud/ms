declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerInteractEntityEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, entity: cn.nukkit.entity.Entity, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3)
                    // @ts-ignore
                    protected entity: cn.nukkit.entity.Entity;
                    // @ts-ignore
                    protected item: cn.nukkit.item.Item;
                    // @ts-ignore
                    protected clickedPos: cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public getEntity(): cn.nukkit.entity.Entity;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getClickedPos(): cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
