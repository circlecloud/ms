declare namespace org {
    namespace bukkit {
        namespace util {
            class ChatPaginator {
                constructor()
                public static GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH: number;
                public static AVERAGE_CHAT_PAGE_WIDTH: number;
                public static UNBOUNDED_PAGE_WIDTH: number;
                public static OPEN_CHAT_PAGE_HEIGHT: number;
                public static CLOSED_CHAT_PAGE_HEIGHT: number;
                public static UNBOUNDED_PAGE_HEIGHT: number;
                /**
                 * Breaks a raw string up into pages using the default width and height.
                 */
                public static paginate(unpaginatedString: string, pageNumber: number): org.bukkit.util.ChatPaginator.ChatPage;
                /**
                 * Breaks a raw string up into pages using a provided width and height.
                 */
                public static paginate(unpaginatedString: string, pageNumber: number, lineLength: number, pageHeight: number): org.bukkit.util.ChatPaginator.ChatPage;
                /**
                 * Breaks a raw string up into a series of lines. Words are wrapped using
                 * spaces as decimeters and the newline character is respected.
                 */
                public static wordWrap(rawString: string, lineLength: number): any;
            }
        }
    }
}
