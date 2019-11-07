declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface AnnotatedWildcardType {
                /**
                 * Returns the potentially annotated lower bounds of this wildcard type.
                 */
                // @ts-ignore
                 getAnnotatedLowerBounds(): java.lang.reflect.AnnotatedType[];
                /**
                 * Returns the potentially annotated upper bounds of this wildcard type.
                 */
                // @ts-ignore
                 getAnnotatedUpperBounds(): java.lang.reflect.AnnotatedType[];
            }
        }
    }
}
