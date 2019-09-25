declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace TranslatableText {
                    // @ts-ignore
                     class Builder extends org.spongepowered.api.text.Text.Builder {
                        /**
                         * Returns the current translation of this builder.
                         */
                        // @ts-ignore
                        public getTranslation(): org.spongepowered.api.text.translation.Translation;
                        /**
                         * Returns the current translation arguments of this builder.
                         */
                        // @ts-ignore
                        public getArguments(): any;
                        /**
                         * Sets the translation of the text.
                         */
                        // @ts-ignore
                        public translation(translation: org.spongepowered.api.text.translation.Translation, args: any): org.spongepowered.api.text.TranslatableText.Builder;
                        /**
                         * Sets the translation of the text.
                         */
                        // @ts-ignore
                        public translation(translatable: org.spongepowered.api.text.translation.Translatable, args: any): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public build(): org.spongepowered.api.text.TranslatableText;
                        // @ts-ignore
                        public equals(o: any): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public style(styles: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public append(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public append(children: any[] /*java.util.Collection*/): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public append(children: any): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public append(children: any): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: org.spongepowered.api.text.Text): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: any[] /*java.util.Collection*/): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: any): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: any): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public remove(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public remove(children: any[] /*java.util.Collection*/): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public remove(children: any): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public remove(children: any): org.spongepowered.api.text.TranslatableText.Builder;
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.TranslatableText.Builder;
                    }
                }
            }
        }
    }
}
