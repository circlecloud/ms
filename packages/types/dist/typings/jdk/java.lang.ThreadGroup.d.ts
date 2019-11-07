declare namespace java {
    namespace lang {
        // @ts-ignore
         class ThreadGroup extends java.lang.Object {
            /**
             * Constructs a new ThreadGroup with the name provided.
             * The new ThreadGroup will be child of the ThreadGroup to which
             * the <code>Thread.currentThread()</code> belongs.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Constructs a new ThreadGroup with the name provided, as child of
             * the ThreadGroup <code>parent</code>
             */
            // @ts-ignore
            constructor(parent: java.lang.ThreadGroup, name: string)
            /**
             * Returns the number of Threads which are children of
             * the receiver, directly or indirectly.
             */
            // @ts-ignore
            public activeCount(): number;
            /**
             * Returns the number of ThreadGroups which are children of
             * the receiver, directly or indirectly.
             */
            // @ts-ignore
            public activeGroupCount(): number;
            /**
             * The definition of this method depends on the deprecated method <code>suspend()</code>.
             * The behavior of this call was never specified.
             */
            // @ts-ignore
            public allowThreadSuspension(b: boolean): boolean;
            /**
             * If there is a SecurityManager installed, call <code>checkAccess</code>
             * in it passing the receiver as parameter, otherwise do nothing.
             */
            // @ts-ignore
            public checkAccess(): void;
            /**
             * Destroys the receiver and recursively all its subgroups. It is only legal
             * to destroy a ThreadGroup that has no Threads.
             * Any daemon ThreadGroup is destroyed automatically when it becomes empty
             * (no Threads and no ThreadGroups in it).
             */
            // @ts-ignore
            public destroy(): void;
            /**
             * Copies an array with all Threads which are children of
             * the receiver (directly or indirectly) into the array <code>threads</code>
             * passed as parameters. If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             */
            // @ts-ignore
            public enumerate(threads: java.lang.Thread): number;
            /**
             * Copies an array with all Threads which are children of
             * the receiver into the array <code>threads</code>
             * passed as parameter. Children Threads of subgroups are recursively copied
             * as well if parameter <code>recurse</code> is <code>true</code>.
             * If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             */
            // @ts-ignore
            public enumerate(threads: java.lang.Thread, recurse: boolean): number;
            /**
             * Copies an array with all ThreadGroups which are children of
             * the receiver (directly or indirectly) into the array <code>groups</code>
             * passed as parameters. If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             */
            // @ts-ignore
            public enumerate(groups: java.lang.ThreadGroup): number;
            /**
             * Copies an array with all ThreadGroups which are children of
             * the receiver into the array <code>groups</code>
             * passed as parameter. Children ThreadGroups of subgroups are recursively copied
             * as well if parameter <code>recurse</code> is <code>true</code>.
             * If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             */
            // @ts-ignore
            public enumerate(groups: java.lang.ThreadGroup, recurse: boolean): number;
            /**
             * Answers the maximum allowed priority for a Thread in the receiver.
             */
            // @ts-ignore
            public getMaxPriority(): number;
            /**
             * Answers the name of the receiver.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Answers the receiver's parent ThreadGroup. It can be null if the receiver
             * is the the root ThreadGroup.
             */
            // @ts-ignore
            public getParent(): java.lang.ThreadGroup;
            /**
             * Interrupts every Thread in the receiver and recursively in all its subgroups.
             */
            // @ts-ignore
            public interrupt(): void;
            /**
             * Answers true if the receiver is a daemon ThreadGroup, false otherwise.
             */
            // @ts-ignore
            public isDaemon(): boolean;
            /**
             * Answers true if the receiver has been destroyed already, false otherwise.
             */
            // @ts-ignore
            public isDestroyed(): boolean;
            /**
             * Outputs to <code>System.out</code> a text representation of the hierarchy of
             * Threads and ThreadGroups in the receiver (and recursively). Proper indentation
             * is done to suggest the nesting of groups inside groups and threads inside groups.
             */
            // @ts-ignore
            public list(): void;
            /**
             * Answers true if the receiver is a direct or indirect parent group of
             * ThreadGroup <code>g</code>, false otherwise.
             */
            // @ts-ignore
            public parentOf(g: java.lang.ThreadGroup): boolean;
            /**
             * Resumes every Thread in the receiver and recursively in all its subgroups.
             */
            // @ts-ignore
            public resume(): void;
            /**
             * Configures the receiver to be a daemon ThreadGroup or not.
             * Daemon ThreadGroups are automatically destroyed when they become empty.
             */
            // @ts-ignore
            public setDaemon(isDaemon: boolean): void;
            /**
             * Configures the maximum allowed priority for a Thread in the receiver
             * and recursively in all its subgroups.
             * One can never change the maximum priority of a ThreadGroup to be
             * higher than it was. Such an attempt will not result in an exception, it will
             * simply leave the ThreadGroup with its current maximum priority.
             */
            // @ts-ignore
            public setMaxPriority(newMax: number): void;
            /**
             * Stops every Thread in the receiver and recursively in all its subgroups.
             */
            // @ts-ignore
            public stop(): void;
            /**
             * Suspends every Thread in the receiver and recursively in all its subgroups.
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
             * Any uncaught exception in any Thread has to be forwarded (by the VM) to the Thread's ThreadGroup
             * by sending this message (uncaughtException). This allows users to define custom ThreadGroup classes
             * and custom behavior for when a Thread has an uncaughtException or when it does (ThreadDeath).
             */
            // @ts-ignore
            public uncaughtException(t: java.lang.Thread, e: java.lang.Throwable): void;
        }
    }
}
