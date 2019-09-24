declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ThrownPotion extends org.bukkit.entity.Projectile {
                /**
                 * Returns the effects that are applied by this potion.
                 */
                 getEffects(): any[] /*java.util.Collection*/;
                /**
                 * Returns a copy of the ItemStack for this thrown potion.
                 * <p>
                 * Altering this copy will not alter the thrown potion directly. If you want
                 * to alter the thrown potion, you must use the {@link
                 * #setItem(ItemStack) setItemStack} method.
                 */
                 getItem(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the ItemStack for this thrown potion.
                 * <p>
                 * The ItemStack must be of type {@link org.bukkit.Material#SPLASH_POTION}
                 * or {@link org.bukkit.Material#LINGERING_POTION}, otherwise an exception
                 * is thrown.
                 */
                 setItem(item: org.bukkit.inventory.ItemStack): void;
            }
        }
    }
}
