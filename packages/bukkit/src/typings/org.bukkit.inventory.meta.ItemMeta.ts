declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class ItemMeta {
                    /**
                     * Checks for existence of a display name.
                     */
                    public hasDisplayName(): boolean;
                    /**
                     * Gets the display name that is set.
                     * <p>
                     * Plugins should check that hasDisplayName() returns <code>true</code>
                     * before calling this method.
                     */
                    public getDisplayName(): string;
                    /**
                     * Sets the display name.
                     */
                    public setDisplayName(name: string): void;
                    /**
                     * Checks for existence of a localized name.
                     */
                    public hasLocalizedName(): boolean;
                    /**
                     * Gets the localized display name that is set.
                     * <p>
                     * Plugins should check that hasLocalizedName() returns <code>true</code>
                     * before calling this method.
                     */
                    public getLocalizedName(): string;
                    /**
                     * Sets the localized name.
                     */
                    public setLocalizedName(name: string): void;
                    /**
                     * Checks for existence of lore.
                     */
                    public hasLore(): boolean;
                    /**
                     * Gets the lore that is set.
                     * <p>
                     * Plugins should check if hasLore() returns <code>true</code> before
                     * calling this method.
                     */
                    public getLore(): any[] /*java.util.List*/;
                    /**
                     * Sets the lore for this item.
                     * Removes lore when given null.
                     */
                    public setLore(lore: any[] /*java.util.List*/): void;
                    /**
                     * Checks for existence of custom model data.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     */
                    public hasCustomModelData(): boolean;
                    /**
                     * Gets the custom model data that is set.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     * <p>
                     * Plugins should check that hasCustomModelData() returns <code>true</code>
                     * before calling this method.
                     */
                    public getCustomModelData(): number;
                    /**
                     * Sets the custom model data.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     */
                    public setCustomModelData(data: any): void;
                    /**
                     * Checks for the existence of any enchantments.
                     */
                    public hasEnchants(): boolean;
                    /**
                     * Checks for existence of the specified enchantment.
                     */
                    public hasEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks for the level of the specified enchantment.
                     */
                    public getEnchantLevel(ench: org.bukkit.enchantments.Enchantment): number;
                    /**
                     * Returns a copy the enchantments in this ItemMeta. <br>
                     * Returns an empty map if none.
                     */
                    public getEnchants(): Map<any, any> /*java.util.Map*/;
                    /**
                     * Adds the specified enchantment to this item meta.
                     */
                    public addEnchant(ench: org.bukkit.enchantments.Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
                    /**
                     * Removes the specified enchantment from this item meta.
                     */
                    public removeEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks if the specified enchantment conflicts with any enchantments in
                     * this ItemMeta.
                     */
                    public hasConflictingEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Set itemflags which should be ignored when rendering a ItemStack in the Client. This Method does silently ignore double set itemFlags.
                     */
                    public addItemFlags(itemFlags: org.bukkit.inventory.ItemFlag): void;
                    /**
                     * Remove specific set of itemFlags. This tells the Client it should render it again. This Method does silently ignore double removed itemFlags.
                     */
                    public removeItemFlags(itemFlags: org.bukkit.inventory.ItemFlag): void;
                    /**
                     * Get current set itemFlags. The collection returned is unmodifiable.
                     */
                    public getItemFlags(): any[] /*java.util.Set*/;
                    /**
                     * Check if the specified flag is present on this item.
                     */
                    public hasItemFlag(flag: org.bukkit.inventory.ItemFlag): boolean;
                    /**
                     * Return if the unbreakable tag is true. An unbreakable item will not lose
                     * durability.
                     */
                    public isUnbreakable(): boolean;
                    /**
                     * Sets the unbreakable tag. An unbreakable item will not lose durability.
                     */
                    public setUnbreakable(unbreakable: boolean): void;
                    /**
                     * Checks for the existence of any AttributeModifiers.
                     */
                    public hasAttributeModifiers(): boolean;
                    /**
                     * Return an immutable copy of all Attributes and
                     * their modifiers in this ItemMeta.<br>
                     * Returns null if none exist.
                     */
                    public getAttributeModifiers(): any;
                    /**
                     * Return an immutable copy of all {@link Attribute}s and their
                     * {@link AttributeModifier}s for a given {@link EquipmentSlot}.<br>
                     * Any {@link AttributeModifier} that does have have a given
                     * {@link EquipmentSlot} will be returned. This is because
                     * AttributeModifiers without a slot are active in any slot.<br>
                     * If there are no attributes set for the given slot, an empty map
                     * will be returned.
                     */
                    public getAttributeModifiers(slot: org.bukkit.inventory.EquipmentSlot): any;
                    /**
                     * Return an immutable copy of all {@link AttributeModifier}s
                     * for a given {@link Attribute}
                     */
                    public getAttributeModifiers(attribute: org.bukkit.attribute.Attribute): any[] /*java.util.Collection*/;
                    /**
                     * Add an Attribute and it's Modifier.
                     * AttributeModifiers can now support {@link EquipmentSlot}s.
                     * If not set, the {@link AttributeModifier} will be active in ALL slots.
                     * <br>
                     * Two {@link AttributeModifier}s that have the same {@link java.util.UUID}
                     * cannot exist on the same Attribute.
                     */
                    public addAttributeModifier(attribute: org.bukkit.attribute.Attribute, modifier: org.bukkit.attribute.AttributeModifier): boolean;
                    /**
                     * Set all {@link Attribute}s and their {@link AttributeModifier}s.
                     * To clear all currently set Attributes and AttributeModifiers use
                     * null or an empty Multimap.
                     * If not null nor empty, this will filter all entries that are not-null
                     * and add them to the ItemStack.
                     */
                    public setAttributeModifiers(attributeModifiers: any): void;
                    /**
                     * Remove all {@link AttributeModifier}s associated with the given
                     * {@link Attribute}.
                     * This will return false if nothing was removed.
                     */
                    public removeAttributeModifier(attribute: org.bukkit.attribute.Attribute): boolean;
                    /**
                     * Remove all {@link Attribute}s and {@link AttributeModifier}s for a
                     * given {@link EquipmentSlot}.<br>
                     * If the given {@link EquipmentSlot} is null, this will remove all
                     * {@link AttributeModifier}s that do not have an EquipmentSlot set.
                     */
                    public removeAttributeModifier(slot: org.bukkit.inventory.EquipmentSlot): boolean;
                    /**
                     * Remove a specific {@link Attribute} and {@link AttributeModifier}.
                     * AttributeModifiers are matched according to their {@link java.util.UUID}.
                     */
                    public removeAttributeModifier(attribute: org.bukkit.attribute.Attribute, modifier: org.bukkit.attribute.AttributeModifier): boolean;
                    /**
                     * Returns a public custom tag container capable of storing tags on the
                     * item.
                     * Those tags will be sent to the client with all of their content, so the
                     * client is capable of reading them. This will result in the player seeing
                     * a NBT Tag notification on the item.
                     * These tags can also be modified by the client once in creative mode
                     */
                    public getCustomTagContainer(): org.bukkit.inventory.meta.tags.CustomItemTagContainer;
                    /**
                     * Internal use only! Do not use under any circumstances!
                     */
                    public setVersion(version: number): void;
                    public clone(): org.bukkit.inventory.meta.ItemMeta;
                }
            }
        }
    }
}
