declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface AnnotatedElement {
                /**
                 * Returns true if an annotation for the specified type
                 * is <em>present</em> on this element, else false.  This method
                 * is designed primarily for convenient access to marker annotations.
                 * <p>The truth value returned by this method is equivalent to:
                 * {@code getAnnotation(annotationClass) != null}
                 * <p>The body of the default method is specified to be the code
                 * above.
                 */
                // @ts-ignore
                 isAnnotationPresent(annotationClass: java.lang.Class): boolean;
                /**
                 * Returns this element's annotation for the specified type if
                 * such an annotation is <em>present</em>, else null.
                 */
                // @ts-ignore
                 getAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
                /**
                 * Returns annotations that are <em>present</em> on this element.
                 * If there are no annotations <em>present</em> on this element, the return
                 * value is an array of length 0.
                 * The caller of this method is free to modify the returned array; it will
                 * have no effect on the arrays returned to other callers.
                 */
                // @ts-ignore
                 getAnnotations(): java.lang.annotation.Annotation[];
                /**
                 * Returns annotations that are <em>associated</em> with this element.
                 * If there are no annotations <em>associated</em> with this element, the return
                 * value is an array of length 0.
                 * The difference between this method and {@link #getAnnotation(Class)}
                 * is that this method detects if its argument is a <em>repeatable
                 * annotation type</em> (JLS 9.6), and if so, attempts to find one or
                 * more annotations of that type by "looking through" a container
                 * annotation.
                 * The caller of this method is free to modify the returned array; it will
                 * have no effect on the arrays returned to other callers.
                 */
                // @ts-ignore
                 getAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
                /**
                 * Returns this element's annotation for the specified type if
                 * such an annotation is <em>directly present</em>, else null.
                 * This method ignores inherited annotations. (Returns null if no
                 * annotations are directly present on this element.)
                 */
                // @ts-ignore
                 getDeclaredAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
                /**
                 * Returns this element's annotation(s) for the specified type if
                 * such annotations are either <em>directly present</em> or
                 * <em>indirectly present</em>. This method ignores inherited
                 * annotations.
                 * If there are no specified annotations directly or indirectly
                 * present on this element, the return value is an array of length
                 * 0.
                 * The difference between this method and {@link
                 * #getDeclaredAnnotation(Class)} is that this method detects if its
                 * argument is a <em>repeatable annotation type</em> (JLS 9.6), and if so,
                 * attempts to find one or more annotations of that type by "looking
                 * through" a container annotation if one is present.
                 * The caller of this method is free to modify the returned array; it will
                 * have no effect on the arrays returned to other callers.
                 */
                // @ts-ignore
                 getDeclaredAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
                /**
                 * Returns annotations that are <em>directly present</em> on this element.
                 * This method ignores inherited annotations.
                 * If there are no annotations <em>directly present</em> on this element,
                 * the return value is an array of length 0.
                 * The caller of this method is free to modify the returned array; it will
                 * have no effect on the arrays returned to other callers.
                 */
                // @ts-ignore
                 getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            }
        }
    }
}
