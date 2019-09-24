declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class LeavesDecayEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
