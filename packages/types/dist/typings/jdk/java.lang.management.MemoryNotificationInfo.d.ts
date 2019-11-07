declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
             class MemoryNotificationInfo extends java.lang.Object {
                /**
                 * Creates a new <code>MemoryNotificationInfo</code> instance.
                 */
                // @ts-ignore
                constructor(poolName: string, usage: java.lang.management.MemoryUsage, count: number)
                // @ts-ignore
                public static MEMORY_THRESHOLD_EXCEEDED: string;
                // @ts-ignore
                public static MEMORY_COLLECTION_THRESHOLD_EXCEEDED: string;
                /**
                 * Returns the number of times that the memory usage has crossed the
                 * threshold relevant to the type of notification when the notification was
                 * constructed. For notifications of the {@link #MEMORY_THRESHOLD_EXCEEDED}
                 * type, this will a count of the number of times the memory usage threshold
                 * has been met or exceeded. For
                 * {@link #MEMORY_COLLECTION_THRESHOLD_EXCEEDED} notifications, this will be
                 * the number of times that the collection usage threshold was passed.
                 */
                // @ts-ignore
                public getCount(): number;
                /**
                 * Returns the name of the memory pool that the notification relates to.
                 */
                // @ts-ignore
                public getPoolName(): string;
                /**
                 * Returns an instance of {@link MemoryUsage} that encapsulates the memory
                 * usage of the memory pool that gave rise to this notification at the time
                 * the notification was created. The <code>MemoryUsage</code> may be
                 * interrogated by the caller to find out the details of the memory usage.
                 */
                // @ts-ignore
                public getUsage(): java.lang.management.MemoryUsage;
                /**
                 * Receives a {@link CompositeData} representing a
                 * <code>MemoryNotificationInfo</code> object and attempts to return
                 * the root <code>MemoryNotificationInfo</code> instance.
                 */
                // @ts-ignore
                public static from(cd: any /*javax.management.openmbean.CompositeData*/): java.lang.management.MemoryNotificationInfo;
            }
        }
    }
}
