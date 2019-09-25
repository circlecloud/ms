declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface AffectEntityEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets an {@link List} of the entity data
                         * un-affected by event changes.
                         * <p>This method <b>MUST</b> be called at {@link Order#PRE} in order
                         * to be properly initialized, after which it can be called at any time.
                         * If it is not first called at {@link Order#PRE}, it will throw an {@link IllegalStateException}
                         * when invoked.</p>
                         */
                        // @ts-ignore
                         getEntitySnapshots(): any[] /*java.util.List*/;
                        /**
                         * Gets the {@link List} who will be affected after event
                         * resolution.
                         */
                        // @ts-ignore
                         getEntities(): any[] /*java.util.List*/;
                        /**
                         * Filters out {@link Location}'s from
                         * {@link AffectEntityEvent#getEntities()} to be affected by this event.
                         * <p>Locations for which the predicate returns <code>false</code> will
                         * be removed from {@link #getEntities()}.</p>
                         */
                        // @ts-ignore
                         filterEntityLocations(predicate: any): any[] /*java.util.List*/;
                        /**
                         * Filters out {@link Entity}'s from {@link AffectEntityEvent#getEntities()}
                         * to be affected by this event.
                         * <p>Entities for which the predicate returns <code>false</code> will
                         * be removed from {@link #getEntities()}.</p>
                         */
                        // @ts-ignore
                         filterEntities(predicate: any): any[] /*java.util.List*/;
                    }
                }
            }
        }
    }
}
