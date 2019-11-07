// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class WorldCreator extends java.lang.Object {
            /**
             * Creates an empty WorldCreationOptions for the given world name
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Copies the options from the specified world
             */
            // @ts-ignore
            public copy(world: org.bukkit.World): org.bukkit.WorldCreator;
            /**
             * Copies the options from the specified {@link WorldCreator}
             */
            // @ts-ignore
            public copy(creator: org.bukkit.WorldCreator): org.bukkit.WorldCreator;
            /**
             * Gets the name of the world that is to be loaded or created.
             */
            // @ts-ignore
            public name(): string;
            /**
             * Gets the seed that will be used to create this world
             */
            // @ts-ignore
            public seed(): number;
            /**
             * Sets the seed that will be used to create this world
             */
            // @ts-ignore
            public seed(seed: number): org.bukkit.WorldCreator;
            /**
             * Gets the environment that will be used to create or load the world
             */
            // @ts-ignore
            public environment(): org.bukkit.World.Environment;
            /**
             * Sets the environment that will be used to create or load the world
             */
            // @ts-ignore
            public environment(env: org.bukkit.World.Environment): org.bukkit.WorldCreator;
            /**
             * Gets the type of the world that will be created or loaded
             */
            // @ts-ignore
            public type(): org.bukkit.WorldType;
            /**
             * Sets the type of the world that will be created or loaded
             */
            // @ts-ignore
            public type(type: org.bukkit.WorldType): org.bukkit.WorldCreator;
            /**
             * Gets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             */
            // @ts-ignore
            public generator(): org.bukkit.generator.ChunkGenerator;
            /**
             * Sets the generator that will be used to create or load the world.
             * <p>
             * This may be null, in which case the "natural" generator for this
             * environment will be used.
             */
            // @ts-ignore
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
            // @ts-ignore
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
            // @ts-ignore
            public generator(generator: string, output: org.bukkit.command.CommandSender): org.bukkit.WorldCreator;
            /**
             * Sets the generator settings of the world that will be created or loaded
             */
            // @ts-ignore
            public generatorSettings(generatorSettings: string): org.bukkit.WorldCreator;
            /**
             * Gets the generator settings of the world that will be created or loaded
             */
            // @ts-ignore
            public generatorSettings(): string;
            /**
             * Sets whether or not worlds created or loaded with this creator will
             * have structures.
             */
            // @ts-ignore
            public generateStructures(generate: boolean): org.bukkit.WorldCreator;
            /**
             * Gets whether or not structures will be generated in the world.
             */
            // @ts-ignore
            public generateStructures(): boolean;
            /**
             * Creates a world with the specified options.
             * <p>
             * If the world already exists, it will be loaded from disk and some
             * options may be ignored.
             */
            // @ts-ignore
            public createWorld(): org.bukkit.World;
            /**
             * Creates a new {@link WorldCreator} for the given world name
             */
            // @ts-ignore
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
            // @ts-ignore
            public static getGeneratorForName(world: string, name: string, output: org.bukkit.command.CommandSender): org.bukkit.generator.ChunkGenerator;
        }
    }
}
