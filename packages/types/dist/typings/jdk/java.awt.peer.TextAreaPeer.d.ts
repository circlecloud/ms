declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface TextAreaPeer {
                /**
                 * Inserts the specified text at the specified position in the document.
                 */
                // @ts-ignore
                 insert(text: string, pos: number): void;
                /**
                 * Replaces a range of text by the specified string.
                 */
                // @ts-ignore
                 replaceRange(text: string, start: number, end: number): void;
                /**
                 * Returns the preferred size of a textarea with the specified number of
                 * columns and rows.
                 */
                // @ts-ignore
                 getPreferredSize(rows: number, columns: number): java.awt.Dimension;
                /**
                 * Returns the minimum size of a textarea with the specified number of
                 * columns and rows.
                 */
                // @ts-ignore
                 getMinimumSize(rows: number, columns: number): java.awt.Dimension;
            }
        }
    }
}
