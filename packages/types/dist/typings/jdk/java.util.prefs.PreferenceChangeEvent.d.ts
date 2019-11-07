declare namespace java {
    namespace util {
        namespace prefs {
            // @ts-ignore
             class PreferenceChangeEvent extends java.util.EventObject {
                /**
                 * Constructs a new <code>PreferenceChangeEvent</code> instance.
                 */
                // @ts-ignore
                constructor(node: java.util.prefs.Preferences, key: string, newValue: string)
                /**
                 * Returns the preference node that emitted the event.
                 */
                // @ts-ignore
                public getNode(): java.util.prefs.Preferences;
                /**
                 * Returns the key of the preference that was changed.
                 */
                // @ts-ignore
                public getKey(): string;
                /**
                 * Returns the new value for the preference.
                 */
                // @ts-ignore
                public getNewValue(): string;
            }
        }
    }
}
