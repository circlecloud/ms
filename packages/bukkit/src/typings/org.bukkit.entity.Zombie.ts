declare namespace org {
    namespace bukkit {
        namespace entity {
            class Zombie {
                /**
                 * Gets whether the zombie is a baby
                 */
                public isBaby(): boolean;
                /**
                 * Sets whether the zombie is a baby
                 */
                public setBaby(flag: boolean): void;
                /**
                 * Gets whether the zombie is a villager
                 */
                public isVillager(): boolean;
                public setVillager(flag: boolean): void;
                public setVillagerProfession(profession: org.bukkit.entity.Villager.Profession): void;
                public getVillagerProfession(): org.bukkit.entity.Villager.Profession;
                /**
                 * Get if this entity is in the process of converting to a Drowned as a
                 * result of being underwater.
                 */
                public isConverting(): boolean;
                /**
                 * Gets the amount of ticks until this entity will be converted to a Drowned
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted.
                 */
                public getConversionTime(): number;
                /**
                 * Sets the amount of ticks until this entity will be converted to a Drowned
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 */
                public setConversionTime(time: number): void;
            }
        }
    }
}
