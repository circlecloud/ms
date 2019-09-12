declare namespace org {
    namespace bukkit {
        namespace potion {
            class PotionEffectTypeWrapper {
                constructor(id: number)
                public getDurationModifier(): number;
                public getName(): string;
                /**
                 * Get the potion type bound to this wrapper.
                 */
                public getType(): org.bukkit.potion.PotionEffectType;
                public isInstant(): boolean;
                public getColor(): org.bukkit.Color;
            }
        }
    }
}
