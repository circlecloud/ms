// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
        interface AttributedCharacterIterator {
            /**
             * Returns the index of the first character of the run
             * with respect to all attributes containing the current character.
             * <p>Any contiguous text segments having the same attributes (the
             * same set of attribute/value pairs) are treated as separate runs
             * if the attributes have been given to those text segments separately.
             */
            // @ts-ignore
             getRunStart(): number;
            /**
             * Returns the index of the first character of the run
             * with respect to the given {@code attribute} containing the current character.
             */
            // @ts-ignore
             getRunStart(attribute: java.text.AttributedCharacterIterator.Attribute): number;
            /**
             * Returns the index of the first character of the run
             * with respect to the given {@code attributes} containing the current character.
             */
            // @ts-ignore
             getRunStart(attributes: java.util.Set): number;
            /**
             * Returns the index of the first character following the run
             * with respect to all attributes containing the current character.
             * <p>Any contiguous text segments having the same attributes (the
             * same set of attribute/value pairs) are treated as separate runs
             * if the attributes have been given to those text segments separately.
             */
            // @ts-ignore
             getRunLimit(): number;
            /**
             * Returns the index of the first character following the run
             * with respect to the given {@code attribute} containing the current character.
             */
            // @ts-ignore
             getRunLimit(attribute: java.text.AttributedCharacterIterator.Attribute): number;
            /**
             * Returns the index of the first character following the run
             * with respect to the given {@code attributes} containing the current character.
             */
            // @ts-ignore
             getRunLimit(attributes: java.util.Set): number;
            /**
             * Returns a map with the attributes defined on the current
             * character.
             */
            // @ts-ignore
             getAttributes(): java.util.Map;
            /**
             * Returns the value of the named {@code attribute} for the current character.
             * Returns {@code null} if the {@code attribute} is not defined.
             */
            // @ts-ignore
             getAttribute(attribute: java.text.AttributedCharacterIterator.Attribute): java.lang.Object;
            /**
             * Returns the keys of all attributes defined on the
             * iterator's text range. The set is empty if no
             * attributes are defined.
             */
            // @ts-ignore
             getAllAttributeKeys(): java.util.Set;
        }
    }
}
