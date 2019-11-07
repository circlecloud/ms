declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
             class MemoryUsage extends java.lang.Object {
                /**
                 * Constructs a new <code>MemoryUsage</code> instance.
                 */
                // @ts-ignore
                constructor(init: number, used: number, committed: number, max: number)
                /**
                 * Returns the amount of memory that has been pledged by the operating
                 * system for the virtual machine to use. This value is in bytes.
                 */
                // @ts-ignore
                public getCommitted(): number;
                /**
                 * Returns the initial amount of memory requested from the underlying
                 * operating system when the virtual machine started up. The value is given
                 * in bytes.
                 * <p>
                 * if the initial memory size was not defined, this method will return a
                 * value of <code>-1</code>.
                 * </p>
                 */
                // @ts-ignore
                public getInit(): number;
                /**
                 * Returns the maximum amount of memory that is available to the virtual
                 * machine which may change over the lifecycle of the virtual machine. The
                 * value is in bytes.
                 */
                // @ts-ignore
                public getMax(): number;
                /**
                 * Returns the number of bytes currently used for memory management
                 * purposes.
                 */
                // @ts-ignore
                public getUsed(): number;
                /**
                 * Returns a text description of this memory usage.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Receives a {@link CompositeData} representing a <code>MemoryUsage</code>
                 * object and attempts to return the root <code>MemoryUsage</code>
                 * instance.
                 */
                // @ts-ignore
                public static from(cd: any /*javax.management.openmbean.CompositeData*/): java.lang.management.MemoryUsage;
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
