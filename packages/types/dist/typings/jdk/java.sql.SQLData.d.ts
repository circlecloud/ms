declare namespace java {
    namespace sql {
        // @ts-ignore
        interface SQLData {
            /**
             * Returns the fully-qualified
             * name of the SQL user-defined type that this object represents.
             * This method is called by the JDBC driver to get the name of the
             * UDT instance that is being mapped to this instance of
             * <code>SQLData</code>.
             */
            // @ts-ignore
             getSQLTypeName(): string;
            /**
             * Populates this object with data read from the database.
             * The implementation of the method must follow this protocol:
             * <UL>
             * <LI>It must read each of the attributes or elements of the SQL
             * type  from the given input stream.  This is done
             * by calling a method of the input stream to read each
             * item, in the order that they appear in the SQL definition
             * of the type.
             * <LI>The method <code>readSQL</code> then
             * assigns the data to appropriate fields or
             * elements (of this or other objects).
             * Specifically, it must call the appropriate <i>reader</i> method
             * (<code>SQLInput.readString</code>, <code>SQLInput.readBigDecimal</code>,
             * and so on) method(s) to do the following:
             * for a distinct type, read its single data element;
             * for a structured type, read a value for each attribute of the SQL type.
             * </UL>
             * The JDBC driver initializes the input stream with a type map
             * before calling this method, which is used by the appropriate
             * <code>SQLInput</code> reader method on the stream.
             */
            // @ts-ignore
             readSQL(stream: java.sql.SQLInput, typeName: string): void;
            /**
             * Writes this object to the given SQL data stream, converting it back to
             * its SQL value in the data source.
             * The implementation of the method must follow this protocol:<BR>
             * It must write each of the attributes of the SQL type
             * to the given output stream.  This is done by calling a
             * method of the output stream to write each item, in the order that
             * they appear in the SQL definition of the type.
             * Specifically, it must call the appropriate <code>SQLOutput</code> writer
             * method(s) (<code>writeInt</code>, <code>writeString</code>, and so on)
             * to do the following: for a Distinct Type, write its single data element;
             * for a Structured Type, write a value for each attribute of the SQL type.
             */
            // @ts-ignore
             writeSQL(stream: java.sql.SQLOutput): void;
        }
    }
}
