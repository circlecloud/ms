declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                     class ClickEvent extends java.lang.Object {
                        // @ts-ignore
                        constructor(action: net.md_5.bungee.api.chat.ClickEvent.Action, value: string)
                        /**
                         * The type of action to perform on click
                         */
                        // @ts-ignore
                        public getAction(): net.md_5.bungee.api.chat.ClickEvent.Action;
                        /**
                         * Depends on action
                         */
                        // @ts-ignore
                        public getValue(): string;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                    }
                }
            }
        }
    }
}
