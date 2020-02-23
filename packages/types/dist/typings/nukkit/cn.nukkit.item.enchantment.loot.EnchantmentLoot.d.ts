declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace loot {
                    // @ts-ignore
                    abstract class EnchantmentLoot extends cn.nukkit.item.enchantment.Enchantment {
                        // @ts-ignore
                        constructor(id: number, name: string, weight: number, type: cn.nukkit.item.enchantment.EnchantmentType)
                        // @ts-ignore
                        public getMinEnchantAbility(level: number): number;
                        // @ts-ignore
                        public getMaxEnchantAbility(level: number): number;
                        // @ts-ignore
                        public getMaxLevel(): number;
                        // @ts-ignore
                        public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean;
                    }
                }
            }
        }
    }
}
