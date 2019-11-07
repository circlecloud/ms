// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
            interface MemoryManagerMXBean {
                /**
                 * Returns the names of all of the memory pools managed by this
                 * <code>MXBean</code>.
                 */
                // @ts-ignore
                 getMemoryPoolNames(): java.lang.String[];
                /**
                 * Returns the name of this particular memory manager.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns <code>true</code> if this memory manager is still valid in the
                 * virtual machine. That is, the memory manager has not been eliminated from
                 * the virtual machine memory.
                 */
                // @ts-ignore
                 isValid(): boolean;
            }
        }
    }
}
