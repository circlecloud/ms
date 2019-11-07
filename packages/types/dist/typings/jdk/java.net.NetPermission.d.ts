// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class NetPermission extends java.security.BasicPermission {
            /**
             * Creates a new NetPermission with the specified name.
             * The name is the symbolic name of the NetPermission, such as
             * "setDefaultAuthenticator", etc. An asterisk
             * may appear at the end of the name, following a ".", or by itself, to
             * signify a wildcard match.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new NetPermission object with the specified name.
             * The name is the symbolic name of the NetPermission, and the
             * actions String is currently unused and should be null.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
        }
    }
}
