// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Thread extends java.lang.Object {
            /**
             * Constructs a new Thread with no runnable object and a newly generated name.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new Thread with a runnable object and a newly generated name.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             */
            // @ts-ignore
            constructor(runnable: java.lang.Runnable)
            /**
             * Constructs a new Thread with a runnable object and name provided.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             */
            // @ts-ignore
            constructor(runnable: java.lang.Runnable, threadName: string)
            /**
             * Constructs a new Thread with no runnable object and the name provided.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             */
            // @ts-ignore
            constructor(threadName: string)
            /**
             * Constructs a new Thread with a runnable object and a newly generated name.
             * The new Thread will belong to the ThreadGroup passed as parameter.
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, runnable: java.lang.Runnable)
            /**
             * Constructs a new Thread with a runnable object, the given name and
             * belonging to the ThreadGroup passed as parameter.
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, runnable: java.lang.Runnable, threadName: string, stack: number)
            /**
             * Constructs a new Thread with a runnable object, the given name and
             * belonging to the ThreadGroup passed as parameter.
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, runnable: java.lang.Runnable, threadName: string)
            /**
             * Constructs a new Thread with no runnable object, the given name and
             * belonging to the ThreadGroup passed as parameter.
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, threadName: string)
            // @ts-ignore
            public static MAX_PRIORITY: number;
            // @ts-ignore
            public static MIN_PRIORITY: number;
            // @ts-ignore
            public static NORM_PRIORITY: number;
            /**
             * Returns how many threads are active in the <code>ThreadGroup</code>
             * which the current thread belongs to.
             */
            // @ts-ignore
            public static activeCount(): number;
            /**
             * This method is used for operations that require approval from
             * a SecurityManager. If there's none installed, this method is a no-op.
             * If there's a SecurityManager installed , <code>checkAccess(Ljava.lang.Thread;)</code>
             * is called for that SecurityManager.
             */
            // @ts-ignore
            public checkAccess(): void;
            /**
             * Returns the number of stack frames in this thread.
             */
            // @ts-ignore
            public countStackFrames(): number;
            /**
             * Answers the instance of Thread that corresponds to the running Thread
             * which calls this method.
             */
            // @ts-ignore
            public static currentThread(): java.lang.Thread;
            /**
             * Destroys the receiver without any monitor cleanup. Not implemented.
             */
            // @ts-ignore
            public destroy(): void;
            /**
             * Prints a text representation of the stack for this Thread.
             */
            // @ts-ignore
            public static dumpStack(): void;
            /**
             * Copies an array with all Threads which are in the same ThreadGroup as
             * the receiver - and subgroups - into the array <code>threads</code>
             * passed as parameter. If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             */
            // @ts-ignore
            public static enumerate(threads: java.lang.Thread): number;
            /**
             * Returns the context ClassLoader for the receiver.
             */
            // @ts-ignore
            public getContextClassLoader(): java.lang.ClassLoader;
            /**
             * Answers the name of the receiver.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Answers the priority of the receiver.
             */
            // @ts-ignore
            public getPriority(): number;
            /**
             * Answers the ThreadGroup to which the receiver belongs
             */
            // @ts-ignore
            public getThreadGroup(): java.lang.ThreadGroup;
            /**
             * Posts an interrupt request to the receiver
             */
            // @ts-ignore
            public interrupt(): void;
            /**
             * Answers a <code>boolean</code> indicating whether the current Thread
             * (<code>currentThread()</code>) has a pending interrupt request
             * (<code>true</code>) or not (<code>false</code>). It also has the
             * side-effect of clearing the flag.
             */
            // @ts-ignore
            public static interrupted(): boolean;
            /**
             * Answers <code>true</code> if the receiver has
             * already been started and still runs code (hasn't died yet).
             * Answers <code>false</code> either if the receiver hasn't been
             * started yet or if it has already started and run to completion and died.
             */
            // @ts-ignore
            public isAlive(): boolean;
            /**
             * Answers a <code>boolean</code> indicating whether the receiver
             * is a daemon Thread (<code>true</code>) or not (<code>false</code>)
             * A daemon Thread only runs as long as there are non-daemon Threads
             * running. When the last non-daemon Thread ends, the whole program ends
             * no matter if it had daemon Threads still running or not.
             */
            // @ts-ignore
            public isDaemon(): boolean;
            /**
             * Answers a <code>boolean</code> indicating whether the receiver
             * has a pending interrupt request (<code>true</code>) or not (<code>false</code>)
             */
            // @ts-ignore
            public isInterrupted(): boolean;
            /**
             * Blocks the current Thread (<code>Thread.currentThread()</code>) until the
             * receiver finishes its execution and dies.
             */
            // @ts-ignore
            public join(): void;
            /**
             * Blocks the current Thread (<code>Thread.currentThread()</code>) until the
             * receiver finishes its execution and dies or the specified timeout expires, whatever
             * happens first.
             */
            // @ts-ignore
            public join(timeoutInMilliseconds: number): void;
            /**
             * Blocks the current Thread (<code>Thread.currentThread()</code>) until the
             * receiver finishes its execution and dies or the specified timeout expires, whatever
             * happens first.
             */
            // @ts-ignore
            public join(timeoutInMilliseconds: number, nanos: number): void;
            /**
             * This is a no-op if the receiver was never suspended, or suspended and already
             * resumed. If the receiver is suspended, however, makes it resume to the point
             * where it was when it was suspended.
             */
            // @ts-ignore
            public resume(): void;
            /**
             * Calls the <code>run()</code> method of the Runnable object the receiver holds.
             * If no Runnable is set, does nothing.
             */
            // @ts-ignore
            public run(): void;
            /**
             * Set the context ClassLoader for the receiver.
             */
            // @ts-ignore
            public setContextClassLoader(cl: java.lang.ClassLoader): void;
            /**
             * Set if the receiver is a daemon Thread or not. This can only be done
             * before the Thread starts running.
             */
            // @ts-ignore
            public setDaemon(isDaemon: boolean): void;
            /**
             * Sets the name of the receiver.
             */
            // @ts-ignore
            public setName(threadName: string): void;
            /**
             * Sets the priority of the receiver. Note that the final priority set may be less than the
             * requested value, as it is bounded by the maxPriority() of the receiver's ThreadGroup.
             */
            // @ts-ignore
            public setPriority(requestedPriority: number): void;
            /**
             * Causes the thread which sent this message to sleep an interval
             * of time (given in milliseconds). The precision is not guaranteed -
             * the Thread may sleep more or less than requested.
             */
            // @ts-ignore
            public static sleep(time: number): void;
            /**
             * Causes the thread which sent this message to sleep an interval
             * of time (given in milliseconds). The precision is not guaranteed -
             * the Thread may sleep more or less than requested.
             */
            // @ts-ignore
            public static sleep(time: number, nanos: number): void;
            /**
             * Starts the new Thread of execution. The <code>run()</code> method of the receiver
             * will be called by the receiver Thread itself (and not the Thread calling <code>start()</code>).
             */
            // @ts-ignore
            public start(): void;
            /**
             * Requests the receiver Thread to stop and throw ThreadDeath.
             * The Thread is resumed if it was suspended and awakened if it was
             * sleeping, so that it can proceed to throw ThreadDeath.
             */
            // @ts-ignore
            public stop(): void;
            /**
             * Throws UnsupportedOperationException.
             */
            // @ts-ignore
            public stop(throwable: java.lang.Throwable): void;
            /**
             * This is a no-op if the receiver is suspended. If the receiver <code>isAlive()</code>
             * however, suspended it until <code>resume()</code> is sent to it. Suspend requests
             * are not queued, which means that N requests are equivalent to just one - only one
             * resume request is needed in this case.
             */
            // @ts-ignore
            public suspend(): void;
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Causes the thread which sent this message to yield execution to another Thread
             * that is ready to run. The actual scheduling is implementation-dependent.
             */
            // @ts-ignore
            public static yield(): void;
            /**
             * Returns whether the current thread has a monitor lock on the specified object.
             */
            // @ts-ignore
            public static holdsLock(object: java.lang.Object): boolean;
            /**
             * Returns an array of StackTraceElement, where each element of the array represents a frame
             * on the Java stack.
             */
            // @ts-ignore
            public getStackTrace(): java.lang.StackTraceElement[];
            /**
             * Returns a Map containing Thread keys, and values which are arrays of StackTraceElement. The Map contains
             * all Threads which were alive at the time this method was called.
             */
            // @ts-ignore
            public static getAllStackTraces(): java.util.Map;
            /**
             * Return a unique id for this Thread.
             */
            // @ts-ignore
            public getId(): number;
            /**
             * Return the UncaughtExceptionHandler for this Thread.
             */
            // @ts-ignore
            public getUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
            /**
             * Set the UncaughtExceptionHandler for this Thread.
             */
            // @ts-ignore
            public setUncaughtExceptionHandler(handler: java.lang.Thread.UncaughtExceptionHandler): void;
            /**
             * Return the default UncaughtExceptionHandler used for new Threads.
             */
            // @ts-ignore
            public static getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
            /**
             * Set the UncaughtExceptionHandler used for new  Threads.
             */
            // @ts-ignore
            public static setDefaultUncaughtExceptionHandler(handler: java.lang.Thread.UncaughtExceptionHandler): void;
            /**
             * Returns the current Thread state.
             */
            // @ts-ignore
            public getState(): java.lang.Thread.State;
            // @ts-ignore
            protected clone(): java.lang.Object;
        }
    }
}
