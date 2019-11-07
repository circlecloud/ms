// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
             class PotionData extends java.lang.Object {
                /**
                 * Instantiates a final PotionData object to contain information about a
                 * Potion
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, extended: boolean, upgraded: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType)
                /**
                 * Gets the type of the potion, Type matches up with each kind of craftable
                 * potion
                 */
                // @ts-ignore
                public getType(): org.bukkit.potion.PotionType;
                /**
                 * Checks if the potion is in an upgraded state. This refers to whether or
                 * not the potion is Tier 2, such as Potion of Fire Resistance II.
                 */
                // @ts-ignore
                public isUpgraded(): boolean;
                /**
                 * Checks if the potion is in an extended state. This refers to the extended
                 * duration potions
                 */
                // @ts-ignore
                public isExtended(): boolean;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
