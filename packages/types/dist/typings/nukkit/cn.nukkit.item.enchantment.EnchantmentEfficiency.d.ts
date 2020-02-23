declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                // @ts-ignore
                 class EnchantmentEfficiency extends cn.nukkit.item.enchantment.Enchantment {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getMinEnchantAbility(level: number): number;
                    // @ts-ignore
                    public getMaxEnchantAbility(level: number): number;
                    // @ts-ignore
                    public getMaxLevel(): number;
                    // @ts-ignore
                    public canEnchant(item: cn.nukkit.item.Item): boolean;
                }
            }
        }
    }
}
