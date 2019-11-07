declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class LogRecord extends java.lang.Object {
                /**
                 * Construct a LogRecord with the given level and message values.
                 * <p>
                 * The sequence property will be initialized with a new unique value.
                 * These sequence values are allocated in increasing order within a VM.
                 * <p>
                 * The millis property will be initialized to the current time.
                 * <p>
                 * The thread ID property will be initialized with a unique ID for
                 * the current thread.
                 * <p>
                 * All other properties will be initialized to "null".
                 */
                // @ts-ignore
                constructor(level: java.util.logging.Level, msg: string)
                /**
                 * Get the source Logger's name.
                 */
                // @ts-ignore
                public getLoggerName(): string;
                /**
                 * Set the source Logger's name.
                 */
                // @ts-ignore
                public setLoggerName(name: string): void;
                /**
                 * Get the localization resource bundle
                 * <p>
                 * This is the ResourceBundle that should be used to localize
                 * the message string before formatting it.  The result may
                 * be null if the message is not localizable, or if no suitable
                 * ResourceBundle is available.
                 */
                // @ts-ignore
                public getResourceBundle(): java.util.ResourceBundle;
                /**
                 * Set the localization resource bundle.
                 */
                // @ts-ignore
                public setResourceBundle(bundle: java.util.ResourceBundle): void;
                /**
                 * Get the localization resource bundle name
                 * <p>
                 * This is the name for the ResourceBundle that should be
                 * used to localize the message string before formatting it.
                 * The result may be null if the message is not localizable.
                 */
                // @ts-ignore
                public getResourceBundleName(): string;
                /**
                 * Set the localization resource bundle name.
                 */
                // @ts-ignore
                public setResourceBundleName(name: string): void;
                /**
                 * Get the logging message level, for example Level.SEVERE.
                 */
                // @ts-ignore
                public getLevel(): java.util.logging.Level;
                /**
                 * Set the logging message level, for example Level.SEVERE.
                 */
                // @ts-ignore
                public setLevel(level: java.util.logging.Level): void;
                /**
                 * Get the sequence number.
                 * <p>
                 * Sequence numbers are normally assigned in the LogRecord
                 * constructor, which assigns unique sequence numbers to
                 * each new LogRecord in increasing order.
                 */
                // @ts-ignore
                public getSequenceNumber(): number;
                /**
                 * Set the sequence number.
                 * <p>
                 * Sequence numbers are normally assigned in the LogRecord constructor,
                 * so it should not normally be necessary to use this method.
                 */
                // @ts-ignore
                public setSequenceNumber(seq: number): void;
                /**
                 * Get the  name of the class that (allegedly) issued the logging request.
                 * <p>
                 * Note that this sourceClassName is not verified and may be spoofed.
                 * This information may either have been provided as part of the
                 * logging call, or it may have been inferred automatically by the
                 * logging framework.  In the latter case, the information may only
                 * be approximate and may in fact describe an earlier call on the
                 * stack frame.
                 * <p>
                 * May be null if no information could be obtained.
                 */
                // @ts-ignore
                public getSourceClassName(): string;
                /**
                 * Set the name of the class that (allegedly) issued the logging request.
                 */
                // @ts-ignore
                public setSourceClassName(sourceClassName: string): void;
                /**
                 * Get the  name of the method that (allegedly) issued the logging request.
                 * <p>
                 * Note that this sourceMethodName is not verified and may be spoofed.
                 * This information may either have been provided as part of the
                 * logging call, or it may have been inferred automatically by the
                 * logging framework.  In the latter case, the information may only
                 * be approximate and may in fact describe an earlier call on the
                 * stack frame.
                 * <p>
                 * May be null if no information could be obtained.
                 */
                // @ts-ignore
                public getSourceMethodName(): string;
                /**
                 * Set the name of the method that (allegedly) issued the logging request.
                 */
                // @ts-ignore
                public setSourceMethodName(sourceMethodName: string): void;
                /**
                 * Get the "raw" log message, before localization or formatting.
                 * <p>
                 * May be null, which is equivalent to the empty string "".
                 * <p>
                 * This message may be either the final text or a localization key.
                 * <p>
                 * During formatting, if the source logger has a localization
                 * ResourceBundle and if that ResourceBundle has an entry for
                 * this message string, then the message string is replaced
                 * with the localized value.
                 */
                // @ts-ignore
                public getMessage(): string;
                /**
                 * Set the "raw" log message, before localization or formatting.
                 */
                // @ts-ignore
                public setMessage(message: string): void;
                /**
                 * Get the parameters to the log message.
                 */
                // @ts-ignore
                public getParameters(): java.lang.Object[];
                /**
                 * Set the parameters to the log message.
                 */
                // @ts-ignore
                public setParameters(parameters: java.lang.Object): void;
                /**
                 * Get an identifier for the thread where the message originated.
                 * <p>
                 * This is a thread identifier within the Java VM and may or
                 * may not map to any operating system ID.
                 */
                // @ts-ignore
                public getThreadID(): number;
                /**
                 * Set an identifier for the thread where the message originated.
                 */
                // @ts-ignore
                public setThreadID(threadID: number): void;
                /**
                 * Get event time in milliseconds since 1970.
                 */
                // @ts-ignore
                public getMillis(): number;
                /**
                 * Set event time.
                 */
                // @ts-ignore
                public setMillis(millis: number): void;
                /**
                 * Get any throwable associated with the log record.
                 * <p>
                 * If the event involved an exception, this will be the
                 * exception object. Otherwise null.
                 */
                // @ts-ignore
                public getThrown(): java.lang.Throwable;
                /**
                 * Set a throwable associated with the log event.
                 */
                // @ts-ignore
                public setThrown(thrown: java.lang.Throwable): void;
            }
        }
    }
}
