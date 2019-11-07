declare namespace java {
    namespace awt {
        namespace im {
            // @ts-ignore
            interface InputMethodRequests {
                /**
                 * Gets the location of a specified offset in the current composed text,
                 * or of the selection in committed text.
                 * This information is, for example, used to position the candidate window
                 * near the composed text, or a composition window near the location
                 * where committed text will be inserted.
                 * <p>
                 * If the component has composed text (because the most recent
                 * InputMethodEvent sent to it contained composed text), then the offset is
                 * relative to the composed text - offset 0 indicates the first character
                 * in the composed text. The location returned should be for this character.
                 * <p>
                 * If the component doesn't have composed text, the offset should be ignored,
                 * and the location returned should reflect the beginning (in line
                 * direction) of the highlight in the last line containing selected text.
                 * For example, for horizontal left-to-right text (such as English), the
                 * location to the left of the left-most character on the last line
                 * containing selected text is returned. For vertical top-to-bottom text,
                 * with lines proceeding from right to left, the location to the top of the
                 * left-most line containing selected text is returned.
                 * <p>
                 * The location is represented as a 0-thickness caret, that is, it has 0
                 * width if the text is drawn horizontally, and 0 height if the text is
                 * drawn vertically. Other text orientations need to be mapped to
                 * horizontal or vertical orientation. The rectangle uses absolute screen
                 * coordinates.
                 */
                // @ts-ignore
                 getTextLocation(offset: java.awt.font.TextHitInfo): java.awt.Rectangle;
                /**
                 * Gets the offset within the composed text for the specified absolute x
                 * and y coordinates on the screen. This information is used, for example
                 * to handle mouse clicks and the mouse cursor. The offset is relative to
                 * the composed text, so offset 0 indicates the beginning of the composed
                 * text.
                 * <p>
                 * Return null if the location is outside the area occupied by the composed
                 * text.
                 */
                // @ts-ignore
                 getLocationOffset(x: number, y: number): java.awt.font.TextHitInfo;
                /**
                 * Gets the offset of the insert position in the committed text contained
                 * in the text editing component. This is the offset at which characters
                 * entered through an input method are inserted. This information is used
                 * by an input method, for example, to examine the text surrounding the
                 * insert position.
                 */
                // @ts-ignore
                 getInsertPositionOffset(): number;
                /**
                 * Gets an iterator providing access to the entire text and attributes
                 * contained in the text editing component except for uncommitted
                 * text. Uncommitted (composed) text should be ignored for index
                 * calculations and should not be made accessible through the iterator.
                 * <p>
                 * The input method may provide a list of attributes that it is
                 * interested in. In that case, information about other attributes that
                 * the implementor may have need not be made accessible through the
                 * iterator. If the list is null, all available attribute information
                 * should be made accessible.
                 */
                // @ts-ignore
                 getCommittedText(beginIndex: number, endIndex: number, attributes: java.text.AttributedCharacterIterator.Attribute): java.text.AttributedCharacterIterator;
                /**
                 * Gets the length of the entire text contained in the text
                 * editing component except for uncommitted (composed) text.
                 */
                // @ts-ignore
                 getCommittedTextLength(): number;
                /**
                 * Gets the latest committed text from the text editing component and
                 * removes it from the component's text body.
                 * This is used for the "Undo Commit" feature in some input methods, where
                 * the committed text reverts to its previous composed state. The composed
                 * text will be sent to the component using an InputMethodEvent.
                 * <p>
                 * Generally, this feature should only be supported immediately after the
                 * text was committed, not after the user performed other operations on the
                 * text. When the feature is not supported, return null.
                 * <p>
                 * The input method may provide a list of attributes that it is
                 * interested in. In that case, information about other attributes that
                 * the implementor may have need not be made accessible through the
                 * iterator. If the list is null, all available attribute information
                 * should be made accessible.
                 */
                // @ts-ignore
                 cancelLatestCommittedText(attributes: java.text.AttributedCharacterIterator.Attribute): java.text.AttributedCharacterIterator;
                /**
                 * Gets the currently selected text from the text editing component.
                 * This may be used for a variety of purposes.
                 * One of them is the "Reconvert" feature in some input methods.
                 * In this case, the input method will typically send an input method event
                 * to replace the selected text with composed text. Depending on the input
                 * method's capabilities, this may be the original composed text for the
                 * selected text, the latest composed text entered anywhere in the text, or
                 * a version of the text that's converted back from the selected text.
                 * <p>
                 * The input method may provide a list of attributes that it is
                 * interested in. In that case, information about other attributes that
                 * the implementor may have need not be made accessible through the
                 * iterator. If the list is null, all available attribute information
                 * should be made accessible.
                 */
                // @ts-ignore
                 getSelectedText(attributes: java.text.AttributedCharacterIterator.Attribute): java.text.AttributedCharacterIterator;
            }
        }
    }
}
