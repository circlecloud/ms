// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace print {
            // @ts-ignore
             class Paper extends java.lang.Object {
                /**
                 * Creates a letter sized piece of paper
                 * with one inch margins.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a copy of this <code>Paper</code> with the same contents
                 * as this <code>Paper</code>.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns the height of the page in 1/72nds of an inch.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Sets the width and height of this <code>Paper</code>
                 * object, which represents the properties of the page onto
                 * which printing occurs.
                 * The dimensions are supplied in 1/72nds of
                 * an inch.
                 */
                // @ts-ignore
                public setSize(width: number, height: number): void;
                /**
                 * Returns the width of the page in 1/72nds
                 * of an inch.
                 */
                // @ts-ignore
                public getWidth(): number;
                /**
                 * Sets the imageable area of this <code>Paper</code>.  The
                 * imageable area is the area on the page in which printing
                 * occurs.
                 */
                // @ts-ignore
                public setImageableArea(x: number, y: number, width: number, height: number): void;
                /**
                 * Returns the x coordinate of the upper-left corner of this
                 * <code>Paper</code> object's imageable area.
                 */
                // @ts-ignore
                public getImageableX(): number;
                /**
                 * Returns the y coordinate of the upper-left corner of this
                 * <code>Paper</code> object's imageable area.
                 */
                // @ts-ignore
                public getImageableY(): number;
                /**
                 * Returns the width of this <code>Paper</code> object's imageable
                 * area.
                 */
                // @ts-ignore
                public getImageableWidth(): number;
                /**
                 * Returns the height of this <code>Paper</code> object's imageable
                 * area.
                 */
                // @ts-ignore
                public getImageableHeight(): number;
            }
        }
    }
}
