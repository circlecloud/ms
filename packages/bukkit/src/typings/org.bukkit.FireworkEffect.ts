declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class FireworkEffect implements org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Construct a firework effect.
             */
            public static builder(): org.bukkit.FireworkEffect.Builder;
            /**
             * Get whether the firework effect flickers.
             */
            public hasFlicker(): boolean;
            /**
             * Get whether the firework effect has a trail.
             */
            public hasTrail(): boolean;
            /**
             * Get the primary colors of the firework effect.
             */
            public getColors(): any[] /*java.util.List*/;
            /**
             * Get the fade colors of the firework effect.
             */
            public getFadeColors(): any[] /*java.util.List*/;
            /**
             * Get the type of the firework effect.
             */
            public getType(): org.bukkit.FireworkEffect.Type;
            public static deserialize(map: Map<any, any> /*java.util.Map*/): org.bukkit.configuration.serialization.ConfigurationSerializable;
            public serialize(): Map<any, any> /*java.util.Map*/;
            public toString(): string;
            public hashCode(): number;
            public equals(obj: any): boolean;
        }
    }
}
