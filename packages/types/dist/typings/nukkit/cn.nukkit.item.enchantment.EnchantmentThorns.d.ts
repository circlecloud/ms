declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                // @ts-ignore
                 class EnchantmentThorns extends cn.nukkit.item.enchantment.Enchantment {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getMinEnchantAbility(level: number): number;
                    // @ts-ignore
                    public getMaxEnchantAbility(level: number): number;
                    // @ts-ignore
                    public getMaxLevel(): number;
                    // @ts-ignore
                    public doPostAttack(attacker: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity): void;
                }
            }
        }
    }
}
