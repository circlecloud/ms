declare namespace java {
    namespace awt {
        // @ts-ignore
         class MenuShortcut extends java.lang.Object {
            /**
             * Constructs a new MenuShortcut for the specified virtual keycode.
             */
            // @ts-ignore
            constructor(key: number)
            /**
             * Constructs a new MenuShortcut for the specified virtual keycode.
             */
            // @ts-ignore
            constructor(key: number, useShiftModifier: boolean)
            /**
             * Returns the raw keycode of this MenuShortcut.
             */
            // @ts-ignore
            public getKey(): number;
            /**
             * Returns whether this MenuShortcut must be invoked using the SHIFT key.
             */
            // @ts-ignore
            public usesShiftModifier(): boolean;
            /**
             * Returns whether this MenuShortcut is the same as another:
             * equality is defined to mean that both MenuShortcuts use the same key
             * and both either use or don't use the SHIFT key.
             */
            // @ts-ignore
            public equals(s: java.awt.MenuShortcut): boolean;
            /**
             * Returns whether this MenuShortcut is the same as another:
             * equality is defined to mean that both MenuShortcuts use the same key
             * and both either use or don't use the SHIFT key.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hashcode for this MenuShortcut.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns an internationalized description of the MenuShortcut.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns the parameter string representing the state of this
             * MenuShortcut. This string is useful for debugging.
             */
            // @ts-ignore
            protected paramString(): string;
        }
    }
}
