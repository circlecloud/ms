declare namespace org {
    namespace bukkit {
        namespace material {
            class Stairs {
                constructor(type: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                public getAscendingDirection(): org.bukkit.block.BlockFace;
                public getDescendingDirection(): org.bukkit.block.BlockFace;
                /**
                 * Set the direction the stair part of the block is facing
                 */
                public setFacingDirection(face: org.bukkit.block.BlockFace): void;
                public getFacing(): org.bukkit.block.BlockFace;
                /**
                 * Test if step is inverted
                 */
                public isInverted(): boolean;
                /**
                 * Set step inverted state
                 */
                public setInverted(inv: boolean): void;
                public toString(): string;
                public clone(): org.bukkit.material.Stairs;
            }
        }
    }
}
