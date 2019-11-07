declare namespace java {
    namespace sql {
        // @ts-ignore
         class BatchUpdateException extends java.sql.SQLException {
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code> and
             * <code>updateCounts</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number, updateCounts: number)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>reason</code>, <code>SQLState</code> and
             * <code>updateCounts</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, updateCounts: number)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>reason</code> and <code>updateCounts</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.  The
             * <code>SQLState</code> is initialized to <code>null</code>
             * and the vendor code is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             */
            // @ts-ignore
            constructor(reason: string, updateCounts: number)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a given
             * <code>updateCounts</code>.
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The  <code>reason</code>
             * and <code>SQLState</code> are initialized to null and the vendor code
             * is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             */
            // @ts-ignore
            constructor(updateCounts: number)
            /**
             * Constructs a <code>BatchUpdateException</code> object.
             * The <code>reason</code>, <code>SQLState</code> and <code>updateCounts</code>
             * are initialized to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>cause</code>.
             * The <code>SQLState</code> and <code>updateCounts</code>
             * are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with a
             * given <code>cause</code> and <code>updateCounts</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             */
            // @ts-ignore
            constructor(updateCounts: number, cause: java.lang.Throwable)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>cause</code>
             * and <code>updateCounts</code>. The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * <p>
             * <strong>Note:</strong> There is no validation of {@code updateCounts} for
             * overflow and because of this it is recommended that you use the constructor
             * {@code BatchUpdateException(String reason, String SQLState,
             * int vendorCode, long []updateCounts,Throwable cause) }.
             * </p>
             */
            // @ts-ignore
            constructor(reason: string, updateCounts: number, cause: java.lang.Throwable)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>SQLState</code>,<code>cause</code>, and
             * <code>updateCounts</code>. The vendor code is initialized to 0.
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, updateCounts: number, cause: java.lang.Throwable)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * <code>cause</code> and <code>updateCounts</code>.
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number, updateCounts: number, cause: java.lang.Throwable)
            /**
             * Constructs a <code>BatchUpdateException</code> object initialized with
             * a given <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * <code>cause</code> and <code>updateCounts</code>.
             * <p>
             * This constructor should be used when the returned update count may exceed
             * {@link Integer#MAX_VALUE}.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number, updateCounts: number, cause: java.lang.Throwable)
            /**
             * Retrieves the update count for each update statement in the batch
             * update that executed successfully before this exception occurred.
             * A driver that implements batch updates may or may not continue to
             * process the remaining commands in a batch when one of the commands
             * fails to execute properly. If the driver continues processing commands,
             * the array returned by this method will have as many elements as
             * there are commands in the batch; otherwise, it will contain an
             * update count for each command that executed successfully before
             * the <code>BatchUpdateException</code> was thrown.
             * <P>
             * The possible return values for this method were modified for
             * the Java 2 SDK, Standard Edition, version 1.3.  This was done to
             * accommodate the new option of continuing to process commands
             * in a batch update after a <code>BatchUpdateException</code> object
             * has been thrown.
             */
            // @ts-ignore
            public getUpdateCounts(): number[];
            /**
             * Retrieves the update count for each update statement in the batch
             * update that executed successfully before this exception occurred.
             * A driver that implements batch updates may or may not continue to
             * process the remaining commands in a batch when one of the commands
             * fails to execute properly. If the driver continues processing commands,
             * the array returned by this method will have as many elements as
             * there are commands in the batch; otherwise, it will contain an
             * update count for each command that executed successfully before
             * the <code>BatchUpdateException</code> was thrown.
             * <p>
             * This method should be used when {@code Statement.executeLargeBatch} is
             * invoked and the returned update count may exceed {@link Integer#MAX_VALUE}.
             * <p>
             */
            // @ts-ignore
            public getLargeUpdateCounts(): number[];
        }
    }
}
