declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
            interface EntityEquipment {
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their main hand.
                 */
                 getItemInMainHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding in their main hand.
                 */
                 setItemInMainHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their off hand.
                 */
                 getItemInOffHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding in their off hand.
                 */
                 setItemInOffHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the entity is currently holding
                 */
                 getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding
                 */
                 setItemInHand(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the helmet currently being worn by the entity
                 */
                 getHelmet(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the helmet worn by the entity
                 */
                 setHelmet(helmet: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the chest plate currently being worn by the entity
                 */
                 getChestplate(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the chest plate worn by the entity
                 */
                 setChestplate(chestplate: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the leggings currently being worn by the entity
                 */
                 getLeggings(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the leggings worn by the entity
                 */
                 setLeggings(leggings: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the boots currently being worn by the entity
                 */
                 getBoots(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the boots worn by the entity
                 */
                 setBoots(boots: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of all worn armor
                 */
                 getArmorContents(): org.bukkit.inventory.ItemStack[];
                /**
                 * Sets the entities armor to the provided array of ItemStacks
                 */
                 setArmorContents(items: org.bukkit.inventory.ItemStack): void;
                /**
                 * Clears the entity of all armor and held items
                 */
                 clear(): void;
                 getItemInHandDropChance(): number;
                 setItemInHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the main hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 getItemInMainHandDropChance(): number;
                /**
                 * Sets the chance of the item this creature is currently holding in their
                 * main hand being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 setItemInMainHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 getItemInOffHandDropChance(): number;
                /**
                 * Sets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 setItemInOffHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 getHelmetDropChance(): number;
                /**
                 * Sets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 setHelmetDropChance(chance: number): void;
                /**
                 * Gets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 getChestplateDropChance(): number;
                /**
                 * Sets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 setChestplateDropChance(chance: number): void;
                /**
                 * Gets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 getLeggingsDropChance(): number;
                /**
                 * Sets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 setLeggingsDropChance(chance: number): void;
                /**
                 * Gets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 getBootsDropChance(): number;
                /**
                 * Sets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                 setBootsDropChance(chance: number): void;
                /**
                 * Get the entity this EntityEquipment belongs to
                 */
                 getHolder(): org.bukkit.entity.Entity;
            }
        }
    }
}
