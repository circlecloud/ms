declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Zombie extends org.bukkit.entity.Monster {
                /**
                 * Gets whether the zombie is a baby
                 */
                 isBaby(): boolean;
                /**
                 * Sets whether the zombie is a baby
                 */
                 setBaby(flag: boolean): void;
                /**
                 * Gets whether the zombie is a villager
                 */
                 isVillager(): boolean;
                 setVillager(flag: boolean): void;
                 setVillagerProfession(profession: org.bukkit.entity.Villager.Profession): void;
                 getVillagerProfession(): org.bukkit.entity.Villager.Profession;
                /**
                 * Get if this entity is in the process of converting to a Drowned as a
                 * result of being underwater.
                 */
                 isConverting(): boolean;
                /**
                 * Gets the amount of ticks until this entity will be converted to a Drowned
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted.
                 */
                 getConversionTime(): number;
                /**
                 * Sets the amount of ticks until this entity will be converted to a Drowned
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 */
                 setConversionTime(time: number): void;
            }
        }
    }
}
