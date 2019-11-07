// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
         class DriverManager extends java.lang.Object {
            /**
             * Retrieves the log writer.
             * The <code>getLogWriter</code> and <code>setLogWriter</code>
             * methods should be used instead
             * of the <code>get/setlogStream</code> methods, which are deprecated.
             */
            // @ts-ignore
            public static getLogWriter(): java.io.PrintWriter;
            /**
             * Sets the logging/tracing <code>PrintWriter</code> object
             * that is used by the <code>DriverManager</code> and all drivers.
             * <P>
             * There is a minor versioning problem created by the introduction
             * of the method <code>setLogWriter</code>.  The
             * method <code>setLogWriter</code> cannot create a <code>PrintStream</code> object
             * that will be returned by <code>getLogStream</code>---the Java platform does
             * not provide a backward conversion.  As a result, a new application
             * that uses <code>setLogWriter</code> and also uses a JDBC 1.0 driver that uses
             * <code>getLogStream</code> will likely not see debugging information written
             * by that driver.
             * <P>
             * Starting with the Java 2 SDK, Standard Edition, version 1.3 release, this method checks
             * to see that there is an <code>SQLPermission</code> object before setting
             * the logging stream.  If a <code>SecurityManager</code> exists and its
             * <code>checkPermission</code> method denies setting the log writer, this
             * method throws a <code>java.lang.SecurityException</code>.
             */
            // @ts-ignore
            public static setLogWriter(out: java.io.PrintWriter): void;
            /**
             * Attempts to establish a connection to the given database URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             * <p>
             * <B>Note:</B> If a property is specified as part of the {@code url} and
             * is also specified in the {@code Properties} object, it is
             * implementation-defined as to which value will take precedence.
             * For maximum portability, an application should only specify a
             * property once.
             */
            // @ts-ignore
            public static getConnection(url: string, info: java.util.Properties): java.sql.Connection;
            /**
             * Attempts to establish a connection to the given database URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             * <p>
             * <B>Note:</B> If the {@code user} or {@code password} property are
             * also specified as part of the {@code url}, it is
             * implementation-defined as to which value will take precedence.
             * For maximum portability, an application should only specify a
             * property once.
             */
            // @ts-ignore
            public static getConnection(url: string, user: string, password: string): java.sql.Connection;
            /**
             * Attempts to establish a connection to the given database URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             */
            // @ts-ignore
            public static getConnection(url: string): java.sql.Connection;
            /**
             * Attempts to locate a driver that understands the given URL.
             * The <code>DriverManager</code> attempts to select an appropriate driver from
             * the set of registered JDBC drivers.
             */
            // @ts-ignore
            public static getDriver(url: string): java.sql.Driver;
            /**
             * Registers the given driver with the {@code DriverManager}.
             * A newly-loaded driver class should call
             * the method {@code registerDriver} to make itself
             * known to the {@code DriverManager}. If the driver is currently
             * registered, no action is taken.
             */
            // @ts-ignore
            public static registerDriver(driver: java.sql.Driver): void;
            /**
             * Registers the given driver with the {@code DriverManager}.
             * A newly-loaded driver class should call
             * the method {@code registerDriver} to make itself
             * known to the {@code DriverManager}. If the driver is currently
             * registered, no action is taken.
             */
            // @ts-ignore
            public static registerDriver(driver: java.sql.Driver, da: java.sql.DriverAction): void;
            /**
             * Removes the specified driver from the {@code DriverManager}'s list of
             * registered drivers.
             * <p>
             * If a {@code null} value is specified for the driver to be removed, then no
             * action is taken.
             * <p>
             * If a security manager exists and its {@code checkPermission} denies
             * permission, then a {@code SecurityException} will be thrown.
             * <p>
             * If the specified driver is not found in the list of registered drivers,
             * then no action is taken.  If the driver was found, it will be removed
             * from the list of registered drivers.
             * <p>
             * If a {@code DriverAction} instance was specified when the JDBC driver was
             * registered, its deregister method will be called
             * prior to the driver being removed from the list of registered drivers.
             */
            // @ts-ignore
            public static deregisterDriver(driver: java.sql.Driver): void;
            /**
             * Retrieves an Enumeration with all of the currently loaded JDBC drivers
             * to which the current caller has access.
             * <P><B>Note:</B> The classname of a driver can be found using
             * <CODE>d.getClass().getName()</CODE>
             */
            // @ts-ignore
            public static getDrivers(): java.util.Enumeration;
            /**
             * Sets the maximum time in seconds that a driver will wait
             * while attempting to connect to a database once the driver has
             * been identified.
             */
            // @ts-ignore
            public static setLoginTimeout(seconds: number): void;
            /**
             * Gets the maximum time in seconds that a driver can wait
             * when attempting to log in to a database.
             */
            // @ts-ignore
            public static getLoginTimeout(): number;
            /**
             * Sets the logging/tracing PrintStream that is used
             * by the <code>DriverManager</code>
             * and all drivers.
             * <P>
             * In the Java 2 SDK, Standard Edition, version 1.3 release, this method checks
             * to see that there is an <code>SQLPermission</code> object before setting
             * the logging stream.  If a <code>SecurityManager</code> exists and its
             * <code>checkPermission</code> method denies setting the log writer, this
             * method throws a <code>java.lang.SecurityException</code>.
             */
            // @ts-ignore
            public static setLogStream(out: java.io.PrintStream): void;
            /**
             * Retrieves the logging/tracing PrintStream that is used by the <code>DriverManager</code>
             * and all drivers.
             */
            // @ts-ignore
            public static getLogStream(): java.io.PrintStream;
            /**
             * Prints a message to the current JDBC log stream.
             */
            // @ts-ignore
            public static println(message: string): void;
        }
    }
}
