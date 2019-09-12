declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class LeavesDecayEvent {
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
