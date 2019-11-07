declare namespace java {
    namespace util {
        namespace AbstractMap {
            // @ts-ignore
             class SimpleImmutableEntry extends java.lang.Object {
                /**
                 * Creates an entry representing a mapping from the specified
                 * key to the specified value.
                 */
                // @ts-ignore
                constructor(key: java.lang.Object, value: java.lang.Object)
                /**
                 * Creates an entry representing the same mapping as the
                 * specified entry.
                 */
                // @ts-ignore
                constructor(entry: java.util.Map.Entry)
                /**
                 * Returns the key corresponding to this entry.
                 */
                // @ts-ignore
                public getKey(): java.lang.Object;
                /**
                 * Returns the value corresponding to this entry.
                 */
                // @ts-ignore
                public getValue(): java.lang.Object;
                /**
                 * Replaces the value corresponding to this entry with the specified
                 * value (optional operation).  This implementation simply throws
                 * <tt>UnsupportedOperationException</tt>, as this class implements
                 * an <i>immutable</i> map entry.
                 */
                // @ts-ignore
                public setValue(value: java.lang.Object): java.lang.Object;
                /**
                 * Compares the specified object with this entry for equality.
                 * Returns {@code true} if the given object is also a map entry and
                 * the two entries represent the same mapping.  More formally, two
                 * entries {@code e1} and {@code e2} represent the same mapping
                 * if<pre>
                 * (e1.getKey()==null ?
                 * e2.getKey()==null :
                 * e1.getKey().equals(e2.getKey()))
                 * &amp;&amp;
                 * (e1.getValue()==null ?
                 * e2.getValue()==null :
                 * e1.getValue().equals(e2.getValue()))</pre>
                 * This ensures that the {@code equals} method works properly across
                 * different implementations of the {@code Map.Entry} interface.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * Returns the hash code value for this map entry.  The hash code
                 * of a map entry {@code e} is defined to be: <pre>
                 * (e.getKey()==null   ? 0 : e.getKey().hashCode()) ^
                 * (e.getValue()==null ? 0 : e.getValue().hashCode())</pre>
                 * This ensures that {@code e1.equals(e2)} implies that
                 * {@code e1.hashCode()==e2.hashCode()} for any two Entries
                 * {@code e1} and {@code e2}, as required by the general
                 * contract of {@link Object#hashCode}.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a String representation of this map entry.  This
                 * implementation returns the string representation of this
                 * entry's key followed by the equals character ("<tt>=</tt>")
                 * followed by the string representation of this entry's value.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
