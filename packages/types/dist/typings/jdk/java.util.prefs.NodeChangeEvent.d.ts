declare namespace java {
    namespace util {
        namespace prefs {
            // @ts-ignore
             class NodeChangeEvent extends java.util.EventObject {
                /**
                 * Constructs a new <code>NodeChangeEvent</code> instance.
                 */
                // @ts-ignore
                constructor(parent: java.util.prefs.Preferences, child: java.util.prefs.Preferences)
                /**
                 * Returns the parent of the node that was added or removed.
                 */
                // @ts-ignore
                public getParent(): java.util.prefs.Preferences;
                /**
                 * Returns the node that was added or removed.
                 */
                // @ts-ignore
                public getChild(): java.util.prefs.Preferences;
            }
        }
    }
}
