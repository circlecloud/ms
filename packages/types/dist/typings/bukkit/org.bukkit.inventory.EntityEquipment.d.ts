declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface EntityEquipment {
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their main hand.
                 */
                // @ts-ignore
                 getItemInMainHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding in their main hand.
                 */
                // @ts-ignore
                 setItemInMainHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their off hand.
                 */
                // @ts-ignore
                 getItemInOffHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding in their off hand.
                 */
                // @ts-ignore
                 setItemInOffHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the entity is currently holding
                 */
                // @ts-ignore
                 getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding
                 */
                // @ts-ignore
                 setItemInHand(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the helmet currently being worn by the entity
                 */
                // @ts-ignore
                 getHelmet(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the helmet worn by the entity
                 */
                // @ts-ignore
                 setHelmet(helmet: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the chest plate currently being worn by the entity
                 */
                // @ts-ignore
                 getChestplate(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the chest plate worn by the entity
                 */
                // @ts-ignore
                 setChestplate(chestplate: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the leggings currently being worn by the entity
                 */
                // @ts-ignore
                 getLeggings(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the leggings worn by the entity
                 */
                // @ts-ignore
                 setLeggings(leggings: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the boots currently being worn by the entity
                 */
                // @ts-ignore
                 getBoots(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the boots worn by the entity
                 */
                // @ts-ignore
                 setBoots(boots: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of all worn armor
                 */
                // @ts-ignore
                 getArmorContents(): org.bukkit.inventory.ItemStack[];
                /**
                 * Sets the entities armor to the provided array of ItemStacks
                 */
                // @ts-ignore
                 setArmorContents(items: org.bukkit.inventory.ItemStack): void;
                /**
                 * Clears the entity of all armor and held items
                 */
                // @ts-ignore
                 clear(): void;
                // @ts-ignore
                 getItemInHandDropChance(): number;
                // @ts-ignore
                 setItemInHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the main hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 getItemInMainHandDropChance(): number;
                /**
                 * Sets the chance of the item this creature is currently holding in their
                 * main hand being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 setItemInMainHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 getItemInOffHandDropChance(): number;
                /**
                 * Sets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 setItemInOffHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 getHelmetDropChance(): number;
                /**
                 * Sets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 setHelmetDropChance(chance: number): void;
                /**
                 * Gets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 getChestplateDropChance(): number;
                /**
                 * Sets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 setChestplateDropChance(chance: number): void;
                /**
                 * Gets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 getLeggingsDropChance(): number;
                /**
                 * Sets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 setLeggingsDropChance(chance: number): void;
                /**
                 * Gets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 getBootsDropChance(): number;
                /**
                 * Sets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                // @ts-ignore
                 setBootsDropChance(chance: number): void;
                /**
                 * Get the entity this EntityEquipment belongs to
                 */
                // @ts-ignore
                 getHolder(): org.bukkit.entity.Entity;
            }
        }
    }
}
