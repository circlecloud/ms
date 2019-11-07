// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class ProcessBuilder extends java.lang.Object {
            /**
             * Constructs a process builder with the specified operating
             * system program and arguments.  This constructor does <i>not</i>
             * make a copy of the {@code command} list.  Subsequent
             * updates to the list will be reflected in the state of the
             * process builder.  It is not checked whether
             * {@code command} corresponds to a valid operating system
             * command.
             */
            // @ts-ignore
            constructor(command: java.util.List)
            /**
             * Constructs a process builder with the specified operating
             * system program and arguments.  This is a convenience
             * constructor that sets the process builder's command to a string
             * list containing the same strings as the {@code command}
             * array, in the same order.  It is not checked whether
             * {@code command} corresponds to a valid operating system
             * command.
             */
            // @ts-ignore
            constructor(command: string)
            /**
             * Sets this process builder's operating system program and
             * arguments.  This method does <i>not</i> make a copy of the
             * {@code command} list.  Subsequent updates to the list will
             * be reflected in the state of the process builder.  It is not
             * checked whether {@code command} corresponds to a valid
             * operating system command.
             */
            // @ts-ignore
            public command(command: java.util.List): java.lang.ProcessBuilder;
            /**
             * Sets this process builder's operating system program and
             * arguments.  This is a convenience method that sets the command
             * to a string list containing the same strings as the
             * {@code command} array, in the same order.  It is not
             * checked whether {@code command} corresponds to a valid
             * operating system command.
             */
            // @ts-ignore
            public command(command: string): java.lang.ProcessBuilder;
            /**
             * Returns this process builder's operating system program and
             * arguments.  The returned list is <i>not</i> a copy.  Subsequent
             * updates to the list will be reflected in the state of this
             * process builder.
             */
            // @ts-ignore
            public command(): java.util.List;
            /**
             * Returns a string map view of this process builder's environment.
             * Whenever a process builder is created, the environment is
             * initialized to a copy of the current process environment (see
             * {@link System#getenv()}).  Subprocesses subsequently started by
             * this object's {@link #start()} method will use this map as
             * their environment.
             * <p>The returned object may be modified using ordinary {@link
             * java.util.Map Map} operations.  These modifications will be
             * visible to subprocesses started via the {@link #start()}
             * method.  Two {@code ProcessBuilder} instances always
             * contain independent process environments, so changes to the
             * returned map will never be reflected in any other
             * {@code ProcessBuilder} instance or the values returned by
             * {@link System#getenv System.getenv}.
             * <p>If the system does not support environment variables, an
             * empty map is returned.
             * <p>The returned map does not permit null keys or values.
             * Attempting to insert or query the presence of a null key or
             * value will throw a {@link NullPointerException}.
             * Attempting to query the presence of a key or value which is not
             * of type {@link String} will throw a {@link ClassCastException}.
             * <p>The behavior of the returned map is system-dependent.  A
             * system may not allow modifications to environment variables or
             * may forbid certain variable names or values.  For this reason,
             * attempts to modify the map may fail with
             * {@link UnsupportedOperationException} or
             * {@link IllegalArgumentException}
             * if the modification is not permitted by the operating system.
             * <p>Since the external format of environment variable names and
             * values is system-dependent, there may not be a one-to-one
             * mapping between them and Java's Unicode strings.  Nevertheless,
             * the map is implemented in such a way that environment variables
             * which are not modified by Java code will have an unmodified
             * native representation in the subprocess.
             * <p>The returned map and its collection views may not obey the
             * general contract of the {@link Object#equals} and
             * {@link Object#hashCode} methods.
             * <p>The returned map is typically case-sensitive on all platforms.
             * <p>If a security manager exists, its
             * {@link SecurityManager#checkPermission checkPermission} method
             * is called with a
             * {@link RuntimePermission}{@code ("getenv.*")} permission.
             * This may result in a {@link SecurityException} being thrown.
             * <p>When passing information to a Java subprocess,
             * <a href=System.html#EnvironmentVSSystemProperties>system properties</a>
             * are generally preferred over environment variables.
             */
            // @ts-ignore
            public environment(): java.util.Map;
            /**
             * Returns this process builder's working directory.
             * Subprocesses subsequently started by this object's {@link
             * #start()} method will use this as their working directory.
             * The returned value may be {@code null} -- this means to use
             * the working directory of the current Java process, usually the
             * directory named by the system property {@code user.dir},
             * as the working directory of the child process.
             */
            // @ts-ignore
            public directory(): java.io.File;
            /**
             * Sets this process builder's working directory.
             * Subprocesses subsequently started by this object's {@link
             * #start()} method will use this as their working directory.
             * The argument may be {@code null} -- this means to use the
             * working directory of the current Java process, usually the
             * directory named by the system property {@code user.dir},
             * as the working directory of the child process.
             */
            // @ts-ignore
            public directory(directory: java.io.File): java.lang.ProcessBuilder;
            /**
             * Sets this process builder's standard input source.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method obtain their standard input from this source.
             * <p>If the source is {@link Redirect#PIPE Redirect.PIPE}
             * (the initial value), then the standard input of a
             * subprocess can be written to using the output stream
             * returned by {@link Process#getOutputStream()}.
             * If the source is set to any other value, then
             * {@link Process#getOutputStream()} will return a
             * <a href="#redirect-input">null output stream</a>.
             */
            // @ts-ignore
            public redirectInput(source: java.lang.ProcessBuilder.Redirect): java.lang.ProcessBuilder;
            /**
             * Sets this process builder's standard output destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method send their standard output to this destination.
             * <p>If the destination is {@link Redirect#PIPE Redirect.PIPE}
             * (the initial value), then the standard output of a subprocess
             * can be read using the input stream returned by {@link
             * Process#getInputStream()}.
             * If the destination is set to any other value, then
             * {@link Process#getInputStream()} will return a
             * <a href="#redirect-output">null input stream</a>.
             */
            // @ts-ignore
            public redirectOutput(destination: java.lang.ProcessBuilder.Redirect): java.lang.ProcessBuilder;
            /**
             * Sets this process builder's standard error destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method send their standard error to this destination.
             * <p>If the destination is {@link Redirect#PIPE Redirect.PIPE}
             * (the initial value), then the error output of a subprocess
             * can be read using the input stream returned by {@link
             * Process#getErrorStream()}.
             * If the destination is set to any other value, then
             * {@link Process#getErrorStream()} will return a
             * <a href="#redirect-output">null input stream</a>.
             * <p>If the {@link #redirectErrorStream redirectErrorStream}
             * attribute has been set {@code true}, then the redirection set
             * by this method has no effect.
             */
            // @ts-ignore
            public redirectError(destination: java.lang.ProcessBuilder.Redirect): java.lang.ProcessBuilder;
            /**
             * Sets this process builder's standard input source to a file.
             * <p>This is a convenience method.  An invocation of the form
             * {@code redirectInput(file)}
             * behaves in exactly the same way as the invocation
             * {@link #redirectInput(Redirect) redirectInput}
             * {@code (Redirect.from(file))}.
             */
            // @ts-ignore
            public redirectInput(file: java.io.File): java.lang.ProcessBuilder;
            /**
             * Sets this process builder's standard output destination to a file.
             * <p>This is a convenience method.  An invocation of the form
             * {@code redirectOutput(file)}
             * behaves in exactly the same way as the invocation
             * {@link #redirectOutput(Redirect) redirectOutput}
             * {@code (Redirect.to(file))}.
             */
            // @ts-ignore
            public redirectOutput(file: java.io.File): java.lang.ProcessBuilder;
            /**
             * Sets this process builder's standard error destination to a file.
             * <p>This is a convenience method.  An invocation of the form
             * {@code redirectError(file)}
             * behaves in exactly the same way as the invocation
             * {@link #redirectError(Redirect) redirectError}
             * {@code (Redirect.to(file))}.
             */
            // @ts-ignore
            public redirectError(file: java.io.File): java.lang.ProcessBuilder;
            /**
             * Returns this process builder's standard input source.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method obtain their standard input from this source.
             * The initial value is {@link Redirect#PIPE Redirect.PIPE}.
             */
            // @ts-ignore
            public redirectInput(): java.lang.ProcessBuilder.Redirect;
            /**
             * Returns this process builder's standard output destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method redirect their standard output to this destination.
             * The initial value is {@link Redirect#PIPE Redirect.PIPE}.
             */
            // @ts-ignore
            public redirectOutput(): java.lang.ProcessBuilder.Redirect;
            /**
             * Returns this process builder's standard error destination.
             * Subprocesses subsequently started by this object's {@link #start()}
             * method redirect their standard error to this destination.
             * The initial value is {@link Redirect#PIPE Redirect.PIPE}.
             */
            // @ts-ignore
            public redirectError(): java.lang.ProcessBuilder.Redirect;
            /**
             * Sets the source and destination for subprocess standard I/O
             * to be the same as those of the current Java process.
             * <p>This is a convenience method.  An invocation of the form
             * <pre> {@code
             * pb.inheritIO()
             * }</pre>
             * behaves in exactly the same way as the invocation
             * <pre> {@code
             * pb.redirectInput(Redirect.INHERIT)
             * .redirectOutput(Redirect.INHERIT)
             * .redirectError(Redirect.INHERIT)
             * }</pre>
             * This gives behavior equivalent to most operating system
             * command interpreters, or the standard C library function
             * {@code system()}.
             */
            // @ts-ignore
            public inheritIO(): java.lang.ProcessBuilder;
            /**
             * Tells whether this process builder merges standard error and
             * standard output.
             * <p>If this property is {@code true}, then any error output
             * generated by subprocesses subsequently started by this object's
             * {@link #start()} method will be merged with the standard
             * output, so that both can be read using the
             * {@link Process#getInputStream()} method.  This makes it easier
             * to correlate error messages with the corresponding output.
             * The initial value is {@code false}.
             */
            // @ts-ignore
            public redirectErrorStream(): boolean;
            /**
             * Sets this process builder's {@code redirectErrorStream} property.
             * <p>If this property is {@code true}, then any error output
             * generated by subprocesses subsequently started by this object's
             * {@link #start()} method will be merged with the standard
             * output, so that both can be read using the
             * {@link Process#getInputStream()} method.  This makes it easier
             * to correlate error messages with the corresponding output.
             * The initial value is {@code false}.
             */
            // @ts-ignore
            public redirectErrorStream(redirectErrorStream: boolean): java.lang.ProcessBuilder;
            /**
             * Starts a new process using the attributes of this process builder.
             * <p>The new process will
             * invoke the command and arguments given by {@link #command()},
             * in a working directory as given by {@link #directory()},
             * with a process environment as given by {@link #environment()}.
             * <p>This method checks that the command is a valid operating
             * system command.  Which commands are valid is system-dependent,
             * but at the very least the command must be a non-empty list of
             * non-null strings.
             * <p>A minimal set of system dependent environment variables may
             * be required to start a process on some operating systems.
             * As a result, the subprocess may inherit additional environment variable
             * settings beyond those in the process builder's {@link #environment()}.
             * <p>If there is a security manager, its
             * {@link SecurityManager#checkExec checkExec}
             * method is called with the first component of this object's
             * {@code command} array as its argument. This may result in
             * a {@link SecurityException} being thrown.
             * <p>Starting an operating system process is highly system-dependent.
             * Among the many things that can go wrong are:
             * <ul>
             * <li>The operating system program file was not found.
             * <li>Access to the program file was denied.
             * <li>The working directory does not exist.
             * </ul>
             * <p>In such cases an exception will be thrown.  The exact nature
             * of the exception is system-dependent, but it will always be a
             * subclass of {@link IOException}.
             * <p>Subsequent modifications to this process builder will not
             * affect the returned {@link Process}.
             */
            // @ts-ignore
            public start(): java.lang.Process;
        }
    }
}
