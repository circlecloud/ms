declare namespace java {
    namespace sql {
        // @ts-ignore
         class SQLInvalidAuthorizationSpecException extends java.sql.SQLNonTransientException {
            /**
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object.
             * The <code>reason</code>, <code>SQLState</code> are initialized
             * to <code>null</code> and the vendor code is initialized to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object
             * with a given <code>reason</code>. The <code>SQLState</code>
             * is initialized to <code>null</code> and the vendor code is initialized
             * to 0.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string)
            /**
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object
             * with a given <code>reason</code> and <code>SQLState</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method. The vendor code
             * is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string)
            /**
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object
             * with a given <code>reason</code>, <code>SQLState</code>  and
             * <code>vendorCode</code>.
             * The <code>cause</code> is not initialized, and may subsequently be
             * initialized by a call to the
             * {@link Throwable#initCause(java.lang.Throwable)} method.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number)
            /**
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object
             * with a given  <code>cause</code>.
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
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object
             * with a given
             * <code>reason</code> and  <code>cause</code>.
             * The <code>SQLState</code> is  initialized to <code>null</code>
             * and the vendor code is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code> and  <code>cause</code>.
             * The vendor code is initialized to 0.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, cause: java.lang.Throwable)
            /**
             * Constructs a <code>SQLInvalidAuthorizationSpecException</code> object
             * with a given
             * <code>reason</code>, <code>SQLState</code>, <code>vendorCode</code>
             * and  <code>cause</code>.
             * <p>
             */
            // @ts-ignore
            constructor(reason: string, SQLState: string, vendorCode: number, cause: java.lang.Throwable)
        }
    }
}
