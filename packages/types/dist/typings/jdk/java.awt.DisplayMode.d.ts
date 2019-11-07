// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class DisplayMode extends java.lang.Object {
            /**
             * Create a new display mode object with the supplied parameters.
             */
            // @ts-ignore
            constructor(width: number, height: number, bitDepth: number, refreshRate: number)
            // @ts-ignore
            public static BIT_DEPTH_MULTI: number;
            // @ts-ignore
            public static REFRESH_RATE_UNKNOWN: number;
            /**
             * Returns the height of the display, in pixels.
             */
            // @ts-ignore
            public getHeight(): number;
            /**
             * Returns the width of the display, in pixels.
             */
            // @ts-ignore
            public getWidth(): number;
            /**
             * Returns the bit depth of the display, in bits per pixel.  This may be
             * <code>BIT_DEPTH_MULTI</code> if multiple bit depths are supported in
             * this display mode.
             */
            // @ts-ignore
            public getBitDepth(): number;
            /**
             * Returns the refresh rate of the display, in hertz.  This may be
             * <code>REFRESH_RATE_UNKNOWN</code> if the information is not available.
             */
            // @ts-ignore
            public getRefreshRate(): number;
            /**
             * Returns whether the two display modes are equal.
             */
            // @ts-ignore
            public equals(dm: java.awt.DisplayMode): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public equals(dm: java.lang.Object): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
