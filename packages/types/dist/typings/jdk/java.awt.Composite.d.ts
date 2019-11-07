declare namespace java {
    namespace awt {
        // @ts-ignore
        interface Composite {
            /**
             * Creates a context containing state that is used to perform
             * the compositing operation.  In a multi-threaded environment,
             * several contexts can exist simultaneously for a single
             * <code>Composite</code> object.
             */
            // @ts-ignore
             createContext(srcColorModel: java.awt.image.ColorModel, dstColorModel: java.awt.image.ColorModel, hints: java.awt.RenderingHints): java.awt.CompositeContext;
        }
    }
}
