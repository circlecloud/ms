declare namespace org {
    namespace bukkit {
        namespace util {
            namespace ChatPaginator {
                // @ts-ignore
                 class ChatPage {
                    constructor(lines: string, pageNumber: number, totalPages: number)
                    public getPageNumber(): number;
                    public getTotalPages(): number;
                    public getLines(): any;
                }
            }
        }
    }
}
