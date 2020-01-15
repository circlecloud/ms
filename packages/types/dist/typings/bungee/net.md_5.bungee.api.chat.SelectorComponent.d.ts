declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                     class SelectorComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a selector component from the original to clone it.
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.SelectorComponent)
                        // @ts-ignore
                        constructor(selector: string)
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.SelectorComponent;
                        // @ts-ignore
                        protected toPlainText(builder: java.lang.StringBuilder): void;
                        // @ts-ignore
                        protected toLegacyText(builder: java.lang.StringBuilder): void;
                        /**
                         * An entity target selector (@p, @a, @r, @e, or @s) and, optionally,
                         * selector arguments (e.g. @e[r=10,type=Creeper]).
                         */
                        // @ts-ignore
                        public getSelector(): string;
                        /**
                         * An entity target selector (@p, @a, @r, @e, or @s) and, optionally,
                         * selector arguments (e.g. @e[r=10,type=Creeper]).
                         */
                        // @ts-ignore
                        public setSelector(selector: string): void;
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
