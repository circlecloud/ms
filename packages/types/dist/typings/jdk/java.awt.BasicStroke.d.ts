declare namespace java {
    namespace awt {
        // @ts-ignore
         class BasicStroke extends java.lang.Object {
            /**
             * Constructs a new <code>BasicStroke</code> with the specified
             * attributes.
             */
            // @ts-ignore
            constructor(width: number, cap: number, join: number, miterlimit: number, dash: number, dash_phase: number)
            /**
             * Constructs a solid <code>BasicStroke</code> with the specified
             * attributes.
             */
            // @ts-ignore
            constructor(width: number, cap: number, join: number, miterlimit: number)
            /**
             * Constructs a solid <code>BasicStroke</code> with the specified
             * attributes.  The <code>miterlimit</code> parameter is
             * unnecessary in cases where the default is allowable or the
             * line joins are not specified as JOIN_MITER.
             */
            // @ts-ignore
            constructor(width: number, cap: number, join: number)
            /**
             * Constructs a solid <code>BasicStroke</code> with the specified
             * line width and with default values for the cap and join
             * styles.
             */
            // @ts-ignore
            constructor(width: number)
            /**
             * Constructs a new <code>BasicStroke</code> with defaults for all
             * attributes.
             * The default attributes are a solid line of width 1.0, CAP_SQUARE,
             * JOIN_MITER, a miter limit of 10.0.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static JOIN_MITER: number;
            // @ts-ignore
            public static JOIN_ROUND: number;
            // @ts-ignore
            public static JOIN_BEVEL: number;
            // @ts-ignore
            public static CAP_BUTT: number;
            // @ts-ignore
            public static CAP_ROUND: number;
            // @ts-ignore
            public static CAP_SQUARE: number;
            /**
             * Returns a <code>Shape</code> whose interior defines the
             * stroked outline of a specified <code>Shape</code>.
             */
            // @ts-ignore
            public createStrokedShape(s: java.awt.Shape): java.awt.Shape;
            /**
             * Returns the line width.  Line width is represented in user space,
             * which is the default-coordinate space used by Java 2D.  See the
             * <code>Graphics2D</code> class comments for more information on
             * the user space coordinate system.
             */
            // @ts-ignore
            public getLineWidth(): number;
            /**
             * Returns the end cap style.
             */
            // @ts-ignore
            public getEndCap(): number;
            /**
             * Returns the line join style.
             */
            // @ts-ignore
            public getLineJoin(): number;
            /**
             * Returns the limit of miter joins.
             */
            // @ts-ignore
            public getMiterLimit(): number;
            /**
             * Returns the array representing the lengths of the dash segments.
             * Alternate entries in the array represent the user space lengths
             * of the opaque and transparent segments of the dashes.
             * As the pen moves along the outline of the <code>Shape</code>
             * to be stroked, the user space
             * distance that the pen travels is accumulated.  The distance
             * value is used to index into the dash array.
             * The pen is opaque when its current cumulative distance maps
             * to an even element of the dash array and transparent otherwise.
             */
            // @ts-ignore
            public getDashArray(): number[];
            /**
             * Returns the current dash phase.
             * The dash phase is a distance specified in user coordinates that
             * represents an offset into the dashing pattern. In other words, the dash
             * phase defines the point in the dashing pattern that will correspond to
             * the beginning of the stroke.
             */
            // @ts-ignore
            public getDashPhase(): number;
            /**
             * Returns the hashcode for this stroke.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Tests if a specified object is equal to this <code>BasicStroke</code>
             * by first testing if it is a <code>BasicStroke</code> and then comparing
             * its width, join, cap, miter limit, dash, and dash phase attributes with
             * those of this <code>BasicStroke</code>.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
        }
    }
}
