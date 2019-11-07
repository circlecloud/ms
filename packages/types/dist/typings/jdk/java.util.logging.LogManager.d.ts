declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class LogManager extends java.lang.Object {
                /**
                 * Protected constructor.  This is protected so that container applications
                 * (such as J2EE containers) can subclass the object.  It is non-public as
                 * it is intended that there only be one LogManager object, whose value is
                 * retrieved by calling LogManager.getLogManager.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static LOGGING_MXBEAN_NAME: string;
                /**
                 * Returns the global LogManager object.
                 */
                // @ts-ignore
                public static getLogManager(): java.util.logging.LogManager;
                /**
                 * Adds an event listener to be invoked when the logging
                 * properties are re-read. Adding multiple instances of
                 * the same event Listener results in multiple entries
                 * in the property event listener table.
                 * <p><b>WARNING:</b> This method is omitted from this class in all subset
                 * Profiles of Java SE that do not include the {@code java.beans} package.
                 * </p>
                 */
                // @ts-ignore
                public addPropertyChangeListener(l: java.beans.PropertyChangeListener): void;
                /**
                 * Removes an event listener for property change events.
                 * If the same listener instance has been added to the listener table
                 * through multiple invocations of <CODE>addPropertyChangeListener</CODE>,
                 * then an equivalent number of
                 * <CODE>removePropertyChangeListener</CODE> invocations are required to remove
                 * all instances of that listener from the listener table.
                 * <P>
                 * Returns silently if the given listener is not found.
                 * <p><b>WARNING:</b> This method is omitted from this class in all subset
                 * Profiles of Java SE that do not include the {@code java.beans} package.
                 * </p>
                 */
                // @ts-ignore
                public removePropertyChangeListener(l: java.beans.PropertyChangeListener): void;
                /**
                 * Add a named logger.  This does nothing and returns false if a logger
                 * with the same name is already registered.
                 * <p>
                 * The Logger factory methods call this method to register each
                 * newly created Logger.
                 * <p>
                 * The application should retain its own reference to the Logger
                 * object to avoid it being garbage collected.  The LogManager
                 * may only retain a weak reference.
                 */
                // @ts-ignore
                public addLogger(logger: java.util.logging.Logger): boolean;
                /**
                 * Method to find a named logger.
                 * <p>
                 * Note that since untrusted code may create loggers with
                 * arbitrary names this method should not be relied on to
                 * find Loggers for security sensitive logging.
                 * It is also important to note that the Logger associated with the
                 * String {@code name} may be garbage collected at any time if there
                 * is no strong reference to the Logger. The caller of this method
                 * must check the return value for null in order to properly handle
                 * the case where the Logger has been garbage collected.
                 * <p>
                 */
                // @ts-ignore
                public getLogger(name: string): java.util.logging.Logger;
                /**
                 * Get an enumeration of known logger names.
                 * <p>
                 * Note:  Loggers may be added dynamically as new classes are loaded.
                 * This method only reports on the loggers that are currently registered.
                 * It is also important to note that this method only returns the name
                 * of a Logger, not a strong reference to the Logger itself.
                 * The returned String does nothing to prevent the Logger from being
                 * garbage collected. In particular, if the returned name is passed
                 * to {@code LogManager.getLogger()}, then the caller must check the
                 * return value from {@code LogManager.getLogger()} for null to properly
                 * handle the case where the Logger has been garbage collected in the
                 * time since its name was returned by this method.
                 * <p>
                 */
                // @ts-ignore
                public getLoggerNames(): java.util.Enumeration;
                /**
                 * Reinitialize the logging properties and reread the logging configuration.
                 * <p>
                 * The same rules are used for locating the configuration properties
                 * as are used at startup.  So normally the logging properties will
                 * be re-read from the same file that was used at startup.
                 * <P>
                 * Any log level definitions in the new configuration file will be
                 * applied using Logger.setLevel(), if the target Logger exists.
                 * <p>
                 * A PropertyChangeEvent will be fired after the properties are read.
                 */
                // @ts-ignore
                public readConfiguration(): void;
                /**
                 * Reset the logging configuration.
                 * <p>
                 * For all named loggers, the reset operation removes and closes
                 * all Handlers and (except for the root logger) sets the level
                 * to null.  The root logger's level is set to Level.INFO.
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Reinitialize the logging properties and reread the logging configuration
                 * from the given stream, which should be in java.util.Properties format.
                 * A PropertyChangeEvent will be fired after the properties are read.
                 * <p>
                 * Any log level definitions in the new configuration file will be
                 * applied using Logger.setLevel(), if the target Logger exists.
                 */
                // @ts-ignore
                public readConfiguration(ins: java.io.InputStream): void;
                /**
                 * Get the value of a logging property.
                 * The method returns null if the property is not found.
                 */
                // @ts-ignore
                public getProperty(name: string): string;
                /**
                 * Check that the current context is trusted to modify the logging
                 * configuration.  This requires LoggingPermission("control").
                 * <p>
                 * If the check fails we throw a SecurityException, otherwise
                 * we return normally.
                 */
                // @ts-ignore
                public checkAccess(): void;
                /**
                 * Returns <tt>LoggingMXBean</tt> for managing loggers.
                 * An alternative way to manage loggers is through the
                 * {@link java.lang.management.PlatformLoggingMXBean} interface
                 * that can be obtained by calling:
                 * <pre>
                 * PlatformLoggingMXBean logging = {@link java.lang.management.ManagementFactory#getPlatformMXBean(Class)
                 * ManagementFactory.getPlatformMXBean}(PlatformLoggingMXBean.class);
                 * </pre>
                 */
                // @ts-ignore
                public static getLoggingMXBean(): java.util.logging.LoggingMXBean;
            }
        }
    }
}
