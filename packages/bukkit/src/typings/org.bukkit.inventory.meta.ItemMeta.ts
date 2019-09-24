declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface ItemMeta extends org.bukkit.configuration.serialization.ConfigurationSerializable, org.bukkit.persistence.PersistentDataHolder {
                    /**
                     * Checks for existence of a display name.
                     */
                     hasDisplayName(): boolean;
                    /**
                     * Gets the display name that is set.
                     * <p>
                     * Plugins should check that hasDisplayName() returns <code>true</code>
                     * before calling this method.
                     */
                     getDisplayName(): string;
                    /**
                     * Sets the display name.
                     */
                     setDisplayName(name: string): void;
                    /**
                     * Checks for existence of a localized name.
                     */
                     hasLocalizedName(): boolean;
                    /**
                     * Gets the localized display name that is set.
                     * <p>
                     * Plugins should check that hasLocalizedName() returns <code>true</code>
                     * before calling this method.
                     */
                     getLocalizedName(): string;
                    /**
                     * Sets the localized name.
                     */
                     setLocalizedName(name: string): void;
                    /**
                     * Checks for existence of lore.
                     */
                     hasLore(): boolean;
                    /**
                     * Gets the lore that is set.
                     * <p>
                     * Plugins should check if hasLore() returns <code>true</code> before
                     * calling this method.
                     */
                     getLore(): any[] /*java.util.List*/;
                    /**
                     * Sets the lore for this item.
                     * Removes lore when given null.
                     */
                     setLore(lore: any[] /*java.util.List*/): void;
                    /**
                     * Checks for existence of custom model data.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     */
                     hasCustomModelData(): boolean;
                    /**
                     * Gets the custom model data that is set.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     * <p>
                     * Plugins should check that hasCustomModelData() returns <code>true</code>
                     * before calling this method.
                     */
                     getCustomModelData(): number;
                    /**
                     * Sets the custom model data.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     */
                     setCustomModelData(data: any): void;
                    /**
                     * Checks for the existence of any enchantments.
                     */
                     hasEnchants(): boolean;
                    /**
                     * Checks for existence of the specified enchantment.
                     */
                     hasEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks for the level of the specified enchantment.
                     */
                     getEnchantLevel(ench: org.bukkit.enchantments.Enchantment): number;
                    /**
                     * Returns a copy the enchantments in this ItemMeta. <br>
                     * Returns an empty map if none.
                     */
                     getEnchants(): Map<any, any> /*java.util.Map*/;
                    /**
                     * Adds the specified enchantment to this item meta.
                     */
                     addEnchant(ench: org.bukkit.enchantments.Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
                    /**
                     * Removes the specified enchantment from this item meta.
                     */
                     removeEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Checks if the specified enchantment conflicts with any enchantments in
                     * this ItemMeta.
                     */
                     hasConflictingEnchant(ench: org.bukkit.enchantments.Enchantment): boolean;
                    /**
                     * Set itemflags which should be ignored when rendering a ItemStack in the Client. This Method does silently ignore double set itemFlags.
                     */
                     addItemFlags(itemFlags: org.bukkit.inventory.ItemFlag): void;
                    /**
                     * Remove specific set of itemFlags. This tells the Client it should render it again. This Method does silently ignore double removed itemFlags.
                     */
                     removeItemFlags(itemFlags: org.bukkit.inventory.ItemFlag): void;
                    /**
                     * Get current set itemFlags. The collection returned is unmodifiable.
                     */
                     getItemFlags(): any[] /*java.util.Set*/;
                    /**
                     * Check if the specified flag is present on this item.
                     */
                     hasItemFlag(flag: org.bukkit.inventory.ItemFlag): boolean;
                    /**
                     * Return if the unbreakable tag is true. An unbreakable item will not lose
                     * durability.
                     */
                     isUnbreakable(): boolean;
                    /**
                     * Sets the unbreakable tag. An unbreakable item will not lose durability.
                     */
                     setUnbreakable(unbreakable: boolean): void;
                    /**
                     * Checks for the existence of any AttributeModifiers.
                     */
                     hasAttributeModifiers(): boolean;
                    /**
                     * Return an immutable copy of all Attributes and
                     * their modifiers in this ItemMeta.<br>
                     * Returns null if none exist.
                     */
                     getAttributeModifiers(): any;
                    /**
                     * Return an immutable copy of all {@link Attribute}s and their
                     * {@link AttributeModifier}s for a given {@link EquipmentSlot}.<br>
                     * Any {@link AttributeModifier} that does have have a given
                     * {@link EquipmentSlot} will be returned. This is because
                     * AttributeModifiers without a slot are active in any slot.<br>
                     * If there are no attributes set for the given slot, an empty map
                     * will be returned.
                     */
                     getAttributeModifiers(slot: org.bukkit.inventory.EquipmentSlot): any;
                    /**
                     * Return an immutable copy of all {@link AttributeModifier}s
                     * for a given {@link Attribute}
                     */
                     getAttributeModifiers(attribute: org.bukkit.attribute.Attribute): any[] /*java.util.Collection*/;
                    /**
                     * Add an Attribute and it's Modifier.
                     * AttributeModifiers can now support {@link EquipmentSlot}s.
                     * If not set, the {@link AttributeModifier} will be active in ALL slots.
                     * <br>
                     * Two {@link AttributeModifier}s that have the same {@link java.util.UUID}
                     * cannot exist on the same Attribute.
                     */
                     addAttributeModifier(attribute: org.bukkit.attribute.Attribute, modifier: org.bukkit.attribute.AttributeModifier): boolean;
                    /**
                     * Set all {@link Attribute}s and their {@link AttributeModifier}s.
                     * To clear all currently set Attributes and AttributeModifiers use
                     * null or an empty Multimap.
                     * If not null nor empty, this will filter all entries that are not-null
                     * and add them to the ItemStack.
                     */
                     setAttributeModifiers(attributeModifiers: any): void;
                    /**
                     * Remove all {@link AttributeModifier}s associated with the given
                     * {@link Attribute}.
                     * This will return false if nothing was removed.
                     */
                     removeAttributeModifier(attribute: org.bukkit.attribute.Attribute): boolean;
                    /**
                     * Remove all {@link Attribute}s and {@link AttributeModifier}s for a
                     * given {@link EquipmentSlot}.<br>
                     * If the given {@link EquipmentSlot} is null, this will remove all
                     * {@link AttributeModifier}s that do not have an EquipmentSlot set.
                     */
                     removeAttributeModifier(slot: org.bukkit.inventory.EquipmentSlot): boolean;
                    /**
                     * Remove a specific {@link Attribute} and {@link AttributeModifier}.
                     * AttributeModifiers are matched according to their {@link java.util.UUID}.
                     */
                     removeAttributeModifier(attribute: org.bukkit.attribute.Attribute, modifier: org.bukkit.attribute.AttributeModifier): boolean;
                    /**
                     * Returns a public custom tag container capable of storing tags on the
                     * item.
                     * Those tags will be sent to the client with all of their content, so the
                     * client is capable of reading them. This will result in the player seeing
                     * a NBT Tag notification on the item.
                     * These tags can also be modified by the client once in creative mode
                     */
                     getCustomTagContainer(): org.bukkit.inventory.meta.tags.CustomItemTagContainer;
                    /**
                     * Internal use only! Do not use under any circumstances!
                     */
                     setVersion(version: number): void;
                     clone(): org.bukkit.inventory.meta.ItemMeta;
                }
            }
        }
    }
}
