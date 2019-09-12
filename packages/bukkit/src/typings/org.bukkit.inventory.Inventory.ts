declare namespace org {
    namespace bukkit {
        namespace inventory {
            class Inventory {
                /**
                 * Returns the size of the inventory
                 */
                public getSize(): number;
                /**
                 * Returns the maximum stack size for an ItemStack in this inventory.
                 */
                public getMaxStackSize(): number;
                /**
                 * This method allows you to change the maximum stack size for an
                 * inventory.
                 * <p>
                 * <b>Caveats:</b>
                 * <ul>
                 * <li>Not all inventories respect this value.
                 * <li>Stacks larger than 127 may be clipped when the world is saved.
                 * <li>This value is not guaranteed to be preserved; be sure to set it
                 * before every time you want to set a slot over the max stack size.
                 * <li>Stacks larger than the default max size for this type of inventory
                 * may not display correctly in the client.
                 * </ul>
                 */
                public setMaxStackSize(size: number): void;
                /**
                 * Returns the ItemStack found in the slot at the given index
                 */
                public getItem(index: number): org.bukkit.inventory.ItemStack;
                /**
                 * Stores the ItemStack at the given index of the inventory.
                 */
                public setItem(index: number, item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Stores the given ItemStacks in the inventory. This will try to fill
                 * existing stacks and empty slots as well as it can.
                 * <p>
                 * The returned HashMap contains what it couldn't store, where the key is
                 * the index of the parameter, and the value is the ItemStack at that
                 * index of the varargs parameter. If all items are stored, it will return
                 * an empty HashMap.
                 * <p>
                 * If you pass in ItemStacks which exceed the maximum stack size for the
                 * Material, first they will be added to partial stacks where
                 * Material.getMaxStackSize() is not exceeded, up to
                 * Material.getMaxStackSize(). When there are no partial stacks left
                 * stacks will be split on Inventory.getMaxStackSize() allowing you to
                 * exceed the maximum stack size for that material.
                 * <p>
                 * It is known that in some implementations this method will also set
                 * the inputted argument amount to the number of that item not placed in
                 * slots.
                 */
                public addItem(items: org.bukkit.inventory.ItemStack): any;
                /**
                 * Removes the given ItemStacks from the inventory.
                 * <p>
                 * It will try to remove 'as much as possible' from the types and amounts
                 * you give as arguments.
                 * <p>
                 * The returned HashMap contains what it couldn't remove, where the key is
                 * the index of the parameter, and the value is the ItemStack at that
                 * index of the varargs parameter. If all the given ItemStacks are
                 * removed, it will return an empty HashMap.
                 * <p>
                 * It is known that in some implementations this method will also set the
                 * inputted argument amount to the number of that item not removed from
                 * slots.
                 */
                public removeItem(items: org.bukkit.inventory.ItemStack): any;
                /**
                 * Returns all ItemStacks from the inventory
                 */
                public getContents(): org.bukkit.inventory.ItemStack[];
                /**
                 * Completely replaces the inventory's contents. Removes all existing
                 * contents and replaces it with the ItemStacks given in the array.
                 */
                public setContents(items: org.bukkit.inventory.ItemStack): void;
                /**
                 * Return the contents from the section of the inventory where items can
                 * reasonably be expected to be stored. In most cases this will represent
                 * the entire inventory, but in some cases it may exclude armor or result
                 * slots.
                 * <br>
                 * It is these contents which will be used for add / contains / remove
                 * methods which look for a specific stack.
                 */
                public getStorageContents(): org.bukkit.inventory.ItemStack[];
                /**
                 * Put the given ItemStacks into the storage slots
                 */
                public setStorageContents(items: org.bukkit.inventory.ItemStack): void;
                /**
                 * Checks if the inventory contains any ItemStacks with the given
                 * material.
                 */
                public contains(material: org.bukkit.Material): boolean;
                /**
                 * Checks if the inventory contains any ItemStacks matching the given
                 * ItemStack.
                 * <p>
                 * This will only return true if both the type and the amount of the stack
                 * match.
                 */
                public contains(item: org.bukkit.inventory.ItemStack): boolean;
                /**
                 * Checks if the inventory contains any ItemStacks with the given
                 * material, adding to at least the minimum amount specified.
                 */
                public contains(material: org.bukkit.Material, amount: number): boolean;
                /**
                 * Checks if the inventory contains at least the minimum amount specified
                 * of exactly matching ItemStacks.
                 * <p>
                 * An ItemStack only counts if both the type and the amount of the stack
                 * match.
                 */
                public contains(item: org.bukkit.inventory.ItemStack, amount: number): boolean;
                /**
                 * Checks if the inventory contains ItemStacks matching the given
                 * ItemStack whose amounts sum to at least the minimum amount specified.
                 */
                public containsAtLeast(item: org.bukkit.inventory.ItemStack, amount: number): boolean;
                /**
                 * Returns a HashMap with all slots and ItemStacks in the inventory with
                 * the given Material.
                 * <p>
                 * The HashMap contains entries where, the key is the slot index, and the
                 * value is the ItemStack in that slot. If no matching ItemStack with the
                 * given Material is found, an empty map is returned.
                 */
                public all(material: org.bukkit.Material): any;
                /**
                 * Finds all slots in the inventory containing any ItemStacks with the
                 * given ItemStack. This will only match slots if both the type and the
                 * amount of the stack match
                 * <p>
                 * The HashMap contains entries where, the key is the slot index, and the
                 * value is the ItemStack in that slot. If no matching ItemStack with the
                 * given Material is found, an empty map is returned.
                 */
                public all(item: org.bukkit.inventory.ItemStack): any;
                /**
                 * Finds the first slot in the inventory containing an ItemStack with the
                 * given material
                 */
                public first(material: org.bukkit.Material): number;
                /**
                 * Returns the first slot in the inventory containing an ItemStack with
                 * the given stack. This will only match a slot if both the type and the
                 * amount of the stack match
                 */
                public first(item: org.bukkit.inventory.ItemStack): number;
                /**
                 * Returns the first empty Slot.
                 */
                public firstEmpty(): number;
                /**
                 * Removes all stacks in the inventory matching the given material.
                 */
                public remove(material: org.bukkit.Material): void;
                /**
                 * Removes all stacks in the inventory matching the given stack.
                 * <p>
                 * This will only match a slot if both the type and the amount of the
                 * stack match
                 */
                public remove(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Clears out a particular slot in the index.
                 */
                public clear(index: number): void;
                /**
                 * Clears out the whole Inventory.
                 */
                public clear(): void;
                /**
                 * Gets a list of players viewing the inventory. Note that a player is
                 * considered to be viewing their own inventory and internal crafting
                 * screen even when said inventory is not open. They will normally be
                 * considered to be viewing their inventory even when they have a
                 * different inventory screen open, but it's possible for customized
                 * inventory screens to exclude the viewer's inventory, so this should
                 * never be assumed to be non-empty.
                 */
                public getViewers(): any[] /*java.util.List*/;
                /**
                 * Returns what type of inventory this is.
                 */
                public getType(): org.bukkit.event.inventory.InventoryType;
                /**
                 * Gets the block or entity belonging to the open inventory
                 */
                public getHolder(): org.bukkit.inventory.InventoryHolder;
                public iterator(): any;
                /**
                 * Returns an iterator starting at the given index. If the index is
                 * positive, then the first call to next() will return the item at that
                 * index; if it is negative, the first call to previous will return the
                 * item at index (getSize() + index).
                 */
                public iterator(index: number): any;
                /**
                 * Get the location of the block or entity which corresponds to this inventory. May return null if this container
                 * was custom created or is a virtual / subcontainer.
                 */
                public getLocation(): org.bukkit.Location;
            }
        }
    }
}
