declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace RecipeChoice {
                // @ts-ignore
                 class MaterialChoice implements org.bukkit.inventory.RecipeChoice {
                    constructor(choice: org.bukkit.Material)
                    constructor(choices: org.bukkit.Material)
                    /**
                     * Constructs a MaterialChoice with the current values of the specified
                     * tag.
                     */
                    constructor(choices: org.bukkit.Tag)
                    constructor(choices: any[] /*java.util.List*/)
                    public test(t: org.bukkit.inventory.ItemStack): boolean;
                    public getItemStack(): org.bukkit.inventory.ItemStack;
                    public getChoices(): any[] /*java.util.List*/;
                    public clone(): org.bukkit.inventory.RecipeChoice.MaterialChoice;
                    public hashCode(): number;
                    public equals(obj: any): boolean;
                    public toString(): string;
                }
            }
        }
    }
}
