declare namespace java {
    namespace awt {
        // @ts-ignore
         class AWTKeyStroke extends java.lang.Object {
            /**
             * Constructs an <code>AWTKeyStroke</code> with default values.
             * The default values used are:
             * <table border="1" summary="AWTKeyStroke default values">
             * <tr><th>Property</th><th>Default Value</th></tr>
             * <tr>
             * <td>Key Char</td>
             * <td><code>KeyEvent.CHAR_UNDEFINED</code></td>
             * </tr>
             * <tr>
             * <td>Key Code</td>
             * <td><code>KeyEvent.VK_UNDEFINED</code></td>
             * </tr>
             * <tr>
             * <td>Modifiers</td>
             * <td>none</td>
             * </tr>
             * <tr>
             * <td>On key release?</td>
             * <td><code>false</code></td>
             * </tr>
             * </table>
             * <code>AWTKeyStroke</code>s should not be constructed
             * by client code. Use a variant of <code>getAWTKeyStroke</code>
             * instead.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>AWTKeyStroke</code> with the specified
             * values. <code>AWTKeyStroke</code>s should not be constructed
             * by client code. Use a variant of <code>getAWTKeyStroke</code>
             * instead.
             */
            // @ts-ignore
            constructor(keyChar: string, keyCode: number, modifiers: number, onKeyRelease: boolean)
            /**
             * Registers a new class which the factory methods in
             * <code>AWTKeyStroke</code> will use when generating new
             * instances of <code>AWTKeyStroke</code>s. After invoking this
             * method, the factory methods will return instances of the specified
             * Class. The specified Class must be either <code>AWTKeyStroke</code>
             * or derived from <code>AWTKeyStroke</code>, and it must have a
             * no-arg constructor. The constructor can be of any accessibility,
             * including <code>private</code>. This operation
             * flushes the current <code>AWTKeyStroke</code> cache.
             */
            // @ts-ignore
            protected static registerSubclass(subclass: java.lang.Class): void;
            /**
             * Returns a shared instance of an <code>AWTKeyStroke</code>
             * that represents a <code>KEY_TYPED</code> event for the
             * specified character.
             */
            // @ts-ignore
            public static getAWTKeyStroke(keyChar: string): java.awt.AWTKeyStroke;
            /**
             * Returns a shared instance of an {@code AWTKeyStroke}
             * that represents a {@code KEY_TYPED} event for the
             * specified Character object and a set of modifiers. Note
             * that the first parameter is of type Character rather than
             * char. This is to avoid inadvertent clashes with
             * calls to <code>getAWTKeyStroke(int keyCode, int modifiers)</code>.
             * The modifiers consist of any combination of following:<ul>
             * <li>java.awt.event.InputEvent.SHIFT_DOWN_MASK
             * <li>java.awt.event.InputEvent.CTRL_DOWN_MASK
             * <li>java.awt.event.InputEvent.META_DOWN_MASK
             * <li>java.awt.event.InputEvent.ALT_DOWN_MASK
             * <li>java.awt.event.InputEvent.ALT_GRAPH_DOWN_MASK
             * </ul>
             * The old modifiers listed below also can be used, but they are
             * mapped to _DOWN_ modifiers. <ul>
             * <li>java.awt.event.InputEvent.SHIFT_MASK
             * <li>java.awt.event.InputEvent.CTRL_MASK
             * <li>java.awt.event.InputEvent.META_MASK
             * <li>java.awt.event.InputEvent.ALT_MASK
             * <li>java.awt.event.InputEvent.ALT_GRAPH_MASK
             * </ul>
             * also can be used, but they are mapped to _DOWN_ modifiers.
             * Since these numbers are all different powers of two, any combination of
             * them is an integer in which each bit represents a different modifier
             * key. Use 0 to specify no modifiers.
             */
            // @ts-ignore
            public static getAWTKeyStroke(keyChar: java.lang.Character, modifiers: number): java.awt.AWTKeyStroke;
            /**
             * Returns a shared instance of an <code>AWTKeyStroke</code>,
             * given a numeric key code and a set of modifiers, specifying
             * whether the key is activated when it is pressed or released.
             * <p>
             * The "virtual key" constants defined in
             * <code>java.awt.event.KeyEvent</code> can be
             * used to specify the key code. For example:<ul>
             * <li><code>java.awt.event.KeyEvent.VK_ENTER</code>
             * <li><code>java.awt.event.KeyEvent.VK_TAB</code>
             * <li><code>java.awt.event.KeyEvent.VK_SPACE</code>
             * </ul>
             * Alternatively, the key code may be obtained by calling
             * <code>java.awt.event.KeyEvent.getExtendedKeyCodeForChar</code>.
             * The modifiers consist of any combination of:<ul>
             * <li>java.awt.event.InputEvent.SHIFT_DOWN_MASK
             * <li>java.awt.event.InputEvent.CTRL_DOWN_MASK
             * <li>java.awt.event.InputEvent.META_DOWN_MASK
             * <li>java.awt.event.InputEvent.ALT_DOWN_MASK
             * <li>java.awt.event.InputEvent.ALT_GRAPH_DOWN_MASK
             * </ul>
             * The old modifiers <ul>
             * <li>java.awt.event.InputEvent.SHIFT_MASK
             * <li>java.awt.event.InputEvent.CTRL_MASK
             * <li>java.awt.event.InputEvent.META_MASK
             * <li>java.awt.event.InputEvent.ALT_MASK
             * <li>java.awt.event.InputEvent.ALT_GRAPH_MASK
             * </ul>
             * also can be used, but they are mapped to _DOWN_ modifiers.
             * Since these numbers are all different powers of two, any combination of
             * them is an integer in which each bit represents a different modifier
             * key. Use 0 to specify no modifiers.
             */
            // @ts-ignore
            public static getAWTKeyStroke(keyCode: number, modifiers: number, onKeyRelease: boolean): java.awt.AWTKeyStroke;
            /**
             * Returns a shared instance of an <code>AWTKeyStroke</code>,
             * given a numeric key code and a set of modifiers. The returned
             * <code>AWTKeyStroke</code> will correspond to a key press.
             * <p>
             * The "virtual key" constants defined in
             * <code>java.awt.event.KeyEvent</code> can be
             * used to specify the key code. For example:<ul>
             * <li><code>java.awt.event.KeyEvent.VK_ENTER</code>
             * <li><code>java.awt.event.KeyEvent.VK_TAB</code>
             * <li><code>java.awt.event.KeyEvent.VK_SPACE</code>
             * </ul>
             * The modifiers consist of any combination of:<ul>
             * <li>java.awt.event.InputEvent.SHIFT_DOWN_MASK
             * <li>java.awt.event.InputEvent.CTRL_DOWN_MASK
             * <li>java.awt.event.InputEvent.META_DOWN_MASK
             * <li>java.awt.event.InputEvent.ALT_DOWN_MASK
             * <li>java.awt.event.InputEvent.ALT_GRAPH_DOWN_MASK
             * </ul>
             * The old modifiers <ul>
             * <li>java.awt.event.InputEvent.SHIFT_MASK
             * <li>java.awt.event.InputEvent.CTRL_MASK
             * <li>java.awt.event.InputEvent.META_MASK
             * <li>java.awt.event.InputEvent.ALT_MASK
             * <li>java.awt.event.InputEvent.ALT_GRAPH_MASK
             * </ul>
             * also can be used, but they are mapped to _DOWN_ modifiers.
             * Since these numbers are all different powers of two, any combination of
             * them is an integer in which each bit represents a different modifier
             * key. Use 0 to specify no modifiers.
             */
            // @ts-ignore
            public static getAWTKeyStroke(keyCode: number, modifiers: number): java.awt.AWTKeyStroke;
            /**
             * Returns an <code>AWTKeyStroke</code> which represents the
             * stroke which generated a given <code>KeyEvent</code>.
             * <p>
             * This method obtains the keyChar from a <code>KeyTyped</code>
             * event, and the keyCode from a <code>KeyPressed</code> or
             * <code>KeyReleased</code> event. The <code>KeyEvent</code> modifiers are
             * obtained for all three types of <code>KeyEvent</code>.
             */
            // @ts-ignore
            public static getAWTKeyStrokeForEvent(anEvent: java.awt.event.KeyEvent): java.awt.AWTKeyStroke;
            /**
             * Parses a string and returns an <code>AWTKeyStroke</code>.
             * The string must have the following syntax:
             * <pre>
             * &lt;modifiers&gt;* (&lt;typedID&gt; | &lt;pressedReleasedID&gt;)
             * modifiers := shift | control | ctrl | meta | alt | altGraph
             * typedID := typed &lt;typedKey&gt;
             * typedKey := string of length 1 giving Unicode character.
             * pressedReleasedID := (pressed | released) key
             * key := KeyEvent key code name, i.e. the name following "VK_".
             * </pre>
             * If typed, pressed or released is not specified, pressed is assumed. Here
             * are some examples:
             * <pre>
             * "INSERT" =&gt; getAWTKeyStroke(KeyEvent.VK_INSERT, 0);
             * "control DELETE" =&gt; getAWTKeyStroke(KeyEvent.VK_DELETE, InputEvent.CTRL_MASK);
             * "alt shift X" =&gt; getAWTKeyStroke(KeyEvent.VK_X, InputEvent.ALT_MASK | InputEvent.SHIFT_MASK);
             * "alt shift released X" =&gt; getAWTKeyStroke(KeyEvent.VK_X, InputEvent.ALT_MASK | InputEvent.SHIFT_MASK, true);
             * "typed a" =&gt; getAWTKeyStroke('a');
             * </pre>
             */
            // @ts-ignore
            public static getAWTKeyStroke(s: string): java.awt.AWTKeyStroke;
            /**
             * Returns the character for this <code>AWTKeyStroke</code>.
             */
            // @ts-ignore
            public getKeyChar(): string;
            /**
             * Returns the numeric key code for this <code>AWTKeyStroke</code>.
             */
            // @ts-ignore
            public getKeyCode(): number;
            /**
             * Returns the modifier keys for this <code>AWTKeyStroke</code>.
             */
            // @ts-ignore
            public getModifiers(): number;
            /**
             * Returns whether this <code>AWTKeyStroke</code> represents a key release.
             */
            // @ts-ignore
            public isOnKeyRelease(): boolean;
            /**
             * Returns the type of <code>KeyEvent</code> which corresponds to
             * this <code>AWTKeyStroke</code>.
             */
            // @ts-ignore
            public getKeyEventType(): number;
            /**
             * Returns a numeric value for this object that is likely to be unique,
             * making it a good choice as the index value in a hash table.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns true if this object is identical to the specified object.
             */
            // @ts-ignore
            public equals(anObject: java.lang.Object): boolean;
            /**
             * Returns a string that displays and identifies this object's properties.
             * The <code>String</code> returned by this method can be passed
             * as a parameter to <code>getAWTKeyStroke(String)</code> to produce
             * a key stroke equal to this key stroke.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a cached instance of <code>AWTKeyStroke</code> (or a subclass of
             * <code>AWTKeyStroke</code>) which is equal to this instance.
             */
            // @ts-ignore
            protected readResolve(): java.lang.Object;
        }
    }
}
