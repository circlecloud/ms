// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Throwable extends java.lang.Object {
            /**
             * Constructs a new instance of this class with its
             * walkback filled in.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of this class with its
             * walkback and message filled in.
             */
            // @ts-ignore
            constructor(detailMessage: string)
            /**
             * Constructs a new instance of this class with its
             * walkback, message and cause filled in.
             */
            // @ts-ignore
            constructor(detailMessage: string, throwable: java.lang.Throwable)
            /**
             * Constructs a new instance of this class with its
             * walkback and cause filled in.
             */
            // @ts-ignore
            constructor(throwable: java.lang.Throwable)
            /**
             * Constructs a new instance of this class with its walkback, message
             * and cause filled in.
             * enableSuppression and enableWritableStackTrace are true by default
             * in other constructors
             * If enableSuppression is false, suppression is disabled, getSuppressed()
             * returns a zero-length array and calls to addSuppressed(Throwable) have
             * no effect.
             * If enableWritableStackTrace is false, fillInStackTrace() will not be
             * called within this constructor, stackTrace field will be set to null,
             * subsequent calls to fillInStackTrace() and setStackTrace(StackTraceElement[])
             * will not set the stack trace, and  getStackTrace() will return a zero
             * length array.
             */
            // @ts-ignore
            constructor(detailMessage: string, throwable: java.lang.Throwable, enableSuppression: boolean, enableWritableStackTrace: boolean)
            /**
             * Record in the receiver a walkback from the point
             * where this message was sent. The message is
             * public so that code which catches a throwable and
             * then <em>re-throws</em> it can adjust the walkback
             * to represent the location where the exception was
             * re-thrown.
             */
            // @ts-ignore
            public fillInStackTrace(): java.lang.Throwable;
            /**
             * Answers the extra information message which was provided
             * when the throwable was created. If no message was provided
             * at creation time, then answer null.
             */
            // @ts-ignore
            public getMessage(): string;
            /**
             * Answers the extra information message which was provided
             * when the throwable was created. If no message was provided
             * at creation time, then answer null. Subclasses may override
             * this method to answer localized text for the message.
             */
            // @ts-ignore
            public getLocalizedMessage(): string;
            /**
             * Answers an array of StackTraceElement. Each StackTraceElement represents
             * a entry on the stack.
             */
            // @ts-ignore
            public getStackTrace(): java.lang.StackTraceElement[];
            /**
             * Sets the array of StackTraceElements. Each StackTraceElement represents
             * a entry on the stack. A copy of this array will be returned by getStackTrace()
             * and printed by printStackTrace().
             */
            // @ts-ignore
            public setStackTrace(trace: java.lang.StackTraceElement): void;
            /**
             * Outputs a printable representation of the receiver's
             * walkback on the System.err stream.
             */
            // @ts-ignore
            public printStackTrace(): void;
            /**
             * Outputs a printable representation of the receiver's
             * walkback on the stream specified by the argument.
             */
            // @ts-ignore
            public printStackTrace(err: java.io.PrintStream): void;
            /**
             * Outputs a printable representation of the receiver's
             * walkback on the writer specified by the argument.
             */
            // @ts-ignore
            public printStackTrace(err: java.io.PrintWriter): void;
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Initialize the cause of the receiver. The cause cannot be
             * reassigned.
             */
            // @ts-ignore
            public initCause(throwable: java.lang.Throwable): java.lang.Throwable;
            /**
             * Answers the cause of this Throwable, or null if there
             * is no cause.
             */
            // @ts-ignore
            public getCause(): java.lang.Throwable;
            /**
             * The specified exception is going to be suppressed in order to give priority
             * to this exception (primary exception) and to be appended to the list of
             * suppressed exceptions.
             * This method is typically called by the automatically generated code from the
             * try-with-resources statement.
             */
            // @ts-ignore
            public addSuppressed(exception: java.lang.Throwable): void;
            /**
             * Returns an array of exceptions suppressed, typically by the automatically
             * generated code from the try-with-resources statement, in order to give
             * priority to this exception (primary exception).
             */
            // @ts-ignore
            public getSuppressed(): java.lang.Throwable[];
        }
    }
}
