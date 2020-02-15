declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Driver {
            /**
             * Attempts to make a database connection to the given URL.
             * The driver should return "null" if it realizes it is the wrong kind
             * of driver to connect to the given URL.  This will be common, as when
             * the JDBC driver manager is asked to connect to a given URL it passes
             * the URL to each loaded driver in turn.
             * <P>The driver should throw an <code>SQLException</code> if it is the right
             * driver to connect to the given URL but has trouble connecting to
             * the database.
             * <P>The {@code Properties} argument can be used to pass
             * arbitrary string tag/value pairs as connection arguments.
             * Normally at least "user" and "password" properties should be
             * included in the {@code Properties} object.
             * <p>
             * <B>Note:</B> If a property is specified as part of the {@code url} and
             * is also specified in the {@code Properties} object, it is
             * implementation-defined as to which value will take precedence. For
             * maximum portability, an application should only specify a property once.
             */
            // @ts-ignore
             connect(url: string, info: java.util.Properties): java.sql.Connection;
            /**
             * Retrieves whether the driver thinks that it can open a connection
             * to the given URL.  Typically drivers will return <code>true</code> if they
             * understand the sub-protocol specified in the URL and <code>false</code> if
             * they do not.
             */
            // @ts-ignore
             acceptsURL(url: string): boolean;
            /**
             * Gets information about the possible properties for this driver.
             * <P>
             * The <code>getPropertyInfo</code> method is intended to allow a generic
             * GUI tool to discover what properties it should prompt
             * a human for in order to get
             * enough information to connect to a database.  Note that depending on
             * the values the human has supplied so far, additional values may become
             * necessary, so it may be necessary to iterate though several calls
             * to the <code>getPropertyInfo</code> method.
             */
            // @ts-ignore
             getPropertyInfo(url: string, info: java.util.Properties): java.sql.DriverPropertyInfo[];
            /**
             * Retrieves the driver's major version number. Initially this should be 1.
             */
            // @ts-ignore
             getMajorVersion(): number;
            /**
             * Gets the driver's minor version number. Initially this should be 0.
             */
            // @ts-ignore
             getMinorVersion(): number;
            /**
             * Reports whether this driver is a genuine JDBC
             * Compliant&trade; driver.
             * A driver may only report <code>true</code> here if it passes the JDBC
             * compliance tests; otherwise it is required to return <code>false</code>.
             * <P>
             * JDBC compliance requires full support for the JDBC API and full support
             * for SQL 92 Entry Level.  It is expected that JDBC compliant drivers will
             * be available for all the major commercial databases.
             * <P>
             * This method is not intended to encourage the development of non-JDBC
             * compliant drivers, but is a recognition of the fact that some vendors
             * are interested in using the JDBC API and framework for lightweight
             * databases that do not support full database functionality, or for
             * special databases such as document information retrieval where a SQL
             * implementation may not be feasible.
             */
            // @ts-ignore
             jdbcCompliant(): boolean;
            /**
             * Return the parent Logger of all the Loggers used by this driver. This
             * should be the Logger farthest from the root Logger that is
             * still an ancestor of all of the Loggers used by this driver. Configuring
             * this Logger will affect all of the log messages generated by the driver.
             * In the worst case, this may be the root Logger.
             */
            // @ts-ignore
             getParentLogger(): java.util.logging.Logger;
        }
    }
}