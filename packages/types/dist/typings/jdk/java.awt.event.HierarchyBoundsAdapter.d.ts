declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            abstract class HierarchyBoundsAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Called when an ancestor of the source is moved.
                 */
                // @ts-ignore
                public ancestorMoved(e: java.awt.event.HierarchyEvent): void;
                /**
                 * Called when an ancestor of the source is resized.
                 */
                // @ts-ignore
                public ancestorResized(e: java.awt.event.HierarchyEvent): void;
            }
        }
    }
}
