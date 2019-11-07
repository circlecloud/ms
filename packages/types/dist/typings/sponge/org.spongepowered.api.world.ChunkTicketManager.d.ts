// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface ChunkTicketManager {
                    /**
                     * Sets the callback for handling loading forced chunk tickets on world
                     * load.
                     * <p><b>Required</b> for any plugin that wants to force-load chunks. Any
                     * plugin that does not have a registered callback will have all saved
                     * tickets dropped on world load.</p>
                     */
                    // @ts-ignore
                     registerCallback(plugin: java.lang.Object, callback: org.spongepowered.api.world.ChunkTicketManager.Callback): void;
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world.
                     * <p>Plugins can be limited in the number of tickets they can create per
                     * world.</p>
                     */
                    // @ts-ignore
                     createTicket(plugin: java.lang.Object, world: org.spongepowered.api.world.World): java.util.Optional;
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world.
                     * <p>This version is to create tickets that are bound to the existence of
                     * an Entity. For instance, a ticket to load the chunks a minecart is
                     * travelling through.</p>
                     * <p>Plugins can be limited in the number of tickets they can create per
                     * world.</p>
                     */
                    // @ts-ignore
                     createEntityTicket(plugin: java.lang.Object, world: org.spongepowered.api.world.World): java.util.Optional;
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world. The returned ticket will be associated with the given player.
                     * <p>.</p>
                     */
                    // @ts-ignore
                     createPlayerTicket(plugin: java.lang.Object, world: org.spongepowered.api.world.World, player: java.util.UUID): java.util.Optional;
                    /**
                     * Attempts to create a new loading ticket for a plugin to load chunks in a
                     * world. The returned ticket will be associated with the given player.
                     * <p>This version is to create tickets that are bound to the existence of
                     * an Entity. For instance, a ticket to load the chunks a minecart is
                     * travelling through.</p>
                     * <p>Plugins can be limited in the number of tickets they can create per
                     * world.</p>
                     */
                    // @ts-ignore
                     createPlayerEntityTicket(plugin: java.lang.Object, world: org.spongepowered.api.world.World, player: java.util.UUID): java.util.Optional;
                    /**
                     * Gets the maximum allowed per-world tickets for a plugin.
                     */
                    // @ts-ignore
                     getMaxTickets(plugin: java.lang.Object): number;
                    /**
                     * Gets the amount of remaining tickets a plugin can have in the world
                     * before hitting the maximum.
                     */
                    // @ts-ignore
                     getAvailableTickets(plugin: java.lang.Object, world: org.spongepowered.api.world.World): number;
                    /**
                     * Gets the amount of tickets remaining available for a player.
                     */
                    // @ts-ignore
                     getAvailableTickets(player: java.util.UUID): number;
                    /**
                     * Gets the set of currently force-loaded chunks in a world.
                     */
                    // @ts-ignore
                     getForcedChunks(world: org.spongepowered.api.world.World): any;
                }
            }
        }
    }
}
