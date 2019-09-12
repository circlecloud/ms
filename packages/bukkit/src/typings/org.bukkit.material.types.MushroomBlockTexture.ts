declare namespace org {
    namespace bukkit {
        namespace material {
            namespace types {
                class MushroomBlockTexture {
                    public static ALL_PORES: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_NORTH_WEST: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_NORTH: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_NORTH_EAST: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_WEST: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_TOP: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_EAST: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_SOUTH_WEST: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_SOUTH: org.bukkit.material.types.MushroomBlockTexture;
                    public static CAP_SOUTH_EAST: org.bukkit.material.types.MushroomBlockTexture;
                    public static STEM_SIDES: org.bukkit.material.types.MushroomBlockTexture;
                    public static ALL_CAP: org.bukkit.material.types.MushroomBlockTexture;
                    public static ALL_STEM: org.bukkit.material.types.MushroomBlockTexture;
                    public static values(): org.bukkit.material.types.MushroomBlockTexture[];
                    public static valueOf(name: string): org.bukkit.material.types.MushroomBlockTexture;
                    /**
                     * Gets the associated data value representing this mushroom block face.
                     */
                    public getData(): number;
                    /**
                     * Gets the face that has cap texture.
                     */
                    public getCapFace(): org.bukkit.block.BlockFace;
                    /**
                     * Gets the MushroomBlockType with the given data value.
                     */
                    public static getByData(data: number): org.bukkit.material.types.MushroomBlockTexture;
                    /**
                     * Gets the MushroomBlockType with cap texture on the given block face.
                     */
                    public static getCapByFace(face: org.bukkit.block.BlockFace): org.bukkit.material.types.MushroomBlockTexture;
                }
            }
        }
    }
}
