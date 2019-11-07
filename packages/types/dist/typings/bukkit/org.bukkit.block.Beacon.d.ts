// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Beacon extends org.bukkit.block.TileState, org.bukkit.block.Lockable, org.bukkit.Nameable {
                /**
                 * Returns the list of players within the beacon's range of effect.
                 * <p>
                 * This will return an empty list if the block represented by this state is
                 * no longer a beacon.
                 */
                // @ts-ignore
                 getEntitiesInRange(): java.util.Collection;
                /**
                 * Returns the tier of the beacon pyramid (0-4). The tier refers to the
                 * beacon's power level, based on how many layers of blocks are in the
                 * pyramid. Tier 1 refers to a beacon with one layer of 9 blocks under it.
                 */
                // @ts-ignore
                 getTier(): number;
                /**
                 * Returns the primary effect set on the beacon
                 */
                // @ts-ignore
                 getPrimaryEffect(): org.bukkit.potion.PotionEffect;
                /**
                 * Set the primary effect on this beacon, or null to clear.
                 */
                // @ts-ignore
                 setPrimaryEffect(effect: org.bukkit.potion.PotionEffectType): void;
                /**
                 * Returns the secondary effect set on the beacon.
                 */
                // @ts-ignore
                 getSecondaryEffect(): org.bukkit.potion.PotionEffect;
                /**
                 * Set the secondary effect on this beacon, or null to clear. Note that tier
                 * must be &gt;= 4 for this effect to be active.
                 */
                // @ts-ignore
                 setSecondaryEffect(effect: org.bukkit.potion.PotionEffectType): void;
            }
        }
    }
}
