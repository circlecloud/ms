// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Insets extends java.lang.Object {
            /**
             * Creates and initializes a new <code>Insets</code> object with the
             * specified top, left, bottom, and right insets.
             */
            // @ts-ignore
            constructor(top: number, left: number, bottom: number, right: number)
            // @ts-ignore
            public top: number;
            // @ts-ignore
            public left: number;
            // @ts-ignore
            public bottom: number;
            // @ts-ignore
            public right: number;
            /**
             * Set top, left, bottom, and right to the specified values
             */
            // @ts-ignore
            public set(top: number, left: number, bottom: number, right: number): void;
            /**
             * Checks whether two insets objects are equal. Two instances
             * of <code>Insets</code> are equal if the four integer values
             * of the fields <code>top</code>, <code>left</code>,
             * <code>bottom</code>, and <code>right</code> are all equal.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code for this Insets.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a string representation of this <code>Insets</code> object.
             * This method is intended to be used only for debugging purposes, and
             * the content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Create a copy of this object.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
