declare namespace java {
    namespace util {
        namespace prefs {
            // @ts-ignore
            interface PreferencesFactory {
                /**
                 * Returns the system root preference node.  (Multiple calls on this
                 * method will return the same object reference.)
                 */
                // @ts-ignore
                 systemRoot(): java.util.prefs.Preferences;
                /**
                 * Returns the user root preference node corresponding to the calling
                 * user.  In a server, the returned value will typically depend on
                 * some implicit client-context.
                 */
                // @ts-ignore
                 userRoot(): java.util.prefs.Preferences;
            }
        }
    }
}
