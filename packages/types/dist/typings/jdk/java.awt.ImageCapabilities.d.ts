declare namespace java {
    namespace awt {
        // @ts-ignore
         class ImageCapabilities extends java.lang.Object {
            /**
             * Creates a new object for specifying image capabilities.
             */
            // @ts-ignore
            constructor(accelerated: boolean)
            /**
             * Returns <code>true</code> if the object whose capabilities are
             * encapsulated in this <code>ImageCapabilities</code> can be or is
             * accelerated.
             */
            // @ts-ignore
            public isAccelerated(): boolean;
            /**
             * Returns <code>true</code> if the <code>VolatileImage</code>
             * described by this <code>ImageCapabilities</code> can lose
             * its surfaces.
             */
            // @ts-ignore
            public isTrueVolatile(): boolean;
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
