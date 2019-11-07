// @ts-nocheck
declare namespace java {
    namespace util {
        namespace prefs {
            // @ts-ignore
            interface NodeChangeListener {
                /**
                 * This method gets called when a child node is added.
                 */
                // @ts-ignore
                 childAdded(evt: java.util.prefs.NodeChangeEvent): void;
                /**
                 * This method gets called when a child node is removed.
                 */
                // @ts-ignore
                 childRemoved(evt: java.util.prefs.NodeChangeEvent): void;
            }
        }
    }
}
