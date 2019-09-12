declare namespace org {
    namespace bukkit {
        namespace potion {
            class PotionData {
                /**
                 * Instantiates a final PotionData object to contain information about a
                 * Potion
                 */
                constructor(type: org.bukkit.potion.PotionType, extended: boolean, upgraded: boolean)
                constructor(type: org.bukkit.potion.PotionType)
                /**
                 * Gets the type of the potion, Type matches up with each kind of craftable
                 * potion
                 */
                public getType(): org.bukkit.potion.PotionType;
                /**
                 * Checks if the potion is in an upgraded state. This refers to whether or
                 * not the potion is Tier 2, such as Potion of Fire Resistance II.
                 */
                public isUpgraded(): boolean;
                /**
                 * Checks if the potion is in an extended state. This refers to the extended
                 * duration potions
                 */
                public isExtended(): boolean;
                public hashCode(): number;
                public equals(obj: any): boolean;
            }
        }
    }
}
