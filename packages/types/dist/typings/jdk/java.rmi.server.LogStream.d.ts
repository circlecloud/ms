declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
             class LogStream extends java.io.PrintStream {
                // @ts-ignore
                public static SILENT: number;
                // @ts-ignore
                public static BRIEF: number;
                // @ts-ignore
                public static VERBOSE: number;
                /**
                 * Return the LogStream identified by the given name.  If
                 * a log corresponding to "name" does not exist, a log using
                 * the default stream is created.
                 */
                // @ts-ignore
                public static log(name: string): java.rmi.server.LogStream;
                /**
                 * Return the current default stream for new logs.
                 */
                // @ts-ignore
                public static getDefaultStream(): java.io.PrintStream;
                /**
                 * Set the default stream for new logs.
                 */
                // @ts-ignore
                public static setDefaultStream(newDefault: java.io.PrintStream): void;
                /**
                 * Return the current stream to which output from this log is sent.
                 */
                // @ts-ignore
                public getOutputStream(): java.io.OutputStream;
                /**
                 * Set the stream to which output from this log is sent.
                 */
                // @ts-ignore
                public setOutputStream(out: java.io.OutputStream): void;
                /**
                 * Write a byte of data to the stream.  If it is not a newline, then
                 * the byte is appended to the internal buffer.  If it is a newline,
                 * then the currently buffered line is sent to the log's output
                 * stream, prefixed with the appropriate logging information.
                 */
                // @ts-ignore
                public write(b: number): void;
                /**
                 * Write a subarray of bytes.  Pass each through write byte method.
                 */
                // @ts-ignore
                public write(b: number, off: number, len: number): void;
                /**
                 * Return log name as string representation.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Convert a string name of a logging level to its internal
                 * integer representation.
                 */
                // @ts-ignore
                public static parseLevel(s: string): number;
            }
        }
    }
}
