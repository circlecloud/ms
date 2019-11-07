declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Connection {
            // @ts-ignore
             TRANSACTION_NONE: number;
            // @ts-ignore
             TRANSACTION_READ_UNCOMMITTED: number;
            // @ts-ignore
             TRANSACTION_READ_COMMITTED: number;
            // @ts-ignore
             TRANSACTION_REPEATABLE_READ: number;
            // @ts-ignore
             TRANSACTION_SERIALIZABLE: number;
            /**
             * Creates a <code>Statement</code> object for sending
             * SQL statements to the database.
             * SQL statements without parameters are normally
             * executed using <code>Statement</code> objects. If the same SQL statement
             * is executed many times, it may be more efficient to use a
             * <code>PreparedStatement</code> object.
             * <P>
             * Result sets created using the returned <code>Statement</code>
             * object will by default be type <code>TYPE_FORWARD_ONLY</code>
             * and have a concurrency level of <code>CONCUR_READ_ONLY</code>.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             createStatement(): java.sql.Statement;
            /**
             * Creates a <code>PreparedStatement</code> object for sending
             * parameterized SQL statements to the database.
             * <P>
             * A SQL statement with or without IN parameters can be
             * pre-compiled and stored in a <code>PreparedStatement</code> object. This
             * object can then be used to efficiently execute this statement
             * multiple times.
             * <P><B>Note:</B> This method is optimized for handling
             * parametric SQL statements that benefit from precompilation. If
             * the driver supports precompilation,
             * the method <code>prepareStatement</code> will send
             * the statement to the database for precompilation. Some drivers
             * may not support precompilation. In this case, the statement may
             * not be sent to the database until the <code>PreparedStatement</code>
             * object is executed.  This has no direct effect on users; however, it does
             * affect which methods throw certain <code>SQLException</code> objects.
             * <P>
             * Result sets created using the returned <code>PreparedStatement</code>
             * object will by default be type <code>TYPE_FORWARD_ONLY</code>
             * and have a concurrency level of <code>CONCUR_READ_ONLY</code>.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             prepareStatement(sql: string): java.sql.PreparedStatement;
            /**
             * Creates a <code>CallableStatement</code> object for calling
             * database stored procedures.
             * The <code>CallableStatement</code> object provides
             * methods for setting up its IN and OUT parameters, and
             * methods for executing the call to a stored procedure.
             * <P><B>Note:</B> This method is optimized for handling stored
             * procedure call statements. Some drivers may send the call
             * statement to the database when the method <code>prepareCall</code>
             * is done; others
             * may wait until the <code>CallableStatement</code> object
             * is executed. This has no
             * direct effect on users; however, it does affect which method
             * throws certain SQLExceptions.
             * <P>
             * Result sets created using the returned <code>CallableStatement</code>
             * object will by default be type <code>TYPE_FORWARD_ONLY</code>
             * and have a concurrency level of <code>CONCUR_READ_ONLY</code>.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             prepareCall(sql: string): java.sql.CallableStatement;
            /**
             * Converts the given SQL statement into the system's native SQL grammar.
             * A driver may convert the JDBC SQL grammar into its system's
             * native SQL grammar prior to sending it. This method returns the
             * native form of the statement that the driver would have sent.
             */
            // @ts-ignore
             nativeSQL(sql: string): string;
            /**
             * Sets this connection's auto-commit mode to the given state.
             * If a connection is in auto-commit mode, then all its SQL
             * statements will be executed and committed as individual
             * transactions.  Otherwise, its SQL statements are grouped into
             * transactions that are terminated by a call to either
             * the method <code>commit</code> or the method <code>rollback</code>.
             * By default, new connections are in auto-commit
             * mode.
             * <P>
             * The commit occurs when the statement completes. The time when the statement
             * completes depends on the type of SQL Statement:
             * <ul>
             * <li>For DML statements, such as Insert, Update or Delete, and DDL statements,
             * the statement is complete as soon as it has finished executing.
             * <li>For Select statements, the statement is complete when the associated result
             * set is closed.
             * <li>For <code>CallableStatement</code> objects or for statements that return
             * multiple results, the statement is complete
             * when all of the associated result sets have been closed, and all update
             * counts and output parameters have been retrieved.
             * </ul>
             * <P>
             * <B>NOTE:</B>  If this method is called during a transaction and the
             * auto-commit mode is changed, the transaction is committed.  If
             * <code>setAutoCommit</code> is called and the auto-commit mode is
             * not changed, the call is a no-op.
             */
            // @ts-ignore
             setAutoCommit(autoCommit: boolean): void;
            /**
             * Retrieves the current auto-commit mode for this <code>Connection</code>
             * object.
             */
            // @ts-ignore
             getAutoCommit(): boolean;
            /**
             * Makes all changes made since the previous
             * commit/rollback permanent and releases any database locks
             * currently held by this <code>Connection</code> object.
             * This method should be
             * used only when auto-commit mode has been disabled.
             */
            // @ts-ignore
             commit(): void;
            /**
             * Undoes all changes made in the current transaction
             * and releases any database locks currently held
             * by this <code>Connection</code> object. This method should be
             * used only when auto-commit mode has been disabled.
             */
            // @ts-ignore
             rollback(): void;
            /**
             * Releases this <code>Connection</code> object's database and JDBC resources
             * immediately instead of waiting for them to be automatically released.
             * <P>
             * Calling the method <code>close</code> on a <code>Connection</code>
             * object that is already closed is a no-op.
             * <P>
             * It is <b>strongly recommended</b> that an application explicitly
             * commits or rolls back an active transaction prior to calling the
             * <code>close</code> method.  If the <code>close</code> method is called
             * and there is an active transaction, the results are implementation-defined.
             * <P>
             */
            // @ts-ignore
             close(): void;
            /**
             * Retrieves whether this <code>Connection</code> object has been
             * closed.  A connection is closed if the method <code>close</code>
             * has been called on it or if certain fatal errors have occurred.
             * This method is guaranteed to return <code>true</code> only when
             * it is called after the method <code>Connection.close</code> has
             * been called.
             * <P>
             * This method generally cannot be called to determine whether a
             * connection to a database is valid or invalid.  A typical client
             * can determine that a connection is invalid by catching any
             * exceptions that might be thrown when an operation is attempted.
             */
            // @ts-ignore
             isClosed(): boolean;
            /**
             * Retrieves a <code>DatabaseMetaData</code> object that contains
             * metadata about the database to which this
             * <code>Connection</code> object represents a connection.
             * The metadata includes information about the database's
             * tables, its supported SQL grammar, its stored
             * procedures, the capabilities of this connection, and so on.
             */
            // @ts-ignore
             getMetaData(): java.sql.DatabaseMetaData;
            /**
             * Puts this connection in read-only mode as a hint to the driver to enable
             * database optimizations.
             * <P><B>Note:</B> This method cannot be called during a transaction.
             */
            // @ts-ignore
             setReadOnly(readOnly: boolean): void;
            /**
             * Retrieves whether this <code>Connection</code>
             * object is in read-only mode.
             */
            // @ts-ignore
             isReadOnly(): boolean;
            /**
             * Sets the given catalog name in order to select
             * a subspace of this <code>Connection</code> object's database
             * in which to work.
             * <P>
             * If the driver does not support catalogs, it will
             * silently ignore this request.
             * <p>
             * Calling {@code setCatalog} has no effect on previously created or prepared
             * {@code Statement} objects. It is implementation defined whether a DBMS
             * prepare operation takes place immediately when the {@code Connection}
             * method {@code prepareStatement} or {@code prepareCall} is invoked.
             * For maximum portability, {@code setCatalog} should be called before a
             * {@code Statement} is created or prepared.
             */
            // @ts-ignore
             setCatalog(catalog: string): void;
            /**
             * Retrieves this <code>Connection</code> object's current catalog name.
             */
            // @ts-ignore
             getCatalog(): string;
            /**
             * Attempts to change the transaction isolation level for this
             * <code>Connection</code> object to the one given.
             * The constants defined in the interface <code>Connection</code>
             * are the possible transaction isolation levels.
             * <P>
             * <B>Note:</B> If this method is called during a transaction, the result
             * is implementation-defined.
             */
            // @ts-ignore
             setTransactionIsolation(level: number): void;
            /**
             * Retrieves this <code>Connection</code> object's current
             * transaction isolation level.
             */
            // @ts-ignore
             getTransactionIsolation(): number;
            /**
             * Retrieves the first warning reported by calls on this
             * <code>Connection</code> object.  If there is more than one
             * warning, subsequent warnings will be chained to the first one
             * and can be retrieved by calling the method
             * <code>SQLWarning.getNextWarning</code> on the warning
             * that was retrieved previously.
             * <P>
             * This method may not be
             * called on a closed connection; doing so will cause an
             * <code>SQLException</code> to be thrown.
             * <P><B>Note:</B> Subsequent warnings will be chained to this
             * SQLWarning.
             */
            // @ts-ignore
             getWarnings(): java.sql.SQLWarning;
            /**
             * Clears all warnings reported for this <code>Connection</code> object.
             * After a call to this method, the method <code>getWarnings</code>
             * returns <code>null</code> until a new warning is
             * reported for this <code>Connection</code> object.
             */
            // @ts-ignore
             clearWarnings(): void;
            /**
             * Creates a <code>Statement</code> object that will generate
             * <code>ResultSet</code> objects with the given type and concurrency.
             * This method is the same as the <code>createStatement</code> method
             * above, but it allows the default result set
             * type and concurrency to be overridden.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             createStatement(resultSetType: number, resultSetConcurrency: number): java.sql.Statement;
            /**
             * Creates a <code>PreparedStatement</code> object that will generate
             * <code>ResultSet</code> objects with the given type and concurrency.
             * This method is the same as the <code>prepareStatement</code> method
             * above, but it allows the default result set
             * type and concurrency to be overridden.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             prepareStatement(sql: string, resultSetType: number, resultSetConcurrency: number): java.sql.PreparedStatement;
            /**
             * Creates a <code>CallableStatement</code> object that will generate
             * <code>ResultSet</code> objects with the given type and concurrency.
             * This method is the same as the <code>prepareCall</code> method
             * above, but it allows the default result set
             * type and concurrency to be overridden.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             prepareCall(sql: string, resultSetType: number, resultSetConcurrency: number): java.sql.CallableStatement;
            /**
             * Retrieves the <code>Map</code> object associated with this
             * <code>Connection</code> object.
             * Unless the application has added an entry, the type map returned
             * will be empty.
             * <p>
             * You must invoke <code>setTypeMap</code> after making changes to the
             * <code>Map</code> object returned from
             * <code>getTypeMap</code> as a JDBC driver may create an internal
             * copy of the <code>Map</code> object passed to <code>setTypeMap</code>:
             * <pre>
             * Map&lt;String,Class&lt;?&gt;&gt; myMap = con.getTypeMap();
             * myMap.put("mySchemaName.ATHLETES", Athletes.class);
             * con.setTypeMap(myMap);
             * </pre>
             */
            // @ts-ignore
             getTypeMap(): java.util.Map;
            /**
             * Installs the given <code>TypeMap</code> object as the type map for
             * this <code>Connection</code> object.  The type map will be used for the
             * custom mapping of SQL structured types and distinct types.
             * <p>
             * You must set the the values for the <code>TypeMap</code> prior to
             * callng <code>setMap</code> as a JDBC driver may create an internal copy
             * of the <code>TypeMap</code>:
             * <pre>
             * Map myMap&lt;String,Class&lt;?&gt;&gt; = new HashMap&lt;String,Class&lt;?&gt;&gt;();
             * myMap.put("mySchemaName.ATHLETES", Athletes.class);
             * con.setTypeMap(myMap);
             * </pre>
             */
            // @ts-ignore
             setTypeMap(map: java.util.Map): void;
            /**
             * Changes the default holdability of <code>ResultSet</code> objects
             * created using this <code>Connection</code> object to the given
             * holdability.  The default holdability of <code>ResultSet</code> objects
             * can be be determined by invoking
             * {@link DatabaseMetaData#getResultSetHoldability}.
             */
            // @ts-ignore
             setHoldability(holdability: number): void;
            /**
             * Retrieves the current holdability of <code>ResultSet</code> objects
             * created using this <code>Connection</code> object.
             */
            // @ts-ignore
             getHoldability(): number;
            /**
             * Creates an unnamed savepoint in the current transaction and
             * returns the new <code>Savepoint</code> object that represents it.
             * <p> if setSavepoint is invoked outside of an active transaction, a transaction will be started at this newly created
             * savepoint.
             */
            // @ts-ignore
             setSavepoint(): java.sql.Savepoint;
            /**
             * Creates a savepoint with the given name in the current transaction
             * and returns the new <code>Savepoint</code> object that represents it.
             * <p> if setSavepoint is invoked outside of an active transaction, a transaction will be started at this newly created
             * savepoint.
             */
            // @ts-ignore
             setSavepoint(name: string): java.sql.Savepoint;
            /**
             * Undoes all changes made after the given <code>Savepoint</code> object
             * was set.
             * <P>
             * This method should be used only when auto-commit has been disabled.
             */
            // @ts-ignore
             rollback(savepoint: java.sql.Savepoint): void;
            /**
             * Removes the specified <code>Savepoint</code>  and subsequent <code>Savepoint</code> objects from the current
             * transaction. Any reference to the savepoint after it have been removed
             * will cause an <code>SQLException</code> to be thrown.
             */
            // @ts-ignore
             releaseSavepoint(savepoint: java.sql.Savepoint): void;
            /**
             * Creates a <code>Statement</code> object that will generate
             * <code>ResultSet</code> objects with the given type, concurrency,
             * and holdability.
             * This method is the same as the <code>createStatement</code> method
             * above, but it allows the default result set
             * type, concurrency, and holdability to be overridden.
             */
            // @ts-ignore
             createStatement(resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): java.sql.Statement;
            /**
             * Creates a <code>PreparedStatement</code> object that will generate
             * <code>ResultSet</code> objects with the given type, concurrency,
             * and holdability.
             * <P>
             * This method is the same as the <code>prepareStatement</code> method
             * above, but it allows the default result set
             * type, concurrency, and holdability to be overridden.
             */
            // @ts-ignore
             prepareStatement(sql: string, resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): java.sql.PreparedStatement;
            /**
             * Creates a <code>CallableStatement</code> object that will generate
             * <code>ResultSet</code> objects with the given type and concurrency.
             * This method is the same as the <code>prepareCall</code> method
             * above, but it allows the default result set
             * type, result set concurrency type and holdability to be overridden.
             */
            // @ts-ignore
             prepareCall(sql: string, resultSetType: number, resultSetConcurrency: number, resultSetHoldability: number): java.sql.CallableStatement;
            /**
             * Creates a default <code>PreparedStatement</code> object that has
             * the capability to retrieve auto-generated keys. The given constant
             * tells the driver whether it should make auto-generated keys
             * available for retrieval.  This parameter is ignored if the SQL statement
             * is not an <code>INSERT</code> statement, or an SQL statement able to return
             * auto-generated keys (the list of such statements is vendor-specific).
             * <P>
             * <B>Note:</B> This method is optimized for handling
             * parametric SQL statements that benefit from precompilation. If
             * the driver supports precompilation,
             * the method <code>prepareStatement</code> will send
             * the statement to the database for precompilation. Some drivers
             * may not support precompilation. In this case, the statement may
             * not be sent to the database until the <code>PreparedStatement</code>
             * object is executed.  This has no direct effect on users; however, it does
             * affect which methods throw certain SQLExceptions.
             * <P>
             * Result sets created using the returned <code>PreparedStatement</code>
             * object will by default be type <code>TYPE_FORWARD_ONLY</code>
             * and have a concurrency level of <code>CONCUR_READ_ONLY</code>.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             prepareStatement(sql: string, autoGeneratedKeys: number): java.sql.PreparedStatement;
            /**
             * Creates a default <code>PreparedStatement</code> object capable
             * of returning the auto-generated keys designated by the given array.
             * This array contains the indexes of the columns in the target
             * table that contain the auto-generated keys that should be made
             * available.  The driver will ignore the array if the SQL statement
             * is not an <code>INSERT</code> statement, or an SQL statement able to return
             * auto-generated keys (the list of such statements is vendor-specific).
             * <p>
             * An SQL statement with or without IN parameters can be
             * pre-compiled and stored in a <code>PreparedStatement</code> object. This
             * object can then be used to efficiently execute this statement
             * multiple times.
             * <P>
             * <B>Note:</B> This method is optimized for handling
             * parametric SQL statements that benefit from precompilation. If
             * the driver supports precompilation,
             * the method <code>prepareStatement</code> will send
             * the statement to the database for precompilation. Some drivers
             * may not support precompilation. In this case, the statement may
             * not be sent to the database until the <code>PreparedStatement</code>
             * object is executed.  This has no direct effect on users; however, it does
             * affect which methods throw certain SQLExceptions.
             * <P>
             * Result sets created using the returned <code>PreparedStatement</code>
             * object will by default be type <code>TYPE_FORWARD_ONLY</code>
             * and have a concurrency level of <code>CONCUR_READ_ONLY</code>.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             prepareStatement(sql: string, columnIndexes: number): java.sql.PreparedStatement;
            /**
             * Creates a default <code>PreparedStatement</code> object capable
             * of returning the auto-generated keys designated by the given array.
             * This array contains the names of the columns in the target
             * table that contain the auto-generated keys that should be returned.
             * The driver will ignore the array if the SQL statement
             * is not an <code>INSERT</code> statement, or an SQL statement able to return
             * auto-generated keys (the list of such statements is vendor-specific).
             * <P>
             * An SQL statement with or without IN parameters can be
             * pre-compiled and stored in a <code>PreparedStatement</code> object. This
             * object can then be used to efficiently execute this statement
             * multiple times.
             * <P>
             * <B>Note:</B> This method is optimized for handling
             * parametric SQL statements that benefit from precompilation. If
             * the driver supports precompilation,
             * the method <code>prepareStatement</code> will send
             * the statement to the database for precompilation. Some drivers
             * may not support precompilation. In this case, the statement may
             * not be sent to the database until the <code>PreparedStatement</code>
             * object is executed.  This has no direct effect on users; however, it does
             * affect which methods throw certain SQLExceptions.
             * <P>
             * Result sets created using the returned <code>PreparedStatement</code>
             * object will by default be type <code>TYPE_FORWARD_ONLY</code>
             * and have a concurrency level of <code>CONCUR_READ_ONLY</code>.
             * The holdability of the created result sets can be determined by
             * calling {@link #getHoldability}.
             */
            // @ts-ignore
             prepareStatement(sql: string, columnNames: string): java.sql.PreparedStatement;
            /**
             * Constructs an object that implements the <code>Clob</code> interface. The object
             * returned initially contains no data.  The <code>setAsciiStream</code>,
             * <code>setCharacterStream</code> and <code>setString</code> methods of
             * the <code>Clob</code> interface may be used to add data to the <code>Clob</code>.
             */
            // @ts-ignore
             createClob(): java.sql.Clob;
            /**
             * Constructs an object that implements the <code>Blob</code> interface. The object
             * returned initially contains no data.  The <code>setBinaryStream</code> and
             * <code>setBytes</code> methods of the <code>Blob</code> interface may be used to add data to
             * the <code>Blob</code>.
             */
            // @ts-ignore
             createBlob(): java.sql.Blob;
            /**
             * Constructs an object that implements the <code>NClob</code> interface. The object
             * returned initially contains no data.  The <code>setAsciiStream</code>,
             * <code>setCharacterStream</code> and <code>setString</code> methods of the <code>NClob</code> interface may
             * be used to add data to the <code>NClob</code>.
             */
            // @ts-ignore
             createNClob(): java.sql.NClob;
            /**
             * Constructs an object that implements the <code>SQLXML</code> interface. The object
             * returned initially contains no data. The <code>createXmlStreamWriter</code> object and
             * <code>setString</code> method of the <code>SQLXML</code> interface may be used to add data to the <code>SQLXML</code>
             * object.
             */
            // @ts-ignore
             createSQLXML(): java.sql.SQLXML;
            /**
             * Returns true if the connection has not been closed and is still valid.
             * The driver shall submit a query on the connection or use some other
             * mechanism that positively verifies the connection is still valid when
             * this method is called.
             * <p>
             * The query submitted by the driver to validate the connection shall be
             * executed in the context of the current transaction.
             */
            // @ts-ignore
             isValid(timeout: number): boolean;
            /**
             * Sets the value of the client info property specified by name to the
             * value specified by value.
             * <p>
             * Applications may use the <code>DatabaseMetaData.getClientInfoProperties</code>
             * method to determine the client info properties supported by the driver
             * and the maximum length that may be specified for each property.
             * <p>
             * The driver stores the value specified in a suitable location in the
             * database.  For example in a special register, session parameter, or
             * system table column.  For efficiency the driver may defer setting the
             * value in the database until the next time a statement is executed or
             * prepared.  Other than storing the client information in the appropriate
             * place in the database, these methods shall not alter the behavior of
             * the connection in anyway.  The values supplied to these methods are
             * used for accounting, diagnostics and debugging purposes only.
             * <p>
             * The driver shall generate a warning if the client info name specified
             * is not recognized by the driver.
             * <p>
             * If the value specified to this method is greater than the maximum
             * length for the property the driver may either truncate the value and
             * generate a warning or generate a <code>SQLClientInfoException</code>.  If the driver
             * generates a <code>SQLClientInfoException</code>, the value specified was not set on the
             * connection.
             * <p>
             * The following are standard client info properties.  Drivers are not
             * required to support these properties however if the driver supports a
             * client info property that can be described by one of the standard
             * properties, the standard property name should be used.
             * <ul>
             * <li>ApplicationName  -       The name of the application currently utilizing
             * the connection</li>
             * <li>ClientUser               -       The name of the user that the application using
             * the connection is performing work for.  This may
             * not be the same as the user name that was used
             * in establishing the connection.</li>
             * <li>ClientHostname   -       The hostname of the computer the application
             * using the connection is running on.</li>
             * </ul>
             * <p>
             */
            // @ts-ignore
             setClientInfo(name: string, value: string): void;
            /**
             * Sets the value of the connection's client info properties.  The
             * <code>Properties</code> object contains the names and values of the client info
             * properties to be set.  The set of client info properties contained in
             * the properties list replaces the current set of client info properties
             * on the connection.  If a property that is currently set on the
             * connection is not present in the properties list, that property is
             * cleared.  Specifying an empty properties list will clear all of the
             * properties on the connection.  See <code>setClientInfo (String, String)</code> for
             * more information.
             * <p>
             * If an error occurs in setting any of the client info properties, a
             * <code>SQLClientInfoException</code> is thrown. The <code>SQLClientInfoException</code>
             * contains information indicating which client info properties were not set.
             * The state of the client information is unknown because
             * some databases do not allow multiple client info properties to be set
             * atomically.  For those databases, one or more properties may have been
             * set before the error occurred.
             * <p>
             */
            // @ts-ignore
             setClientInfo(properties: java.util.Properties): void;
            /**
             * Returns the value of the client info property specified by name.  This
             * method may return null if the specified client info property has not
             * been set and does not have a default value.  This method will also
             * return null if the specified client info property name is not supported
             * by the driver.
             * <p>
             * Applications may use the <code>DatabaseMetaData.getClientInfoProperties</code>
             * method to determine the client info properties supported by the driver.
             * <p>
             */
            // @ts-ignore
             getClientInfo(name: string): string;
            /**
             * Returns a list containing the name and current value of each client info
             * property supported by the driver.  The value of a client info property
             * may be null if the property has not been set and does not have a
             * default value.
             * <p>
             */
            // @ts-ignore
             getClientInfo(): java.util.Properties;
            /**
             * Factory method for creating Array objects.
             * <p>
             * <b>Note: </b>When <code>createArrayOf</code> is used to create an array object
             * that maps to a primitive data type, then it is implementation-defined
             * whether the <code>Array</code> object is an array of that primitive
             * data type or an array of <code>Object</code>.
             * <p>
             * <b>Note: </b>The JDBC driver is responsible for mapping the elements
             * <code>Object</code> array to the default JDBC SQL type defined in
             * java.sql.Types for the given class of <code>Object</code>. The default
             * mapping is specified in Appendix B of the JDBC specification.  If the
             * resulting JDBC type is not the appropriate type for the given typeName then
             * it is implementation defined whether an <code>SQLException</code> is
             * thrown or the driver supports the resulting conversion.
             */
            // @ts-ignore
             createArrayOf(typeName: string, elements: java.lang.Object): java.sql.Array;
            /**
             * Factory method for creating Struct objects.
             */
            // @ts-ignore
             createStruct(typeName: string, attributes: java.lang.Object): java.sql.Struct;
            /**
             * Sets the given schema name to access.
             * <P>
             * If the driver does not support schemas, it will
             * silently ignore this request.
             * <p>
             * Calling {@code setSchema} has no effect on previously created or prepared
             * {@code Statement} objects. It is implementation defined whether a DBMS
             * prepare operation takes place immediately when the {@code Connection}
             * method {@code prepareStatement} or {@code prepareCall} is invoked.
             * For maximum portability, {@code setSchema} should be called before a
             * {@code Statement} is created or prepared.
             */
            // @ts-ignore
             setSchema(schema: string): void;
            /**
             * Retrieves this <code>Connection</code> object's current schema name.
             */
            // @ts-ignore
             getSchema(): string;
            /**
             * Terminates an open connection.  Calling <code>abort</code> results in:
             * <ul>
             * <li>The connection marked as closed
             * <li>Closes any physical connection to the database
             * <li>Releases resources used by the connection
             * <li>Insures that any thread that is currently accessing the connection
             * will either progress to completion or throw an <code>SQLException</code>.
             * </ul>
             * <p>
             * Calling <code>abort</code> marks the connection closed and releases any
             * resources. Calling <code>abort</code> on a closed connection is a
             * no-op.
             * <p>
             * It is possible that the aborting and releasing of the resources that are
             * held by the connection can take an extended period of time.  When the
             * <code>abort</code> method returns, the connection will have been marked as
             * closed and the <code>Executor</code> that was passed as a parameter to abort
             * may still be executing tasks to release resources.
             * <p>
             * This method checks to see that there is an <code>SQLPermission</code>
             * object before allowing the method to proceed.  If a
             * <code>SecurityManager</code> exists and its
             * <code>checkPermission</code> method denies calling <code>abort</code>,
             * this method throws a
             * <code>java.lang.SecurityException</code>.
             */
            // @ts-ignore
             abort(executor: java.util.concurrent.Executor): void;
            /**
             * Sets the maximum period a <code>Connection</code> or
             * objects created from the <code>Connection</code>
             * will wait for the database to reply to any one request. If any
             * request remains unanswered, the waiting method will
             * return with a <code>SQLException</code>, and the <code>Connection</code>
             * or objects created from the <code>Connection</code>  will be marked as
             * closed. Any subsequent use of
             * the objects, with the exception of the <code>close</code>,
             * <code>isClosed</code> or <code>Connection.isValid</code>
             * methods, will result in  a <code>SQLException</code>.
             * <p>
             * <b>Note</b>: This method is intended to address a rare but serious
             * condition where network partitions can cause threads issuing JDBC calls
             * to hang uninterruptedly in socket reads, until the OS TCP-TIMEOUT
             * (typically 10 minutes). This method is related to the
             * {@link #abort abort() } method which provides an administrator
             * thread a means to free any such threads in cases where the
             * JDBC connection is accessible to the administrator thread.
             * The <code>setNetworkTimeout</code> method will cover cases where
             * there is no administrator thread, or it has no access to the
             * connection. This method is severe in it's effects, and should be
             * given a high enough value so it is never triggered before any more
             * normal timeouts, such as transaction timeouts.
             * <p>
             * JDBC driver implementations  may also choose to support the
             * {@code setNetworkTimeout} method to impose a limit on database
             * response time, in environments where no network is present.
             * <p>
             * Drivers may internally implement some or all of their API calls with
             * multiple internal driver-database transmissions, and it is left to the
             * driver implementation to determine whether the limit will be
             * applied always to the response to the API call, or to any
             * single  request made during the API call.
             * <p>
             * This method can be invoked more than once, such as to set a limit for an
             * area of JDBC code, and to reset to the default on exit from this area.
             * Invocation of this method has no impact on already outstanding
             * requests.
             * <p>
             * The {@code Statement.setQueryTimeout()} timeout value is independent of the
             * timeout value specified in {@code setNetworkTimeout}. If the query timeout
             * expires  before the network timeout then the
             * statement execution will be canceled. If the network is still
             * active the result will be that both the statement and connection
             * are still usable. However if the network timeout expires before
             * the query timeout or if the statement timeout fails due to network
             * problems, the connection will be marked as closed, any resources held by
             * the connection will be released and both the connection and
             * statement will be unusable.
             * <p>
             * When the driver determines that the {@code setNetworkTimeout} timeout
             * value has expired, the JDBC driver marks the connection
             * closed and releases any resources held by the connection.
             * <p>
             * This method checks to see that there is an <code>SQLPermission</code>
             * object before allowing the method to proceed.  If a
             * <code>SecurityManager</code> exists and its
             * <code>checkPermission</code> method denies calling
             * <code>setNetworkTimeout</code>, this method throws a
             * <code>java.lang.SecurityException</code>.
             */
            // @ts-ignore
             setNetworkTimeout(executor: java.util.concurrent.Executor, milliseconds: number): void;
            /**
             * Retrieves the number of milliseconds the driver will
             * wait for a database request to complete.
             * If the limit is exceeded, a
             * <code>SQLException</code> is thrown.
             */
            // @ts-ignore
             getNetworkTimeout(): number;
        }
    }
}
