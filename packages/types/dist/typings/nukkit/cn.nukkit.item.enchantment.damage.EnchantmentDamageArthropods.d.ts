declare namespace cn {
    namespace nukkit {
        namespace item {
            namespace enchantment {
                namespace damage {
                    // @ts-ignore
                     class EnchantmentDamageArthropods extends cn.nukkit.item.enchantment.damage.EnchantmentDamage {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getMinEnchantAbility(level: number): number;
                        // @ts-ignore
                        public getMaxEnchantAbility(level: number): number;
                        // @ts-ignore
                        public getDamageBonus(entity: cn.nukkit.entity.Entity): number;
                        // @ts-ignore
                        public doPostAttack(attacker: cn.nukkit.entity.Entity, entity: cn.nukkit.entity.Entity): void;
                    }
                }
            }
        }
    }
}
