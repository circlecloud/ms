declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Bed extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional {
                /**
                 * Default constructor for a bed.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Instantiate a bed facing in a particular direction.
                 */
                // @ts-ignore
                constructor(direction: org.bukkit.block.BlockFace)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Determine if this block represents the head of the bed
                 */
                // @ts-ignore
                public isHeadOfBed(): boolean;
                /**
                 * Configure this to be either the head or the foot of the bed
                 */
                // @ts-ignore
                public setHeadOfBed(isHeadOfBed: boolean): void;
                /**
                 * Set which direction the head of the bed is facing. Note that this will
                 * only affect one of the two blocks the bed is made of.
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                /**
                 * Get the direction that this bed's head is facing toward
                 */
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Bed;
            }
        }
    }
}
