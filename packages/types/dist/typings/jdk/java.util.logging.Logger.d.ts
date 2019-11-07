declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class Logger extends java.lang.Object {
                /**
                 * Protected method to construct a logger for a named subsystem.
                 * <p>
                 * The logger will be initially configured with a null Level
                 * and with useParentHandlers set to true.
                 */
                // @ts-ignore
                constructor(name: string, resourceBundleName: string)
                // @ts-ignore
                public static GLOBAL_LOGGER_NAME: string;
                // @ts-ignore
                public static global: java.util.logging.Logger;
                /**
                 * Return global logger object with the name Logger.GLOBAL_LOGGER_NAME.
                 */
                // @ts-ignore
                public static getGlobal(): java.util.logging.Logger;
                /**
                 * Find or create a logger for a named subsystem.  If a logger has
                 * already been created with the given name it is returned.  Otherwise
                 * a new logger is created.
                 * <p>
                 * If a new logger is created its log level will be configured
                 * based on the LogManager configuration and it will configured
                 * to also send logging output to its parent's Handlers.  It will
                 * be registered in the LogManager global namespace.
                 * <p>
                 * Note: The LogManager may only retain a weak reference to the newly
                 * created Logger. It is important to understand that a previously
                 * created Logger with the given name may be garbage collected at any
                 * time if there is no strong reference to the Logger. In particular,
                 * this means that two back-to-back calls like
                 * {@code getLogger("MyLogger").log(...)} may use different Logger
                 * objects named "MyLogger" if there is no strong reference to the
                 * Logger named "MyLogger" elsewhere in the program.
                 */
                // @ts-ignore
                public static getLogger(name: string): java.util.logging.Logger;
                /**
                 * Find or create a logger for a named subsystem.  If a logger has
                 * already been created with the given name it is returned.  Otherwise
                 * a new logger is created.
                 * <p>
                 * If a new logger is created its log level will be configured
                 * based on the LogManager and it will configured to also send logging
                 * output to its parent's Handlers.  It will be registered in
                 * the LogManager global namespace.
                 * <p>
                 * Note: The LogManager may only retain a weak reference to the newly
                 * created Logger. It is important to understand that a previously
                 * created Logger with the given name may be garbage collected at any
                 * time if there is no strong reference to the Logger. In particular,
                 * this means that two back-to-back calls like
                 * {@code getLogger("MyLogger", ...).log(...)} may use different Logger
                 * objects named "MyLogger" if there is no strong reference to the
                 * Logger named "MyLogger" elsewhere in the program.
                 * <p>
                 * If the named Logger already exists and does not yet have a
                 * localization resource bundle then the given resource bundle
                 * name is used.  If the named Logger already exists and has
                 * a different resource bundle name then an IllegalArgumentException
                 * is thrown.
                 * <p>
                 */
                // @ts-ignore
                public static getLogger(name: string, resourceBundleName: string): java.util.logging.Logger;
                /**
                 * Create an anonymous Logger.  The newly created Logger is not
                 * registered in the LogManager namespace.  There will be no
                 * access checks on updates to the logger.
                 * <p>
                 * This factory method is primarily intended for use from applets.
                 * Because the resulting Logger is anonymous it can be kept private
                 * by the creating class.  This removes the need for normal security
                 * checks, which in turn allows untrusted applet code to update
                 * the control state of the Logger.  For example an applet can do
                 * a setLevel or an addHandler on an anonymous Logger.
                 * <p>
                 * Even although the new logger is anonymous, it is configured
                 * to have the root logger ("") as its parent.  This means that
                 * by default it inherits its effective level and handlers
                 * from the root logger. Changing its parent via the
                 * {@link #setParent(java.util.logging.Logger) setParent} method
                 * will still require the security permission specified by that method.
                 * <p>
                 */
                // @ts-ignore
                public static getAnonymousLogger(): java.util.logging.Logger;
                /**
                 * Create an anonymous Logger.  The newly created Logger is not
                 * registered in the LogManager namespace.  There will be no
                 * access checks on updates to the logger.
                 * <p>
                 * This factory method is primarily intended for use from applets.
                 * Because the resulting Logger is anonymous it can be kept private
                 * by the creating class.  This removes the need for normal security
                 * checks, which in turn allows untrusted applet code to update
                 * the control state of the Logger.  For example an applet can do
                 * a setLevel or an addHandler on an anonymous Logger.
                 * <p>
                 * Even although the new logger is anonymous, it is configured
                 * to have the root logger ("") as its parent.  This means that
                 * by default it inherits its effective level and handlers
                 * from the root logger.  Changing its parent via the
                 * {@link #setParent(java.util.logging.Logger) setParent} method
                 * will still require the security permission specified by that method.
                 * <p>
                 */
                // @ts-ignore
                public static getAnonymousLogger(resourceBundleName: string): java.util.logging.Logger;
                /**
                 * Retrieve the localization resource bundle for this
                 * logger.
                 * This method will return a {@code ResourceBundle} that was either
                 * set by the {@link
                 * #setResourceBundle(java.util.ResourceBundle) setResourceBundle} method or
                 * <a href="#ResourceBundleMapping">mapped from the
                 * the resource bundle name</a> set via the {@link
                 * Logger#getLogger(java.lang.String, java.lang.String) getLogger} factory
                 * method for the current default locale.
                 * <br>Note that if the result is {@code null}, then the Logger will use a resource
                 * bundle or resource bundle name inherited from its parent.
                 */
                // @ts-ignore
                public getResourceBundle(): java.util.ResourceBundle;
                /**
                 * Retrieve the localization resource bundle name for this
                 * logger.
                 * This is either the name specified through the {@link
                 * #getLogger(java.lang.String, java.lang.String) getLogger} factory method,
                 * or the {@linkplain ResourceBundle#getBaseBundleName() base name} of the
                 * ResourceBundle set through {@link
                 * #setResourceBundle(java.util.ResourceBundle) setResourceBundle} method.
                 * <br>Note that if the result is {@code null}, then the Logger will use a resource
                 * bundle or resource bundle name inherited from its parent.
                 */
                // @ts-ignore
                public getResourceBundleName(): string;
                /**
                 * Set a filter to control output on this Logger.
                 * <P>
                 * After passing the initial "level" check, the Logger will
                 * call this Filter to check if a log record should really
                 * be published.
                 */
                // @ts-ignore
                public setFilter(newFilter: java.util.logging.Filter): void;
                /**
                 * Get the current filter for this Logger.
                 */
                // @ts-ignore
                public getFilter(): java.util.logging.Filter;
                /**
                 * Log a LogRecord.
                 * <p>
                 * All the other logging methods in this class call through
                 * this method to actually perform any logging.  Subclasses can
                 * override this single method to capture all log activity.
                 */
                // @ts-ignore
                public log(record: java.util.logging.LogRecord): void;
                /**
                 * Log a message, with no arguments.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public log(level: java.util.logging.Level, msg: string): void;
                /**
                 * Log a message, which is only to be constructed if the logging level
                 * is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public log(level: java.util.logging.Level, msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a message, with one object parameter.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then a corresponding LogRecord is created and forwarded
                 * to all the registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public log(level: java.util.logging.Level, msg: string, param1: java.lang.Object): void;
                /**
                 * Log a message, with an array of object arguments.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then a corresponding LogRecord is created and forwarded
                 * to all the registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public log(level: java.util.logging.Level, msg: string, params: java.lang.Object): void;
                /**
                 * Log a message, with associated Throwable information.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given arguments are stored in a LogRecord
                 * which is forwarded to all registered output handlers.
                 * <p>
                 * Note that the thrown argument is stored in the LogRecord thrown
                 * property, rather than the LogRecord parameters property.  Thus it is
                 * processed specially by output Formatters and is not treated
                 * as a formatting parameter to the LogRecord message property.
                 * <p>
                 */
                // @ts-ignore
                public log(level: java.util.logging.Level, msg: string, thrown: java.lang.Throwable): void;
                /**
                 * Log a lazily constructed message, with associated Throwable information.
                 * <p>
                 * If the logger is currently enabled for the given message level then the
                 * message is constructed by invoking the provided supplier function. The
                 * message and the given {@link Throwable} are then stored in a {@link
                 * LogRecord} which is forwarded to all registered output handlers.
                 * <p>
                 * Note that the thrown argument is stored in the LogRecord thrown
                 * property, rather than the LogRecord parameters property.  Thus it is
                 * processed specially by output Formatters and is not treated
                 * as a formatting parameter to the LogRecord message property.
                 * <p>
                 */
                // @ts-ignore
                public log(level: java.util.logging.Level, thrown: java.lang.Throwable, msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a message, specifying source class and method,
                 * with no arguments.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public logp(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, msg: string): void;
                /**
                 * Log a lazily constructed message, specifying source class and method,
                 * with no arguments.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public logp(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a message, specifying source class and method,
                 * with a single object parameter to the log message.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then a corresponding LogRecord is created and forwarded
                 * to all the registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public logp(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, msg: string, param1: java.lang.Object): void;
                /**
                 * Log a message, specifying source class and method,
                 * with an array of object arguments.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then a corresponding LogRecord is created and forwarded
                 * to all the registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public logp(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, msg: string, params: java.lang.Object): void;
                /**
                 * Log a message, specifying source class and method,
                 * with associated Throwable information.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given arguments are stored in a LogRecord
                 * which is forwarded to all registered output handlers.
                 * <p>
                 * Note that the thrown argument is stored in the LogRecord thrown
                 * property, rather than the LogRecord parameters property.  Thus it is
                 * processed specially by output Formatters and is not treated
                 * as a formatting parameter to the LogRecord message property.
                 * <p>
                 */
                // @ts-ignore
                public logp(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, msg: string, thrown: java.lang.Throwable): void;
                /**
                 * Log a lazily constructed message, specifying source class and method,
                 * with associated Throwable information.
                 * <p>
                 * If the logger is currently enabled for the given message level then the
                 * message is constructed by invoking the provided supplier function. The
                 * message and the given {@link Throwable} are then stored in a {@link
                 * LogRecord} which is forwarded to all registered output handlers.
                 * <p>
                 * Note that the thrown argument is stored in the LogRecord thrown
                 * property, rather than the LogRecord parameters property.  Thus it is
                 * processed specially by output Formatters and is not treated
                 * as a formatting parameter to the LogRecord message property.
                 * <p>
                 */
                // @ts-ignore
                public logp(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, thrown: java.lang.Throwable, msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a message, specifying source class, method, and resource bundle name
                 * with no arguments.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 * The msg string is localized using the named resource bundle.  If the
                 * resource bundle name is null, or an empty String or invalid
                 * then the msg string is not localized.
                 * <p>
                 */
                // @ts-ignore
                public logrb(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string): void;
                /**
                 * Log a message, specifying source class, method, and resource bundle name,
                 * with a single object parameter to the log message.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then a corresponding LogRecord is created and forwarded
                 * to all the registered output Handler objects.
                 * <p>
                 * The msg string is localized using the named resource bundle.  If the
                 * resource bundle name is null, or an empty String or invalid
                 * then the msg string is not localized.
                 * <p>
                 */
                // @ts-ignore
                public logrb(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, param1: java.lang.Object): void;
                /**
                 * Log a message, specifying source class, method, and resource bundle name,
                 * with an array of object arguments.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then a corresponding LogRecord is created and forwarded
                 * to all the registered output Handler objects.
                 * <p>
                 * The msg string is localized using the named resource bundle.  If the
                 * resource bundle name is null, or an empty String or invalid
                 * then the msg string is not localized.
                 * <p>
                 */
                // @ts-ignore
                public logrb(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, params: java.lang.Object): void;
                /**
                 * Log a message, specifying source class, method, and resource bundle,
                 * with an optional list of message parameters.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then a corresponding LogRecord is created and forwarded
                 * to all the registered output Handler objects.
                 * <p>
                 * The {@code msg} string is localized using the given resource bundle.
                 * If the resource bundle is {@code null}, then the {@code msg} string is not
                 * localized.
                 * <p>
                 */
                // @ts-ignore
                public logrb(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, bundle: java.util.ResourceBundle, msg: string, params: java.lang.Object): void;
                /**
                 * Log a message, specifying source class, method, and resource bundle name,
                 * with associated Throwable information.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given arguments are stored in a LogRecord
                 * which is forwarded to all registered output handlers.
                 * <p>
                 * The msg string is localized using the named resource bundle.  If the
                 * resource bundle name is null, or an empty String or invalid
                 * then the msg string is not localized.
                 * <p>
                 * Note that the thrown argument is stored in the LogRecord thrown
                 * property, rather than the LogRecord parameters property.  Thus it is
                 * processed specially by output Formatters and is not treated
                 * as a formatting parameter to the LogRecord message property.
                 * <p>
                 */
                // @ts-ignore
                public logrb(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, thrown: java.lang.Throwable): void;
                /**
                 * Log a message, specifying source class, method, and resource bundle,
                 * with associated Throwable information.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given arguments are stored in a LogRecord
                 * which is forwarded to all registered output handlers.
                 * <p>
                 * The {@code msg} string is localized using the given resource bundle.
                 * If the resource bundle is {@code null}, then the {@code msg} string is not
                 * localized.
                 * <p>
                 * Note that the thrown argument is stored in the LogRecord thrown
                 * property, rather than the LogRecord parameters property.  Thus it is
                 * processed specially by output Formatters and is not treated
                 * as a formatting parameter to the LogRecord message property.
                 * <p>
                 */
                // @ts-ignore
                public logrb(level: java.util.logging.Level, sourceClass: string, sourceMethod: string, bundle: java.util.ResourceBundle, msg: string, thrown: java.lang.Throwable): void;
                /**
                 * Log a method entry.
                 * <p>
                 * This is a convenience method that can be used to log entry
                 * to a method.  A LogRecord with message "ENTRY", log level
                 * FINER, and the given sourceMethod and sourceClass is logged.
                 * <p>
                 */
                // @ts-ignore
                public entering(sourceClass: string, sourceMethod: string): void;
                /**
                 * Log a method entry, with one parameter.
                 * <p>
                 * This is a convenience method that can be used to log entry
                 * to a method.  A LogRecord with message "ENTRY {0}", log level
                 * FINER, and the given sourceMethod, sourceClass, and parameter
                 * is logged.
                 * <p>
                 */
                // @ts-ignore
                public entering(sourceClass: string, sourceMethod: string, param1: java.lang.Object): void;
                /**
                 * Log a method entry, with an array of parameters.
                 * <p>
                 * This is a convenience method that can be used to log entry
                 * to a method.  A LogRecord with message "ENTRY" (followed by a
                 * format {N} indicator for each entry in the parameter array),
                 * log level FINER, and the given sourceMethod, sourceClass, and
                 * parameters is logged.
                 * <p>
                 */
                // @ts-ignore
                public entering(sourceClass: string, sourceMethod: string, params: java.lang.Object): void;
                /**
                 * Log a method return.
                 * <p>
                 * This is a convenience method that can be used to log returning
                 * from a method.  A LogRecord with message "RETURN", log level
                 * FINER, and the given sourceMethod and sourceClass is logged.
                 * <p>
                 */
                // @ts-ignore
                public exiting(sourceClass: string, sourceMethod: string): void;
                /**
                 * Log a method return, with result object.
                 * <p>
                 * This is a convenience method that can be used to log returning
                 * from a method.  A LogRecord with message "RETURN {0}", log level
                 * FINER, and the gives sourceMethod, sourceClass, and result
                 * object is logged.
                 * <p>
                 */
                // @ts-ignore
                public exiting(sourceClass: string, sourceMethod: string, result: java.lang.Object): void;
                /**
                 * Log throwing an exception.
                 * <p>
                 * This is a convenience method to log that a method is
                 * terminating by throwing an exception.  The logging is done
                 * using the FINER level.
                 * <p>
                 * If the logger is currently enabled for the given message
                 * level then the given arguments are stored in a LogRecord
                 * which is forwarded to all registered output handlers.  The
                 * LogRecord's message is set to "THROW".
                 * <p>
                 * Note that the thrown argument is stored in the LogRecord thrown
                 * property, rather than the LogRecord parameters property.  Thus it is
                 * processed specially by output Formatters and is not treated
                 * as a formatting parameter to the LogRecord message property.
                 * <p>
                 */
                // @ts-ignore
                public throwing(sourceClass: string, sourceMethod: string, thrown: java.lang.Throwable): void;
                /**
                 * Log a SEVERE message.
                 * <p>
                 * If the logger is currently enabled for the SEVERE message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public severe(msg: string): void;
                /**
                 * Log a WARNING message.
                 * <p>
                 * If the logger is currently enabled for the WARNING message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public warning(msg: string): void;
                /**
                 * Log an INFO message.
                 * <p>
                 * If the logger is currently enabled for the INFO message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public info(msg: string): void;
                /**
                 * Log a CONFIG message.
                 * <p>
                 * If the logger is currently enabled for the CONFIG message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public config(msg: string): void;
                /**
                 * Log a FINE message.
                 * <p>
                 * If the logger is currently enabled for the FINE message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public fine(msg: string): void;
                /**
                 * Log a FINER message.
                 * <p>
                 * If the logger is currently enabled for the FINER message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public finer(msg: string): void;
                /**
                 * Log a FINEST message.
                 * <p>
                 * If the logger is currently enabled for the FINEST message
                 * level then the given message is forwarded to all the
                 * registered output Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public finest(msg: string): void;
                /**
                 * Log a SEVERE message, which is only to be constructed if the logging
                 * level is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the SEVERE message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public severe(msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a WARNING message, which is only to be constructed if the logging
                 * level is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the WARNING message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public warning(msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a INFO message, which is only to be constructed if the logging
                 * level is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the INFO message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public info(msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a CONFIG message, which is only to be constructed if the logging
                 * level is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the CONFIG message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public config(msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a FINE message, which is only to be constructed if the logging
                 * level is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the FINE message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public fine(msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a FINER message, which is only to be constructed if the logging
                 * level is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the FINER message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public finer(msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Log a FINEST message, which is only to be constructed if the logging
                 * level is such that the message will actually be logged.
                 * <p>
                 * If the logger is currently enabled for the FINEST message
                 * level then the message is constructed by invoking the provided
                 * supplier function and forwarded to all the registered output
                 * Handler objects.
                 * <p>
                 */
                // @ts-ignore
                public finest(msgSupplier: java.util.function$.Supplier): void;
                /**
                 * Set the log level specifying which message levels will be
                 * logged by this logger.  Message levels lower than this
                 * value will be discarded.  The level value Level.OFF
                 * can be used to turn off logging.
                 * <p>
                 * If the new level is null, it means that this node should
                 * inherit its level from its nearest ancestor with a specific
                 * (non-null) level value.
                 */
                // @ts-ignore
                public setLevel(newLevel: java.util.logging.Level): void;
                /**
                 * Get the log Level that has been specified for this Logger.
                 * The result may be null, which means that this logger's
                 * effective level will be inherited from its parent.
                 */
                // @ts-ignore
                public getLevel(): java.util.logging.Level;
                /**
                 * Check if a message of the given level would actually be logged
                 * by this logger.  This check is based on the Loggers effective level,
                 * which may be inherited from its parent.
                 */
                // @ts-ignore
                public isLoggable(level: java.util.logging.Level): boolean;
                /**
                 * Get the name for this logger.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Add a log Handler to receive logging messages.
                 * <p>
                 * By default, Loggers also send their output to their parent logger.
                 * Typically the root Logger is configured with a set of Handlers
                 * that essentially act as default handlers for all loggers.
                 */
                // @ts-ignore
                public addHandler(handler: java.util.logging.Handler): void;
                /**
                 * Remove a log Handler.
                 * <P>
                 * Returns silently if the given Handler is not found or is null
                 */
                // @ts-ignore
                public removeHandler(handler: java.util.logging.Handler): void;
                /**
                 * Get the Handlers associated with this logger.
                 * <p>
                 */
                // @ts-ignore
                public getHandlers(): java.util.logging.Handler[];
                /**
                 * Specify whether or not this logger should send its output
                 * to its parent Logger.  This means that any LogRecords will
                 * also be written to the parent's Handlers, and potentially
                 * to its parent, recursively up the namespace.
                 */
                // @ts-ignore
                public setUseParentHandlers(useParentHandlers: boolean): void;
                /**
                 * Discover whether or not this logger is sending its output
                 * to its parent logger.
                 */
                // @ts-ignore
                public getUseParentHandlers(): boolean;
                /**
                 * Sets a resource bundle on this logger.
                 * All messages will be logged using the given resource bundle for its
                 * specific {@linkplain ResourceBundle#getLocale locale}.
                 */
                // @ts-ignore
                public setResourceBundle(bundle: java.util.ResourceBundle): void;
                /**
                 * Return the parent for this Logger.
                 * <p>
                 * This method returns the nearest extant parent in the namespace.
                 * Thus if a Logger is called "a.b.c.d", and a Logger called "a.b"
                 * has been created but no logger "a.b.c" exists, then a call of
                 * getParent on the Logger "a.b.c.d" will return the Logger "a.b".
                 * <p>
                 * The result will be null if it is called on the root Logger
                 * in the namespace.
                 */
                // @ts-ignore
                public getParent(): java.util.logging.Logger;
                /**
                 * Set the parent for this Logger.  This method is used by
                 * the LogManager to update a Logger when the namespace changes.
                 * <p>
                 * It should not be called from application code.
                 * <p>
                 */
                // @ts-ignore
                public setParent(parent: java.util.logging.Logger): void;
            }
        }
    }
}
