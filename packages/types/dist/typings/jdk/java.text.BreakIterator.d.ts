declare namespace java {
    namespace text {
        // @ts-ignore
        abstract class BreakIterator extends java.lang.Object {
            /**
             * Constructor. BreakIterator is stateless and has no default behavior.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static DONE: number;
            /**
             * Create a copy of this iterator
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns the first boundary. The iterator's current position is set
             * to the first text boundary.
             */
            // @ts-ignore
            public abstract first(): number;
            /**
             * Returns the last boundary. The iterator's current position is set
             * to the last text boundary.
             */
            // @ts-ignore
            public abstract last(): number;
            /**
             * Returns the nth boundary from the current boundary. If either
             * the first or last text boundary has been reached, it returns
             * <code>BreakIterator.DONE</code> and the current position is set to either
             * the first or last text boundary depending on which one is reached. Otherwise,
             * the iterator's current position is set to the new boundary.
             * For example, if the iterator's current position is the mth text boundary
             * and three more boundaries exist from the current boundary to the last text
             * boundary, the next(2) call will return m + 2. The new text position is set
             * to the (m + 2)th text boundary. A next(4) call would return
             * <code>BreakIterator.DONE</code> and the last text boundary would become the
             * new text position.
             */
            // @ts-ignore
            public abstract next(n: number): number;
            /**
             * Returns the boundary preceding the current boundary. If the current boundary
             * is the first text boundary, it returns <code>BreakIterator.DONE</code> and
             * the iterator's current position is unchanged. Otherwise, the iterator's
             * current position is set to the boundary preceding the current boundary.
             */
            // @ts-ignore
            public abstract previous(): number;
            /**
             * Returns the first boundary following the specified character offset. If the
             * specified offset equals to the last text boundary, it returns
             * <code>BreakIterator.DONE</code> and the iterator's current position is unchanged.
             * Otherwise, the iterator's current position is set to the returned boundary.
             * The value returned is always greater than the offset or the value
             * <code>BreakIterator.DONE</code>.
             */
            // @ts-ignore
            public abstract following(offset: number): number;
            /**
             * Returns the last boundary preceding the specified character offset. If the
             * specified offset equals to the first text boundary, it returns
             * <code>BreakIterator.DONE</code> and the iterator's current position is unchanged.
             * Otherwise, the iterator's current position is set to the returned boundary.
             * The value returned is always less than the offset or the value
             * <code>BreakIterator.DONE</code>.
             */
            // @ts-ignore
            public preceding(offset: number): number;
            /**
             * Returns true if the specified character offset is a text boundary.
             */
            // @ts-ignore
            public isBoundary(offset: number): boolean;
            /**
             * Returns character index of the text boundary that was most
             * recently returned by next(), next(int), previous(), first(), last(),
             * following(int) or preceding(int). If any of these methods returns
             * <code>BreakIterator.DONE</code> because either first or last text boundary
             * has been reached, it returns the first or last text boundary depending on
             * which one is reached.
             */
            // @ts-ignore
            public abstract current(): number;
            /**
             * Get the text being scanned
             */
            // @ts-ignore
            public abstract getText(): java.text.CharacterIterator;
            /**
             * Set a new text string to be scanned.  The current scan
             * position is reset to first().
             */
            // @ts-ignore
            public setText(newText: string): void;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#word">word breaks</a>
             * for the {@linkplain Locale#getDefault() default locale}.
             */
            // @ts-ignore
            public static getWordInstance(): java.text.BreakIterator;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#word">word breaks</a>
             * for the given locale.
             */
            // @ts-ignore
            public static getWordInstance(locale: java.util.Locale): java.text.BreakIterator;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#line">line breaks</a>
             * for the {@linkplain Locale#getDefault() default locale}.
             */
            // @ts-ignore
            public static getLineInstance(): java.text.BreakIterator;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#line">line breaks</a>
             * for the given locale.
             */
            // @ts-ignore
            public static getLineInstance(locale: java.util.Locale): java.text.BreakIterator;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#character">character breaks</a>
             * for the {@linkplain Locale#getDefault() default locale}.
             */
            // @ts-ignore
            public static getCharacterInstance(): java.text.BreakIterator;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#character">character breaks</a>
             * for the given locale.
             */
            // @ts-ignore
            public static getCharacterInstance(locale: java.util.Locale): java.text.BreakIterator;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#sentence">sentence breaks</a>
             * for the {@linkplain Locale#getDefault() default locale}.
             */
            // @ts-ignore
            public static getSentenceInstance(): java.text.BreakIterator;
            /**
             * Returns a new <code>BreakIterator</code> instance
             * for <a href="BreakIterator.html#sentence">sentence breaks</a>
             * for the given locale.
             */
            // @ts-ignore
            public static getSentenceInstance(locale: java.util.Locale): java.text.BreakIterator;
            /**
             * Returns an array of all locales for which the
             * <code>get*Instance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the Java
             * runtime and by installed
             * {@link java.text.spi.BreakIteratorProvider BreakIteratorProvider} implementations.
             * It must contain at least a <code>Locale</code>
             * instance equal to {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
        }
    }
}
