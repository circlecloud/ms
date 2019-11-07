// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Hopper extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a hopper facing the default direction (down) and initially
                 * active.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a hopper facing the specified direction and initially active.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a hopper facing the specified direction and either active or
                 * not.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, isActive: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                // @ts-ignore
                protected static DEFAULT_ACTIVE: boolean;
                /**
                 * Sets whether the hopper is active or not.
                 */
                // @ts-ignore
                public setActive(isActive: boolean): void;
                /**
                 * Checks whether the hopper is active or not.
                 */
                // @ts-ignore
                public isActive(): boolean;
                /**
                 * Sets the direction this hopper is facing
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this hopper is facing
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Hopper;
                /**
                 * Checks if the hopper is powered.
                 */
                // @ts-ignore
                public isPowered(): boolean;
            }
        }
    }
}
