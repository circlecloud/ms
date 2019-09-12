declare namespace org {
    namespace bukkit {
        class WorldCreator {
            /**
             * Creates an empty WorldCreationOptions for the given world name
             */
            constructor(name: string)
            /**
             * Copies the options from the specified world
             */
            public copy(world: org.bukkit.World): org.bukkit.WorldCreator;
            /**
             * Copies the options from the specified {@link WorldCreator}
             */
            public copy(creator: org.bukkit.WorldCreator): org.bukkit.WorldCreator;
            /**
             * Gets the name of the world that is to be loaded or created.
             */
            public name(): string;
            /**
             * Gets the seed that will be used to create this world
             */
            public seed(): number;
            /**
             * Sets the seed that will be used to create this world
             */
            public seed(seed: number): org.bukkit.WorldCreator;
            /**
             * Gets the environment that will be used to create or load the world
             */
            public environment(): org.bukkit.World.Environment;
            /**
             * Sets the environment that will be used to create or load the world
             */
            public environment(env: org.bukkit.World.Environment): org.bukkit.WorldCreator;
            /**
             * Gets the type of the world that will be created or loaded
             */
            public type(): org.bukkit.WorldType;
            /**
             * Sets the type of the world that will be created or loaded
             */
            public type(type: org.bukkit.WorldType): org.bukkit.WorldCreator;
            /**
             * Gets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             */
            public generator(): org.bukkit.generator.ChunkGenerator;
            /**
             * Sets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             */
            public generator(generator: org.bukkit.generator.ChunkGenerator): org.bukkit.WorldCreator;
            /**
             * Sets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             * <p>
             * If the generator cannot be found for the given name, the natural
             * environment generator will be used instead and a warning will be
             * printed to the console.
             */
            public generator(generator: string): org.bukkit.WorldCreator;
            /**
             * Sets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             * <p>
             * If the generator cannot be found for the given name, the natural
             * environment generator will be used instead and a warning will be
             * printed to the specified output
             */
            public generator(generator: string, output: org.bukkit.command.CommandSender): org.bukkit.WorldCreator;
            /**
             * Sets the generator settings of the world that will be created or loaded
             */
            public generatorSettings(generatorSettings: string): org.bukkit.WorldCreator;
            /**
             * Gets the generator settings of the world that will be created or loaded
             */
            public generatorSettings(): string;
            /**
             * Sets whether or not worlds created or loaded with this creator will
             * have structures.
             */
            public generateStructures(generate: boolean): org.bukkit.WorldCreator;
            /**
             * Gets whether or not structures will be generated in the world.
             */
            public generateStructures(): boolean;
            /**
             * Creates a world with the specified options.
             * <p>
             * If the world already exists, it will be loaded from disk and some
             * options may be ignored.
             */
            public createWorld(): org.bukkit.World;
            /**
             * Creates a new {@link WorldCreator} for the given world name
             */
            public static name(name: string): org.bukkit.WorldCreator;
            /**
             * Attempts to get the {@link ChunkGenerator} with the given name.
             * <p>
             * If the generator is not found, null will be returned and a message will
             * be printed to the specified {@link CommandSender} explaining why.
             * <p>
             * The name must be in the "plugin:id" notation, or optionally just
             * "plugin", where "plugin" is the safe-name of a plugin and "id" is an
             * optional unique identifier for the generator you wish to request from
             * the plugin.
             */
            public static getGeneratorForName(world: string, name: string, output: org.bukkit.command.CommandSender): org.bukkit.generator.ChunkGenerator;
        }
    }
}
