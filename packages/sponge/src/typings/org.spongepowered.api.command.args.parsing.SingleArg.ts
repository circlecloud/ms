declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace parsing {
                        // @ts-ignore
                         class SingleArg {
                            /**
                             * Create a new argument.
                             */
                            constructor(value: string, startIdx: number, endIdx: number)
                            /**
                             * Gets the string used.
                             */
                            // @ts-ignore
                            public getValue(): string;
                            /**
                             * Gets the starting index.
                             */
                            // @ts-ignore
                            public getStartIdx(): number;
                            /**
                             * Gets the ending index.
                             */
                            // @ts-ignore
                            public getEndIdx(): number;
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
}
