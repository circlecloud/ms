declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockFormEvent extends org.bukkit.event.block.BlockGrowEvent {
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
