declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    // @ts-ignore
                    abstract class SelectorCommandElement extends org.spongepowered.api.command.args.PatternMatchingCommandElement {
                        // @ts-ignore
                        constructor(key: org.spongepowered.api.text.Text)
                        // @ts-ignore
                        protected parseValue(source: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs): java.lang.Object;
                        // @ts-ignore
                        public complete(src: org.spongepowered.api.command.CommandSource, args: org.spongepowered.api.command.args.CommandArgs, context: org.spongepowered.api.command.args.CommandContext): java.util.List;
                    }
                }
            }
        }
    }
}
