declare namespace java {
    namespace sql {
        // @ts-ignore
         class SQLClientInfoException extends java.sql.SQLException {
            /**
             * Constructs a <code>SQLClientInfoException</code>  Object.
             * The <code>reason</code>,
             * <code>SQLState</code>, and failedProperties list are initialized to
             * <code> null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given <code>failedProperties</code>.
             * The <code>reason</code> and <code>SQLState</code> are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(failedProperties: java.util.Map)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with
             * a given <code>cause</code> and <code>failedProperties</code>.
             * The <code>reason</code>  is initialized to <code>null</code> if
             * <code>cause==null</code> or to <code>cause.toString()</code> if
             * <code>cause!=null</code> and the vendor code is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(failedProperties: java.util.Map, cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given <code>reason</code> and <code>failedProperties</code>.
             * The <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, failedProperties: java.util.Map)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given <code>reason</code>, <code>cause</code> and
             * <code>failedProperties</code>.
             * The  <code>SQLState</code> is initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, failedProperties: java.util.Map, cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>  and
             * <code>failedProperties</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, failedProperties: java.util.Map)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>, <code>cause</code>
             * and <code>failedProperties</code>.  The vendor code is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, failedProperties: java.util.Map, cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>,
             * <code>vendorCode</code>  and <code>failedProperties</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number, failedProperties: java.util.Map)
            /**
             * Constructs a <code>SQLClientInfoException</code> object initialized with a
             * given  <code>reason</code>, <code>SQLState</code>,
             * <code>cause</code>, <code>vendorCode</code> and
             * <code>failedProperties</code>.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number, failedProperties: java.util.Map, cause: java.lang.Throwable)
            /**
             * Returns the list of client info properties that could not be set.  The
             * keys in the Map  contain the names of the client info
             * properties that could not be set and the values contain one of the
             * reason codes defined in <code>ClientInfoStatus</code>
             * <p>
             */
            // @ts-ignore
            public getFailedProperties(): java.util.Map;
        }
    }
}
