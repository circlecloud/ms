// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class KeyEvent extends java.awt.event.InputEvent {
                /**
                 * Constructs a <code>KeyEvent</code> object.
                 * <p>This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, keyCode: number, keyChar: string, keyLocation: number)
                /**
                 * Constructs a <code>KeyEvent</code> object.
                 * <p> This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, keyCode: number, keyChar: string)
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, keyCode: number)
                // @ts-ignore
                public static KEY_FIRST: number;
                // @ts-ignore
                public static KEY_LAST: number;
                // @ts-ignore
                public static KEY_TYPED: number;
                // @ts-ignore
                public static KEY_PRESSED: number;
                // @ts-ignore
                public static KEY_RELEASED: number;
                // @ts-ignore
                public static VK_ENTER: number;
                // @ts-ignore
                public static VK_BACK_SPACE: number;
                // @ts-ignore
                public static VK_TAB: number;
                // @ts-ignore
                public static VK_CANCEL: number;
                // @ts-ignore
                public static VK_CLEAR: number;
                // @ts-ignore
                public static VK_SHIFT: number;
                // @ts-ignore
                public static VK_CONTROL: number;
                // @ts-ignore
                public static VK_ALT: number;
                // @ts-ignore
                public static VK_PAUSE: number;
                // @ts-ignore
                public static VK_CAPS_LOCK: number;
                // @ts-ignore
                public static VK_ESCAPE: number;
                // @ts-ignore
                public static VK_SPACE: number;
                // @ts-ignore
                public static VK_PAGE_UP: number;
                // @ts-ignore
                public static VK_PAGE_DOWN: number;
                // @ts-ignore
                public static VK_END: number;
                // @ts-ignore
                public static VK_HOME: number;
                // @ts-ignore
                public static VK_LEFT: number;
                // @ts-ignore
                public static VK_UP: number;
                // @ts-ignore
                public static VK_RIGHT: number;
                // @ts-ignore
                public static VK_DOWN: number;
                // @ts-ignore
                public static VK_COMMA: number;
                // @ts-ignore
                public static VK_MINUS: number;
                // @ts-ignore
                public static VK_PERIOD: number;
                // @ts-ignore
                public static VK_SLASH: number;
                // @ts-ignore
                public static VK_0: number;
                // @ts-ignore
                public static VK_1: number;
                // @ts-ignore
                public static VK_2: number;
                // @ts-ignore
                public static VK_3: number;
                // @ts-ignore
                public static VK_4: number;
                // @ts-ignore
                public static VK_5: number;
                // @ts-ignore
                public static VK_6: number;
                // @ts-ignore
                public static VK_7: number;
                // @ts-ignore
                public static VK_8: number;
                // @ts-ignore
                public static VK_9: number;
                // @ts-ignore
                public static VK_SEMICOLON: number;
                // @ts-ignore
                public static VK_EQUALS: number;
                // @ts-ignore
                public static VK_A: number;
                // @ts-ignore
                public static VK_B: number;
                // @ts-ignore
                public static VK_C: number;
                // @ts-ignore
                public static VK_D: number;
                // @ts-ignore
                public static VK_E: number;
                // @ts-ignore
                public static VK_F: number;
                // @ts-ignore
                public static VK_G: number;
                // @ts-ignore
                public static VK_H: number;
                // @ts-ignore
                public static VK_I: number;
                // @ts-ignore
                public static VK_J: number;
                // @ts-ignore
                public static VK_K: number;
                // @ts-ignore
                public static VK_L: number;
                // @ts-ignore
                public static VK_M: number;
                // @ts-ignore
                public static VK_N: number;
                // @ts-ignore
                public static VK_O: number;
                // @ts-ignore
                public static VK_P: number;
                // @ts-ignore
                public static VK_Q: number;
                // @ts-ignore
                public static VK_R: number;
                // @ts-ignore
                public static VK_S: number;
                // @ts-ignore
                public static VK_T: number;
                // @ts-ignore
                public static VK_U: number;
                // @ts-ignore
                public static VK_V: number;
                // @ts-ignore
                public static VK_W: number;
                // @ts-ignore
                public static VK_X: number;
                // @ts-ignore
                public static VK_Y: number;
                // @ts-ignore
                public static VK_Z: number;
                // @ts-ignore
                public static VK_OPEN_BRACKET: number;
                // @ts-ignore
                public static VK_BACK_SLASH: number;
                // @ts-ignore
                public static VK_CLOSE_BRACKET: number;
                // @ts-ignore
                public static VK_NUMPAD0: number;
                // @ts-ignore
                public static VK_NUMPAD1: number;
                // @ts-ignore
                public static VK_NUMPAD2: number;
                // @ts-ignore
                public static VK_NUMPAD3: number;
                // @ts-ignore
                public static VK_NUMPAD4: number;
                // @ts-ignore
                public static VK_NUMPAD5: number;
                // @ts-ignore
                public static VK_NUMPAD6: number;
                // @ts-ignore
                public static VK_NUMPAD7: number;
                // @ts-ignore
                public static VK_NUMPAD8: number;
                // @ts-ignore
                public static VK_NUMPAD9: number;
                // @ts-ignore
                public static VK_MULTIPLY: number;
                // @ts-ignore
                public static VK_ADD: number;
                // @ts-ignore
                public static VK_SEPARATER: number;
                // @ts-ignore
                public static VK_SEPARATOR: number;
                // @ts-ignore
                public static VK_SUBTRACT: number;
                // @ts-ignore
                public static VK_DECIMAL: number;
                // @ts-ignore
                public static VK_DIVIDE: number;
                // @ts-ignore
                public static VK_DELETE: number;
                // @ts-ignore
                public static VK_NUM_LOCK: number;
                // @ts-ignore
                public static VK_SCROLL_LOCK: number;
                // @ts-ignore
                public static VK_F1: number;
                // @ts-ignore
                public static VK_F2: number;
                // @ts-ignore
                public static VK_F3: number;
                // @ts-ignore
                public static VK_F4: number;
                // @ts-ignore
                public static VK_F5: number;
                // @ts-ignore
                public static VK_F6: number;
                // @ts-ignore
                public static VK_F7: number;
                // @ts-ignore
                public static VK_F8: number;
                // @ts-ignore
                public static VK_F9: number;
                // @ts-ignore
                public static VK_F10: number;
                // @ts-ignore
                public static VK_F11: number;
                // @ts-ignore
                public static VK_F12: number;
                // @ts-ignore
                public static VK_F13: number;
                // @ts-ignore
                public static VK_F14: number;
                // @ts-ignore
                public static VK_F15: number;
                // @ts-ignore
                public static VK_F16: number;
                // @ts-ignore
                public static VK_F17: number;
                // @ts-ignore
                public static VK_F18: number;
                // @ts-ignore
                public static VK_F19: number;
                // @ts-ignore
                public static VK_F20: number;
                // @ts-ignore
                public static VK_F21: number;
                // @ts-ignore
                public static VK_F22: number;
                // @ts-ignore
                public static VK_F23: number;
                // @ts-ignore
                public static VK_F24: number;
                // @ts-ignore
                public static VK_PRINTSCREEN: number;
                // @ts-ignore
                public static VK_INSERT: number;
                // @ts-ignore
                public static VK_HELP: number;
                // @ts-ignore
                public static VK_META: number;
                // @ts-ignore
                public static VK_BACK_QUOTE: number;
                // @ts-ignore
                public static VK_QUOTE: number;
                // @ts-ignore
                public static VK_KP_UP: number;
                // @ts-ignore
                public static VK_KP_DOWN: number;
                // @ts-ignore
                public static VK_KP_LEFT: number;
                // @ts-ignore
                public static VK_KP_RIGHT: number;
                // @ts-ignore
                public static VK_DEAD_GRAVE: number;
                // @ts-ignore
                public static VK_DEAD_ACUTE: number;
                // @ts-ignore
                public static VK_DEAD_CIRCUMFLEX: number;
                // @ts-ignore
                public static VK_DEAD_TILDE: number;
                // @ts-ignore
                public static VK_DEAD_MACRON: number;
                // @ts-ignore
                public static VK_DEAD_BREVE: number;
                // @ts-ignore
                public static VK_DEAD_ABOVEDOT: number;
                // @ts-ignore
                public static VK_DEAD_DIAERESIS: number;
                // @ts-ignore
                public static VK_DEAD_ABOVERING: number;
                // @ts-ignore
                public static VK_DEAD_DOUBLEACUTE: number;
                // @ts-ignore
                public static VK_DEAD_CARON: number;
                // @ts-ignore
                public static VK_DEAD_CEDILLA: number;
                // @ts-ignore
                public static VK_DEAD_OGONEK: number;
                // @ts-ignore
                public static VK_DEAD_IOTA: number;
                // @ts-ignore
                public static VK_DEAD_VOICED_SOUND: number;
                // @ts-ignore
                public static VK_DEAD_SEMIVOICED_SOUND: number;
                // @ts-ignore
                public static VK_AMPERSAND: number;
                // @ts-ignore
                public static VK_ASTERISK: number;
                // @ts-ignore
                public static VK_QUOTEDBL: number;
                // @ts-ignore
                public static VK_LESS: number;
                // @ts-ignore
                public static VK_GREATER: number;
                // @ts-ignore
                public static VK_BRACELEFT: number;
                // @ts-ignore
                public static VK_BRACERIGHT: number;
                // @ts-ignore
                public static VK_AT: number;
                // @ts-ignore
                public static VK_COLON: number;
                // @ts-ignore
                public static VK_CIRCUMFLEX: number;
                // @ts-ignore
                public static VK_DOLLAR: number;
                // @ts-ignore
                public static VK_EURO_SIGN: number;
                // @ts-ignore
                public static VK_EXCLAMATION_MARK: number;
                // @ts-ignore
                public static VK_INVERTED_EXCLAMATION_MARK: number;
                // @ts-ignore
                public static VK_LEFT_PARENTHESIS: number;
                // @ts-ignore
                public static VK_NUMBER_SIGN: number;
                // @ts-ignore
                public static VK_PLUS: number;
                // @ts-ignore
                public static VK_RIGHT_PARENTHESIS: number;
                // @ts-ignore
                public static VK_UNDERSCORE: number;
                // @ts-ignore
                public static VK_WINDOWS: number;
                // @ts-ignore
                public static VK_CONTEXT_MENU: number;
                // @ts-ignore
                public static VK_FINAL: number;
                // @ts-ignore
                public static VK_CONVERT: number;
                // @ts-ignore
                public static VK_NONCONVERT: number;
                // @ts-ignore
                public static VK_ACCEPT: number;
                // @ts-ignore
                public static VK_MODECHANGE: number;
                // @ts-ignore
                public static VK_KANA: number;
                // @ts-ignore
                public static VK_KANJI: number;
                // @ts-ignore
                public static VK_ALPHANUMERIC: number;
                // @ts-ignore
                public static VK_KATAKANA: number;
                // @ts-ignore
                public static VK_HIRAGANA: number;
                // @ts-ignore
                public static VK_FULL_WIDTH: number;
                // @ts-ignore
                public static VK_HALF_WIDTH: number;
                // @ts-ignore
                public static VK_ROMAN_CHARACTERS: number;
                // @ts-ignore
                public static VK_ALL_CANDIDATES: number;
                // @ts-ignore
                public static VK_PREVIOUS_CANDIDATE: number;
                // @ts-ignore
                public static VK_CODE_INPUT: number;
                // @ts-ignore
                public static VK_JAPANESE_KATAKANA: number;
                // @ts-ignore
                public static VK_JAPANESE_HIRAGANA: number;
                // @ts-ignore
                public static VK_JAPANESE_ROMAN: number;
                // @ts-ignore
                public static VK_KANA_LOCK: number;
                // @ts-ignore
                public static VK_INPUT_METHOD_ON_OFF: number;
                // @ts-ignore
                public static VK_CUT: number;
                // @ts-ignore
                public static VK_COPY: number;
                // @ts-ignore
                public static VK_PASTE: number;
                // @ts-ignore
                public static VK_UNDO: number;
                // @ts-ignore
                public static VK_AGAIN: number;
                // @ts-ignore
                public static VK_FIND: number;
                // @ts-ignore
                public static VK_PROPS: number;
                // @ts-ignore
                public static VK_STOP: number;
                // @ts-ignore
                public static VK_COMPOSE: number;
                // @ts-ignore
                public static VK_ALT_GRAPH: number;
                // @ts-ignore
                public static VK_BEGIN: number;
                // @ts-ignore
                public static VK_UNDEFINED: number;
                // @ts-ignore
                public static CHAR_UNDEFINED: string;
                // @ts-ignore
                public static KEY_LOCATION_UNKNOWN: number;
                // @ts-ignore
                public static KEY_LOCATION_STANDARD: number;
                // @ts-ignore
                public static KEY_LOCATION_LEFT: number;
                // @ts-ignore
                public static KEY_LOCATION_RIGHT: number;
                // @ts-ignore
                public static KEY_LOCATION_NUMPAD: number;
                /**
                 * Returns the integer keyCode associated with the key in this event.
                 */
                // @ts-ignore
                public getKeyCode(): number;
                /**
                 * Set the keyCode value to indicate a physical key.
                 */
                // @ts-ignore
                public setKeyCode(keyCode: number): void;
                /**
                 * Returns the character associated with the key in this event.
                 * For example, the <code>KEY_TYPED</code> event for shift + "a"
                 * returns the value for "A".
                 * <p>
                 * <code>KEY_PRESSED</code> and <code>KEY_RELEASED</code> events
                 * are not intended for reporting of character input.  Therefore,
                 * the values returned by this method are guaranteed to be
                 * meaningful only for <code>KEY_TYPED</code> events.
                 */
                // @ts-ignore
                public getKeyChar(): string;
                /**
                 * Set the keyChar value to indicate a logical character.
                 */
                // @ts-ignore
                public setKeyChar(keyChar: string): void;
                /**
                 * Set the modifiers to indicate additional keys that were held down
                 * (e.g. shift, ctrl, alt, meta) defined as part of InputEvent.
                 * <p>
                 * NOTE:  use of this method is not recommended, because many AWT
                 * implementations do not recognize modifier changes.  This is
                 * especially true for <code>KEY_TYPED</code> events where the shift
                 * modifier is changed.
                 */
                // @ts-ignore
                public setModifiers(modifiers: number): void;
                /**
                 * Returns the location of the key that originated this key event.
                 * Some keys occur more than once on a keyboard, e.g. the left and
                 * right shift keys.  Additionally, some keys occur on the numeric
                 * keypad.  This provides a way of distinguishing such keys.
                 */
                // @ts-ignore
                public getKeyLocation(): number;
                /**
                 * Returns a String describing the keyCode, such as "HOME", "F1" or "A".
                 * These strings can be localized by changing the awt.properties file.
                 */
                // @ts-ignore
                public static getKeyText(keyCode: number): string;
                /**
                 * Returns a <code>String</code> describing the modifier key(s),
                 * such as "Shift", or "Ctrl+Shift".  These strings can be
                 * localized by changing the <code>awt.properties</code> file.
                 * <p>
                 * Note that <code>InputEvent.ALT_MASK</code> and
                 * <code>InputEvent.BUTTON2_MASK</code> have the same value,
                 * so the string "Alt" is returned for both modifiers.  Likewise,
                 * <code>InputEvent.META_MASK</code> and
                 * <code>InputEvent.BUTTON3_MASK</code> have the same value,
                 * so the string "Meta" is returned for both modifiers.
                 */
                // @ts-ignore
                public static getKeyModifiersText(modifiers: number): string;
                /**
                 * Returns whether the key in this event is an "action" key.
                 * Typically an action key does not fire a unicode character and is
                 * not a modifier key.
                 */
                // @ts-ignore
                public isActionKey(): boolean;
                /**
                 * Returns a parameter string identifying this event.
                 * This method is useful for event logging and for debugging.
                 */
                // @ts-ignore
                public paramString(): string;
                /**
                 * Returns an extended key code for the event.
                 * The extended key code is a unique id assigned to  a key on the keyboard
                 * just like {@code keyCode}. However, unlike {@code keyCode}, this value depends on the
                 * current keyboard layout. For instance, pressing the left topmost letter key
                 * in a common English layout produces the same value as {@code keyCode}, {@code VK_Q}.
                 * Pressing the same key in a regular Russian layout gives another code, unique for the
                 * letter "Cyrillic I short".
                 */
                // @ts-ignore
                public getExtendedKeyCode(): number;
                /**
                 * Returns an extended key code for a unicode character.
                 */
                // @ts-ignore
                public static getExtendedKeyCodeForChar(c: number): number;
            }
        }
    }
}
