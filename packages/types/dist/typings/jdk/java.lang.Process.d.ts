// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
        abstract class Process extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the output stream connected to the normal input of the
             * subprocess.  Output to the stream is piped into the standard
             * input of the process represented by this {@code Process} object.
             * <p>If the standard input of the subprocess has been redirected using
             * {@link ProcessBuilder#redirectInput(Redirect)
             * ProcessBuilder.redirectInput}
             * then this method will return a
             * <a href="ProcessBuilder.html#redirect-input">null output stream</a>.
             * <p>Implementation note: It is a good idea for the returned
             * output stream to be buffered.
             */
            // @ts-ignore
            public abstract getOutputStream(): java.io.OutputStream;
            /**
             * Returns the input stream connected to the normal output of the
             * subprocess.  The stream obtains data piped from the standard
             * output of the process represented by this {@code Process} object.
             * <p>If the standard output of the subprocess has been redirected using
             * {@link ProcessBuilder#redirectOutput(Redirect)
             * ProcessBuilder.redirectOutput}
             * then this method will return a
             * <a href="ProcessBuilder.html#redirect-output">null input stream</a>.
             * <p>Otherwise, if the standard error of the subprocess has been
             * redirected using
             * {@link ProcessBuilder#redirectErrorStream(boolean)
             * ProcessBuilder.redirectErrorStream}
             * then the input stream returned by this method will receive the
             * merged standard output and the standard error of the subprocess.
             * <p>Implementation note: It is a good idea for the returned
             * input stream to be buffered.
             */
            // @ts-ignore
            public abstract getInputStream(): java.io.InputStream;
            /**
             * Returns the input stream connected to the error output of the
             * subprocess.  The stream obtains data piped from the error output
             * of the process represented by this {@code Process} object.
             * <p>If the standard error of the subprocess has been redirected using
             * {@link ProcessBuilder#redirectError(Redirect)
             * ProcessBuilder.redirectError} or
             * {@link ProcessBuilder#redirectErrorStream(boolean)
             * ProcessBuilder.redirectErrorStream}
             * then this method will return a
             * <a href="ProcessBuilder.html#redirect-output">null input stream</a>.
             * <p>Implementation note: It is a good idea for the returned
             * input stream to be buffered.
             */
            // @ts-ignore
            public abstract getErrorStream(): java.io.InputStream;
            /**
             * Causes the current thread to wait, if necessary, until the
             * process represented by this {@code Process} object has
             * terminated.  This method returns immediately if the subprocess
             * has already terminated.  If the subprocess has not yet
             * terminated, the calling thread will be blocked until the
             * subprocess exits.
             */
            // @ts-ignore
            public abstract waitFor(): number;
            /**
             * Causes the current thread to wait, if necessary, until the
             * subprocess represented by this {@code Process} object has
             * terminated, or the specified waiting time elapses.
             * <p>If the subprocess has already terminated then this method returns
             * immediately with the value {@code true}.  If the process has not
             * terminated and the timeout value is less than, or equal to, zero, then
             * this method returns immediately with the value {@code false}.
             * <p>The default implementation of this methods polls the {@code exitValue}
             * to check if the process has terminated. Concrete implementations of this
             * class are strongly encouraged to override this method with a more
             * efficient implementation.
             */
            // @ts-ignore
            public waitFor(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
            /**
             * Returns the exit value for the subprocess.
             */
            // @ts-ignore
            public abstract exitValue(): number;
            /**
             * Kills the subprocess. Whether the subprocess represented by this
             * {@code Process} object is forcibly terminated or not is
             * implementation dependent.
             */
            // @ts-ignore
            public abstract destroy(): void;
            /**
             * Kills the subprocess. The subprocess represented by this
             * {@code Process} object is forcibly terminated.
             * <p>The default implementation of this method invokes {@link #destroy}
             * and so may not forcibly terminate the process. Concrete implementations
             * of this class are strongly encouraged to override this method with a
             * compliant implementation.  Invoking this method on {@code Process}
             * objects returned by {@link ProcessBuilder#start} and
             * {@link Runtime#exec} will forcibly terminate the process.
             * <p>Note: The subprocess may not terminate immediately.
             * i.e. {@code isAlive()} may return true for a brief period
             * after {@code destroyForcibly()} is called. This method
             * may be chained to {@code waitFor()} if needed.
             */
            // @ts-ignore
            public destroyForcibly(): java.lang.Process;
            /**
             * Tests whether the subprocess represented by this {@code Process} is
             * alive.
             */
            // @ts-ignore
            public isAlive(): boolean;
        }
    }
}
