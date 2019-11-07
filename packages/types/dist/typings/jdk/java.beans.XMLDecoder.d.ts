declare namespace java {
    namespace beans {
        // @ts-ignore
         class XMLDecoder extends java.lang.Object {
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, owner: java.lang.Object)
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, owner: java.lang.Object, exceptionListener: java.beans.ExceptionListener)
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, owner: java.lang.Object, exceptionListener: java.beans.ExceptionListener, cl: java.lang.ClassLoader)
            /**
             * Creates a new decoder to parse XML archives
             * created by the {@code XMLEncoder} class.
             * If the input source {@code is} is {@code null},
             * no exception is thrown and no parsing is performed.
             * This behavior is similar to behavior of other constructors
             * that use {@code InputStream} as a parameter.
             */
            // @ts-ignore
            constructor(is: org.xml.sax.InputSource)
            /**
             * This method closes the input stream associated
             * with this stream.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Sets the exception handler for this stream to <code>exceptionListener</code>.
             * The exception handler is notified when this stream catches recoverable
             * exceptions.
             */
            // @ts-ignore
            public setExceptionListener(exceptionListener: java.beans.ExceptionListener): void;
            /**
             * Gets the exception handler for this stream.
             */
            // @ts-ignore
            public getExceptionListener(): java.beans.ExceptionListener;
            /**
             * Reads the next object from the underlying input stream.
             */
            // @ts-ignore
            public readObject(): java.lang.Object;
            /**
             * Sets the owner of this decoder to <code>owner</code>.
             */
            // @ts-ignore
            public setOwner(owner: java.lang.Object): void;
            /**
             * Gets the owner of this decoder.
             */
            // @ts-ignore
            public getOwner(): java.lang.Object;
            /**
             * Creates a new handler for SAX parser
             * that can be used to parse embedded XML archives
             * created by the {@code XMLEncoder} class.
             * The {@code owner} should be used if parsed XML document contains
             * the method call within context of the &lt;java&gt; element.
             * The {@code null} value may cause illegal parsing in such case.
             * The same problem may occur, if the {@code owner} class
             * does not contain expected method to call. See details <a
             * href="http://java.sun.com/products/jfc/tsc/articles/persistence3/">here</a>.
             */
            // @ts-ignore
            public static createHandler(owner: java.lang.Object, el: java.beans.ExceptionListener, cl: java.lang.ClassLoader): org.xml.sax.helpers.DefaultHandler;
        }
    }
}
