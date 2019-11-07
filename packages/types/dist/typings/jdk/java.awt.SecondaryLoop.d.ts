declare namespace java {
    namespace awt {
        // @ts-ignore
        interface SecondaryLoop {
            /**
             * Blocks the execution of the current thread and enters a new
             * secondary event loop on the event dispatch thread.
             * <p>
             * This method can be called by any thread including the event
             * dispatch thread. This thread will be blocked until the {@link
             * #exit} method is called or the loop is terminated. A new
             * secondary loop will be created on the event dispatch thread
             * for dispatching events in either case.
             * <p>
             * This method can only start one new event loop at a time per
             * object. If a secondary event loop has already been started
             * by this object and is currently still running, this method
             * returns {@code false} to indicate that it was not successful
             * in starting a new event loop. Otherwise, this method blocks
             * the calling thread and later returns {@code true} when the
             * new event loop is terminated. At such time, this object can
             * again be used to start another new event loop.
             */
            // @ts-ignore
             enter(): boolean;
            /**
             * Unblocks the execution of the thread blocked by the {@link
             * #enter} method and exits the secondary loop.
             * <p>
             * This method resumes the thread that called the {@link #enter}
             * method and exits the secondary loop that was created when
             * the {@link #enter} method was invoked.
             * <p>
             * Note that if any other secondary loop is started while this
             * loop is running, the blocked thread will not resume execution
             * until the nested loop is terminated.
             * <p>
             * If this secondary loop has not been started with the {@link
             * #enter} method, or this secondary loop has already finished
             * with the {@link #exit} method, this method returns {@code
             * false}, otherwise {@code true} is returned.
             */
            // @ts-ignore
             exit(): boolean;
        }
    }
}
