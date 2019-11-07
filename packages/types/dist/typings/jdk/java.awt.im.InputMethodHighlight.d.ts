// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace im {
            // @ts-ignore
             class InputMethodHighlight extends java.lang.Object {
                /**
                 * Constructs an input method highlight record.
                 * The variation is set to 0, the style to null.
                 */
                // @ts-ignore
                constructor(selected: boolean, state: number)
                /**
                 * Constructs an input method highlight record.
                 * The style is set to null.
                 */
                // @ts-ignore
                constructor(selected: boolean, state: number, variation: number)
                /**
                 * Constructs an input method highlight record.
                 * The style attributes map provided must be unmodifiable.
                 */
                // @ts-ignore
                constructor(selected: boolean, state: number, variation: number, style: java.util.Map)
                // @ts-ignore
                public static RAW_TEXT: number;
                // @ts-ignore
                public static CONVERTED_TEXT: number;
                // @ts-ignore
                public static UNSELECTED_RAW_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight;
                // @ts-ignore
                public static SELECTED_RAW_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight;
                // @ts-ignore
                public static UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight;
                // @ts-ignore
                public static SELECTED_CONVERTED_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight;
                /**
                 * Returns whether the text range is selected.
                 */
                // @ts-ignore
                public isSelected(): boolean;
                /**
                 * Returns the conversion state of the text range.
                 */
                // @ts-ignore
                public getState(): number;
                /**
                 * Returns the variation of the text range.
                 */
                // @ts-ignore
                public getVariation(): number;
                /**
                 * Returns the rendering style attributes for the text range, or null.
                 */
                // @ts-ignore
                public getStyle(): java.util.Map;
            }
        }
    }
}
