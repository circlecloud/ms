declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ExperienceOrb extends org.bukkit.entity.Entity {
                /**
                 * Gets how much experience is contained within this orb
                 */
                 getExperience(): number;
                /**
                 * Sets how much experience is contained within this orb
                 */
                 setExperience(value: number): void;
            }
        }
    }
}
