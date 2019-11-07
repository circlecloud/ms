// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace TextTemplate {
                    // @ts-ignore
                     class Arg extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable {
                        /**
                         * Returns the name of this argument to be matched with incoming
                         * parameters.
                         */
                        // @ts-ignore
                        public getName(): string;
                        /**
                         * Returns true if this Arg is optional. If a parameter is missing for
                         * a non-optional Arg, a {@link TextTemplateArgumentException} will be
                         * thrown.
                         */
                        // @ts-ignore
                        public isOptional(): boolean;
                        /**
                         * Returns the default value to use if the Arg {@link #isOptional()}
                         * and no parameter is supplied.
                         */
                        // @ts-ignore
                        public getDefaultValue(): java.util.Optional;
                        /**
                         * Returns the base format to be applied to this Arg.
                         */
                        // @ts-ignore
                        public getFormat(): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Returns the beginning string of the Arg's container.
                         */
                        // @ts-ignore
                        public getOpenArgString(): string;
                        /**
                         * Returns the end string of the Arg's container.
                         */
                        // @ts-ignore
                        public getCloseArgString(): string;
                        // @ts-ignore
                        public toText(): org.spongepowered.api.text.Text;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public equals(obj: java.lang.Object): boolean;
                    }
                }
            }
        }
    }
}
