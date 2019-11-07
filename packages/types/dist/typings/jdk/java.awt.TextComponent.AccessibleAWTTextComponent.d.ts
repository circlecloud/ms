// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace TextComponent {
            // @ts-ignore
            protected class AccessibleAWTTextComponent extends java.awt.Component.AccessibleAWTComponent {
                /**
                 * Constructs an AccessibleAWTTextComponent.  Adds a listener to track
                 * caret change.
                 */
                // @ts-ignore
                constructor()
                /**
                 * TextListener notification of a text value change.
                 */
                // @ts-ignore
                public textValueChanged(textEvent: java.awt.event.TextEvent): void;
                /**
                 * Gets the state set of the TextComponent.
                 * The AccessibleStateSet of an object is composed of a set of
                 * unique AccessibleStates.  A change in the AccessibleStateSet
                 * of an object will cause a PropertyChangeEvent to be fired
                 * for the AccessibleContext.ACCESSIBLE_STATE_PROPERTY property.
                 */
                // @ts-ignore
                public getAccessibleStateSet(): any /*javax.accessibility.AccessibleStateSet*/;
                /**
                 * Gets the role of this object.
                 */
                // @ts-ignore
                public getAccessibleRole(): any /*javax.accessibility.AccessibleRole*/;
                /**
                 * Get the AccessibleText associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleText interface on behalf of itself.
                 */
                // @ts-ignore
                public getAccessibleText(): any /*javax.accessibility.AccessibleText*/;
                /**
                 * Given a point in local coordinates, return the zero-based index
                 * of the character under that Point.  If the point is invalid,
                 * this method returns -1.
                 */
                // @ts-ignore
                public getIndexAtPoint(p: java.awt.Point): number;
                /**
                 * Determines the bounding box of the character at the given
                 * index into the string.  The bounds are returned in local
                 * coordinates.  If the index is invalid a null rectangle
                 * is returned.
                 */
                // @ts-ignore
                public getCharacterBounds(i: number): java.awt.Rectangle;
                /**
                 * Returns the number of characters (valid indicies)
                 */
                // @ts-ignore
                public getCharCount(): number;
                /**
                 * Returns the zero-based offset of the caret.
                 * Note: The character to the right of the caret will have the
                 * same index value as the offset (the caret is between
                 * two characters).
                 */
                // @ts-ignore
                public getCaretPosition(): number;
                /**
                 * Returns the AttributeSet for a given character (at a given index).
                 */
                // @ts-ignore
                public getCharacterAttribute(i: number): any /*javax.swing.text.AttributeSet*/;
                /**
                 * Returns the start offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * Return 0 if the text is empty, or the caret position
                 * if no selection.
                 */
                // @ts-ignore
                public getSelectionStart(): number;
                /**
                 * Returns the end offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * Return 0 if the text is empty, or the caret position
                 * if no selection.
                 */
                // @ts-ignore
                public getSelectionEnd(): number;
                /**
                 * Returns the portion of the text that is selected.
                 */
                // @ts-ignore
                public getSelectedText(): string;
                /**
                 * Returns the String at a given index.
                 */
                // @ts-ignore
                public getAtIndex(part: number, index: number): string;
                /**
                 * Returns the String after a given index.
                 */
                // @ts-ignore
                public getAfterIndex(part: number, index: number): string;
                /**
                 * Returns the String before a given index.
                 */
                // @ts-ignore
                public getBeforeIndex(part: number, index: number): string;
            }
        }
    }
}
