// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace Text {
                    // @ts-ignore
                    abstract class Builder extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable {
                        /**
                         * Returns the current format of the {@link Text} in this builder.
                         */
                        // @ts-ignore
                        public getFormat(): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Sets the {@link TextFormat} of this text.
                         */
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Returns the current color of the {@link Text} in this builder.
                         */
                        // @ts-ignore
                        public getColor(): org.spongepowered.api.text.format.TextColor;
                        /**
                         * Sets the {@link TextColor} of this text.
                         */
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Returns the current style of the {@link Text} in this builder.
                         */
                        // @ts-ignore
                        public getStyle(): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Sets the text styles of this text. This will construct a composite
                         * {@link TextStyle} of the current style and the specified styles first
                         * and set it to the text.
                         */
                        // @ts-ignore
                        public style(styles: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Returns the current {@link ClickAction} of this builder.
                         */
                        // @ts-ignore
                        public getClickAction(): java.util.Optional;
                        /**
                         * Sets the {@link ClickAction} that will be executed if the text is
                         * clicked in the chat.
                         */
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Returns the current {@link HoverAction} of this builder.
                         */
                        // @ts-ignore
                        public getHoverAction(): java.util.Optional;
                        /**
                         * Sets the {@link HoverAction} that will be executed if the text is
                         * hovered in the chat.
                         */
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Returns the current {@link ShiftClickAction} of this builder.
                         */
                        // @ts-ignore
                        public getShiftClickAction(): java.util.Optional;
                        /**
                         * Sets the {@link ShiftClickAction} that will be executed if the text
                         * is shift-clicked in the chat.
                         */
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Returns a view of the current children of this builder.
                         * <p>The returned list is unmodifiable, but not immutable. It will
                         * change if new children get added through this builder.</p>
                         */
                        // @ts-ignore
                        public getChildren(): java.util.List;
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         */
                        // @ts-ignore
                        public append(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         */
                        // @ts-ignore
                        public append(children: java.util.Collection): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         */
                        // @ts-ignore
                        public append(children: java.lang.Iterable): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         */
                        // @ts-ignore
                        public append(children: java.util.Iterator): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         */
                        // @ts-ignore
                        public insert(pos: number, children: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         */
                        // @ts-ignore
                        public insert(pos: number, children: java.util.Collection): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         */
                        // @ts-ignore
                        public insert(pos: number, children: java.lang.Iterable): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         */
                        // @ts-ignore
                        public insert(pos: number, children: java.util.Iterator): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes the last child in this builder.
                         */
                        // @ts-ignore
                        public removeLastChild(): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes the child at the given index.
                         */
                        // @ts-ignore
                        public remove(index: number): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes the specified {@link Text} from this builder.
                         */
                        // @ts-ignore
                        public remove(children: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes the specified {@link Text} from this builder.
                         */
                        // @ts-ignore
                        public remove(children: java.util.Collection): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes the specified {@link Text} from this builder.
                         */
                        // @ts-ignore
                        public remove(children: java.lang.Iterable): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes the specified {@link Text} from this builder.
                         */
                        // @ts-ignore
                        public remove(children: java.util.Iterator): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes all children from this builder.
                         */
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Removes all empty texts from the beginning and end of this
                         * builder.
                         */
                        // @ts-ignore
                        public trim(): org.spongepowered.api.text.Text.Builder;
                        /**
                         * Builds an immutable instance of the current state of this text
                         * builder.
                         */
                        // @ts-ignore
                        public abstract build(): org.spongepowered.api.text.Text;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public toText(): org.spongepowered.api.text.Text;
                    }
                }
            }
        }
    }
}
