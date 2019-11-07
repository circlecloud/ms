declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Tameable extends org.bukkit.entity.Entity {
                /**
                 * Check if this is tamed
                 * <p>
                 * If something is tamed then a player can not tame it through normal
                 * methods, even if it does not belong to anyone in particular.
                 */
                // @ts-ignore
                 isTamed(): boolean;
                /**
                 * Sets if this has been tamed. Not necessary if the method setOwner has
                 * been used, as it tames automatically.
                 * <p>
                 * If something is tamed then a player can not tame it through normal
                 * methods, even if it does not belong to anyone in particular.
                 */
                // @ts-ignore
                 setTamed(tame: boolean): void;
                /**
                 * Gets the current owning AnimalTamer
                 */
                // @ts-ignore
                 getOwner(): org.bukkit.entity.AnimalTamer;
                /**
                 * Set this to be owned by given AnimalTamer.
                 * <p>
                 * If the owner is not null, this will be tamed and will have any current
                 * path it is following removed. If the owner is set to null, this will be
                 * untamed, and the current owner removed.
                 */
                // @ts-ignore
                 setOwner(tamer: org.bukkit.entity.AnimalTamer): void;
            }
        }
    }
}
