declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
                // @ts-ignore
                interface ReadWriteLock {
                    /**
                     * Returns the lock used for reading.
                     */
                    // @ts-ignore
                     readLock(): java.util.concurrent.locks.Lock;
                    /**
                     * Returns the lock used for writing.
                     */
                    // @ts-ignore
                     writeLock(): java.util.concurrent.locks.Lock;
                }
            }
        }
    }
}
