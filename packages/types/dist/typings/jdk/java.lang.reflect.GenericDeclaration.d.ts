// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface GenericDeclaration {
                /**
                 * Returns an array of {@code TypeVariable} objects that
                 * represent the type variables declared by the generic
                 * declaration represented by this {@code GenericDeclaration}
                 * object, in declaration order.  Returns an array of length 0 if
                 * the underlying generic declaration declares no type variables.
                 */
                // @ts-ignore
                 getTypeParameters(): java.lang.reflect.TypeVariable[];
            }
        }
    }
}
