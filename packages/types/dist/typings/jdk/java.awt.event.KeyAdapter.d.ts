// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            abstract class KeyAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when a key has been typed.
                 * This event occurs when a key press is followed by a key release.
                 */
                // @ts-ignore
                public keyTyped(e: java.awt.event.KeyEvent): void;
                /**
                 * Invoked when a key has been pressed.
                 */
                // @ts-ignore
                public keyPressed(e: java.awt.event.KeyEvent): void;
                /**
                 * Invoked when a key has been released.
                 */
                // @ts-ignore
                public keyReleased(e: java.awt.event.KeyEvent): void;
            }
        }
    }
}
