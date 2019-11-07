// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
         class SQLException extends java.lang.Exception {
            /**
             * Constructs a <code>SQLException</code> object with a given
             * <code>reason</code>, <code>SQLState</code>  and
             * <code>vendorCode</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number)
            /**
             * Constructs a <code>SQLException</code> object with a given
             * <code>reason</code> and <code>SQLState</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string)
            /**
             * Constructs a <code>SQLException</code> object with a given
             * <code>reason</code>. The  <code>SQLState</code>  is initialized to
             * <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string)
            /**
             * Constructs a <code>SQLException</code> object.
             * The <code>reason</code>, <code>SQLState</code> are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SQLException</code> object with a given
             * <code>cause</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code>.
             * <p>
             */
            // @ts-ignore
            constructor(cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLException</code> object with a given
             * <code>reason</code> and  <code>cause</code>.
             * The <code>SQLState</code> is  initialized to <code>null</code>
             * and the vendor code is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLException</code> object with a given
             * <code>reason</code>, <code>SQLState</code> and  <code>cause</code>.
             * The vendor code is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, sqlState: string, cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLException</code> object with a given
             * <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * and  <code>cause</code>.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, sqlState: string, vendorCode: number, cause: java.lang.Throwable)
            /**
             * Retrieves the SQLState for this <code>SQLException</code> object.
             */
            // @ts-ignore
            public getSQLState(): string;
            /**
             * Retrieves the vendor-specific exception code
             * for this <code>SQLException</code> object.
             */
            // @ts-ignore
            public getErrorCode(): number;
            /**
             * Retrieves the exception chained to this
             * <code>SQLException</code> object by setNextException(SQLException ex).
             */
            // @ts-ignore
            public getNextException(): java.sql.SQLException;
            /**
             * Adds an <code>SQLException</code> object to the end of the chain.
             */
            // @ts-ignore
            public setNextException(ex: java.sql.SQLException): void;
            /**
             * Returns an iterator over the chained SQLExceptions.  The iterator will
             * be used to iterate over each SQLException and its underlying cause
             * (if any).
             */
            // @ts-ignore
            public iterator(): java.util.Iterator;
        }
    }
}
