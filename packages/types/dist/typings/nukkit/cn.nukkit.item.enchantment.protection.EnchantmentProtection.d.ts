declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace protection {
                    // @ts-ignore
                    abstract class EnchantmentProtection extends cn.nukkit.item.enchantment.Enchantment {
                        // @ts-ignore
                        constructor(id: number, name: string, weight: number, type: cn.nukkit.item.enchantment.protection.EnchantmentProtection.TYPE)
                        // @ts-ignore
                        protected protectionType: cn.nukkit.item.enchantment.protection.EnchantmentProtection.TYPE;
                        // @ts-ignore
                        public isCompatibleWith(enchantment: cn.nukkit.item.enchantment.Enchantment): boolean;
                        // @ts-ignore
                        public getMaxLevel(): number;
                        // @ts-ignore
                        public getName(): string;
                        // @ts-ignore
                        public getTypeModifier(): number;
                        // @ts-ignore
                        public isMajor(): boolean;
                    }
                }
            }
        }
    }
}
