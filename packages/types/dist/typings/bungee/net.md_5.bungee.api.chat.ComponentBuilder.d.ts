declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                     class ComponentBuilder extends java.lang.Object {
                        /**
                         * Creates a ComponentBuilder from the other given ComponentBuilder to clone
                         * it.
                         */
                        // @ts-ignore
                        constructor(original: any /*net.md_5.bungee.api.chat.ComponentBuilder*/)
                        /**
                         * Creates a ComponentBuilder with the given text as the first part.
                         */
                        // @ts-ignore
                        constructor(text: string)
                        /**
                         * Creates a ComponentBuilder with the given component as the first part.
                         */
                        // @ts-ignore
                        constructor(component: any /*net.md_5.bungee.api.chat.BaseComponent*/)
                        /**
                         * Resets the cursor to index of the last element.
                         */
                        // @ts-ignore
                        public resetCursor(): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets the position of the current component to be modified
                         */
                        // @ts-ignore
                        public setCursor(pos: number): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Appends a component to the builder and makes it the current target for
                         * formatting. The component will have all the formatting from previous
                         * part.
                         */
                        // @ts-ignore
                        public append(component: any /*net.md_5.bungee.api.chat.BaseComponent*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Appends a component to the builder and makes it the current target for
                         * formatting. You can specify the amount of formatting retained from
                         * previous part.
                         */
                        // @ts-ignore
                        public append(component: any /*net.md_5.bungee.api.chat.BaseComponent*/, retention: any /*net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Appends the components to the builder and makes the last element the
                         * current target for formatting. The components will have all the
                         * formatting from previous part.
                         */
                        // @ts-ignore
                        public append(components: any /*net.md_5.bungee.api.chat.BaseComponent*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Appends the components to the builder and makes the last element the
                         * current target for formatting. You can specify the amount of formatting
                         * retained from previous part.
                         */
                        // @ts-ignore
                        public append(components: any /*net.md_5.bungee.api.chat.BaseComponent*/, retention: any /*net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Appends the text to the builder and makes it the current target for
                         * formatting. The text will have all the formatting from previous part.
                         */
                        // @ts-ignore
                        public append(text: string): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Parse text to BaseComponent[] with colors and format, appends the text to
                         * the builder and makes it the current target for formatting. The component
                         * will have all the formatting from previous part.
                         */
                        // @ts-ignore
                        public appendLegacy(text: string): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Appends the text to the builder and makes it the current target for
                         * formatting. You can specify the amount of formatting retained from
                         * previous part.
                         */
                        // @ts-ignore
                        public append(text: string, retention: any /*net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Allows joining additional components to this builder using the given
                         * {@link Joiner} and {@link FormatRetention#ALL}.
                         * Simply executes the provided joiner on this instance to facilitate a
                         * chain pattern.
                         */
                        // @ts-ignore
                        public append(joiner: any /*net.md_5.bungee.api.chat.ComponentBuilder.Joiner*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Allows joining additional components to this builder using the given
                         * {@link Joiner}.
                         * Simply executes the provided joiner on this instance to facilitate a
                         * chain pattern.
                         */
                        // @ts-ignore
                        public append(joiner: any /*net.md_5.bungee.api.chat.ComponentBuilder.Joiner*/, retention: any /*net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Remove the component part at the position of given index.
                         */
                        // @ts-ignore
                        public removeComponent(pos: number): void;
                        /**
                         * Gets the component part at the position of given index.
                         */
                        // @ts-ignore
                        public getComponent(pos: number): any /*net.md_5.bungee.api.chat.BaseComponent*/;
                        /**
                         * Gets the component at the position of the cursor.
                         */
                        // @ts-ignore
                        public getCurrentComponent(): any /*net.md_5.bungee.api.chat.BaseComponent*/;
                        /**
                         * Sets the color of the current part.
                         */
                        // @ts-ignore
                        public color(color: any /*net.md_5.bungee.api.ChatColor*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets whether the current part is bold.
                         */
                        // @ts-ignore
                        public bold(bold: boolean): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets whether the current part is italic.
                         */
                        // @ts-ignore
                        public italic(italic: boolean): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets whether the current part is underlined.
                         */
                        // @ts-ignore
                        public underlined(underlined: boolean): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets whether the current part is strikethrough.
                         */
                        // @ts-ignore
                        public strikethrough(strikethrough: boolean): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets whether the current part is obfuscated.
                         */
                        // @ts-ignore
                        public obfuscated(obfuscated: boolean): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets the insertion text for the current part.
                         */
                        // @ts-ignore
                        public insertion(insertion: string): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets the click event for the current part.
                         */
                        // @ts-ignore
                        public event(clickEvent: any /*net.md_5.bungee.api.chat.ClickEvent*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets the hover event for the current part.
                         */
                        // @ts-ignore
                        public event(hoverEvent: any /*net.md_5.bungee.api.chat.HoverEvent*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Sets the current part back to normal settings. Only text is kept.
                         */
                        // @ts-ignore
                        public reset(): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Retains only the specified formatting. Text is not modified.
                         */
                        // @ts-ignore
                        public retain(retention: any /*net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention*/): any /*net.md_5.bungee.api.chat.ComponentBuilder*/;
                        /**
                         * Returns the components needed to display the message created by this
                         * builder.git
                         */
                        // @ts-ignore
                        public create(): any /*net.md_5.bungee.api.chat.BaseComponent[]*/;
                    }
                }
            }
        }
    }
}
