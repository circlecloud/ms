// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class TextArea extends java.awt.TextComponent {
            /**
             * Constructs a new text area with the empty string as text.
             * This text area is created with scrollbar visibility equal to
             * {@link #SCROLLBARS_BOTH}, so both vertical and horizontal
             * scrollbars will be visible for this text area.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new text area with the specified text.
             * This text area is created with scrollbar visibility equal to
             * {@link #SCROLLBARS_BOTH}, so both vertical and horizontal
             * scrollbars will be visible for this text area.
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Constructs a new text area with the specified number of
             * rows and columns and the empty string as text.
             * A column is an approximate average character
             * width that is platform-dependent.  The text area is created with
             * scrollbar visibility equal to {@link #SCROLLBARS_BOTH}, so both
             * vertical and horizontal scrollbars will be visible for this
             * text area.
             */
            // @ts-ignore
            constructor(rows: number, columns: number)
            /**
             * Constructs a new text area with the specified text,
             * and with the specified number of rows and columns.
             * A column is an approximate average character
             * width that is platform-dependent.  The text area is created with
             * scrollbar visibility equal to {@link #SCROLLBARS_BOTH}, so both
             * vertical and horizontal scrollbars will be visible for this
             * text area.
             */
            // @ts-ignore
            constructor(text: string, rows: number, columns: number)
            /**
             * Constructs a new text area with the specified text,
             * and with the rows, columns, and scroll bar visibility
             * as specified.  All <code>TextArea</code> constructors defer to
             * this one.
             * <p>
             * The <code>TextArea</code> class defines several constants
             * that can be supplied as values for the
             * <code>scrollbars</code> argument:
             * <ul>
             * <li><code>SCROLLBARS_BOTH</code>,
             * <li><code>SCROLLBARS_VERTICAL_ONLY</code>,
             * <li><code>SCROLLBARS_HORIZONTAL_ONLY</code>,
             * <li><code>SCROLLBARS_NONE</code>.
             * </ul>
             * Any other value for the
             * <code>scrollbars</code> argument is invalid and will result in
             * this text area being created with scrollbar visibility equal to
             * the default value of {@link #SCROLLBARS_BOTH}.
             */
            // @ts-ignore
            constructor(text: string, rows: number, columns: number, scrollbars: number)
            // @ts-ignore
            public static SCROLLBARS_BOTH: number;
            // @ts-ignore
            public static SCROLLBARS_VERTICAL_ONLY: number;
            // @ts-ignore
            public static SCROLLBARS_HORIZONTAL_ONLY: number;
            // @ts-ignore
            public static SCROLLBARS_NONE: number;
            /**
             * Creates the <code>TextArea</code>'s peer.  The peer allows us to modify
             * the appearance of the <code>TextArea</code> without changing any of its
             * functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Inserts the specified text at the specified position
             * in this text area.
             * <p>Note that passing <code>null</code> or inconsistent
             * parameters is invalid and will result in unspecified
             * behavior.
             */
            // @ts-ignore
            public insert(str: string, pos: number): void;
            // @ts-ignore
            public insertText(str: string, pos: number): void;
            /**
             * Appends the given text to the text area's current text.
             * <p>Note that passing <code>null</code> or inconsistent
             * parameters is invalid and will result in unspecified
             * behavior.
             */
            // @ts-ignore
            public append(str: string): void;
            // @ts-ignore
            public appendText(str: string): void;
            /**
             * Replaces text between the indicated start and end positions
             * with the specified replacement text.  The text at the end
             * position will not be replaced.  The text at the start
             * position will be replaced (unless the start position is the
             * same as the end position).
             * The text position is zero-based.  The inserted substring may be
             * of a different length than the text it replaces.
             * <p>Note that passing <code>null</code> or inconsistent
             * parameters is invalid and will result in unspecified
             * behavior.
             */
            // @ts-ignore
            public replaceRange(str: string, start: number, end: number): void;
            // @ts-ignore
            public replaceText(str: string, start: number, end: number): void;
            /**
             * Returns the number of rows in the text area.
             */
            // @ts-ignore
            public getRows(): number;
            /**
             * Sets the number of rows for this text area.
             */
            // @ts-ignore
            public setRows(rows: number): void;
            /**
             * Returns the number of columns in this text area.
             */
            // @ts-ignore
            public getColumns(): number;
            /**
             * Sets the number of columns for this text area.
             */
            // @ts-ignore
            public setColumns(columns: number): void;
            /**
             * Returns an enumerated value that indicates which scroll bars
             * the text area uses.
             * <p>
             * The <code>TextArea</code> class defines four integer constants
             * that are used to specify which scroll bars are available.
             * <code>TextArea</code> has one constructor that gives the
             * application discretion over scroll bars.
             */
            // @ts-ignore
            public getScrollbarVisibility(): number;
            /**
             * Determines the preferred size of a text area with the specified
             * number of rows and columns.
             */
            // @ts-ignore
            public getPreferredSize(rows: number, columns: number): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(rows: number, columns: number): java.awt.Dimension;
            /**
             * Determines the preferred size of this text area.
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(): java.awt.Dimension;
            /**
             * Determines the minimum size of a text area with the specified
             * number of rows and columns.
             */
            // @ts-ignore
            public getMinimumSize(rows: number, columns: number): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(rows: number, columns: number): java.awt.Dimension;
            /**
             * Determines the minimum size of this text area.
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(): java.awt.Dimension;
            /**
             * Returns a string representing the state of this <code>TextArea</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Returns the <code>AccessibleContext</code> associated with
             * this <code>TextArea</code>. For text areas, the
             * <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleAWTTextArea</code>.
             * A new <code>AccessibleAWTTextArea</code> instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
