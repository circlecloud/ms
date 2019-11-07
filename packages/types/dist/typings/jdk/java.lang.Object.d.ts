// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Object {
            /**
             * Constructs a new instance of this class.
             */
            // @ts-ignore
            constructor()
            /**
             * Answers a new instance of the same class as the receiver,
             * whose slots have been filled in with the values in the
             * slots of the receiver.
             * <p>
             * Classes which wish to support cloning must specify that
             * they implement the Cloneable interface, since the native
             * implementation checks for this.
             */
            // @ts-ignore
            protected clone(): java.lang.Object;
            /**
             * Compares the argument to the receiver, and answers true
             * if they represent the <em>same</em> object using a class
             * specific comparison. The implementation in Object answers
             * true only if the argument is the exact same object as the
             * receiver (==).
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Called by the virtual machine when there are no longer any (non-weak)
             * references to the receiver. Subclasses can use this facility to
             * guarantee that any associated resources are cleaned up before
             * the receiver is garbage collected. Uncaught exceptions which are
             * thrown during the running of the method cause it to terminate
             * immediately, but are otherwise ignored.
             * <p>
             * Note: The virtual machine assumes that the implementation
             * in class Object is empty.
             */
            // @ts-ignore
            protected finalize(): void;
            /**
             * Answers the unique instance of java.lang.Class which
             * represents the class of the receiver.
             */
            // @ts-ignore
            public getClass(): java.lang.Class;
            /**
             * Answers an integer hash code for the receiver. Any two
             * objects which answer <code>true</code> when passed to
             * <code>.equals</code> must answer the same value for this
             * method.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Causes one thread which is <code>wait</code>ing on the
             * receiver to be made ready to run. This does not guarantee
             * that the thread will immediately run. The method can only
             * be invoked by a thread which owns the receiver's monitor.
             */
            // @ts-ignore
            public notify(): void;
            /**
             * Causes all threads which are <code>wait</code>ing on the
             * receiver to be made ready to run. The threads are scheduled
             * according to their priorities as specified in class Thread.
             * Between any two threads of the same priority the one which
             * waited first will be the first thread that runs after
             * being notified. The method can only be invoked by a thread
             * which owns the receiver's monitor.
             */
            // @ts-ignore
            public notifyAll(): void;
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Causes the thread which sent this message to be made not
             * ready to run pending some change in the receiver (as
             * indicated by <code>notify</code> or <code>notifyAll</code>).
             * The method can only be invoked by a thread which owns the
             * receiver's monitor. A waiting thread can be sent
             * <code>interrupt()</code> to cause it to prematurely stop
             * waiting, so senders of wait should check that the condition
             * they were waiting for has been met.
             * <p>
             * When the thread waits, it gives up ownership of the
             * receiver's monitor. When it is notified (or interrupted) it
             * re-acquires the monitor before it starts running.
             */
            // @ts-ignore
            public wait(): void;
            /**
             * Causes the thread which sent this message to be made not
             * ready to run either pending some change in the receiver
             * (as indicated by <code>notify</code> or <code>notifyAll</code>)
             * or the expiration of the timeout. The method can only be invoked
             * by a thread which owns the receiver's monitor. A waiting thread
             * can be sent <code>interrupt()</code> to cause it to prematurely
             * stop waiting, so senders of wait should check that the condition
             * they were waiting for has been met.
             * <p>
             * When the thread waits, it gives up ownership of the
             * receiver's monitor. When it is notified (or interrupted) it
             * re-acquires the monitor before it starts running.
             */
            // @ts-ignore
            public wait(time: number): void;
            /**
             * Causes the thread which sent this message to be made not
             * ready to run either pending some change in the receiver
             * (as indicated by <code>notify</code> or <code>notifyAll</code>)
             * or the expiration of the timeout. The method can only be invoked
             * by a thread which owns the receiver's monitor. A waiting thread
             * can be sent <code>interrupt()</code> to cause it to prematurely
             * stop waiting, so senders of wait should check that the condition
             * they were waiting for has been met.
             * <p>
             * When the thread waits, it gives up ownership of the
             * receiver's monitor. When it is notified (or interrupted) it
             * re-acquires the monitor before it starts running.
             */
            // @ts-ignore
            public wait(time: number, frac: number): void;
        }
    }
}
