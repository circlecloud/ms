declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockCanBuildEvent extends org.bukkit.event.block.BlockEvent {
                    constructor(block: org.bukkit.block.Block, type: org.bukkit.block.data.BlockData, canBuild: boolean)
                    constructor(block: org.bukkit.block.Block, player: org.bukkit.entity.Player, type: org.bukkit.block.data.BlockData, canBuild: boolean)
                    protected buildable: boolean;
                    protected blockData: org.bukkit.block.data.BlockData;
                    /**
                     * Gets whether or not the block can be built here.
                     * <p>
                     * By default, returns Minecraft's answer on whether the block can be
                     * built here or not.
                     */
                    public isBuildable(): boolean;
                    /**
                     * Sets whether the block can be built here or not.
                     */
                    public setBuildable(cancel: boolean): void;
                    /**
                     * Gets the Material that we are trying to place.
                     */
                    public getMaterial(): org.bukkit.Material;
                    /**
                     * Gets the BlockData that we are trying to place.
                     */
                    public getBlockData(): org.bukkit.block.data.BlockData;
                    /**
                     * Gets the player who placed the block involved in this event.
                     * <br>
                     * May be null for legacy calls of the event.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
