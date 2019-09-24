declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            interface Openable {
                /**
                 * Check to see if the door is open.
                 */
                 isOpen(): boolean;
                /**
                 * Configure this door to be either open or closed;
                 */
                 setOpen(isOpen: boolean): void;
            }
        }
    }
}
