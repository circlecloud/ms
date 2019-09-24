declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerBucketFillEvent {
                    constructor(who: org.bukkit.entity.Player, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    constructor(who: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
