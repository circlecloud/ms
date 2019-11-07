// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class ListResourceBundle extends java.util.ResourceBundle {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public handleGetObject(key: string): java.lang.Object;
            /**
             * Returns an <code>Enumeration</code> of the keys contained in
             * this <code>ResourceBundle</code> and its parent bundles.
             */
            // @ts-ignore
            public getKeys(): java.util.Enumeration;
            /**
             * Returns a <code>Set</code> of the keys contained
             * <em>only</em> in this <code>ResourceBundle</code>.
             */
            // @ts-ignore
            protected handleKeySet(): java.util.Set;
            /**
             * Returns an array in which each item is a pair of objects in an
             * <code>Object</code> array. The first element of each pair is
             * the key, which must be a <code>String</code>, and the second
             * element is the value associated with that key.  See the class
             * description for details.
             */
            // @ts-ignore
            protected abstract getContents(): java.lang.Object[][];
        }
    }
}
