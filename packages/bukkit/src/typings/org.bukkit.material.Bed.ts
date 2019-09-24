declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Bed implements org.bukkit.material.Directional {
                /**
                 * Default constructor for a bed.
                 */
                constructor()
                /**
                 * Instantiate a bed facing in a particular direction.
                 */
                constructor(direction: org.bukkit.block.BlockFace)
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Determine if this block represents the head of the bed
                 */
                public isHeadOfBed(): boolean;
                /**
                 * Configure this to be either the head or the foot of the bed
                 */
                public setHeadOfBed(isHeadOfBed: boolean): void;
                /**
                 * Set which direction the head of the bed is facing. Note that this will
                 * only affect one of the two blocks the bed is made of.
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Get the direction that this bed's head is facing toward
                 */
                public getFacing(): org.bukkit.block.BlockFace;
                public toString(): string;
                public clone(): org.bukkit.material.Bed;
            }
        }
    }
}
