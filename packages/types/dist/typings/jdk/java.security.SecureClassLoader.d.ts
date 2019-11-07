declare namespace java {
    namespace security {
        // @ts-ignore
         class SecureClassLoader extends java.lang.ClassLoader {
            /**
             * Creates a new SecureClassLoader using the specified parent
             * class loader for delegation.
             * <p>If there is a security manager, this method first
             * calls the security manager's {@code checkCreateClassLoader}
             * method  to ensure creation of a class loader is allowed.
             * <p>
             */
            // @ts-ignore
            constructor(parent: java.lang.ClassLoader)
            /**
             * Creates a new SecureClassLoader using the default parent class
             * loader for delegation.
             * <p>If there is a security manager, this method first
             * calls the security manager's {@code checkCreateClassLoader}
             * method  to ensure creation of a class loader is allowed.
             */
            // @ts-ignore
            constructor()
            /**
             * Converts an array of bytes into an instance of class Class,
             * with an optional CodeSource. Before the
             * class can be used it must be resolved.
             * <p>
             * If a non-null CodeSource is supplied a ProtectionDomain is
             * constructed and associated with the class being defined.
             * <p>
             */
            // @ts-ignore
            protected defineClass(name: string, b: number, off: number, len: number, cs: java.security.CodeSource): java.lang.Class;
            /**
             * Converts a {@link java.nio.ByteBuffer ByteBuffer}
             * into an instance of class {@code Class}, with an optional CodeSource.
             * Before the class can be used it must be resolved.
             * <p>
             * If a non-null CodeSource is supplied a ProtectionDomain is
             * constructed and associated with the class being defined.
             * <p>
             */
            // @ts-ignore
            protected defineClass(name: string, b: java.nio.ByteBuffer, cs: java.security.CodeSource): java.lang.Class;
            /**
             * Returns the permissions for the given CodeSource object.
             * <p>
             * This method is invoked by the defineClass method which takes
             * a CodeSource as an argument when it is constructing the
             * ProtectionDomain for the class being defined.
             * <p>
             */
            // @ts-ignore
            protected getPermissions(codesource: java.security.CodeSource): java.security.PermissionCollection;
        }
    }
}
