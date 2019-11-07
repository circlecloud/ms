// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface RowId {
            /**
             * Compares this <code>RowId</code> to the specified object. The result is
             * <code>true</code> if and only if the argument is not null and is a RowId
             * object that represents the same ROWID as  this object.
             * <p>
             * It is important
             * to consider both the origin and the valid lifetime of a <code>RowId</code>
             * when comparing it to another <code>RowId</code>. If both are valid, and
             * both are from the same table on the same data source, then if they are equal
             * they identify
             * the same row; if one or more is no longer guaranteed to be valid, or if
             * they originate from different data sources, or different tables on the
             * same data source, they  may be equal but still
             * not identify the same row.
             */
            // @ts-ignore
             equals(obj: java.lang.Object): boolean;
            /**
             * Returns an array of bytes representing the value of the SQL <code>ROWID</code>
             * designated by this <code>java.sql.RowId</code> object.
             */
            // @ts-ignore
             getBytes(): number[];
            /**
             * Returns a String representing the value of the SQL ROWID designated by this
             * <code>java.sql.RowId</code> object.
             * <p>
             * Like <code>java.sql.Date.toString()</code>
             * returns the contents of its DATE as the <code>String</code> "2004-03-17"
             * rather than as  DATE literal in SQL (which would have been the <code>String</code>
             * DATE "2004-03-17"), toString()
             * returns the contents of its ROWID in a form specific to the driver supplying
             * the connection, and possibly not as a <code>ROWID</code> literal.
             */
            // @ts-ignore
             toString(): string;
            /**
             * Returns a hash code value of this <code>RowId</code> object.
             */
            // @ts-ignore
             hashCode(): number;
        }
    }
}
