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
                    }
                }
            }
        }
    }
}
