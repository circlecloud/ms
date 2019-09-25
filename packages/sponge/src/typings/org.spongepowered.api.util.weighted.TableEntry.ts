declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                    abstract class TableEntry {
                        /**
                         * Creates a new {@link TableEntry} with the desired {@code weight}.
                         */
                        constructor(weight: number)
                        /**
                         * Gets the weight of this entry.
                         */
                        // @ts-ignore
                        public getWeight(): number;
                    }
                }
            }
        }
    }
}
