declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    // @ts-ignore
                    interface EntityUniverse {
                        /**
                         * Gets the entity whose {@link UUID} matches the provided id, possibly
                         * returning no entity if the entity is not loaded or non-existent.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method may return no entity if the entity is not
                         * loaded.</p>
                         */
                        // @ts-ignore
                         getEntity(uuid: any): any;
                        /**
                         * Return a collection of entities contained within this universe, possibly
                         * only returning entities only in loaded areas.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return entities within those loaded
                         * parts.</p>
                         */
                        // @ts-ignore
                         getEntities(): any[] /*java.util.Collection*/;
                        /**
                         * Return a collection of entities contained within this universe, possibly
                         * only returning entities only in loaded areas. The returned entities are
                         * filtered by the given {@link Predicate} before being returned.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return entities within those loaded
                         * parts.</p>
                         */
                        // @ts-ignore
                         getEntities(filter: any): any[] /*java.util.Collection*/;
                        /**
                         * Return a collection of entities contained within {@code distance} blocks
                         * of the specified location. This uses a sphere to test distances.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return entities within those loaded
                         * parts.</p>
                         */
                        // @ts-ignore
                         getNearbyEntities(location: any /*Vector3d*/, distance: number): any[] /*java.util.Collection*/;
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         */
                        // @ts-ignore
                         createEntity(type: org.spongepowered.api.entity.EntityType, position: any /*Vector3d*/): org.spongepowered.api.entity.Entity;
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         */
                        // @ts-ignore
                         createEntity(type: org.spongepowered.api.entity.EntityType, position: any /*Vector3i*/): org.spongepowered.api.entity.Entity;
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         */
                        // @ts-ignore
                         createEntity(entityContainer: org.spongepowered.api.data.DataContainer): any;
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         */
                        // @ts-ignore
                         createEntity(entityContainer: org.spongepowered.api.data.DataContainer, position: any /*Vector3d*/): any;
                        /**
                         * Create an entity instance at the given position with the default
                         * equipment.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         */
                        // @ts-ignore
                         createEntityNaturally(type: org.spongepowered.api.entity.EntityType, position: any /*Vector3d*/): org.spongepowered.api.entity.Entity;
                        /**
                         * Create an entity instance at the given position with the default
                         * equipment.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         */
                        // @ts-ignore
                         createEntityNaturally(type: org.spongepowered.api.entity.EntityType, position: any /*Vector3i*/): org.spongepowered.api.entity.Entity;
                        /**
                         * Creates and restores an {@link Entity} from the provided
                         * {@link EntitySnapshot} at the provided {@link Vector3d} position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         */
                        // @ts-ignore
                         restoreSnapshot(snapshot: org.spongepowered.api.entity.EntitySnapshot, position: any /*Vector3d*/): any;
                        /**
                         * Spawns an {@link Entity} using the already set properties (extent,
                         * position, rotation) and applicable {@link DataManipulator}s for spawning
                         * the entity.
                         * <p>The requirements involve that all necessary setup of states and data
                         * is already preformed on the entity retrieved from the various
                         * {@link #createEntity(EntityType,Vector3d)} methods. Calling this will
                         * make the now-spawned entity able to be processed by various systems.</p>
                         * <p>If the entity was unable to spawn, the entity is not removed, but it
                         * should be taken note that there can be many reasons for a failure.</p>
                         */
                        // @ts-ignore
                         spawnEntity(entity: org.spongepowered.api.entity.Entity): boolean;
                        /**
                         * Similar to {@link #spawnEntity(Entity)} except where multiple entities
                         * can be attempted to be spawned.
                         */
                        // @ts-ignore
                         spawnEntities(entities: any): any[] /*java.util.Collection*/;
                        /**
                         * Gets all the entities that intersect the bounding box, in no particular
                         * order.
                         */
                        // @ts-ignore
                         getIntersectingEntities(box: org.spongepowered.api.util.AABB): any[] /*java.util.Set*/;
                        /**
                         * Gets all the entities that intersect the bounding box, in no particular
                         * order, as long as the pass the given filter test.
                         */
                        // @ts-ignore
                         getIntersectingEntities(box: org.spongepowered.api.util.AABB, filter: any): any[] /*java.util.Set*/;
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start and end point.
                         */
                        // @ts-ignore
                         getIntersectingEntities(start: any /*Vector3d*/, end: any /*Vector3d*/): any[] /*java.util.Set*/;
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start and end point. Only the entities that
                         * pass the filter test are added.
                         */
                        // @ts-ignore
                         getIntersectingEntities(start: any /*Vector3d*/, end: any /*Vector3d*/, filter: any): any[] /*java.util.Set*/;
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start, direction and distance.
                         */
                        // @ts-ignore
                         getIntersectingEntities(start: any /*Vector3d*/, direction: any /*Vector3d*/, distance: number): any[] /*java.util.Set*/;
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start, direction and distance. Only the
                         * entities that pass the filter test are added.
                         */
                        // @ts-ignore
                         getIntersectingEntities(start: any /*Vector3d*/, direction: any /*Vector3d*/, distance: number, filter: any): any[] /*java.util.Set*/;
                    }
                }
            }
        }
    }
}
