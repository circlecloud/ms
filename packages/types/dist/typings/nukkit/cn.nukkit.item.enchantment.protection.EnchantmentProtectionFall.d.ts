declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace protection {
                    // @ts-ignore
                     class EnchantmentProtectionFall extends cn.nukkit.item.enchantment.protection.EnchantmentProtection {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getMinEnchantAbility(level: number): number;
                        // @ts-ignore
                        public getMaxEnchantAbility(level: number): number;
                        // @ts-ignore
                        public getTypeModifier(): number;
                        // @ts-ignore
                        public getProtectionFactor(e: cn.nukkit.event.entity.EntityDamageEvent): number;
                    }
                }
            }
        }
    }
}
