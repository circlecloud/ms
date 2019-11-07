// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class LinkedHashSet extends java.util.HashSet {
            /**
             * Constructs a new, empty linked hash set with the specified initial
             * capacity and load factor.
             */
            // @ts-ignore
            constructor(initialCapacity: number, loadFactor: number)
            /**
             * Constructs a new, empty linked hash set with the specified initial
             * capacity and the default load factor (0.75).
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Constructs a new, empty linked hash set with the default initial
             * capacity (16) and load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new linked hash set with the same elements as the
             * specified collection.  The linked hash set is created with an initial
             * capacity sufficient to hold the elements in the specified collection
             * and the default load factor (0.75).
             */
            // @ts-ignore
            constructor(c: java.util.Collection)
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@code Spliterator} over the elements in this set.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED},
             * {@link Spliterator#DISTINCT}, and {@code ORDERED}.  Implementations
             * should document the reporting of additional characteristic values.
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator;
        }
    }
}
