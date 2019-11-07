declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface MouseInfoPeer {
                /**
                 * This method does two things: it fills the point fields with
                 * the current coordinates of the mouse cursor and returns the
                 * number of the screen device where the pointer is located.
                 * The number of the screen device is only returned for independent
                 * devices (which are not parts of a virtual screen device).
                 * For virtual screen devices, 0 is returned.
                 * Mouse coordinates are also calculated depending on whether
                 * or not the screen device is virtual. For virtual screen
                 * devices, pointer coordinates are calculated in the virtual
                 * coordinate system. Otherwise, coordinates are calculated in
                 * the coordinate system of the screen device where the pointer
                 * is located.
                 * See java.awt.GraphicsConfiguration documentation for more
                 * details about virtual screen devices.
                 */
                // @ts-ignore
                 fillPointWithCoords(point: java.awt.Point): number;
                /**
                 * Returns whether or not the window is located under the mouse
                 * pointer. The window is considered to be under the mouse pointer
                 * if it is showing on the screen, and the mouse pointer is above
                 * the part of the window that is not obscured by any other windows.
                 */
                // @ts-ignore
                 isWindowUnderMouse(w: java.awt.Window): boolean;
            }
        }
    }
}
