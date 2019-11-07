declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Lockable {
                /**
                 * Checks if the container has a valid (non empty) key.
                 */
                // @ts-ignore
                 isLocked(): boolean;
                /**
                 * Gets the key needed to access the container.
                 */
                // @ts-ignore
                 getLock(): string;
                /**
                 * Sets the key required to access this container. Set to null (or empty
                 * string) to remove key.
                 */
                // @ts-ignore
                 setLock(key: string): void;
            }
        }
    }
}
