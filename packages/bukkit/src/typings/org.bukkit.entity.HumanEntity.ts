declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface HumanEntity extends org.bukkit.entity.LivingEntity, org.bukkit.entity.AnimalTamer, org.bukkit.inventory.InventoryHolder {
                /**
                 * Returns the name of this player
                 */
                 getName(): string;
                /**
                 * Get the player's inventory.
                 */
                 getInventory(): org.bukkit.inventory.PlayerInventory;
                /**
                 * Get the player's EnderChest inventory
                 */
                 getEnderChest(): org.bukkit.inventory.Inventory;
                /**
                 * Gets the player's selected main hand
                 */
                 getMainHand(): org.bukkit.inventory.MainHand;
                /**
                 * If the player currently has an inventory window open, this method will
                 * set a property of that window, such as the state of a progress bar.
                 */
                 setWindowProperty(prop: org.bukkit.inventory.InventoryView.Property, value: number): boolean;
                /**
                 * Gets the inventory view the player is currently viewing. If they do not
                 * have an inventory window open, it returns their internal crafting view.
                 */
                 getOpenInventory(): org.bukkit.inventory.InventoryView;
                /**
                 * Opens an inventory window with the specified inventory on the top and
                 * the player's inventory on the bottom.
                 */
                 openInventory(inventory: org.bukkit.inventory.Inventory): org.bukkit.inventory.InventoryView;
                /**
                 * Opens an empty workbench inventory window with the player's inventory
                 * on the bottom.
                 */
                 openWorkbench(location: org.bukkit.Location, force: boolean): org.bukkit.inventory.InventoryView;
                /**
                 * Opens an empty enchanting inventory window with the player's inventory
                 * on the bottom.
                 */
                 openEnchanting(location: org.bukkit.Location, force: boolean): org.bukkit.inventory.InventoryView;
                /**
                 * Opens an inventory window to the specified inventory view.
                 */
                 openInventory(inventory: org.bukkit.inventory.InventoryView): void;
                /**
                 * Starts a trade between the player and the villager.
                 * Note that only one player may trade with a villager at once. You must use
                 * the force parameter for this.
                 */
                 openMerchant(trader: org.bukkit.entity.Villager, force: boolean): org.bukkit.inventory.InventoryView;
                /**
                 * Starts a trade between the player and the merchant.
                 * Note that only one player may trade with a merchant at once. You must use
                 * the force parameter for this.
                 */
                 openMerchant(merchant: org.bukkit.inventory.Merchant, force: boolean): org.bukkit.inventory.InventoryView;
                /**
                 * Force-closes the currently open inventory view for this player, if any.
                 */
                 closeInventory(): void;
                /**
                 * Returns the ItemStack currently in your hand, can be empty.
                 */
                 getItemInHand(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item to the given ItemStack, this will replace whatever the
                 * user was holding.
                 */
                 setItemInHand(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Returns the ItemStack currently on your cursor, can be empty. Will
                 * always be empty if the player currently has no open window.
                 */
                 getItemOnCursor(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the item to the given ItemStack, this will replace whatever the
                 * user was moving. Will always be empty if the player currently has no
                 * open window.
                 */
                 setItemOnCursor(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Check whether a cooldown is active on the specified material.
                 */
                 hasCooldown(material: org.bukkit.Material): boolean;
                /**
                 * Get the cooldown time in ticks remaining for the specified material.
                 */
                 getCooldown(material: org.bukkit.Material): number;
                /**
                 * Set a cooldown on the specified material for a certain amount of ticks.
                 * ticks. 0 ticks will result in the removal of the cooldown.
                 * <p>
                 * Cooldowns are used by the server for items such as ender pearls and
                 * shields to prevent them from being used repeatedly.
                 * <p>
                 * Note that cooldowns will not by themselves stop an item from being used
                 * for attacking.
                 */
                 setCooldown(material: org.bukkit.Material, ticks: number): void;
                /**
                 * Get the sleep ticks of the player. This value may be capped.
                 */
                 getSleepTicks(): number;
                /**
                 * Gets the Location where the player will spawn at their bed, null if
                 * they have not slept in one or their current bed spawn is invalid.
                 */
                 getBedSpawnLocation(): org.bukkit.Location;
                /**
                 * Sets the Location where the player will spawn at their bed.
                 */
                 setBedSpawnLocation(location: org.bukkit.Location): void;
                /**
                 * Sets the Location where the player will spawn at their bed.
                 */
                 setBedSpawnLocation(location: org.bukkit.Location, force: boolean): void;
                /**
                 * Attempts to make the entity sleep at the given location.
                 * <br>
                 * The location must be in the current world and have a bed placed at the
                 * location. The game may also enforce other requirements such as proximity
                 * to bed, monsters, and dimension type if force is not set.
                 */
                 sleep(location: org.bukkit.Location, force: boolean): boolean;
                /**
                 * Causes the player to wakeup if they are currently sleeping.
                 */
                 wakeup(setSpawnLocation: boolean): void;
                /**
                 * Gets the location of the bed the player is currently sleeping in
                 */
                 getBedLocation(): org.bukkit.Location;
                /**
                 * Gets this human's current {@link GameMode}
                 */
                 getGameMode(): org.bukkit.GameMode;
                /**
                 * Sets this human's current {@link GameMode}
                 */
                 setGameMode(mode: org.bukkit.GameMode): void;
                /**
                 * Check if the player is currently blocking (ie with a shield).
                 */
                 isBlocking(): boolean;
                /**
                 * Check if the player currently has their hand raised (ie about to begin
                 * blocking).
                 */
                 isHandRaised(): boolean;
                /**
                 * Get the total amount of experience required for the player to level
                 */
                 getExpToLevel(): number;
                /**
                 * Discover a recipe for this player such that it has not already been
                 * discovered. This method will add the key's associated recipe to the
                 * player's recipe book.
                 */
                 discoverRecipe(recipe: org.bukkit.NamespacedKey): boolean;
                /**
                 * Discover a collection of recipes for this player such that they have not
                 * already been discovered. This method will add the keys' associated
                 * recipes to the player's recipe book. If a recipe in the provided
                 * collection has already been discovered, it will be silently ignored.
                 */
                 discoverRecipes(recipes: any[] /*java.util.Collection*/): number;
                /**
                 * Undiscover a recipe for this player such that it has already been
                 * discovered. This method will remove the key's associated recipe from the
                 * player's recipe book.
                 */
                 undiscoverRecipe(recipe: org.bukkit.NamespacedKey): boolean;
                /**
                 * Undiscover a collection of recipes for this player such that they have
                 * already been discovered. This method will remove the keys' associated
                 * recipes from the player's recipe book. If a recipe in the provided
                 * collection has not yet been discovered, it will be silently ignored.
                 */
                 undiscoverRecipes(recipes: any[] /*java.util.Collection*/): number;
                /**
                 * Gets the entity currently perched on the left shoulder or null if no
                 * entity.
                 * <br>
                 * The returned entity will not be spawned within the world, so most
                 * operations are invalid unless the entity is first spawned in.
                 */
                 getShoulderEntityLeft(): org.bukkit.entity.Entity;
                /**
                 * Sets the entity currently perched on the left shoulder, or null to
                 * remove. This method will remove the entity from the world.
                 * <br>
                 * Note that only a copy of the entity will be set to display on the
                 * shoulder.
                 * <br>
                 * Also note that the client will currently only render {@link Parrot}
                 * entities.
                 */
                 setShoulderEntityLeft(entity: org.bukkit.entity.Entity): void;
                /**
                 * Gets the entity currently perched on the right shoulder or null if no
                 * entity.
                 * <br>
                 * The returned entity will not be spawned within the world, so most
                 * operations are invalid unless the entity is first spawned in.
                 */
                 getShoulderEntityRight(): org.bukkit.entity.Entity;
                /**
                 * Sets the entity currently perched on the right shoulder, or null to
                 * remove. This method will remove the entity from the world.
                 * <br>
                 * Note that only a copy of the entity will be set to display on the
                 * shoulder.
                 * <br>
                 * Also note that the client will currently only render {@link Parrot}
                 * entities.
                 */
                 setShoulderEntityRight(entity: org.bukkit.entity.Entity): void;
            }
        }
    }
}
