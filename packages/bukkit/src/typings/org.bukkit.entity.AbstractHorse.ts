declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface AbstractHorse extends org.bukkit.entity.Animals, org.bukkit.entity.Vehicle, org.bukkit.inventory.InventoryHolder, org.bukkit.entity.Tameable {
                /**
                 * Gets the horse's variant.
                 * <p>
                 * A horse's variant defines its physical appearance and capabilities.
                 * Whether a horse is a regular horse, donkey, mule, or other kind of horse
                 * is determined using the variant.
                 */
                 getVariant(): org.bukkit.entity.Horse.Variant;
                 setVariant(variant: org.bukkit.entity.Horse.Variant): void;
                /**
                 * Gets the domestication level of this horse.
                 * <p>
                 * A higher domestication level indicates that the horse is closer to
                 * becoming tame. As the domestication level gets closer to the max
                 * domestication level, the chance of the horse becoming tame increases.
                 */
                 getDomestication(): number;
                /**
                 * Sets the domestication level of this horse.
                 * <p>
                 * Setting the domestication level to a high value will increase the
                 * horse's chances of becoming tame.
                 * <p>
                 * Domestication level must be greater than zero and no greater than
                 * the max domestication level of the horse, determined with
                 * {@link #getMaxDomestication()}
                 */
                 setDomestication(level: number): void;
                /**
                 * Gets the maximum domestication level of this horse.
                 * <p>
                 * The higher this level is, the longer it will likely take
                 * for the horse to be tamed.
                 */
                 getMaxDomestication(): number;
                /**
                 * Sets the maximum domestication level of this horse.
                 * <p>
                 * Setting a higher max domestication will increase the amount of
                 * domesticating (feeding, riding, etc.) necessary in order to tame it,
                 * while setting a lower max value will have the opposite effect.
                 * <p>
                 * Maximum domestication must be greater than zero.
                 */
                 setMaxDomestication(level: number): void;
                /**
                 * Gets the jump strength of this horse.
                 * <p>
                 * Jump strength defines how high the horse can jump. A higher jump strength
                 * increases how high a jump will go.
                 */
                 getJumpStrength(): number;
                /**
                 * Sets the jump strength of this horse.
                 * <p>
                 * A higher jump strength increases how high a jump will go.
                 * Setting a jump strength to 0 will result in no jump.
                 * You cannot set a jump strength to a value below 0 or
                 * above 2.
                 */
                 setJumpStrength(strength: number): void;
                 getInventory(): org.bukkit.inventory.AbstractHorseInventory;
            }
        }
    }
}
