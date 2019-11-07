// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Stairs extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                // @ts-ignore
                public getAscendingDirection(): org.bukkit.block.BlockFace;
                // @ts-ignore
                public getDescendingDirection(): org.bukkit.block.BlockFace;
                /**
                 * Set the direction the stair part of the block is facing
                 */
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Test if step is inverted
                 */
                // @ts-ignore
                public isInverted(): boolean;
                /**
                 * Set step inverted state
                 */
                // @ts-ignore
                public setInverted(inv: boolean): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.Stairs;
            }
        }
    }
}
