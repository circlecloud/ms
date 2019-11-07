// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface Collection {
            /**
             * Returns the number of elements in this collection.  If this collection
             * contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
             * <tt>Integer.MAX_VALUE</tt>.
             */
            // @ts-ignore
             size(): number;
            /**
             * Returns <tt>true</tt> if this collection contains no elements.
             */
            // @ts-ignore
             isEmpty(): boolean;
            /**
             * Returns <tt>true</tt> if this collection contains the specified element.
             * More formally, returns <tt>true</tt> if and only if this collection
             * contains at least one element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
             contains(o: java.lang.Object): boolean;
            /**
             * Returns an iterator over the elements in this collection.  There are no
             * guarantees concerning the order in which the elements are returned
             * (unless this collection is an instance of some class that provides a
             * guarantee).
             */
            // @ts-ignore
             iterator(): java.util.Iterator;
            /**
             * Returns an array containing all of the elements in this collection.
             * If this collection makes any guarantees as to what order its elements
             * are returned by its iterator, this method must return the elements in
             * the same order.
             * <p>The returned array will be "safe" in that no references to it are
             * maintained by this collection.  (In other words, this method must
             * allocate a new array even if this collection is backed by an array).
             * The caller is thus free to modify the returned array.
             * <p>This method acts as bridge between array-based and collection-based
             * APIs.
             */
            // @ts-ignore
             toArray(): java.lang.Object[];
            /**
             * Returns an array containing all of the elements in this collection;
             * the runtime type of the returned array is that of the specified array.
             * If the collection fits in the specified array, it is returned therein.
             * Otherwise, a new array is allocated with the runtime type of the
             * specified array and the size of this collection.
             * <p>If this collection fits in the specified array with room to spare
             * (i.e., the array has more elements than this collection), the element
             * in the array immediately following the end of the collection is set to
             * <tt>null</tt>.  (This is useful in determining the length of this
             * collection <i>only</i> if the caller knows that this collection does
             * not contain any <tt>null</tt> elements.)
             * <p>If this collection makes any guarantees as to what order its elements
             * are returned by its iterator, this method must return the elements in
             * the same order.
             * <p>Like the {@link #toArray()} method, this method acts as bridge between
             * array-based and collection-based APIs.  Further, this method allows
             * precise control over the runtime type of the output array, and may,
             * under certain circumstances, be used to save allocation costs.
             * <p>Suppose <tt>x</tt> is a collection known to contain only strings.
             * The following code can be used to dump the collection into a newly
             * allocated array of <tt>String</tt>:
             * <pre>
             * String[] y = x.toArray(new String[0]);</pre>
             * Note that <tt>toArray(new Object[0])</tt> is identical in function to
             * <tt>toArray()</tt>.
             */
            // @ts-ignore
             toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * Ensures that this collection contains the specified element (optional
             * operation).  Returns <tt>true</tt> if this collection changed as a
             * result of the call.  (Returns <tt>false</tt> if this collection does
             * not permit duplicates and already contains the specified element.)<p>
             * Collections that support this operation may place limitations on what
             * elements may be added to this collection.  In particular, some
             * collections will refuse to add <tt>null</tt> elements, and others will
             * impose restrictions on the type of elements that may be added.
             * Collection classes should clearly specify in their documentation any
             * restrictions on what elements may be added.<p>
             * If a collection refuses to add a particular element for any reason
             * other than that it already contains the element, it <i>must</i> throw
             * an exception (rather than returning <tt>false</tt>).  This preserves
             * the invariant that a collection always contains the specified element
             * after this call returns.
             */
            // @ts-ignore
             add(e: java.lang.Object): boolean;
            /**
             * Removes a single instance of the specified element from this
             * collection, if it is present (optional operation).  More formally,
             * removes an element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>, if
             * this collection contains one or more such elements.  Returns
             * <tt>true</tt> if this collection contained the specified element (or
             * equivalently, if this collection changed as a result of the call).
             */
            // @ts-ignore
             remove(o: java.lang.Object): boolean;
            /**
             * Returns <tt>true</tt> if this collection contains all of the elements
             * in the specified collection.
             */
            // @ts-ignore
             containsAll(c: java.util.Collection): boolean;
            /**
             * Adds all of the elements in the specified collection to this collection
             * (optional operation).  The behavior of this operation is undefined if
             * the specified collection is modified while the operation is in progress.
             * (This implies that the behavior of this call is undefined if the
             * specified collection is this collection, and this collection is
             * nonempty.)
             */
            // @ts-ignore
             addAll(c: java.util.Collection): boolean;
            /**
             * Removes all of this collection's elements that are also contained in the
             * specified collection (optional operation).  After this call returns,
             * this collection will contain no elements in common with the specified
             * collection.
             */
            // @ts-ignore
             removeAll(c: java.util.Collection): boolean;
            /**
             * Removes all of the elements of this collection that satisfy the given
             * predicate.  Errors or runtime exceptions thrown during iteration or by
             * the predicate are relayed to the caller.
             */
            // @ts-ignore
             removeIf(filter: java.util.function$.Predicate): boolean;
            /**
             * Retains only the elements in this collection that are contained in the
             * specified collection (optional operation).  In other words, removes from
             * this collection all of its elements that are not contained in the
             * specified collection.
             */
            // @ts-ignore
             retainAll(c: java.util.Collection): boolean;
            /**
             * Removes all of the elements from this collection (optional operation).
             * The collection will be empty after this method returns.
             */
            // @ts-ignore
             clear(): void;
            /**
             * Compares the specified object with this collection for equality. <p>
             * While the <tt>Collection</tt> interface adds no stipulations to the
             * general contract for the <tt>Object.equals</tt>, programmers who
             * implement the <tt>Collection</tt> interface "directly" (in other words,
             * create a class that is a <tt>Collection</tt> but is not a <tt>Set</tt>
             * or a <tt>List</tt>) must exercise care if they choose to override the
             * <tt>Object.equals</tt>.  It is not necessary to do so, and the simplest
             * course of action is to rely on <tt>Object</tt>'s implementation, but
             * the implementor may wish to implement a "value comparison" in place of
             * the default "reference comparison."  (The <tt>List</tt> and
             * <tt>Set</tt> interfaces mandate such value comparisons.)<p>
             * The general contract for the <tt>Object.equals</tt> method states that
             * equals must be symmetric (in other words, <tt>a.equals(b)</tt> if and
             * only if <tt>b.equals(a)</tt>).  The contracts for <tt>List.equals</tt>
             * and <tt>Set.equals</tt> state that lists are only equal to other lists,
             * and sets to other sets.  Thus, a custom <tt>equals</tt> method for a
             * collection class that implements neither the <tt>List</tt> nor
             * <tt>Set</tt> interface must return <tt>false</tt> when this collection
             * is compared to any list or set.  (By the same logic, it is not possible
             * to write a class that correctly implements both the <tt>Set</tt> and
             * <tt>List</tt> interfaces.)
             */
            // @ts-ignore
             equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this collection.  While the
             * <tt>Collection</tt> interface adds no stipulations to the general
             * contract for the <tt>Object.hashCode</tt> method, programmers should
             * take note that any class that overrides the <tt>Object.equals</tt>
             * method must also override the <tt>Object.hashCode</tt> method in order
             * to satisfy the general contract for the <tt>Object.hashCode</tt> method.
             * In particular, <tt>c1.equals(c2)</tt> implies that
             * <tt>c1.hashCode()==c2.hashCode()</tt>.
             */
            // @ts-ignore
             hashCode(): number;
            /**
             * Creates a {@link Spliterator} over the elements in this collection.
             * Implementations should document characteristic values reported by the
             * spliterator.  Such characteristic values are not required to be reported
             * if the spliterator reports {@link Spliterator#SIZED} and this collection
             * contains no elements.
             * <p>The default implementation should be overridden by subclasses that
             * can return a more efficient spliterator.  In order to
             * preserve expected laziness behavior for the {@link #stream()} and
             * {@link #parallelStream()}} methods, spliterators should either have the
             * characteristic of {@code IMMUTABLE} or {@code CONCURRENT}, or be
             * <em><a href="Spliterator.html#binding">late-binding</a></em>.
             * If none of these is practical, the overriding class should describe the
             * spliterator's documented policy of binding and structural interference,
             * and should override the {@link #stream()} and {@link #parallelStream()}
             * methods to create streams using a {@code Supplier} of the spliterator,
             * as in:
             * <pre>{@code
             * Stream<E> s = StreamSupport.stream(() -> spliterator(), spliteratorCharacteristics)
             * }</pre>
             * <p>These requirements ensure that streams produced by the
             * {@link #stream()} and {@link #parallelStream()} methods will reflect the
             * contents of the collection as of initiation of the terminal stream
             * operation.
             */
            // @ts-ignore
             spliterator(): java.util.Spliterator;
            /**
             * Returns a sequential {@code Stream} with this collection as its source.
             * <p>This method should be overridden when the {@link #spliterator()}
             * method cannot return a spliterator that is {@code IMMUTABLE},
             * {@code CONCURRENT}, or <em>late-binding</em>. (See {@link #spliterator()}
             * for details.)
             */
            // @ts-ignore
             stream(): java.util.stream.Stream;
            /**
             * Returns a possibly parallel {@code Stream} with this collection as its
             * source.  It is allowable for this method to return a sequential stream.
             * <p>This method should be overridden when the {@link #spliterator()}
             * method cannot return a spliterator that is {@code IMMUTABLE},
             * {@code CONCURRENT}, or <em>late-binding</em>. (See {@link #spliterator()}
             * for details.)
             */
            // @ts-ignore
             parallelStream(): java.util.stream.Stream;
        }
    }
}
