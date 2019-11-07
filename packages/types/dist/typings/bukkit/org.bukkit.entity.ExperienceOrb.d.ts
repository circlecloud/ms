declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ExperienceOrb extends org.bukkit.entity.Entity {
                /**
                 * Gets how much experience is contained within this orb
                 */
                // @ts-ignore
                 getExperience(): number;
                /**
                 * Sets how much experience is contained within this orb
                 */
                // @ts-ignore
                 setExperience(value: number): void;
            }
        }
    }
}
