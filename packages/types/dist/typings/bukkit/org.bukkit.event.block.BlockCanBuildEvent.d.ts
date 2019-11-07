declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockCanBuildEvent extends org.bukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, type: org.bukkit.block.data.BlockData, canBuild: boolean)
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, player: org.bukkit.entity.Player, type: org.bukkit.block.data.BlockData, canBuild: boolean)
                    // @ts-ignore
                    protected buildable: boolean;
                    // @ts-ignore
                    protected blockData: org.bukkit.block.data.BlockData;
                    /**
                     * Gets whether or not the block can be built here.
                     * <p>
                     * By default, returns Minecraft's answer on whether the block can be
                     * built here or not.
                     */
                    // @ts-ignore
                    public isBuildable(): boolean;
                    /**
                     * Sets whether the block can be built here or not.
                     */
                    // @ts-ignore
                    public setBuildable(cancel: boolean): void;
                    /**
                     * Gets the Material that we are trying to place.
                     */
                    // @ts-ignore
                    public getMaterial(): org.bukkit.Material;
                    /**
                     * Gets the BlockData that we are trying to place.
                     */
                    // @ts-ignore
                    public getBlockData(): org.bukkit.block.data.BlockData;
                    /**
                     * Gets the player who placed the block involved in this event.
                     * <br>
                     * May be null for legacy calls of the event.
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
