declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
             class Util extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static DEFAULT_PORT: number;
                /**
                 * Method to transform human readable addresses into usable address objects.
                 */
                // @ts-ignore
                public static getAddr(hostline: string): java.net.InetSocketAddress;
                /**
                 * Formats an integer as a hex value.
                 */
                // @ts-ignore
                public static hex(i: number): string;
                /**
                 * Constructs a pretty one line version of a {@link Throwable}. Useful for
                 * debugging.
                 */
                // @ts-ignore
                public static exception(t: java.lang.Throwable): string;
                // @ts-ignore
                public static csv(objects: java.lang.Iterable): string;
                // @ts-ignore
                public static format(objects: java.lang.Iterable, separators: string): string;
                /**
                 * Converts a String to a UUID
                 */
                // @ts-ignore
                public static getUUID(uuid: string): java.util.UUID;
            }
        }
    }
}
