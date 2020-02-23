declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                 class CraftingDataPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public static CRAFTING_TAG_CRAFTING_TABLE: string;
                    // @ts-ignore
                    public static CRAFTING_TAG_CARTOGRAPHY_TABLE: string;
                    // @ts-ignore
                    public static CRAFTING_TAG_STONECUTTER: string;
                    // @ts-ignore
                    public static CRAFTING_TAG_FURNACE: string;
                    // @ts-ignore
                    public static CRAFTING_TAG_CAMPFIRE: string;
                    // @ts-ignore
                    public static CRAFTING_TAG_BLAST_FURNACE: string;
                    // @ts-ignore
                    public static CRAFTING_TAG_SMOKER: string;
                    // @ts-ignore
                    public cleanRecipes: boolean;
                    // @ts-ignore
                    public addShapelessRecipe(recipe: cn.nukkit.inventory.ShapelessRecipe): void;
                    // @ts-ignore
                    public addShapedRecipe(recipe: cn.nukkit.inventory.ShapedRecipe): void;
                    // @ts-ignore
                    public addFurnaceRecipe(recipe: cn.nukkit.inventory.FurnaceRecipe): void;
                    // @ts-ignore
                    public addBrewingRecipe(recipe: cn.nukkit.inventory.BrewingRecipe): void;
                    // @ts-ignore
                    public addContainerRecipe(recipe: cn.nukkit.inventory.ContainerRecipe): void;
                    // @ts-ignore
                    public clean(): cn.nukkit.network.protocol.DataPacket;
                    // @ts-ignore
                    public decode(): void;
                    // @ts-ignore
                    public encode(): void;
                    // @ts-ignore
                    public pid(): number;
                }
            }
        }
    }
}
