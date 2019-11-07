declare namespace java {
    namespace awt {
        namespace print {
            // @ts-ignore
             class PageFormat extends java.lang.Object {
                /**
                 * Creates a default, portrait-oriented
                 * <code>PageFormat</code>.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static LANDSCAPE: number;
                // @ts-ignore
                public static PORTRAIT: number;
                // @ts-ignore
                public static REVERSE_LANDSCAPE: number;
                /**
                 * Makes a copy of this <code>PageFormat</code> with the same
                 * contents as this <code>PageFormat</code>.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns the width, in 1/72nds of an inch, of the page.
                 * This method takes into account the orientation of the
                 * page when determining the width.
                 */
                // @ts-ignore
                public getWidth(): number;
                /**
                 * Returns the height, in 1/72nds of an inch, of the page.
                 * This method takes into account the orientation of the
                 * page when determining the height.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Returns the x coordinate of the upper left point of the
                 * imageable area of the <code>Paper</code> object
                 * associated with this <code>PageFormat</code>.
                 * This method takes into account the
                 * orientation of the page.
                 */
                // @ts-ignore
                public getImageableX(): number;
                /**
                 * Returns the y coordinate of the upper left point of the
                 * imageable area of the <code>Paper</code> object
                 * associated with this <code>PageFormat</code>.
                 * This method takes into account the
                 * orientation of the page.
                 */
                // @ts-ignore
                public getImageableY(): number;
                /**
                 * Returns the width, in 1/72nds of an inch, of the imageable
                 * area of the page. This method takes into account the orientation
                 * of the page.
                 */
                // @ts-ignore
                public getImageableWidth(): number;
                /**
                 * Return the height, in 1/72nds of an inch, of the imageable
                 * area of the page. This method takes into account the orientation
                 * of the page.
                 */
                // @ts-ignore
                public getImageableHeight(): number;
                /**
                 * Returns a copy of the {@link Paper} object associated
                 * with this <code>PageFormat</code>.  Changes made to the
                 * <code>Paper</code> object returned from this method do not
                 * affect the <code>Paper</code> object of this
                 * <code>PageFormat</code>.  To update the <code>Paper</code>
                 * object of this <code>PageFormat</code>, create a new
                 * <code>Paper</code> object and set it into this
                 * <code>PageFormat</code> by using the {@link #setPaper(Paper)}
                 * method.
                 */
                // @ts-ignore
                public getPaper(): java.awt.print.Paper;
                /**
                 * Sets the <code>Paper</code> object for this
                 * <code>PageFormat</code>.
                 */
                // @ts-ignore
                public setPaper(paper: java.awt.print.Paper): void;
                /**
                 * Sets the page orientation. <code>orientation</code> must be
                 * one of the constants: PORTRAIT, LANDSCAPE,
                 * or REVERSE_LANDSCAPE.
                 */
                // @ts-ignore
                public setOrientation(orientation: number): void;
                /**
                 * Returns the orientation of this <code>PageFormat</code>.
                 */
                // @ts-ignore
                public getOrientation(): number;
                /**
                 * Returns a transformation matrix that translates user
                 * space rendering to the requested orientation
                 * of the page.  The values are placed into the
                 * array as
                 * {&nbsp;m00,&nbsp;m10,&nbsp;m01,&nbsp;m11,&nbsp;m02,&nbsp;m12} in
                 * the form required by the {@link AffineTransform}
                 * constructor.
                 */
                // @ts-ignore
                public getMatrix(): number[];
            }
        }
    }
}
