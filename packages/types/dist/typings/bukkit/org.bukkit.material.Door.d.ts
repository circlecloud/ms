declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Door extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Openable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs the bottom half of a door of the given material type, facing the specified direction and set to closed
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, face: org.bukkit.block.BlockFace)
                /**
                 * Constructs the bottom half of a door of the given material type, facing the specified direction and set to open
                 * or closed
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, face: org.bukkit.block.BlockFace, isOpen: boolean)
                /**
                 * Constructs the top half of door of the given material type and with the hinge on the left or right
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, isHingeRight: boolean)
                /**
                 * Constructs the bottom half of a wooden door of the given species, facing the specified direction and set to
                 * closed
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, face: org.bukkit.block.BlockFace)
                /**
                 * Constructs the bottom half of a wooden door of the given species, facing the specified direction and set to open
                 * or closed
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, face: org.bukkit.block.BlockFace, isOpen: boolean)
                /**
                 * Constructs the top half of a wooden door of the given species and with the hinge on the left or right
                 */
                // @ts-ignore
                constructor(species: org.bukkit.TreeSpecies, isHingeRight: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Returns the item type of a wooden door for the given tree species.
                 */
                // @ts-ignore
                public static getWoodDoorOfSpecies(species: org.bukkit.TreeSpecies): org.bukkit.Material;
                /**
                 * Result is undefined if <code>isTopHalf()</code> is true.
                 */
                // @ts-ignore
                public isOpen(): boolean;
                /**
                 * Set whether the door is open. Undefined if <code>isTopHalf()</code> is true.
                 */
                // @ts-ignore
                public setOpen(isOpen: boolean): void;
                // @ts-ignore
                public isTopHalf(): boolean;
                /**
                 * Configure this part of the door to be either the top or the bottom half
                 */
                // @ts-ignore
                public setTopHalf(isTopHalf: boolean): void;
                // @ts-ignore
                public getHingeCorner(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                /**
                 * Set the direction that this door should is facing.
                 * Undefined if <code>isTopHalf()</code> is true.
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Get the direction that this door is facing.
                 * Undefined if <code>isTopHalf()</code> is true.
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Returns the side of the door the hinge is on.
                 * Undefined if <code>isTopHalf()</code> is false.
                 */
                // @ts-ignore
                public getHinge(): boolean;
                /**
                 * Set whether the hinge is on the left or right side. Left is false, right is true.
                 * Undefined if <code>isTopHalf()</code> is false.
                 */
                // @ts-ignore
                public setHinge(isHingeRight: boolean): void;
                // @ts-ignore
                public clone(): org.bukkit.material.Door;
            }
        }
    }
}
