declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Lockable {
                /**
                 * Checks if the container has a valid (non empty) key.
                 */
                 isLocked(): boolean;
                /**
                 * Gets the key needed to access the container.
                 */
                 getLock(): string;
                /**
                 * Sets the key required to access this container. Set to null (or empty
                 * string) to remove key.
                 */
                 setLock(key: string): void;
            }
        }
    }
}
