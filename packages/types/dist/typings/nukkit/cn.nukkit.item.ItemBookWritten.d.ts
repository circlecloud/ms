declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
             class ItemBookWritten extends cn.nukkit.item.Item {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: java.lang.Integer, count: number)
                // @ts-ignore
                protected isWritten: boolean;
                // @ts-ignore
                public writeBook(author: string, title: string, pages: string): cn.nukkit.item.Item;
                // @ts-ignore
                public writeBook(author: string, title: string, pages: cn.nukkit.nbt.tag.ListTag): cn.nukkit.item.Item;
                // @ts-ignore
                public getAuthor(): string;
                // @ts-ignore
                public getTitle(): string;
                // @ts-ignore
                public getPages(): java.lang.String[];
            }
        }
    }
}
