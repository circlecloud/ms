declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
             class Mushroom {
                /**
                 * Constructs a brown/red mushroom block with all sides set to pores.
                 */
                constructor(shroom: org.bukkit.Material)
                /**
                 * Constructs a brown/red mushroom cap block with the specified face or
                 * faces set to cap texture.
                 * Setting any of the four sides will also set the top to cap.
                 * To set two side faces at once use e.g. north-west.
                 * Specify self to set all six faces at once.
                 */
                constructor(shroom: org.bukkit.Material, capFace: org.bukkit.block.BlockFace)
                /**
                 * Constructs a brown/red mushroom block with the specified textures.
                 */
                constructor(shroom: org.bukkit.Material, texture: org.bukkit.material.types.MushroomBlockTexture)
                constructor(shroom: org.bukkit.Material, data: number)
                public isStem(): boolean;
                /**
                 * Sets this to be a mushroom stem.
                 */
                public setStem(): void;
                /**
                 * Gets the mushroom texture of this block.
                 */
                public getBlockTexture(): org.bukkit.material.types.MushroomBlockTexture;
                /**
                 * Sets the mushroom texture of this block.
                 */
                public setBlockTexture(texture: org.bukkit.material.types.MushroomBlockTexture): void;
                /**
                 * Checks whether a face of the block is painted with cap texture.
                 */
                public isFacePainted(face: org.bukkit.block.BlockFace): boolean;
                /**
                 * Set a face of the block to be painted or not. Note that due to the
                 * nature of how the data is stored, setting a face painted or not is not
                 * guaranteed to leave the other faces unchanged.
                 */
                public setFacePainted(face: org.bukkit.block.BlockFace, painted: boolean): void;
                public getPaintedFaces(): any[] /*java.util.Set*/;
                public toString(): string;
                public clone(): org.bukkit.material.Mushroom;
            }
        }
    }
}
