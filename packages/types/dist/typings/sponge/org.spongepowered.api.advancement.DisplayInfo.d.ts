// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                // @ts-ignore
                interface DisplayInfo {
                    /**
                     * Creates a new {@link Builder} to create {@link DisplayInfo}s.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.advancement.DisplayInfo.Builder;
                    /**
                     * Gets the {@link AdvancementType}.
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.advancement.AdvancementType;
                    /**
                     * Gets the description.
                     */
                    // @ts-ignore
                     getDescription(): org.spongepowered.api.text.Text;
                    /**
                     * Gets the icon.
                     */
                    // @ts-ignore
                     getIcon(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                    /**
                     * Gets the title.
                     */
                    // @ts-ignore
                     getTitle(): org.spongepowered.api.text.Text;
                    /**
                     * Gets whether a toast should be shown.
                     * <p>The toast is the notification that will be displayed
                     * in the top right corner.</p>
                     */
                    // @ts-ignore
                     doesShowToast(): boolean;
                    /**
                     * Gets whether a notification should be shown in the global chat.
                     */
                    // @ts-ignore
                     doesAnnounceToChat(): boolean;
                    /**
                     * Gets whether this advancement is hidden.
                     * <p>Hidden advancements will only appear in the tree once they
                     * are unlocked. The lines that connect them to other advancements
                     * are still present.</p>
                     */
                    // @ts-ignore
                     isHidden(): boolean;
                }
            }
        }
    }
}
