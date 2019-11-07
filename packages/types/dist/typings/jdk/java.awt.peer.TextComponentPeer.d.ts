declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface TextComponentPeer {
                /**
                 * Sets if the text component should be editable or not.
                 */
                // @ts-ignore
                 setEditable(editable: boolean): void;
                /**
                 * Returns the current content of the text component.
                 */
                // @ts-ignore
                 getText(): string;
                /**
                 * Sets the content for the text component.
                 */
                // @ts-ignore
                 setText(text: string): void;
                /**
                 * Returns the start index of the current selection.
                 */
                // @ts-ignore
                 getSelectionStart(): number;
                /**
                 * Returns the end index of the current selection.
                 */
                // @ts-ignore
                 getSelectionEnd(): number;
                /**
                 * Selects an area of the text component.
                 */
                // @ts-ignore
                 select(selStart: number, selEnd: number): void;
                /**
                 * Sets the caret position of the text component.
                 */
                // @ts-ignore
                 setCaretPosition(pos: number): void;
                /**
                 * Returns the current caret position.
                 */
                // @ts-ignore
                 getCaretPosition(): number;
                /**
                 * Returns the input method requests.
                 */
                // @ts-ignore
                 getInputMethodRequests(): java.awt.im.InputMethodRequests;
            }
        }
    }
}
