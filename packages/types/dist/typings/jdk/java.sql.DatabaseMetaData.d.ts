declare namespace java {
    namespace sql {
        // @ts-ignore
        interface DatabaseMetaData {
            // @ts-ignore
             procedureResultUnknown: number;
            // @ts-ignore
             procedureNoResult: number;
            // @ts-ignore
             procedureReturnsResult: number;
            // @ts-ignore
             procedureColumnUnknown: number;
            // @ts-ignore
             procedureColumnIn: number;
            // @ts-ignore
             procedureColumnInOut: number;
            // @ts-ignore
             procedureColumnOut: number;
            // @ts-ignore
             procedureColumnReturn: number;
            // @ts-ignore
             procedureColumnResult: number;
            // @ts-ignore
             procedureNoNulls: number;
            // @ts-ignore
             procedureNullable: number;
            // @ts-ignore
             procedureNullableUnknown: number;
            // @ts-ignore
             columnNoNulls: number;
            // @ts-ignore
             columnNullable: number;
            // @ts-ignore
             columnNullableUnknown: number;
            // @ts-ignore
             bestRowTemporary: number;
            // @ts-ignore
             bestRowTransaction: number;
            // @ts-ignore
             bestRowSession: number;
            // @ts-ignore
             bestRowUnknown: number;
            // @ts-ignore
             bestRowNotPseudo: number;
            // @ts-ignore
             bestRowPseudo: number;
            // @ts-ignore
             versionColumnUnknown: number;
            // @ts-ignore
             versionColumnNotPseudo: number;
            // @ts-ignore
             versionColumnPseudo: number;
            // @ts-ignore
             importedKeyCascade: number;
            // @ts-ignore
             importedKeyRestrict: number;
            // @ts-ignore
             importedKeySetNull: number;
            // @ts-ignore
             importedKeyNoAction: number;
            // @ts-ignore
             importedKeySetDefault: number;
            // @ts-ignore
             importedKeyInitiallyDeferred: number;
            // @ts-ignore
             importedKeyInitiallyImmediate: number;
            // @ts-ignore
             importedKeyNotDeferrable: number;
            // @ts-ignore
             typeNoNulls: number;
            // @ts-ignore
             typeNullable: number;
            // @ts-ignore
             typeNullableUnknown: number;
            // @ts-ignore
             typePredNone: number;
            // @ts-ignore
             typePredChar: number;
            // @ts-ignore
             typePredBasic: number;
            // @ts-ignore
             typeSearchable: number;
            // @ts-ignore
             tableIndexStatistic: number;
            // @ts-ignore
             tableIndexClustered: number;
            // @ts-ignore
             tableIndexHashed: number;
            // @ts-ignore
             tableIndexOther: number;
            // @ts-ignore
             attributeNoNulls: number;
            // @ts-ignore
             attributeNullable: number;
            // @ts-ignore
             attributeNullableUnknown: number;
            // @ts-ignore
             sqlStateXOpen: number;
            // @ts-ignore
             sqlStateSQL: number;
            // @ts-ignore
             sqlStateSQL99: number;
            // @ts-ignore
             functionColumnUnknown: number;
            // @ts-ignore
             functionColumnIn: number;
            // @ts-ignore
             functionColumnInOut: number;
            // @ts-ignore
             functionColumnOut: number;
            // @ts-ignore
             functionReturn: number;
            // @ts-ignore
             functionColumnResult: number;
            // @ts-ignore
             functionNoNulls: number;
            // @ts-ignore
             functionNullable: number;
            // @ts-ignore
             functionNullableUnknown: number;
            // @ts-ignore
             functionResultUnknown: number;
            // @ts-ignore
             functionNoTable: number;
            // @ts-ignore
             functionReturnsTable: number;
            /**
             * Retrieves whether the current user can call all the procedures
             * returned by the method <code>getProcedures</code>.
             */
            // @ts-ignore
             allProceduresAreCallable(): boolean;
            /**
             * Retrieves whether the current user can use all the tables returned
             * by the method <code>getTables</code> in a <code>SELECT</code>
             * statement.
             */
            // @ts-ignore
             allTablesAreSelectable(): boolean;
            /**
             * Retrieves the URL for this DBMS.
             */
            // @ts-ignore
             getURL(): string;
            /**
             * Retrieves the user name as known to this database.
             */
            // @ts-ignore
             getUserName(): string;
            /**
             * Retrieves whether this database is in read-only mode.
             */
            // @ts-ignore
             isReadOnly(): boolean;
            /**
             * Retrieves whether <code>NULL</code> values are sorted high.
             * Sorted high means that <code>NULL</code> values
             * sort higher than any other value in a domain.  In an ascending order,
             * if this method returns <code>true</code>,  <code>NULL</code> values
             * will appear at the end. By contrast, the method
             * <code>nullsAreSortedAtEnd</code> indicates whether <code>NULL</code> values
             * are sorted at the end regardless of sort order.
             */
            // @ts-ignore
             nullsAreSortedHigh(): boolean;
            /**
             * Retrieves whether <code>NULL</code> values are sorted low.
             * Sorted low means that <code>NULL</code> values
             * sort lower than any other value in a domain.  In an ascending order,
             * if this method returns <code>true</code>,  <code>NULL</code> values
             * will appear at the beginning. By contrast, the method
             * <code>nullsAreSortedAtStart</code> indicates whether <code>NULL</code> values
             * are sorted at the beginning regardless of sort order.
             */
            // @ts-ignore
             nullsAreSortedLow(): boolean;
            /**
             * Retrieves whether <code>NULL</code> values are sorted at the start regardless
             * of sort order.
             */
            // @ts-ignore
             nullsAreSortedAtStart(): boolean;
            /**
             * Retrieves whether <code>NULL</code> values are sorted at the end regardless of
             * sort order.
             */
            // @ts-ignore
             nullsAreSortedAtEnd(): boolean;
            /**
             * Retrieves the name of this database product.
             */
            // @ts-ignore
             getDatabaseProductName(): string;
            /**
             * Retrieves the version number of this database product.
             */
            // @ts-ignore
             getDatabaseProductVersion(): string;
            /**
             * Retrieves the name of this JDBC driver.
             */
            // @ts-ignore
             getDriverName(): string;
            /**
             * Retrieves the version number of this JDBC driver as a <code>String</code>.
             */
            // @ts-ignore
             getDriverVersion(): string;
            /**
             * Retrieves this JDBC driver's major version number.
             */
            // @ts-ignore
             getDriverMajorVersion(): number;
            /**
             * Retrieves this JDBC driver's minor version number.
             */
            // @ts-ignore
             getDriverMinorVersion(): number;
            /**
             * Retrieves whether this database stores tables in a local file.
             */
            // @ts-ignore
             usesLocalFiles(): boolean;
            /**
             * Retrieves whether this database uses a file for each table.
             */
            // @ts-ignore
             usesLocalFilePerTable(): boolean;
            /**
             * Retrieves whether this database treats mixed case unquoted SQL identifiers as
             * case sensitive and as a result stores them in mixed case.
             */
            // @ts-ignore
             supportsMixedCaseIdentifiers(): boolean;
            /**
             * Retrieves whether this database treats mixed case unquoted SQL identifiers as
             * case insensitive and stores them in upper case.
             */
            // @ts-ignore
             storesUpperCaseIdentifiers(): boolean;
            /**
             * Retrieves whether this database treats mixed case unquoted SQL identifiers as
             * case insensitive and stores them in lower case.
             */
            // @ts-ignore
             storesLowerCaseIdentifiers(): boolean;
            /**
             * Retrieves whether this database treats mixed case unquoted SQL identifiers as
             * case insensitive and stores them in mixed case.
             */
            // @ts-ignore
             storesMixedCaseIdentifiers(): boolean;
            /**
             * Retrieves whether this database treats mixed case quoted SQL identifiers as
             * case sensitive and as a result stores them in mixed case.
             */
            // @ts-ignore
             supportsMixedCaseQuotedIdentifiers(): boolean;
            /**
             * Retrieves whether this database treats mixed case quoted SQL identifiers as
             * case insensitive and stores them in upper case.
             */
            // @ts-ignore
             storesUpperCaseQuotedIdentifiers(): boolean;
            /**
             * Retrieves whether this database treats mixed case quoted SQL identifiers as
             * case insensitive and stores them in lower case.
             */
            // @ts-ignore
             storesLowerCaseQuotedIdentifiers(): boolean;
            /**
             * Retrieves whether this database treats mixed case quoted SQL identifiers as
             * case insensitive and stores them in mixed case.
             */
            // @ts-ignore
             storesMixedCaseQuotedIdentifiers(): boolean;
            /**
             * Retrieves the string used to quote SQL identifiers.
             * This method returns a space " " if identifier quoting is not supported.
             */
            // @ts-ignore
             getIdentifierQuoteString(): string;
            /**
             * Retrieves a comma-separated list of all of this database's SQL keywords
             * that are NOT also SQL:2003 keywords.
             */
            // @ts-ignore
             getSQLKeywords(): string;
            /**
             * Retrieves a comma-separated list of math functions available with
             * this database.  These are the Open /Open CLI math function names used in
             * the JDBC function escape clause.
             */
            // @ts-ignore
             getNumericFunctions(): string;
            /**
             * Retrieves a comma-separated list of string functions available with
             * this database.  These are the  Open Group CLI string function names used
             * in the JDBC function escape clause.
             */
            // @ts-ignore
             getStringFunctions(): string;
            /**
             * Retrieves a comma-separated list of system functions available with
             * this database.  These are the  Open Group CLI system function names used
             * in the JDBC function escape clause.
             */
            // @ts-ignore
             getSystemFunctions(): string;
            /**
             * Retrieves a comma-separated list of the time and date functions available
             * with this database.
             */
            // @ts-ignore
             getTimeDateFunctions(): string;
            /**
             * Retrieves the string that can be used to escape wildcard characters.
             * This is the string that can be used to escape '_' or '%' in
             * the catalog search parameters that are a pattern (and therefore use one
             * of the wildcard characters).
             * <P>The '_' character represents any single character;
             * the '%' character represents any sequence of zero or
             * more characters.
             */
            // @ts-ignore
             getSearchStringEscape(): string;
            /**
             * Retrieves all the "extra" characters that can be used in unquoted
             * identifier names (those beyond a-z, A-Z, 0-9 and _).
             */
            // @ts-ignore
             getExtraNameCharacters(): string;
            /**
             * Retrieves whether this database supports <code>ALTER TABLE</code>
             * with add column.
             */
            // @ts-ignore
             supportsAlterTableWithAddColumn(): boolean;
            /**
             * Retrieves whether this database supports <code>ALTER TABLE</code>
             * with drop column.
             */
            // @ts-ignore
             supportsAlterTableWithDropColumn(): boolean;
            /**
             * Retrieves whether this database supports column aliasing.
             * <P>If so, the SQL AS clause can be used to provide names for
             * computed columns or to provide alias names for columns as
             * required.
             */
            // @ts-ignore
             supportsColumnAliasing(): boolean;
            /**
             * Retrieves whether this database supports concatenations between
             * <code>NULL</code> and non-<code>NULL</code> values being
             * <code>NULL</code>.
             */
            // @ts-ignore
             nullPlusNonNullIsNull(): boolean;
            /**
             * Retrieves whether this database supports the JDBC scalar function
             * <code>CONVERT</code> for the conversion of one JDBC type to another.
             * The JDBC types are the generic SQL data types defined
             * in <code>java.sql.Types</code>.
             */
            // @ts-ignore
             supportsConvert(): boolean;
            /**
             * Retrieves whether this database supports the JDBC scalar function
             * <code>CONVERT</code> for conversions between the JDBC types <i>fromType</i>
             * and <i>toType</i>.  The JDBC types are the generic SQL data types defined
             * in <code>java.sql.Types</code>.
             */
            // @ts-ignore
             supportsConvert(fromType: number, toType: number): boolean;
            /**
             * Retrieves whether this database supports table correlation names.
             */
            // @ts-ignore
             supportsTableCorrelationNames(): boolean;
            /**
             * Retrieves whether, when table correlation names are supported, they
             * are restricted to being different from the names of the tables.
             */
            // @ts-ignore
             supportsDifferentTableCorrelationNames(): boolean;
            /**
             * Retrieves whether this database supports expressions in
             * <code>ORDER BY</code> lists.
             */
            // @ts-ignore
             supportsExpressionsInOrderBy(): boolean;
            /**
             * Retrieves whether this database supports using a column that is
             * not in the <code>SELECT</code> statement in an
             * <code>ORDER BY</code> clause.
             */
            // @ts-ignore
             supportsOrderByUnrelated(): boolean;
            /**
             * Retrieves whether this database supports some form of
             * <code>GROUP BY</code> clause.
             */
            // @ts-ignore
             supportsGroupBy(): boolean;
            /**
             * Retrieves whether this database supports using a column that is
             * not in the <code>SELECT</code> statement in a
             * <code>GROUP BY</code> clause.
             */
            // @ts-ignore
             supportsGroupByUnrelated(): boolean;
            /**
             * Retrieves whether this database supports using columns not included in
             * the <code>SELECT</code> statement in a <code>GROUP BY</code> clause
             * provided that all of the columns in the <code>SELECT</code> statement
             * are included in the <code>GROUP BY</code> clause.
             */
            // @ts-ignore
             supportsGroupByBeyondSelect(): boolean;
            /**
             * Retrieves whether this database supports specifying a
             * <code>LIKE</code> escape clause.
             */
            // @ts-ignore
             supportsLikeEscapeClause(): boolean;
            /**
             * Retrieves whether this database supports getting multiple
             * <code>ResultSet</code> objects from a single call to the
             * method <code>execute</code>.
             */
            // @ts-ignore
             supportsMultipleResultSets(): boolean;
            /**
             * Retrieves whether this database allows having multiple
             * transactions open at once (on different connections).
             */
            // @ts-ignore
             supportsMultipleTransactions(): boolean;
            /**
             * Retrieves whether columns in this database may be defined as non-nullable.
             */
            // @ts-ignore
             supportsNonNullableColumns(): boolean;
            /**
             * Retrieves whether this database supports the ODBC Minimum SQL grammar.
             */
            // @ts-ignore
             supportsMinimumSQLGrammar(): boolean;
            /**
             * Retrieves whether this database supports the ODBC Core SQL grammar.
             */
            // @ts-ignore
             supportsCoreSQLGrammar(): boolean;
            /**
             * Retrieves whether this database supports the ODBC Extended SQL grammar.
             */
            // @ts-ignore
             supportsExtendedSQLGrammar(): boolean;
            /**
             * Retrieves whether this database supports the ANSI92 entry level SQL
             * grammar.
             */
            // @ts-ignore
             supportsANSI92EntryLevelSQL(): boolean;
            /**
             * Retrieves whether this database supports the ANSI92 intermediate SQL grammar supported.
             */
            // @ts-ignore
             supportsANSI92IntermediateSQL(): boolean;
            /**
             * Retrieves whether this database supports the ANSI92 full SQL grammar supported.
             */
            // @ts-ignore
             supportsANSI92FullSQL(): boolean;
            /**
             * Retrieves whether this database supports the SQL Integrity
             * Enhancement Facility.
             */
            // @ts-ignore
             supportsIntegrityEnhancementFacility(): boolean;
            /**
             * Retrieves whether this database supports some form of outer join.
             */
            // @ts-ignore
             supportsOuterJoins(): boolean;
            /**
             * Retrieves whether this database supports full nested outer joins.
             */
            // @ts-ignore
             supportsFullOuterJoins(): boolean;
            /**
             * Retrieves whether this database provides limited support for outer
             * joins.  (This will be <code>true</code> if the method
             * <code>supportsFullOuterJoins</code> returns <code>true</code>).
             */
            // @ts-ignore
             supportsLimitedOuterJoins(): boolean;
            /**
             * Retrieves the database vendor's preferred term for "schema".
             */
            // @ts-ignore
             getSchemaTerm(): string;
            /**
             * Retrieves the database vendor's preferred term for "procedure".
             */
            // @ts-ignore
             getProcedureTerm(): string;
            /**
             * Retrieves the database vendor's preferred term for "catalog".
             */
            // @ts-ignore
             getCatalogTerm(): string;
            /**
             * Retrieves whether a catalog appears at the start of a fully qualified
             * table name.  If not, the catalog appears at the end.
             */
            // @ts-ignore
             isCatalogAtStart(): boolean;
            /**
             * Retrieves the <code>String</code> that this database uses as the
             * separator between a catalog and table name.
             */
            // @ts-ignore
             getCatalogSeparator(): string;
            /**
             * Retrieves whether a schema name can be used in a data manipulation statement.
             */
            // @ts-ignore
             supportsSchemasInDataManipulation(): boolean;
            /**
             * Retrieves whether a schema name can be used in a procedure call statement.
             */
            // @ts-ignore
             supportsSchemasInProcedureCalls(): boolean;
            /**
             * Retrieves whether a schema name can be used in a table definition statement.
             */
            // @ts-ignore
             supportsSchemasInTableDefinitions(): boolean;
            /**
             * Retrieves whether a schema name can be used in an index definition statement.
             */
            // @ts-ignore
             supportsSchemasInIndexDefinitions(): boolean;
            /**
             * Retrieves whether a schema name can be used in a privilege definition statement.
             */
            // @ts-ignore
             supportsSchemasInPrivilegeDefinitions(): boolean;
            /**
             * Retrieves whether a catalog name can be used in a data manipulation statement.
             */
            // @ts-ignore
             supportsCatalogsInDataManipulation(): boolean;
            /**
             * Retrieves whether a catalog name can be used in a procedure call statement.
             */
            // @ts-ignore
             supportsCatalogsInProcedureCalls(): boolean;
            /**
             * Retrieves whether a catalog name can be used in a table definition statement.
             */
            // @ts-ignore
             supportsCatalogsInTableDefinitions(): boolean;
            /**
             * Retrieves whether a catalog name can be used in an index definition statement.
             */
            // @ts-ignore
             supportsCatalogsInIndexDefinitions(): boolean;
            /**
             * Retrieves whether a catalog name can be used in a privilege definition statement.
             */
            // @ts-ignore
             supportsCatalogsInPrivilegeDefinitions(): boolean;
            /**
             * Retrieves whether this database supports positioned <code>DELETE</code>
             * statements.
             */
            // @ts-ignore
             supportsPositionedDelete(): boolean;
            /**
             * Retrieves whether this database supports positioned <code>UPDATE</code>
             * statements.
             */
            // @ts-ignore
             supportsPositionedUpdate(): boolean;
            /**
             * Retrieves whether this database supports <code>SELECT FOR UPDATE</code>
             * statements.
             */
            // @ts-ignore
             supportsSelectForUpdate(): boolean;
            /**
             * Retrieves whether this database supports stored procedure calls
             * that use the stored procedure escape syntax.
             */
            // @ts-ignore
             supportsStoredProcedures(): boolean;
            /**
             * Retrieves whether this database supports subqueries in comparison
             * expressions.
             */
            // @ts-ignore
             supportsSubqueriesInComparisons(): boolean;
            /**
             * Retrieves whether this database supports subqueries in
             * <code>EXISTS</code> expressions.
             */
            // @ts-ignore
             supportsSubqueriesInExists(): boolean;
            /**
             * Retrieves whether this database supports subqueries in
             * <code>IN</code> expressions.
             */
            // @ts-ignore
             supportsSubqueriesInIns(): boolean;
            /**
             * Retrieves whether this database supports subqueries in quantified
             * expressions.
             */
            // @ts-ignore
             supportsSubqueriesInQuantifieds(): boolean;
            /**
             * Retrieves whether this database supports correlated subqueries.
             */
            // @ts-ignore
             supportsCorrelatedSubqueries(): boolean;
            /**
             * Retrieves whether this database supports SQL <code>UNION</code>.
             */
            // @ts-ignore
             supportsUnion(): boolean;
            /**
             * Retrieves whether this database supports SQL <code>UNION ALL</code>.
             */
            // @ts-ignore
             supportsUnionAll(): boolean;
            /**
             * Retrieves whether this database supports keeping cursors open
             * across commits.
             */
            // @ts-ignore
             supportsOpenCursorsAcrossCommit(): boolean;
            /**
             * Retrieves whether this database supports keeping cursors open
             * across rollbacks.
             */
            // @ts-ignore
             supportsOpenCursorsAcrossRollback(): boolean;
            /**
             * Retrieves whether this database supports keeping statements open
             * across commits.
             */
            // @ts-ignore
             supportsOpenStatementsAcrossCommit(): boolean;
            /**
             * Retrieves whether this database supports keeping statements open
             * across rollbacks.
             */
            // @ts-ignore
             supportsOpenStatementsAcrossRollback(): boolean;
            /**
             * Retrieves the maximum number of hex characters this database allows in an
             * inline binary literal.
             */
            // @ts-ignore
             getMaxBinaryLiteralLength(): number;
            /**
             * Retrieves the maximum number of characters this database allows
             * for a character literal.
             */
            // @ts-ignore
             getMaxCharLiteralLength(): number;
            /**
             * Retrieves the maximum number of characters this database allows
             * for a column name.
             */
            // @ts-ignore
             getMaxColumnNameLength(): number;
            /**
             * Retrieves the maximum number of columns this database allows in a
             * <code>GROUP BY</code> clause.
             */
            // @ts-ignore
             getMaxColumnsInGroupBy(): number;
            /**
             * Retrieves the maximum number of columns this database allows in an index.
             */
            // @ts-ignore
             getMaxColumnsInIndex(): number;
            /**
             * Retrieves the maximum number of columns this database allows in an
             * <code>ORDER BY</code> clause.
             */
            // @ts-ignore
             getMaxColumnsInOrderBy(): number;
            /**
             * Retrieves the maximum number of columns this database allows in a
             * <code>SELECT</code> list.
             */
            // @ts-ignore
             getMaxColumnsInSelect(): number;
            /**
             * Retrieves the maximum number of columns this database allows in a table.
             */
            // @ts-ignore
             getMaxColumnsInTable(): number;
            /**
             * Retrieves the maximum number of concurrent connections to this
             * database that are possible.
             */
            // @ts-ignore
             getMaxConnections(): number;
            /**
             * Retrieves the maximum number of characters that this database allows in a
             * cursor name.
             */
            // @ts-ignore
             getMaxCursorNameLength(): number;
            /**
             * Retrieves the maximum number of bytes this database allows for an
             * index, including all of the parts of the index.
             */
            // @ts-ignore
             getMaxIndexLength(): number;
            /**
             * Retrieves the maximum number of characters that this database allows in a
             * schema name.
             */
            // @ts-ignore
             getMaxSchemaNameLength(): number;
            /**
             * Retrieves the maximum number of characters that this database allows in a
             * procedure name.
             */
            // @ts-ignore
             getMaxProcedureNameLength(): number;
            /**
             * Retrieves the maximum number of characters that this database allows in a
             * catalog name.
             */
            // @ts-ignore
             getMaxCatalogNameLength(): number;
            /**
             * Retrieves the maximum number of bytes this database allows in
             * a single row.
             */
            // @ts-ignore
             getMaxRowSize(): number;
            /**
             * Retrieves whether the return value for the method
             * <code>getMaxRowSize</code> includes the SQL data types
             * <code>LONGVARCHAR</code> and <code>LONGVARBINARY</code>.
             */
            // @ts-ignore
             doesMaxRowSizeIncludeBlobs(): boolean;
            /**
             * Retrieves the maximum number of characters this database allows in
             * an SQL statement.
             */
            // @ts-ignore
             getMaxStatementLength(): number;
            /**
             * Retrieves the maximum number of active statements to this database
             * that can be open at the same time.
             */
            // @ts-ignore
             getMaxStatements(): number;
            /**
             * Retrieves the maximum number of characters this database allows in
             * a table name.
             */
            // @ts-ignore
             getMaxTableNameLength(): number;
            /**
             * Retrieves the maximum number of tables this database allows in a
             * <code>SELECT</code> statement.
             */
            // @ts-ignore
             getMaxTablesInSelect(): number;
            /**
             * Retrieves the maximum number of characters this database allows in
             * a user name.
             */
            // @ts-ignore
             getMaxUserNameLength(): number;
            /**
             * Retrieves this database's default transaction isolation level.  The
             * possible values are defined in <code>java.sql.Connection</code>.
             */
            // @ts-ignore
             getDefaultTransactionIsolation(): number;
            /**
             * Retrieves whether this database supports transactions. If not, invoking the
             * method <code>commit</code> is a noop, and the isolation level is
             * <code>TRANSACTION_NONE</code>.
             */
            // @ts-ignore
             supportsTransactions(): boolean;
            /**
             * Retrieves whether this database supports the given transaction isolation level.
             */
            // @ts-ignore
             supportsTransactionIsolationLevel(level: number): boolean;
            /**
             * Retrieves whether this database supports both data definition and
             * data manipulation statements within a transaction.
             */
            // @ts-ignore
             supportsDataDefinitionAndDataManipulationTransactions(): boolean;
            /**
             * Retrieves whether this database supports only data manipulation
             * statements within a transaction.
             */
            // @ts-ignore
             supportsDataManipulationTransactionsOnly(): boolean;
            /**
             * Retrieves whether a data definition statement within a transaction forces
             * the transaction to commit.
             */
            // @ts-ignore
             dataDefinitionCausesTransactionCommit(): boolean;
            /**
             * Retrieves whether this database ignores a data definition statement
             * within a transaction.
             */
            // @ts-ignore
             dataDefinitionIgnoredInTransactions(): boolean;
            /**
             * Retrieves a description of the stored procedures available in the given
             * catalog.
             * <P>
             * Only procedure descriptions matching the schema and
             * procedure name criteria are returned.  They are ordered by
             * <code>PROCEDURE_CAT</code>, <code>PROCEDURE_SCHEM</code>,
             * <code>PROCEDURE_NAME</code> and <code>SPECIFIC_ NAME</code>.
             * <P>Each procedure description has the the following columns:
             * <OL>
             * <LI><B>PROCEDURE_CAT</B> String {@code =>} procedure catalog (may be <code>null</code>)
             * <LI><B>PROCEDURE_SCHEM</B> String {@code =>} procedure schema (may be <code>null</code>)
             * <LI><B>PROCEDURE_NAME</B> String {@code =>} procedure name
             * <LI> reserved for future use
             * <LI> reserved for future use
             * <LI> reserved for future use
             * <LI><B>REMARKS</B> String {@code =>} explanatory comment on the procedure
             * <LI><B>PROCEDURE_TYPE</B> short {@code =>} kind of procedure:
             * <UL>
             * <LI> procedureResultUnknown - Cannot determine if  a return value
             * will be returned
             * <LI> procedureNoResult - Does not return a return value
             * <LI> procedureReturnsResult - Returns a return value
             * </UL>
             * <LI><B>SPECIFIC_NAME</B> String  {@code =>} The name which uniquely identifies this
             * procedure within its schema.
             * </OL>
             * <p>
             * A user may not have permissions to execute any of the procedures that are
             * returned by <code>getProcedures</code>
             */
            // @ts-ignore
             getProcedures(catalog: string, schemaPattern: string, procedureNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the given catalog's stored procedure parameter
             * and result columns.
             * <P>Only descriptions matching the schema, procedure and
             * parameter name criteria are returned.  They are ordered by
             * PROCEDURE_CAT, PROCEDURE_SCHEM, PROCEDURE_NAME and SPECIFIC_NAME. Within this, the return value,
             * if any, is first. Next are the parameter descriptions in call
             * order. The column descriptions follow in column number order.
             * <P>Each row in the <code>ResultSet</code> is a parameter description or
             * column description with the following fields:
             * <OL>
             * <LI><B>PROCEDURE_CAT</B> String {@code =>} procedure catalog (may be <code>null</code>)
             * <LI><B>PROCEDURE_SCHEM</B> String {@code =>} procedure schema (may be <code>null</code>)
             * <LI><B>PROCEDURE_NAME</B> String {@code =>} procedure name
             * <LI><B>COLUMN_NAME</B> String {@code =>} column/parameter name
             * <LI><B>COLUMN_TYPE</B> Short {@code =>} kind of column/parameter:
             * <UL>
             * <LI> procedureColumnUnknown - nobody knows
             * <LI> procedureColumnIn - IN parameter
             * <LI> procedureColumnInOut - INOUT parameter
             * <LI> procedureColumnOut - OUT parameter
             * <LI> procedureColumnReturn - procedure return value
             * <LI> procedureColumnResult - result column in <code>ResultSet</code>
             * </UL>
             * <LI><B>DATA_TYPE</B> int {@code =>} SQL type from java.sql.Types
             * <LI><B>TYPE_NAME</B> String {@code =>} SQL type name, for a UDT type the
             * type name is fully qualified
             * <LI><B>PRECISION</B> int {@code =>} precision
             * <LI><B>LENGTH</B> int {@code =>} length in bytes of data
             * <LI><B>SCALE</B> short {@code =>} scale -  null is returned for data types where
             * SCALE is not applicable.
             * <LI><B>RADIX</B> short {@code =>} radix
             * <LI><B>NULLABLE</B> short {@code =>} can it contain NULL.
             * <UL>
             * <LI> procedureNoNulls - does not allow NULL values
             * <LI> procedureNullable - allows NULL values
             * <LI> procedureNullableUnknown - nullability unknown
             * </UL>
             * <LI><B>REMARKS</B> String {@code =>} comment describing parameter/column
             * <LI><B>COLUMN_DEF</B> String {@code =>} default value for the column, which should be interpreted as a string when the value is enclosed in single quotes (may be <code>null</code>)
             * <UL>
             * <LI> The string NULL (not enclosed in quotes) - if NULL was specified as the default value
             * <LI> TRUNCATE (not enclosed in quotes)        - if the specified default value cannot be represented without truncation
             * <LI> NULL                                     - if a default value was not specified
             * </UL>
             * <LI><B>SQL_DATA_TYPE</B> int  {@code =>} reserved for future use
             * <LI><B>SQL_DATETIME_SUB</B> int  {@code =>} reserved for future use
             * <LI><B>CHAR_OCTET_LENGTH</B> int  {@code =>} the maximum length of binary and character based columns.  For any other datatype the returned value is a
             * NULL
             * <LI><B>ORDINAL_POSITION</B> int  {@code =>} the ordinal position, starting from 1, for the input and output parameters for a procedure. A value of 0
             * is returned if this row describes the procedure's return value.  For result set columns, it is the
             * ordinal position of the column in the result set starting from 1.  If there are
             * multiple result sets, the column ordinal positions are implementation
             * defined.
             * <LI><B>IS_NULLABLE</B> String  {@code =>} ISO rules are used to determine the nullability for a column.
             * <UL>
             * <LI> YES           --- if the column can include NULLs
             * <LI> NO            --- if the column cannot include NULLs
             * <LI> empty string  --- if the nullability for the
             * column is unknown
             * </UL>
             * <LI><B>SPECIFIC_NAME</B> String  {@code =>} the name which uniquely identifies this procedure within its schema.
             * </OL>
             * <P><B>Note:</B> Some databases may not return the column
             * descriptions for a procedure.
             * <p>The PRECISION column represents the specified column size for the given column.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. Null is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getProcedureColumns(catalog: string, schemaPattern: string, procedureNamePattern: string, columnNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the tables available in the given catalog.
             * Only table descriptions matching the catalog, schema, table
             * name and type criteria are returned.  They are ordered by
             * <code>TABLE_TYPE</code>, <code>TABLE_CAT</code>,
             * <code>TABLE_SCHEM</code> and <code>TABLE_NAME</code>.
             * <P>
             * Each table description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} table catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} table schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} table name
             * <LI><B>TABLE_TYPE</B> String {@code =>} table type.  Typical types are "TABLE",
             * "VIEW", "SYSTEM TABLE", "GLOBAL TEMPORARY",
             * "LOCAL TEMPORARY", "ALIAS", "SYNONYM".
             * <LI><B>REMARKS</B> String {@code =>} explanatory comment on the table
             * <LI><B>TYPE_CAT</B> String {@code =>} the types catalog (may be <code>null</code>)
             * <LI><B>TYPE_SCHEM</B> String {@code =>} the types schema (may be <code>null</code>)
             * <LI><B>TYPE_NAME</B> String {@code =>} type name (may be <code>null</code>)
             * <LI><B>SELF_REFERENCING_COL_NAME</B> String {@code =>} name of the designated
             * "identifier" column of a typed table (may be <code>null</code>)
             * <LI><B>REF_GENERATION</B> String {@code =>} specifies how values in
             * SELF_REFERENCING_COL_NAME are created. Values are
             * "SYSTEM", "USER", "DERIVED". (may be <code>null</code>)
             * </OL>
             * <P><B>Note:</B> Some databases may not return information for
             * all tables.
             */
            // @ts-ignore
             getTables(catalog: string, schemaPattern: string, tableNamePattern: string, types: string): java.sql.ResultSet;
            /**
             * Retrieves the schema names available in this database.  The results
             * are ordered by <code>TABLE_CATALOG</code> and
             * <code>TABLE_SCHEM</code>.
             * <P>The schema columns are:
             * <OL>
             * <LI><B>TABLE_SCHEM</B> String {@code =>} schema name
             * <LI><B>TABLE_CATALOG</B> String {@code =>} catalog name (may be <code>null</code>)
             * </OL>
             */
            // @ts-ignore
             getSchemas(): java.sql.ResultSet;
            /**
             * Retrieves the catalog names available in this database.  The results
             * are ordered by catalog name.
             * <P>The catalog column is:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} catalog name
             * </OL>
             */
            // @ts-ignore
             getCatalogs(): java.sql.ResultSet;
            /**
             * Retrieves the table types available in this database.  The results
             * are ordered by table type.
             * <P>The table type is:
             * <OL>
             * <LI><B>TABLE_TYPE</B> String {@code =>} table type.  Typical types are "TABLE",
             * "VIEW", "SYSTEM TABLE", "GLOBAL TEMPORARY",
             * "LOCAL TEMPORARY", "ALIAS", "SYNONYM".
             * </OL>
             */
            // @ts-ignore
             getTableTypes(): java.sql.ResultSet;
            /**
             * Retrieves a description of table columns available in
             * the specified catalog.
             * <P>Only column descriptions matching the catalog, schema, table
             * and column name criteria are returned.  They are ordered by
             * <code>TABLE_CAT</code>,<code>TABLE_SCHEM</code>,
             * <code>TABLE_NAME</code>, and <code>ORDINAL_POSITION</code>.
             * <P>Each column description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} table catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} table schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} table name
             * <LI><B>COLUMN_NAME</B> String {@code =>} column name
             * <LI><B>DATA_TYPE</B> int {@code =>} SQL type from java.sql.Types
             * <LI><B>TYPE_NAME</B> String {@code =>} Data source dependent type name,
             * for a UDT the type name is fully qualified
             * <LI><B>COLUMN_SIZE</B> int {@code =>} column size.
             * <LI><B>BUFFER_LENGTH</B> is not used.
             * <LI><B>DECIMAL_DIGITS</B> int {@code =>} the number of fractional digits. Null is returned for data types where
             * DECIMAL_DIGITS is not applicable.
             * <LI><B>NUM_PREC_RADIX</B> int {@code =>} Radix (typically either 10 or 2)
             * <LI><B>NULLABLE</B> int {@code =>} is NULL allowed.
             * <UL>
             * <LI> columnNoNulls - might not allow <code>NULL</code> values
             * <LI> columnNullable - definitely allows <code>NULL</code> values
             * <LI> columnNullableUnknown - nullability unknown
             * </UL>
             * <LI><B>REMARKS</B> String {@code =>} comment describing column (may be <code>null</code>)
             * <LI><B>COLUMN_DEF</B> String {@code =>} default value for the column, which should be interpreted as a string when the value is enclosed in single quotes (may be <code>null</code>)
             * <LI><B>SQL_DATA_TYPE</B> int {@code =>} unused
             * <LI><B>SQL_DATETIME_SUB</B> int {@code =>} unused
             * <LI><B>CHAR_OCTET_LENGTH</B> int {@code =>} for char types the
             * maximum number of bytes in the column
             * <LI><B>ORDINAL_POSITION</B> int {@code =>} index of column in table
             * (starting at 1)
             * <LI><B>IS_NULLABLE</B> String  {@code =>} ISO rules are used to determine the nullability for a column.
             * <UL>
             * <LI> YES           --- if the column can include NULLs
             * <LI> NO            --- if the column cannot include NULLs
             * <LI> empty string  --- if the nullability for the
             * column is unknown
             * </UL>
             * <LI><B>SCOPE_CATALOG</B> String {@code =>} catalog of table that is the scope
             * of a reference attribute (<code>null</code> if DATA_TYPE isn't REF)
             * <LI><B>SCOPE_SCHEMA</B> String {@code =>} schema of table that is the scope
             * of a reference attribute (<code>null</code> if the DATA_TYPE isn't REF)
             * <LI><B>SCOPE_TABLE</B> String {@code =>} table name that this the scope
             * of a reference attribute (<code>null</code> if the DATA_TYPE isn't REF)
             * <LI><B>SOURCE_DATA_TYPE</B> short {@code =>} source type of a distinct type or user-generated
             * Ref type, SQL type from java.sql.Types (<code>null</code> if DATA_TYPE
             * isn't DISTINCT or user-generated REF)
             * <LI><B>IS_AUTOINCREMENT</B> String  {@code =>} Indicates whether this column is auto incremented
             * <UL>
             * <LI> YES           --- if the column is auto incremented
             * <LI> NO            --- if the column is not auto incremented
             * <LI> empty string  --- if it cannot be determined whether the column is auto incremented
             * </UL>
             * <LI><B>IS_GENERATEDCOLUMN</B> String  {@code =>} Indicates whether this is a generated column
             * <UL>
             * <LI> YES           --- if this a generated column
             * <LI> NO            --- if this not a generated column
             * <LI> empty string  --- if it cannot be determined whether this is a generated column
             * </UL>
             * </OL>
             * <p>The COLUMN_SIZE column specifies the column size for the given column.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. Null is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getColumns(catalog: string, schemaPattern: string, tableNamePattern: string, columnNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the access rights for a table's columns.
             * <P>Only privileges matching the column name criteria are
             * returned.  They are ordered by COLUMN_NAME and PRIVILEGE.
             * <P>Each privilege description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} table catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} table schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} table name
             * <LI><B>COLUMN_NAME</B> String {@code =>} column name
             * <LI><B>GRANTOR</B> String {@code =>} grantor of access (may be <code>null</code>)
             * <LI><B>GRANTEE</B> String {@code =>} grantee of access
             * <LI><B>PRIVILEGE</B> String {@code =>} name of access (SELECT,
             * INSERT, UPDATE, REFRENCES, ...)
             * <LI><B>IS_GRANTABLE</B> String {@code =>} "YES" if grantee is permitted
             * to grant to others; "NO" if not; <code>null</code> if unknown
             * </OL>
             */
            // @ts-ignore
             getColumnPrivileges(catalog: string, schema: string, table: string, columnNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the access rights for each table available
             * in a catalog. Note that a table privilege applies to one or
             * more columns in the table. It would be wrong to assume that
             * this privilege applies to all columns (this may be true for
             * some systems but is not true for all.)
             * <P>Only privileges matching the schema and table name
             * criteria are returned.  They are ordered by
             * <code>TABLE_CAT</code>,
             * <code>TABLE_SCHEM</code>, <code>TABLE_NAME</code>,
             * and <code>PRIVILEGE</code>.
             * <P>Each privilege description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} table catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} table schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} table name
             * <LI><B>GRANTOR</B> String {@code =>} grantor of access (may be <code>null</code>)
             * <LI><B>GRANTEE</B> String {@code =>} grantee of access
             * <LI><B>PRIVILEGE</B> String {@code =>} name of access (SELECT,
             * INSERT, UPDATE, REFRENCES, ...)
             * <LI><B>IS_GRANTABLE</B> String {@code =>} "YES" if grantee is permitted
             * to grant to others; "NO" if not; <code>null</code> if unknown
             * </OL>
             */
            // @ts-ignore
             getTablePrivileges(catalog: string, schemaPattern: string, tableNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of a table's optimal set of columns that
             * uniquely identifies a row. They are ordered by SCOPE.
             * <P>Each column description has the following columns:
             * <OL>
             * <LI><B>SCOPE</B> short {@code =>} actual scope of result
             * <UL>
             * <LI> bestRowTemporary - very temporary, while using row
             * <LI> bestRowTransaction - valid for remainder of current transaction
             * <LI> bestRowSession - valid for remainder of current session
             * </UL>
             * <LI><B>COLUMN_NAME</B> String {@code =>} column name
             * <LI><B>DATA_TYPE</B> int {@code =>} SQL data type from java.sql.Types
             * <LI><B>TYPE_NAME</B> String {@code =>} Data source dependent type name,
             * for a UDT the type name is fully qualified
             * <LI><B>COLUMN_SIZE</B> int {@code =>} precision
             * <LI><B>BUFFER_LENGTH</B> int {@code =>} not used
             * <LI><B>DECIMAL_DIGITS</B> short  {@code =>} scale - Null is returned for data types where
             * DECIMAL_DIGITS is not applicable.
             * <LI><B>PSEUDO_COLUMN</B> short {@code =>} is this a pseudo column
             * like an Oracle ROWID
             * <UL>
             * <LI> bestRowUnknown - may or may not be pseudo column
             * <LI> bestRowNotPseudo - is NOT a pseudo column
             * <LI> bestRowPseudo - is a pseudo column
             * </UL>
             * </OL>
             * <p>The COLUMN_SIZE column represents the specified column size for the given column.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. Null is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getBestRowIdentifier(catalog: string, schema: string, table: string, scope: number, nullable: boolean): java.sql.ResultSet;
            /**
             * Retrieves a description of a table's columns that are automatically
             * updated when any value in a row is updated.  They are
             * unordered.
             * <P>Each column description has the following columns:
             * <OL>
             * <LI><B>SCOPE</B> short {@code =>} is not used
             * <LI><B>COLUMN_NAME</B> String {@code =>} column name
             * <LI><B>DATA_TYPE</B> int {@code =>} SQL data type from <code>java.sql.Types</code>
             * <LI><B>TYPE_NAME</B> String {@code =>} Data source-dependent type name
             * <LI><B>COLUMN_SIZE</B> int {@code =>} precision
             * <LI><B>BUFFER_LENGTH</B> int {@code =>} length of column value in bytes
             * <LI><B>DECIMAL_DIGITS</B> short  {@code =>} scale - Null is returned for data types where
             * DECIMAL_DIGITS is not applicable.
             * <LI><B>PSEUDO_COLUMN</B> short {@code =>} whether this is pseudo column
             * like an Oracle ROWID
             * <UL>
             * <LI> versionColumnUnknown - may or may not be pseudo column
             * <LI> versionColumnNotPseudo - is NOT a pseudo column
             * <LI> versionColumnPseudo - is a pseudo column
             * </UL>
             * </OL>
             * <p>The COLUMN_SIZE column represents the specified column size for the given column.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. Null is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getVersionColumns(catalog: string, schema: string, table: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the given table's primary key columns.  They
             * are ordered by COLUMN_NAME.
             * <P>Each primary key column description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} table catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} table schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} table name
             * <LI><B>COLUMN_NAME</B> String {@code =>} column name
             * <LI><B>KEY_SEQ</B> short {@code =>} sequence number within primary key( a value
             * of 1 represents the first column of the primary key, a value of 2 would
             * represent the second column within the primary key).
             * <LI><B>PK_NAME</B> String {@code =>} primary key name (may be <code>null</code>)
             * </OL>
             */
            // @ts-ignore
             getPrimaryKeys(catalog: string, schema: string, table: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the primary key columns that are
             * referenced by the given table's foreign key columns (the primary keys
             * imported by a table).  They are ordered by PKTABLE_CAT,
             * PKTABLE_SCHEM, PKTABLE_NAME, and KEY_SEQ.
             * <P>Each primary key column description has the following columns:
             * <OL>
             * <LI><B>PKTABLE_CAT</B> String {@code =>} primary key table catalog
             * being imported (may be <code>null</code>)
             * <LI><B>PKTABLE_SCHEM</B> String {@code =>} primary key table schema
             * being imported (may be <code>null</code>)
             * <LI><B>PKTABLE_NAME</B> String {@code =>} primary key table name
             * being imported
             * <LI><B>PKCOLUMN_NAME</B> String {@code =>} primary key column name
             * being imported
             * <LI><B>FKTABLE_CAT</B> String {@code =>} foreign key table catalog (may be <code>null</code>)
             * <LI><B>FKTABLE_SCHEM</B> String {@code =>} foreign key table schema (may be <code>null</code>)
             * <LI><B>FKTABLE_NAME</B> String {@code =>} foreign key table name
             * <LI><B>FKCOLUMN_NAME</B> String {@code =>} foreign key column name
             * <LI><B>KEY_SEQ</B> short {@code =>} sequence number within a foreign key( a value
             * of 1 represents the first column of the foreign key, a value of 2 would
             * represent the second column within the foreign key).
             * <LI><B>UPDATE_RULE</B> short {@code =>} What happens to a
             * foreign key when the primary key is updated:
             * <UL>
             * <LI> importedNoAction - do not allow update of primary
             * key if it has been imported
             * <LI> importedKeyCascade - change imported key to agree
             * with primary key update
             * <LI> importedKeySetNull - change imported key to <code>NULL</code>
             * if its primary key has been updated
             * <LI> importedKeySetDefault - change imported key to default values
             * if its primary key has been updated
             * <LI> importedKeyRestrict - same as importedKeyNoAction
             * (for ODBC 2.x compatibility)
             * </UL>
             * <LI><B>DELETE_RULE</B> short {@code =>} What happens to
             * the foreign key when primary is deleted.
             * <UL>
             * <LI> importedKeyNoAction - do not allow delete of primary
             * key if it has been imported
             * <LI> importedKeyCascade - delete rows that import a deleted key
             * <LI> importedKeySetNull - change imported key to NULL if
             * its primary key has been deleted
             * <LI> importedKeyRestrict - same as importedKeyNoAction
             * (for ODBC 2.x compatibility)
             * <LI> importedKeySetDefault - change imported key to default if
             * its primary key has been deleted
             * </UL>
             * <LI><B>FK_NAME</B> String {@code =>} foreign key name (may be <code>null</code>)
             * <LI><B>PK_NAME</B> String {@code =>} primary key name (may be <code>null</code>)
             * <LI><B>DEFERRABILITY</B> short {@code =>} can the evaluation of foreign key
             * constraints be deferred until commit
             * <UL>
             * <LI> importedKeyInitiallyDeferred - see SQL92 for definition
             * <LI> importedKeyInitiallyImmediate - see SQL92 for definition
             * <LI> importedKeyNotDeferrable - see SQL92 for definition
             * </UL>
             * </OL>
             */
            // @ts-ignore
             getImportedKeys(catalog: string, schema: string, table: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the foreign key columns that reference the
             * given table's primary key columns (the foreign keys exported by a
             * table).  They are ordered by FKTABLE_CAT, FKTABLE_SCHEM,
             * FKTABLE_NAME, and KEY_SEQ.
             * <P>Each foreign key column description has the following columns:
             * <OL>
             * <LI><B>PKTABLE_CAT</B> String {@code =>} primary key table catalog (may be <code>null</code>)
             * <LI><B>PKTABLE_SCHEM</B> String {@code =>} primary key table schema (may be <code>null</code>)
             * <LI><B>PKTABLE_NAME</B> String {@code =>} primary key table name
             * <LI><B>PKCOLUMN_NAME</B> String {@code =>} primary key column name
             * <LI><B>FKTABLE_CAT</B> String {@code =>} foreign key table catalog (may be <code>null</code>)
             * being exported (may be <code>null</code>)
             * <LI><B>FKTABLE_SCHEM</B> String {@code =>} foreign key table schema (may be <code>null</code>)
             * being exported (may be <code>null</code>)
             * <LI><B>FKTABLE_NAME</B> String {@code =>} foreign key table name
             * being exported
             * <LI><B>FKCOLUMN_NAME</B> String {@code =>} foreign key column name
             * being exported
             * <LI><B>KEY_SEQ</B> short {@code =>} sequence number within foreign key( a value
             * of 1 represents the first column of the foreign key, a value of 2 would
             * represent the second column within the foreign key).
             * <LI><B>UPDATE_RULE</B> short {@code =>} What happens to
             * foreign key when primary is updated:
             * <UL>
             * <LI> importedNoAction - do not allow update of primary
             * key if it has been imported
             * <LI> importedKeyCascade - change imported key to agree
             * with primary key update
             * <LI> importedKeySetNull - change imported key to <code>NULL</code> if
             * its primary key has been updated
             * <LI> importedKeySetDefault - change imported key to default values
             * if its primary key has been updated
             * <LI> importedKeyRestrict - same as importedKeyNoAction
             * (for ODBC 2.x compatibility)
             * </UL>
             * <LI><B>DELETE_RULE</B> short {@code =>} What happens to
             * the foreign key when primary is deleted.
             * <UL>
             * <LI> importedKeyNoAction - do not allow delete of primary
             * key if it has been imported
             * <LI> importedKeyCascade - delete rows that import a deleted key
             * <LI> importedKeySetNull - change imported key to <code>NULL</code> if
             * its primary key has been deleted
             * <LI> importedKeyRestrict - same as importedKeyNoAction
             * (for ODBC 2.x compatibility)
             * <LI> importedKeySetDefault - change imported key to default if
             * its primary key has been deleted
             * </UL>
             * <LI><B>FK_NAME</B> String {@code =>} foreign key name (may be <code>null</code>)
             * <LI><B>PK_NAME</B> String {@code =>} primary key name (may be <code>null</code>)
             * <LI><B>DEFERRABILITY</B> short {@code =>} can the evaluation of foreign key
             * constraints be deferred until commit
             * <UL>
             * <LI> importedKeyInitiallyDeferred - see SQL92 for definition
             * <LI> importedKeyInitiallyImmediate - see SQL92 for definition
             * <LI> importedKeyNotDeferrable - see SQL92 for definition
             * </UL>
             * </OL>
             */
            // @ts-ignore
             getExportedKeys(catalog: string, schema: string, table: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the foreign key columns in the given foreign key
             * table that reference the primary key or the columns representing a unique constraint of the  parent table (could be the same or a different table).
             * The number of columns returned from the parent table must match the number of
             * columns that make up the foreign key.  They
             * are ordered by FKTABLE_CAT, FKTABLE_SCHEM, FKTABLE_NAME, and
             * KEY_SEQ.
             * <P>Each foreign key column description has the following columns:
             * <OL>
             * <LI><B>PKTABLE_CAT</B> String {@code =>} parent key table catalog (may be <code>null</code>)
             * <LI><B>PKTABLE_SCHEM</B> String {@code =>} parent key table schema (may be <code>null</code>)
             * <LI><B>PKTABLE_NAME</B> String {@code =>} parent key table name
             * <LI><B>PKCOLUMN_NAME</B> String {@code =>} parent key column name
             * <LI><B>FKTABLE_CAT</B> String {@code =>} foreign key table catalog (may be <code>null</code>)
             * being exported (may be <code>null</code>)
             * <LI><B>FKTABLE_SCHEM</B> String {@code =>} foreign key table schema (may be <code>null</code>)
             * being exported (may be <code>null</code>)
             * <LI><B>FKTABLE_NAME</B> String {@code =>} foreign key table name
             * being exported
             * <LI><B>FKCOLUMN_NAME</B> String {@code =>} foreign key column name
             * being exported
             * <LI><B>KEY_SEQ</B> short {@code =>} sequence number within foreign key( a value
             * of 1 represents the first column of the foreign key, a value of 2 would
             * represent the second column within the foreign key).
             * <LI><B>UPDATE_RULE</B> short {@code =>} What happens to
             * foreign key when parent key is updated:
             * <UL>
             * <LI> importedNoAction - do not allow update of parent
             * key if it has been imported
             * <LI> importedKeyCascade - change imported key to agree
             * with parent key update
             * <LI> importedKeySetNull - change imported key to <code>NULL</code> if
             * its parent key has been updated
             * <LI> importedKeySetDefault - change imported key to default values
             * if its parent key has been updated
             * <LI> importedKeyRestrict - same as importedKeyNoAction
             * (for ODBC 2.x compatibility)
             * </UL>
             * <LI><B>DELETE_RULE</B> short {@code =>} What happens to
             * the foreign key when parent key is deleted.
             * <UL>
             * <LI> importedKeyNoAction - do not allow delete of parent
             * key if it has been imported
             * <LI> importedKeyCascade - delete rows that import a deleted key
             * <LI> importedKeySetNull - change imported key to <code>NULL</code> if
             * its primary key has been deleted
             * <LI> importedKeyRestrict - same as importedKeyNoAction
             * (for ODBC 2.x compatibility)
             * <LI> importedKeySetDefault - change imported key to default if
             * its parent key has been deleted
             * </UL>
             * <LI><B>FK_NAME</B> String {@code =>} foreign key name (may be <code>null</code>)
             * <LI><B>PK_NAME</B> String {@code =>} parent key name (may be <code>null</code>)
             * <LI><B>DEFERRABILITY</B> short {@code =>} can the evaluation of foreign key
             * constraints be deferred until commit
             * <UL>
             * <LI> importedKeyInitiallyDeferred - see SQL92 for definition
             * <LI> importedKeyInitiallyImmediate - see SQL92 for definition
             * <LI> importedKeyNotDeferrable - see SQL92 for definition
             * </UL>
             * </OL>
             */
            // @ts-ignore
             getCrossReference(parentCatalog: string, parentSchema: string, parentTable: string, foreignCatalog: string, foreignSchema: string, foreignTable: string): java.sql.ResultSet;
            /**
             * Retrieves a description of all the data types supported by
             * this database. They are ordered by DATA_TYPE and then by how
             * closely the data type maps to the corresponding JDBC SQL type.
             * <P>If the database supports SQL distinct types, then getTypeInfo() will return
             * a single row with a TYPE_NAME of DISTINCT and a DATA_TYPE of Types.DISTINCT.
             * If the database supports SQL structured types, then getTypeInfo() will return
             * a single row with a TYPE_NAME of STRUCT and a DATA_TYPE of Types.STRUCT.
             * <P>If SQL distinct or structured types are supported, then information on the
             * individual types may be obtained from the getUDTs() method.
             * <P>Each type description has the following columns:
             * <OL>
             * <LI><B>TYPE_NAME</B> String {@code =>} Type name
             * <LI><B>DATA_TYPE</B> int {@code =>} SQL data type from java.sql.Types
             * <LI><B>PRECISION</B> int {@code =>} maximum precision
             * <LI><B>LITERAL_PREFIX</B> String {@code =>} prefix used to quote a literal
             * (may be <code>null</code>)
             * <LI><B>LITERAL_SUFFIX</B> String {@code =>} suffix used to quote a literal
             * (may be <code>null</code>)
             * <LI><B>CREATE_PARAMS</B> String {@code =>} parameters used in creating
             * the type (may be <code>null</code>)
             * <LI><B>NULLABLE</B> short {@code =>} can you use NULL for this type.
             * <UL>
             * <LI> typeNoNulls - does not allow NULL values
             * <LI> typeNullable - allows NULL values
             * <LI> typeNullableUnknown - nullability unknown
             * </UL>
             * <LI><B>CASE_SENSITIVE</B> boolean{@code =>} is it case sensitive.
             * <LI><B>SEARCHABLE</B> short {@code =>} can you use "WHERE" based on this type:
             * <UL>
             * <LI> typePredNone - No support
             * <LI> typePredChar - Only supported with WHERE .. LIKE
             * <LI> typePredBasic - Supported except for WHERE .. LIKE
             * <LI> typeSearchable - Supported for all WHERE ..
             * </UL>
             * <LI><B>UNSIGNED_ATTRIBUTE</B> boolean {@code =>} is it unsigned.
             * <LI><B>FIXED_PREC_SCALE</B> boolean {@code =>} can it be a money value.
             * <LI><B>AUTO_INCREMENT</B> boolean {@code =>} can it be used for an
             * auto-increment value.
             * <LI><B>LOCAL_TYPE_NAME</B> String {@code =>} localized version of type name
             * (may be <code>null</code>)
             * <LI><B>MINIMUM_SCALE</B> short {@code =>} minimum scale supported
             * <LI><B>MAXIMUM_SCALE</B> short {@code =>} maximum scale supported
             * <LI><B>SQL_DATA_TYPE</B> int {@code =>} unused
             * <LI><B>SQL_DATETIME_SUB</B> int {@code =>} unused
             * <LI><B>NUM_PREC_RADIX</B> int {@code =>} usually 2 or 10
             * </OL>
             * <p>The PRECISION column represents the maximum column size that the server supports for the given datatype.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. Null is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getTypeInfo(): java.sql.ResultSet;
            /**
             * Retrieves a description of the given table's indices and statistics. They are
             * ordered by NON_UNIQUE, TYPE, INDEX_NAME, and ORDINAL_POSITION.
             * <P>Each index column description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} table catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} table schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} table name
             * <LI><B>NON_UNIQUE</B> boolean {@code =>} Can index values be non-unique.
             * false when TYPE is tableIndexStatistic
             * <LI><B>INDEX_QUALIFIER</B> String {@code =>} index catalog (may be <code>null</code>);
             * <code>null</code> when TYPE is tableIndexStatistic
             * <LI><B>INDEX_NAME</B> String {@code =>} index name; <code>null</code> when TYPE is
             * tableIndexStatistic
             * <LI><B>TYPE</B> short {@code =>} index type:
             * <UL>
             * <LI> tableIndexStatistic - this identifies table statistics that are
             * returned in conjuction with a table's index descriptions
             * <LI> tableIndexClustered - this is a clustered index
             * <LI> tableIndexHashed - this is a hashed index
             * <LI> tableIndexOther - this is some other style of index
             * </UL>
             * <LI><B>ORDINAL_POSITION</B> short {@code =>} column sequence number
             * within index; zero when TYPE is tableIndexStatistic
             * <LI><B>COLUMN_NAME</B> String {@code =>} column name; <code>null</code> when TYPE is
             * tableIndexStatistic
             * <LI><B>ASC_OR_DESC</B> String {@code =>} column sort sequence, "A" {@code =>} ascending,
             * "D" {@code =>} descending, may be <code>null</code> if sort sequence is not supported;
             * <code>null</code> when TYPE is tableIndexStatistic
             * <LI><B>CARDINALITY</B> long {@code =>} When TYPE is tableIndexStatistic, then
             * this is the number of rows in the table; otherwise, it is the
             * number of unique values in the index.
             * <LI><B>PAGES</B> long {@code =>} When TYPE is  tableIndexStatisic then
             * this is the number of pages used for the table, otherwise it
             * is the number of pages used for the current index.
             * <LI><B>FILTER_CONDITION</B> String {@code =>} Filter condition, if any.
             * (may be <code>null</code>)
             * </OL>
             */
            // @ts-ignore
             getIndexInfo(catalog: string, schema: string, table: string, unique: boolean, approximate: boolean): java.sql.ResultSet;
            /**
             * Retrieves whether this database supports the given result set type.
             */
            // @ts-ignore
             supportsResultSetType(type: number): boolean;
            /**
             * Retrieves whether this database supports the given concurrency type
             * in combination with the given result set type.
             */
            // @ts-ignore
             supportsResultSetConcurrency(type: number, concurrency: number): boolean;
            /**
             * Retrieves whether for the given type of <code>ResultSet</code> object,
             * the result set's own updates are visible.
             */
            // @ts-ignore
             ownUpdatesAreVisible(type: number): boolean;
            /**
             * Retrieves whether a result set's own deletes are visible.
             */
            // @ts-ignore
             ownDeletesAreVisible(type: number): boolean;
            /**
             * Retrieves whether a result set's own inserts are visible.
             */
            // @ts-ignore
             ownInsertsAreVisible(type: number): boolean;
            /**
             * Retrieves whether updates made by others are visible.
             */
            // @ts-ignore
             othersUpdatesAreVisible(type: number): boolean;
            /**
             * Retrieves whether deletes made by others are visible.
             */
            // @ts-ignore
             othersDeletesAreVisible(type: number): boolean;
            /**
             * Retrieves whether inserts made by others are visible.
             */
            // @ts-ignore
             othersInsertsAreVisible(type: number): boolean;
            /**
             * Retrieves whether or not a visible row update can be detected by
             * calling the method <code>ResultSet.rowUpdated</code>.
             */
            // @ts-ignore
             updatesAreDetected(type: number): boolean;
            /**
             * Retrieves whether or not a visible row delete can be detected by
             * calling the method <code>ResultSet.rowDeleted</code>.  If the method
             * <code>deletesAreDetected</code> returns <code>false</code>, it means that
             * deleted rows are removed from the result set.
             */
            // @ts-ignore
             deletesAreDetected(type: number): boolean;
            /**
             * Retrieves whether or not a visible row insert can be detected
             * by calling the method <code>ResultSet.rowInserted</code>.
             */
            // @ts-ignore
             insertsAreDetected(type: number): boolean;
            /**
             * Retrieves whether this database supports batch updates.
             */
            // @ts-ignore
             supportsBatchUpdates(): boolean;
            /**
             * Retrieves a description of the user-defined types (UDTs) defined
             * in a particular schema.  Schema-specific UDTs may have type
             * <code>JAVA_OBJECT</code>, <code>STRUCT</code>,
             * or <code>DISTINCT</code>.
             * <P>Only types matching the catalog, schema, type name and type
             * criteria are returned.  They are ordered by <code>DATA_TYPE</code>,
             * <code>TYPE_CAT</code>, <code>TYPE_SCHEM</code>  and
             * <code>TYPE_NAME</code>.  The type name parameter may be a fully-qualified
             * name.  In this case, the catalog and schemaPattern parameters are
             * ignored.
             * <P>Each type description has the following columns:
             * <OL>
             * <LI><B>TYPE_CAT</B> String {@code =>} the type's catalog (may be <code>null</code>)
             * <LI><B>TYPE_SCHEM</B> String {@code =>} type's schema (may be <code>null</code>)
             * <LI><B>TYPE_NAME</B> String {@code =>} type name
             * <LI><B>CLASS_NAME</B> String {@code =>} Java class name
             * <LI><B>DATA_TYPE</B> int {@code =>} type value defined in java.sql.Types.
             * One of JAVA_OBJECT, STRUCT, or DISTINCT
             * <LI><B>REMARKS</B> String {@code =>} explanatory comment on the type
             * <LI><B>BASE_TYPE</B> short {@code =>} type code of the source type of a
             * DISTINCT type or the type that implements the user-generated
             * reference type of the SELF_REFERENCING_COLUMN of a structured
             * type as defined in java.sql.Types (<code>null</code> if DATA_TYPE is not
             * DISTINCT or not STRUCT with REFERENCE_GENERATION = USER_DEFINED)
             * </OL>
             * <P><B>Note:</B> If the driver does not support UDTs, an empty
             * result set is returned.
             */
            // @ts-ignore
             getUDTs(catalog: string, schemaPattern: string, typeNamePattern: string, types: number): java.sql.ResultSet;
            /**
             * Retrieves the connection that produced this metadata object.
             * <P>
             */
            // @ts-ignore
             getConnection(): java.sql.Connection;
            /**
             * Retrieves whether this database supports savepoints.
             */
            // @ts-ignore
             supportsSavepoints(): boolean;
            /**
             * Retrieves whether this database supports named parameters to callable
             * statements.
             */
            // @ts-ignore
             supportsNamedParameters(): boolean;
            /**
             * Retrieves whether it is possible to have multiple <code>ResultSet</code> objects
             * returned from a <code>CallableStatement</code> object
             * simultaneously.
             */
            // @ts-ignore
             supportsMultipleOpenResults(): boolean;
            /**
             * Retrieves whether auto-generated keys can be retrieved after
             * a statement has been executed
             */
            // @ts-ignore
             supportsGetGeneratedKeys(): boolean;
            /**
             * Retrieves a description of the user-defined type (UDT) hierarchies defined in a
             * particular schema in this database. Only the immediate super type/
             * sub type relationship is modeled.
             * <P>
             * Only supertype information for UDTs matching the catalog,
             * schema, and type name is returned. The type name parameter
             * may be a fully-qualified name. When the UDT name supplied is a
             * fully-qualified name, the catalog and schemaPattern parameters are
             * ignored.
             * <P>
             * If a UDT does not have a direct super type, it is not listed here.
             * A row of the <code>ResultSet</code> object returned by this method
             * describes the designated UDT and a direct supertype. A row has the following
             * columns:
             * <OL>
             * <LI><B>TYPE_CAT</B> String {@code =>} the UDT's catalog (may be <code>null</code>)
             * <LI><B>TYPE_SCHEM</B> String {@code =>} UDT's schema (may be <code>null</code>)
             * <LI><B>TYPE_NAME</B> String {@code =>} type name of the UDT
             * <LI><B>SUPERTYPE_CAT</B> String {@code =>} the direct super type's catalog
             * (may be <code>null</code>)
             * <LI><B>SUPERTYPE_SCHEM</B> String {@code =>} the direct super type's schema
             * (may be <code>null</code>)
             * <LI><B>SUPERTYPE_NAME</B> String {@code =>} the direct super type's name
             * </OL>
             * <P><B>Note:</B> If the driver does not support type hierarchies, an
             * empty result set is returned.
             */
            // @ts-ignore
             getSuperTypes(catalog: string, schemaPattern: string, typeNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the table hierarchies defined in a particular
             * schema in this database.
             * <P>Only supertable information for tables matching the catalog, schema
             * and table name are returned. The table name parameter may be a fully-
             * qualified name, in which case, the catalog and schemaPattern parameters
             * are ignored. If a table does not have a super table, it is not listed here.
             * Supertables have to be defined in the same catalog and schema as the
             * sub tables. Therefore, the type description does not need to include
             * this information for the supertable.
             * <P>Each type description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} the type's catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} type's schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} type name
             * <LI><B>SUPERTABLE_NAME</B> String {@code =>} the direct super type's name
             * </OL>
             * <P><B>Note:</B> If the driver does not support type hierarchies, an
             * empty result set is returned.
             */
            // @ts-ignore
             getSuperTables(catalog: string, schemaPattern: string, tableNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the given attribute of the given type
             * for a user-defined type (UDT) that is available in the given schema
             * and catalog.
             * <P>
             * Descriptions are returned only for attributes of UDTs matching the
             * catalog, schema, type, and attribute name criteria. They are ordered by
             * <code>TYPE_CAT</code>, <code>TYPE_SCHEM</code>,
             * <code>TYPE_NAME</code> and <code>ORDINAL_POSITION</code>. This description
             * does not contain inherited attributes.
             * <P>
             * The <code>ResultSet</code> object that is returned has the following
             * columns:
             * <OL>
             * <LI><B>TYPE_CAT</B> String {@code =>} type catalog (may be <code>null</code>)
             * <LI><B>TYPE_SCHEM</B> String {@code =>} type schema (may be <code>null</code>)
             * <LI><B>TYPE_NAME</B> String {@code =>} type name
             * <LI><B>ATTR_NAME</B> String {@code =>} attribute name
             * <LI><B>DATA_TYPE</B> int {@code =>} attribute type SQL type from java.sql.Types
             * <LI><B>ATTR_TYPE_NAME</B> String {@code =>} Data source dependent type name.
             * For a UDT, the type name is fully qualified. For a REF, the type name is
             * fully qualified and represents the target type of the reference type.
             * <LI><B>ATTR_SIZE</B> int {@code =>} column size.  For char or date
             * types this is the maximum number of characters; for numeric or
             * decimal types this is precision.
             * <LI><B>DECIMAL_DIGITS</B> int {@code =>} the number of fractional digits. Null is returned for data types where
             * DECIMAL_DIGITS is not applicable.
             * <LI><B>NUM_PREC_RADIX</B> int {@code =>} Radix (typically either 10 or 2)
             * <LI><B>NULLABLE</B> int {@code =>} whether NULL is allowed
             * <UL>
             * <LI> attributeNoNulls - might not allow NULL values
             * <LI> attributeNullable - definitely allows NULL values
             * <LI> attributeNullableUnknown - nullability unknown
             * </UL>
             * <LI><B>REMARKS</B> String {@code =>} comment describing column (may be <code>null</code>)
             * <LI><B>ATTR_DEF</B> String {@code =>} default value (may be <code>null</code>)
             * <LI><B>SQL_DATA_TYPE</B> int {@code =>} unused
             * <LI><B>SQL_DATETIME_SUB</B> int {@code =>} unused
             * <LI><B>CHAR_OCTET_LENGTH</B> int {@code =>} for char types the
             * maximum number of bytes in the column
             * <LI><B>ORDINAL_POSITION</B> int {@code =>} index of the attribute in the UDT
             * (starting at 1)
             * <LI><B>IS_NULLABLE</B> String  {@code =>} ISO rules are used to determine
             * the nullability for a attribute.
             * <UL>
             * <LI> YES           --- if the attribute can include NULLs
             * <LI> NO            --- if the attribute cannot include NULLs
             * <LI> empty string  --- if the nullability for the
             * attribute is unknown
             * </UL>
             * <LI><B>SCOPE_CATALOG</B> String {@code =>} catalog of table that is the
             * scope of a reference attribute (<code>null</code> if DATA_TYPE isn't REF)
             * <LI><B>SCOPE_SCHEMA</B> String {@code =>} schema of table that is the
             * scope of a reference attribute (<code>null</code> if DATA_TYPE isn't REF)
             * <LI><B>SCOPE_TABLE</B> String {@code =>} table name that is the scope of a
             * reference attribute (<code>null</code> if the DATA_TYPE isn't REF)
             * <LI><B>SOURCE_DATA_TYPE</B> short {@code =>} source type of a distinct type or user-generated
             * Ref type,SQL type from java.sql.Types (<code>null</code> if DATA_TYPE
             * isn't DISTINCT or user-generated REF)
             * </OL>
             */
            // @ts-ignore
             getAttributes(catalog: string, schemaPattern: string, typeNamePattern: string, attributeNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves whether this database supports the given result set holdability.
             */
            // @ts-ignore
             supportsResultSetHoldability(holdability: number): boolean;
            /**
             * Retrieves this database's default holdability for <code>ResultSet</code>
             * objects.
             */
            // @ts-ignore
             getResultSetHoldability(): number;
            /**
             * Retrieves the major version number of the underlying database.
             */
            // @ts-ignore
             getDatabaseMajorVersion(): number;
            /**
             * Retrieves the minor version number of the underlying database.
             */
            // @ts-ignore
             getDatabaseMinorVersion(): number;
            /**
             * Retrieves the major JDBC version number for this
             * driver.
             */
            // @ts-ignore
             getJDBCMajorVersion(): number;
            /**
             * Retrieves the minor JDBC version number for this
             * driver.
             */
            // @ts-ignore
             getJDBCMinorVersion(): number;
            /**
             * Indicates whether the SQLSTATE returned by <code>SQLException.getSQLState</code>
             * is X/Open (now known as Open Group) SQL CLI or SQL:2003.
             */
            // @ts-ignore
             getSQLStateType(): number;
            /**
             * Indicates whether updates made to a LOB are made on a copy or directly
             * to the LOB.
             */
            // @ts-ignore
             locatorsUpdateCopy(): boolean;
            /**
             * Retrieves whether this database supports statement pooling.
             */
            // @ts-ignore
             supportsStatementPooling(): boolean;
            /**
             * Indicates whether or not this data source supports the SQL <code>ROWID</code> type,
             * and if so  the lifetime for which a <code>RowId</code> object remains valid.
             * <p>
             * The returned int values have the following relationship:
             * <pre>{@code
             * ROWID_UNSUPPORTED < ROWID_VALID_OTHER < ROWID_VALID_TRANSACTION
             * < ROWID_VALID_SESSION < ROWID_VALID_FOREVER
             * }</pre>
             * so conditional logic such as
             * <pre>{@code
             * if (metadata.getRowIdLifetime() > DatabaseMetaData.ROWID_VALID_TRANSACTION)
             * }</pre>
             * can be used. Valid Forever means valid across all Sessions, and valid for
             * a Session means valid across all its contained Transactions.
             */
            // @ts-ignore
             getRowIdLifetime(): java.sql.RowIdLifetime;
            /**
             * Retrieves the schema names available in this database.  The results
             * are ordered by <code>TABLE_CATALOG</code> and
             * <code>TABLE_SCHEM</code>.
             * <P>The schema columns are:
             * <OL>
             * <LI><B>TABLE_SCHEM</B> String {@code =>} schema name
             * <LI><B>TABLE_CATALOG</B> String {@code =>} catalog name (may be <code>null</code>)
             * </OL>
             */
            // @ts-ignore
             getSchemas(catalog: string, schemaPattern: string): java.sql.ResultSet;
            /**
             * Retrieves whether this database supports invoking user-defined or vendor functions
             * using the stored procedure escape syntax.
             */
            // @ts-ignore
             supportsStoredFunctionsUsingCallSyntax(): boolean;
            /**
             * Retrieves whether a <code>SQLException</code> while autoCommit is <code>true</code> indicates
             * that all open ResultSets are closed, even ones that are holdable.  When a <code>SQLException</code> occurs while
             * autocommit is <code>true</code>, it is vendor specific whether the JDBC driver responds with a commit operation, a
             * rollback operation, or by doing neither a commit nor a rollback.  A potential result of this difference
             * is in whether or not holdable ResultSets are closed.
             */
            // @ts-ignore
             autoCommitFailureClosesAllResultSets(): boolean;
            /**
             * Retrieves a list of the client info properties
             * that the driver supports.  The result set contains the following columns
             * <ol>
             * <li><b>NAME</b> String{@code =>} The name of the client info property<br>
             * <li><b>MAX_LEN</b> int{@code =>} The maximum length of the value for the property<br>
             * <li><b>DEFAULT_VALUE</b> String{@code =>} The default value of the property<br>
             * <li><b>DESCRIPTION</b> String{@code =>} A description of the property.  This will typically
             * contain information as to where this property is
             * stored in the database.
             * </ol>
             * <p>
             * The <code>ResultSet</code> is sorted by the NAME column
             * <p>
             */
            // @ts-ignore
             getClientInfoProperties(): java.sql.ResultSet;
            /**
             * Retrieves a description of the  system and user functions available
             * in the given catalog.
             * <P>
             * Only system and user function descriptions matching the schema and
             * function name criteria are returned.  They are ordered by
             * <code>FUNCTION_CAT</code>, <code>FUNCTION_SCHEM</code>,
             * <code>FUNCTION_NAME</code> and
             * <code>SPECIFIC_ NAME</code>.
             * <P>Each function description has the the following columns:
             * <OL>
             * <LI><B>FUNCTION_CAT</B> String {@code =>} function catalog (may be <code>null</code>)
             * <LI><B>FUNCTION_SCHEM</B> String {@code =>} function schema (may be <code>null</code>)
             * <LI><B>FUNCTION_NAME</B> String {@code =>} function name.  This is the name
             * used to invoke the function
             * <LI><B>REMARKS</B> String {@code =>} explanatory comment on the function
             * <LI><B>FUNCTION_TYPE</B> short {@code =>} kind of function:
             * <UL>
             * <LI>functionResultUnknown - Cannot determine if a return value
             * or table will be returned
             * <LI> functionNoTable- Does not return a table
             * <LI> functionReturnsTable - Returns a table
             * </UL>
             * <LI><B>SPECIFIC_NAME</B> String  {@code =>} the name which uniquely identifies
             * this function within its schema.  This is a user specified, or DBMS
             * generated, name that may be different then the <code>FUNCTION_NAME</code>
             * for example with overload functions
             * </OL>
             * <p>
             * A user may not have permission to execute any of the functions that are
             * returned by <code>getFunctions</code>
             */
            // @ts-ignore
             getFunctions(catalog: string, schemaPattern: string, functionNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the given catalog's system or user
             * function parameters and return type.
             * <P>Only descriptions matching the schema,  function and
             * parameter name criteria are returned. They are ordered by
             * <code>FUNCTION_CAT</code>, <code>FUNCTION_SCHEM</code>,
             * <code>FUNCTION_NAME</code> and
             * <code>SPECIFIC_ NAME</code>. Within this, the return value,
             * if any, is first. Next are the parameter descriptions in call
             * order. The column descriptions follow in column number order.
             * <P>Each row in the <code>ResultSet</code>
             * is a parameter description, column description or
             * return type description with the following fields:
             * <OL>
             * <LI><B>FUNCTION_CAT</B> String {@code =>} function catalog (may be <code>null</code>)
             * <LI><B>FUNCTION_SCHEM</B> String {@code =>} function schema (may be <code>null</code>)
             * <LI><B>FUNCTION_NAME</B> String {@code =>} function name.  This is the name
             * used to invoke the function
             * <LI><B>COLUMN_NAME</B> String {@code =>} column/parameter name
             * <LI><B>COLUMN_TYPE</B> Short {@code =>} kind of column/parameter:
             * <UL>
             * <LI> functionColumnUnknown - nobody knows
             * <LI> functionColumnIn - IN parameter
             * <LI> functionColumnInOut - INOUT parameter
             * <LI> functionColumnOut - OUT parameter
             * <LI> functionColumnReturn - function return value
             * <LI> functionColumnResult - Indicates that the parameter or column
             * is a column in the <code>ResultSet</code>
             * </UL>
             * <LI><B>DATA_TYPE</B> int {@code =>} SQL type from java.sql.Types
             * <LI><B>TYPE_NAME</B> String {@code =>} SQL type name, for a UDT type the
             * type name is fully qualified
             * <LI><B>PRECISION</B> int {@code =>} precision
             * <LI><B>LENGTH</B> int {@code =>} length in bytes of data
             * <LI><B>SCALE</B> short {@code =>} scale -  null is returned for data types where
             * SCALE is not applicable.
             * <LI><B>RADIX</B> short {@code =>} radix
             * <LI><B>NULLABLE</B> short {@code =>} can it contain NULL.
             * <UL>
             * <LI> functionNoNulls - does not allow NULL values
             * <LI> functionNullable - allows NULL values
             * <LI> functionNullableUnknown - nullability unknown
             * </UL>
             * <LI><B>REMARKS</B> String {@code =>} comment describing column/parameter
             * <LI><B>CHAR_OCTET_LENGTH</B> int  {@code =>} the maximum length of binary
             * and character based parameters or columns.  For any other datatype the returned value
             * is a NULL
             * <LI><B>ORDINAL_POSITION</B> int  {@code =>} the ordinal position, starting
             * from 1, for the input and output parameters. A value of 0
             * is returned if this row describes the function's return value.
             * For result set columns, it is the
             * ordinal position of the column in the result set starting from 1.
             * <LI><B>IS_NULLABLE</B> String  {@code =>} ISO rules are used to determine
             * the nullability for a parameter or column.
             * <UL>
             * <LI> YES           --- if the parameter or column can include NULLs
             * <LI> NO            --- if the parameter or column  cannot include NULLs
             * <LI> empty string  --- if the nullability for the
             * parameter  or column is unknown
             * </UL>
             * <LI><B>SPECIFIC_NAME</B> String  {@code =>} the name which uniquely identifies
             * this function within its schema.  This is a user specified, or DBMS
             * generated, name that may be different then the <code>FUNCTION_NAME</code>
             * for example with overload functions
             * </OL>
             * <p>The PRECISION column represents the specified column size for the given
             * parameter or column.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. Null is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getFunctionColumns(catalog: string, schemaPattern: string, functionNamePattern: string, columnNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves a description of the pseudo or hidden columns available
             * in a given table within the specified catalog and schema.
             * Pseudo or hidden columns may not always be stored within
             * a table and are not visible in a ResultSet unless they are
             * specified in the query's outermost SELECT list. Pseudo or hidden
             * columns may not necessarily be able to be modified. If there are
             * no pseudo or hidden columns, an empty ResultSet is returned.
             * <P>Only column descriptions matching the catalog, schema, table
             * and column name criteria are returned.  They are ordered by
             * <code>TABLE_CAT</code>,<code>TABLE_SCHEM</code>, <code>TABLE_NAME</code>
             * and <code>COLUMN_NAME</code>.
             * <P>Each column description has the following columns:
             * <OL>
             * <LI><B>TABLE_CAT</B> String {@code =>} table catalog (may be <code>null</code>)
             * <LI><B>TABLE_SCHEM</B> String {@code =>} table schema (may be <code>null</code>)
             * <LI><B>TABLE_NAME</B> String {@code =>} table name
             * <LI><B>COLUMN_NAME</B> String {@code =>} column name
             * <LI><B>DATA_TYPE</B> int {@code =>} SQL type from java.sql.Types
             * <LI><B>COLUMN_SIZE</B> int {@code =>} column size.
             * <LI><B>DECIMAL_DIGITS</B> int {@code =>} the number of fractional digits. Null is returned for data types where
             * DECIMAL_DIGITS is not applicable.
             * <LI><B>NUM_PREC_RADIX</B> int {@code =>} Radix (typically either 10 or 2)
             * <LI><B>COLUMN_USAGE</B> String {@code =>} The allowed usage for the column.  The
             * value returned will correspond to the enum name returned by {@link PseudoColumnUsage#name PseudoColumnUsage.name()}
             * <LI><B>REMARKS</B> String {@code =>} comment describing column (may be <code>null</code>)
             * <LI><B>CHAR_OCTET_LENGTH</B> int {@code =>} for char types the
             * maximum number of bytes in the column
             * <LI><B>IS_NULLABLE</B> String  {@code =>} ISO rules are used to determine the nullability for a column.
             * <UL>
             * <LI> YES           --- if the column can include NULLs
             * <LI> NO            --- if the column cannot include NULLs
             * <LI> empty string  --- if the nullability for the column is unknown
             * </UL>
             * </OL>
             * <p>The COLUMN_SIZE column specifies the column size for the given column.
             * For numeric data, this is the maximum precision.  For character data, this is the length in characters.
             * For datetime datatypes, this is the length in characters of the String representation (assuming the
             * maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype,
             * this is the length in bytes. Null is returned for data types where the
             * column size is not applicable.
             */
            // @ts-ignore
             getPseudoColumns(catalog: string, schemaPattern: string, tableNamePattern: string, columnNamePattern: string): java.sql.ResultSet;
            /**
             * Retrieves whether a generated key will always be returned if the column
             * name(s) or index(es) specified for the auto generated key column(s)
             * are valid and the statement succeeds.  The key that is returned may or
             * may not be based on the column(s) for the auto generated key.
             * Consult your JDBC driver documentation for additional details.
             */
            // @ts-ignore
             generatedKeyAlwaysReturned(): boolean;
            /**
             * Retrieves the maximum number of bytes this database allows for
             * the logical size for a {@code LOB}.
             * <p>
             * The default implementation will return {@code 0}
             */
            // @ts-ignore
             getMaxLogicalLobSize(): number;
            /**
             * Retrieves whether this database supports REF CURSOR.
             * <p>
             * The default implementation will return {@code false}
             */
            // @ts-ignore
             supportsRefCursors(): boolean;
        }
    }
}
