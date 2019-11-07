declare namespace java {
    namespace awt {
        // @ts-ignore
         class AlphaComposite extends java.lang.Object {
            // @ts-ignore
            public static CLEAR: number;
            // @ts-ignore
            public static SRC: number;
            // @ts-ignore
            public static DST: number;
            // @ts-ignore
            public static SRC_OVER: number;
            // @ts-ignore
            public static DST_OVER: number;
            // @ts-ignore
            public static SRC_IN: number;
            // @ts-ignore
            public static DST_IN: number;
            // @ts-ignore
            public static SRC_OUT: number;
            // @ts-ignore
            public static DST_OUT: number;
            // @ts-ignore
            public static SRC_ATOP: number;
            // @ts-ignore
            public static DST_ATOP: number;
            // @ts-ignore
            public static XOR: number;
            // @ts-ignore
            public static Clear: java.awt.AlphaComposite;
            // @ts-ignore
            public static Src: java.awt.AlphaComposite;
            // @ts-ignore
            public static Dst: java.awt.AlphaComposite;
            // @ts-ignore
            public static SrcOver: java.awt.AlphaComposite;
            // @ts-ignore
            public static DstOver: java.awt.AlphaComposite;
            // @ts-ignore
            public static SrcIn: java.awt.AlphaComposite;
            // @ts-ignore
            public static DstIn: java.awt.AlphaComposite;
            // @ts-ignore
            public static SrcOut: java.awt.AlphaComposite;
            // @ts-ignore
            public static DstOut: java.awt.AlphaComposite;
            // @ts-ignore
            public static SrcAtop: java.awt.AlphaComposite;
            // @ts-ignore
            public static DstAtop: java.awt.AlphaComposite;
            // @ts-ignore
            public static Xor: java.awt.AlphaComposite;
            /**
             * Creates an <code>AlphaComposite</code> object with the specified rule.
             */
            // @ts-ignore
            public static getInstance(rule: number): java.awt.AlphaComposite;
            /**
             * Creates an <code>AlphaComposite</code> object with the specified rule and
             * the constant alpha to multiply with the alpha of the source.
             * The source is multiplied with the specified alpha before being composited
             * with the destination.
             */
            // @ts-ignore
            public static getInstance(rule: number, alpha: number): java.awt.AlphaComposite;
            /**
             * Creates a context for the compositing operation.
             * The context contains state that is used in performing
             * the compositing operation.
             */
            // @ts-ignore
            public createContext(srcColorModel: java.awt.image.ColorModel, dstColorModel: java.awt.image.ColorModel, hints: java.awt.RenderingHints): java.awt.CompositeContext;
            /**
             * Returns the alpha value of this <code>AlphaComposite</code>.  If this
             * <code>AlphaComposite</code> does not have an alpha value, 1.0 is returned.
             */
            // @ts-ignore
            public getAlpha(): number;
            /**
             * Returns the compositing rule of this <code>AlphaComposite</code>.
             */
            // @ts-ignore
            public getRule(): number;
            /**
             * Returns a similar <code>AlphaComposite</code> object that uses
             * the specified compositing rule.
             * If this object already uses the specified compositing rule,
             * this object is returned.
             */
            // @ts-ignore
            public derive(rule: number): java.awt.AlphaComposite;
            /**
             * Returns a similar <code>AlphaComposite</code> object that uses
             * the specified alpha value.
             * If this object already has the specified alpha value,
             * this object is returned.
             */
            // @ts-ignore
            public derive(alpha: number): java.awt.AlphaComposite;
            /**
             * Returns the hashcode for this composite.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Determines whether the specified object is equal to this
             * <code>AlphaComposite</code>.
             * <p>
             * The result is <code>true</code> if and only if
             * the argument is not <code>null</code> and is an
             * <code>AlphaComposite</code> object that has the same
             * compositing rule and alpha value as this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
        }
    }
}
