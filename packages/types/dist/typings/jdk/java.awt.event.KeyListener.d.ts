declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            interface KeyListener {
                /**
                 * Invoked when a key has been typed.
                 * See the class description for {@link KeyEvent} for a definition of
                 * a key typed event.
                 */
                // @ts-ignore
                 keyTyped(e: java.awt.event.KeyEvent): void;
                /**
                 * Invoked when a key has been pressed.
                 * See the class description for {@link KeyEvent} for a definition of
                 * a key pressed event.
                 */
                // @ts-ignore
                 keyPressed(e: java.awt.event.KeyEvent): void;
                /**
                 * Invoked when a key has been released.
                 * See the class description for {@link KeyEvent} for a definition of
                 * a key released event.
                 */
                // @ts-ignore
                 keyReleased(e: java.awt.event.KeyEvent): void;
            }
        }
    }
}
