declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Door implements org.bukkit.material.Directional, org.bukkit.material.Openable {
                constructor()
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs the bottom half of a door of the given material type, facing the specified direction and set to closed
                 */
                constructor(type: org.bukkit.Material, face: org.bukkit.block.BlockFace)
                /**
                 * Constructs the bottom half of a door of the given material type, facing the specified direction and set to open
                 * or closed
                 */
                constructor(type: org.bukkit.Material, face: org.bukkit.block.BlockFace, isOpen: boolean)
                /**
                 * Constructs the top half of door of the given material type and with the hinge on the left or right
                 */
                constructor(type: org.bukkit.Material, isHingeRight: boolean)
                /**
                 * Constructs the bottom half of a wooden door of the given species, facing the specified direction and set to
                 * closed
                 */
                constructor(species: org.bukkit.TreeSpecies, face: org.bukkit.block.BlockFace)
                /**
                 * Constructs the bottom half of a wooden door of the given species, facing the specified direction and set to open
                 * or closed
                 */
                constructor(species: org.bukkit.TreeSpecies, face: org.bukkit.block.BlockFace, isOpen: boolean)
                /**
                 * Constructs the top half of a wooden door of the given species and with the hinge on the left or right
                 */
                constructor(species: org.bukkit.TreeSpecies, isHingeRight: boolean)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Returns the item type of a wooden door for the given tree species.
                 */
                public static getWoodDoorOfSpecies(species: org.bukkit.TreeSpecies): org.bukkit.Material;
                /**
                 * Result is undefined if <code>isTopHalf()</code> is true.
                 */
                public isOpen(): boolean;
                /**
                 * Set whether the door is open. Undefined if <code>isTopHalf()</code> is true.
                 */
                public setOpen(isOpen: boolean): void;
                public isTopHalf(): boolean;
                /**
                 * Configure this part of the door to be either the top or the bottom half
                 */
                public setTopHalf(isTopHalf: boolean): void;
                public getHingeCorner(): org.bukkit.block.BlockFace;
                public toString(): string;
                /**
                 * Set the direction that this door should is facing.
                 * Undefined if <code>isTopHalf()</code> is true.
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Get the direction that this door is facing.
                 * Undefined if <code>isTopHalf()</code> is true.
                 */
                public getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Returns the side of the door the hinge is on.
                 * Undefined if <code>isTopHalf()</code> is false.
                 */
                public getHinge(): boolean;
                /**
                 * Set whether the hinge is on the left or right side. Left is false, right is true.
                 * Undefined if <code>isTopHalf()</code> is false.
                 */
                public setHinge(isHingeRight: boolean): void;
                public clone(): org.bukkit.material.Door;
            }
        }
    }
}
