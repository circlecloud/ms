declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Hopper extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a hopper facing the default direction (down) and initially
                 * active.
                 */
                constructor()
                /**
                 * Constructs a hopper facing the specified direction and initially active.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a hopper facing the specified direction and either active or
                 * not.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace, isActive: boolean)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                protected static DEFAULT_ACTIVE: boolean;
                /**
                 * Sets whether the hopper is active or not.
                 */
                public setActive(isActive: boolean): void;
                /**
                 * Checks whether the hopper is active or not.
                 */
                public isActive(): boolean;
                /**
                 * Sets the direction this hopper is facing
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this hopper is facing
                 */
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.Hopper;
                /**
                 * Checks if the hopper is powered.
                 */
                public isPowered(): boolean;
            }
        }
    }
}
