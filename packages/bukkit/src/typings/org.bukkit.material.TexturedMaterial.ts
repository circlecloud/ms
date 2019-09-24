declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            abstract class TexturedMaterial extends org.bukkit.material.MaterialData {
                constructor(m: org.bukkit.Material)
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Retrieve a list of possible textures. The first element of the list
                 * will be used as a default.
                 */
                public abstract getTextures(): any[] /*java.util.List*/;
                /**
                 * Gets the current Material this block is made of
                 */
                public getMaterial(): org.bukkit.Material;
                /**
                 * Sets the material this block is made of
                 */
                public setMaterial(material: org.bukkit.Material): void;
                /**
                 * Get material index from data
                 */
                protected getTextureIndex(): number;
                /**
                 * Set material index
                 */
                protected setTextureIndex(idx: number): void;
                public toString(): string;
                public clone(): org.bukkit.material.TexturedMaterial;
            }
        }
    }
}
