// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class StructureGrowEvent extends org.bukkit.event.world.WorldEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(location: org.bukkit.Location, species: org.bukkit.TreeType, bonemeal: boolean, player: org.bukkit.entity.Player, blocks: java.util.List)
                    /**
                     * Gets the location of the structure.
                     */
                    // @ts-ignore
                    public getLocation(): org.bukkit.Location;
                    /**
                     * Gets the species type (birch, normal, pine, red mushroom, brown
                     * mushroom)
                     */
                    // @ts-ignore
                    public getSpecies(): org.bukkit.TreeType;
                    /**
                     * Checks if structure was grown using bonemeal.
                     */
                    // @ts-ignore
                    public isFromBonemeal(): boolean;
                    /**
                     * Gets the player that created the structure.
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets a list of all blocks associated with the structure.
                     */
                    // @ts-ignore
                    public getBlocks(): java.util.List;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
