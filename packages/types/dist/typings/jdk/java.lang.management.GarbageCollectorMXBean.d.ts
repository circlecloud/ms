// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface GarbageCollectorMXBean {
                /**
                 * Returns in a long the number of garbage collections carried out by the
                 * associated collector.
                 */
                // @ts-ignore
                 getCollectionCount(): number;
                /**
                 * For the associated garbage collector, returns the total amount of time in
                 * milliseconds that it has spent carrying out garbage collection.
                 */
                // @ts-ignore
                 getCollectionTime(): number;
            }
        }
    }
}
