declare namespace org {
    namespace bukkit {
        namespace potion {
            class PotionBrewer {
                /**
                 * Creates a {@link PotionEffect} from the given {@link PotionEffectType},
                 * applying duration modifiers and checks.
                 */
                public createEffect(potion: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number): org.bukkit.potion.PotionEffect;
                /**
                 * Returns a collection of {@link PotionEffect} that would be applied from
                 * a potion with the given data value.
                 */
                public getEffectsFromDamage(damage: number): any[] /*java.util.Collection*/;
                /**
                 * Returns a collection of {@link PotionEffect} that would be applied from
                 * a potion with the given type.
                 */
                public getEffects(type: org.bukkit.potion.PotionType, upgraded: boolean, extended: boolean): any[] /*java.util.Collection*/;
            }
        }
    }
}
