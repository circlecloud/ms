// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface CanvasPeer {
                /**
                 * Requests a GC that best suits this Canvas. The returned GC may differ
                 * from the requested GC passed as the argument to this method. This method
                 * must return a non-null value (given the argument is non-null as well).
                 */
                // @ts-ignore
                 getAppropriateGraphicsConfiguration(gc: java.awt.GraphicsConfiguration): java.awt.GraphicsConfiguration;
            }
        }
    }
}
