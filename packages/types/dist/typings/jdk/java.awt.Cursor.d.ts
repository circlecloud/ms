declare namespace java {
    namespace awt {
        // @ts-ignore
         class Cursor extends java.lang.Object {
            /**
             * Creates a new cursor object with the specified type.
             */
            // @ts-ignore
            constructor(type: number)
            /**
             * Creates a new custom cursor object with the specified name.<p>
             * Note:  this constructor should only be used by AWT implementations
             * as part of their support for custom cursors.  Applications should
             * use Toolkit.createCustomCursor().
             */
            // @ts-ignore
            constructor(name: string)
            // @ts-ignore
            public static DEFAULT_CURSOR: number;
            // @ts-ignore
            public static CROSSHAIR_CURSOR: number;
            // @ts-ignore
            public static TEXT_CURSOR: number;
            // @ts-ignore
            public static WAIT_CURSOR: number;
            // @ts-ignore
            public static SW_RESIZE_CURSOR: number;
            // @ts-ignore
            public static SE_RESIZE_CURSOR: number;
            // @ts-ignore
            public static NW_RESIZE_CURSOR: number;
            // @ts-ignore
            public static NE_RESIZE_CURSOR: number;
            // @ts-ignore
            public static N_RESIZE_CURSOR: number;
            // @ts-ignore
            public static S_RESIZE_CURSOR: number;
            // @ts-ignore
            public static W_RESIZE_CURSOR: number;
            // @ts-ignore
            public static E_RESIZE_CURSOR: number;
            // @ts-ignore
            public static HAND_CURSOR: number;
            // @ts-ignore
            public static MOVE_CURSOR: number;
            // @ts-ignore
            protected static predefined: java.awt.Cursor[];
            // @ts-ignore
            public static CUSTOM_CURSOR: number;
            // @ts-ignore
            protected name: string;
            /**
             * Returns a cursor object with the specified predefined type.
             */
            // @ts-ignore
            public static getPredefinedCursor(type: number): java.awt.Cursor;
            /**
             * Returns a system-specific custom cursor object matching the
             * specified name.  Cursor names are, for example: "Invalid.16x16"
             */
            // @ts-ignore
            public static getSystemCustomCursor(name: string): java.awt.Cursor;
            /**
             * Return the system default cursor.
             */
            // @ts-ignore
            public static getDefaultCursor(): java.awt.Cursor;
            /**
             * Returns the type for this cursor.
             */
            // @ts-ignore
            public getType(): number;
            /**
             * Returns the name of this cursor.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns a string representation of this cursor.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
