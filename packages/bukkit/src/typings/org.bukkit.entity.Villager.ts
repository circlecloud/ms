declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Villager extends org.bukkit.entity.AbstractVillager {
                /**
                 * Gets the current profession of this villager.
                 */
                 getProfession(): org.bukkit.entity.Villager.Profession;
                /**
                 * Sets the new profession of this villager.
                 */
                 setProfession(profession: org.bukkit.entity.Villager.Profession): void;
                /**
                 * Gets the current type of this villager.
                 */
                 getVillagerType(): org.bukkit.entity.Villager.Type;
                /**
                 * Sets the new type of this villager.
                 */
                 setVillagerType(type: org.bukkit.entity.Villager.Type): void;
                /**
                 * Gets the level of this villager.
                 * A villager with a level of 1 and no experience is liable to lose its
                 * profession.
                 */
                 getVillagerLevel(): number;
                /**
                 * Sets the level of this villager.
                 * A villager with a level of 1 and no experience is liable to lose its
                 * profession.
                 */
                 setVillagerLevel(level: number): void;
                /**
                 * Gets the trading experience of this villager.
                 */
                 getVillagerExperience(): number;
                /**
                 * Sets the trading experience of this villager.
                 */
                 setVillagerExperience(experience: number): void;
                /**
                 * Attempts to make this villager sleep at the given location.
                 * <br>
                 * The location must be in the current world and have a bed placed at the
                 * location. The villager will put its head on the specified block while
                 * sleeping.
                 */
                 sleep(location: org.bukkit.Location): boolean;
                /**
                 * Causes this villager to wake up if he's currently sleeping.
                 */
                 wakeup(): void;
            }
        }
    }
}
