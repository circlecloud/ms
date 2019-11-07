// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace RecipeChoice {
                // @ts-ignore
                 class ExactChoice extends java.lang.Object implements org.bukkit.inventory.RecipeChoice {
                    // @ts-ignore
                    constructor(stack: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    constructor(stacks: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    constructor(choices: java.util.List)
                    // @ts-ignore
                    public getItemStack(): org.bukkit.inventory.ItemStack;
                    // @ts-ignore
                    public getChoices(): java.util.List;
                    // @ts-ignore
                    public clone(): org.bukkit.inventory.RecipeChoice.ExactChoice;
                    // @ts-ignore
                    public test(t: org.bukkit.inventory.ItemStack): boolean;
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
