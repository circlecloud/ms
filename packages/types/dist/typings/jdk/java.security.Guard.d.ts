// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        interface Guard {
            /**
             * Determines whether or not to allow access to the guarded object
             * {@code object}. Returns silently if access is allowed.
             * Otherwise, throws a SecurityException.
             */
            // @ts-ignore
             checkGuard(object: java.lang.Object): void;
        }
    }
}
