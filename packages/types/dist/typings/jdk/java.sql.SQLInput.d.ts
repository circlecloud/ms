// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface SQLInput {
            /**
             * Reads the next attribute in the stream and returns it as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readString(): string;
            /**
             * Reads the next attribute in the stream and returns it as a <code>boolean</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readBoolean(): boolean;
            /**
             * Reads the next attribute in the stream and returns it as a <code>byte</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readByte(): number;
            /**
             * Reads the next attribute in the stream and returns it as a <code>short</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readShort(): number;
            /**
             * Reads the next attribute in the stream and returns it as an <code>int</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readInt(): number;
            /**
             * Reads the next attribute in the stream and returns it as a <code>long</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readLong(): number;
            /**
             * Reads the next attribute in the stream and returns it as a <code>float</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readFloat(): number;
            /**
             * Reads the next attribute in the stream and returns it as a <code>double</code>
             * in the Java programming language.
             */
            // @ts-ignore
             readDouble(): number;
            /**
             * Reads the next attribute in the stream and returns it as a <code>java.math.BigDecimal</code>
             * object in the Java programming language.
             */
            // @ts-ignore
             readBigDecimal(): java.math.BigDecimal;
            /**
             * Reads the next attribute in the stream and returns it as an array of bytes
             * in the Java programming language.
             */
            // @ts-ignore
             readBytes(): number[];
            /**
             * Reads the next attribute in the stream and returns it as a <code>java.sql.Date</code> object.
             */
            // @ts-ignore
             readDate(): java.sql.Date;
            /**
             * Reads the next attribute in the stream and returns it as a <code>java.sql.Time</code> object.
             */
            // @ts-ignore
             readTime(): java.sql.Time;
            /**
             * Reads the next attribute in the stream and returns it as a <code>java.sql.Timestamp</code> object.
             */
            // @ts-ignore
             readTimestamp(): java.sql.Timestamp;
            /**
             * Reads the next attribute in the stream and returns it as a stream of Unicode characters.
             */
            // @ts-ignore
             readCharacterStream(): java.io.Reader;
            /**
             * Reads the next attribute in the stream and returns it as a stream of ASCII characters.
             */
            // @ts-ignore
             readAsciiStream(): java.io.InputStream;
            /**
             * Reads the next attribute in the stream and returns it as a stream of uninterpreted
             * bytes.
             */
            // @ts-ignore
             readBinaryStream(): java.io.InputStream;
            /**
             * Reads the datum at the head of the stream and returns it as an
             * <code>Object</code> in the Java programming language.  The
             * actual type of the object returned is determined by the default type
             * mapping, and any customizations present in this stream's type map.
             * <P>A type map is registered with the stream by the JDBC driver before the
             * stream is passed to the application.
             * <P>When the datum at the head of the stream is an SQL <code>NULL</code>,
             * the method returns <code>null</code>.  If the datum is an SQL structured or distinct
             * type, it determines the SQL type of the datum at the head of the stream.
             * If the stream's type map has an entry for that SQL type, the driver
             * constructs an object of the appropriate class and calls the method
             * <code>SQLData.readSQL</code> on that object, which reads additional data from the
             * stream, using the protocol described for that method.
             */
            // @ts-ignore
             readObject(): java.lang.Object;
            /**
             * Reads an SQL <code>REF</code> value from the stream and returns it as a
             * <code>Ref</code> object in the Java programming language.
             */
            // @ts-ignore
             readRef(): java.sql.Ref;
            /**
             * Reads an SQL <code>BLOB</code> value from the stream and returns it as a
             * <code>Blob</code> object in the Java programming language.
             */
            // @ts-ignore
             readBlob(): java.sql.Blob;
            /**
             * Reads an SQL <code>CLOB</code> value from the stream and returns it as a
             * <code>Clob</code> object in the Java programming language.
             */
            // @ts-ignore
             readClob(): java.sql.Clob;
            /**
             * Reads an SQL <code>ARRAY</code> value from the stream and returns it as an
             * <code>Array</code> object in the Java programming language.
             */
            // @ts-ignore
             readArray(): java.sql.Array;
            /**
             * Retrieves whether the last value read was SQL <code>NULL</code>.
             */
            // @ts-ignore
             wasNull(): boolean;
            /**
             * Reads an SQL <code>DATALINK</code> value from the stream and returns it as a
             * <code>java.net.URL</code> object in the Java programming language.
             */
            // @ts-ignore
             readURL(): java.net.URL;
            /**
             * Reads an SQL <code>NCLOB</code> value from the stream and returns it as a
             * <code>NClob</code> object in the Java programming language.
             */
            // @ts-ignore
             readNClob(): java.sql.NClob;
            /**
             * Reads the next attribute in the stream and returns it as a <code>String</code>
             * in the Java programming language. It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> columns.
             */
            // @ts-ignore
             readNString(): string;
            /**
             * Reads an SQL <code>XML</code> value from the stream and returns it as a
             * <code>SQLXML</code> object in the Java programming language.
             */
            // @ts-ignore
             readSQLXML(): java.sql.SQLXML;
            /**
             * Reads an SQL <code>ROWID</code> value from the stream and returns it as a
             * <code>RowId</code> object in the Java programming language.
             */
            // @ts-ignore
             readRowId(): java.sql.RowId;
            /**
             * Reads the next attribute in the stream and returns it as an
             * {@code Object} in the Java programming language. The
             * actual type of the object returned is determined by the specified
             * Java data type, and any customizations present in this
             * stream's type map.
             * <P>A type map is registered with the stream by the JDBC driver before the
             * stream is passed to the application.
             * <P>When the attribute at the head of the stream is an SQL {@code NULL}
             * the method returns {@code null}. If the attribute is an SQL
             * structured or distinct
             * type, it determines the SQL type of the attribute at the head of the stream.
             * If the stream's type map has an entry for that SQL type, the driver
             * constructs an object of the appropriate class and calls the method
             * {@code SQLData.readSQL} on that object, which reads additional data from the
             * stream, using the protocol described for that method.
             * <p>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             readObject(type: java.lang.Class): java.lang.Object;
        }
    }
}
