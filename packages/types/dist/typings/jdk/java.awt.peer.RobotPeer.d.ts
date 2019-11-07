declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface RobotPeer {
                /**
                 * Moves the mouse pointer to the specified screen location.
                 */
                // @ts-ignore
                 mouseMove(x: number, y: number): void;
                /**
                 * Simulates a mouse press with the specified button(s).
                 */
                // @ts-ignore
                 mousePress(buttons: number): void;
                /**
                 * Simulates a mouse release with the specified button(s).
                 */
                // @ts-ignore
                 mouseRelease(buttons: number): void;
                /**
                 * Simulates mouse wheel action.
                 */
                // @ts-ignore
                 mouseWheel(wheelAmt: number): void;
                /**
                 * Simulates a key press of the specified key.
                 */
                // @ts-ignore
                 keyPress(keycode: number): void;
                /**
                 * Simulates a key release of the specified key.
                 */
                // @ts-ignore
                 keyRelease(keycode: number): void;
                /**
                 * Gets the RGB value of the specified pixel on screen.
                 */
                // @ts-ignore
                 getRGBPixel(x: number, y: number): number;
                /**
                 * Gets the RGB values of the specified screen area as an array.
                 */
                // @ts-ignore
                 getRGBPixels(bounds: java.awt.Rectangle): number[];
                /**
                 * Disposes the robot peer when it is not needed anymore.
                 */
                // @ts-ignore
                 dispose(): void;
            }
        }
    }
}
