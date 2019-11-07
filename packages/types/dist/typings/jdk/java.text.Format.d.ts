declare namespace java {
    namespace text {
        // @ts-ignore
        abstract class Format extends java.lang.Object {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            /**
             * Formats an object to produce a string. This is equivalent to
             * <blockquote>
             * {@link #format(Object, StringBuffer, FieldPosition) format}<code>(obj,
             * new StringBuffer(), new FieldPosition(0)).toString();</code>
             * </blockquote>
             */
            // @ts-ignore
            public format(obj: java.lang.Object): string;
            /**
             * Formats an Object producing an <code>AttributedCharacterIterator</code>.
             * You can use the returned <code>AttributedCharacterIterator</code>
             * to build the resulting String, as well as to determine information
             * about the resulting String.
             * <p>
             * Each attribute key of the AttributedCharacterIterator will be of type
             * <code>Field</code>. It is up to each <code>Format</code> implementation
             * to define what the legal values are for each attribute in the
             * <code>AttributedCharacterIterator</code>, but typically the attribute
             * key is also used as the attribute value.
             * <p>The default implementation creates an
             * <code>AttributedCharacterIterator</code> with no attributes. Subclasses
             * that support fields should override this and create an
             * <code>AttributedCharacterIterator</code> with meaningful attributes.
             */
            // @ts-ignore
            public formatToCharacterIterator(obj: java.lang.Object): java.text.AttributedCharacterIterator;
            /**
             * Parses text from a string to produce an object.
             * <p>
             * The method attempts to parse text starting at the index given by
             * <code>pos</code>.
             * If parsing succeeds, then the index of <code>pos</code> is updated
             * to the index after the last character used (parsing does not necessarily
             * use all characters up to the end of the string), and the parsed
             * object is returned. The updated <code>pos</code> can be used to
             * indicate the starting point for the next call to this method.
             * If an error occurs, then the index of <code>pos</code> is not
             * changed, the error index of <code>pos</code> is set to the index of
             * the character where the error occurred, and null is returned.
             */
            // @ts-ignore
            public abstract parseObject(source: string, pos: java.text.ParsePosition): java.lang.Object;
            /**
             * Parses text from the beginning of the given string to produce an object.
             * The method may not use the entire text of the given string.
             */
            // @ts-ignore
            public parseObject(source: string): java.lang.Object;
            /**
             * Creates and returns a copy of this object.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
