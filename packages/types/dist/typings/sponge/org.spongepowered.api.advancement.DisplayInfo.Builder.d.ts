declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace DisplayInfo {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets the {@link AdvancementType}. Defaults
                         * to {@link AdvancementTypes#TASK}.
                         */
                        // @ts-ignore
                         type(advancementType: org.spongepowered.api.advancement.AdvancementType): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets the description. Defaults to {@link Text#EMPTY}.
                         */
                        // @ts-ignore
                         description(description: org.spongepowered.api.text.Text): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets the title.
                         */
                        // @ts-ignore
                         title(title: org.spongepowered.api.text.Text): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets the icon of the advancement with the
                         * specified {@link ItemType}.
                         */
                        // @ts-ignore
                         icon(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets the icon of the advancement with the
                         * specified {@link ItemStack}.
                         */
                        // @ts-ignore
                         icon(itemStack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets the icon of the advancement with the
                         * specified {@link ItemStackSnapshot}.
                         */
                        // @ts-ignore
                         icon(itemStackSnapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets whether a toast should be shown. This is the notification
                         * that will be displayed in the top right corner.
                         * <p>Defaults to {@code true}.</p>
                         */
                        // @ts-ignore
                         showToast(showToast: boolean): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets whether a notification should be shown in the global chat.
                         * <p>Defaults to {@code true}.</p>
                         */
                        // @ts-ignore
                         announceToChat(announceToChat: boolean): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Sets whether the {@link Advancement} should be hidden.
                         * <p>Hidden advancements will only appear in the tree once they
                         * are unlocked. The lines that connect them to other advancements
                         * are still present.</p>
                         */
                        // @ts-ignore
                         hidden(hidden: boolean): org.spongepowered.api.advancement.DisplayInfo.Builder;
                        /**
                         * Builds the {@link DisplayInfo}.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.advancement.DisplayInfo;
                    }
                }
            }
        }
    }
}
