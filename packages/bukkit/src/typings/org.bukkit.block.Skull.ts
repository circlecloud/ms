declare namespace org {
    namespace bukkit {
        namespace block {
            class Skull {
                /**
                 * Checks to see if the skull has an owner
                 */
                public hasOwner(): boolean;
                /**
                 * Gets the owner of the skull, if one exists
                 */
                public getOwner(): string;
                /**
                 * Sets the owner of the skull
                 * <p>
                 * Involves a potentially blocking web request to acquire the profile data for
                 * the provided name.
                 */
                public setOwner(name: string): boolean;
                /**
                 * Get the player which owns the skull. This player may appear as the
                 * texture depending on skull type.
                 */
                public getOwningPlayer(): org.bukkit.OfflinePlayer;
                /**
                 * Set the player which owns the skull. This player may appear as the
                 * texture depending on skull type.
                 */
                public setOwningPlayer(player: org.bukkit.OfflinePlayer): void;
                /**
                 * Gets the rotation of the skull in the world (or facing direction if this
                 * is a wall mounted skull).
                 */
                public getRotation(): org.bukkit.block.BlockFace;
                /**
                 * Sets the rotation of the skull in the world (or facing direction if this
                 * is a wall mounted skull).
                 */
                public setRotation(rotation: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the type of skull
                 */
                public getSkullType(): org.bukkit.SkullType;
                /**
                 * Sets the type of skull
                 */
                public setSkullType(skullType: org.bukkit.SkullType): void;
            }
        }
    }
}
