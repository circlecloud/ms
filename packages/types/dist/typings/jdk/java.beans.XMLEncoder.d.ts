declare namespace java {
    namespace beans {
        // @ts-ignore
         class XMLEncoder extends java.beans.Encoder {
            /**
             * Creates a new XML encoder to write out <em>JavaBeans</em>
             * to the stream <code>out</code> using an XML encoding.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Creates a new XML encoder to write out <em>JavaBeans</em>
             * to the stream <code>out</code> using the given <code>charset</code>
             * starting from the given <code>indentation</code>.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, charset: string, declaration: boolean, indentation: number)
            /**
             * Sets the owner of this encoder to <code>owner</code>.
             */
            // @ts-ignore
            public setOwner(owner: java.lang.Object): void;
            /**
             * Gets the owner of this encoder.
             */
            // @ts-ignore
            public getOwner(): java.lang.Object;
            /**
             * Write an XML representation of the specified object to the output.
             */
            // @ts-ignore
            public writeObject(o: java.lang.Object): void;
            /**
             * Records the Statement so that the Encoder will
             * produce the actual output when the stream is flushed.
             * <P>
             * This method should only be invoked within the context
             * of initializing a persistence delegate.
             */
            // @ts-ignore
            public writeStatement(oldStm: java.beans.Statement): void;
            /**
             * Records the Expression so that the Encoder will
             * produce the actual output when the stream is flushed.
             * <P>
             * This method should only be invoked within the context of
             * initializing a persistence delegate or setting up an encoder to
             * read from a resource bundle.
             * <P>
             * For more information about using resource bundles with the
             * XMLEncoder, see
             * http://java.sun.com/products/jfc/tsc/articles/persistence4/#i18n
             */
            // @ts-ignore
            public writeExpression(oldExp: java.beans.Expression): void;
            /**
             * This method writes out the preamble associated with the
             * XML encoding if it has not been written already and
             * then writes out all of the values that been
             * written to the stream since the last time <code>flush</code>
             * was called. After flushing, all internal references to the
             * values that were written to this stream are cleared.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * This method calls <code>flush</code>, writes the closing
             * postamble and then closes the output stream associated
             * with this stream.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
