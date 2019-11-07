// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface BufferPoolMXBean {
                /**
                 * Returns the name of the buffer pool.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns the number of buffers of the pool.
                 */
                // @ts-ignore
                 getCount(): number;
                /**
                 * Returns the total capacity of the buffers in this pool.
                 */
                // @ts-ignore
                 getTotalCapacity(): number;
                /**
                 * Returns the count of used memory.
                 */
                // @ts-ignore
                 getMemoryUsed(): number;
            }
        }
    }
}
