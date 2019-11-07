declare namespace java {
    namespace lang {
        // @ts-ignore
         class RuntimePermission extends java.security.BasicPermission {
            /**
             * Creates an instance of this class with the given name.
             */
            // @ts-ignore
            constructor(permissionName: string)
            /**
             * Creates an instance of this class with the given name and
             * action list. The action list is ignored.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
        }
    }
}
