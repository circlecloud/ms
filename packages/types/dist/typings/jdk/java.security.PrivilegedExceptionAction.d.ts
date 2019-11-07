// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        interface PrivilegedExceptionAction {
            /**
             * Performs the computation.  This method will be called by
             * {@code AccessController.doPrivileged} after enabling privileges.
             */
            // @ts-ignore
             run(): java.lang.Object;
        }
    }
}
