// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace RecipeChoice {
                // @ts-ignore
                 class MaterialChoice extends java.lang.Object implements org.bukkit.inventory.RecipeChoice {
                    // @ts-ignore
                    constructor(choice: org.bukkit.Material)
                    // @ts-ignore
                    constructor(choices: org.bukkit.Material)
                    /**
                     * Constructs a MaterialChoice with the current values of the specified
                     * tag.
                     */
                    // @ts-ignore
                    constructor(choices: org.bukkit.Tag)
                    // @ts-ignore
                    constructor(choices: java.util.List)
                    // @ts-ignore
                    public test(t: org.bukkit.inventory.ItemStack): boolean;
                    // @ts-ignore
                    public getItemStack(): org.bukkit.inventory.ItemStack;
                    // @ts-ignore
                    public getChoices(): java.util.List;
                    // @ts-ignore
                    public clone(): org.bukkit.inventory.RecipeChoice.MaterialChoice;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
