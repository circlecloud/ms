declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class InputMethodEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>InputMethodEvent</code> with the specified
                 * source component, type, time, text, caret, and visiblePosition.
                 * <p>
                 * The offsets of caret and visiblePosition are relative to the current
                 * composed text; that is, the composed text within <code>text</code>
                 * if this is an <code>INPUT_METHOD_TEXT_CHANGED</code> event,
                 * the composed text within the <code>text</code> of the
                 * preceding <code>INPUT_METHOD_TEXT_CHANGED</code> event otherwise.
                 * <p>Note that passing in an invalid <code>id</code> results in
                 * unspecified behavior. This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, text: java.text.AttributedCharacterIterator, committedCharacterCount: number, caret: java.awt.font.TextHitInfo, visiblePosition: java.awt.font.TextHitInfo)
                /**
                 * Constructs an <code>InputMethodEvent</code> with the specified
                 * source component, type, text, caret, and visiblePosition.
                 * <p>
                 * The offsets of caret and visiblePosition are relative to the current
                 * composed text; that is, the composed text within <code>text</code>
                 * if this is an <code>INPUT_METHOD_TEXT_CHANGED</code> event,
                 * the composed text within the <code>text</code> of the
                 * preceding <code>INPUT_METHOD_TEXT_CHANGED</code> event otherwise.
                 * The time stamp for this event is initialized by invoking
                 * {@link java.awt.EventQueue#getMostRecentEventTime()}.
                 * <p>Note that passing in an invalid <code>id</code> results in
                 * unspecified behavior. This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, text: java.text.AttributedCharacterIterator, committedCharacterCount: number, caret: java.awt.font.TextHitInfo, visiblePosition: java.awt.font.TextHitInfo)
                /**
                 * Constructs an <code>InputMethodEvent</code> with the
                 * specified source component, type, caret, and visiblePosition.
                 * The text is set to <code>null</code>,
                 * <code>committedCharacterCount</code> to 0.
                 * <p>
                 * The offsets of <code>caret</code> and <code>visiblePosition</code>
                 * are relative to the current composed text; that is,
                 * the composed text within the <code>text</code> of the
                 * preceding <code>INPUT_METHOD_TEXT_CHANGED</code> event if the
                 * event being constructed as a <code>CARET_POSITION_CHANGED</code> event.
                 * For an <code>INPUT_METHOD_TEXT_CHANGED</code> event without text,
                 * <code>caret</code> and <code>visiblePosition</code> must be
                 * <code>null</code>.
                 * The time stamp for this event is initialized by invoking
                 * {@link java.awt.EventQueue#getMostRecentEventTime()}.
                 * <p>Note that passing in an invalid <code>id</code> results in
                 * unspecified behavior. This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, caret: java.awt.font.TextHitInfo, visiblePosition: java.awt.font.TextHitInfo)
                // @ts-ignore
                public static INPUT_METHOD_FIRST: number;
                // @ts-ignore
                public static INPUT_METHOD_TEXT_CHANGED: number;
                // @ts-ignore
                public static CARET_POSITION_CHANGED: number;
                // @ts-ignore
                public static INPUT_METHOD_LAST: number;
                /**
                 * Gets the combined committed and composed text.
                 * Characters from index 0 to index <code>getCommittedCharacterCount() - 1</code> are committed
                 * text, the remaining characters are composed text.
                 */
                // @ts-ignore
                public getText(): java.text.AttributedCharacterIterator;
                /**
                 * Gets the number of committed characters in the text.
                 */
                // @ts-ignore
                public getCommittedCharacterCount(): number;
                /**
                 * Gets the caret.
                 * <p>
                 * The offset of the caret is relative to the current
                 * composed text; that is, the composed text within getText()
                 * if this is an <code>INPUT_METHOD_TEXT_CHANGED</code> event,
                 * the composed text within getText() of the
                 * preceding <code>INPUT_METHOD_TEXT_CHANGED</code> event otherwise.
                 */
                // @ts-ignore
                public getCaret(): java.awt.font.TextHitInfo;
                /**
                 * Gets the position that's most important to be visible.
                 * <p>
                 * The offset of the visible position is relative to the current
                 * composed text; that is, the composed text within getText()
                 * if this is an <code>INPUT_METHOD_TEXT_CHANGED</code> event,
                 * the composed text within getText() of the
                 * preceding <code>INPUT_METHOD_TEXT_CHANGED</code> event otherwise.
                 */
                // @ts-ignore
                public getVisiblePosition(): java.awt.font.TextHitInfo;
                /**
                 * Consumes this event so that it will not be processed
                 * in the default manner by the source which originated it.
                 */
                // @ts-ignore
                public consume(): void;
                /**
                 * Returns whether or not this event has been consumed.
                 */
                // @ts-ignore
                public isConsumed(): boolean;
                /**
                 * Returns the time stamp of when this event occurred.
                 */
                // @ts-ignore
                public getWhen(): number;
                /**
                 * Returns a parameter string identifying this event.
                 * This method is useful for event-logging and for debugging.
                 * It contains the event ID in text form, the characters of the
                 * committed and composed text
                 * separated by "+", the number of committed characters,
                 * the caret, and the visible position.
                 */
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
