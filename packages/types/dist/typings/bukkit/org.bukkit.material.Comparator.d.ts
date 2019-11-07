// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Comparator extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a comparator switched off, with the default mode (normal) and facing the default direction (north).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a comparator switched off, with the default mode (normal) and facing the specified direction.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a comparator switched off, with the specified mode and facing the specified direction.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, isSubtraction: boolean)
                /**
                 * Constructs a comparator switched on or off, with the specified mode and facing the specified direction.
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, isSubtraction: boolean, state: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                // @ts-ignore
                protected static DEFAULT_SUBTRACTION_MODE: boolean;
                // @ts-ignore
                protected static DEFAULT_STATE: boolean;
                /**
                 * Sets whether the comparator is in subtraction mode.
                 */
                // @ts-ignore
                public setSubtractionMode(isSubtraction: boolean): void;
                /**
                 * Checks whether the comparator is in subtraction mode
                 */
                // @ts-ignore
                public isSubtractionMode(): boolean;
                /**
                 * Sets the direction this comparator is facing
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this comparator is facing
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Comparator;
                /**
                 * Checks if the comparator is powered
                 */
                // @ts-ignore
                public isPowered(): boolean;
                /**
                 * Checks if the comparator is being powered
                 */
                // @ts-ignore
                public isBeingPowered(): boolean;
            }
        }
    }
}
