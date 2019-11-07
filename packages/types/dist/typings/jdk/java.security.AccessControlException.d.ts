// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class AccessControlException extends java.lang.SecurityException {
            /**
             * Constructs an {@code AccessControlException} with the
             * specified, detailed message.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs an {@code AccessControlException} with the
             * specified, detailed message, and the requested permission that caused
             * the exception.
             */
            // @ts-ignore
            constructor(s: string, p: java.security.Permission)
            /**
             * Gets the Permission object associated with this exception, or
             * null if there was no corresponding Permission object.
             */
            // @ts-ignore
            public getPermission(): java.security.Permission;
        }
    }
}
