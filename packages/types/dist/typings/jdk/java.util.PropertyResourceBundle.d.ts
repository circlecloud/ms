declare namespace java {
    namespace util {
        // @ts-ignore
         class PropertyResourceBundle extends java.util.ResourceBundle {
            /**
             * Creates a property resource bundle from an {@link java.io.InputStream
             * InputStream}.  The property file read with this constructor
             * must be encoded in ISO-8859-1.
             */
            // @ts-ignore
            constructor(stream: java.io.InputStream)
            /**
             * Creates a property resource bundle from a {@link java.io.Reader
             * Reader}.  Unlike the constructor
             * {@link #PropertyResourceBundle(java.io.InputStream) PropertyResourceBundle(InputStream)},
             * there is no limitation as to the encoding of the input property file.
             */
            // @ts-ignore
            constructor(reader: java.io.Reader)
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
        }
    }
}
