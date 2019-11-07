declare namespace java {
    namespace awt {
        // @ts-ignore
         class Label extends java.awt.Component {
            /**
             * Constructs an empty label.
             * The text of the label is the empty string <code>""</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new label with the specified string of text,
             * left justified.
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Constructs a new label that presents the specified string of
             * text with the specified alignment.
             * Possible values for <code>alignment</code> are <code>Label.LEFT</code>,
             * <code>Label.RIGHT</code>, and <code>Label.CENTER</code>.
             */
            // @ts-ignore
            constructor(text: string, alignment: number)
            // @ts-ignore
            public static LEFT: number;
            // @ts-ignore
            public static CENTER: number;
            // @ts-ignore
            public static RIGHT: number;
            /**
             * Creates the peer for this label.  The peer allows us to
             * modify the appearance of the label without changing its
             * functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Gets the current alignment of this label. Possible values are
             * <code>Label.LEFT</code>, <code>Label.RIGHT</code>, and
             * <code>Label.CENTER</code>.
             */
            // @ts-ignore
            public getAlignment(): number;
            /**
             * Sets the alignment for this label to the specified alignment.
             * Possible values are <code>Label.LEFT</code>,
             * <code>Label.RIGHT</code>, and <code>Label.CENTER</code>.
             */
            // @ts-ignore
            public setAlignment(alignment: number): void;
            /**
             * Gets the text of this label.
             */
            // @ts-ignore
            public getText(): string;
            /**
             * Sets the text for this label to the specified text.
             */
            // @ts-ignore
            public setText(text: string): void;
            /**
             * Returns a string representing the state of this <code>Label</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the AccessibleContext associated with this Label.
             * For labels, the AccessibleContext takes the form of an
             * AccessibleAWTLabel.
             * A new AccessibleAWTLabel instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
