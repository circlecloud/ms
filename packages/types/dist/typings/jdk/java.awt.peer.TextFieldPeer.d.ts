// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface TextFieldPeer {
                /**
                 * Sets the echo character.
                 */
                // @ts-ignore
                 setEchoChar(echoChar: string): void;
                /**
                 * Returns the preferred size of the text field with the specified number
                 * of columns.
                 */
                // @ts-ignore
                 getPreferredSize(columns: number): java.awt.Dimension;
                /**
                 * Returns the minimum size of the text field with the specified number
                 * of columns.
                 */
                // @ts-ignore
                 getMinimumSize(columns: number): java.awt.Dimension;
            }
        }
    }
}
