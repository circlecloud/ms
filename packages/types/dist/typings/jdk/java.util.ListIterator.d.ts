// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface ListIterator {
            /**
             * Returns {@code true} if this list iterator has more elements when
             * traversing the list in the forward direction. (In other words,
             * returns {@code true} if {@link #next} would return an element rather
             * than throwing an exception.)
             */
            // @ts-ignore
             hasNext(): boolean;
            /**
             * Returns the next element in the list and advances the cursor position.
             * This method may be called repeatedly to iterate through the list,
             * or intermixed with calls to {@link #previous} to go back and forth.
             * (Note that alternating calls to {@code next} and {@code previous}
             * will return the same element repeatedly.)
             */
            // @ts-ignore
             next(): java.lang.Object;
            /**
             * Returns {@code true} if this list iterator has more elements when
             * traversing the list in the reverse direction.  (In other words,
             * returns {@code true} if {@link #previous} would return an element
             * rather than throwing an exception.)
             */
            // @ts-ignore
             hasPrevious(): boolean;
            /**
             * Returns the previous element in the list and moves the cursor
             * position backwards.  This method may be called repeatedly to
             * iterate through the list backwards, or intermixed with calls to
             * {@link #next} to go back and forth.  (Note that alternating calls
             * to {@code next} and {@code previous} will return the same
             * element repeatedly.)
             */
            // @ts-ignore
             previous(): java.lang.Object;
            /**
             * Returns the index of the element that would be returned by a
             * subsequent call to {@link #next}. (Returns list size if the list
             * iterator is at the end of the list.)
             */
            // @ts-ignore
             nextIndex(): number;
            /**
             * Returns the index of the element that would be returned by a
             * subsequent call to {@link #previous}. (Returns -1 if the list
             * iterator is at the beginning of the list.)
             */
            // @ts-ignore
             previousIndex(): number;
            /**
             * Removes from the list the last element that was returned by {@link
             * #next} or {@link #previous} (optional operation).  This call can
             * only be made once per call to {@code next} or {@code previous}.
             * It can be made only if {@link #add} has not been
             * called after the last call to {@code next} or {@code previous}.
             */
            // @ts-ignore
             remove(): void;
            /**
             * Replaces the last element returned by {@link #next} or
             * {@link #previous} with the specified element (optional operation).
             * This call can be made only if neither {@link #remove} nor {@link
             * #add} have been called after the last call to {@code next} or
             * {@code previous}.
             */
            // @ts-ignore
             set(e: java.lang.Object): void;
            /**
             * Inserts the specified element into the list (optional operation).
             * The element is inserted immediately before the element that
             * would be returned by {@link #next}, if any, and after the element
             * that would be returned by {@link #previous}, if any.  (If the
             * list contains no elements, the new element becomes the sole element
             * on the list.)  The new element is inserted before the implicit
             * cursor: a subsequent call to {@code next} would be unaffected, and a
             * subsequent call to {@code previous} would return the new element.
             * (This call increases by one the value that would be returned by a
             * call to {@code nextIndex} or {@code previousIndex}.)
             */
            // @ts-ignore
             add(e: java.lang.Object): void;
        }
    }
}
