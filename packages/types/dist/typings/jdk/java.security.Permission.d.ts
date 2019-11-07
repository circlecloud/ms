declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class Permission extends java.lang.Object {
            /**
             * Constructs a permission with the specified name.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Implements the guard interface for a permission. The
             * {@code SecurityManager.checkPermission} method is called,
             * passing this permission object as the permission to check.
             * Returns silently if access is granted. Otherwise, throws
             * a SecurityException.
             */
            // @ts-ignore
            public checkGuard(object: java.lang.Object): void;
            /**
             * Checks if the specified permission's actions are "implied by"
             * this object's actions.
             * <P>
             * This must be implemented by subclasses of Permission, as they are the
             * only ones that can impose semantics on a Permission object.
             * <p>The {@code implies} method is used by the AccessController to determine
             * whether or not a requested permission is implied by another permission that
             * is known to be valid in the current execution context.
             */
            // @ts-ignore
            public abstract implies(permission: java.security.Permission): boolean;
            /**
             * Checks two Permission objects for equality.
             * <P>
             * Do not use the {@code equals} method for making access control
             * decisions; use the {@code implies} method.
             */
            // @ts-ignore
            public abstract equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this Permission object.
             * <P>
             * The required {@code hashCode} behavior for Permission Objects is
             * the following:
             * <ul>
             * <li>Whenever it is invoked on the same Permission object more than
             * once during an execution of a Java application, the
             * {@code hashCode} method
             * must consistently return the same integer. This integer need not
             * remain consistent from one execution of an application to another
             * execution of the same application.
             * <li>If two Permission objects are equal according to the
             * {@code equals}
             * method, then calling the {@code hashCode} method on each of the
             * two Permission objects must produce the same integer result.
             * </ul>
             */
            // @ts-ignore
            public abstract hashCode(): number;
            /**
             * Returns the name of this Permission.
             * For example, in the case of a {@code java.io.FilePermission},
             * the name will be a pathname.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns the actions as a String. This is abstract
             * so subclasses can defer creating a String representation until
             * one is needed. Subclasses should always return actions in what they
             * consider to be their
             * canonical form. For example, two FilePermission objects created via
             * the following:
             * <pre>
             * perm1 = new FilePermission(p1,"read,write");
             * perm2 = new FilePermission(p2,"write,read");
             * </pre>
             * both return
             * "read,write" when the {@code getActions} method is invoked.
             */
            // @ts-ignore
            public abstract getActions(): string;
            /**
             * Returns an empty PermissionCollection for a given Permission object, or null if
             * one is not defined. Subclasses of class Permission should
             * override this if they need to store their permissions in a particular
             * PermissionCollection object in order to provide the correct semantics
             * when the {@code PermissionCollection.implies} method is called.
             * If null is returned,
             * then the caller of this method is free to store permissions of this
             * type in any PermissionCollection they choose (one that uses a Hashtable,
             * one that uses a Vector, etc).
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection;
            /**
             * Returns a string describing this Permission.  The convention is to
             * specify the class name, the permission name, and the actions in
             * the following format: '("ClassName" "name" "actions")', or
             * '("ClassName" "name")' if actions list is null or empty.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
