declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace parsing {
                        // @ts-ignore
                        interface InputTokenizer {
                            /**
                             * Use an input string tokenizer that supports quoted arguments and
                             * character escapes.
                             * <p>Forcing lenient to true makes the following apply:</p>
                             * <ul>
                             * <li>Unclosed quotations are treated as a single string from the
                             * opening quotation to the end of the arguments rather than throwing
                             * an exception </li>
                             * </ul>
                             */
                            // @ts-ignore
                             quotedStrings(forceLenient: boolean): org.spongepowered.api.command.args.parsing.InputTokenizer;
                            /**
                             * Returns an input tokenizer that takes input strings and splits them by
                             * space.
                             */
                            // @ts-ignore
                             spaceSplitString(): org.spongepowered.api.command.args.parsing.InputTokenizer;
                            /**
                             * Returns an input tokenizer that returns the input string as a single
                             * argument.
                             */
                            // @ts-ignore
                             rawInput(): org.spongepowered.api.command.args.parsing.InputTokenizer;
                            /**
                             * Take the input string and split it as appropriate into argument tokens.
                             */
                            // @ts-ignore
                             tokenize(arguments: string, lenient: boolean): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
