// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
         class SQLPermission extends java.security.BasicPermission {
            /**
             * Creates a new <code>SQLPermission</code> object with the specified name.
             * The name is the symbolic name of the <code>SQLPermission</code>.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new <code>SQLPermission</code> object with the specified name.
             * The name is the symbolic name of the <code>SQLPermission</code>; the
             * actions <code>String</code> is currently unused and should be
             * <code>null</code>.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
        }
    }
}
