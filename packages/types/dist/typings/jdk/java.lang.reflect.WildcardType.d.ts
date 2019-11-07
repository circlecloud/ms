declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface WildcardType {
                /**
                 * Returns an array of {@code Type} objects representing the  upper
                 * bound(s) of this type variable.  Note that if no upper bound is
                 * explicitly declared, the upper bound is {@code Object}.
                 * <p>For each upper bound B :
                 * <ul>
                 * <li>if B is a parameterized type or a type variable, it is created,
                 * (see {@link java.lang.reflect.ParameterizedType ParameterizedType}
                 * for the details of the creation process for parameterized types).
                 * <li>Otherwise, B is resolved.
                 * </ul>
                 */
                // @ts-ignore
                 getUpperBounds(): java.lang.reflect.Type[];
                /**
                 * Returns an array of {@code Type} objects representing the
                 * lower bound(s) of this type variable.  Note that if no lower bound is
                 * explicitly declared, the lower bound is the type of {@code null}.
                 * In this case, a zero length array is returned.
                 * <p>For each lower bound B :
                 * <ul>
                 * <li>if B is a parameterized type or a type variable, it is created,
                 * (see {@link java.lang.reflect.ParameterizedType ParameterizedType}
                 * for the details of the creation process for parameterized types).
                 * <li>Otherwise, B is resolved.
                 * </ul>
                 */
                // @ts-ignore
                 getLowerBounds(): java.lang.reflect.Type[];
            }
        }
    }
}
