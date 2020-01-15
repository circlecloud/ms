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
                        constructor()
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.BaseComponent;
                        // @ts-ignore
                        protected toPlainText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        protected toLegacyText(builder: java.lang.StringBuilder): void;
                        /**
                         * The keybind identifier to use.
                         * <br>
                         * Will be replaced with the actual key the client is using.
                         */
                        // @ts-ignore
                        public getKeybind(): string;
                        /**
                         * The keybind identifier to use.
                         * <br>
                         * Will be replaced with the actual key the client is using.
                         */
                        // @ts-ignore
                        public setKeybind(keybind: string): void;
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
