// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class PointerInfo extends java.lang.Object {
            /**
             * Returns the {@code GraphicsDevice} where the mouse pointer was at the
             * moment this {@code PointerInfo} was created.
             */
            // @ts-ignore
            public getDevice(): java.awt.GraphicsDevice;
            /**
             * Returns the {@code Point} that represents the coordinates of the pointer
             * on the screen. See {@link MouseInfo#getPointerInfo} for more information
             * about coordinate calculation for multiscreen systems.
             */
            // @ts-ignore
            public getLocation(): java.awt.Point;
        }
    }
}
