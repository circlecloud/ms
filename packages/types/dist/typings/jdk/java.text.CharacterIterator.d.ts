// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
        interface CharacterIterator {
            // @ts-ignore
             DONE: string;
            /**
             * Sets the position to getBeginIndex() and returns the character at that
             * position.
             */
            // @ts-ignore
             first(): string;
            /**
             * Sets the position to getEndIndex()-1 (getEndIndex() if the text is empty)
             * and returns the character at that position.
             */
            // @ts-ignore
             last(): string;
            /**
             * Gets the character at the current position (as returned by getIndex()).
             */
            // @ts-ignore
             current(): string;
            /**
             * Increments the iterator's index by one and returns the character
             * at the new index.  If the resulting index is greater or equal
             * to getEndIndex(), the current index is reset to getEndIndex() and
             * a value of DONE is returned.
             */
            // @ts-ignore
             next(): string;
            /**
             * Decrements the iterator's index by one and returns the character
             * at the new index. If the current index is getBeginIndex(), the index
             * remains at getBeginIndex() and a value of DONE is returned.
             */
            // @ts-ignore
             previous(): string;
            /**
             * Sets the position to the specified position in the text and returns that
             * character.
             */
            // @ts-ignore
             setIndex(position: number): string;
            /**
             * Returns the start index of the text.
             */
            // @ts-ignore
             getBeginIndex(): number;
            /**
             * Returns the end index of the text.  This index is the index of the first
             * character following the end of the text.
             */
            // @ts-ignore
             getEndIndex(): number;
            /**
             * Returns the current index.
             */
            // @ts-ignore
             getIndex(): number;
            /**
             * Create a copy of this iterator
             */
            // @ts-ignore
             clone(): java.lang.Object;
        }
    }
}
