// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
            interface PotionBrewer {
                /**
                 * Creates a {@link PotionEffect} from the given {@link PotionEffectType},
                 * applying duration modifiers and checks.
                 */
                // @ts-ignore
                 createEffect(potion: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number): org.bukkit.potion.PotionEffect;
                /**
                 * Returns a collection of {@link PotionEffect} that would be applied from
                 * a potion with the given data value.
                 */
                // @ts-ignore
                 getEffectsFromDamage(damage: number): java.util.Collection;
                /**
                 * Returns a collection of {@link PotionEffect} that would be applied from
                 * a potion with the given type.
                 */
                // @ts-ignore
                 getEffects(type: org.bukkit.potion.PotionType, upgraded: boolean, extended: boolean): java.util.Collection;
            }
        }
    }
}
