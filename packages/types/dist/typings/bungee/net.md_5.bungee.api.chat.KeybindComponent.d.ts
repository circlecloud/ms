declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                     class KeybindComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a keybind component from the original to clone it.
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.KeybindComponent)
                        /**
                         * Creates a keybind component with the passed internal keybind value.
                         */
                        // @ts-ignore
                        constructor(keybind: string)
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.BaseComponent;
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
