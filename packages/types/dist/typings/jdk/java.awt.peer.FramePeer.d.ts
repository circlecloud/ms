declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface FramePeer {
                /**
                 * Sets the title on the frame.
                 */
                // @ts-ignore
                 setTitle(title: string): void;
                /**
                 * Sets the menu bar for the frame.
                 */
                // @ts-ignore
                 setMenuBar(mb: java.awt.MenuBar): void;
                /**
                 * Sets if the frame should be resizable or not.
                 */
                // @ts-ignore
                 setResizable(resizeable: boolean): void;
                /**
                 * Changes the state of the frame.
                 */
                // @ts-ignore
                 setState(state: number): void;
                /**
                 * Returns the current state of the frame.
                 */
                // @ts-ignore
                 getState(): number;
                /**
                 * Sets the bounds of the frame when it becomes maximized.
                 */
                // @ts-ignore
                 setMaximizedBounds(bounds: java.awt.Rectangle): void;
                /**
                 * Sets the size and location for embedded frames. (On embedded frames,
                 * setLocation() and setBounds() always set the frame to (0,0) for
                 * backwards compatibility.
                 */
                // @ts-ignore
                 setBoundsPrivate(x: number, y: number, width: number, height: number): void;
                /**
                 * Returns the size and location for embedded frames. (On embedded frames,
                 * setLocation() and setBounds() always set the frame to (0,0) for
                 * backwards compatibility.
                 */
                // @ts-ignore
                 getBoundsPrivate(): java.awt.Rectangle;
                /**
                 * Requests the peer to emulate window activation.
                 */
                // @ts-ignore
                 emulateActivation(activate: boolean): void;
            }
        }
    }
}
