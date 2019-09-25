declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Dungeon {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the number of attempts at randomly spawning a generator per
                                 * chunk.
                                 */
                                // @ts-ignore
                                 attempts(attempts: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Dungeon.Builder;
                                /**
                                 * Sets the number of attempts at randomly spawning a generator per
                                 * chunk.
                                 */
                                // @ts-ignore
                                 attempts(attempts: number): org.spongepowered.api.world.gen.populator.Dungeon.Builder;
                                /**
                                 * <p>Sets {@link MobSpawnerData} that will be used to create the spawner
                                 * within the dungeon.</p>
                                 * <p><b>Note: </b> Only one of choices or mob spawner data
                                 * will be present.</p>
                                 */
                                // @ts-ignore
                                 mobSpawnerData(data: org.spongepowered.api.data.manipulator.mutable.MobSpawnerData): org.spongepowered.api.world.gen.populator.Dungeon.Builder;
                                /**
                                 * <p>Sets the possible {@link EntityArchetype}s that could be spawned.
                                 * One type is chosen when creating the dungeon, for more complex
                                 * spawners see {@link #mobSpawnerData(MobSpawnerData)}}</p>
                                 * <p>To use the default set of choices, pass <code>null</code> instead
                                 * of a table.</p>
                                 * <p><b>Note: </b> Only one of choices or mob spawner data
                                 * will be present.</p>
                                 */
                                // @ts-ignore
                                 choices(choices: org.spongepowered.api.util.weighted.WeightedTable): org.spongepowered.api.world.gen.populator.Dungeon.Builder;
                                /**
                                 * Defines a {@link LootTable} of {@link ItemStackSnapshot}s from which
                                 * items will be randomly selected based on weight in order to calculate
                                 * the contents of chests placed within the dungeon.
                                 */
                                // @ts-ignore
                                 possibleItems(items: org.spongepowered.api.util.weighted.LootTable): org.spongepowered.api.world.gen.populator.Dungeon.Builder;
                                /**
                                 * Builds a new instance of a {@link Dungeon} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.Dungeon;
                            }
                        }
                    }
                }
            }
        }
    }
}
