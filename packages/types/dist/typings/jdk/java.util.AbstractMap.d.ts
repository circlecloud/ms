// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class AbstractMap extends java.lang.Object {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public size(): number;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public remove(key: java.lang.Object): java.lang.Object;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public putAll(m: java.util.Map): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public clear(): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public values(): java.util.Collection;
            // @ts-ignore
            public abstract entrySet(): java.util.Set;
            /**
             * Compares the specified object with this map for equality.  Returns
             * <tt>true</tt> if the given object is also a map and the two maps
             * represent the same mappings.  More formally, two maps <tt>m1</tt> and
             * <tt>m2</tt> represent the same mappings if
             * <tt>m1.entrySet().equals(m2.entrySet())</tt>.  This ensures that the
             * <tt>equals</tt> method works properly across different implementations
             * of the <tt>Map</tt> interface.
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this map.  The hash code of a map is
             * defined to be the sum of the hash codes of each entry in the map's
             * <tt>entrySet()</tt> view.  This ensures that <tt>m1.equals(m2)</tt>
             * implies that <tt>m1.hashCode()==m2.hashCode()</tt> for any two maps
             * <tt>m1</tt> and <tt>m2</tt>, as required by the general contract of
             * {@link Object#hashCode}.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a string representation of this map.  The string representation
             * consists of a list of key-value mappings in the order returned by the
             * map's <tt>entrySet</tt> view's iterator, enclosed in braces
             * (<tt>"{}"</tt>).  Adjacent mappings are separated by the characters
             * <tt>", "</tt> (comma and space).  Each key-value mapping is rendered as
             * the key followed by an equals sign (<tt>"="</tt>) followed by the
             * associated value.  Keys and values are converted to strings as by
             * {@link String#valueOf(Object)}.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a shallow copy of this <tt>AbstractMap</tt> instance: the keys
             * and values themselves are not cloned.
             */
            // @ts-ignore
            protected clone(): java.lang.Object;
        }
    }
}
