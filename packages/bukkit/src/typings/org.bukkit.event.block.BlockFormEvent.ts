declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class BlockFormEvent {
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
