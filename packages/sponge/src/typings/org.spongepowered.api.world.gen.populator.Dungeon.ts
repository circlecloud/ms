declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface Dungeon extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Dungeon} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.Dungeon.Builder;
                            /**
                             * Gets the number of attempts at randomly spawning a generator per chunk.
                             */
                            // @ts-ignore
                             getAttemptsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of attempts at randomly spawning a generator per chunk.
                             */
                            // @ts-ignore
                             setAttemptsPerChunk(attempts: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of attempts at randomly spawning a generator per chunk.
                             */
                            // @ts-ignore
                             setAttemptsPerChunk(attempts: number): void;
                            /**
                             * <p>Gets the {@link MobSpawnerData} which represents the MobSpawner which
                             * will be created within the dungeon.</p>
                             * <p><b>Note: </b> Only one of choices or mob spawner data
                             * will be present.</p>
                             */
                            // @ts-ignore
                             getMobSpawnerData(): any;
                            /**
                             * <p>Sets {@link MobSpawnerData} which will be used to create the spawner
                             * within the dungeon.</p>
                             * <p><b>Note: </b> Only one of choices or mob spawner data
                             * will be present.</p>
                             */
                            // @ts-ignore
                             setMobSpawnerData(data: org.spongepowered.api.data.manipulator.mutable.MobSpawnerData): void;
                            /**
                             * <p>Gets a weighted collection of possible
                             * {@link EntityArchetype}s that could be spawned. One type is chosen when
                             * creating the dungeon, for more complex spawners see
                             * {@link #getMobSpawnerData()}.</p>
                             * <p><b>Note: </b> Only one of choices or mob spawner data
                             * will be present.</p>
                             */
                            // @ts-ignore
                             getChoices(): any;
                            /**
                             * <p>Sets the possible {@link EntityArchetype}s that could be spawned.
                             * One type is chosen when creating the dungeon, for more complex
                             * spawners see {@link #setMobSpawnerData(MobSpawnerData)}</p>
                             * <p><b>Note: </b> Only one of choices or mob spawner data
                             * will be present.</p>
                             */
                            // @ts-ignore
                             setChoices(choices: org.spongepowered.api.util.weighted.WeightedTable): void;
                            /**
                             * Gets a mutable weighted collection of possible contents of the chests.
                             * Items will be randomly selected from this list based on weight in order
                             * to calculate the contents of chests placed within the dungeon.
                             */
                            // @ts-ignore
                             getPossibleContents(): org.spongepowered.api.util.weighted.LootTable;
                        }
                    }
                }
            }
        }
    }
}
