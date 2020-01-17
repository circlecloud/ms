declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                     class TranslatableComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a translatable component from the original to clone it.
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.TranslatableComponent)
                        /**
                         * Creates a translatable component with the passed substitutions
                         */
                        // @ts-ignore
                        constructor(translate: string, object: java.lang.Object)
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a duplicate of this TranslatableComponent.
                         */
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.BaseComponent;
                        /**
                         * Sets the translation substitutions to be used in this component. Removes
                         * any previously set substitutions
                         */
                        // @ts-ignore
                        public setWith(components: java.util.List): void;
                        /**
                         * Adds a text substitution to the component. The text will inherit this
                         * component's formatting
                         */
                        // @ts-ignore
                        public addWith(text: string): void;
                        /**
                         * Adds a component substitution to the component. The text will inherit
                         * this component's formatting
                         */
                        // @ts-ignore
                        public addWith(component: net.md_5.bungee.api.chat.BaseComponent): void;
                        // @ts-ignore
                        protected toPlainText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        protected toLegacyText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        public getFormat(): java.util.regex.Pattern;
                        /**
                         * The key into the Minecraft locale files to use for the translation. The
                         * text depends on the client's locale setting. The console is always en_US
                         */
                        // @ts-ignore
                        public getTranslate(): string;
                        /**
                         * The components to substitute into the translation
                         */
                        // @ts-ignore
                        public getWith(): java.util.List;
                        /**
                         * The key into the Minecraft locale files to use for the translation. The
                         * text depends on the client's locale setting. The console is always en_US
                         */
                        // @ts-ignore
                        public setTranslate(translate: string): void;
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
