declare namespace org {
    namespace bukkit {
        namespace entity {
            class ChestedHorse {
                /**
                 * Gets whether the horse has a chest equipped.
                 */
                public isCarryingChest(): boolean;
                /**
                 * Sets whether the horse has a chest equipped. Removing a chest will also
                 * clear the chest's inventory.
                 */
                public setCarryingChest(chest: boolean): void;
            }
        }
    }
}
