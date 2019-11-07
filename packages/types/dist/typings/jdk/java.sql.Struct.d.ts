declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Struct {
            /**
             * Retrieves the SQL type name of the SQL structured type
             * that this <code>Struct</code> object represents.
             */
            // @ts-ignore
             getSQLTypeName(): string;
            /**
             * Produces the ordered values of the attributes of the SQL
             * structured type that this <code>Struct</code> object represents.
             * As individual attributes are processed, this method uses the type map
             * associated with the
             * connection for customizations of the type mappings.
             * If there is no
             * entry in the connection's type map that matches the structured
             * type that an attribute represents,
             * the driver uses the standard mapping.
             * <p>
             * Conceptually, this method calls the method
             * <code>getObject</code> on each attribute
             * of the structured type and returns a Java array containing
             * the result.
             */
            // @ts-ignore
             getAttributes(): java.lang.Object[];
            /**
             * Produces the ordered values of the attributes of the SQL
             * structured type that this <code>Struct</code> object represents.
             * As individual attributes are processed, this method uses the given type map
             * for customizations of the type mappings.
             * If there is no
             * entry in the given type map that matches the structured
             * type that an attribute represents,
             * the driver uses the standard mapping. This method never
             * uses the type map associated with the connection.
             * <p>
             * Conceptually, this method calls the method
             * <code>getObject</code> on each attribute
             * of the structured type and returns a Java array containing
             * the result.
             */
            // @ts-ignore
             getAttributes(map: java.util.Map): java.lang.Object[];
        }
    }
}
