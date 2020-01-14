declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    namespace ComponentBuilder {
                        // @ts-ignore
                        interface Joiner {
                            /**
                             * Joins additional components to the provided {@link ComponentBuilder}
                             * and then returns it to fulfill a chain pattern.
                             * Retention may be ignored and is to be understood as an optional
                             * recommendation to the Joiner and not as a guarantee to have a
                             * previous component in builder unmodified.
                             */
                            // @ts-ignore
                             join(componentBuilder: any /*net.md_5.bungee.api.chat.ComponentBuilder*/, retention: any /*net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        }
                    }
                }
            }
        }
    }
}
