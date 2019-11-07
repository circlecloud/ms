declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface TypeVariable {
                /**
                 * Returns an array of {@code Type} objects representing the
                 * upper bound(s) of this type variable.  Note that if no upper bound is
                 * explicitly declared, the upper bound is {@code Object}.
                 * <p>For each upper bound B: <ul> <li>if B is a parameterized
                 * type or a type variable, it is created, (see {@link
                 * java.lang.reflect.ParameterizedType ParameterizedType} for the
                 * details of the creation process for parameterized types).
                 * <li>Otherwise, B is resolved.  </ul>
                 */
                // @ts-ignore
                 getBounds(): java.lang.reflect.Type[];
                /**
                 * Returns the {@code GenericDeclaration} object representing the
                 * generic declaration declared this type variable.
                 */
                // @ts-ignore
                 getGenericDeclaration(): java.lang.reflect.GenericDeclaration;
                /**
                 * Returns the name of this type variable, as it occurs in the source code.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns an array of AnnotatedType objects that represent the use of
                 * types to denote the upper bounds of the type parameter represented by
                 * this TypeVariable. The order of the objects in the array corresponds to
                 * the order of the bounds in the declaration of the type parameter.
                 * Returns an array of length 0 if the type parameter declares no bounds.
                 */
                // @ts-ignore
                 getAnnotatedBounds(): java.lang.reflect.AnnotatedType[];
            }
        }
    }
}
