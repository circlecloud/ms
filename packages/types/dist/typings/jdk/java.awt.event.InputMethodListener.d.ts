// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            interface InputMethodListener {
                /**
                 * Invoked when the text entered through an input method has changed.
                 */
                // @ts-ignore
                 inputMethodTextChanged(event: java.awt.event.InputMethodEvent): void;
                /**
                 * Invoked when the caret within composed text has changed.
                 */
                // @ts-ignore
                 caretPositionChanged(event: java.awt.event.InputMethodEvent): void;
            }
        }
    }
}
