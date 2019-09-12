declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace RecipeChoice {
                class ExactChoice {
                    constructor(stack: org.bukkit.inventory.ItemStack)
                    constructor(stacks: org.bukkit.inventory.ItemStack)
                    constructor(choices: any[] /*java.util.List*/)
                    public getItemStack(): org.bukkit.inventory.ItemStack;
                    public getChoices(): any[] /*java.util.List*/;
                    public clone(): org.bukkit.inventory.RecipeChoice.ExactChoice;
                    public test(t: org.bukkit.inventory.ItemStack): boolean;
                    public hashCode(): number;
                    public equals(obj: any): boolean;
                    public toString(): string;
                }
            }
        }
    }
}
