declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                     class TextComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a TextComponent with blank text.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a TextComponent with formatting and text from the passed
                         * component
                         */
                        // @ts-ignore
                        constructor(textComponent: net.md_5.bungee.api.chat.TextComponent)
                        /**
                         * Creates a TextComponent with blank text and the extras set to the passed
                         * array
                         */
                        // @ts-ignore
                        constructor(extras: net.md_5.bungee.api.chat.BaseComponent)
                        // @ts-ignore
                        constructor(text: string)
                        /**
                         * Converts the old formatting system that used
                         * {@link net.md_5.bungee.api.ChatColor#COLOR_CHAR} into the new json based
                         * system.
                         */
                        // @ts-ignore
                        public static fromLegacyText(message: string): net.md_5.bungee.api.chat.BaseComponent[];
                        /**
                         * Converts the old formatting system that used
                         * {@link net.md_5.bungee.api.ChatColor#COLOR_CHAR} into the new json based
                         * system.
                         */
                        // @ts-ignore
                        public static fromLegacyText(message: string, defaultColor: net.md_5.bungee.api.ChatColor): net.md_5.bungee.api.chat.BaseComponent[];
                        /**
                         * Creates a duplicate of this TextComponent.
                         */
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.BaseComponent;
                        // @ts-ignore
                        protected toPlainText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        protected toLegacyText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        public toString(): string;
                        /**
                         * The text of the component that will be displayed to the client
                         */
                        // @ts-ignore
                        public getText(): string;
                        /**
                         * The text of the component that will be displayed to the client
                         */
                        // @ts-ignore
                        public setText(text: string): void;
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
