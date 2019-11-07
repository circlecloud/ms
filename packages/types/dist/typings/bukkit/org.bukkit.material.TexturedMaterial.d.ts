declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            abstract class TexturedMaterial extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor(m: org.bukkit.Material)
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number)
                /**
                 * Retrieve a list of possible textures. The first element of the list
                 * will be used as a default.
                 */
                // @ts-ignore
                public abstract getTextures(): java.util.List;
                /**
                 * Gets the current Material this block is made of
                 */
                // @ts-ignore
                public getMaterial(): org.bukkit.Material;
                /**
                 * Sets the material this block is made of
                 */
                // @ts-ignore
                public setMaterial(material: org.bukkit.Material): void;
                /**
                 * Get material index from data
                 */
                // @ts-ignore
                protected getTextureIndex(): number;
                /**
                 * Set material index
                 */
                // @ts-ignore
                protected setTextureIndex(idx: number): void;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public clone(): org.bukkit.material.TexturedMaterial;
            }
        }
    }
}
