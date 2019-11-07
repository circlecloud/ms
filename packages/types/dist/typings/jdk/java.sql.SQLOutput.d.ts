// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface SQLOutput {
            /**
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeString(x: string): void;
            /**
             * Writes the next attribute to the stream as a Java boolean.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeBoolean(x: boolean): void;
            /**
             * Writes the next attribute to the stream as a Java byte.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeByte(x: number): void;
            /**
             * Writes the next attribute to the stream as a Java short.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeShort(x: number): void;
            /**
             * Writes the next attribute to the stream as a Java int.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeInt(x: number): void;
            /**
             * Writes the next attribute to the stream as a Java long.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeLong(x: number): void;
            /**
             * Writes the next attribute to the stream as a Java float.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeFloat(x: number): void;
            /**
             * Writes the next attribute to the stream as a Java double.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeDouble(x: number): void;
            /**
             * Writes the next attribute to the stream as a java.math.BigDecimal object.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeBigDecimal(x: java.math.BigDecimal): void;
            /**
             * Writes the next attribute to the stream as an array of bytes.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             */
            // @ts-ignore
             writeBytes(x: number): void;
            /**
             * Writes the next attribute to the stream as a java.sql.Date object.
             * Writes the next attribute to the stream as a <code>java.sql.Date</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             writeDate(x: java.sql.Date): void;
            /**
             * Writes the next attribute to the stream as a java.sql.Time object.
             * Writes the next attribute to the stream as a <code>java.sql.Date</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             writeTime(x: java.sql.Time): void;
            /**
             * Writes the next attribute to the stream as a java.sql.Timestamp object.
             * Writes the next attribute to the stream as a <code>java.sql.Date</code> object
             * in the Java programming language.
             */
            // @ts-ignore
             writeTimestamp(x: java.sql.Timestamp): void;
            /**
             * Writes the next attribute to the stream as a stream of Unicode characters.
             */
            // @ts-ignore
             writeCharacterStream(x: java.io.Reader): void;
            /**
             * Writes the next attribute to the stream as a stream of ASCII characters.
             */
            // @ts-ignore
             writeAsciiStream(x: java.io.InputStream): void;
            /**
             * Writes the next attribute to the stream as a stream of uninterpreted
             * bytes.
             */
            // @ts-ignore
             writeBinaryStream(x: java.io.InputStream): void;
            /**
             * Writes to the stream the data contained in the given
             * <code>SQLData</code> object.
             * When the <code>SQLData</code> object is <code>null</code>, this
             * method writes an SQL <code>NULL</code> to the stream.
             * Otherwise, it calls the <code>SQLData.writeSQL</code>
             * method of the given object, which
             * writes the object's attributes to the stream.
             * The implementation of the method <code>SQLData.writeSQL</code>
             * calls the appropriate <code>SQLOutput</code> writer method(s)
             * for writing each of the object's attributes in order.
             * The attributes must be read from an <code>SQLInput</code>
             * input stream and written to an <code>SQLOutput</code>
             * output stream in the same order in which they were
             * listed in the SQL definition of the user-defined type.
             */
            // @ts-ignore
             writeObject(x: java.sql.SQLData): void;
            /**
             * Writes an SQL <code>REF</code> value to the stream.
             */
            // @ts-ignore
             writeRef(x: java.sql.Ref): void;
            /**
             * Writes an SQL <code>BLOB</code> value to the stream.
             */
            // @ts-ignore
             writeBlob(x: java.sql.Blob): void;
            /**
             * Writes an SQL <code>CLOB</code> value to the stream.
             */
            // @ts-ignore
             writeClob(x: java.sql.Clob): void;
            /**
             * Writes an SQL structured type value to the stream.
             */
            // @ts-ignore
             writeStruct(x: java.sql.Struct): void;
            /**
             * Writes an SQL <code>ARRAY</code> value to the stream.
             */
            // @ts-ignore
             writeArray(x: java.sql.Array): void;
            /**
             * Writes a SQL <code>DATALINK</code> value to the stream.
             */
            // @ts-ignore
             writeURL(x: java.net.URL): void;
            /**
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language. The driver converts this to a
             * SQL <code>NCHAR</code> or
             * <code>NVARCHAR</code> or <code>LONGNVARCHAR</code> value
             * (depending on the argument's
             * size relative to the driver's limits on <code>NVARCHAR</code> values)
             * when it sends it to the stream.
             */
            // @ts-ignore
             writeNString(x: string): void;
            /**
             * Writes an SQL <code>NCLOB</code> value to the stream.
             */
            // @ts-ignore
             writeNClob(x: java.sql.NClob): void;
            /**
             * Writes an SQL <code>ROWID</code> value to the stream.
             */
            // @ts-ignore
             writeRowId(x: java.sql.RowId): void;
            /**
             * Writes an SQL <code>XML</code> value to the stream.
             */
            // @ts-ignore
             writeSQLXML(x: java.sql.SQLXML): void;
            /**
             * Writes to the stream the data contained in the given object. The
             * object will be converted to the specified targetSqlType
             * before being sent to the stream.
             * <p>
             * When the {@code object} is {@code null}, this
             * method writes an SQL {@code NULL} to the stream.
             * <p>
             * If the object has a custom mapping (is of a class implementing the
             * interface {@code SQLData}),
             * the JDBC driver should call the method {@code SQLData.writeSQL} to
             * write it to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * {@code Ref}, {@code Blob}, {@code Clob},  {@code NClob},
             * {@code Struct}, {@code java.net.URL},
             * or {@code Array}, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             writeObject(x: java.lang.Object, targetSqlType: java.sql.SQLType): void;
        }
    }
}
