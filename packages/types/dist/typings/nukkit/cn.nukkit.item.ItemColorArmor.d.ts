declare namespace cn {
    namespace nukkit {
        namespace item {
            // @ts-ignore
            abstract class ItemColorArmor extends cn.nukkit.item.ItemArmor {
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number)
                // @ts-ignore
                constructor(id: number, meta: java.lang.Integer, count: number, name: string)
                /**
                 * Set leather armor color
                 */
                // @ts-ignore
                public setColor(dyeColor: number): cn.nukkit.item.ItemColorArmor;
                /**
                 * Set leather armor color
                 */
                // @ts-ignore
                public setColor(dyeColor: cn.nukkit.utils.DyeColor): cn.nukkit.item.ItemColorArmor;
                /**
                 * Set leather armor color
                 */
                // @ts-ignore
                public setColor(color: cn.nukkit.utils.BlockColor): cn.nukkit.item.ItemColorArmor;
                /**
                 * Set leather armor color
                 */
                // @ts-ignore
                public setColor(r: number, g: number, b: number): cn.nukkit.item.ItemColorArmor;
                /**
                 * Get color of Leather Item
                 */
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
            }
        }
    }
}
