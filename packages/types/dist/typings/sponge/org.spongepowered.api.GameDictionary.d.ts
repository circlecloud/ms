declare namespace org {
    namespace spongepowered {
        namespace api {
            // @ts-ignore
            interface GameDictionary {
                /**
                 * Registers an {@link org.spongepowered.api.GameDictionary.Entry}
                 * in the dictionary with a String key. The stack size is ignored.
                 */
                // @ts-ignore
                 register(key: string, entry: org.spongepowered.api.GameDictionary.Entry): void;
                /**
                 * Retrieves the entries registered for the given key. The stack sizes are
                 * set to 1.
                 */
                // @ts-ignore
                 get(key: string): java.util.Set;
                /**
                 * Retrieves all entries registered in this game dictionary, mapped by their
                 * key.
                 */
                // @ts-ignore
                 getAll(): any;
            }
        }
    }
}
