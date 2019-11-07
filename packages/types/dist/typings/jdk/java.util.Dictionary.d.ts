// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class Dictionary extends java.lang.Object {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the number of entries (distinct keys) in this dictionary.
             */
            // @ts-ignore
            public abstract size(): number;
            /**
             * Tests if this dictionary maps no keys to value. The general contract
             * for the <tt>isEmpty</tt> method is that the result is true if and only
             * if this dictionary contains no entries.
             */
            // @ts-ignore
            public abstract isEmpty(): boolean;
            /**
             * Returns an enumeration of the keys in this dictionary. The general
             * contract for the keys method is that an <tt>Enumeration</tt> object
             * is returned that will generate all the keys for which this dictionary
             * contains entries.
             */
            // @ts-ignore
            public abstract keys(): java.util.Enumeration;
            /**
             * Returns an enumeration of the values in this dictionary. The general
             * contract for the <tt>elements</tt> method is that an
             * <tt>Enumeration</tt> is returned that will generate all the elements
             * contained in entries in this dictionary.
             */
            // @ts-ignore
            public abstract elements(): java.util.Enumeration;
            /**
             * Returns the value to which the key is mapped in this dictionary.
             * The general contract for the <tt>isEmpty</tt> method is that if this
             * dictionary contains an entry for the specified key, the associated
             * value is returned; otherwise, <tt>null</tt> is returned.
             */
            // @ts-ignore
            public abstract get(key: java.lang.Object): java.lang.Object;
            /**
             * Maps the specified <code>key</code> to the specified
             * <code>value</code> in this dictionary. Neither the key nor the
             * value can be <code>null</code>.
             * <p>
             * If this dictionary already contains an entry for the specified
             * <tt>key</tt>, the value already in this dictionary for that
             * <tt>key</tt> is returned, after modifying the entry to contain the
             * new element. <p>If this dictionary does not already have an entry
             * for the specified <tt>key</tt>, an entry is created for the
             * specified <tt>key</tt> and <tt>value</tt>, and <tt>null</tt> is
             * returned.
             * <p>
             * The <code>value</code> can be retrieved by calling the
             * <code>get</code> method with a <code>key</code> that is equal to
             * the original <code>key</code>.
             */
            // @ts-ignore
            public abstract put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Removes the <code>key</code> (and its corresponding
             * <code>value</code>) from this dictionary. This method does nothing
             * if the <code>key</code> is not in this dictionary.
             */
            // @ts-ignore
            public abstract remove(key: java.lang.Object): java.lang.Object;
        }
    }
}
