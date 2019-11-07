// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Array {
            /**
             * Retrieves the SQL type name of the elements in
             * the array designated by this <code>Array</code> object.
             * If the elements are a built-in type, it returns
             * the database-specific type name of the elements.
             * If the elements are a user-defined type (UDT),
             * this method returns the fully-qualified SQL type name.
             */
            // @ts-ignore
             getBaseTypeName(): string;
            /**
             * Retrieves the JDBC type of the elements in the array designated
             * by this <code>Array</code> object.
             */
            // @ts-ignore
             getBaseType(): number;
            /**
             * Retrieves the contents of the SQL <code>ARRAY</code> value designated
             * by this
             * <code>Array</code> object in the form of an array in the Java
             * programming language. This version of the method <code>getArray</code>
             * uses the type map associated with the connection for customizations of
             * the type mappings.
             * <p>
             * <strong>Note:</strong> When <code>getArray</code> is used to materialize
             * a base type that maps to a primitive data type, then it is
             * implementation-defined whether the array returned is an array of
             * that primitive data type or an array of <code>Object</code>.
             */
            // @ts-ignore
             getArray(): java.lang.Object;
            /**
             * Retrieves the contents of the SQL <code>ARRAY</code> value designated by this
             * <code>Array</code> object.
             * This method uses
             * the specified <code>map</code> for type map customizations
             * unless the base type of the array does not match a user-defined
             * type in <code>map</code>, in which case it
             * uses the standard mapping. This version of the method
             * <code>getArray</code> uses either the given type map or the standard mapping;
             * it never uses the type map associated with the connection.
             * <p>
             * <strong>Note:</strong> When <code>getArray</code> is used to materialize
             * a base type that maps to a primitive data type, then it is
             * implementation-defined whether the array returned is an array of
             * that primitive data type or an array of <code>Object</code>.
             */
            // @ts-ignore
             getArray(map: java.util.Map): java.lang.Object;
            /**
             * Retrieves a slice of the SQL <code>ARRAY</code>
             * value designated by this <code>Array</code> object, beginning with the
             * specified <code>index</code> and containing up to <code>count</code>
             * successive elements of the SQL array.  This method uses the type map
             * associated with the connection for customizations of the type mappings.
             * <p>
             * <strong>Note:</strong> When <code>getArray</code> is used to materialize
             * a base type that maps to a primitive data type, then it is
             * implementation-defined whether the array returned is an array of
             * that primitive data type or an array of <code>Object</code>.
             */
            // @ts-ignore
             getArray(index: number, count: number): java.lang.Object;
            /**
             * Retreives a slice of the SQL <code>ARRAY</code> value
             * designated by this <code>Array</code> object, beginning with the specified
             * <code>index</code> and containing up to <code>count</code>
             * successive elements of the SQL array.
             * <P>
             * This method uses
             * the specified <code>map</code> for type map customizations
             * unless the base type of the array does not match a user-defined
             * type in <code>map</code>, in which case it
             * uses the standard mapping. This version of the method
             * <code>getArray</code> uses either the given type map or the standard mapping;
             * it never uses the type map associated with the connection.
             * <p>
             * <strong>Note:</strong> When <code>getArray</code> is used to materialize
             * a base type that maps to a primitive data type, then it is
             * implementation-defined whether the array returned is an array of
             * that primitive data type or an array of <code>Object</code>.
             */
            // @ts-ignore
             getArray(index: number, count: number, map: java.util.Map): java.lang.Object;
            /**
             * Retrieves a result set that contains the elements of the SQL
             * <code>ARRAY</code> value
             * designated by this <code>Array</code> object.  If appropriate,
             * the elements of the array are mapped using the connection's type
             * map; otherwise, the standard mapping is used.
             * <p>
             * The result set contains one row for each array element, with
             * two columns in each row.  The second column stores the element
             * value; the first column stores the index into the array for
             * that element (with the first array element being at index 1).
             * The rows are in ascending order corresponding to
             * the order of the indices.
             */
            // @ts-ignore
             getResultSet(): java.sql.ResultSet;
            /**
             * Retrieves a result set that contains the elements of the SQL
             * <code>ARRAY</code> value designated by this <code>Array</code> object.
             * This method uses
             * the specified <code>map</code> for type map customizations
             * unless the base type of the array does not match a user-defined
             * type in <code>map</code>, in which case it
             * uses the standard mapping. This version of the method
             * <code>getResultSet</code> uses either the given type map or the standard mapping;
             * it never uses the type map associated with the connection.
             * <p>
             * The result set contains one row for each array element, with
             * two columns in each row.  The second column stores the element
             * value; the first column stores the index into the array for
             * that element (with the first array element being at index 1).
             * The rows are in ascending order corresponding to
             * the order of the indices.
             */
            // @ts-ignore
             getResultSet(map: java.util.Map): java.sql.ResultSet;
            /**
             * Retrieves a result set holding the elements of the subarray that
             * starts at index <code>index</code> and contains up to
             * <code>count</code> successive elements.  This method uses
             * the connection's type map to map the elements of the array if
             * the map contains an entry for the base type. Otherwise, the
             * standard mapping is used.
             * <P>
             * The result set has one row for each element of the SQL array
             * designated by this object, with the first row containing the
             * element at index <code>index</code>.  The result set has
             * up to <code>count</code> rows in ascending order based on the
             * indices.  Each row has two columns:  The second column stores
             * the element value; the first column stores the index into the
             * array for that element.
             */
            // @ts-ignore
             getResultSet(index: number, count: number): java.sql.ResultSet;
            /**
             * Retrieves a result set holding the elements of the subarray that
             * starts at index <code>index</code> and contains up to
             * <code>count</code> successive elements.
             * This method uses
             * the specified <code>map</code> for type map customizations
             * unless the base type of the array does not match a user-defined
             * type in <code>map</code>, in which case it
             * uses the standard mapping. This version of the method
             * <code>getResultSet</code> uses either the given type map or the standard mapping;
             * it never uses the type map associated with the connection.
             * <P>
             * The result set has one row for each element of the SQL array
             * designated by this object, with the first row containing the
             * element at index <code>index</code>.  The result set has
             * up to <code>count</code> rows in ascending order based on the
             * indices.  Each row has two columns:  The second column stores
             * the element value; the first column stores the index into the
             * array for that element.
             */
            // @ts-ignore
             getResultSet(index: number, count: number, map: java.util.Map): java.sql.ResultSet;
            /**
             * This method frees the <code>Array</code> object and releases the resources that
             * it holds. The object is invalid once the <code>free</code>
             * method is called.
             * <p>
             * After <code>free</code> has been called, any attempt to invoke a
             * method other than <code>free</code> will result in a <code>SQLException</code>
             * being thrown.  If <code>free</code> is called multiple times, the subsequent
             * calls to <code>free</code> are treated as a no-op.
             * <p>
             */
            // @ts-ignore
             free(): void;
        }
    }
}
