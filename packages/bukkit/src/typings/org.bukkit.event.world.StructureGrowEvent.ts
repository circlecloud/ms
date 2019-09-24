declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                // @ts-ignore
                 class StructureGrowEvent extends org.bukkit.event.world.WorldEvent implements org.bukkit.event.Cancellable {
                    constructor(location: org.bukkit.Location, species: org.bukkit.TreeType, bonemeal: boolean, player: org.bukkit.entity.Player, blocks: any[] /*java.util.List*/)
                    /**
                     * Gets the location of the structure.
                     */
                    public getLocation(): org.bukkit.Location;
                    /**
                     * Gets the species type (birch, normal, pine, red mushroom, brown
                     * mushroom)
                     */
                    public getSpecies(): org.bukkit.TreeType;
                    /**
                     * Checks if structure was grown using bonemeal.
                     */
                    public isFromBonemeal(): boolean;
                    /**
                     * Gets the player that created the structure.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets a list of all blocks associated with the structure.
                     */
                    public getBlocks(): any[] /*java.util.List*/;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
