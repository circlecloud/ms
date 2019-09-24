declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Skull extends org.bukkit.block.TileState {
                /**
                 * Checks to see if the skull has an owner
                 */
                 hasOwner(): boolean;
                /**
                 * Gets the owner of the skull, if one exists
                 */
                 getOwner(): string;
                /**
                 * Sets the owner of the skull
                 * <p>
                 * Involves a potentially blocking web request to acquire the profile data for
                 * the provided name.
                 */
                 setOwner(name: string): boolean;
                /**
                 * Get the player which owns the skull. This player may appear as the
                 * texture depending on skull type.
                 */
                 getOwningPlayer(): org.bukkit.OfflinePlayer;
                /**
                 * Set the player which owns the skull. This player may appear as the
                 * texture depending on skull type.
                 */
                 setOwningPlayer(player: org.bukkit.OfflinePlayer): void;
                /**
                 * Gets the rotation of the skull in the world (or facing direction if this
                 * is a wall mounted skull).
                 */
                 getRotation(): org.bukkit.block.BlockFace;
                /**
                 * Sets the rotation of the skull in the world (or facing direction if this
                 * is a wall mounted skull).
                 */
                 setRotation(rotation: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the type of skull
                 */
                 getSkullType(): org.bukkit.SkullType;
                /**
                 * Sets the type of skull
                 */
                 setSkullType(skullType: org.bukkit.SkullType): void;
            }
        }
    }
}
