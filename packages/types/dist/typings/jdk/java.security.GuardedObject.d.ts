// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class GuardedObject extends java.lang.Object {
            /**
             * Constructs a GuardedObject using the specified object and guard.
             * If the Guard object is null, then no restrictions will
             * be placed on who can access the object.
             */
            // @ts-ignore
            constructor(object: java.lang.Object, guard: java.security.Guard)
            /**
             * Retrieves the guarded object, or throws an exception if access
             * to the guarded object is denied by the guard.
             */
            // @ts-ignore
            public getObject(): java.lang.Object;
        }
    }
}
