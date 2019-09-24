declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ChestedHorse extends org.bukkit.entity.AbstractHorse {
                /**
                 * Gets whether the horse has a chest equipped.
                 */
                 isCarryingChest(): boolean;
                /**
                 * Sets whether the horse has a chest equipped. Removing a chest will also
                 * clear the chest's inventory.
                 */
                 setCarryingChest(chest: boolean): void;
            }
        }
    }
}
