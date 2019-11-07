declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class ErrorManager extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static GENERIC_FAILURE: number;
                // @ts-ignore
                public static WRITE_FAILURE: number;
                // @ts-ignore
                public static FLUSH_FAILURE: number;
                // @ts-ignore
                public static CLOSE_FAILURE: number;
                // @ts-ignore
                public static OPEN_FAILURE: number;
                // @ts-ignore
                public static FORMAT_FAILURE: number;
                /**
                 * The error method is called when a Handler failure occurs.
                 * <p>
                 * This method may be overridden in subclasses.  The default
                 * behavior in this base class is that the first call is
                 * reported to System.err, and subsequent calls are ignored.
                 */
                // @ts-ignore
                public error(msg: string, ex: java.lang.Exception, code: number): void;
            }
        }
    }
}
