declare namespace java {
    namespace text {
        // @ts-ignore
         class CollationElementIterator extends java.lang.Object {
            // @ts-ignore
            public static NULLORDER: number;
            /**
             * Resets the cursor to the beginning of the string.  The next call
             * to next() will return the first collation element in the string.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Get the next collation element in the string.  <p>This iterator iterates
             * over a sequence of collation elements that were built from the string.
             * Because there isn't necessarily a one-to-one mapping from characters to
             * collation elements, this doesn't mean the same thing as "return the
             * collation element [or ordering priority] of the next character in the
             * string".</p>
             * <p>This function returns the collation element that the iterator is currently
             * pointing to and then updates the internal pointer to point to the next element.
             * previous() updates the pointer first and then returns the element.  This
             * means that when you change direction while iterating (i.e., call next() and
             * then call previous(), or call previous() and then call next()), you'll get
             * back the same element twice.</p>
             */
            // @ts-ignore
            public next(): number;
            /**
             * Get the previous collation element in the string.  <p>This iterator iterates
             * over a sequence of collation elements that were built from the string.
             * Because there isn't necessarily a one-to-one mapping from characters to
             * collation elements, this doesn't mean the same thing as "return the
             * collation element [or ordering priority] of the previous character in the
             * string".</p>
             * <p>This function updates the iterator's internal pointer to point to the
             * collation element preceding the one it's currently pointing to and then
             * returns that element, while next() returns the current element and then
             * updates the pointer.  This means that when you change direction while
             * iterating (i.e., call next() and then call previous(), or call previous()
             * and then call next()), you'll get back the same element twice.</p>
             */
            // @ts-ignore
            public previous(): number;
            /**
             * Return the primary component of a collation element.
             */
            // @ts-ignore
            public static primaryOrder(order: number): number;
            /**
             * Return the secondary component of a collation element.
             */
            // @ts-ignore
            public static secondaryOrder(order: number): number;
            /**
             * Return the tertiary component of a collation element.
             */
            // @ts-ignore
            public static tertiaryOrder(order: number): number;
            /**
             * Sets the iterator to point to the collation element corresponding to
             * the specified character (the parameter is a CHARACTER offset in the
             * original string, not an offset into its corresponding sequence of
             * collation elements).  The value returned by the next call to next()
             * will be the collation element corresponding to the specified position
             * in the text.  If that position is in the middle of a contracting
             * character sequence, the result of the next call to next() is the
             * collation element for that sequence.  This means that getOffset()
             * is not guaranteed to return the same value as was passed to a preceding
             * call to setOffset().
             */
            // @ts-ignore
            public setOffset(newOffset: number): void;
            /**
             * Returns the character offset in the original text corresponding to the next
             * collation element.  (That is, getOffset() returns the position in the text
             * corresponding to the collation element that will be returned by the next
             * call to next().)  This value will always be the index of the FIRST character
             * corresponding to the collation element (a contracting character sequence is
             * when two or more characters all correspond to the same collation element).
             * This means if you do setOffset(x) followed immediately by getOffset(), getOffset()
             * won't necessarily return x.
             */
            // @ts-ignore
            public getOffset(): number;
            /**
             * Return the maximum length of any expansion sequences that end
             * with the specified comparison order.
             */
            // @ts-ignore
            public getMaxExpansion(order: number): number;
            /**
             * Set a new string over which to iterate.
             */
            // @ts-ignore
            public setText(source: string): void;
            /**
             * Set a new string over which to iterate.
             */
            // @ts-ignore
            public setText(source: java.text.CharacterIterator): void;
        }
    }
}
