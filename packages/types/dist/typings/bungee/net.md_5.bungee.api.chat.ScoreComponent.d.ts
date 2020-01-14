declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                     class ScoreComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a new score component with the specified name and objective.<br>
                         * If not specifically set, value will default to an empty string;
                         * signifying that the scoreboard value should take precedence. If not null,
                         * nor empty, {@code value} will override any value found in the
                         * scoreboard.<br>
                         * The value defaults to an empty string.
                         */
                        // @ts-ignore
                        constructor(name: string, objective: string)
                        /**
                         * Creates a score component from the original to clone it.
                         */
                        // @ts-ignore
                        constructor(original: any /*net.md_5.bungee.api.chat.ScoreComponent*/)
                        // @ts-ignore
                        public duplicate(): any /*net.md_5.bungee.api.chat.ScoreComponent*/;
                        // @ts-ignore
                        protected toPlainText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        protected toLegacyText(builder: java.lang.StringBuilder): void;
                    }
                }
            }
        }
    }
}
