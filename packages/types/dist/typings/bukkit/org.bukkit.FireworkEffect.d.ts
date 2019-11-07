// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class FireworkEffect extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Construct a firework effect.
             */
            // @ts-ignore
            public static builder(): org.bukkit.FireworkEffect.Builder;
            /**
             * Get whether the firework effect flickers.
             */
            // @ts-ignore
            public hasFlicker(): boolean;
            /**
             * Get whether the firework effect has a trail.
             */
            // @ts-ignore
            public hasTrail(): boolean;
            /**
             * Get the primary colors of the firework effect.
             */
            // @ts-ignore
            public getColors(): java.util.List;
            /**
             * Get the fade colors of the firework effect.
             */
            // @ts-ignore
            public getFadeColors(): java.util.List;
            /**
             * Get the type of the firework effect.
             */
            // @ts-ignore
            public getType(): org.bukkit.FireworkEffect.Type;
            // @ts-ignore
            public static deserialize(map: java.util.Map): org.bukkit.configuration.serialization.ConfigurationSerializable;
            // @ts-ignore
            public serialize(): java.util.Map;
            // @ts-ignore
            public toString(): string;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
        }
    }
}
