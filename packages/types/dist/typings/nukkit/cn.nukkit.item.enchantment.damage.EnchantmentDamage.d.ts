declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace damage {
                    // @ts-ignore
                    abstract class EnchantmentDamage extends cn.nukkit.item.enchantment.Enchantment {
                        // @ts-ignore
                        constructor(id: number, name: string, weight: number, type: cn.nukkit.item.enchantment.damage.EnchantmentDamage.TYPE)
                        // @ts-ignore
                        protected damageType: cn.nukkit.item.enchantment.damage.EnchantmentDamage.TYPE;
                        // @ts-ignore
                        public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean;
                        // @ts-ignore
                        public canEnchant(item: cn.nukkit.item.Item): boolean;
                        // @ts-ignore
                        public getMaxLevel(): number;
                        // @ts-ignore
                        public getName(): string;
                        // @ts-ignore
                        public isMajor(): boolean;
                    }
                }
            }
        }
    }
}
