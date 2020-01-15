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
                        constructor(original: net.md_5.bungee.api.chat.ScoreComponent)
                        // @ts-ignore
                        constructor(name: string, objective: string, value: string)
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.ScoreComponent;
                        // @ts-ignore
                        protected toPlainText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        protected toLegacyText(builder: java.lang.StringBuilder): void;
                        /**
                         * The name of the entity whose score should be displayed.
                         */
                        // @ts-ignore
                        public getName(): string;
                        /**
                         * The internal name of the objective the score is attached to.
                         */
                        // @ts-ignore
                        public getObjective(): string;
                        /**
                         * The optional value to use instead of the one present in the Scoreboard.
                         */
                        // @ts-ignore
                        public getValue(): string;
                        /**
                         * The name of the entity whose score should be displayed.
                         */
                        // @ts-ignore
                        public setName(name: string): void;
                        /**
                         * The internal name of the objective the score is attached to.
                         */
                        // @ts-ignore
                        public setObjective(objective: string): void;
                        /**
                         * The optional value to use instead of the one present in the Scoreboard.
                         */
                        // @ts-ignore
                        public setValue(value: string): void;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        protected canEqual(other: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
