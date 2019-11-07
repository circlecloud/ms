// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class AccessibleObject extends java.lang.Object {
                /**
                 * Constructor: only used by the Java Virtual Machine.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Convenience method to set the {@code accessible} flag for an
                 * array of objects with a single security check (for efficiency).
                 * <p>First, if there is a security manager, its
                 * {@code checkPermission} method is called with a
                 * {@code ReflectPermission("suppressAccessChecks")} permission.
                 * <p>A {@code SecurityException} is raised if {@code flag} is
                 * {@code true} but accessibility of any of the elements of the input
                 * {@code array} may not be changed (for example, if the element
                 * object is a {@link Constructor} object for the class {@link
                 * java.lang.Class}).  In the event of such a SecurityException, the
                 * accessibility of objects is set to {@code flag} for array elements
                 * upto (and excluding) the element for which the exception occurred; the
                 * accessibility of elements beyond (and including) the element for which
                 * the exception occurred is unchanged.
                 */
                // @ts-ignore
                public static setAccessible(array: java.lang.reflect.AccessibleObject, flag: boolean): void;
                /**
                 * Set the {@code accessible} flag for this object to
                 * the indicated boolean value.  A value of {@code true} indicates that
                 * the reflected object should suppress Java language access
                 * checking when it is used.  A value of {@code false} indicates
                 * that the reflected object should enforce Java language access checks.
                 * <p>First, if there is a security manager, its
                 * {@code checkPermission} method is called with a
                 * {@code ReflectPermission("suppressAccessChecks")} permission.
                 * <p>A {@code SecurityException} is raised if {@code flag} is
                 * {@code true} but accessibility of this object may not be changed
                 * (for example, if this element object is a {@link Constructor} object for
                 * the class {@link java.lang.Class}).
                 * <p>A {@code SecurityException} is raised if this object is a {@link
                 * java.lang.reflect.Constructor} object for the class
                 * {@code java.lang.Class}, and {@code flag} is true.
                 */
                // @ts-ignore
                public setAccessible(flag: boolean): void;
                /**
                 * Get the value of the {@code accessible} flag for this object.
                 */
                // @ts-ignore
                public isAccessible(): boolean;
                // @ts-ignore
                public getAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public isAnnotationPresent(annotationClass: java.lang.Class): boolean;
                // @ts-ignore
                public getAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
                // @ts-ignore
                public getAnnotations(): java.lang.annotation.Annotation[];
                // @ts-ignore
                public getDeclaredAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
                // @ts-ignore
                public getDeclaredAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
                // @ts-ignore
                public getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            }
        }
    }
}
