declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    // @ts-ignore
                    abstract class TextAction implements org.spongepowered.api.text.TextElement {
                        /**
                         * Constructs a new {@link TextAction} with the given result.
                         */
                        constructor(result: any)
                        // @ts-ignore
                        protected result: any;
                        /**
                         * Returns the result of this {@link TextAction}.
                         */
                        // @ts-ignore
                        public getResult(): any;
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
