// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class GraphicsConfigTemplate extends java.lang.Object {
            /**
             * This class is an abstract class so only subclasses can be
             * instantiated.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static REQUIRED: number;
            // @ts-ignore
            public static PREFERRED: number;
            // @ts-ignore
            public static UNNECESSARY: number;
            /**
             * Returns the "best" configuration possible that passes the
             * criteria defined in the <code>GraphicsConfigTemplate</code>.
             */
            // @ts-ignore
            public abstract getBestConfiguration(gc: java.awt.GraphicsConfiguration): java.awt.GraphicsConfiguration;
            /**
             * Returns a <code>boolean</code> indicating whether or
             * not the specified <code>GraphicsConfiguration</code> can be
             * used to create a drawing surface that supports the indicated
             * features.
             */
            // @ts-ignore
            public abstract isGraphicsConfigSupported(gc: java.awt.GraphicsConfiguration): boolean;
        }
    }
}
