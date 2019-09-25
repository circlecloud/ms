declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                     class NestedTableEntry extends org.spongepowered.api.util.weighted.TableEntry {
                        /**
                         * Creates a new {@link NestedTableEntry} with the provided
                         * {@code weight} and {@link RandomObjectTable table}.
                         */
                        constructor(weight: number, table: org.spongepowered.api.util.weighted.RandomObjectTable)
                        /**
                         * Retrieves entries from the nested table.
                         */
                        // @ts-ignore
                        public get(rand: any): any[] /*java.util.List*/;
                        // @ts-ignore
                        public equals(o: any): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
