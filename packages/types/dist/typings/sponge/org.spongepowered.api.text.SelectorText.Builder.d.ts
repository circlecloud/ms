// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace SelectorText {
                    // @ts-ignore
                     class Builder extends org.spongepowered.api.text.Text.Builder {
                        /**
                         * Returns the current selector of this builder.
                         */
                        // @ts-ignore
                        public getSelector(): org.spongepowered.api.text.selector.Selector;
                        /**
                         * Sets the selector of the text.
                         */
                        // @ts-ignore
                        public selector(selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public build(): org.spongepowered.api.text.SelectorText;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public style(styles: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public append(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public append(children: java.util.Collection): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public append(children: java.lang.Iterable): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public append(children: java.util.Iterator): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: org.spongepowered.api.text.Text): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: java.util.Collection): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: java.lang.Iterable): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public insert(pos: number, children: java.util.Iterator): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public remove(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public remove(children: java.util.Collection): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public remove(children: java.lang.Iterable): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public remove(children: java.util.Iterator): org.spongepowered.api.text.SelectorText.Builder;
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.SelectorText.Builder;
                    }
                }
            }
        }
    }
}
