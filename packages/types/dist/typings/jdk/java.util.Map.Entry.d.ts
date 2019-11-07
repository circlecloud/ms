// @ts-nocheck
declare namespace java {
    namespace util {
        namespace Map {
            // @ts-ignore
            interface Entry {
                /**
                 * Returns the key corresponding to this entry.
                 */
                // @ts-ignore
                 getKey(): java.lang.Object;
                /**
                 * Returns the value corresponding to this entry.  If the mapping
                 * has been removed from the backing map (by the iterator's
                 * <tt>remove</tt> operation), the results of this call are undefined.
                 */
                // @ts-ignore
                 getValue(): java.lang.Object;
                /**
                 * Replaces the value corresponding to this entry with the specified
                 * value (optional operation).  (Writes through to the map.)  The
                 * behavior of this call is undefined if the mapping has already been
                 * removed from the map (by the iterator's <tt>remove</tt> operation).
                 */
                // @ts-ignore
                 setValue(value: java.lang.Object): java.lang.Object;
                /**
                 * Compares the specified object with this entry for equality.
                 * Returns <tt>true</tt> if the given object is also a map entry and
                 * the two entries represent the same mapping.  More formally, two
                 * entries <tt>e1</tt> and <tt>e2</tt> represent the same mapping
                 * if<pre>
                 * (e1.getKey()==null ?
                 * e2.getKey()==null : e1.getKey().equals(e2.getKey()))  &amp;&amp;
                 * (e1.getValue()==null ?
                 * e2.getValue()==null : e1.getValue().equals(e2.getValue()))
                 * </pre>
                 * This ensures that the <tt>equals</tt> method works properly across
                 * different implementations of the <tt>Map.Entry</tt> interface.
                 */
                // @ts-ignore
                 equals(o: java.lang.Object): boolean;
                /**
                 * Returns the hash code value for this map entry.  The hash code
                 * of a map entry <tt>e</tt> is defined to be: <pre>
                 * (e.getKey()==null   ? 0 : e.getKey().hashCode()) ^
                 * (e.getValue()==null ? 0 : e.getValue().hashCode())
                 * </pre>
                 * This ensures that <tt>e1.equals(e2)</tt> implies that
                 * <tt>e1.hashCode()==e2.hashCode()</tt> for any two Entries
                 * <tt>e1</tt> and <tt>e2</tt>, as required by the general
                 * contract of <tt>Object.hashCode</tt>.
                 */
                // @ts-ignore
                 hashCode(): number;
                /**
                 * Returns a comparator that compares {@link Map.Entry} in natural order on key.
                 * <p>The returned comparator is serializable and throws {@link
                 * NullPointerException} when comparing an entry with a null key.
                 */
                // @ts-ignore
                 comparingByKey(): java.util.Comparator;
                /**
                 * Returns a comparator that compares {@link Map.Entry} in natural order on value.
                 * <p>The returned comparator is serializable and throws {@link
                 * NullPointerException} when comparing an entry with null values.
                 */
                // @ts-ignore
                 comparingByValue(): java.util.Comparator;
                /**
                 * Returns a comparator that compares {@link Map.Entry} by key using the given
                 * {@link Comparator}.
                 * <p>The returned comparator is serializable if the specified comparator
                 * is also serializable.
                 */
                // @ts-ignore
                 comparingByKey(cmp: java.util.Comparator): java.util.Comparator;
                /**
                 * Returns a comparator that compares {@link Map.Entry} by value using the given
                 * {@link Comparator}.
                 * <p>The returned comparator is serializable if the specified comparator
                 * is also serializable.
                 */
                // @ts-ignore
                 comparingByValue(cmp: java.util.Comparator): java.util.Comparator;
            }
        }
    }
}
