declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    // @ts-ignore
                    abstract class TextAction extends java.lang.Object implements org.spongepowered.api.text.TextElement {
                        /**
                         * Constructs a new {@link TextAction} with the given result.
                         */
                        // @ts-ignore
                        constructor(result: java.lang.Object)
                        // @ts-ignore
                        protected result: java.lang.Object;
                        /**
                         * Returns the result of this {@link TextAction}.
                         */
                        // @ts-ignore
                        public getResult(): java.lang.Object;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
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
