// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class System extends java.lang.Object {
            // @ts-ignore
            public static in: java.io.InputStream;
            // @ts-ignore
            public static out: java.io.PrintStream;
            // @ts-ignore
            public static err: java.io.PrintStream;
            /**
             * Sets the value of the static slot "in" in the receiver
             * to the passed in argument.
             */
            // @ts-ignore
            public static setIn(newIn: java.io.InputStream): void;
            /**
             * Sets the value of the static slot "out" in the receiver
             * to the passed in argument.
             */
            // @ts-ignore
            public static setOut(newOut: java.io.PrintStream): void;
            /**
             * Sets the value of the static slot "err" in the receiver
             * to the passed in argument.
             */
            // @ts-ignore
            public static setErr(newErr: java.io.PrintStream): void;
            /**
             * Copies the contents of <code>array1</code> starting at offset <code>start1</code>
             * into <code>array2</code> starting at offset <code>start2</code> for
             * <code>length</code> elements.
             */
            // @ts-ignore
            public static arraycopy(array1: java.lang.Object, start1: number, array2: java.lang.Object, start2: number, length: number): void;
            /**
             * Answers the current time expressed as milliseconds since
             * the time 00:00:00 UTC on January 1, 1970.
             */
            // @ts-ignore
            public static currentTimeMillis(): number;
            /**
             * Causes the virtual machine to stop running, and the
             * program to exit. If runFinalizersOnExit(true) has been
             * invoked, then all finalizers will be run first.
             */
            // @ts-ignore
            public static exit(code: number): void;
            /**
             * Indicate to the virtual machine that it would be a
             * good time to collect available memory. Note that, this
             * is a hint only.
             */
            // @ts-ignore
            public static gc(): void;
            /**
             * Returns an environment variable.
             */
            // @ts-ignore
            public static getenv(variable: string): string;
            /**
             * Answers the system properties. Note that this is
             * not a copy, so that changes made to the returned
             * Properties object will be reflected in subsequent
             * calls to getProperty and getProperties.
             * <p>
             * Security managers should restrict access to this
             * API if possible.
             */
            // @ts-ignore
            public static getProperties(): java.util.Properties;
            /**
             * Answers the value of a particular system property.
             * Answers null if no such property exists,
             * <p>
             * The properties currently provided by the virtual
             * machine are:
             * <pre>
             * java.vendor.url
             * java.class.path
             * user.home
             * java.class.version
             * os.version
             * java.vendor
             * user.dir
             * user.timezone
             * path.separator
             * os.name
             * os.arch
             * line.separator
             * file.separator
             * user.name
             * java.version
             * java.home
             * </pre>
             */
            // @ts-ignore
            public static getProperty(prop: string): string;
            /**
             * Answers the value of a particular system property.
             * If no such property is found, answers the defaultValue.
             */
            // @ts-ignore
            public static getProperty(prop: string, defaultValue: string): string;
            /**
             * Sets the value of a particular system property.
             */
            // @ts-ignore
            public static setProperty(prop: string, value: string): string;
            /**
             * Answers the active security manager.
             */
            // @ts-ignore
            public static getSecurityManager(): java.lang.SecurityManager;
            /**
             * Answers an integer hash code for the parameter.
             * The hash code returned is the same one that would
             * be returned by java.lang.Object.hashCode(), whether
             * or not the object's class has overridden hashCode().
             * The hash code for null is 0.
             */
            // @ts-ignore
            public static identityHashCode(anObject: java.lang.Object): number;
            /**
             * Loads the specified file as a dynamic library.
             */
            // @ts-ignore
            public static load(pathName: string): void;
            /**
             * Loads and links the library specified by the argument.
             */
            // @ts-ignore
            public static loadLibrary(libName: string): void;
            /**
             * Provides a hint to the virtual machine that it would
             * be useful to attempt to perform any outstanding
             * object finalizations.
             */
            // @ts-ignore
            public static runFinalization(): void;
            /**
             * Ensure that, when the virtual machine is about to exit,
             * all objects are finalized. Note that all finalization
             * which occurs when the system is exiting is performed
             * after all running threads have been terminated.
             */
            // @ts-ignore
            public static runFinalizersOnExit(flag: boolean): void;
            /**
             * Answers the system properties. Note that the object
             * which is passed in not copied, so that subsequent
             * changes made to the object will be reflected in
             * calls to getProperty and getProperties.
             * <p>
             * Security managers should restrict access to this
             * API if possible.
             */
            // @ts-ignore
            public static setProperties(p: java.util.Properties): void;
            /**
             * Sets the active security manager. Note that once
             * the security manager has been set, it can not be
             * changed. Attempts to do so will cause a security
             * exception.
             */
            // @ts-ignore
            public static setSecurityManager(s: java.lang.SecurityManager): void;
            /**
             * Answers the platform specific file name format for the shared
             * library named by the argument.
             */
            // @ts-ignore
            public static mapLibraryName(userLibName: string): string;
            /**
             * Return the channel inherited by the invocation of the running vm. The channel is
             * obtained by calling SelectorProvider.inheritedChannel().
             */
            // @ts-ignore
            public static inheritedChannel(): java.nio.channels.Channel;
            /**
             * Returns the current tick count in nanoseconds. The tick count
             * only reflects elapsed time.
             */
            // @ts-ignore
            public static nanoTime(): number;
            /**
             * Removes the property.
             */
            // @ts-ignore
            public static clearProperty(prop: string): string;
            /**
             * Returns all of the system environment variables in an unmodifiable Map.
             */
            // @ts-ignore
            public static getenv(): java.util.Map;
            /**
             * Return the Console or null.
             */
            // @ts-ignore
            public static console(): java.io.Console;
            /**
             * Return platform specific line separator character(s)
             * Unix is \n while Windows is \r\n as per the prop set by the VM
             * Refer to Jazz 30875
             */
            // @ts-ignore
            public static lineSeparator(): string;
        }
    }
}
