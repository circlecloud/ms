declare namespace java {
    namespace sql {
        // @ts-ignore
         class DataTruncation extends java.sql.SQLWarning {
            /**
             * Creates a <code>DataTruncation</code> object
             * with the SQLState initialized
             * to 01004 when <code>read</code> is set to <code>true</code> and 22001
             * when <code>read</code> is set to <code>false</code>,
             * the reason set to "Data truncation", the
             * vendor code set to 0, and
             * the other fields set to the given values.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(index: number, parameter: boolean, read: boolean, dataSize: number, transferSize: number)
            /**
             * Creates a <code>DataTruncation</code> object
             * with the SQLState initialized
             * to 01004 when <code>read</code> is set to <code>true</code> and 22001
             * when <code>read</code> is set to <code>false</code>,
             * the reason set to "Data truncation", the
             * vendor code set to 0, and
             * the other fields set to the given values.
             * <p>
             */
            // @ts-ignore
            constructor(index: number, parameter: boolean, read: boolean, dataSize: number, transferSize: number, cause: java.lang.Throwable)
            /**
             * Retrieves the index of the column or parameter that was truncated.
             * <P>This may be -1 if the column or parameter index is unknown, in
             * which case the <code>parameter</code> and <code>read</code> fields should be ignored.
             */
            // @ts-ignore
            public getIndex(): number;
            /**
             * Indicates whether the value truncated was a parameter value or
             * a column value.
             */
            // @ts-ignore
            public getParameter(): boolean;
            /**
             * Indicates whether or not the value was truncated on a read.
             */
            // @ts-ignore
            public getRead(): boolean;
            /**
             * Gets the number of bytes of data that should have been transferred.
             * This number may be approximate if data conversions were being
             * performed.  The value may be <code>-1</code> if the size is unknown.
             */
            // @ts-ignore
            public getDataSize(): number;
            /**
             * Gets the number of bytes of data actually transferred.
             * The value may be <code>-1</code> if the size is unknown.
             */
            // @ts-ignore
            public getTransferSize(): number;
        }
    }
}
