// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Runtime extends java.lang.Object {
            /**
             * Returns the runtime object associated with the current Java application.
             * Most of the methods of class <code>Runtime</code> are instance
             * methods and must be invoked with respect to the current runtime object.
             */
            // @ts-ignore
            public static getRuntime(): java.lang.Runtime;
            /**
             * Terminates the currently running Java virtual machine by initiating its
             * shutdown sequence.  This method never returns normally.  The argument
             * serves as a status code; by convention, a nonzero status code indicates
             * abnormal termination.
             * <p> The virtual machine's shutdown sequence consists of two phases.  In
             * the first phase all registered {@link #addShutdownHook shutdown hooks},
             * if any, are started in some unspecified order and allowed to run
             * concurrently until they finish.  In the second phase all uninvoked
             * finalizers are run if {@link #runFinalizersOnExit finalization-on-exit}
             * has been enabled.  Once this is done the virtual machine {@link #halt
             * halts}.
             * <p> If this method is invoked after the virtual machine has begun its
             * shutdown sequence then if shutdown hooks are being run this method will
             * block indefinitely.  If shutdown hooks have already been run and on-exit
             * finalization has been enabled then this method halts the virtual machine
             * with the given status code if the status is nonzero; otherwise, it
             * blocks indefinitely.
             * <p> The <tt>{@link System#exit(int) System.exit}</tt> method is the
             * conventional and convenient means of invoking this method. <p>
             */
            // @ts-ignore
            public exit(status: number): void;
            /**
             * Registers a new virtual-machine shutdown hook.
             * <p> The Java virtual machine <i>shuts down</i> in response to two kinds
             * of events:
             * <ul>
             * <li> The program <i>exits</i> normally, when the last non-daemon
             * thread exits or when the <tt>{@link #exit exit}</tt> (equivalently,
             * {@link System#exit(int) System.exit}) method is invoked, or
             * <li> The virtual machine is <i>terminated</i> in response to a
             * user interrupt, such as typing <tt>^C</tt>, or a system-wide event,
             * such as user logoff or system shutdown.
             * </ul>
             * <p> A <i>shutdown hook</i> is simply an initialized but unstarted
             * thread.  When the virtual machine begins its shutdown sequence it will
             * start all registered shutdown hooks in some unspecified order and let
             * them run concurrently.  When all the hooks have finished it will then
             * run all uninvoked finalizers if finalization-on-exit has been enabled.
             * Finally, the virtual machine will halt.  Note that daemon threads will
             * continue to run during the shutdown sequence, as will non-daemon threads
             * if shutdown was initiated by invoking the <tt>{@link #exit exit}</tt>
             * method.
             * <p> Once the shutdown sequence has begun it can be stopped only by
             * invoking the <tt>{@link #halt halt}</tt> method, which forcibly
             * terminates the virtual machine.
             * <p> Once the shutdown sequence has begun it is impossible to register a
             * new shutdown hook or de-register a previously-registered hook.
             * Attempting either of these operations will cause an
             * <tt>{@link IllegalStateException}</tt> to be thrown.
             * <p> Shutdown hooks run at a delicate time in the life cycle of a virtual
             * machine and should therefore be coded defensively.  They should, in
             * particular, be written to be thread-safe and to avoid deadlocks insofar
             * as possible.  They should also not rely blindly upon services that may
             * have registered their own shutdown hooks and therefore may themselves in
             * the process of shutting down.  Attempts to use other thread-based
             * services such as the AWT event-dispatch thread, for example, may lead to
             * deadlocks.
             * <p> Shutdown hooks should also finish their work quickly.  When a
             * program invokes <tt>{@link #exit exit}</tt> the expectation is
             * that the virtual machine will promptly shut down and exit.  When the
             * virtual machine is terminated due to user logoff or system shutdown the
             * underlying operating system may only allow a fixed amount of time in
             * which to shut down and exit.  It is therefore inadvisable to attempt any
             * user interaction or to perform a long-running computation in a shutdown
             * hook.
             * <p> Uncaught exceptions are handled in shutdown hooks just as in any
             * other thread, by invoking the <tt>{@link ThreadGroup#uncaughtException
             * uncaughtException}</tt> method of the thread's <tt>{@link
             * ThreadGroup}</tt> object.  The default implementation of this method
             * prints the exception's stack trace to <tt>{@link System#err}</tt> and
             * terminates the thread; it does not cause the virtual machine to exit or
             * halt.
             * <p> In rare circumstances the virtual machine may <i>abort</i>, that is,
             * stop running without shutting down cleanly.  This occurs when the
             * virtual machine is terminated externally, for example with the
             * <tt>SIGKILL</tt> signal on Unix or the <tt>TerminateProcess</tt> call on
             * Microsoft Windows.  The virtual machine may also abort if a native
             * method goes awry by, for example, corrupting internal data structures or
             * attempting to access nonexistent memory.  If the virtual machine aborts
             * then no guarantee can be made about whether or not any shutdown hooks
             * will be run. <p>
             */
            // @ts-ignore
            public addShutdownHook(hook: java.lang.Thread): void;
            /**
             * De-registers a previously-registered virtual-machine shutdown hook. <p>
             */
            // @ts-ignore
            public removeShutdownHook(hook: java.lang.Thread): boolean;
            /**
             * Forcibly terminates the currently running Java virtual machine.  This
             * method never returns normally.
             * <p> This method should be used with extreme caution.  Unlike the
             * <tt>{@link #exit exit}</tt> method, this method does not cause shutdown
             * hooks to be started and does not run uninvoked finalizers if
             * finalization-on-exit has been enabled.  If the shutdown sequence has
             * already been initiated then this method does not wait for any running
             * shutdown hooks or finalizers to finish their work. <p>
             */
            // @ts-ignore
            public halt(status: number): void;
            /**
             * Enable or disable finalization on exit; doing so specifies that the
             * finalizers of all objects that have finalizers that have not yet been
             * automatically invoked are to be run before the Java runtime exits.
             * By default, finalization on exit is disabled.
             * <p>If there is a security manager,
             * its <code>checkExit</code> method is first called
             * with 0 as its argument to ensure the exit is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public static runFinalizersOnExit(value: boolean): void;
            /**
             * Executes the specified string command in a separate process.
             * <p>This is a convenience method.  An invocation of the form
             * <tt>exec(command)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>{@link #exec(String, String[], File) exec}(command, null, null)</tt>.
             */
            // @ts-ignore
            public exec(command: string): java.lang.Process;
            /**
             * Executes the specified string command in a separate process with the
             * specified environment.
             * <p>This is a convenience method.  An invocation of the form
             * <tt>exec(command, envp)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>{@link #exec(String, String[], File) exec}(command, envp, null)</tt>.
             */
            // @ts-ignore
            public exec(command: string, envp: string): java.lang.Process;
            /**
             * Executes the specified string command in a separate process with the
             * specified environment and working directory.
             * <p>This is a convenience method.  An invocation of the form
             * <tt>exec(command, envp, dir)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>{@link #exec(String[], String[], File) exec}(cmdarray, envp, dir)</tt>,
             * where <code>cmdarray</code> is an array of all the tokens in
             * <code>command</code>.
             * <p>More precisely, the <code>command</code> string is broken
             * into tokens using a {@link StringTokenizer} created by the call
             * <code>new {@link StringTokenizer}(command)</code> with no
             * further modification of the character categories.  The tokens
             * produced by the tokenizer are then placed in the new string
             * array <code>cmdarray</code>, in the same order.
             */
            // @ts-ignore
            public exec(command: string, envp: string, dir: java.io.File): java.lang.Process;
            /**
             * Executes the specified command and arguments in a separate process.
             * <p>This is a convenience method.  An invocation of the form
             * <tt>exec(cmdarray)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>{@link #exec(String[], String[], File) exec}(cmdarray, null, null)</tt>.
             */
            // @ts-ignore
            public exec(cmdarray: string): java.lang.Process;
            /**
             * Executes the specified command and arguments in a separate process
             * with the specified environment.
             * <p>This is a convenience method.  An invocation of the form
             * <tt>exec(cmdarray, envp)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>{@link #exec(String[], String[], File) exec}(cmdarray, envp, null)</tt>.
             */
            // @ts-ignore
            public exec(cmdarray: string, envp: string): java.lang.Process;
            /**
             * Executes the specified command and arguments in a separate process with
             * the specified environment and working directory.
             * <p>Given an array of strings <code>cmdarray</code>, representing the
             * tokens of a command line, and an array of strings <code>envp</code>,
             * representing "environment" variable settings, this method creates
             * a new process in which to execute the specified command.
             * <p>This method checks that <code>cmdarray</code> is a valid operating
             * system command.  Which commands are valid is system-dependent,
             * but at the very least the command must be a non-empty list of
             * non-null strings.
             * <p>If <tt>envp</tt> is <tt>null</tt>, the subprocess inherits the
             * environment settings of the current process.
             * <p>A minimal set of system dependent environment variables may
             * be required to start a process on some operating systems.
             * As a result, the subprocess may inherit additional environment variable
             * settings beyond those in the specified environment.
             * <p>{@link ProcessBuilder#start()} is now the preferred way to
             * start a process with a modified environment.
             * <p>The working directory of the new subprocess is specified by <tt>dir</tt>.
             * If <tt>dir</tt> is <tt>null</tt>, the subprocess inherits the
             * current working directory of the current process.
             * <p>If a security manager exists, its
             * {@link SecurityManager#checkExec checkExec}
             * method is invoked with the first component of the array
             * <code>cmdarray</code> as its argument. This may result in a
             * {@link SecurityException} being thrown.
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
             */
            // @ts-ignore
            public exec(cmdarray: string, envp: string, dir: java.io.File): java.lang.Process;
            /**
             * Returns the number of processors available to the Java virtual machine.
             * <p> This value may change during a particular invocation of the virtual
             * machine.  Applications that are sensitive to the number of available
             * processors should therefore occasionally poll this property and adjust
             * their resource usage appropriately. </p>
             */
            // @ts-ignore
            public availableProcessors(): number;
            /**
             * Returns the amount of free memory in the Java Virtual Machine.
             * Calling the
             * <code>gc</code> method may result in increasing the value returned
             * by <code>freeMemory.</code>
             */
            // @ts-ignore
            public freeMemory(): number;
            /**
             * Returns the total amount of memory in the Java virtual machine.
             * The value returned by this method may vary over time, depending on
             * the host environment.
             * <p>
             * Note that the amount of memory required to hold an object of any
             * given type may be implementation-dependent.
             */
            // @ts-ignore
            public totalMemory(): number;
            /**
             * Returns the maximum amount of memory that the Java virtual machine will
             * attempt to use.  If there is no inherent limit then the value {@link
             * java.lang.Long#MAX_VALUE} will be returned.
             */
            // @ts-ignore
            public maxMemory(): number;
            /**
             * Runs the garbage collector.
             * Calling this method suggests that the Java virtual machine expend
             * effort toward recycling unused objects in order to make the memory
             * they currently occupy available for quick reuse. When control
             * returns from the method call, the virtual machine has made
             * its best effort to recycle all discarded objects.
             * <p>
             * The name <code>gc</code> stands for "garbage
             * collector". The virtual machine performs this recycling
             * process automatically as needed, in a separate thread, even if the
             * <code>gc</code> method is not invoked explicitly.
             * <p>
             * The method {@link System#gc()} is the conventional and convenient
             * means of invoking this method.
             */
            // @ts-ignore
            public gc(): void;
            /**
             * Runs the finalization methods of any objects pending finalization.
             * Calling this method suggests that the Java virtual machine expend
             * effort toward running the <code>finalize</code> methods of objects
             * that have been found to be discarded but whose <code>finalize</code>
             * methods have not yet been run. When control returns from the
             * method call, the virtual machine has made a best effort to
             * complete all outstanding finalizations.
             * <p>
             * The virtual machine performs the finalization process
             * automatically as needed, in a separate thread, if the
             * <code>runFinalization</code> method is not invoked explicitly.
             * <p>
             * The method {@link System#runFinalization()} is the conventional
             * and convenient means of invoking this method.
             */
            // @ts-ignore
            public runFinalization(): void;
            /**
             * Enables/Disables tracing of instructions.
             * If the <code>boolean</code> argument is <code>true</code>, this
             * method suggests that the Java virtual machine emit debugging
             * information for each instruction in the virtual machine as it
             * is executed. The format of this information, and the file or other
             * output stream to which it is emitted, depends on the host environment.
             * The virtual machine may ignore this request if it does not support
             * this feature. The destination of the trace output is system
             * dependent.
             * <p>
             * If the <code>boolean</code> argument is <code>false</code>, this
             * method causes the virtual machine to stop performing the
             * detailed instruction trace it is performing.
             */
            // @ts-ignore
            public traceInstructions(on: boolean): void;
            /**
             * Enables/Disables tracing of method calls.
             * If the <code>boolean</code> argument is <code>true</code>, this
             * method suggests that the Java virtual machine emit debugging
             * information for each method in the virtual machine as it is
             * called. The format of this information, and the file or other output
             * stream to which it is emitted, depends on the host environment. The
             * virtual machine may ignore this request if it does not support
             * this feature.
             * <p>
             * Calling this method with argument false suggests that the
             * virtual machine cease emitting per-call debugging information.
             */
            // @ts-ignore
            public traceMethodCalls(on: boolean): void;
            /**
             * Loads the native library specified by the filename argument.  The filename
             * argument must be an absolute path name.
             * (for example
             * <code>Runtime.getRuntime().load("/home/avh/lib/libX11.so");</code>).
             * If the filename argument, when stripped of any platform-specific library
             * prefix, path, and file extension, indicates a library whose name is,
             * for example, L, and a native library called L is statically linked
             * with the VM, then the JNI_OnLoad_L function exported by the library
             * is invoked rather than attempting to load a dynamic library.
             * A filename matching the argument does not have to exist in the file
             * system. See the JNI Specification for more details.
             * Otherwise, the filename argument is mapped to a native library image in
             * an implementation-dependent manner.
             * <p>
             * First, if there is a security manager, its <code>checkLink</code>
             * method is called with the <code>filename</code> as its argument.
             * This may result in a security exception.
             * <p>
             * This is similar to the method {@link #loadLibrary(String)}, but it
             * accepts a general file name as an argument rather than just a library
             * name, allowing any file of native code to be loaded.
             * <p>
             * The method {@link System#load(String)} is the conventional and
             * convenient means of invoking this method.
             */
            // @ts-ignore
            public load(filename: string): void;
            /**
             * Loads the native library specified by the <code>libname</code>
             * argument.  The <code>libname</code> argument must not contain any platform
             * specific prefix, file extension or path. If a native library
             * called <code>libname</code> is statically linked with the VM, then the
             * JNI_OnLoad_<code>libname</code> function exported by the library is invoked.
             * See the JNI Specification for more details.
             * Otherwise, the libname argument is loaded from a system library
             * location and mapped to a native library image in an implementation-
             * dependent manner.
             * <p>
             * First, if there is a security manager, its <code>checkLink</code>
             * method is called with the <code>libname</code> as its argument.
             * This may result in a security exception.
             * <p>
             * The method {@link System#loadLibrary(String)} is the conventional
             * and convenient means of invoking this method. If native
             * methods are to be used in the implementation of a class, a standard
             * strategy is to put the native code in a library file (call it
             * <code>LibFile</code>) and then to put a static initializer:
             * <blockquote><pre>
             * static { System.loadLibrary("LibFile"); }
             * </pre></blockquote>
             * within the class declaration. When the class is loaded and
             * initialized, the necessary native code implementation for the native
             * methods will then be loaded as well.
             * <p>
             * If this method is called more than once with the same library
             * name, the second and subsequent calls are ignored.
             */
            // @ts-ignore
            public loadLibrary(libname: string): void;
            /**
             * Creates a localized version of an input stream. This method takes
             * an <code>InputStream</code> and returns an <code>InputStream</code>
             * equivalent to the argument in all respects except that it is
             * localized: as characters in the local character set are read from
             * the stream, they are automatically converted from the local
             * character set to Unicode.
             * <p>
             * If the argument is already a localized stream, it may be returned
             * as the result.
             */
            // @ts-ignore
            public getLocalizedInputStream(input: java.io.InputStream): java.io.InputStream;
            /**
             * Creates a localized version of an output stream. This method
             * takes an <code>OutputStream</code> and returns an
             * <code>OutputStream</code> equivalent to the argument in all respects
             * except that it is localized: as Unicode characters are written to
             * the stream, they are automatically converted to the local
             * character set.
             * <p>
             * If the argument is already a localized stream, it may be returned
             * as the result.
             */
            // @ts-ignore
            public getLocalizedOutputStream(out: java.io.OutputStream): java.io.OutputStream;
        }
    }
}
