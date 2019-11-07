declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class ChatPaginator extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH: number;
                // @ts-ignore
                public static AVERAGE_CHAT_PAGE_WIDTH: number;
                // @ts-ignore
                public static UNBOUNDED_PAGE_WIDTH: number;
                // @ts-ignore
                public static OPEN_CHAT_PAGE_HEIGHT: number;
                // @ts-ignore
                public static CLOSED_CHAT_PAGE_HEIGHT: number;
                // @ts-ignore
                public static UNBOUNDED_PAGE_HEIGHT: number;
                /**
                 * Breaks a raw string up into pages using the default width and height.
                 */
                // @ts-ignore
                public static paginate(unpaginatedString: string, pageNumber: number): org.bukkit.util.ChatPaginator.ChatPage;
                /**
                 * Breaks a raw string up into pages using a provided width and height.
                 */
                // @ts-ignore
                public static paginate(unpaginatedString: string, pageNumber: number, lineLength: number, pageHeight: number): org.bukkit.util.ChatPaginator.ChatPage;
                /**
                 * Breaks a raw string up into a series of lines. Words are wrapped using
                 * spaces as decimeters and the newline character is respected.
                 */
                // @ts-ignore
                public static wordWrap(rawString: string, lineLength: number): java.lang.String[];
            }
        }
    }
}
