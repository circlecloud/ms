declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                     class ChanceTable extends org.spongepowered.api.util.weighted.RandomObjectTable {
                        /**
                         * Creates a new {@link ChanceTable} with a default roll count of 1.
                         */
                        constructor()
                        /**
                         * Creates a new {@link ChanceTable}.
                         */
                        constructor(rolls: number)
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
