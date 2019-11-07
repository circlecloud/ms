// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface ArmorEquipable extends org.spongepowered.api.entity.Equipable {
                    /**
                     * Gets the helmet currently being worn by this entity.
                     * <p>Having the helmet as null will result in having nothing equipped in
                     * the helmet slot.</p>
                     */
                    // @ts-ignore
                     getHelmet(): java.util.Optional;
                    /**
                     * Sets the helmet currently being worn by this entity.
                     * <p>Having the helmet as null will result in having nothing equipped in
                     * the helmet slot.</p>
                     */
                    // @ts-ignore
                     setHelmet(helmet: org.spongepowered.api.item.inventory.ItemStack): void;
                    /**
                     * Gets the chestplate currently being worn by this entity.
                     * <p>Having the chestplate as null will result in having nothing equipped
                     * in the chestplate slot.</p>
                     */
                    // @ts-ignore
                     getChestplate(): java.util.Optional;
                    /**
                     * Sets the chestplate currently being worn by this entity.
                     * <p>Having the chestplate as null will result in having nothing equipped
                     * in the chestplate slot.</p>
                     */
                    // @ts-ignore
                     setChestplate(chestplate: org.spongepowered.api.item.inventory.ItemStack): void;
                    /**
                     * Gets the leggings currently being worn by this entity.
                     * <p>Having the leggings as null will result in having nothing equipped in
                     * the leggings slot.</p>
                     */
                    // @ts-ignore
                     getLeggings(): java.util.Optional;
                    /**
                     * Sets the leggings currently being worn by this entity.
                     * <p>Having the leggings as null will result in having nothing equipped in
                     * the leggings slot.</p>
                     */
                    // @ts-ignore
                     setLeggings(leggings: org.spongepowered.api.item.inventory.ItemStack): void;
                    /**
                     * Gets the boots currently being worn by this entity.
                     * <p>Having the boots as null will result in having nothing equipped in the
                     * boots slot.</p>
                     */
                    // @ts-ignore
                     getBoots(): java.util.Optional;
                    /**
                     * Sets the boots currently being worn by this entity.
                     * <p>Having the boots as null will result in having nothing equipped in the
                     * boots slot.</p>
                     */
                    // @ts-ignore
                     setBoots(boots: org.spongepowered.api.item.inventory.ItemStack): void;
                    /**
                     * Gets the current equipped item in hand if available.
                     * <p>Having the item in hand as null will result in having nothing equipped
                     * in the item in hand slot.</p>
                     */
                    // @ts-ignore
                     getItemInHand(handType: org.spongepowered.api.data.type.HandType): java.util.Optional;
                    /**
                     * Sets the item in hand for this entity.
                     * <p>Having the item in hand as null will result in having nothing equipped
                     * in the item in hand slot.</p>
                     */
                    // @ts-ignore
                     setItemInHand(hand: org.spongepowered.api.data.type.HandType, itemInHand: org.spongepowered.api.item.inventory.ItemStack): void;
                }
            }
        }
    }
}
