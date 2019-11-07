// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface ResultSet {
            // @ts-ignore
             FETCH_FORWARD: number;
            // @ts-ignore
             FETCH_REVERSE: number;
            // @ts-ignore
             FETCH_UNKNOWN: number;
            // @ts-ignore
             TYPE_FORWARD_ONLY: number;
            // @ts-ignore
             TYPE_SCROLL_INSENSITIVE: number;
            // @ts-ignore
             TYPE_SCROLL_SENSITIVE: number;
            // @ts-ignore
             CONCUR_READ_ONLY: number;
            // @ts-ignore
             CONCUR_UPDATABLE: number;
            // @ts-ignore
             HOLD_CURSORS_OVER_COMMIT: number;
            // @ts-ignore
             CLOSE_CURSORS_AT_COMMIT: number;
            /**
             * Moves the cursor forward one row from its current position.
             * A <code>ResultSet</code> cursor is initially positioned
             * before the first row; the first call to the method
             * <code>next</code> makes the first row the current row; the
             * second call makes the second row the current row, and so on.
             * <p>
             * When a call to the <code>next</code> method returns <code>false</code>,
             * the cursor is positioned after the last row. Any
             * invocation of a <code>ResultSet</code> method which requires a
             * current row will result in a <code>SQLException</code> being thrown.
             * If the result set type is <code>TYPE_FORWARD_ONLY</code>, it is vendor specified
             * whether their JDBC driver implementation will return <code>false</code> or
             * throw an <code>SQLException</code> on a
             * subsequent call to <code>next</code>.
             * <P>If an input stream is open for the current row, a call
             * to the method <code>next</code> will
             * implicitly close it. A <code>ResultSet</code> object's
             * warning chain is cleared when a new row is read.
             */
            // @ts-ignore
             next(): boolean;
            /**
             * Releases this <code>ResultSet</code> object's database and
             * JDBC resources immediately instead of waiting for
             * this to happen when it is automatically closed.
             * <P>The closing of a <code>ResultSet</code> object does <strong>not</strong> close the <code>Blob</code>,
             * <code>Clob</code> or <code>NClob</code> objects created by the <code>ResultSet</code>. <code>Blob</code>,
             * <code>Clob</code> or <code>NClob</code> objects remain valid for at least the duration of the
             * transaction in which they are created, unless their <code>free</code> method is invoked.
             * <p>
             * When a <code>ResultSet</code> is closed, any <code>ResultSetMetaData</code>
             * instances that were created by calling the  <code>getMetaData</code>
             * method remain accessible.
             * <P><B>Note:</B> A <code>ResultSet</code> object
             * is automatically closed by the
             * <code>Statement</code> object that generated it when
             * that <code>Statement</code> object is closed,
             * re-executed, or is used to retrieve the next result from a
             * sequence of multiple results.
             * <p>
             * Calling the method <code>close</code> on a <code>ResultSet</code>
             * object that is already closed is a no-op.
             */
            // @ts-ignore
             close(): void;
            /**
             * Reports whether
             * the last column read had a value of SQL <code>NULL</code>.
             * Note that you must first call one of the getter methods
             * on a column to try to read its value and then call
             * the method <code>wasNull</code> to see if the value read was
             * SQL <code>NULL</code>.
             */
            // @ts-ignore
             wasNull(): boolean;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>String</code> in the Java programming language.
             */
            // @ts-ignore
             getString(columnIndex: number): string;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>boolean</code> in the Java programming language.
             * <P>If the designated column has a datatype of CHAR or VARCHAR
             * and contains a "0" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains  a 0, a value of <code>false</code> is returned.  If the designated column has a datatype
             * of CHAR or VARCHAR
             * and contains a "1" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains  a 1, a value of <code>true</code> is returned.
             */
            // @ts-ignore
             getBoolean(columnIndex: number): boolean;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>byte</code> in the Java programming language.
             */
            // @ts-ignore
             getByte(columnIndex: number): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>short</code> in the Java programming language.
             */
            // @ts-ignore
             getShort(columnIndex: number): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * an <code>int</code> in the Java programming language.
             */
            // @ts-ignore
             getInt(columnIndex: number): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>long</code> in the Java programming language.
             */
            // @ts-ignore
             getLong(columnIndex: number): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>float</code> in the Java programming language.
             */
            // @ts-ignore
             getFloat(columnIndex: number): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>double</code> in the Java programming language.
             */
            // @ts-ignore
             getDouble(columnIndex: number): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.sql.BigDecimal</code> in the Java programming language.
             */
            // @ts-ignore
             getBigDecimal(columnIndex: number, scale: number): java.math.BigDecimal;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>byte</code> array in the Java programming language.
             * The bytes represent the raw values returned by the driver.
             */
            // @ts-ignore
             getBytes(columnIndex: number): number[];
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.sql.Date</code> object in the Java programming language.
             */
            // @ts-ignore
             getDate(columnIndex: number): java.sql.Date;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.sql.Time</code> object in the Java programming language.
             */
            // @ts-ignore
             getTime(columnIndex: number): java.sql.Time;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.sql.Timestamp</code> object in the Java programming language.
             */
            // @ts-ignore
             getTimestamp(columnIndex: number): java.sql.Timestamp;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a stream of ASCII characters. The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large <code>LONGVARCHAR</code> values.
             * The JDBC driver will
             * do any necessary conversion from the database format into ASCII.
             * <P><B>Note:</B> All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream.  Also, a
             * stream may return <code>0</code> when the method
             * <code>InputStream.available</code>
             * is called whether there is data available or not.
             */
            // @ts-ignore
             getAsciiStream(columnIndex: number): java.io.InputStream;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * as a stream of two-byte 3 characters. The first byte is
             * the high byte; the second byte is the low byte.
             * The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large <code>LONGVARCHAR</code>values.  The
             * JDBC driver will do any necessary conversion from the database
             * format into Unicode.
             * <P><B>Note:</B> All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream.
             * Also, a stream may return <code>0</code> when the method
             * <code>InputStream.available</code>
             * is called, whether there is data available or not.
             */
            // @ts-ignore
             getUnicodeStream(columnIndex: number): java.io.InputStream;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a  stream of
             * uninterpreted bytes. The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large <code>LONGVARBINARY</code> values.
             * <P><B>Note:</B> All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream.  Also, a
             * stream may return <code>0</code> when the method
             * <code>InputStream.available</code>
             * is called whether there is data available or not.
             */
            // @ts-ignore
             getBinaryStream(columnIndex: number): java.io.InputStream;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>String</code> in the Java programming language.
             */
            // @ts-ignore
             getString(columnLabel: string): string;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>boolean</code> in the Java programming language.
             * <P>If the designated column has a datatype of CHAR or VARCHAR
             * and contains a "0" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains  a 0, a value of <code>false</code> is returned.  If the designated column has a datatype
             * of CHAR or VARCHAR
             * and contains a "1" or has a datatype of BIT, TINYINT, SMALLINT, INTEGER or BIGINT
             * and contains  a 1, a value of <code>true</code> is returned.
             */
            // @ts-ignore
             getBoolean(columnLabel: string): boolean;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>byte</code> in the Java programming language.
             */
            // @ts-ignore
             getByte(columnLabel: string): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>short</code> in the Java programming language.
             */
            // @ts-ignore
             getShort(columnLabel: string): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * an <code>int</code> in the Java programming language.
             */
            // @ts-ignore
             getInt(columnLabel: string): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>long</code> in the Java programming language.
             */
            // @ts-ignore
             getLong(columnLabel: string): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>float</code> in the Java programming language.
             */
            // @ts-ignore
             getFloat(columnLabel: string): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>double</code> in the Java programming language.
             */
            // @ts-ignore
             getDouble(columnLabel: string): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.math.BigDecimal</code> in the Java programming language.
             */
            // @ts-ignore
             getBigDecimal(columnLabel: string, scale: number): java.math.BigDecimal;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>byte</code> array in the Java programming language.
             * The bytes represent the raw values returned by the driver.
             */
            // @ts-ignore
             getBytes(columnLabel: string): number[];
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.sql.Date</code> object in the Java programming language.
             */
            // @ts-ignore
             getDate(columnLabel: string): java.sql.Date;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.sql.Time</code> object in the Java programming language.
             */
            // @ts-ignore
             getTime(columnLabel: string): java.sql.Time;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>java.sql.Timestamp</code> object in the Java programming language.
             */
            // @ts-ignore
             getTimestamp(columnLabel: string): java.sql.Timestamp;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a stream of
             * ASCII characters. The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large <code>LONGVARCHAR</code> values.
             * The JDBC driver will
             * do any necessary conversion from the database format into ASCII.
             * <P><B>Note:</B> All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream. Also, a
             * stream may return <code>0</code> when the method <code>available</code>
             * is called whether there is data available or not.
             */
            // @ts-ignore
             getAsciiStream(columnLabel: string): java.io.InputStream;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a stream of two-byte
             * Unicode characters. The first byte is the high byte; the second
             * byte is the low byte.
             * The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large <code>LONGVARCHAR</code> values.
             * The JDBC technology-enabled driver will
             * do any necessary conversion from the database format into Unicode.
             * <P><B>Note:</B> All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream.
             * Also, a stream may return <code>0</code> when the method
             * <code>InputStream.available</code> is called, whether there
             * is data available or not.
             */
            // @ts-ignore
             getUnicodeStream(columnLabel: string): java.io.InputStream;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a stream of uninterpreted
             * <code>byte</code>s.
             * The value can then be read in chunks from the
             * stream. This method is particularly
             * suitable for retrieving large <code>LONGVARBINARY</code>
             * values.
             * <P><B>Note:</B> All the data in the returned stream must be
             * read prior to getting the value of any other column. The next
             * call to a getter method implicitly closes the stream. Also, a
             * stream may return <code>0</code> when the method <code>available</code>
             * is called whether there is data available or not.
             */
            // @ts-ignore
             getBinaryStream(columnLabel: string): java.io.InputStream;
            /**
             * Retrieves the first warning reported by calls on this
             * <code>ResultSet</code> object.
             * Subsequent warnings on this <code>ResultSet</code> object
             * will be chained to the <code>SQLWarning</code> object that
             * this method returns.
             * <P>The warning chain is automatically cleared each time a new
             * row is read.  This method may not be called on a <code>ResultSet</code>
             * object that has been closed; doing so will cause an
             * <code>SQLException</code> to be thrown.
             * <P>
             * <B>Note:</B> This warning chain only covers warnings caused
             * by <code>ResultSet</code> methods.  Any warning caused by
             * <code>Statement</code> methods
             * (such as reading OUT parameters) will be chained on the
             * <code>Statement</code> object.
             */
            // @ts-ignore
             getWarnings(): java.sql.SQLWarning;
            /**
             * Clears all warnings reported on this <code>ResultSet</code> object.
             * After this method is called, the method <code>getWarnings</code>
             * returns <code>null</code> until a new warning is
             * reported for this <code>ResultSet</code> object.
             */
            // @ts-ignore
             clearWarnings(): void;
            /**
             * Retrieves the name of the SQL cursor used by this <code>ResultSet</code>
             * object.
             * <P>In SQL, a result table is retrieved through a cursor that is
             * named. The current row of a result set can be updated or deleted
             * using a positioned update/delete statement that references the
             * cursor name. To insure that the cursor has the proper isolation
             * level to support update, the cursor's <code>SELECT</code> statement
             * should be of the form <code>SELECT FOR UPDATE</code>. If
             * <code>FOR UPDATE</code> is omitted, the positioned updates may fail.
             * <P>The JDBC API supports this SQL feature by providing the name of the
             * SQL cursor used by a <code>ResultSet</code> object.
             * The current row of a <code>ResultSet</code> object
             * is also the current row of this SQL cursor.
             */
            // @ts-ignore
             getCursorName(): string;
            /**
             * Retrieves the  number, types and properties of
             * this <code>ResultSet</code> object's columns.
             */
            // @ts-ignore
             getMetaData(): java.sql.ResultSetMetaData;
            /**
             * <p>Gets the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * an <code>Object</code> in the Java programming language.
             * <p>This method will return the value of the given column as a
             * Java object.  The type of the Java object will be the default
             * Java object type corresponding to the column's SQL type,
             * following the mapping for built-in types specified in the JDBC
             * specification. If the value is an SQL <code>NULL</code>,
             * the driver returns a Java <code>null</code>.
             * <p>This method may also be used to read database-specific
             * abstract data types.
             * In the JDBC 2.0 API, the behavior of method
             * <code>getObject</code> is extended to materialize
             * data of SQL user-defined types.
             * <p>
             * If <code>Connection.getTypeMap</code> does not throw a
             * <code>SQLFeatureNotSupportedException</code>,
             * then when a column contains a structured or distinct value,
             * the behavior of this method is as
             * if it were a call to: <code>getObject(columnIndex,
             * this.getStatement().getConnection().getTypeMap())</code>.
             * If <code>Connection.getTypeMap</code> does throw a
             * <code>SQLFeatureNotSupportedException</code>,
             * then structured values are not supported, and distinct values
             * are mapped to the default Java class as determined by the
             * underlying SQL type of the DISTINCT type.
             */
            // @ts-ignore
             getObject(columnIndex: number): java.lang.Object;
            /**
             * <p>Gets the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * an <code>Object</code> in the Java programming language.
             * <p>This method will return the value of the given column as a
             * Java object.  The type of the Java object will be the default
             * Java object type corresponding to the column's SQL type,
             * following the mapping for built-in types specified in the JDBC
             * specification. If the value is an SQL <code>NULL</code>,
             * the driver returns a Java <code>null</code>.
             * <P>
             * This method may also be used to read database-specific
             * abstract data types.
             * <P>
             * In the JDBC 2.0 API, the behavior of the method
             * <code>getObject</code> is extended to materialize
             * data of SQL user-defined types.  When a column contains
             * a structured or distinct value, the behavior of this method is as
             * if it were a call to: <code>getObject(columnIndex,
             * this.getStatement().getConnection().getTypeMap())</code>.
             */
            // @ts-ignore
             getObject(columnLabel: string): java.lang.Object;
            /**
             * Maps the given <code>ResultSet</code> column label to its
             * <code>ResultSet</code> column index.
             */
            // @ts-ignore
             findColumn(columnLabel: string): number;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a
             * <code>java.io.Reader</code> object.
             */
            // @ts-ignore
             getCharacterStream(columnIndex: number): java.io.Reader;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a
             * <code>java.io.Reader</code> object.
             */
            // @ts-ignore
             getCharacterStream(columnLabel: string): java.io.Reader;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a
             * <code>java.math.BigDecimal</code> with full precision.
             */
            // @ts-ignore
             getBigDecimal(columnIndex: number): java.math.BigDecimal;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a
             * <code>java.math.BigDecimal</code> with full precision.
             */
            // @ts-ignore
             getBigDecimal(columnLabel: string): java.math.BigDecimal;
            /**
             * Retrieves whether the cursor is before the first row in
             * this <code>ResultSet</code> object.
             * <p>
             * <strong>Note:</strong>Support for the <code>isBeforeFirst</code> method
             * is optional for <code>ResultSet</code>s with a result
             * set type of <code>TYPE_FORWARD_ONLY</code>
             */
            // @ts-ignore
             isBeforeFirst(): boolean;
            /**
             * Retrieves whether the cursor is after the last row in
             * this <code>ResultSet</code> object.
             * <p>
             * <strong>Note:</strong>Support for the <code>isAfterLast</code> method
             * is optional for <code>ResultSet</code>s with a result
             * set type of <code>TYPE_FORWARD_ONLY</code>
             */
            // @ts-ignore
             isAfterLast(): boolean;
            /**
             * Retrieves whether the cursor is on the first row of
             * this <code>ResultSet</code> object.
             * <p>
             * <strong>Note:</strong>Support for the <code>isFirst</code> method
             * is optional for <code>ResultSet</code>s with a result
             * set type of <code>TYPE_FORWARD_ONLY</code>
             */
            // @ts-ignore
             isFirst(): boolean;
            /**
             * Retrieves whether the cursor is on the last row of
             * this <code>ResultSet</code> object.
             * <strong>Note:</strong> Calling the method <code>isLast</code> may be expensive
             * because the JDBC driver
             * might need to fetch ahead one row in order to determine
             * whether the current row is the last row in the result set.
             * <p>
             * <strong>Note:</strong> Support for the <code>isLast</code> method
             * is optional for <code>ResultSet</code>s with a result
             * set type of <code>TYPE_FORWARD_ONLY</code>
             */
            // @ts-ignore
             isLast(): boolean;
            /**
             * Moves the cursor to the front of
             * this <code>ResultSet</code> object, just before the
             * first row. This method has no effect if the result set contains no rows.
             */
            // @ts-ignore
             beforeFirst(): void;
            /**
             * Moves the cursor to the end of
             * this <code>ResultSet</code> object, just after the
             * last row. This method has no effect if the result set contains no rows.
             */
            // @ts-ignore
             afterLast(): void;
            /**
             * Moves the cursor to the first row in
             * this <code>ResultSet</code> object.
             */
            // @ts-ignore
             first(): boolean;
            /**
             * Moves the cursor to the last row in
             * this <code>ResultSet</code> object.
             */
            // @ts-ignore
             last(): boolean;
            /**
             * Retrieves the current row number.  The first row is number 1, the
             * second number 2, and so on.
             * <p>
             * <strong>Note:</strong>Support for the <code>getRow</code> method
             * is optional for <code>ResultSet</code>s with a result
             * set type of <code>TYPE_FORWARD_ONLY</code>
             */
            // @ts-ignore
             getRow(): number;
            /**
             * Moves the cursor to the given row number in
             * this <code>ResultSet</code> object.
             * <p>If the row number is positive, the cursor moves to
             * the given row number with respect to the
             * beginning of the result set.  The first row is row 1, the second
             * is row 2, and so on.
             * <p>If the given row number is negative, the cursor moves to
             * an absolute row position with respect to
             * the end of the result set.  For example, calling the method
             * <code>absolute(-1)</code> positions the
             * cursor on the last row; calling the method <code>absolute(-2)</code>
             * moves the cursor to the next-to-last row, and so on.
             * <p>If the row number specified is zero, the cursor is moved to
             * before the first row.
             * <p>An attempt to position the cursor beyond the first/last row in
             * the result set leaves the cursor before the first row or after
             * the last row.
             * <p><B>Note:</B> Calling <code>absolute(1)</code> is the same
             * as calling <code>first()</code>. Calling <code>absolute(-1)</code>
             * is the same as calling <code>last()</code>.
             */
            // @ts-ignore
             absolute(row: number): boolean;
            /**
             * Moves the cursor a relative number of rows, either positive or negative.
             * Attempting to move beyond the first/last row in the
             * result set positions the cursor before/after the
             * the first/last row. Calling <code>relative(0)</code> is valid, but does
             * not change the cursor position.
             * <p>Note: Calling the method <code>relative(1)</code>
             * is identical to calling the method <code>next()</code> and
             * calling the method <code>relative(-1)</code> is identical
             * to calling the method <code>previous()</code>.
             */
            // @ts-ignore
             relative(rows: number): boolean;
            /**
             * Moves the cursor to the previous row in this
             * <code>ResultSet</code> object.
             * <p>
             * When a call to the <code>previous</code> method returns <code>false</code>,
             * the cursor is positioned before the first row.  Any invocation of a
             * <code>ResultSet</code> method which requires a current row will result in a
             * <code>SQLException</code> being thrown.
             * <p>
             * If an input stream is open for the current row, a call to the method
             * <code>previous</code> will implicitly close it.  A <code>ResultSet</code>
             * object's warning change is cleared when a new row is read.
             * <p>
             */
            // @ts-ignore
             previous(): boolean;
            /**
             * Gives a hint as to the direction in which the rows in this
             * <code>ResultSet</code> object will be processed.
             * The initial value is determined by the
             * <code>Statement</code> object
             * that produced this <code>ResultSet</code> object.
             * The fetch direction may be changed at any time.
             */
            // @ts-ignore
             setFetchDirection(direction: number): void;
            /**
             * Retrieves the fetch direction for this
             * <code>ResultSet</code> object.
             */
            // @ts-ignore
             getFetchDirection(): number;
            /**
             * Gives the JDBC driver a hint as to the number of rows that should
             * be fetched from the database when more rows are needed for this
             * <code>ResultSet</code> object.
             * If the fetch size specified is zero, the JDBC driver
             * ignores the value and is free to make its own best guess as to what
             * the fetch size should be.  The default value is set by the
             * <code>Statement</code> object
             * that created the result set.  The fetch size may be changed at any time.
             */
            // @ts-ignore
             setFetchSize(rows: number): void;
            /**
             * Retrieves the fetch size for this
             * <code>ResultSet</code> object.
             */
            // @ts-ignore
             getFetchSize(): number;
            /**
             * Retrieves the type of this <code>ResultSet</code> object.
             * The type is determined by the <code>Statement</code> object
             * that created the result set.
             */
            // @ts-ignore
             getType(): number;
            /**
             * Retrieves the concurrency mode of this <code>ResultSet</code> object.
             * The concurrency used is determined by the
             * <code>Statement</code> object that created the result set.
             */
            // @ts-ignore
             getConcurrency(): number;
            /**
             * Retrieves whether the current row has been updated.  The value returned
             * depends on whether or not the result set can detect updates.
             * <p>
             * <strong>Note:</strong> Support for the <code>rowUpdated</code> method is optional with a result set
             * concurrency of <code>CONCUR_READ_ONLY</code>
             */
            // @ts-ignore
             rowUpdated(): boolean;
            /**
             * Retrieves whether the current row has had an insertion.
             * The value returned depends on whether or not this
             * <code>ResultSet</code> object can detect visible inserts.
             * <p>
             * <strong>Note:</strong> Support for the <code>rowInserted</code> method is optional with a result set
             * concurrency of <code>CONCUR_READ_ONLY</code>
             */
            // @ts-ignore
             rowInserted(): boolean;
            /**
             * Retrieves whether a row has been deleted.  A deleted row may leave
             * a visible "hole" in a result set.  This method can be used to
             * detect holes in a result set.  The value returned depends on whether
             * or not this <code>ResultSet</code> object can detect deletions.
             * <p>
             * <strong>Note:</strong> Support for the <code>rowDeleted</code> method is optional with a result set
             * concurrency of <code>CONCUR_READ_ONLY</code>
             */
            // @ts-ignore
             rowDeleted(): boolean;
            /**
             * Updates the designated column with a <code>null</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code>
             * or <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNull(columnIndex: number): void;
            /**
             * Updates the designated column with a <code>boolean</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBoolean(columnIndex: number, x: boolean): void;
            /**
             * Updates the designated column with a <code>byte</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateByte(columnIndex: number, x: number): void;
            /**
             * Updates the designated column with a <code>short</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateShort(columnIndex: number, x: number): void;
            /**
             * Updates the designated column with an <code>int</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateInt(columnIndex: number, x: number): void;
            /**
             * Updates the designated column with a <code>long</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateLong(columnIndex: number, x: number): void;
            /**
             * Updates the designated column with a <code>float</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateFloat(columnIndex: number, x: number): void;
            /**
             * Updates the designated column with a <code>double</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateDouble(columnIndex: number, x: number): void;
            /**
             * Updates the designated column with a <code>java.math.BigDecimal</code>
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBigDecimal(columnIndex: number, x: java.math.BigDecimal): void;
            /**
             * Updates the designated column with a <code>String</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateString(columnIndex: number, x: string): void;
            /**
             * Updates the designated column with a <code>byte</code> array value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBytes(columnIndex: number, x: number): void;
            /**
             * Updates the designated column with a <code>java.sql.Date</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateDate(columnIndex: number, x: java.sql.Date): void;
            /**
             * Updates the designated column with a <code>java.sql.Time</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateTime(columnIndex: number, x: java.sql.Time): void;
            /**
             * Updates the designated column with a <code>java.sql.Timestamp</code>
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateTimestamp(columnIndex: number, x: java.sql.Timestamp): void;
            /**
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateAsciiStream(columnIndex: number, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBinaryStream(columnIndex: number, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateCharacterStream(columnIndex: number, x: java.io.Reader, length: number): void;
            /**
             * Updates the designated column with an <code>Object</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <p>
             * If the second argument is an <code>InputStream</code> then the stream must contain
             * the number of bytes specified by scaleOrLength.  If the second argument is a
             * <code>Reader</code> then the reader must contain the number of characters specified
             * by scaleOrLength. If these conditions are not true the driver will generate a
             * <code>SQLException</code> when the statement is executed.
             */
            // @ts-ignore
             updateObject(columnIndex: number, x: java.lang.Object, scaleOrLength: number): void;
            /**
             * Updates the designated column with an <code>Object</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateObject(columnIndex: number, x: java.lang.Object): void;
            /**
             * Updates the designated column with a <code>null</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNull(columnLabel: string): void;
            /**
             * Updates the designated column with a <code>boolean</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBoolean(columnLabel: string, x: boolean): void;
            /**
             * Updates the designated column with a <code>byte</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateByte(columnLabel: string, x: number): void;
            /**
             * Updates the designated column with a <code>short</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateShort(columnLabel: string, x: number): void;
            /**
             * Updates the designated column with an <code>int</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateInt(columnLabel: string, x: number): void;
            /**
             * Updates the designated column with a <code>long</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateLong(columnLabel: string, x: number): void;
            /**
             * Updates the designated column with a <code>float </code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateFloat(columnLabel: string, x: number): void;
            /**
             * Updates the designated column with a <code>double</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateDouble(columnLabel: string, x: number): void;
            /**
             * Updates the designated column with a <code>java.sql.BigDecimal</code>
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBigDecimal(columnLabel: string, x: java.math.BigDecimal): void;
            /**
             * Updates the designated column with a <code>String</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateString(columnLabel: string, x: string): void;
            /**
             * Updates the designated column with a byte array value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code>
             * or <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBytes(columnLabel: string, x: number): void;
            /**
             * Updates the designated column with a <code>java.sql.Date</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateDate(columnLabel: string, x: java.sql.Date): void;
            /**
             * Updates the designated column with a <code>java.sql.Time</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateTime(columnLabel: string, x: java.sql.Time): void;
            /**
             * Updates the designated column with a <code>java.sql.Timestamp</code>
             * value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateTimestamp(columnLabel: string, x: java.sql.Timestamp): void;
            /**
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateAsciiStream(columnLabel: string, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBinaryStream(columnLabel: string, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateCharacterStream(columnLabel: string, reader: java.io.Reader, length: number): void;
            /**
             * Updates the designated column with an <code>Object</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <p>
             * If the second argument is an <code>InputStream</code> then the stream must contain
             * the number of bytes specified by scaleOrLength.  If the second argument is a
             * <code>Reader</code> then the reader must contain the number of characters specified
             * by scaleOrLength. If these conditions are not true the driver will generate a
             * <code>SQLException</code> when the statement is executed.
             */
            // @ts-ignore
             updateObject(columnLabel: string, x: java.lang.Object, scaleOrLength: number): void;
            /**
             * Updates the designated column with an <code>Object</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateObject(columnLabel: string, x: java.lang.Object): void;
            /**
             * Inserts the contents of the insert row into this
             * <code>ResultSet</code> object and into the database.
             * The cursor must be on the insert row when this method is called.
             */
            // @ts-ignore
             insertRow(): void;
            /**
             * Updates the underlying database with the new contents of the
             * current row of this <code>ResultSet</code> object.
             * This method cannot be called when the cursor is on the insert row.
             */
            // @ts-ignore
             updateRow(): void;
            /**
             * Deletes the current row from this <code>ResultSet</code> object
             * and from the underlying database.  This method cannot be called when
             * the cursor is on the insert row.
             */
            // @ts-ignore
             deleteRow(): void;
            /**
             * Refreshes the current row with its most recent value in
             * the database.  This method cannot be called when
             * the cursor is on the insert row.
             * <P>The <code>refreshRow</code> method provides a way for an
             * application to
             * explicitly tell the JDBC driver to refetch a row(s) from the
             * database.  An application may want to call <code>refreshRow</code> when
             * caching or prefetching is being done by the JDBC driver to
             * fetch the latest value of a row from the database.  The JDBC driver
             * may actually refresh multiple rows at once if the fetch size is
             * greater than one.
             * <P> All values are refetched subject to the transaction isolation
             * level and cursor sensitivity.  If <code>refreshRow</code> is called after
             * calling an updater method, but before calling
             * the method <code>updateRow</code>, then the
             * updates made to the row are lost.  Calling the method
             * <code>refreshRow</code> frequently will likely slow performance.
             */
            // @ts-ignore
             refreshRow(): void;
            /**
             * Cancels the updates made to the current row in this
             * <code>ResultSet</code> object.
             * This method may be called after calling an
             * updater method(s) and before calling
             * the method <code>updateRow</code> to roll back
             * the updates made to a row.  If no updates have been made or
             * <code>updateRow</code> has already been called, this method has no
             * effect.
             */
            // @ts-ignore
             cancelRowUpdates(): void;
            /**
             * Moves the cursor to the insert row.  The current cursor position is
             * remembered while the cursor is positioned on the insert row.
             * The insert row is a special row associated with an updatable
             * result set.  It is essentially a buffer where a new row may
             * be constructed by calling the updater methods prior to
             * inserting the row into the result set.
             * Only the updater, getter,
             * and <code>insertRow</code> methods may be
             * called when the cursor is on the insert row.  All of the columns in
             * a result set must be given a value each time this method is
             * called before calling <code>insertRow</code>.
             * An updater method must be called before a
             * getter method can be called on a column value.
             */
            // @ts-ignore
             moveToInsertRow(): void;
            /**
             * Moves the cursor to the remembered cursor position, usually the
             * current row.  This method has no effect if the cursor is not on
             * the insert row.
             */
            // @ts-ignore
             moveToCurrentRow(): void;
            /**
             * Retrieves the <code>Statement</code> object that produced this
             * <code>ResultSet</code> object.
             * If the result set was generated some other way, such as by a
             * <code>DatabaseMetaData</code> method, this method  may return
             * <code>null</code>.
             */
            // @ts-ignore
             getStatement(): java.sql.Statement;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as an <code>Object</code>
             * in the Java programming language.
             * If the value is an SQL <code>NULL</code>,
             * the driver returns a Java <code>null</code>.
             * This method uses the given <code>Map</code> object
             * for the custom mapping of the
             * SQL structured or distinct type that is being retrieved.
             */
            // @ts-ignore
             getObject(columnIndex: number, map: java.util.Map): java.lang.Object;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>Ref</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getRef(columnIndex: number): java.sql.Ref;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>Blob</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getBlob(columnIndex: number): java.sql.Blob;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>Clob</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getClob(columnIndex: number): java.sql.Clob;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as an <code>Array</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getArray(columnIndex: number): java.sql.Array;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as an <code>Object</code>
             * in the Java programming language.
             * If the value is an SQL <code>NULL</code>,
             * the driver returns a Java <code>null</code>.
             * This method uses the specified <code>Map</code> object for
             * custom mapping if appropriate.
             */
            // @ts-ignore
             getObject(columnLabel: string, map: java.util.Map): java.lang.Object;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>Ref</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getRef(columnLabel: string): java.sql.Ref;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>Blob</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getBlob(columnLabel: string): java.sql.Blob;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>Clob</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getClob(columnLabel: string): java.sql.Clob;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as an <code>Array</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getArray(columnLabel: string): java.sql.Array;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.sql.Date</code> object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the date if the underlying database does not store
             * timezone information.
             */
            // @ts-ignore
             getDate(columnIndex: number, cal: java.util.Calendar): java.sql.Date;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.sql.Date</code> object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the date if the underlying database does not store
             * timezone information.
             */
            // @ts-ignore
             getDate(columnLabel: string, cal: java.util.Calendar): java.sql.Date;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.sql.Time</code> object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the time if the underlying database does not store
             * timezone information.
             */
            // @ts-ignore
             getTime(columnIndex: number, cal: java.util.Calendar): java.sql.Time;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.sql.Time</code> object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the time if the underlying database does not store
             * timezone information.
             */
            // @ts-ignore
             getTime(columnLabel: string, cal: java.util.Calendar): java.sql.Time;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.sql.Timestamp</code> object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the timestamp if the underlying database does not store
             * timezone information.
             */
            // @ts-ignore
             getTimestamp(columnIndex: number, cal: java.util.Calendar): java.sql.Timestamp;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.sql.Timestamp</code> object
             * in the Java programming language.
             * This method uses the given calendar to construct an appropriate millisecond
             * value for the timestamp if the underlying database does not store
             * timezone information.
             */
            // @ts-ignore
             getTimestamp(columnLabel: string, cal: java.util.Calendar): java.sql.Timestamp;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.net.URL</code>
             * object in the Java programming language.
             */
            // @ts-ignore
             getURL(columnIndex: number): java.net.URL;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>java.net.URL</code>
             * object in the Java programming language.
             */
            // @ts-ignore
             getURL(columnLabel: string): java.net.URL;
            /**
             * Updates the designated column with a <code>java.sql.Ref</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateRef(columnIndex: number, x: java.sql.Ref): void;
            /**
             * Updates the designated column with a <code>java.sql.Ref</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateRef(columnLabel: string, x: java.sql.Ref): void;
            /**
             * Updates the designated column with a <code>java.sql.Blob</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBlob(columnIndex: number, x: java.sql.Blob): void;
            /**
             * Updates the designated column with a <code>java.sql.Blob</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBlob(columnLabel: string, x: java.sql.Blob): void;
            /**
             * Updates the designated column with a <code>java.sql.Clob</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateClob(columnIndex: number, x: java.sql.Clob): void;
            /**
             * Updates the designated column with a <code>java.sql.Clob</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateClob(columnLabel: string, x: java.sql.Clob): void;
            /**
             * Updates the designated column with a <code>java.sql.Array</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateArray(columnIndex: number, x: java.sql.Array): void;
            /**
             * Updates the designated column with a <code>java.sql.Array</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateArray(columnLabel: string, x: java.sql.Array): void;
            /**
             * Retrieves the value of the designated column in the current row of this
             * <code>ResultSet</code> object as a <code>java.sql.RowId</code> object in the Java
             * programming language.
             */
            // @ts-ignore
             getRowId(columnIndex: number): java.sql.RowId;
            /**
             * Retrieves the value of the designated column in the current row of this
             * <code>ResultSet</code> object as a <code>java.sql.RowId</code> object in the Java
             * programming language.
             */
            // @ts-ignore
             getRowId(columnLabel: string): java.sql.RowId;
            /**
             * Updates the designated column with a <code>RowId</code> value. The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the <code>updateRow</code> or <code>insertRow</code> methods are called
             * to update the database.
             */
            // @ts-ignore
             updateRowId(columnIndex: number, x: java.sql.RowId): void;
            /**
             * Updates the designated column with a <code>RowId</code> value. The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the <code>updateRow</code> or <code>insertRow</code> methods are called
             * to update the database.
             */
            // @ts-ignore
             updateRowId(columnLabel: string, x: java.sql.RowId): void;
            /**
             * Retrieves the holdability of this <code>ResultSet</code> object
             */
            // @ts-ignore
             getHoldability(): number;
            /**
             * Retrieves whether this <code>ResultSet</code> object has been closed. A <code>ResultSet</code> is closed if the
             * method close has been called on it, or if it is automatically closed.
             */
            // @ts-ignore
             isClosed(): boolean;
            /**
             * Updates the designated column with a <code>String</code> value.
             * It is intended for use when updating <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNString(columnIndex: number, nString: string): void;
            /**
             * Updates the designated column with a <code>String</code> value.
             * It is intended for use when updating <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNString(columnLabel: string, nString: string): void;
            /**
             * Updates the designated column with a <code>java.sql.NClob</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNClob(columnIndex: number, nClob: java.sql.NClob): void;
            /**
             * Updates the designated column with a <code>java.sql.NClob</code> value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNClob(columnLabel: string, nClob: java.sql.NClob): void;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>NClob</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getNClob(columnIndex: number): java.sql.NClob;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a <code>NClob</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             getNClob(columnLabel: string): java.sql.NClob;
            /**
             * Retrieves the value of the designated column in  the current row of
             * this <code>ResultSet</code> as a
             * <code>java.sql.SQLXML</code> object in the Java programming language.
             */
            // @ts-ignore
             getSQLXML(columnIndex: number): java.sql.SQLXML;
            /**
             * Retrieves the value of the designated column in  the current row of
             * this <code>ResultSet</code> as a
             * <code>java.sql.SQLXML</code> object in the Java programming language.
             */
            // @ts-ignore
             getSQLXML(columnLabel: string): java.sql.SQLXML;
            /**
             * Updates the designated column with a <code>java.sql.SQLXML</code> value.
             * The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the <code>updateRow</code> or <code>insertRow</code> methods are called
             * to update the database.
             * <p>
             */
            // @ts-ignore
             updateSQLXML(columnIndex: number, xmlObject: java.sql.SQLXML): void;
            /**
             * Updates the designated column with a <code>java.sql.SQLXML</code> value.
             * The updater
             * methods are used to update column values in the current row or the insert
             * row. The updater methods do not update the underlying database; instead
             * the <code>updateRow</code> or <code>insertRow</code> methods are called
             * to update the database.
             * <p>
             */
            // @ts-ignore
             updateSQLXML(columnLabel: string, xmlObject: java.sql.SQLXML): void;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>String</code> in the Java programming language.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             */
            // @ts-ignore
             getNString(columnIndex: number): string;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as
             * a <code>String</code> in the Java programming language.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             */
            // @ts-ignore
             getNString(columnLabel: string): string;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a
             * <code>java.io.Reader</code> object.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             */
            // @ts-ignore
             getNCharacterStream(columnIndex: number): java.io.Reader;
            /**
             * Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object as a
             * <code>java.io.Reader</code> object.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             */
            // @ts-ignore
             getNCharacterStream(columnLabel: string): java.io.Reader;
            /**
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.   The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNCharacterStream(columnIndex: number, x: java.io.Reader, length: number): void;
            /**
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.  The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNCharacterStream(columnLabel: string, reader: java.io.Reader, length: number): void;
            /**
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateAsciiStream(columnIndex: number, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBinaryStream(columnIndex: number, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateCharacterStream(columnIndex: number, x: java.io.Reader, length: number): void;
            /**
             * Updates the designated column with an ascii stream value, which will have
             * the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateAsciiStream(columnLabel: string, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a binary stream value, which will have
             * the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBinaryStream(columnLabel: string, x: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column with a character stream value, which will have
             * the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateCharacterStream(columnLabel: string, reader: java.io.Reader, length: number): void;
            /**
             * Updates the designated column using the given input stream, which
             * will have the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBlob(columnIndex: number, inputStream: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column using the given input stream, which
             * will have the specified number of bytes.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateBlob(columnLabel: string, inputStream: java.io.InputStream, length: number): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateClob(columnIndex: number, reader: java.io.Reader, length: number): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateClob(columnLabel: string, reader: java.io.Reader, length: number): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNClob(columnIndex: number, reader: java.io.Reader, length: number): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             */
            // @ts-ignore
             updateNClob(columnLabel: string, reader: java.io.Reader, length: number): void;
            /**
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.  The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateNCharacterStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateNCharacterStream(columnIndex: number, x: java.io.Reader): void;
            /**
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.  The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * It is intended for use when
             * updating  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateNCharacterStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateNCharacterStream(columnLabel: string, reader: java.io.Reader): void;
            /**
             * Updates the designated column with an ascii stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateAsciiStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateAsciiStream(columnIndex: number, x: java.io.InputStream): void;
            /**
             * Updates the designated column with a binary stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateBinaryStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateBinaryStream(columnIndex: number, x: java.io.InputStream): void;
            /**
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateCharacterStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateCharacterStream(columnIndex: number, x: java.io.Reader): void;
            /**
             * Updates the designated column with an ascii stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateAsciiStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateAsciiStream(columnLabel: string, x: java.io.InputStream): void;
            /**
             * Updates the designated column with a binary stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateBinaryStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateBinaryStream(columnLabel: string, x: java.io.InputStream): void;
            /**
             * Updates the designated column with a character stream value.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateCharacterStream</code> which takes a length parameter.
             */
            // @ts-ignore
             updateCharacterStream(columnLabel: string, reader: java.io.Reader): void;
            /**
             * Updates the designated column using the given input stream. The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateBlob</code> which takes a length parameter.
             */
            // @ts-ignore
             updateBlob(columnIndex: number, inputStream: java.io.InputStream): void;
            /**
             * Updates the designated column using the given input stream. The data will be read from the stream
             * as needed until end-of-stream is reached.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateBlob</code> which takes a length parameter.
             */
            // @ts-ignore
             updateBlob(columnLabel: string, inputStream: java.io.InputStream): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * object.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateClob</code> which takes a length parameter.
             */
            // @ts-ignore
             updateClob(columnIndex: number, reader: java.io.Reader): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * object.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateClob</code> which takes a length parameter.
             */
            // @ts-ignore
             updateClob(columnLabel: string, reader: java.io.Reader): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * The data will be read from the stream
             * as needed until end-of-stream is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateNClob</code> which takes a length parameter.
             */
            // @ts-ignore
             updateNClob(columnIndex: number, reader: java.io.Reader): void;
            /**
             * Updates the designated column using the given <code>Reader</code>
             * object.
             * The data will be read from the stream
             * as needed until end-of-stream is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <p>
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the <code>updateRow</code> or
             * <code>insertRow</code> methods are called to update the database.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>updateNClob</code> which takes a length parameter.
             */
            // @ts-ignore
             updateNClob(columnLabel: string, reader: java.io.Reader): void;
            /**
             * <p>Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object and will convert from the
             * SQL type of the column to the requested Java data type, if the
             * conversion is supported. If the conversion is not
             * supported  or null is specified for the type, a
             * <code>SQLException</code> is thrown.
             * <p>
             * At a minimum, an implementation must support the conversions defined in
             * Appendix B, Table B-3 and conversion of appropriate user defined SQL
             * types to a Java type which implements {@code SQLData}, or {@code Struct}.
             * Additional conversions may be supported and are vendor defined.
             */
            // @ts-ignore
             getObject(columnIndex: number, type: java.lang.Class): java.lang.Object;
            /**
             * <p>Retrieves the value of the designated column in the current row
             * of this <code>ResultSet</code> object and will convert from the
             * SQL type of the column to the requested Java data type, if the
             * conversion is supported. If the conversion is not
             * supported  or null is specified for the type, a
             * <code>SQLException</code> is thrown.
             * <p>
             * At a minimum, an implementation must support the conversions defined in
             * Appendix B, Table B-3 and conversion of appropriate user defined SQL
             * types to a Java type which implements {@code SQLData}, or {@code Struct}.
             * Additional conversions may be supported and are vendor defined.
             */
            // @ts-ignore
             getObject(columnLabel: string, type: java.lang.Class): java.lang.Object;
            /**
             * Updates the designated column with an {@code Object} value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the {@code updateRow} or
             * {@code insertRow} methods are called to update the database.
             * <p>
             * If the second argument is an {@code InputStream} then the stream must contain
             * the number of bytes specified by scaleOrLength.  If the second argument is a
             * {@code Reader} then the reader must contain the number of characters specified
             * by scaleOrLength. If these conditions are not true the driver will generate a
             * {@code SQLException} when the statement is executed.
             * <p>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             updateObject(columnIndex: number, x: java.lang.Object, targetSqlType: java.sql.SQLType, scaleOrLength: number): void;
            /**
             * Updates the designated column with an {@code Object} value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the {@code updateRow} or
             * {@code insertRow} methods are called to update the database.
             * <p>
             * If the second argument is an {@code InputStream} then the stream must
             * contain number of bytes specified by scaleOrLength.  If the second
             * argument is a {@code Reader} then the reader must contain the number
             * of characters specified by scaleOrLength. If these conditions are not
             * true the driver will generate a
             * {@code SQLException} when the statement is executed.
             * <p>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             updateObject(columnLabel: string, x: java.lang.Object, targetSqlType: java.sql.SQLType, scaleOrLength: number): void;
            /**
             * Updates the designated column with an {@code Object} value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the {@code updateRow} or
             * {@code insertRow} methods are called to update the database.
             * <p>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             updateObject(columnIndex: number, x: java.lang.Object, targetSqlType: java.sql.SQLType): void;
            /**
             * Updates the designated column with an {@code Object} value.
             * The updater methods are used to update column values in the
             * current row or the insert row.  The updater methods do not
             * update the underlying database; instead the {@code updateRow} or
             * {@code insertRow} methods are called to update the database.
             * <p>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             updateObject(columnLabel: string, x: java.lang.Object, targetSqlType: java.sql.SQLType): void;
        }
    }
}
