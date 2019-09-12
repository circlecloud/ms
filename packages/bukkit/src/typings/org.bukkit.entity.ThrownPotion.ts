declare namespace org {
    namespace bukkit {
        namespace entity {
            class ThrownPotion {
                /**
                 * Returns the effects that are applied by this potion.
                 */
                public getEffects(): any[] /*java.util.Collection*/;
                /**
                 * Returns a copy of the ItemStack for this thrown potion.
                 * <p>
                 * Altering this copy will not alter the thrown potion directly. If you want
                 * to alter the thrown potion, you must use the {@link
                 * #setItem(ItemStack) setItemStack} method.
                 */
                public getItem(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the ItemStack for this thrown potion.
                 * <p>
                 * The ItemStack must be of type {@link org.bukkit.Material#SPLASH_POTION}
                 * or {@link org.bukkit.Material#LINGERING_POTION}, otherwise an exception
                 * is thrown.
                 */
                public setItem(item: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
