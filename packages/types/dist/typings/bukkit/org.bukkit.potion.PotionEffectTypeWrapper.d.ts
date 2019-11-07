declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
             class PotionEffectTypeWrapper extends org.bukkit.potion.PotionEffectType {
                // @ts-ignore
                constructor(id: number)
                // @ts-ignore
                public getDurationModifier(): number;
                // @ts-ignore
                public getName(): string;
                /**
                 * Get the potion type bound to this wrapper.
                 */
                // @ts-ignore
                public getType(): org.bukkit.potion.PotionEffectType;
                // @ts-ignore
                public isInstant(): boolean;
                // @ts-ignore
                public getColor(): org.bukkit.Color;
            }
        }
    }
}
