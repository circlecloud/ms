declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Ref {
            /**
             * Retrieves the fully-qualified SQL name of the SQL structured type that
             * this <code>Ref</code> object references.
             */
            // @ts-ignore
             getBaseTypeName(): string;
            /**
             * Retrieves the referenced object and maps it to a Java type
             * using the given type map.
             */
            // @ts-ignore
             getObject(map: java.util.Map): java.lang.Object;
            /**
             * Retrieves the SQL structured type instance referenced by
             * this <code>Ref</code> object.  If the connection's type map has an entry
             * for the structured type, the instance will be custom mapped to
             * the Java class indicated in the type map.  Otherwise, the
             * structured type instance will be mapped to a <code>Struct</code> object.
             */
            // @ts-ignore
             getObject(): java.lang.Object;
            /**
             * Sets the structured type value that this <code>Ref</code>
             * object references to the given instance of <code>Object</code>.
             * The driver converts this to an SQL structured type when it
             * sends it to the database.
             */
            // @ts-ignore
             setObject(value: java.lang.Object): void;
        }
    }
}
