declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface ThreadMXBean {
                /**
                 * Returns the thread identifiers of every thread in this virtual machine
                 * that is currently blocked in a deadlock situation over a monitor object.
                 * A thread is considered to be deadlocked if it is blocked waiting to run
                 * and owns an object monitor that is sought by another blocked thread. Two
                 * or more threads can be in a deadlock cycle. To determine the threads
                 * currently deadlocked by object monitors <i>and</i> ownable synchronizers
                 * use the {@link #findDeadlockedThreads()} method.
                 * <p>
                 * It is recommended that this method be used solely for problem
                 * determination analysis and not as a means of managing thread
                 * synchronization in a virtual machine. This is because the method may be
                 * very expensive to run.
                 * </p>
                 */
                // @ts-ignore
                 findMonitorDeadlockedThreads(): number[];
                /**
                 * Returns an array of the identifiers of all of the threads that are alive
                 * in the current virtual machine. When processing the return from this
                 * method it should <i>not </i> be assumed that each identified thread is
                 * still alive.
                 */
                // @ts-ignore
                 getAllThreadIds(): number[];
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the currently running thread. The returned time will have nanosecond
                 * precision but may not have nanosecond accuracy.
                 * <p>
                 * Method {@link #isCurrentThreadCpuTimeSupported()} may be used to
                 * determine if current thread CPU timing is supported on the virtual
                 * machine. On virtual machines where current thread CPU timing is
                 * supported, the method {@link #isThreadCpuTimeEnabled()} may be used to
                 * determine if thread CPU timing is actually enabled.
                 * </p>
                 * <p>
                 * The return value is identical to that which would be obtained by calling
                 * {@link #getThreadCpuTime} with an argument
                 * <code>Thread.currentThread().getId())</code>.
                 * </p>
                 */
                // @ts-ignore
                 getCurrentThreadCpuTime(): number;
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the current thread running in user mode. The returned time will have
                 * nanosecond precision but may not have nanosecond accuracy.
                 * <p>
                 * Method {@link #isCurrentThreadCpuTimeSupported()} may be used to
                 * determine if current thread CPU timing is supported on the virtual
                 * machine. On virtual machines where current thread CPU timing is
                 * supported, the method {@link #isThreadCpuTimeEnabled()} may be used to
                 * determine if thread CPU timing is actually enabled.
                 * </p>
                 * <p>
                 * The return value is identical to that which would be obtained by calling
                 * {@link #getThreadUserTime} with an argument
                 * <code>Thread.currentThread().getId())</code>.
                 * </p>
                 */
                // @ts-ignore
                 getCurrentThreadUserTime(): number;
                /**
                 * Returns the number of daemon threads currently alive in the virtual
                 * machine.
                 */
                // @ts-ignore
                 getDaemonThreadCount(): number;
                /**
                 * Returns the peak number of threads that have ever been alive in the
                 * virtual machine at any one instant since either the virtual machine
                 * start-up or the peak was reset.
                 */
                // @ts-ignore
                 getPeakThreadCount(): number;
                /**
                 * Returns the number of threads currently alive in the virtual machine.
                 * This includes both daemon threads and non-daemon threads.
                 */
                // @ts-ignore
                 getThreadCount(): number;
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the thread with the specified identifier. The returned time will have
                 * nanosecond precision but may not have nanosecond accuracy.
                 * <p>
                 * Method {@link #isThreadCpuTimeSupported()} may be used to determine if
                 * the CPU timing of threads is supported on the virtual machine. On virtual
                 * machines where current thread CPU timing is supported, the method
                 * {@link #isThreadCpuTimeEnabled()} may be used to determine if thread CPU
                 * timing is actually enabled.
                 * </p>
                 */
                // @ts-ignore
                 getThreadCpuTime(id: number): number;
                /**
                 * Returns a {@link ThreadInfo} object for the thread with the specified
                 * identifier. The returned object will not have a stack trace so that a
                 * call to its <code>getStackTrace()</code> method will result in an empty
                 * <code>StackTraceElement</code> array. Similarly, the returned object
                 * will hold no details of locked synchronizers or locked object monitors
                 * for the specified thread; calls to <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 */
                // @ts-ignore
                 getThreadInfo(id: number): java.lang.management.ThreadInfo;
                /**
                 * Returns an array of {@link ThreadInfo} objects ; one for each of the
                 * threads specified in the input array of identifiers. None of the objects
                 * in the return array will have a stack trace so that a call to its
                 * <code>getStackTrace()</code> method will result in an empty
                 * <code>StackTraceElement</code> array. Similarly, the returned object
                 * will hold no details of locked synchronizers or locked object monitors
                 * for the specified thread; calls to <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 */
                // @ts-ignore
                 getThreadInfo(ids: number): java.lang.management.ThreadInfo[];
                /**
                 * Returns an array of {@link ThreadInfo} objects ; one for each of the
                 * threads specified in the <code>ids</code> argument. The stack trace
                 * information in the returned objects will depend on the value of the
                 * <code>maxDepth</code> argument which specifies the maximum number of
                 * {@link StackTraceElement} instances to try and include. A subsequent call
                 * to any of the returned objects' <code>getStackTrace()</code> method
                 * should result in a {@link StackTraceElement} array of up to
                 * <code>maxDepth</code> elements. A <code>maxDepth</code> value of
                 * <code>Integer.MAX_VALUE</code> will attempt to obtain all of the stack
                 * trace information for each specified thread while a <code>maxDepth</code>
                 * value of zero will yield none.
                 * <p>
                 * The returned object will hold no details of locked synchronizers or
                 * locked object monitors for the specified thread; calls to
                 * <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 * </p>
                 */
                // @ts-ignore
                 getThreadInfo(ids: number, maxDepth: number): java.lang.management.ThreadInfo[];
                /**
                 * Returns an array of {@link ThreadInfo} objects; one for each of the
                 * threads specified in the <code>ids</code> argument. Each
                 * <code>ThreadInfo</code> will hold details of all of the stack trace
                 * information for each specified thread. The returned
                 * <code>ThreadInfo</code> objects will optionally contain details of all
                 * monitor objects and synchronizers locked by the corresponding thread. In
                 * order to retrieve locked monitor information the
                 * <code>lockedMonitors</code> argument should be set to <code>true</code>;
                 * in order to retrieve locked synchronizers information
                 * <code>lockedSynchronizers</code> should be set to <code>true</code>.
                 * For a given <code>ThreadInfo</code> element of the return array the
                 * optional information may be inspected by calling
                 * {@link ThreadInfo#getLockedMonitors()} and
                 * {@link ThreadInfo#getLockedSynchronizers()} respectively.
                 * <p>
                 * Both <code>lockedMonitors</code> and <code>lockedSynchronizers</code>
                 * arguments should only be set to <code>true</code> if the virtual
                 * machine supports the requested monitoring.
                 * </p>
                 */
                // @ts-ignore
                 getThreadInfo(ids: number, lockedMonitors: boolean, lockedSynchronizers: boolean): java.lang.management.ThreadInfo[];
                /**
                 * Returns a {@link ThreadInfo} object for the thread with the specified
                 * identifier. The stack trace information in the returned object will
                 * depend on the value of the <code>maxDepth</code> argument which
                 * specifies the maximum number of {@link StackTraceElement} instances to
                 * include. A subsequent call to the returned object's
                 * <code>getStackTrace()</code> method should then result in a
                 * {@link StackTraceElement} array of up to <code>maxDepth</code>
                 * elements. A <code>maxDepth</code> value of
                 * <code>Integer.MAX_VALUE</code> will obtain all of the stack trace
                 * information for the thread while a <code>maxDepth</code> value of zero
                 * will yield none.
                 * <p>
                 * It is possible that the virtual machine may be unable to supply any stack
                 * trace information for the specified thread. In that case the returned
                 * <code>ThreadInfo</code> object will have an empty array of
                 * <code>StackTraceElement</code>s.
                 * </p>
                 * <p>
                 * The returned object will hold no details of locked synchronizers or
                 * locked object monitors for the specified thread; calls to
                 * <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 * </p>
                 */
                // @ts-ignore
                 getThreadInfo(id: number, maxDepth: number): java.lang.management.ThreadInfo;
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the thread with the specified identifier when running in user mode. The
                 * returned time will have nanosecond precision but may not have nanosecond
                 * accuracy.
                 * <p>
                 * Method {@link #isThreadCpuTimeSupported()} may be used to determine if
                 * the CPU timing of threads is supported on the virtual machine. On virtual
                 * machines where current thread CPU timing is supported, the method
                 * {@link #isThreadCpuTimeEnabled()} may be used to determine if thread CPU
                 * timing is actually enabled.
                 * </p>
                 */
                // @ts-ignore
                 getThreadUserTime(id: number): number;
                /**
                 * Returns the number of threads that have been started in this virtual
                 * machine since it came into being.
                 */
                // @ts-ignore
                 getTotalStartedThreadCount(): number;
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the CPU timing of the current thread.
                 * <p>
                 * Note that this method must return <code>true</code> if
                 * {@link #isThreadCpuTimeSupported()} returns <code>true</code>.
                 * </p>
                 */
                // @ts-ignore
                 isCurrentThreadCpuTimeSupported(): boolean;
                /**
                 * Returns a boolean indication of whether or not the monitoring of thread
                 * contention situations is enabled on this virtual machine.
                 */
                // @ts-ignore
                 isThreadContentionMonitoringEnabled(): boolean;
                /**
                 * Returns a boolean indication of whether or not the monitoring of thread
                 * contention situations is supported on this virtual machine.
                 */
                // @ts-ignore
                 isThreadContentionMonitoringSupported(): boolean;
                /**
                 * Returns a boolean indication of whether or not the CPU timing of threads
                 * is enabled on this virtual machine.
                 */
                // @ts-ignore
                 isThreadCpuTimeEnabled(): boolean;
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the CPU time measurement of any threads (current or otherwise).
                 */
                // @ts-ignore
                 isThreadCpuTimeSupported(): boolean;
                /**
                 * Resets the peak thread count to be the current number of threads alive in
                 * the virtual machine when the call is made.
                 */
                // @ts-ignore
                 resetPeakThreadCount(): void;
                /**
                 * Updates the virtual machine to either enable or disable the monitoring of
                 * thread contention situations.
                 * <p>
                 * If it is supported, the virtual machine will initially not monitor thread
                 * contention situations.
                 * </p>
                 */
                // @ts-ignore
                 setThreadContentionMonitoringEnabled(enable: boolean): void;
                /**
                 * If supported, updates the virtual machine to either enable or disable the
                 * CPU timing of threads.
                 * <p>
                 * The default value of this property depends on the underlying operating
                 * system on which the virtual machine is running.
                 * </p>
                 */
                // @ts-ignore
                 setThreadCpuTimeEnabled(enable: boolean): void;
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the monitoring of object monitor usage.
                 */
                // @ts-ignore
                 isObjectMonitorUsageSupported(): boolean;
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the monitoring of ownable synchronizers (synchronizers that make
                 * use of the <code>AbstractOwnableSynchronizer</code> type and which are
                 * completely owned by a single thread).
                 */
                // @ts-ignore
                 isSynchronizerUsageSupported(): boolean;
                /**
                 * If supported by the virtual machine, this method can be used to retrieve
                 * the <code>long</code> id of all threads currently waiting on object
                 * monitors or ownable synchronizers (synchronizers that make use of the
                 * <code>AbstractOwnableSynchronizer</code> type and which are completely
                 * owned by a single thread). To determine the threads currently deadlocked
                 * by object monitors only use the {@link #findMonitorDeadlockedThreads()}
                 * method.
                 * <p>
                 * It is recommended that this method be used solely for problem
                 * determination analysis and not as a means of managing thread
                 * synchronization in a virtual machine. This is because the method may be
                 * very expensive to run.
                 * </p>
                 */
                // @ts-ignore
                 findDeadlockedThreads(): number[];
                /**
                 * Returns an array of {@link ThreadInfo} objects holding information on all
                 * threads that were alive when the call was invoked.
                 */
                // @ts-ignore
                 dumpAllThreads(lockedMonitors: boolean, lockedSynchronizers: boolean): java.lang.management.ThreadInfo[];
            }
        }
    }
}
