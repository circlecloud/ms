// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface CallableStatement {
            /**
             * Registers the OUT parameter in ordinal position
             * <code>parameterIndex</code> to the JDBC type
             * <code>sqlType</code>.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, <code>sqlType</code>
             * should be <code>java.sql.Types.OTHER</code>.  The method
             * {@link #getObject} retrieves the value.
             */
            // @ts-ignore
             registerOutParameter(parameterIndex: number, sqlType: number): void;
            /**
             * Registers the parameter in ordinal position
             * <code>parameterIndex</code> to be of JDBC type
             * <code>sqlType</code>. All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * This version of <code>registerOutParameter</code> should be
             * used when the parameter is of JDBC type <code>NUMERIC</code>
             * or <code>DECIMAL</code>.
             */
            // @ts-ignore
             registerOutParameter(parameterIndex: number, sqlType: number, scale: number): void;
            /**
             * Retrieves whether the last OUT parameter read had the value of
             * SQL <code>NULL</code>.  Note that this method should be called only after
             * calling a getter method; otherwise, there is no value to use in
             * determining whether it is <code>null</code> or not.
             */
            // @ts-ignore
             wasNull(): boolean;
            /**
             * Retrieves the value of the designated JDBC <code>CHAR</code>,
             * <code>VARCHAR</code>, or <code>LONGVARCHAR</code> parameter as a
             * <code>String</code> in the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>CHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>CHAR</code> value had in the
             * database, including any padding added by the database.
             */
            // @ts-ignore
             getString(parameterIndex: number): string;
            /**
             * Retrieves the value of the designated JDBC <code>BIT</code>
             * or <code>BOOLEAN</code> parameter as a
             * <code>boolean</code> in the Java programming language.
             */
            // @ts-ignore
             getBoolean(parameterIndex: number): boolean;
            /**
             * Retrieves the value of the designated JDBC <code>TINYINT</code> parameter
             * as a <code>byte</code> in the Java programming language.
             */
            // @ts-ignore
             getByte(parameterIndex: number): number;
            /**
             * Retrieves the value of the designated JDBC <code>SMALLINT</code> parameter
             * as a <code>short</code> in the Java programming language.
             */
            // @ts-ignore
             getShort(parameterIndex: number): number;
            /**
             * Retrieves the value of the designated JDBC <code>INTEGER</code> parameter
             * as an <code>int</code> in the Java programming language.
             */
            // @ts-ignore
             getInt(parameterIndex: number): number;
            /**
             * Retrieves the value of the designated JDBC <code>BIGINT</code> parameter
             * as a <code>long</code> in the Java programming language.
             */
            // @ts-ignore
             getLong(parameterIndex: number): number;
            /**
             * Retrieves the value of the designated JDBC <code>FLOAT</code> parameter
             * as a <code>float</code> in the Java programming language.
             */
            // @ts-ignore
             getFloat(parameterIndex: number): number;
            /**
             * Retrieves the value of the designated JDBC <code>DOUBLE</code> parameter as a <code>double</code>
             * in the Java programming language.
             */
            // @ts-ignore
             getDouble(parameterIndex: number): number;
            /**
             * Retrieves the value of the designated JDBC <code>NUMERIC</code> parameter as a
             * <code>java.math.BigDecimal</code> object with <i>scale</i> digits to
             * the right of the decimal point.
             */
            // @ts-ignore
             getBigDecimal(parameterIndex: number, scale: number): java.math.BigDecimal;
            /**
             * Retrieves the value of the designated JDBC <code>BINARY</code> or
             * <code>VARBINARY</code> parameter as an array of <code>byte</code>
             * values in the Java programming language.
             */
            // @ts-ignore
             getBytes(parameterIndex: number): number[];
            /**
             * Retrieves the value of the designated JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object.
             */
            // @ts-ignore
             getDate(parameterIndex: number): java.sql.Date;
            /**
             * Retrieves the value of the designated JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object.
             */
            // @ts-ignore
             getTime(parameterIndex: number): java.sql.Time;
            /**
             * Retrieves the value of the designated JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object.
             */
            // @ts-ignore
             getTimestamp(parameterIndex: number): java.sql.Timestamp;
            /**
             * Retrieves the value of the designated parameter as an <code>Object</code>
             * in the Java programming language. If the value is an SQL <code>NULL</code>,
             * the driver returns a Java <code>null</code>.
             * <p>
             * This method returns a Java object whose type corresponds to the JDBC
             * type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target JDBC
             * type as <code>java.sql.Types.OTHER</code>, this method can be used
             * to read database-specific abstract data types.
             */
            // @ts-ignore
             getObject(parameterIndex: number): java.lang.Object;
            /**
             * Retrieves the value of the designated JDBC <code>NUMERIC</code> parameter as a
             * <code>java.math.BigDecimal</code> object with as many digits to the
             * right of the decimal point as the value contains.
             */
            // @ts-ignore
             getBigDecimal(parameterIndex: number): java.math.BigDecimal;
            /**
             * Returns an object representing the value of OUT parameter
             * <code>parameterIndex</code> and uses <code>map</code> for the custom
             * mapping of the parameter value.
             * <p>
             * This method returns a Java object whose type corresponds to the
             * JDBC type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target
             * JDBC type as <code>java.sql.Types.OTHER</code>, this method can
             * be used to read database-specific abstract data types.
             */
            // @ts-ignore
             getObject(parameterIndex: number, map: java.util.Map): java.lang.Object;
            /**
             * Retrieves the value of the designated JDBC <code>REF(&lt;structured-type&gt;)</code>
             * parameter as a {@link java.sql.Ref} object in the Java programming language.
             */
            // @ts-ignore
             getRef(parameterIndex: number): java.sql.Ref;
            /**
             * Retrieves the value of the designated JDBC <code>BLOB</code> parameter as a
             * {@link java.sql.Blob} object in the Java programming language.
             */
            // @ts-ignore
             getBlob(parameterIndex: number): java.sql.Blob;
            /**
             * Retrieves the value of the designated JDBC <code>CLOB</code> parameter as a
             * <code>java.sql.Clob</code> object in the Java programming language.
             */
            // @ts-ignore
             getClob(parameterIndex: number): java.sql.Clob;
            /**
             * Retrieves the value of the designated JDBC <code>ARRAY</code> parameter as an
             * {@link java.sql.Array} object in the Java programming language.
             */
            // @ts-ignore
             getArray(parameterIndex: number): java.sql.Array;
            /**
             * Retrieves the value of the designated JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object, using
             * the given <code>Calendar</code> object
             * to construct the date.
             * With a <code>Calendar</code> object, the driver
             * can calculate the date taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             */
            // @ts-ignore
             getDate(parameterIndex: number, cal: java.util.Calendar): java.sql.Date;
            /**
             * Retrieves the value of the designated JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object, using
             * the given <code>Calendar</code> object
             * to construct the time.
             * With a <code>Calendar</code> object, the driver
             * can calculate the time taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             */
            // @ts-ignore
             getTime(parameterIndex: number, cal: java.util.Calendar): java.sql.Time;
            /**
             * Retrieves the value of the designated JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object, using
             * the given <code>Calendar</code> object to construct
             * the <code>Timestamp</code> object.
             * With a <code>Calendar</code> object, the driver
             * can calculate the timestamp taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             */
            // @ts-ignore
             getTimestamp(parameterIndex: number, cal: java.util.Calendar): java.sql.Timestamp;
            /**
             * Registers the designated output parameter.
             * This version of
             * the method <code>registerOutParameter</code>
             * should be used for a user-defined or <code>REF</code> output parameter.  Examples
             * of user-defined types include: <code>STRUCT</code>, <code>DISTINCT</code>,
             * <code>JAVA_OBJECT</code>, and named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>  For a user-defined parameter, the fully-qualified SQL
             * type name of the parameter should also be given, while a <code>REF</code>
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-defined and <code>REF</code> parameters.
             * Although it is intended for user-defined and <code>REF</code> parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-defined or <code>REF</code> type, the
             * <i>typeName</i> parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the getter method whose Java type corresponds to the
             * parameter's registered SQL type.
             */
            // @ts-ignore
             registerOutParameter(parameterIndex: number, sqlType: number, typeName: string): void;
            /**
             * Registers the OUT parameter named
             * <code>parameterName</code> to the JDBC type
             * <code>sqlType</code>.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, <code>sqlType</code>
             * should be <code>java.sql.Types.OTHER</code>.  The method
             * {@link #getObject} retrieves the value.
             */
            // @ts-ignore
             registerOutParameter(parameterName: string, sqlType: number): void;
            /**
             * Registers the parameter named
             * <code>parameterName</code> to be of JDBC type
             * <code>sqlType</code>.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by <code>sqlType</code> for an OUT
             * parameter determines the Java type that must be used
             * in the <code>get</code> method to read the value of that parameter.
             * <p>
             * This version of <code>registerOutParameter</code> should be
             * used when the parameter is of JDBC type <code>NUMERIC</code>
             * or <code>DECIMAL</code>.
             */
            // @ts-ignore
             registerOutParameter(parameterName: string, sqlType: number, scale: number): void;
            /**
             * Registers the designated output parameter.  This version of
             * the method <code>registerOutParameter</code>
             * should be used for a user-named or REF output parameter.  Examples
             * of user-named types include: STRUCT, DISTINCT, JAVA_OBJECT, and
             * named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * For a user-named parameter the fully-qualified SQL
             * type name of the parameter should also be given, while a REF
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-named and REF parameters.
             * Although it is intended for user-named and REF parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-named or REF type, the
             * typeName parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the <code>getXXX</code> method whose Java type XXX corresponds to the
             * parameter's registered SQL type.
             */
            // @ts-ignore
             registerOutParameter(parameterName: string, sqlType: number, typeName: string): void;
            /**
             * Retrieves the value of the designated JDBC <code>DATALINK</code> parameter as a
             * <code>java.net.URL</code> object.
             */
            // @ts-ignore
             getURL(parameterIndex: number): java.net.URL;
            /**
             * Sets the designated parameter to the given <code>java.net.URL</code> object.
             * The driver converts this to an SQL <code>DATALINK</code> value when
             * it sends it to the database.
             */
            // @ts-ignore
             setURL(parameterName: string, val: java.net.URL): void;
            /**
             * Sets the designated parameter to SQL <code>NULL</code>.
             * <P><B>Note:</B> You must specify the parameter's SQL type.
             */
            // @ts-ignore
             setNull(parameterName: string, sqlType: number): void;
            /**
             * Sets the designated parameter to the given Java <code>boolean</code> value.
             * The driver converts this
             * to an SQL <code>BIT</code> or <code>BOOLEAN</code> value when it sends it to the database.
             */
            // @ts-ignore
             setBoolean(parameterName: string, x: boolean): void;
            /**
             * Sets the designated parameter to the given Java <code>byte</code> value.
             * The driver converts this
             * to an SQL <code>TINYINT</code> value when it sends it to the database.
             */
            // @ts-ignore
             setByte(parameterName: string, x: number): void;
            /**
             * Sets the designated parameter to the given Java <code>short</code> value.
             * The driver converts this
             * to an SQL <code>SMALLINT</code> value when it sends it to the database.
             */
            // @ts-ignore
             setShort(parameterName: string, x: number): void;
            /**
             * Sets the designated parameter to the given Java <code>int</code> value.
             * The driver converts this
             * to an SQL <code>INTEGER</code> value when it sends it to the database.
             */
            // @ts-ignore
             setInt(parameterName: string, x: number): void;
            /**
             * Sets the designated parameter to the given Java <code>long</code> value.
             * The driver converts this
             * to an SQL <code>BIGINT</code> value when it sends it to the database.
             */
            // @ts-ignore
             setLong(parameterName: string, x: number): void;
            /**
             * Sets the designated parameter to the given Java <code>float</code> value.
             * The driver converts this
             * to an SQL <code>FLOAT</code> value when it sends it to the database.
             */
            // @ts-ignore
             setFloat(parameterName: string, x: number): void;
            /**
             * Sets the designated parameter to the given Java <code>double</code> value.
             * The driver converts this
             * to an SQL <code>DOUBLE</code> value when it sends it to the database.
             */
            // @ts-ignore
             setDouble(parameterName: string, x: number): void;
            /**
             * Sets the designated parameter to the given
             * <code>java.math.BigDecimal</code> value.
             * The driver converts this to an SQL <code>NUMERIC</code> value when
             * it sends it to the database.
             */
            // @ts-ignore
             setBigDecimal(parameterName: string, x: java.math.BigDecimal): void;
            /**
             * Sets the designated parameter to the given Java <code>String</code> value.
             * The driver converts this
             * to an SQL <code>VARCHAR</code> or <code>LONGVARCHAR</code> value
             * (depending on the argument's
             * size relative to the driver's limits on <code>VARCHAR</code> values)
             * when it sends it to the database.
             */
            // @ts-ignore
             setString(parameterName: string, x: string): void;
            /**
             * Sets the designated parameter to the given Java array of bytes.
             * The driver converts this to an SQL <code>VARBINARY</code> or
             * <code>LONGVARBINARY</code> (depending on the argument's size relative
             * to the driver's limits on <code>VARBINARY</code> values) when it sends
             * it to the database.
             */
            // @ts-ignore
             setBytes(parameterName: string, x: number): void;
            /**
             * Sets the designated parameter to the given <code>java.sql.Date</code> value
             * using the default time zone of the virtual machine that is running
             * the application.
             * The driver converts this
             * to an SQL <code>DATE</code> value when it sends it to the database.
             */
            // @ts-ignore
             setDate(parameterName: string, x: java.sql.Date): void;
            /**
             * Sets the designated parameter to the given <code>java.sql.Time</code> value.
             * The driver converts this
             * to an SQL <code>TIME</code> value when it sends it to the database.
             */
            // @ts-ignore
             setTime(parameterName: string, x: java.sql.Time): void;
            /**
             * Sets the designated parameter to the given <code>java.sql.Timestamp</code> value.
             * The driver
             * converts this to an SQL <code>TIMESTAMP</code> value when it sends it to the
             * database.
             */
            // @ts-ignore
             setTimestamp(parameterName: string, x: java.sql.Timestamp): void;
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large ASCII value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code>. Data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             */
            // @ts-ignore
             setAsciiStream(parameterName: string, x: java.io.InputStream, length: number): void;
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large binary value is input to a <code>LONGVARBINARY</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             */
            // @ts-ignore
             setBinaryStream(parameterName: string, x: java.io.InputStream, length: number): void;
            /**
             * Sets the value of the designated parameter with the given object.
             * <p>The given Java object will be converted to the given targetSqlType
             * before being sent to the database.
             * If the object has a custom mapping (is of a class implementing the
             * interface <code>SQLData</code>),
             * the JDBC driver should call the method <code>SQLData.writeSQL</code> to write it
             * to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * <code>Ref</code>, <code>Blob</code>, <code>Clob</code>,  <code>NClob</code>,
             * <code>Struct</code>, <code>java.net.URL</code>,
             * or <code>Array</code>, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <P>
             * Note that this method may be used to pass datatabase-
             * specific abstract data types.
             */
            // @ts-ignore
             setObject(parameterName: string, x: java.lang.Object, targetSqlType: number, scale: number): void;
            /**
             * Sets the value of the designated parameter with the given object.
             * This method is similar to {@link #setObject(String parameterName,
             * Object x, int targetSqlType, int scaleOrLength)},
             * except that it assumes a scale of zero.
             */
            // @ts-ignore
             setObject(parameterName: string, x: java.lang.Object, targetSqlType: number): void;
            /**
             * Sets the value of the designated parameter with the given object.
             * <p>The JDBC specification specifies a standard mapping from
             * Java <code>Object</code> types to SQL types.  The given argument
             * will be converted to the corresponding SQL type before being
             * sent to the database.
             * <p>Note that this method may be used to pass datatabase-
             * specific abstract data types, by using a driver-specific Java
             * type.
             * If the object is of a class implementing the interface <code>SQLData</code>,
             * the JDBC driver should call the method <code>SQLData.writeSQL</code>
             * to write it to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * <code>Ref</code>, <code>Blob</code>, <code>Clob</code>,  <code>NClob</code>,
             * <code>Struct</code>, <code>java.net.URL</code>,
             * or <code>Array</code>, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <P>
             * This method throws an exception if there is an ambiguity, for example, if the
             * object is of a class implementing more than one of the interfaces named above.
             * <p>
             * <b>Note:</b> Not all databases allow for a non-typed Null to be sent to
             * the backend. For maximum portability, the <code>setNull</code> or the
             * <code>setObject(String parameterName, Object x, int sqlType)</code>
             * method should be used
             * instead of <code>setObject(String parameterName, Object x)</code>.
             * <p>
             */
            // @ts-ignore
             setObject(parameterName: string, x: java.lang.Object): void;
            /**
             * Sets the designated parameter to the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             */
            // @ts-ignore
             setCharacterStream(parameterName: string, reader: java.io.Reader, length: number): void;
            /**
             * Sets the designated parameter to the given <code>java.sql.Date</code> value,
             * using the given <code>Calendar</code> object.  The driver uses
             * the <code>Calendar</code> object to construct an SQL <code>DATE</code> value,
             * which the driver then sends to the database.  With a
             * a <code>Calendar</code> object, the driver can calculate the date
             * taking into account a custom timezone.  If no
             * <code>Calendar</code> object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             */
            // @ts-ignore
             setDate(parameterName: string, x: java.sql.Date, cal: java.util.Calendar): void;
            /**
             * Sets the designated parameter to the given <code>java.sql.Time</code> value,
             * using the given <code>Calendar</code> object.  The driver uses
             * the <code>Calendar</code> object to construct an SQL <code>TIME</code> value,
             * which the driver then sends to the database.  With a
             * a <code>Calendar</code> object, the driver can calculate the time
             * taking into account a custom timezone.  If no
             * <code>Calendar</code> object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             */
            // @ts-ignore
             setTime(parameterName: string, x: java.sql.Time, cal: java.util.Calendar): void;
            /**
             * Sets the designated parameter to the given <code>java.sql.Timestamp</code> value,
             * using the given <code>Calendar</code> object.  The driver uses
             * the <code>Calendar</code> object to construct an SQL <code>TIMESTAMP</code> value,
             * which the driver then sends to the database.  With a
             * a <code>Calendar</code> object, the driver can calculate the timestamp
             * taking into account a custom timezone.  If no
             * <code>Calendar</code> object is specified, the driver uses the default
             * timezone, which is that of the virtual machine running the application.
             */
            // @ts-ignore
             setTimestamp(parameterName: string, x: java.sql.Timestamp, cal: java.util.Calendar): void;
            /**
             * Sets the designated parameter to SQL <code>NULL</code>.
             * This version of the method <code>setNull</code> should
             * be used for user-defined types and REF type parameters.  Examples
             * of user-defined types include: STRUCT, DISTINCT, JAVA_OBJECT, and
             * named array types.
             * <P><B>Note:</B> To be portable, applications must give the
             * SQL type code and the fully-qualified SQL type name when specifying
             * a NULL user-defined or REF parameter.  In the case of a user-defined type
             * the name is the type name of the parameter itself.  For a REF
             * parameter, the name is the type name of the referenced type.
             * <p>
             * Although it is intended for user-defined and Ref parameters,
             * this method may be used to set a null parameter of any JDBC type.
             * If the parameter does not have a user-defined or REF type, the given
             * typeName is ignored.
             */
            // @ts-ignore
             setNull(parameterName: string, sqlType: number, typeName: string): void;
            /**
             * Retrieves the value of a JDBC <code>CHAR</code>, <code>VARCHAR</code>,
             * or <code>LONGVARCHAR</code> parameter as a <code>String</code> in
             * the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>CHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>CHAR</code> value had in the
             * database, including any padding added by the database.
             */
            // @ts-ignore
             getString(parameterName: string): string;
            /**
             * Retrieves the value of a JDBC <code>BIT</code> or <code>BOOLEAN</code>
             * parameter as a
             * <code>boolean</code> in the Java programming language.
             */
            // @ts-ignore
             getBoolean(parameterName: string): boolean;
            /**
             * Retrieves the value of a JDBC <code>TINYINT</code> parameter as a <code>byte</code>
             * in the Java programming language.
             */
            // @ts-ignore
             getByte(parameterName: string): number;
            /**
             * Retrieves the value of a JDBC <code>SMALLINT</code> parameter as a <code>short</code>
             * in the Java programming language.
             */
            // @ts-ignore
             getShort(parameterName: string): number;
            /**
             * Retrieves the value of a JDBC <code>INTEGER</code> parameter as an <code>int</code>
             * in the Java programming language.
             */
            // @ts-ignore
             getInt(parameterName: string): number;
            /**
             * Retrieves the value of a JDBC <code>BIGINT</code> parameter as a <code>long</code>
             * in the Java programming language.
             */
            // @ts-ignore
             getLong(parameterName: string): number;
            /**
             * Retrieves the value of a JDBC <code>FLOAT</code> parameter as a <code>float</code>
             * in the Java programming language.
             */
            // @ts-ignore
             getFloat(parameterName: string): number;
            /**
             * Retrieves the value of a JDBC <code>DOUBLE</code> parameter as a <code>double</code>
             * in the Java programming language.
             */
            // @ts-ignore
             getDouble(parameterName: string): number;
            /**
             * Retrieves the value of a JDBC <code>BINARY</code> or <code>VARBINARY</code>
             * parameter as an array of <code>byte</code> values in the Java
             * programming language.
             */
            // @ts-ignore
             getBytes(parameterName: string): number[];
            /**
             * Retrieves the value of a JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object.
             */
            // @ts-ignore
             getDate(parameterName: string): java.sql.Date;
            /**
             * Retrieves the value of a JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object.
             */
            // @ts-ignore
             getTime(parameterName: string): java.sql.Time;
            /**
             * Retrieves the value of a JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object.
             */
            // @ts-ignore
             getTimestamp(parameterName: string): java.sql.Timestamp;
            /**
             * Retrieves the value of a parameter as an <code>Object</code> in the Java
             * programming language. If the value is an SQL <code>NULL</code>, the
             * driver returns a Java <code>null</code>.
             * <p>
             * This method returns a Java object whose type corresponds to the JDBC
             * type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target JDBC
             * type as <code>java.sql.Types.OTHER</code>, this method can be used
             * to read database-specific abstract data types.
             */
            // @ts-ignore
             getObject(parameterName: string): java.lang.Object;
            /**
             * Retrieves the value of a JDBC <code>NUMERIC</code> parameter as a
             * <code>java.math.BigDecimal</code> object with as many digits to the
             * right of the decimal point as the value contains.
             */
            // @ts-ignore
             getBigDecimal(parameterName: string): java.math.BigDecimal;
            /**
             * Returns an object representing the value of OUT parameter
             * <code>parameterName</code> and uses <code>map</code> for the custom
             * mapping of the parameter value.
             * <p>
             * This method returns a Java object whose type corresponds to the
             * JDBC type that was registered for this parameter using the method
             * <code>registerOutParameter</code>.  By registering the target
             * JDBC type as <code>java.sql.Types.OTHER</code>, this method can
             * be used to read database-specific abstract data types.
             */
            // @ts-ignore
             getObject(parameterName: string, map: java.util.Map): java.lang.Object;
            /**
             * Retrieves the value of a JDBC <code>REF(&lt;structured-type&gt;)</code>
             * parameter as a {@link java.sql.Ref} object in the Java programming language.
             */
            // @ts-ignore
             getRef(parameterName: string): java.sql.Ref;
            /**
             * Retrieves the value of a JDBC <code>BLOB</code> parameter as a
             * {@link java.sql.Blob} object in the Java programming language.
             */
            // @ts-ignore
             getBlob(parameterName: string): java.sql.Blob;
            /**
             * Retrieves the value of a JDBC <code>CLOB</code> parameter as a
             * <code>java.sql.Clob</code> object in the Java programming language.
             */
            // @ts-ignore
             getClob(parameterName: string): java.sql.Clob;
            /**
             * Retrieves the value of a JDBC <code>ARRAY</code> parameter as an
             * {@link java.sql.Array} object in the Java programming language.
             */
            // @ts-ignore
             getArray(parameterName: string): java.sql.Array;
            /**
             * Retrieves the value of a JDBC <code>DATE</code> parameter as a
             * <code>java.sql.Date</code> object, using
             * the given <code>Calendar</code> object
             * to construct the date.
             * With a <code>Calendar</code> object, the driver
             * can calculate the date taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             */
            // @ts-ignore
             getDate(parameterName: string, cal: java.util.Calendar): java.sql.Date;
            /**
             * Retrieves the value of a JDBC <code>TIME</code> parameter as a
             * <code>java.sql.Time</code> object, using
             * the given <code>Calendar</code> object
             * to construct the time.
             * With a <code>Calendar</code> object, the driver
             * can calculate the time taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             */
            // @ts-ignore
             getTime(parameterName: string, cal: java.util.Calendar): java.sql.Time;
            /**
             * Retrieves the value of a JDBC <code>TIMESTAMP</code> parameter as a
             * <code>java.sql.Timestamp</code> object, using
             * the given <code>Calendar</code> object to construct
             * the <code>Timestamp</code> object.
             * With a <code>Calendar</code> object, the driver
             * can calculate the timestamp taking into account a custom timezone and locale.
             * If no <code>Calendar</code> object is specified, the driver uses the
             * default timezone and locale.
             */
            // @ts-ignore
             getTimestamp(parameterName: string, cal: java.util.Calendar): java.sql.Timestamp;
            /**
             * Retrieves the value of a JDBC <code>DATALINK</code> parameter as a
             * <code>java.net.URL</code> object.
             */
            // @ts-ignore
             getURL(parameterName: string): java.net.URL;
            /**
             * Retrieves the value of the designated JDBC <code>ROWID</code> parameter as a
             * <code>java.sql.RowId</code> object.
             */
            // @ts-ignore
             getRowId(parameterIndex: number): java.sql.RowId;
            /**
             * Retrieves the value of the designated JDBC <code>ROWID</code> parameter as a
             * <code>java.sql.RowId</code> object.
             */
            // @ts-ignore
             getRowId(parameterName: string): java.sql.RowId;
            /**
             * Sets the designated parameter to the given <code>java.sql.RowId</code> object. The
             * driver converts this to a SQL <code>ROWID</code> when it sends it to the
             * database.
             */
            // @ts-ignore
             setRowId(parameterName: string, x: java.sql.RowId): void;
            /**
             * Sets the designated parameter to the given <code>String</code> object.
             * The driver converts this to a SQL <code>NCHAR</code> or
             * <code>NVARCHAR</code> or <code>LONGNVARCHAR</code>
             */
            // @ts-ignore
             setNString(parameterName: string, value: string): void;
            /**
             * Sets the designated parameter to a <code>Reader</code> object. The
             * <code>Reader</code> reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             */
            // @ts-ignore
             setNCharacterStream(parameterName: string, value: java.io.Reader, length: number): void;
            /**
             * Sets the designated parameter to a <code>java.sql.NClob</code> object. The object
             * implements the <code>java.sql.NClob</code> interface. This <code>NClob</code>
             * object maps to a SQL <code>NCLOB</code>.
             */
            // @ts-ignore
             setNClob(parameterName: string, value: java.sql.NClob): void;
            /**
             * Sets the designated parameter to a <code>Reader</code> object.  The <code>reader</code> must contain  the number
             * of characters specified by length otherwise a <code>SQLException</code> will be
             * generated when the <code>CallableStatement</code> is executed.
             * This method differs from the <code>setCharacterStream (int, Reader, int)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>CLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGVARCHAR</code> or a <code>CLOB</code>
             */
            // @ts-ignore
             setClob(parameterName: string, reader: java.io.Reader, length: number): void;
            /**
             * Sets the designated parameter to a <code>InputStream</code> object.  The <code>inputstream</code> must contain  the number
             * of characters specified by length, otherwise a <code>SQLException</code> will be
             * generated when the <code>CallableStatement</code> is executed.
             * This method differs from the <code>setBinaryStream (int, InputStream, int)</code>
             * method because it informs the driver that the parameter value should be
             * sent to the server as a <code>BLOB</code>.  When the <code>setBinaryStream</code> method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be sent to the server as a <code>LONGVARBINARY</code> or a <code>BLOB</code>
             */
            // @ts-ignore
             setBlob(parameterName: string, inputStream: java.io.InputStream, length: number): void;
            /**
             * Sets the designated parameter to a <code>Reader</code> object.  The <code>reader</code> must contain  the number
             * of characters specified by length otherwise a <code>SQLException</code> will be
             * generated when the <code>CallableStatement</code> is executed.
             * This method differs from the <code>setCharacterStream (int, Reader, int)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>NCLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGNVARCHAR</code> or a <code>NCLOB</code>
             */
            // @ts-ignore
             setNClob(parameterName: string, reader: java.io.Reader, length: number): void;
            /**
             * Retrieves the value of the designated JDBC <code>NCLOB</code> parameter as a
             * <code>java.sql.NClob</code> object in the Java programming language.
             */
            // @ts-ignore
             getNClob(parameterIndex: number): java.sql.NClob;
            /**
             * Retrieves the value of a JDBC <code>NCLOB</code> parameter as a
             * <code>java.sql.NClob</code> object in the Java programming language.
             */
            // @ts-ignore
             getNClob(parameterName: string): java.sql.NClob;
            /**
             * Sets the designated parameter to the given <code>java.sql.SQLXML</code> object. The driver converts this to an
             * <code>SQL XML</code> value when it sends it to the database.
             */
            // @ts-ignore
             setSQLXML(parameterName: string, xmlObject: java.sql.SQLXML): void;
            /**
             * Retrieves the value of the designated <code>SQL XML</code> parameter as a
             * <code>java.sql.SQLXML</code> object in the Java programming language.
             */
            // @ts-ignore
             getSQLXML(parameterIndex: number): java.sql.SQLXML;
            /**
             * Retrieves the value of the designated <code>SQL XML</code> parameter as a
             * <code>java.sql.SQLXML</code> object in the Java programming language.
             */
            // @ts-ignore
             getSQLXML(parameterName: string): java.sql.SQLXML;
            /**
             * Retrieves the value of the designated <code>NCHAR</code>,
             * <code>NVARCHAR</code>
             * or <code>LONGNVARCHAR</code> parameter as
             * a <code>String</code> in the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>NCHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>NCHAR</code> value had in the
             * database, including any padding added by the database.
             */
            // @ts-ignore
             getNString(parameterIndex: number): string;
            /**
             * Retrieves the value of the designated <code>NCHAR</code>,
             * <code>NVARCHAR</code>
             * or <code>LONGNVARCHAR</code> parameter as
             * a <code>String</code> in the Java programming language.
             * <p>
             * For the fixed-length type JDBC <code>NCHAR</code>,
             * the <code>String</code> object
             * returned has exactly the same value the SQL
             * <code>NCHAR</code> value had in the
             * database, including any padding added by the database.
             */
            // @ts-ignore
             getNString(parameterName: string): string;
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> parameters.
             */
            // @ts-ignore
             getNCharacterStream(parameterIndex: number): java.io.Reader;
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             * It is intended for use when
             * accessing  <code>NCHAR</code>,<code>NVARCHAR</code>
             * and <code>LONGNVARCHAR</code> parameters.
             */
            // @ts-ignore
             getNCharacterStream(parameterName: string): java.io.Reader;
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             */
            // @ts-ignore
             getCharacterStream(parameterIndex: number): java.io.Reader;
            /**
             * Retrieves the value of the designated parameter as a
             * <code>java.io.Reader</code> object in the Java programming language.
             */
            // @ts-ignore
             getCharacterStream(parameterName: string): java.io.Reader;
            /**
             * Sets the designated parameter to the given <code>java.sql.Blob</code> object.
             * The driver converts this to an SQL <code>BLOB</code> value when it
             * sends it to the database.
             */
            // @ts-ignore
             setBlob(parameterName: string, x: java.sql.Blob): void;
            /**
             * Sets the designated parameter to the given <code>java.sql.Clob</code> object.
             * The driver converts this to an SQL <code>CLOB</code> value when it
             * sends it to the database.
             */
            // @ts-ignore
             setClob(parameterName: string, x: java.sql.Clob): void;
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large ASCII value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code>. Data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             */
            // @ts-ignore
             setAsciiStream(parameterName: string, x: java.io.InputStream, length: number): void;
            /**
             * Sets the designated parameter to the given input stream, which will have
             * the specified number of bytes.
             * When a very large binary value is input to a <code>LONGVARBINARY</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             */
            // @ts-ignore
             setBinaryStream(parameterName: string, x: java.io.InputStream, length: number): void;
            /**
             * Sets the designated parameter to the given <code>Reader</code>
             * object, which is the given number of characters long.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             */
            // @ts-ignore
             setCharacterStream(parameterName: string, reader: java.io.Reader, length: number): void;
            /**
             * Sets the designated parameter to the given input stream.
             * When a very large ASCII value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code>. Data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from ASCII to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setAsciiStream</code> which takes a length parameter.
             */
            // @ts-ignore
             setAsciiStream(parameterName: string, x: java.io.InputStream): void;
            /**
             * Sets the designated parameter to the given input stream.
             * When a very large binary value is input to a <code>LONGVARBINARY</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.InputStream</code> object. The data will be read from the
             * stream as needed until end-of-file is reached.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setBinaryStream</code> which takes a length parameter.
             */
            // @ts-ignore
             setBinaryStream(parameterName: string, x: java.io.InputStream): void;
            /**
             * Sets the designated parameter to the given <code>Reader</code>
             * object.
             * When a very large UNICODE value is input to a <code>LONGVARCHAR</code>
             * parameter, it may be more practical to send it via a
             * <code>java.io.Reader</code> object. The data will be read from the stream
             * as needed until end-of-file is reached.  The JDBC driver will
             * do any necessary conversion from UNICODE to the database char format.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setCharacterStream</code> which takes a length parameter.
             */
            // @ts-ignore
             setCharacterStream(parameterName: string, reader: java.io.Reader): void;
            /**
             * Sets the designated parameter to a <code>Reader</code> object. The
             * <code>Reader</code> reads the data till end-of-file is reached. The
             * driver does the necessary conversion from Java character format to
             * the national character set in the database.
             * <P><B>Note:</B> This stream object can either be a standard
             * Java stream object or your own subclass that implements the
             * standard interface.
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setNCharacterStream</code> which takes a length parameter.
             */
            // @ts-ignore
             setNCharacterStream(parameterName: string, value: java.io.Reader): void;
            /**
             * Sets the designated parameter to a <code>Reader</code> object.
             * This method differs from the <code>setCharacterStream (int, Reader)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>CLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGVARCHAR</code> or a <code>CLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setClob</code> which takes a length parameter.
             */
            // @ts-ignore
             setClob(parameterName: string, reader: java.io.Reader): void;
            /**
             * Sets the designated parameter to a <code>InputStream</code> object.
             * This method differs from the <code>setBinaryStream (int, InputStream)</code>
             * method because it informs the driver that the parameter value should be
             * sent to the server as a <code>BLOB</code>.  When the <code>setBinaryStream</code> method is used,
             * the driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGVARBINARY</code> or a <code>BLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setBlob</code> which takes a length parameter.
             */
            // @ts-ignore
             setBlob(parameterName: string, inputStream: java.io.InputStream): void;
            /**
             * Sets the designated parameter to a <code>Reader</code> object.
             * This method differs from the <code>setCharacterStream (int, Reader)</code> method
             * because it informs the driver that the parameter value should be sent to
             * the server as a <code>NCLOB</code>.  When the <code>setCharacterStream</code> method is used, the
             * driver may have to do extra work to determine whether the parameter
             * data should be send to the server as a <code>LONGNVARCHAR</code> or a <code>NCLOB</code>
             * <P><B>Note:</B> Consult your JDBC driver documentation to determine if
             * it might be more efficient to use a version of
             * <code>setNClob</code> which takes a length parameter.
             */
            // @ts-ignore
             setNClob(parameterName: string, reader: java.io.Reader): void;
            /**
             * <p>Returns an object representing the value of OUT parameter
             * {@code parameterIndex} and will convert from the
             * SQL type of the parameter to the requested Java data type, if the
             * conversion is supported. If the conversion is not
             * supported or null is specified for the type, a
             * <code>SQLException</code> is thrown.
             * <p>
             * At a minimum, an implementation must support the conversions defined in
             * Appendix B, Table B-3 and conversion of appropriate user defined SQL
             * types to a Java type which implements {@code SQLData}, or {@code Struct}.
             * Additional conversions may be supported and are vendor defined.
             */
            // @ts-ignore
             getObject(parameterIndex: number, type: java.lang.Class): java.lang.Object;
            /**
             * <p>Returns an object representing the value of OUT parameter
             * {@code parameterName} and will convert from the
             * SQL type of the parameter to the requested Java data type, if the
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
             getObject(parameterName: string, type: java.lang.Class): java.lang.Object;
            /**
             * <p>Sets the value of the designated parameter with the given object.
             * If the second argument is an {@code InputStream} then the stream
             * must contain the number of bytes specified by scaleOrLength.
             * If the second argument is a {@code Reader} then the reader must
             * contain the number of characters specified
             * by scaleOrLength. If these conditions are not true the driver
             * will generate a
             * {@code SQLException} when the prepared statement is executed.
             * <p>The given Java object will be converted to the given targetSqlType
             * before being sent to the database.
             * If the object has a custom mapping (is of a class implementing the
             * interface {@code SQLData}),
             * the JDBC driver should call the method {@code SQLData.writeSQL} to
             * write it to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * {@code Ref}, {@code Blob}, {@code Clob},  {@code NClob},
             * {@code Struct}, {@code java.net.URL},
             * or {@code Array}, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <p>Note that this method may be used to pass database-specific
             * abstract data types.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             setObject(parameterName: string, x: java.lang.Object, targetSqlType: java.sql.SQLType, scaleOrLength: number): void;
            /**
             * Sets the value of the designated parameter with the given object.
             * This method is similar to {@link #setObject(String parameterName,
             * Object x, SQLType targetSqlType, int scaleOrLength)},
             * except that it assumes a scale of zero.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             setObject(parameterName: string, x: java.lang.Object, targetSqlType: java.sql.SQLType): void;
            /**
             * Registers the OUT parameter in ordinal position
             * {@code parameterIndex} to the JDBC type
             * {@code sqlType}.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, {@code sqlType}
             * may be {@code JDBCType.OTHER} or a {@code SQLType} that is supported by
             * the JDBC driver.  The method
             * {@link #getObject} retrieves the value.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             registerOutParameter(parameterIndex: number, sqlType: java.sql.SQLType): void;
            /**
             * Registers the parameter in ordinal position
             * {@code parameterIndex} to be of JDBC type
             * {@code sqlType}. All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * This version of {@code  registerOutParameter} should be
             * used when the parameter is of JDBC type {@code JDBCType.NUMERIC}
             * or {@code JDBCType.DECIMAL}.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             registerOutParameter(parameterIndex: number, sqlType: java.sql.SQLType, scale: number): void;
            /**
             * Registers the designated output parameter.
             * This version of
             * the method {@code  registerOutParameter}
             * should be used for a user-defined or {@code REF} output parameter.
             * Examples
             * of user-defined types include: {@code STRUCT}, {@code DISTINCT},
             * {@code JAVA_OBJECT}, and named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>  For a user-defined parameter, the fully-qualified SQL
             * type name of the parameter should also be given, while a {@code REF}
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-defined and {@code REF} parameters.
             * Although it is intended for user-defined and {@code REF} parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-defined or {@code REF} type, the
             * <i>typeName</i> parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the getter method whose Java type corresponds to the
             * parameter's registered SQL type.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             registerOutParameter(parameterIndex: number, sqlType: java.sql.SQLType, typeName: string): void;
            /**
             * Registers the OUT parameter named
             * <code>parameterName</code> to the JDBC type
             * {@code sqlType}.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * If the JDBC type expected to be returned to this output parameter
             * is specific to this particular database, {@code sqlType}
             * should be {@code JDBCType.OTHER} or a {@code SQLType} that is supported
             * by the JDBC driver..  The method
             * {@link #getObject} retrieves the value.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             registerOutParameter(parameterName: string, sqlType: java.sql.SQLType): void;
            /**
             * Registers the parameter named
             * <code>parameterName</code> to be of JDBC type
             * {@code sqlType}.  All OUT parameters must be registered
             * before a stored procedure is executed.
             * <p>
             * The JDBC type specified by {@code sqlType} for an OUT
             * parameter determines the Java type that must be used
             * in the {@code get} method to read the value of that parameter.
             * <p>
             * This version of {@code  registerOutParameter} should be
             * used when the parameter is of JDBC type {@code JDBCType.NUMERIC}
             * or {@code JDBCType.DECIMAL}.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             registerOutParameter(parameterName: string, sqlType: java.sql.SQLType, scale: number): void;
            /**
             * Registers the designated output parameter.  This version of
             * the method {@code  registerOutParameter}
             * should be used for a user-named or REF output parameter.  Examples
             * of user-named types include: STRUCT, DISTINCT, JAVA_OBJECT, and
             * named array types.
             * <p>
             * All OUT parameters must be registered
             * before a stored procedure is executed.
             * </p>
             * For a user-named parameter the fully-qualified SQL
             * type name of the parameter should also be given, while a REF
             * parameter requires that the fully-qualified type name of the
             * referenced type be given.  A JDBC driver that does not need the
             * type code and type name information may ignore it.   To be portable,
             * however, applications should always provide these values for
             * user-named and REF parameters.
             * Although it is intended for user-named and REF parameters,
             * this method may be used to register a parameter of any JDBC type.
             * If the parameter does not have a user-named or REF type, the
             * typeName parameter is ignored.
             * <P><B>Note:</B> When reading the value of an out parameter, you
             * must use the {@code getXXX} method whose Java type XXX corresponds to the
             * parameter's registered SQL type.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             */
            // @ts-ignore
             registerOutParameter(parameterName: string, sqlType: java.sql.SQLType, typeName: string): void;
        }
    }
}
