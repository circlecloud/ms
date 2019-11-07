declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableMobSpawnerData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the remaining delay before
                             * a new attempt at spawning an {@link Entity} is made.
                             */
                            // @ts-ignore
                             remainingDelay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the minimum spawn delay
                             * required between attempts to spawn an {@link Entity}.
                             */
                            // @ts-ignore
                             minimumSpawnDelay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the maximum spawn delay
                             * required between attempts to spawn an {@link Entity}.
                             */
                            // @ts-ignore
                             maximumSpawnDelay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the count of successful
                             * spawns of all {@link Entity} instances from the owning spawner. This
                             * count is simply a total count, there is no limitation on how many
                             * attempts are made to spawn an {@link Entity}.
                             */
                            // @ts-ignore
                             spawnCount(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the limitation on the number
                             * of nearby {@link Entity} instances can exist near the owning spawner. The
                             * limitation is that if there are more {@link Entity} instances than the
                             * provided value, no attempts to spawn a new {@link Entity} will be made.
                             */
                            // @ts-ignore
                             maximumNearbyEntities(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the minimum range a
                             * {@link Player} must remain in proximity of the spawner, such that if a
                             * {@link Player} is NOT within the provided range, no attempts to spawn an
                             * {@link Entity} is made.
                             */
                            // @ts-ignore
                             requiredPlayerRange(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the maximum range that an
                             * {@link Entity} can be spawned from the spawner.
                             */
                            // @ts-ignore
                             spawnRange(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            /**
                             * Gets the {@link ImmutableValue} for the overridden
                             * {@link WeightedSerializableObject}{@code <EntityArchetype>} to spawn next. If possible, the next entity to
                             * spawn may be chosen from the already provided
                             * {@link #possibleEntitiesToSpawn()}.
                             */
                            // @ts-ignore
                             nextEntityToSpawn(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            /**
                             * Gets the {@link ImmutableWeightedCollectionValue} of all possible
                             * {@link Entity} instances that can be spawned by the spawner. As they
                             * are all {@link WeightedSerializableObject} instances, their weight is
                             * defined as a {@link Random} to determine the next {@link Entity} that
                             * will be spawned, unless overriden by {@link #nextEntityToSpawn()}.
                             */
                            // @ts-ignore
                             possibleEntitiesToSpawn(): org.spongepowered.api.data.value.immutable.ImmutableWeightedCollectionValue;
                        }
                    }
                }
            }
        }
    }
}
