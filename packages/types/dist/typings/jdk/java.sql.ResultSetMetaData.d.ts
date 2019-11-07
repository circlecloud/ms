declare namespace java {
    namespace sql {
        // @ts-ignore
        interface ResultSetMetaData {
            // @ts-ignore
             columnNoNulls: number;
            // @ts-ignore
             columnNullable: number;
            // @ts-ignore
             columnNullableUnknown: number;
            /**
             * Returns the number of columns in this <code>ResultSet</code> object.
             */
            // @ts-ignore
             getColumnCount(): number;
            /**
             * Indicates whether the designated column is automatically numbered.
             */
            // @ts-ignore
             isAutoIncrement(column: number): boolean;
            /**
             * Indicates whether a column's case matters.
             */
            // @ts-ignore
             isCaseSensitive(column: number): boolean;
            /**
             * Indicates whether the designated column can be used in a where clause.
             */
            // @ts-ignore
             isSearchable(column: number): boolean;
            /**
             * Indicates whether the designated column is a cash value.
             */
            // @ts-ignore
             isCurrency(column: number): boolean;
            /**
             * Indicates the nullability of values in the designated column.
             */
            // @ts-ignore
             isNullable(column: number): number;
            /**
             * Indicates whether values in the designated column are signed numbers.
             */
            // @ts-ignore
             isSigned(column: number): boolean;
            /**
             * Indicates the designated column's normal maximum width in characters.
             */
            // @ts-ignore
             getColumnDisplaySize(column: number): number;
            /**
             * Gets the designated column's suggested title for use in printouts and
             * displays. The suggested title is usually specified by the SQL <code>AS</code>
             * clause.  If a SQL <code>AS</code> is not specified, the value returned from
             * <code>getColumnLabel</code> will be the same as the value returned by the
             * <code>getColumnName</code> method.
             */
            // @ts-ignore
             getColumnLabel(column: number): string;
            /**
             * Get the designated column's name.
             */
            // @ts-ignore
             getColumnName(column: number): string;
            /**
             * Get the designated column's table's schema.
             */
            // @ts-ignore
             getSchemaName(column: number): string;
            /**
             * Get the designated column's specified column size.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. 0 is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getPrecision(column: number): number;
            /**
             * Gets the designated column's number of digits to right of the decimal point.
             * 0 is returned for data types where the scale is not applicable.
             */
            // @ts-ignore
             getScale(column: number): number;
            /**
             * Gets the designated column's table name.
             */
            // @ts-ignore
             getTableName(column: number): string;
            /**
             * Gets the designated column's table's catalog name.
             */
            // @ts-ignore
             getCatalogName(column: number): string;
            /**
             * Retrieves the designated column's SQL type.
             */
            // @ts-ignore
             getColumnType(column: number): number;
            /**
             * Retrieves the designated column's database-specific type name.
             */
            // @ts-ignore
             getColumnTypeName(column: number): string;
            /**
             * Indicates whether the designated column is definitely not writable.
             */
            // @ts-ignore
             isReadOnly(column: number): boolean;
            /**
             * Indicates whether it is possible for a write on the designated column to succeed.
             */
            // @ts-ignore
             isWritable(column: number): boolean;
            /**
             * Indicates whether a write on the designated column will definitely succeed.
             */
            // @ts-ignore
             isDefinitelyWritable(column: number): boolean;
            /**
             * <p>Returns the fully-qualified name of the Java class whose instances
             * are manufactured if the method <code>ResultSet.getObject</code>
             * is called to retrieve a value
             * from the column.  <code>ResultSet.getObject</code> may return a subclass of the
             * class returned by this method.
             */
            // @ts-ignore
             getColumnClassName(column: number): string;
        }
    }
}
