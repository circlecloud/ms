// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface ScrollbarPeer {
                /**
                 * Sets the parameters for the scrollbar.
                 */
                // @ts-ignore
                 setValues(value: number, visible: number, minimum: number, maximum: number): void;
                /**
                 * Sets the line increment of the scrollbar.
                 */
                // @ts-ignore
                 setLineIncrement(l: number): void;
                /**
                 * Sets the page increment of the scrollbar.
                 */
                // @ts-ignore
                 setPageIncrement(l: number): void;
            }
        }
    }
}
