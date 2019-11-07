declare namespace java {
    namespace util {
        // @ts-ignore
         class HashSet extends java.util.AbstractSet {
            /**
             * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
             * default initial capacity (16) and load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new set containing the elements in the specified
             * collection.  The <tt>HashMap</tt> is created with default load factor
             * (0.75) and an initial capacity sufficient to contain the elements in
             * the specified collection.
             */
            // @ts-ignore
            constructor(c: java.util.Collection)
            /**
             * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
             * the specified initial capacity and the specified load factor.
             */
            // @ts-ignore
            constructor(initialCapacity: number, loadFactor: number)
            /**
             * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
             * the specified initial capacity and default load factor (0.75).
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Returns an iterator over the elements in this set.  The elements
             * are returned in no particular order.
             */
            // @ts-ignore
            public iterator(): java.util.Iterator;
            /**
             * Returns the number of elements in this set (its cardinality).
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns <tt>true</tt> if this set contains no elements.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns <tt>true</tt> if this set contains the specified element.
             * More formally, returns <tt>true</tt> if and only if this set
             * contains an element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
            public contains(o: java.lang.Object): boolean;
            /**
             * Adds the specified element to this set if it is not already present.
             * More formally, adds the specified element <tt>e</tt> to this set if
             * this set contains no element <tt>e2</tt> such that
             * <tt>(e==null&nbsp;?&nbsp;e2==null&nbsp;:&nbsp;e.equals(e2))</tt>.
             * If this set already contains the element, the call leaves the set
             * unchanged and returns <tt>false</tt>.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * Removes the specified element from this set if it is present.
             * More formally, removes an element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>,
             * if this set contains such an element.  Returns <tt>true</tt> if
             * this set contained the element (or equivalently, if this set
             * changed as a result of the call).  (This set will not contain the
             * element once the call returns.)
             */
            // @ts-ignore
            public remove(o: java.lang.Object): boolean;
            /**
             * Removes all of the elements from this set.
             * The set will be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns a shallow copy of this <tt>HashSet</tt> instance: the elements
             * themselves are not cloned.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * set.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED} and
             * {@link Spliterator#DISTINCT}.  Overriding implementations should document
             * the reporting of additional characteristic values.
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator;
        }
    }
}
