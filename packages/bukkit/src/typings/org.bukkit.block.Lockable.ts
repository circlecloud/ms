declare namespace org {
    namespace bukkit {
        namespace block {
            class Lockable {
                /**
                 * Checks if the container has a valid (non empty) key.
                 */
                public isLocked(): boolean;
                /**
                 * Gets the key needed to access the container.
                 */
                public getLock(): string;
                /**
                 * Sets the key required to access this container. Set to null (or empty
                 * string) to remove key.
                 */
                public setLock(key: string): void;
            }
        }
    }
}
