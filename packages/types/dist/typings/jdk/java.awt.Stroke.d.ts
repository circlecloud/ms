declare namespace java {
    namespace awt {
        // @ts-ignore
        interface Stroke {
            /**
             * Returns an outline <code>Shape</code> which encloses the area that
             * should be painted when the <code>Shape</code> is stroked according
             * to the rules defined by the
             * object implementing the <code>Stroke</code> interface.
             */
            // @ts-ignore
             createStrokedShape(p: java.awt.Shape): java.awt.Shape;
        }
    }
}
