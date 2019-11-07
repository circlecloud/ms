declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ZombieVillager extends org.bukkit.entity.Zombie {
                /**
                 * Sets the villager profession of this zombie.
                 */
                // @ts-ignore
                 setVillagerProfession(profession: org.bukkit.entity.Villager.Profession): void;
                /**
                 * Returns the villager profession of this zombie.
                 */
                // @ts-ignore
                 getVillagerProfession(): org.bukkit.entity.Villager.Profession;
                /**
                 * Get if this entity is in the process of converting to a Villager as a
                 * result of being cured.
                 */
                // @ts-ignore
                 isConverting(): boolean;
                /**
                 * Gets the amount of ticks until this entity will be converted to a
                 * Villager as a result of being cured.
                 * When this reaches 0, the entity will be converted.
                 */
                // @ts-ignore
                 getConversionTime(): number;
                /**
                 * Sets the amount of ticks until this entity will be converted to a
                 * Villager as a result of being cured.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 */
                // @ts-ignore
                 setConversionTime(time: number): void;
                /**
                 * Gets the player who initiated the conversion.
                 */
                // @ts-ignore
                 getConversionPlayer(): org.bukkit.OfflinePlayer;
                /**
                 * Sets the player who initiated the conversion.
                 * <p>
                 * This has no effect if this entity isn't converting currently.
                 */
                // @ts-ignore
                 setConversionPlayer(conversionPlayer: org.bukkit.OfflinePlayer): void;
            }
        }
    }
}
