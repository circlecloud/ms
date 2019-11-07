declare namespace org {
    namespace bukkit {
        namespace configuration {
            namespace serialization {
                // @ts-ignore
                interface SerializableAs {
                    /**
                     * This is the name your class will be stored and retrieved as.
                     * <p>
                     * This name MUST be unique. We recommend using names such as
                     * "MyPluginThing" instead of "Thing".
                     */
                    // @ts-ignore
                     value(): string;
                }
            }
        }
    }
}
