declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface GenericArrayType {
                /**
                 * Returns a {@code Type} object representing the component type
                 * of this array. This method creates the component type of the
                 * array.  See the declaration of {@link
                 * java.lang.reflect.ParameterizedType ParameterizedType} for the
                 * semantics of the creation process for parameterized types and
                 * see {@link java.lang.reflect.TypeVariable TypeVariable} for the
                 * creation process for type variables.
                 */
                // @ts-ignore
                 getGenericComponentType(): java.lang.reflect.Type;
            }
        }
    }
}
