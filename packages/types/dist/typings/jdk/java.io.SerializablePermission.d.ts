// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class SerializablePermission extends java.security.BasicPermission {
            /**
             * Creates a new SerializablePermission with the specified name.
             * The name is the symbolic name of the SerializablePermission, such as
             * "enableSubstitution", etc.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new SerializablePermission object with the specified name.
             * The name is the symbolic name of the SerializablePermission, and the
             * actions String is currently unused and should be null.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
        }
    }
}
