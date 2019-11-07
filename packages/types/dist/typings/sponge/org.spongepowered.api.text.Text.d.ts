declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                // @ts-ignore
                abstract class Text extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable, org.spongepowered.api.data.DataSerializable {
                    // @ts-ignore
                    public static EMPTY: org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public static NEW_LINE: org.spongepowered.api.text.LiteralText;
                    // @ts-ignore
                    public static PLAIN_COMPARATOR: java.util.Comparator;
                    /**
                     * Returns the format of this {@link Text}.
                     */
                    // @ts-ignore
                    public getFormat(): org.spongepowered.api.text.format.TextFormat;
                    /**
                     * Returns the color of this {@link Text}.
                     */
                    // @ts-ignore
                    public getColor(): org.spongepowered.api.text.format.TextColor;
                    /**
                     * Returns the style of this {@link Text}. This will return a compound
                     * {@link TextStyle} if multiple different styles have been set.
                     */
                    // @ts-ignore
                    public getStyle(): org.spongepowered.api.text.format.TextStyle;
                    /**
                     * Returns the immutable list of children appended after the content of this
                     * {@link Text}.
                     */
                    // @ts-ignore
                    public getChildren(): any;
                    /**
                     * Returns an immutable {@link Iterable} over this text and all of its
                     * children. This is recursive, the children of the children will be also
                     * included.
                     */
                    // @ts-ignore
                    public withChildren(): java.lang.Iterable;
                    /**
                     * Returns the {@link ClickAction} executed on the client when this
                     * {@link Text} gets clicked.
                     */
                    // @ts-ignore
                    public getClickAction(): java.util.Optional;
                    /**
                     * Returns the {@link HoverAction} executed on the client when this
                     * {@link Text} gets hovered.
                     */
                    // @ts-ignore
                    public getHoverAction(): java.util.Optional;
                    /**
                     * Returns the {@link ShiftClickAction} executed on the client when this
                     * {@link Text} gets shift-clicked.
                     */
                    // @ts-ignore
                    public getShiftClickAction(): java.util.Optional;
                    /**
                     * Returns whether this {@link Text} is empty.
                     */
                    // @ts-ignore
                    public isEmpty(): boolean;
                    /**
                     * Returns a new {@link Builder} with the content, formatting and actions of
                     * this text. This can be used to edit an otherwise immutable {@link Text}
                     * instance.
                     */
                    // @ts-ignore
                    public abstract toBuilder(): org.spongepowered.api.text.Text.Builder;
                    /**
                     * Returns a plain text representation of this {@link Text} without any
                     * formatting.
                     */
                    // @ts-ignore
                    public toPlain(): string;
                    /**
                     * Returns a plain text representation of this {@link Text} without any
                     * children.
                     */
                    // @ts-ignore
                    public toPlainSingle(): string;
                    /**
                     * Concatenates the specified {@link Text} to this Text and returns the
                     * result.
                     */
                    // @ts-ignore
                    public concat(other: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text;
                    /**
                     * Removes all empty texts from the beginning and end of this
                     * text.
                     */
                    // @ts-ignore
                    public trim(): org.spongepowered.api.text.Text;
                    /**
                     * Replaces a pattern in this text with a {@link Text}, preserving
                     * formatting where possible.
                     * <p>If {@code lossy} is true, this will replace the pattern if this finds
                     * it spanning multiple child {@link Text}s, resulting in a potential loss
                     * of formatting; if false, it will only replace the pattern where it is
                     * contained within one child {@link Text}, to preserve all formatting.</p>
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     */
                    // @ts-ignore
                    public replace(oldValue: java.util.regex.Pattern, newValue: org.spongepowered.api.text.Text, lossy: boolean): org.spongepowered.api.text.Text;
                    /**
                     * Replaces a pattern in this text with a {@link Text}, preserving all
                     * formatting.
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     */
                    // @ts-ignore
                    public replace(oldValue: java.util.regex.Pattern, newValue: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text;
                    /**
                     * Replaces a string within this text with a {@link Text}, preserving
                     * formatting where possible.
                     * <p>If {@code lossy} is true, this will replace the pattern if this finds
                     * it spanning multiple child {@link Text}s, resulting in a potential loss
                     * of formatting; if false, it will only replace the pattern where it is
                     * contained within one child {@link Text}, to preserve all formatting.</p>
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     */
                    // @ts-ignore
                    public replace(oldValue: string, newValue: org.spongepowered.api.text.Text, lossy: boolean): org.spongepowered.api.text.Text;
                    /**
                     * Replaces a string within this text with a {@link Text}, preserving all
                     * formatting.
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     */
                    // @ts-ignore
                    public replace(oldValue: string, newValue: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public getContentVersion(): number;
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public compareTo(o: org.spongepowered.api.text.Text): number;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public toText(): org.spongepowered.api.text.Text;
                    /**
                     * Returns an empty, unformatted {@link Text} instance.
                     */
                    // @ts-ignore
                    public static of(): org.spongepowered.api.text.Text;
                    /**
                     * Creates a {@link Text} with the specified plain text. The created text
                     * won't have any formatting or events configured.
                     */
                    // @ts-ignore
                    public static of(content: string): org.spongepowered.api.text.LiteralText;
                    /**
                     * Creates a {@link Text} with the specified char as plain text. The created
                     * text won't have any formatting or events configured.
                     */
                    // @ts-ignore
                    public static of(content: string): org.spongepowered.api.text.LiteralText;
                    /**
                     * Creates a new unformatted {@link TranslatableText} with the given
                     * {@link Translation} and arguments.
                     */
                    // @ts-ignore
                    public static of(translation: org.spongepowered.api.text.translation.Translation, args: java.lang.Object): org.spongepowered.api.text.TranslatableText;
                    /**
                     * Creates a new unformatted {@link TranslatableText} from the given
                     * {@link Translatable}.
                     */
                    // @ts-ignore
                    public static of(translatable: org.spongepowered.api.text.translation.Translatable, args: java.lang.Object): org.spongepowered.api.text.TranslatableText;
                    /**
                     * Creates a new unformatted {@link SelectorText} with the given selector.
                     */
                    // @ts-ignore
                    public static of(selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText;
                    /**
                     * Creates a new unformatted {@link ScoreText} with the given score.
                     */
                    // @ts-ignore
                    public static of(score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText;
                    /**
                     * Builds a {@link Text} from a given array of objects.
                     * <p>For instance, you can use this like
                     * <code>Text.of(TextColors.DARK_AQUA, "Hi", TextColors.AQUA, "Bye")</code>
                     * </p>
                     * <p>This will create the correct {@link Text} instance if the input object
                     * is the input for one of the {@link Text} types or convert the object to a
                     * string otherwise.</p>
                     * <p>For instances of type {@link TextRepresentable} (e.g. {@link Text},
                     * {@link Builder}, ...) the formatting of appended text has priority over
                     * the current formatting in the method, e.g. the following results in a
                     * green, then yellow and at the end green again {@link Text}:</p>
                     * <code>Text.of(TextColors.GREEN, "Hello ", Text.of(TextColors.YELLOW,
                     * "Spongie"), '!');</code>
                     */
                    // @ts-ignore
                    public static of(objects: java.lang.Object): org.spongepowered.api.text.Text;
                    /**
                     * Creates a {@link Text.Builder} with empty text.
                     */
                    // @ts-ignore
                    public static builder(): org.spongepowered.api.text.Text.Builder;
                    /**
                     * Creates a new unformatted {@link LiteralText.Builder} with the specified
                     * content.
                     */
                    // @ts-ignore
                    public static builder(content: string): org.spongepowered.api.text.LiteralText.Builder;
                    /**
                     * Creates a new unformatted {@link LiteralText.Builder} with the specified
                     * content.
                     */
                    // @ts-ignore
                    public static builder(content: string): org.spongepowered.api.text.LiteralText.Builder;
                    /**
                     * Creates a new {@link LiteralText.Builder} with the formatting and actions
                     * of the specified {@link Text} and the given content.
                     */
                    // @ts-ignore
                    public static builder(text: org.spongepowered.api.text.Text, content: string): org.spongepowered.api.text.LiteralText.Builder;
                    /**
                     * Creates a new unformatted {@link TranslatableText.Builder} with the given
                     * {@link Translation} and arguments.
                     */
                    // @ts-ignore
                    public static builder(translation: org.spongepowered.api.text.translation.Translation, args: java.lang.Object): org.spongepowered.api.text.TranslatableText.Builder;
                    /**
                     * Creates a new unformatted {@link TranslatableText.Builder} from the given
                     * {@link Translatable}.
                     */
                    // @ts-ignore
                    public static builder(translatable: org.spongepowered.api.text.translation.Translatable, args: java.lang.Object): org.spongepowered.api.text.TranslatableText.Builder;
                    /**
                     * Creates a new {@link TranslatableText.Builder} with the formatting and
                     * actions of the specified {@link Text} and the given {@link Translation}
                     * and arguments.
                     */
                    // @ts-ignore
                    public static builder(text: org.spongepowered.api.text.Text, translation: org.spongepowered.api.text.translation.Translation, args: java.lang.Object): org.spongepowered.api.text.TranslatableText.Builder;
                    /**
                     * Creates a new {@link TranslatableText.Builder} with the formatting and
                     * actions of the specified {@link Text} and the given {@link Translatable}.
                     */
                    // @ts-ignore
                    public static builder(text: org.spongepowered.api.text.Text, translatable: org.spongepowered.api.text.translation.Translatable, args: java.lang.Object): org.spongepowered.api.text.TranslatableText.Builder;
                    /**
                     * Creates a new unformatted {@link SelectorText.Builder} with the given
                     * selector.
                     */
                    // @ts-ignore
                    public static builder(selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText.Builder;
                    /**
                     * Creates a new {@link SelectorText.Builder} with the formatting and
                     * actions of the specified {@link Text} and the given selector.
                     */
                    // @ts-ignore
                    public static builder(text: org.spongepowered.api.text.Text, selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText.Builder;
                    /**
                     * Creates a new unformatted {@link ScoreText.Builder} with the given score.
                     */
                    // @ts-ignore
                    public static builder(score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText.Builder;
                    /**
                     * Creates a new {@link ScoreText.Builder} with the formatting and actions
                     * of the specified {@link Text} and the given score.
                     */
                    // @ts-ignore
                    public static builder(text: org.spongepowered.api.text.Text, score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText.Builder;
                    /**
                     * Joins a sequence of text objects together.
                     */
                    // @ts-ignore
                    public static join(texts: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text;
                    /**
                     * Joins a sequence of text objects together.
                     */
                    // @ts-ignore
                    public static join(texts: java.lang.Iterable): org.spongepowered.api.text.Text;
                    /**
                     * Joins a sequence of text objects together.
                     */
                    // @ts-ignore
                    public static join(texts: java.util.Iterator): org.spongepowered.api.text.Text;
                    /**
                     * Joins a sequence of text objects together along with a separator.
                     */
                    // @ts-ignore
                    public static joinWith(separator: org.spongepowered.api.text.Text, texts: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text;
                    /**
                     * Joins a sequence of text objects together along with a separator.
                     */
                    // @ts-ignore
                    public static joinWith(separator: org.spongepowered.api.text.Text, texts: java.lang.Iterable): org.spongepowered.api.text.Text;
                    /**
                     * Joins a sequence of text objects together along with a separator.
                     */
                    // @ts-ignore
                    public static joinWith(separator: org.spongepowered.api.text.Text, texts: java.util.Iterator): org.spongepowered.api.text.Text;
                }
            }
        }
    }
}
