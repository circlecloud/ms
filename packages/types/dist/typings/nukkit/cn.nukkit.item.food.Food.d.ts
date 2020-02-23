declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace food {
                // @ts-ignore
                abstract class Food extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static apple: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static apple_golden: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static apple_golden_enchanted: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static beef_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static beetroot: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static beetroot_soup: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static bread: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static cake_slice: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static carrot: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static carrot_golden: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static chicken_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static chicken_cooked: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static chorus_fruit: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static cookie: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static melon_slice: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static milk: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static mushroom_stew: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static mutton_cooked: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static mutton_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static porkchop_cooked: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static porkchop_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static potato_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static potato_baked: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static potato_poisonous: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static pumpkin_pie: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static rabbit_cooked: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static rabbit_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static rabbit_stew: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static rotten_flesh: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static spider_eye: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static steak: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static clownfish: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static fish_cooked: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static fish_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static salmon_cooked: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static salmon_raw: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static pufferfish: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static dried_kelp: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static sweet_berries: cn.nukkit.item.food.Food;
                    // @ts-ignore
                    protected restoreFood: number;
                    // @ts-ignore
                    protected restoreSaturation: number;
                    // @ts-ignore
                    protected relativeIDs: java.util.List;
                    // @ts-ignore
                    public static registerFood(food: cn.nukkit.item.food.Food, plugin: cn.nukkit.plugin.Plugin): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static getByRelative(item: cn.nukkit.item.Item): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static getByRelative(block: cn.nukkit.block.Block): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public static getByRelative(relativeID: number, meta: number): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public eatenBy(player: cn.nukkit.Player): boolean;
                    // @ts-ignore
                    protected onEatenBy(player: cn.nukkit.Player): boolean;
                    // @ts-ignore
                    public addRelative(relativeID: number): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public addRelative(relativeID: number, meta: number): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public getRestoreFood(): number;
                    // @ts-ignore
                    public setRestoreFood(restoreFood: number): cn.nukkit.item.food.Food;
                    // @ts-ignore
                    public getRestoreSaturation(): number;
                    // @ts-ignore
                    public setRestoreSaturation(restoreSaturation: number): cn.nukkit.item.food.Food;
                }
            }
        }
    }
}
