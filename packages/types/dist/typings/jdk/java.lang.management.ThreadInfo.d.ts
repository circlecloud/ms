declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
             class ThreadInfo extends java.lang.Object {
                /**
                 * Returns the number of times that the thread represented by this
                 * <code>ThreadInfo</code> has been blocked on any monitor objects. The
                 * count is from the start of the thread's life.
                 */
                // @ts-ignore
                public getBlockedCount(): number;
                /**
                 * If thread contention monitoring is supported and enabled, returns the
                 * total amount of time that the thread represented by this
                 * <code>ThreadInfo</code> has spent blocked on any monitor objects. The
                 * time is measued in milliseconds and will be measured over the time period
                 * since thread contention was most recently enabled.
                 */
                // @ts-ignore
                public getBlockedTime(): number;
                /**
                 * If the thread represented by this <code>ThreadInfo</code> is currently
                 * blocked on or waiting on a monitor object, returns a string
                 * representation of that monitor object.
                 * <p>
                 * The monitor's string representation is comprised of the following
                 * component parts:
                 * <ul>
                 * <li><code>monitor</code> class name
                 * <li><code>@</code>
                 * <li><code>Integer.toHexString(System.identityHashCode(monitor))</code>
                 * </ul>
                 */
                // @ts-ignore
                public getLockName(): string;
                /**
                 * If the thread represented by this <code>ThreadInfo</code> is currently
                 * blocked on or waiting on a monitor object, returns the thread identifier
                 * of the thread which owns the monitor.
                 */
                // @ts-ignore
                public getLockOwnerId(): number;
                /**
                 * If the thread represented by this <code>ThreadInfo</code> is currently
                 * blocked on or waiting on a monitor object, returns the name of the thread
                 * which owns the monitor.
                 */
                // @ts-ignore
                public getLockOwnerName(): string;
                /**
                 * If the thread corresponding to this <code>ThreadInfo</code> is blocked
                 * then this method returns a {@link LockInfo} object that contains details
                 * of the associated lock object.
                 */
                // @ts-ignore
                public getLockInfo(): java.lang.management.LockInfo;
                /**
                 * If available, returns the stack trace for the thread represented by this
                 * <code>ThreadInfo</code> instance. The stack trace is returned in an
                 * array of {@link StackTraceElement} objects with the &quot;top&quot; of the
                 * stack encapsulated in the first array element and the &quot;bottom&quot;
                 * of the stack in the last array element.
                 * <p>
                 * If this <code>ThreadInfo</code> was created without any stack trace
                 * information (e.g. by a call to {@link ThreadMXBean#getThreadInfo(long)})
                 * then the returned array will have a length of zero.
                 * </p>
                 */
                // @ts-ignore
                public getStackTrace(): java.lang.StackTraceElement[];
                /**
                 * Returns the thread identifier of the thread represented by this
                 * <code>ThreadInfo</code>.
                 */
                // @ts-ignore
                public getThreadId(): number;
                /**
                 * Returns the name of the thread represented by this
                 * <code>ThreadInfo</code>.
                 */
                // @ts-ignore
                public getThreadName(): string;
                /**
                 * Returns the thread state value of the thread represented by this
                 * <code>ThreadInfo</code>.
                 */
                // @ts-ignore
                public getThreadState(): java.lang.Thread.State;
                /**
                 * The number of times that the thread represented by this
                 * <code>ThreadInfo</code> has gone to the &quot;wait&quot; or &quot;timed
                 * wait&quot; state.
                 */
                // @ts-ignore
                public getWaitedCount(): number;
                /**
                 * If thread contention monitoring is supported and enabled, returns the
                 * total amount of time that the thread represented by this
                 * <code>ThreadInfo</code> has spent waiting for notifications. The time
                 * is measured in milliseconds and will be measured over the time period
                 * since thread contention was most recently enabled.
                 */
                // @ts-ignore
                public getWaitedTime(): number;
                /**
                 * Returns a <code>boolean</code> indication of whether or not the thread
                 * represented by this <code>ThreadInfo</code> is currently in a native
                 * method.
                 */
                // @ts-ignore
                public isInNative(): boolean;
                /**
                 * Returns a <code>boolean</code> indication of whether or not the thread
                 * represented by this <code>ThreadInfo</code> is currently suspended.
                 */
                // @ts-ignore
                public isSuspended(): boolean;
                /**
                 * Returns an array of <code>MonitorInfo</code> objects, one for every
                 * monitor object locked by the <code>Thread</code> corresponding to this
                 * <code>ThreadInfo</code> when it was instantiated.
                 */
                // @ts-ignore
                public getLockedMonitors(): java.lang.management.MonitorInfo[];
                /**
                 * Returns an array of <code>LockInfo</code> objects, each one containing
                 * information on an ownable synchronizer (a synchronizer that makes use of
                 * the <code>AbstractOwnableSynchronizer</code> type and which is
                 * completely owned by a single thread) locked by the <code>Thread</code>
                 * corresponding to this <code>ThreadInfo</code> when it was instantiated.
                 */
                // @ts-ignore
                public getLockedSynchronizers(): java.lang.management.LockInfo[];
                /**
                 * Receives a {@link CompositeData} representing a <code>ThreadInfo</code>
                 * object and attempts to return the root <code>ThreadInfo</code>
                 * instance.
                 */
                // @ts-ignore
                public static from(cd: any /*javax.management.openmbean.CompositeData*/): java.lang.management.ThreadInfo;
                /**
                 * Returns a text description of this thread info.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
