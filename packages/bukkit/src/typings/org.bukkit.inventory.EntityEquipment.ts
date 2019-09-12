declare namespace org {
    namespace bukkit {
        namespace inventory {
            class EntityEquipment {
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their main hand.
                 */
                public getItemInMainHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding in their main hand.
                 */
                public setItemInMainHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their off hand.
                 */
                public getItemInOffHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding in their off hand.
                 */
                public setItemInOffHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the item the entity is currently holding
                 */
                public getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item the entity is holding
                 */
                public setItemInHand(stack: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the helmet currently being worn by the entity
                 */
                public getHelmet(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the helmet worn by the entity
                 */
                public setHelmet(helmet: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the chest plate currently being worn by the entity
                 */
                public getChestplate(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the chest plate worn by the entity
                 */
                public setChestplate(chestplate: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the leggings currently being worn by the entity
                 */
                public getLeggings(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the leggings worn by the entity
                 */
                public setLeggings(leggings: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of the boots currently being worn by the entity
                 */
                public getBoots(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the boots worn by the entity
                 */
                public setBoots(boots: org.bukkit.inventory.ItemStack): void;
                /**
                 * Gets a copy of all worn armor
                 */
                public getArmorContents(): org.bukkit.inventory.ItemStack[];
                /**
                 * Sets the entities armor to the provided array of ItemStacks
                 */
                public setArmorContents(items: org.bukkit.inventory.ItemStack): void;
                /**
                 * Clears the entity of all armor and held items
                 */
                public clear(): void;
                public getItemInHandDropChance(): number;
                public setItemInHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the main hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public getItemInMainHandDropChance(): number;
                /**
                 * Sets the chance of the item this creature is currently holding in their
                 * main hand being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public setItemInMainHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public getItemInOffHandDropChance(): number;
                /**
                 * Sets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public setItemInOffHandDropChance(chance: number): void;
                /**
                 * Gets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public getHelmetDropChance(): number;
                /**
                 * Sets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public setHelmetDropChance(chance: number): void;
                /**
                 * Gets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public getChestplateDropChance(): number;
                /**
                 * Sets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public setChestplateDropChance(chance: number): void;
                /**
                 * Gets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public getLeggingsDropChance(): number;
                /**
                 * Sets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public setLeggingsDropChance(chance: number): void;
                /**
                 * Gets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public getBootsDropChance(): number;
                /**
                 * Sets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 */
                public setBootsDropChance(chance: number): void;
                /**
                 * Get the entity this EntityEquipment belongs to
                 */
                public getHolder(): org.bukkit.entity.Entity;
            }
        }
    }
}
