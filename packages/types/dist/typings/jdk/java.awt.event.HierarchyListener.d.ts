declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            interface HierarchyListener {
                /**
                 * Called when the hierarchy has been changed. To discern the actual
                 * type of change, call <code>HierarchyEvent.getChangeFlags()</code>.
                 */
                // @ts-ignore
                 hierarchyChanged(e: java.awt.event.HierarchyEvent): void;
            }
        }
    }
}
