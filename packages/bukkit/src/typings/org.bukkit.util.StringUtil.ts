declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class StringUtil {
                constructor()
                /**
                 * Copies all elements from the iterable collection of originals to the
                 * collection provided.
                 */
                public static copyPartialMatches(token: string, originals: any, collection: any[] /*java.util.Collection*/): any[] /*java.util.Collection*/;
                /**
                 * This method uses a region to check case-insensitive equality. This
                 * means the internal array does not need to be copied like a
                 * toLowerCase() call would.
                 */
                public static startsWithIgnoreCase(string: string, prefix: string): boolean;
            }
        }
    }
}
