// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Collections extends java.lang.Object {
            // @ts-ignore
            public static EMPTY_SET: java.util.Set;
            // @ts-ignore
            public static EMPTY_LIST: java.util.List;
            // @ts-ignore
            public static EMPTY_MAP: java.util.Map;
            /**
             * Sorts the specified list into ascending order, according to the
             * {@linkplain Comparable natural ordering} of its elements.
             * All elements in the list must implement the {@link Comparable}
             * interface.  Furthermore, all elements in the list must be
             * <i>mutually comparable</i> (that is, {@code e1.compareTo(e2)}
             * must not throw a {@code ClassCastException} for any elements
             * {@code e1} and {@code e2} in the list).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * <p>The specified list must be modifiable, but need not be resizable.
             */
            // @ts-ignore
            public static sort(list: java.util.List): void;
            /**
             * Sorts the specified list according to the order induced by the
             * specified comparator.  All elements in the list must be <i>mutually
             * comparable</i> using the specified comparator (that is,
             * {@code c.compare(e1, e2)} must not throw a {@code ClassCastException}
             * for any elements {@code e1} and {@code e2} in the list).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * <p>The specified list must be modifiable, but need not be resizable.
             */
            // @ts-ignore
            public static sort(list: java.util.List, c: java.util.Comparator): void;
            /**
             * Searches the specified list for the specified object using the binary
             * search algorithm.  The list must be sorted into ascending order
             * according to the {@linkplain Comparable natural ordering} of its
             * elements (as by the {@link #sort(List)} method) prior to making this
             * call.  If it is not sorted, the results are undefined.  If the list
             * contains multiple elements equal to the specified object, there is no
             * guarantee which one will be found.
             * <p>This method runs in log(n) time for a "random access" list (which
             * provides near-constant-time positional access).  If the specified list
             * does not implement the {@link RandomAccess} interface and is large,
             * this method will do an iterator-based binary search that performs
             * O(n) link traversals and O(log n) element comparisons.
             */
            // @ts-ignore
            public static binarySearch(list: java.util.List, key: java.lang.Object): number;
            /**
             * Searches the specified list for the specified object using the binary
             * search algorithm.  The list must be sorted into ascending order
             * according to the specified comparator (as by the
             * {@link #sort(List, Comparator) sort(List, Comparator)}
             * method), prior to making this call.  If it is
             * not sorted, the results are undefined.  If the list contains multiple
             * elements equal to the specified object, there is no guarantee which one
             * will be found.
             * <p>This method runs in log(n) time for a "random access" list (which
             * provides near-constant-time positional access).  If the specified list
             * does not implement the {@link RandomAccess} interface and is large,
             * this method will do an iterator-based binary search that performs
             * O(n) link traversals and O(log n) element comparisons.
             */
            // @ts-ignore
            public static binarySearch(list: java.util.List, key: java.lang.Object, c: java.util.Comparator): number;
            /**
             * Reverses the order of the elements in the specified list.<p>
             * This method runs in linear time.
             */
            // @ts-ignore
            public static reverse(list: java.util.List): void;
            /**
             * Randomly permutes the specified list using a default source of
             * randomness.  All permutations occur with approximately equal
             * likelihood.
             * <p>The hedge "approximately" is used in the foregoing description because
             * default source of randomness is only approximately an unbiased source
             * of independently chosen bits. If it were a perfect source of randomly
             * chosen bits, then the algorithm would choose permutations with perfect
             * uniformity.
             * <p>This implementation traverses the list backwards, from the last
             * element up to the second, repeatedly swapping a randomly selected element
             * into the "current position".  Elements are randomly selected from the
             * portion of the list that runs from the first element to the current
             * position, inclusive.
             * <p>This method runs in linear time.  If the specified list does not
             * implement the {@link RandomAccess} interface and is large, this
             * implementation dumps the specified list into an array before shuffling
             * it, and dumps the shuffled array back into the list.  This avoids the
             * quadratic behavior that would result from shuffling a "sequential
             * access" list in place.
             */
            // @ts-ignore
            public static shuffle(list: java.util.List): void;
            /**
             * Randomly permute the specified list using the specified source of
             * randomness.  All permutations occur with equal likelihood
             * assuming that the source of randomness is fair.<p>
             * This implementation traverses the list backwards, from the last element
             * up to the second, repeatedly swapping a randomly selected element into
             * the "current position".  Elements are randomly selected from the
             * portion of the list that runs from the first element to the current
             * position, inclusive.<p>
             * This method runs in linear time.  If the specified list does not
             * implement the {@link RandomAccess} interface and is large, this
             * implementation dumps the specified list into an array before shuffling
             * it, and dumps the shuffled array back into the list.  This avoids the
             * quadratic behavior that would result from shuffling a "sequential
             * access" list in place.
             */
            // @ts-ignore
            public static shuffle(list: java.util.List, rnd: java.util.Random): void;
            /**
             * Swaps the elements at the specified positions in the specified list.
             * (If the specified positions are equal, invoking this method leaves
             * the list unchanged.)
             */
            // @ts-ignore
            public static swap(list: java.util.List, i: number, j: number): void;
            /**
             * Replaces all of the elements of the specified list with the specified
             * element. <p>
             * This method runs in linear time.
             */
            // @ts-ignore
            public static fill(list: java.util.List, obj: java.lang.Object): void;
            /**
             * Copies all of the elements from one list into another.  After the
             * operation, the index of each copied element in the destination list
             * will be identical to its index in the source list.  The destination
             * list must be at least as long as the source list.  If it is longer, the
             * remaining elements in the destination list are unaffected. <p>
             * This method runs in linear time.
             */
            // @ts-ignore
            public static copy(dest: java.util.List, src: java.util.List): void;
            /**
             * Returns the minimum element of the given collection, according to the
             * <i>natural ordering</i> of its elements.  All elements in the
             * collection must implement the <tt>Comparable</tt> interface.
             * Furthermore, all elements in the collection must be <i>mutually
             * comparable</i> (that is, <tt>e1.compareTo(e2)</tt> must not throw a
             * <tt>ClassCastException</tt> for any elements <tt>e1</tt> and
             * <tt>e2</tt> in the collection).<p>
             * This method iterates over the entire collection, hence it requires
             * time proportional to the size of the collection.
             */
            // @ts-ignore
            public static min(coll: java.util.Collection): java.lang.Object;
            /**
             * Returns the minimum element of the given collection, according to the
             * order induced by the specified comparator.  All elements in the
             * collection must be <i>mutually comparable</i> by the specified
             * comparator (that is, <tt>comp.compare(e1, e2)</tt> must not throw a
             * <tt>ClassCastException</tt> for any elements <tt>e1</tt> and
             * <tt>e2</tt> in the collection).<p>
             * This method iterates over the entire collection, hence it requires
             * time proportional to the size of the collection.
             */
            // @ts-ignore
            public static min(coll: java.util.Collection, comp: java.util.Comparator): java.lang.Object;
            /**
             * Returns the maximum element of the given collection, according to the
             * <i>natural ordering</i> of its elements.  All elements in the
             * collection must implement the <tt>Comparable</tt> interface.
             * Furthermore, all elements in the collection must be <i>mutually
             * comparable</i> (that is, <tt>e1.compareTo(e2)</tt> must not throw a
             * <tt>ClassCastException</tt> for any elements <tt>e1</tt> and
             * <tt>e2</tt> in the collection).<p>
             * This method iterates over the entire collection, hence it requires
             * time proportional to the size of the collection.
             */
            // @ts-ignore
            public static max(coll: java.util.Collection): java.lang.Object;
            /**
             * Returns the maximum element of the given collection, according to the
             * order induced by the specified comparator.  All elements in the
             * collection must be <i>mutually comparable</i> by the specified
             * comparator (that is, <tt>comp.compare(e1, e2)</tt> must not throw a
             * <tt>ClassCastException</tt> for any elements <tt>e1</tt> and
             * <tt>e2</tt> in the collection).<p>
             * This method iterates over the entire collection, hence it requires
             * time proportional to the size of the collection.
             */
            // @ts-ignore
            public static max(coll: java.util.Collection, comp: java.util.Comparator): java.lang.Object;
            /**
             * Rotates the elements in the specified list by the specified distance.
             * After calling this method, the element at index <tt>i</tt> will be
             * the element previously at index <tt>(i - distance)</tt> mod
             * <tt>list.size()</tt>, for all values of <tt>i</tt> between <tt>0</tt>
             * and <tt>list.size()-1</tt>, inclusive.  (This method has no effect on
             * the size of the list.)
             * <p>For example, suppose <tt>list</tt> comprises<tt> [t, a, n, k, s]</tt>.
             * After invoking <tt>Collections.rotate(list, 1)</tt> (or
             * <tt>Collections.rotate(list, -4)</tt>), <tt>list</tt> will comprise
             * <tt>[s, t, a, n, k]</tt>.
             * <p>Note that this method can usefully be applied to sublists to
             * move one or more elements within a list while preserving the
             * order of the remaining elements.  For example, the following idiom
             * moves the element at index <tt>j</tt> forward to position
             * <tt>k</tt> (which must be greater than or equal to <tt>j</tt>):
             * <pre>
             * Collections.rotate(list.subList(j, k+1), -1);
             * </pre>
             * To make this concrete, suppose <tt>list</tt> comprises
             * <tt>[a, b, c, d, e]</tt>.  To move the element at index <tt>1</tt>
             * (<tt>b</tt>) forward two positions, perform the following invocation:
             * <pre>
             * Collections.rotate(l.subList(1, 4), -1);
             * </pre>
             * The resulting list is <tt>[a, c, d, b, e]</tt>.
             * <p>To move more than one element forward, increase the absolute value
             * of the rotation distance.  To move elements backward, use a positive
             * shift distance.
             * <p>If the specified list is small or implements the {@link
             * RandomAccess} interface, this implementation exchanges the first
             * element into the location it should go, and then repeatedly exchanges
             * the displaced element into the location it should go until a displaced
             * element is swapped into the first element.  If necessary, the process
             * is repeated on the second and successive elements, until the rotation
             * is complete.  If the specified list is large and doesn't implement the
             * <tt>RandomAccess</tt> interface, this implementation breaks the
             * list into two sublist views around index <tt>-distance mod size</tt>.
             * Then the {@link #reverse(List)} method is invoked on each sublist view,
             * and finally it is invoked on the entire list.  For a more complete
             * description of both algorithms, see Section 2.3 of Jon Bentley's
             * <i>Programming Pearls</i> (Addison-Wesley, 1986).
             */
            // @ts-ignore
            public static rotate(list: java.util.List, distance: number): void;
            /**
             * Replaces all occurrences of one specified value in a list with another.
             * More formally, replaces with <tt>newVal</tt> each element <tt>e</tt>
             * in <tt>list</tt> such that
             * <tt>(oldVal==null ? e==null : oldVal.equals(e))</tt>.
             * (This method has no effect on the size of the list.)
             */
            // @ts-ignore
            public static replaceAll(list: java.util.List, oldVal: java.lang.Object, newVal: java.lang.Object): boolean;
            /**
             * Returns the starting position of the first occurrence of the specified
             * target list within the specified source list, or -1 if there is no
             * such occurrence.  More formally, returns the lowest index <tt>i</tt>
             * such that {@code source.subList(i, i+target.size()).equals(target)},
             * or -1 if there is no such index.  (Returns -1 if
             * {@code target.size() > source.size()})
             * <p>This implementation uses the "brute force" technique of scanning
             * over the source list, looking for a match with the target at each
             * location in turn.
             */
            // @ts-ignore
            public static indexOfSubList(source: java.util.List, target: java.util.List): number;
            /**
             * Returns the starting position of the last occurrence of the specified
             * target list within the specified source list, or -1 if there is no such
             * occurrence.  More formally, returns the highest index <tt>i</tt>
             * such that {@code source.subList(i, i+target.size()).equals(target)},
             * or -1 if there is no such index.  (Returns -1 if
             * {@code target.size() > source.size()})
             * <p>This implementation uses the "brute force" technique of iterating
             * over the source list, looking for a match with the target at each
             * location in turn.
             */
            // @ts-ignore
            public static lastIndexOfSubList(source: java.util.List, target: java.util.List): number;
            /**
             * Returns an unmodifiable view of the specified collection.  This method
             * allows modules to provide users with "read-only" access to internal
             * collections.  Query operations on the returned collection "read through"
             * to the specified collection, and attempts to modify the returned
             * collection, whether direct or via its iterator, result in an
             * <tt>UnsupportedOperationException</tt>.<p>
             * The returned collection does <i>not</i> pass the hashCode and equals
             * operations through to the backing collection, but relies on
             * <tt>Object</tt>'s <tt>equals</tt> and <tt>hashCode</tt> methods.  This
             * is necessary to preserve the contracts of these operations in the case
             * that the backing collection is a set or a list.<p>
             * The returned collection will be serializable if the specified collection
             * is serializable.
             */
            // @ts-ignore
            public static unmodifiableCollection(c: java.util.Collection): java.util.Collection;
            /**
             * Returns an unmodifiable view of the specified set.  This method allows
             * modules to provide users with "read-only" access to internal sets.
             * Query operations on the returned set "read through" to the specified
             * set, and attempts to modify the returned set, whether direct or via its
             * iterator, result in an <tt>UnsupportedOperationException</tt>.<p>
             * The returned set will be serializable if the specified set
             * is serializable.
             */
            // @ts-ignore
            public static unmodifiableSet(s: java.util.Set): java.util.Set;
            /**
             * Returns an unmodifiable view of the specified sorted set.  This method
             * allows modules to provide users with "read-only" access to internal
             * sorted sets.  Query operations on the returned sorted set "read
             * through" to the specified sorted set.  Attempts to modify the returned
             * sorted set, whether direct, via its iterator, or via its
             * <tt>subSet</tt>, <tt>headSet</tt>, or <tt>tailSet</tt> views, result in
             * an <tt>UnsupportedOperationException</tt>.<p>
             * The returned sorted set will be serializable if the specified sorted set
             * is serializable.
             */
            // @ts-ignore
            public static unmodifiableSortedSet(s: java.util.SortedSet): java.util.SortedSet;
            /**
             * Returns an unmodifiable view of the specified navigable set.  This method
             * allows modules to provide users with "read-only" access to internal
             * navigable sets.  Query operations on the returned navigable set "read
             * through" to the specified navigable set.  Attempts to modify the returned
             * navigable set, whether direct, via its iterator, or via its
             * {@code subSet}, {@code headSet}, or {@code tailSet} views, result in
             * an {@code UnsupportedOperationException}.<p>
             * The returned navigable set will be serializable if the specified
             * navigable set is serializable.
             */
            // @ts-ignore
            public static unmodifiableNavigableSet(s: java.util.NavigableSet): java.util.NavigableSet;
            /**
             * Returns an unmodifiable view of the specified list.  This method allows
             * modules to provide users with "read-only" access to internal
             * lists.  Query operations on the returned list "read through" to the
             * specified list, and attempts to modify the returned list, whether
             * direct or via its iterator, result in an
             * <tt>UnsupportedOperationException</tt>.<p>
             * The returned list will be serializable if the specified list
             * is serializable. Similarly, the returned list will implement
             * {@link RandomAccess} if the specified list does.
             */
            // @ts-ignore
            public static unmodifiableList(list: java.util.List): java.util.List;
            /**
             * Returns an unmodifiable view of the specified map.  This method
             * allows modules to provide users with "read-only" access to internal
             * maps.  Query operations on the returned map "read through"
             * to the specified map, and attempts to modify the returned
             * map, whether direct or via its collection views, result in an
             * <tt>UnsupportedOperationException</tt>.<p>
             * The returned map will be serializable if the specified map
             * is serializable.
             */
            // @ts-ignore
            public static unmodifiableMap(m: java.util.Map): java.util.Map;
            /**
             * Returns an unmodifiable view of the specified sorted map.  This method
             * allows modules to provide users with "read-only" access to internal
             * sorted maps.  Query operations on the returned sorted map "read through"
             * to the specified sorted map.  Attempts to modify the returned
             * sorted map, whether direct, via its collection views, or via its
             * <tt>subMap</tt>, <tt>headMap</tt>, or <tt>tailMap</tt> views, result in
             * an <tt>UnsupportedOperationException</tt>.<p>
             * The returned sorted map will be serializable if the specified sorted map
             * is serializable.
             */
            // @ts-ignore
            public static unmodifiableSortedMap(m: java.util.SortedMap): java.util.SortedMap;
            /**
             * Returns an unmodifiable view of the specified navigable map.  This method
             * allows modules to provide users with "read-only" access to internal
             * navigable maps.  Query operations on the returned navigable map "read
             * through" to the specified navigable map.  Attempts to modify the returned
             * navigable map, whether direct, via its collection views, or via its
             * {@code subMap}, {@code headMap}, or {@code tailMap} views, result in
             * an {@code UnsupportedOperationException}.<p>
             * The returned navigable map will be serializable if the specified
             * navigable map is serializable.
             */
            // @ts-ignore
            public static unmodifiableNavigableMap(m: java.util.NavigableMap): java.util.NavigableMap;
            /**
             * Returns a synchronized (thread-safe) collection backed by the specified
             * collection.  In order to guarantee serial access, it is critical that
             * <strong>all</strong> access to the backing collection is accomplished
             * through the returned collection.<p>
             * It is imperative that the user manually synchronize on the returned
             * collection when traversing it via {@link Iterator}, {@link Spliterator}
             * or {@link Stream}:
             * <pre>
             * Collection c = Collections.synchronizedCollection(myCollection);
             * ...
             * synchronized (c) {
             * Iterator i = c.iterator(); // Must be in the synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned collection does <i>not</i> pass the {@code hashCode}
             * and {@code equals} operations through to the backing collection, but
             * relies on {@code Object}'s equals and hashCode methods.  This is
             * necessary to preserve the contracts of these operations in the case
             * that the backing collection is a set or a list.<p>
             * The returned collection will be serializable if the specified collection
             * is serializable.
             */
            // @ts-ignore
            public static synchronizedCollection(c: java.util.Collection): java.util.Collection;
            /**
             * Returns a synchronized (thread-safe) set backed by the specified
             * set.  In order to guarantee serial access, it is critical that
             * <strong>all</strong> access to the backing set is accomplished
             * through the returned set.<p>
             * It is imperative that the user manually synchronize on the returned
             * set when iterating over it:
             * <pre>
             * Set s = Collections.synchronizedSet(new HashSet());
             * ...
             * synchronized (s) {
             * Iterator i = s.iterator(); // Must be in the synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned set will be serializable if the specified set is
             * serializable.
             */
            // @ts-ignore
            public static synchronizedSet(s: java.util.Set): java.util.Set;
            /**
             * Returns a synchronized (thread-safe) sorted set backed by the specified
             * sorted set.  In order to guarantee serial access, it is critical that
             * <strong>all</strong> access to the backing sorted set is accomplished
             * through the returned sorted set (or its views).<p>
             * It is imperative that the user manually synchronize on the returned
             * sorted set when iterating over it or any of its <tt>subSet</tt>,
             * <tt>headSet</tt>, or <tt>tailSet</tt> views.
             * <pre>
             * SortedSet s = Collections.synchronizedSortedSet(new TreeSet());
             * ...
             * synchronized (s) {
             * Iterator i = s.iterator(); // Must be in the synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * or:
             * <pre>
             * SortedSet s = Collections.synchronizedSortedSet(new TreeSet());
             * SortedSet s2 = s.headSet(foo);
             * ...
             * synchronized (s) {  // Note: s, not s2!!!
             * Iterator i = s2.iterator(); // Must be in the synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned sorted set will be serializable if the specified
             * sorted set is serializable.
             */
            // @ts-ignore
            public static synchronizedSortedSet(s: java.util.SortedSet): java.util.SortedSet;
            /**
             * Returns a synchronized (thread-safe) navigable set backed by the
             * specified navigable set.  In order to guarantee serial access, it is
             * critical that <strong>all</strong> access to the backing navigable set is
             * accomplished through the returned navigable set (or its views).<p>
             * It is imperative that the user manually synchronize on the returned
             * navigable set when iterating over it or any of its {@code subSet},
             * {@code headSet}, or {@code tailSet} views.
             * <pre>
             * NavigableSet s = Collections.synchronizedNavigableSet(new TreeSet());
             * ...
             * synchronized (s) {
             * Iterator i = s.iterator(); // Must be in the synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * or:
             * <pre>
             * NavigableSet s = Collections.synchronizedNavigableSet(new TreeSet());
             * NavigableSet s2 = s.headSet(foo, true);
             * ...
             * synchronized (s) {  // Note: s, not s2!!!
             * Iterator i = s2.iterator(); // Must be in the synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned navigable set will be serializable if the specified
             * navigable set is serializable.
             */
            // @ts-ignore
            public static synchronizedNavigableSet(s: java.util.NavigableSet): java.util.NavigableSet;
            /**
             * Returns a synchronized (thread-safe) list backed by the specified
             * list.  In order to guarantee serial access, it is critical that
             * <strong>all</strong> access to the backing list is accomplished
             * through the returned list.<p>
             * It is imperative that the user manually synchronize on the returned
             * list when iterating over it:
             * <pre>
             * List list = Collections.synchronizedList(new ArrayList());
             * ...
             * synchronized (list) {
             * Iterator i = list.iterator(); // Must be in synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned list will be serializable if the specified list is
             * serializable.
             */
            // @ts-ignore
            public static synchronizedList(list: java.util.List): java.util.List;
            /**
             * Returns a synchronized (thread-safe) map backed by the specified
             * map.  In order to guarantee serial access, it is critical that
             * <strong>all</strong> access to the backing map is accomplished
             * through the returned map.<p>
             * It is imperative that the user manually synchronize on the returned
             * map when iterating over any of its collection views:
             * <pre>
             * Map m = Collections.synchronizedMap(new HashMap());
             * ...
             * Set s = m.keySet();  // Needn't be in synchronized block
             * ...
             * synchronized (m) {  // Synchronizing on m, not s!
             * Iterator i = s.iterator(); // Must be in synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned map will be serializable if the specified map is
             * serializable.
             */
            // @ts-ignore
            public static synchronizedMap(m: java.util.Map): java.util.Map;
            /**
             * Returns a synchronized (thread-safe) sorted map backed by the specified
             * sorted map.  In order to guarantee serial access, it is critical that
             * <strong>all</strong> access to the backing sorted map is accomplished
             * through the returned sorted map (or its views).<p>
             * It is imperative that the user manually synchronize on the returned
             * sorted map when iterating over any of its collection views, or the
             * collections views of any of its <tt>subMap</tt>, <tt>headMap</tt> or
             * <tt>tailMap</tt> views.
             * <pre>
             * SortedMap m = Collections.synchronizedSortedMap(new TreeMap());
             * ...
             * Set s = m.keySet();  // Needn't be in synchronized block
             * ...
             * synchronized (m) {  // Synchronizing on m, not s!
             * Iterator i = s.iterator(); // Must be in synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * or:
             * <pre>
             * SortedMap m = Collections.synchronizedSortedMap(new TreeMap());
             * SortedMap m2 = m.subMap(foo, bar);
             * ...
             * Set s2 = m2.keySet();  // Needn't be in synchronized block
             * ...
             * synchronized (m) {  // Synchronizing on m, not m2 or s2!
             * Iterator i = s.iterator(); // Must be in synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned sorted map will be serializable if the specified
             * sorted map is serializable.
             */
            // @ts-ignore
            public static synchronizedSortedMap(m: java.util.SortedMap): java.util.SortedMap;
            /**
             * Returns a synchronized (thread-safe) navigable map backed by the
             * specified navigable map.  In order to guarantee serial access, it is
             * critical that <strong>all</strong> access to the backing navigable map is
             * accomplished through the returned navigable map (or its views).<p>
             * It is imperative that the user manually synchronize on the returned
             * navigable map when iterating over any of its collection views, or the
             * collections views of any of its {@code subMap}, {@code headMap} or
             * {@code tailMap} views.
             * <pre>
             * NavigableMap m = Collections.synchronizedNavigableMap(new TreeMap());
             * ...
             * Set s = m.keySet();  // Needn't be in synchronized block
             * ...
             * synchronized (m) {  // Synchronizing on m, not s!
             * Iterator i = s.iterator(); // Must be in synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * or:
             * <pre>
             * NavigableMap m = Collections.synchronizedNavigableMap(new TreeMap());
             * NavigableMap m2 = m.subMap(foo, true, bar, false);
             * ...
             * Set s2 = m2.keySet();  // Needn't be in synchronized block
             * ...
             * synchronized (m) {  // Synchronizing on m, not m2 or s2!
             * Iterator i = s.iterator(); // Must be in synchronized block
             * while (i.hasNext())
             * foo(i.next());
             * }
             * </pre>
             * Failure to follow this advice may result in non-deterministic behavior.
             * <p>The returned navigable map will be serializable if the specified
             * navigable map is serializable.
             */
            // @ts-ignore
            public static synchronizedNavigableMap(m: java.util.NavigableMap): java.util.NavigableMap;
            /**
             * Returns a dynamically typesafe view of the specified collection.
             * Any attempt to insert an element of the wrong type will result in an
             * immediate {@link ClassCastException}.  Assuming a collection
             * contains no incorrectly typed elements prior to the time a
             * dynamically typesafe view is generated, and that all subsequent
             * access to the collection takes place through the view, it is
             * <i>guaranteed</i> that the collection cannot contain an incorrectly
             * typed element.
             * <p>The generics mechanism in the language provides compile-time
             * (static) type checking, but it is possible to defeat this mechanism
             * with unchecked casts.  Usually this is not a problem, as the compiler
             * issues warnings on all such unchecked operations.  There are, however,
             * times when static type checking alone is not sufficient.  For example,
             * suppose a collection is passed to a third-party library and it is
             * imperative that the library code not corrupt the collection by
             * inserting an element of the wrong type.
             * <p>Another use of dynamically typesafe views is debugging.  Suppose a
             * program fails with a {@code ClassCastException}, indicating that an
             * incorrectly typed element was put into a parameterized collection.
             * Unfortunately, the exception can occur at any time after the erroneous
             * element is inserted, so it typically provides little or no information
             * as to the real source of the problem.  If the problem is reproducible,
             * one can quickly determine its source by temporarily modifying the
             * program to wrap the collection with a dynamically typesafe view.
             * For example, this declaration:
             * <pre> {@code
             * Collection<String> c = new HashSet<>();
             * }</pre>
             * may be replaced temporarily by this one:
             * <pre> {@code
             * Collection<String> c = Collections.checkedCollection(
             * new HashSet<>(), String.class);
             * }</pre>
             * Running the program again will cause it to fail at the point where
             * an incorrectly typed element is inserted into the collection, clearly
             * identifying the source of the problem.  Once the problem is fixed, the
             * modified declaration may be reverted back to the original.
             * <p>The returned collection does <i>not</i> pass the hashCode and equals
             * operations through to the backing collection, but relies on
             * {@code Object}'s {@code equals} and {@code hashCode} methods.  This
             * is necessary to preserve the contracts of these operations in the case
             * that the backing collection is a set or a list.
             * <p>The returned collection will be serializable if the specified
             * collection is serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned collection permits insertion of null elements
             * whenever the backing collection does.
             */
            // @ts-ignore
            public static checkedCollection(c: java.util.Collection, type: java.lang.Class): java.util.Collection;
            /**
             * Returns a dynamically typesafe view of the specified queue.
             * Any attempt to insert an element of the wrong type will result in
             * an immediate {@link ClassCastException}.  Assuming a queue contains
             * no incorrectly typed elements prior to the time a dynamically typesafe
             * view is generated, and that all subsequent access to the queue
             * takes place through the view, it is <i>guaranteed</i> that the
             * queue cannot contain an incorrectly typed element.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned queue will be serializable if the specified queue
             * is serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned queue permits insertion of {@code null} elements
             * whenever the backing queue does.
             */
            // @ts-ignore
            public static checkedQueue(queue: java.util.Queue, type: java.lang.Class): java.util.Queue;
            /**
             * Returns a dynamically typesafe view of the specified set.
             * Any attempt to insert an element of the wrong type will result in
             * an immediate {@link ClassCastException}.  Assuming a set contains
             * no incorrectly typed elements prior to the time a dynamically typesafe
             * view is generated, and that all subsequent access to the set
             * takes place through the view, it is <i>guaranteed</i> that the
             * set cannot contain an incorrectly typed element.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned set will be serializable if the specified set is
             * serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned set permits insertion of null elements whenever
             * the backing set does.
             */
            // @ts-ignore
            public static checkedSet(s: java.util.Set, type: java.lang.Class): java.util.Set;
            /**
             * Returns a dynamically typesafe view of the specified sorted set.
             * Any attempt to insert an element of the wrong type will result in an
             * immediate {@link ClassCastException}.  Assuming a sorted set
             * contains no incorrectly typed elements prior to the time a
             * dynamically typesafe view is generated, and that all subsequent
             * access to the sorted set takes place through the view, it is
             * <i>guaranteed</i> that the sorted set cannot contain an incorrectly
             * typed element.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned sorted set will be serializable if the specified sorted
             * set is serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned sorted set permits insertion of null elements
             * whenever the backing sorted set does.
             */
            // @ts-ignore
            public static checkedSortedSet(s: java.util.SortedSet, type: java.lang.Class): java.util.SortedSet;
            /**
             * Returns a dynamically typesafe view of the specified navigable set.
             * Any attempt to insert an element of the wrong type will result in an
             * immediate {@link ClassCastException}.  Assuming a navigable set
             * contains no incorrectly typed elements prior to the time a
             * dynamically typesafe view is generated, and that all subsequent
             * access to the navigable set takes place through the view, it is
             * <em>guaranteed</em> that the navigable set cannot contain an incorrectly
             * typed element.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned navigable set will be serializable if the specified
             * navigable set is serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned navigable set permits insertion of null elements
             * whenever the backing sorted set does.
             */
            // @ts-ignore
            public static checkedNavigableSet(s: java.util.NavigableSet, type: java.lang.Class): java.util.NavigableSet;
            /**
             * Returns a dynamically typesafe view of the specified list.
             * Any attempt to insert an element of the wrong type will result in
             * an immediate {@link ClassCastException}.  Assuming a list contains
             * no incorrectly typed elements prior to the time a dynamically typesafe
             * view is generated, and that all subsequent access to the list
             * takes place through the view, it is <i>guaranteed</i> that the
             * list cannot contain an incorrectly typed element.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned list will be serializable if the specified list
             * is serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned list permits insertion of null elements whenever
             * the backing list does.
             */
            // @ts-ignore
            public static checkedList(list: java.util.List, type: java.lang.Class): java.util.List;
            /**
             * Returns a dynamically typesafe view of the specified map.
             * Any attempt to insert a mapping whose key or value have the wrong
             * type will result in an immediate {@link ClassCastException}.
             * Similarly, any attempt to modify the value currently associated with
             * a key will result in an immediate {@link ClassCastException},
             * whether the modification is attempted directly through the map
             * itself, or through a {@link Map.Entry} instance obtained from the
             * map's {@link Map#entrySet() entry set} view.
             * <p>Assuming a map contains no incorrectly typed keys or values
             * prior to the time a dynamically typesafe view is generated, and
             * that all subsequent access to the map takes place through the view
             * (or one of its collection views), it is <i>guaranteed</i> that the
             * map cannot contain an incorrectly typed key or value.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned map will be serializable if the specified map is
             * serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned map permits insertion of null keys or values
             * whenever the backing map does.
             */
            // @ts-ignore
            public static checkedMap(m: java.util.Map, keyType: java.lang.Class, valueType: java.lang.Class): java.util.Map;
            /**
             * Returns a dynamically typesafe view of the specified sorted map.
             * Any attempt to insert a mapping whose key or value have the wrong
             * type will result in an immediate {@link ClassCastException}.
             * Similarly, any attempt to modify the value currently associated with
             * a key will result in an immediate {@link ClassCastException},
             * whether the modification is attempted directly through the map
             * itself, or through a {@link Map.Entry} instance obtained from the
             * map's {@link Map#entrySet() entry set} view.
             * <p>Assuming a map contains no incorrectly typed keys or values
             * prior to the time a dynamically typesafe view is generated, and
             * that all subsequent access to the map takes place through the view
             * (or one of its collection views), it is <i>guaranteed</i> that the
             * map cannot contain an incorrectly typed key or value.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned map will be serializable if the specified map is
             * serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned map permits insertion of null keys or values
             * whenever the backing map does.
             */
            // @ts-ignore
            public static checkedSortedMap(m: java.util.SortedMap, keyType: java.lang.Class, valueType: java.lang.Class): java.util.SortedMap;
            /**
             * Returns a dynamically typesafe view of the specified navigable map.
             * Any attempt to insert a mapping whose key or value have the wrong
             * type will result in an immediate {@link ClassCastException}.
             * Similarly, any attempt to modify the value currently associated with
             * a key will result in an immediate {@link ClassCastException},
             * whether the modification is attempted directly through the map
             * itself, or through a {@link Map.Entry} instance obtained from the
             * map's {@link Map#entrySet() entry set} view.
             * <p>Assuming a map contains no incorrectly typed keys or values
             * prior to the time a dynamically typesafe view is generated, and
             * that all subsequent access to the map takes place through the view
             * (or one of its collection views), it is <em>guaranteed</em> that the
             * map cannot contain an incorrectly typed key or value.
             * <p>A discussion of the use of dynamically typesafe views may be
             * found in the documentation for the {@link #checkedCollection
             * checkedCollection} method.
             * <p>The returned map will be serializable if the specified map is
             * serializable.
             * <p>Since {@code null} is considered to be a value of any reference
             * type, the returned map permits insertion of null keys or values
             * whenever the backing map does.
             */
            // @ts-ignore
            public static checkedNavigableMap(m: java.util.NavigableMap, keyType: java.lang.Class, valueType: java.lang.Class): java.util.NavigableMap;
            /**
             * Returns an iterator that has no elements.  More precisely,
             * <ul>
             * <li>{@link Iterator#hasNext hasNext} always returns {@code
             * false}.</li>
             * <li>{@link Iterator#next next} always throws {@link
             * NoSuchElementException}.</li>
             * <li>{@link Iterator#remove remove} always throws {@link
             * IllegalStateException}.</li>
             * </ul>
             * <p>Implementations of this method are permitted, but not
             * required, to return the same object from multiple invocations.
             */
            // @ts-ignore
            public static emptyIterator(): java.util.Iterator;
            /**
             * Returns a list iterator that has no elements.  More precisely,
             * <ul>
             * <li>{@link Iterator#hasNext hasNext} and {@link
             * ListIterator#hasPrevious hasPrevious} always return {@code
             * false}.</li>
             * <li>{@link Iterator#next next} and {@link ListIterator#previous
             * previous} always throw {@link NoSuchElementException}.</li>
             * <li>{@link Iterator#remove remove} and {@link ListIterator#set
             * set} always throw {@link IllegalStateException}.</li>
             * <li>{@link ListIterator#add add} always throws {@link
             * UnsupportedOperationException}.</li>
             * <li>{@link ListIterator#nextIndex nextIndex} always returns
             * {@code 0}.</li>
             * <li>{@link ListIterator#previousIndex previousIndex} always
             * returns {@code -1}.</li>
             * </ul>
             * <p>Implementations of this method are permitted, but not
             * required, to return the same object from multiple invocations.
             */
            // @ts-ignore
            public static emptyListIterator(): java.util.ListIterator;
            /**
             * Returns an enumeration that has no elements.  More precisely,
             * <ul>
             * <li>{@link Enumeration#hasMoreElements hasMoreElements} always
             * returns {@code false}.</li>
             * <li> {@link Enumeration#nextElement nextElement} always throws
             * {@link NoSuchElementException}.</li>
             * </ul>
             * <p>Implementations of this method are permitted, but not
             * required, to return the same object from multiple invocations.
             */
            // @ts-ignore
            public static emptyEnumeration(): java.util.Enumeration;
            /**
             * Returns an empty set (immutable).  This set is serializable.
             * Unlike the like-named field, this method is parameterized.
             * <p>This example illustrates the type-safe way to obtain an empty set:
             * <pre>
             * Set&lt;String&gt; s = Collections.emptySet();
             * </pre>
             */
            // @ts-ignore
            public static emptySet(): java.util.Set;
            /**
             * Returns an empty sorted set (immutable).  This set is serializable.
             * <p>This example illustrates the type-safe way to obtain an empty
             * sorted set:
             * <pre> {@code
             * SortedSet<String> s = Collections.emptySortedSet();
             * }</pre>
             */
            // @ts-ignore
            public static emptySortedSet(): java.util.SortedSet;
            /**
             * Returns an empty navigable set (immutable).  This set is serializable.
             * <p>This example illustrates the type-safe way to obtain an empty
             * navigable set:
             * <pre> {@code
             * NavigableSet<String> s = Collections.emptyNavigableSet();
             * }</pre>
             */
            // @ts-ignore
            public static emptyNavigableSet(): java.util.NavigableSet;
            /**
             * Returns an empty list (immutable).  This list is serializable.
             * <p>This example illustrates the type-safe way to obtain an empty list:
             * <pre>
             * List&lt;String&gt; s = Collections.emptyList();
             * </pre>
             */
            // @ts-ignore
            public static emptyList(): java.util.List;
            /**
             * Returns an empty map (immutable).  This map is serializable.
             * <p>This example illustrates the type-safe way to obtain an empty map:
             * <pre>
             * Map&lt;String, Date&gt; s = Collections.emptyMap();
             * </pre>
             */
            // @ts-ignore
            public static emptyMap(): java.util.Map;
            /**
             * Returns an empty sorted map (immutable).  This map is serializable.
             * <p>This example illustrates the type-safe way to obtain an empty map:
             * <pre> {@code
             * SortedMap<String, Date> s = Collections.emptySortedMap();
             * }</pre>
             */
            // @ts-ignore
            public static emptySortedMap(): java.util.SortedMap;
            /**
             * Returns an empty navigable map (immutable).  This map is serializable.
             * <p>This example illustrates the type-safe way to obtain an empty map:
             * <pre> {@code
             * NavigableMap<String, Date> s = Collections.emptyNavigableMap();
             * }</pre>
             */
            // @ts-ignore
            public static emptyNavigableMap(): java.util.NavigableMap;
            /**
             * Returns an immutable set containing only the specified object.
             * The returned set is serializable.
             */
            // @ts-ignore
            public static singleton(o: java.lang.Object): java.util.Set;
            /**
             * Returns an immutable list containing only the specified object.
             * The returned list is serializable.
             */
            // @ts-ignore
            public static singletonList(o: java.lang.Object): java.util.List;
            /**
             * Returns an immutable map, mapping only the specified key to the
             * specified value.  The returned map is serializable.
             */
            // @ts-ignore
            public static singletonMap(key: java.lang.Object, value: java.lang.Object): java.util.Map;
            /**
             * Returns an immutable list consisting of <tt>n</tt> copies of the
             * specified object.  The newly allocated data object is tiny (it contains
             * a single reference to the data object).  This method is useful in
             * combination with the <tt>List.addAll</tt> method to grow lists.
             * The returned list is serializable.
             */
            // @ts-ignore
            public static nCopies(n: number, o: java.lang.Object): java.util.List;
            /**
             * Returns a comparator that imposes the reverse of the <em>natural
             * ordering</em> on a collection of objects that implement the
             * {@code Comparable} interface.  (The natural ordering is the ordering
             * imposed by the objects' own {@code compareTo} method.)  This enables a
             * simple idiom for sorting (or maintaining) collections (or arrays) of
             * objects that implement the {@code Comparable} interface in
             * reverse-natural-order.  For example, suppose {@code a} is an array of
             * strings. Then: <pre>
             * Arrays.sort(a, Collections.reverseOrder());
             * </pre> sorts the array in reverse-lexicographic (alphabetical) order.<p>
             * The returned comparator is serializable.
             */
            // @ts-ignore
            public static reverseOrder(): java.util.Comparator;
            /**
             * Returns a comparator that imposes the reverse ordering of the specified
             * comparator.  If the specified comparator is {@code null}, this method is
             * equivalent to {@link #reverseOrder()} (in other words, it returns a
             * comparator that imposes the reverse of the <em>natural ordering</em> on
             * a collection of objects that implement the Comparable interface).
             * <p>The returned comparator is serializable (assuming the specified
             * comparator is also serializable or {@code null}).
             */
            // @ts-ignore
            public static reverseOrder(cmp: java.util.Comparator): java.util.Comparator;
            /**
             * Returns an enumeration over the specified collection.  This provides
             * interoperability with legacy APIs that require an enumeration
             * as input.
             */
            // @ts-ignore
            public static enumeration(c: java.util.Collection): java.util.Enumeration;
            /**
             * Returns an array list containing the elements returned by the
             * specified enumeration in the order they are returned by the
             * enumeration.  This method provides interoperability between
             * legacy APIs that return enumerations and new APIs that require
             * collections.
             */
            // @ts-ignore
            public static list(e: java.util.Enumeration): java.util.ArrayList;
            /**
             * Returns the number of elements in the specified collection equal to the
             * specified object.  More formally, returns the number of elements
             * <tt>e</tt> in the collection such that
             * <tt>(o == null ? e == null : o.equals(e))</tt>.
             */
            // @ts-ignore
            public static frequency(c: java.util.Collection, o: java.lang.Object): number;
            /**
             * Returns {@code true} if the two specified collections have no
             * elements in common.
             * <p>Care must be exercised if this method is used on collections that
             * do not comply with the general contract for {@code Collection}.
             * Implementations may elect to iterate over either collection and test
             * for containment in the other collection (or to perform any equivalent
             * computation).  If either collection uses a nonstandard equality test
             * (as does a {@link SortedSet} whose ordering is not <em>compatible with
             * equals</em>, or the key set of an {@link IdentityHashMap}), both
             * collections must use the same nonstandard equality test, or the
             * result of this method is undefined.
             * <p>Care must also be exercised when using collections that have
             * restrictions on the elements that they may contain. Collection
             * implementations are allowed to throw exceptions for any operation
             * involving elements they deem ineligible. For absolute safety the
             * specified collections should contain only elements which are
             * eligible elements for both collections.
             * <p>Note that it is permissible to pass the same collection in both
             * parameters, in which case the method will return {@code true} if and
             * only if the collection is empty.
             */
            // @ts-ignore
            public static disjoint(c1: java.util.Collection, c2: java.util.Collection): boolean;
            /**
             * Adds all of the specified elements to the specified collection.
             * Elements to be added may be specified individually or as an array.
             * The behavior of this convenience method is identical to that of
             * <tt>c.addAll(Arrays.asList(elements))</tt>, but this method is likely
             * to run significantly faster under most implementations.
             * <p>When elements are specified individually, this method provides a
             * convenient way to add a few elements to an existing collection:
             * <pre>
             * Collections.addAll(flavors, "Peaches 'n Plutonium", "Rocky Racoon");
             * </pre>
             */
            // @ts-ignore
            public static addAll(c: java.util.Collection, elements: java.lang.Object): boolean;
            /**
             * Returns a set backed by the specified map.  The resulting set displays
             * the same ordering, concurrency, and performance characteristics as the
             * backing map.  In essence, this factory method provides a {@link Set}
             * implementation corresponding to any {@link Map} implementation.  There
             * is no need to use this method on a {@link Map} implementation that
             * already has a corresponding {@link Set} implementation (such as {@link
             * HashMap} or {@link TreeMap}).
             * <p>Each method invocation on the set returned by this method results in
             * exactly one method invocation on the backing map or its <tt>keySet</tt>
             * view, with one exception.  The <tt>addAll</tt> method is implemented
             * as a sequence of <tt>put</tt> invocations on the backing map.
             * <p>The specified map must be empty at the time this method is invoked,
             * and should not be accessed directly after this method returns.  These
             * conditions are ensured if the map is created empty, passed directly
             * to this method, and no reference to the map is retained, as illustrated
             * in the following code fragment:
             * <pre>
             * Set&lt;Object&gt; weakHashSet = Collections.newSetFromMap(
             * new WeakHashMap&lt;Object, Boolean&gt;());
             * </pre>
             */
            // @ts-ignore
            public static newSetFromMap(map: java.util.Map): java.util.Set;
            /**
             * Returns a view of a {@link Deque} as a Last-in-first-out (Lifo)
             * {@link Queue}. Method <tt>add</tt> is mapped to <tt>push</tt>,
             * <tt>remove</tt> is mapped to <tt>pop</tt> and so on. This
             * view can be useful when you would like to use a method
             * requiring a <tt>Queue</tt> but you need Lifo ordering.
             * <p>Each method invocation on the queue returned by this method
             * results in exactly one method invocation on the backing deque, with
             * one exception.  The {@link Queue#addAll addAll} method is
             * implemented as a sequence of {@link Deque#addFirst addFirst}
             * invocations on the backing deque.
             */
            // @ts-ignore
            public static asLifoQueue(deque: java.util.Deque): java.util.Queue;
        }
    }
}
