declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Comparator implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a comparator switched off, with the default mode (normal) and facing the default direction (north).
                 */
                constructor()
                /**
                 * Constructs a comparator switched off, with the default mode (normal) and facing the specified direction.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a comparator switched off, with the specified mode and facing the specified direction.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace, isSubtraction: boolean)
                /**
                 * Constructs a comparator switched on or off, with the specified mode and facing the specified direction.
                 */
                constructor(facingDirection: org.bukkit.block.BlockFace, isSubtraction: boolean, state: boolean)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                protected static DEFAULT_DIRECTION: org.bukkit.block.BlockFace;
                protected static DEFAULT_SUBTRACTION_MODE: boolean;
                protected static DEFAULT_STATE: boolean;
                /**
                 * Sets whether the comparator is in subtraction mode.
                 */
                public setSubtractionMode(isSubtraction: boolean): void;
                /**
                 * Checks whether the comparator is in subtraction mode
                 */
                public isSubtractionMode(): boolean;
                /**
                 * Sets the direction this comparator is facing
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Gets the direction this comparator is facing
                 */
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.Comparator;
                /**
                 * Checks if the comparator is powered
                 */
                public isPowered(): boolean;
                /**
                 * Checks if the comparator is being powered
                 */
                public isBeingPowered(): boolean;
            }
        }
    }
}
