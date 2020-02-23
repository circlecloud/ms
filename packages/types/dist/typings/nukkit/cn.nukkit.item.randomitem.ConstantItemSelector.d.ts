declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace randomitem {
                // @ts-ignore
                 class ConstantItemSelector extends cn.nukkit.item.randomitem.Selector {
                    // @ts-ignore
                    constructor(id: number, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    constructor(id: number, meta: java.lang.Integer, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    constructor(id: number, meta: java.lang.Integer, count: number, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    constructor(item: cn.nukkit.item.Item, parent: cn.nukkit.item.randomitem.Selector)
                    // @ts-ignore
                    protected item: cn.nukkit.item.Item;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public select(): java.lang.Object;
                }
            }
        }
    }
}
