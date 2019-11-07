// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface ParameterizedType {
                /**
                 * Returns an array of {@code Type} objects representing the actual type
                 * arguments to this type.
                 * <p>Note that in some cases, the returned array be empty. This can occur
                 * if this type represents a non-parameterized type nested within
                 * a parameterized type.
                 */
                // @ts-ignore
                 getActualTypeArguments(): java.lang.reflect.Type[];
                /**
                 * Returns the {@code Type} object representing the class or interface
                 * that declared this type.
                 */
                // @ts-ignore
                 getRawType(): java.lang.reflect.Type;
                /**
                 * Returns a {@code Type} object representing the type that this type
                 * is a member of.  For example, if this type is {@code O<T>.I<S>},
                 * return a representation of {@code O<T>}.
                 * <p>If this type is a top-level type, {@code null} is returned.
                 */
                // @ts-ignore
                 getOwnerType(): java.lang.reflect.Type;
            }
        }
    }
}
