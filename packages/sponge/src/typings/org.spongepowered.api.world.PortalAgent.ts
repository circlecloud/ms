declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface PortalAgent {
                    /**
                     * Gets the search radius before a new acceptable "portal" location is
                     * created.
                     */
                    // @ts-ignore
                     getSearchRadius(): number;
                    /**
                     * Sets the search radius before a new acceptable "portal" location is
                     * created.
                     */
                    // @ts-ignore
                     setSearchRadius(radius: number): org.spongepowered.api.world.PortalAgent;
                    /**
                     * Gets the radius of where a "portal" can be created.
                     */
                    // @ts-ignore
                     getCreationRadius(): number;
                    /**
                     * Sets the creation radius of where a portal may be created.
                     */
                    // @ts-ignore
                     setCreationRadius(radius: number): org.spongepowered.api.world.PortalAgent;
                    /**
                     * Attempts to find a "portal" location, or if none are available, creates
                     * one. Returns {@link Optional#empty()} if none are found.
                     */
                    // @ts-ignore
                     findOrCreatePortal(targetLocation: org.spongepowered.api.world.Location): any;
                    /**
                     * Attempts to find a "portal" location. Returns {@link Optional#empty()} if
                     * none are found.
                     */
                    // @ts-ignore
                     findPortal(targetLocation: org.spongepowered.api.world.Location): any;
                    /**
                     * Tells this agent to create a new "portal" location at the suggested
                     * {@link Location}.
                     * If {@link org.spongepowered.api.event.block.ChangeBlockEvent.Place}
                     * is cancelled, {@link Optional#empty()} is returned.
                     * </p>Note: In order to adjust or prevent the {@link Location}'s of each
                     * {@link BlockState} set, listen to
                     * {@link org.spongepowered.api.event.block.ChangeBlockEvent.Place} and
                     * check for the root cause of this portal agent.
                     */
                    // @ts-ignore
                     createPortal(targetLocation: org.spongepowered.api.world.Location): any;
                    /**
                     * Gets the type of {@link PortalAgent}.
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.world.PortalAgentType;
                }
            }
        }
    }
}
