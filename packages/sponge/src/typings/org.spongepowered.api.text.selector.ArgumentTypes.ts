declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    // @ts-ignore
                     class ArgumentTypes {
                        // @ts-ignore
                        public static POSITION: org.spongepowered.api.text.selector.ArgumentHolder.Vector3;
                        // @ts-ignore
                        public static RADIUS: org.spongepowered.api.text.selector.ArgumentHolder.Limit;
                        // @ts-ignore
                        public static GAME_MODE: org.spongepowered.api.text.selector.ArgumentType;
                        // @ts-ignore
                        public static COUNT: org.spongepowered.api.text.selector.ArgumentType;
                        // @ts-ignore
                        public static LEVEL: org.spongepowered.api.text.selector.ArgumentHolder.Limit;
                        // @ts-ignore
                        public static TEAM: org.spongepowered.api.text.selector.ArgumentType.Invertible;
                        // @ts-ignore
                        public static NAME: org.spongepowered.api.text.selector.ArgumentType.Invertible;
                        // @ts-ignore
                        public static DIMENSION: org.spongepowered.api.text.selector.ArgumentHolder.Vector3;
                        // @ts-ignore
                        public static ROTATION: org.spongepowered.api.text.selector.ArgumentHolder.Limit;
                        // @ts-ignore
                        public static ENTITY_TYPE: org.spongepowered.api.text.selector.ArgumentType.Invertible;
                        /**
                         * Creates a minimum and maximum {@link ArgumentType} filtering depending on
                         * the score of the specified objective.
                         */
                        // @ts-ignore
                        public static score(name: string): org.spongepowered.api.text.selector.ArgumentHolder.Limit;
                        /**
                         * Gets the {@link ArgumentType} with the provided name.
                         */
                        // @ts-ignore
                        public static valueOf(name: string): any;
                        /**
                         * Gets a {@link Collection} of all possible {@link ArgumentType}s.
                         */
                        // @ts-ignore
                        public static values(): any[] /*java.util.Collection*/;
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key.
                         */
                        // @ts-ignore
                        public static create(key: string): org.spongepowered.api.text.selector.ArgumentType;
                        /**
                         * Creates a custom {@link ArgumentType} with the specified key and value.
                         */
                        // @ts-ignore
                        public static create(key: string, type: any): org.spongepowered.api.text.selector.ArgumentType;
                    }
                }
            }
        }
    }
}
