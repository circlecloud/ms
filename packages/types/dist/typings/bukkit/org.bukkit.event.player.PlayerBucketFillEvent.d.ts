// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerBucketFillEvent extends org.bukkit.event.player.PlayerBucketEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
