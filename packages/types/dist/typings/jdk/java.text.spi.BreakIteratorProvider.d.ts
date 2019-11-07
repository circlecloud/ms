declare namespace java {
    namespace text {
        namespace spi {
            // @ts-ignore
            abstract class BreakIteratorProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#word">word breaks</a>
                 * for the given locale.
                 */
                // @ts-ignore
                public abstract getWordInstance(locale: java.util.Locale): java.text.BreakIterator;
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#line">line breaks</a>
                 * for the given locale.
                 */
                // @ts-ignore
                public abstract getLineInstance(locale: java.util.Locale): java.text.BreakIterator;
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#character">character breaks</a>
                 * for the given locale.
                 */
                // @ts-ignore
                public abstract getCharacterInstance(locale: java.util.Locale): java.text.BreakIterator;
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#sentence">sentence breaks</a>
                 * for the given locale.
                 */
                // @ts-ignore
                public abstract getSentenceInstance(locale: java.util.Locale): java.text.BreakIterator;
            }
        }
    }
}
