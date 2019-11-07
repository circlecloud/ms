declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class StringUtil extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Copies all elements from the iterable collection of originals to the
                 * collection provided.
                 */
                // @ts-ignore
                public static copyPartialMatches(token: string, originals: java.lang.Iterable, collection: java.util.Collection): java.util.Collection;
                /**
                 * This method uses a region to check case-insensitive equality. This
                 * means the internal array does not need to be copied like a
                 * toLowerCase() call would.
                 */
                // @ts-ignore
                public static startsWithIgnoreCase(string: string, prefix: string): boolean;
            }
        }
    }
}
