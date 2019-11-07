// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class CopyOnWriteArrayList extends java.lang.Object {
                /**
                 * Creates an empty list.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a list containing the elements of the specified
                 * collection, in the order they are returned by the collection's
                 * iterator.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Creates a list holding a copy of the given array.
                 */
                // @ts-ignore
                constructor(toCopyIn: java.lang.Object)
                /**
                 * Returns the number of elements in this list.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Returns {@code true} if this list contains no elements.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Returns {@code true} if this list contains the specified element.
                 * More formally, returns {@code true} if and only if this list contains
                 * at least one element {@code e} such that
                 * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public indexOf(o: java.lang.Object): number;
                /**
                 * Returns the index of the first occurrence of the specified element in
                 * this list, searching forwards from {@code index}, or returns -1 if
                 * the element is not found.
                 * More formally, returns the lowest index {@code i} such that
                 * <tt>(i&nbsp;&gt;=&nbsp;index&nbsp;&amp;&amp;&nbsp;(e==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;e.equals(get(i))))</tt>,
                 * or -1 if there is no such index.
                 */
                // @ts-ignore
                public indexOf(e: java.lang.Object, index: number): number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public lastIndexOf(o: java.lang.Object): number;
                /**
                 * Returns the index of the last occurrence of the specified element in
                 * this list, searching backwards from {@code index}, or returns -1 if
                 * the element is not found.
                 * More formally, returns the highest index {@code i} such that
                 * <tt>(i&nbsp;&lt;=&nbsp;index&nbsp;&amp;&amp;&nbsp;(e==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;e.equals(get(i))))</tt>,
                 * or -1 if there is no such index.
                 */
                // @ts-ignore
                public lastIndexOf(e: java.lang.Object, index: number): number;
                /**
                 * Returns a shallow copy of this list.  (The elements themselves
                 * are not copied.)
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns an array containing all of the elements in this list
                 * in proper sequence (from first to last element).
                 * <p>The returned array will be "safe" in that no references to it are
                 * maintained by this list.  (In other words, this method must allocate
                 * a new array).  The caller is thus free to modify the returned array.
                 * <p>This method acts as bridge between array-based and collection-based
                 * APIs.
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                /**
                 * Returns an array containing all of the elements in this list in
                 * proper sequence (from first to last element); the runtime type of
                 * the returned array is that of the specified array.  If the list fits
                 * in the specified array, it is returned therein.  Otherwise, a new
                 * array is allocated with the runtime type of the specified array and
                 * the size of this list.
                 * <p>If this list fits in the specified array with room to spare
                 * (i.e., the array has more elements than this list), the element in
                 * the array immediately following the end of the list is set to
                 * {@code null}.  (This is useful in determining the length of this
                 * list <i>only</i> if the caller knows that this list does not contain
                 * any null elements.)
                 * <p>Like the {@link #toArray()} method, this method acts as bridge between
                 * array-based and collection-based APIs.  Further, this method allows
                 * precise control over the runtime type of the output array, and may,
                 * under certain circumstances, be used to save allocation costs.
                 * <p>Suppose {@code x} is a list known to contain only strings.
                 * The following code can be used to dump the list into a newly
                 * allocated array of {@code String}:
                 * <pre> {@code String[] y = x.toArray(new String[0]);}</pre>
                 * Note that {@code toArray(new Object[0])} is identical in function to
                 * {@code toArray()}.
                 */
                // @ts-ignore
                public toArray(a: java.lang.Object): java.lang.Object[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public get(index: number): java.lang.Object;
                /**
                 * Replaces the element at the specified position in this list with the
                 * specified element.
                 */
                // @ts-ignore
                public set(index: number, element: java.lang.Object): java.lang.Object;
                /**
                 * Appends the specified element to the end of this list.
                 */
                // @ts-ignore
                public add(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the specified position in this
                 * list. Shifts the element currently at that position (if any) and
                 * any subsequent elements to the right (adds one to their indices).
                 */
                // @ts-ignore
                public add(index: number, element: java.lang.Object): void;
                /**
                 * Removes the element at the specified position in this list.
                 * Shifts any subsequent elements to the left (subtracts one from their
                 * indices).  Returns the element that was removed from the list.
                 */
                // @ts-ignore
                public remove(index: number): java.lang.Object;
                /**
                 * Removes the first occurrence of the specified element from this list,
                 * if it is present.  If this list does not contain the element, it is
                 * unchanged.  More formally, removes the element with the lowest index
                 * {@code i} such that
                 * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>
                 * (if such an element exists).  Returns {@code true} if this list
                 * contained the specified element (or equivalently, if this list
                 * changed as a result of the call).
                 */
                // @ts-ignore
                public remove(o: java.lang.Object): boolean;
                /**
                 * Appends the element, if not present.
                 */
                // @ts-ignore
                public addIfAbsent(e: java.lang.Object): boolean;
                /**
                 * Returns {@code true} if this list contains all of the elements of the
                 * specified collection.
                 */
                // @ts-ignore
                public containsAll(c: java.util.Collection): boolean;
                /**
                 * Removes from this list all of its elements that are contained in
                 * the specified collection. This is a particularly expensive operation
                 * in this class because of the need for an internal temporary array.
                 */
                // @ts-ignore
                public removeAll(c: java.util.Collection): boolean;
                /**
                 * Retains only the elements in this list that are contained in the
                 * specified collection.  In other words, removes from this list all of
                 * its elements that are not contained in the specified collection.
                 */
                // @ts-ignore
                public retainAll(c: java.util.Collection): boolean;
                /**
                 * Appends all of the elements in the specified collection that
                 * are not already contained in this list, to the end of
                 * this list, in the order that they are returned by the
                 * specified collection's iterator.
                 */
                // @ts-ignore
                public addAllAbsent(c: java.util.Collection): number;
                /**
                 * Removes all of the elements from this list.
                 * The list will be empty after this call returns.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Appends all of the elements in the specified collection to the end
                 * of this list, in the order that they are returned by the specified
                 * collection's iterator.
                 */
                // @ts-ignore
                public addAll(c: java.util.Collection): boolean;
                /**
                 * Inserts all of the elements in the specified collection into this
                 * list, starting at the specified position.  Shifts the element
                 * currently at that position (if any) and any subsequent elements to
                 * the right (increases their indices).  The new elements will appear
                 * in this list in the order that they are returned by the
                 * specified collection's iterator.
                 */
                // @ts-ignore
                public addAll(index: number, c: java.util.Collection): boolean;
                // @ts-ignore
                public forEach(action: java.util.function$.Consumer): void;
                // @ts-ignore
                public removeIf(filter: java.util.function$.Predicate): boolean;
                // @ts-ignore
                public replaceAll(operator: java.util.function$.UnaryOperator): void;
                // @ts-ignore
                public sort(c: java.util.Comparator): void;
                /**
                 * Returns a string representation of this list.  The string
                 * representation consists of the string representations of the list's
                 * elements in the order they are returned by its iterator, enclosed in
                 * square brackets ({@code "[]"}).  Adjacent elements are separated by
                 * the characters {@code ", "} (comma and space).  Elements are
                 * converted to strings as by {@link String#valueOf(Object)}.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Compares the specified object with this list for equality.
                 * Returns {@code true} if the specified object is the same object
                 * as this object, or if it is also a {@link List} and the sequence
                 * of elements returned by an {@linkplain List#iterator() iterator}
                 * over the specified list is the same as the sequence returned by
                 * an iterator over this list.  The two sequences are considered to
                 * be the same if they have the same length and corresponding
                 * elements at the same position in the sequence are <em>equal</em>.
                 * Two elements {@code e1} and {@code e2} are considered
                 * <em>equal</em> if {@code (e1==null ? e2==null : e1.equals(e2))}.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * Returns the hash code value for this list.
                 * <p>This implementation uses the definition in {@link List#hashCode}.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * <p>The returned iterator provides a snapshot of the state of the list
                 * when the iterator was constructed. No synchronization is needed while
                 * traversing the iterator. The iterator does <em>NOT</em> support the
                 * {@code remove} method.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * {@inheritDoc}
                 * <p>The returned iterator provides a snapshot of the state of the list
                 * when the iterator was constructed. No synchronization is needed while
                 * traversing the iterator. The iterator does <em>NOT</em> support the
                 * {@code remove}, {@code set} or {@code add} methods.
                 */
                // @ts-ignore
                public listIterator(): java.util.ListIterator;
                /**
                 * {@inheritDoc}
                 * <p>The returned iterator provides a snapshot of the state of the list
                 * when the iterator was constructed. No synchronization is needed while
                 * traversing the iterator. The iterator does <em>NOT</em> support the
                 * {@code remove}, {@code set} or {@code add} methods.
                 */
                // @ts-ignore
                public listIterator(index: number): java.util.ListIterator;
                /**
                 * Returns a {@link Spliterator} over the elements in this list.
                 * <p>The {@code Spliterator} reports {@link Spliterator#IMMUTABLE},
                 * {@link Spliterator#ORDERED}, {@link Spliterator#SIZED}, and
                 * {@link Spliterator#SUBSIZED}.
                 * <p>The spliterator provides a snapshot of the state of the list
                 * when the spliterator was constructed. No synchronization is needed while
                 * operating on the spliterator.
                 */
                // @ts-ignore
                public spliterator(): java.util.Spliterator;
                /**
                 * Returns a view of the portion of this list between
                 * {@code fromIndex}, inclusive, and {@code toIndex}, exclusive.
                 * The returned list is backed by this list, so changes in the
                 * returned list are reflected in this list.
                 * <p>The semantics of the list returned by this method become
                 * undefined if the backing list (i.e., this list) is modified in
                 * any way other than via the returned list.
                 */
                // @ts-ignore
                public subList(fromIndex: number, toIndex: number): java.util.List;
            }
        }
    }
}
