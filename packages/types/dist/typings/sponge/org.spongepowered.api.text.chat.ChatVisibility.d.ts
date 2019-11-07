// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace chat {
                    // @ts-ignore
                    interface ChatVisibility extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Tests whether the given chat type will be visible to a player's chat.
                         */
                        // @ts-ignore
                         isVisible(chatType: org.spongepowered.api.text.chat.ChatType): boolean;
                    }
                }
            }
        }
    }
}
