declare namespace org {
    namespace bukkit {
        namespace material {
            class Openable {
                /**
                 * Check to see if the door is open.
                 */
                public isOpen(): boolean;
                /**
                 * Configure this door to be either open or closed;
                 */
                public setOpen(isOpen: boolean): void;
            }
        }
    }
}
