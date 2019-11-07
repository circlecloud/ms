// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class SecurityPermission extends java.security.BasicPermission {
            /**
             * Creates a new SecurityPermission with the specified name.
             * The name is the symbolic name of the SecurityPermission. An asterisk
             * may appear at the end of the name, following a ".", or by itself, to
             * signify a wildcard match.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new SecurityPermission object with the specified name.
             * The name is the symbolic name of the SecurityPermission, and the
             * actions String is currently unused and should be null.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
        }
    }
}
