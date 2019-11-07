declare namespace java {
    namespace lang {
        namespace ref {
            // @ts-ignore
             class ReferenceQueue extends java.lang.Object {
                /**
                 * Constructs a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the next available reference from the queue
                 * if one is enqueued, null otherwise.  Does not wait
                 * for a reference to become available.
                 */
                // @ts-ignore
                public poll(): java.lang.ref.Reference;
                /**
                 * Return the next available enqueued reference on the queue, blocking
                 * indefinitely until one is available.
                 */
                // @ts-ignore
                public remove(): java.lang.ref.Reference;
                /**
                 * Return the next available enqueued reference on the queue, blocking
                 * up to the time given until one is available.  Return null if no
                 * reference became available.
                 */
                // @ts-ignore
                public remove(timeout: number): java.lang.ref.Reference;
            }
        }
    }
}
