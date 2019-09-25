declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace command {
                    // @ts-ignore
                    interface TabCompleteEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the message sent to the server for tab completion.
                         * <p>The Vanilla client does not send the entire contents of the chat box.
                         * Instead, it sends the contents of the chat box up to the cursor position
                         * (excluding the character after the cursor).
                         */
                        // @ts-ignore
                         getRawMessage(): string;
                        /**
                         * Gets the immutable list of the suggestions originally generated.
                         * <p>In Vanilla, these suggestions are usually player names, in the case
                         * of {@link Chat}.</p>
                         * <p>Note: Entries *should not* contain spaces, as they produce strange
                         * behavior on the Vanilla client (tabbing between entries causes them
                         * to be appended to the text box, instead of replacing the existing
                         * entry.</p>
                         */
                        // @ts-ignore
                         getOriginalTabCompletions(): any[] /*java.util.List*/;
                        /**
                         * Gets the list of available suggestions. This list is mutable, so
                         * any modifications should happen to this list. All suggestions will
                         * replace the last word in the arguments on the client.
                         */
                        // @ts-ignore
                         getTabCompletions(): any[] /*java.util.List*/;
                        /**
                         * Gets the location of the block that the player is looking at, if
                         * available.
                         * <p>In Vanilla, this will be available if the player is looking at
                         * a block within mineable range (the wireframe is displayed on
                         * the client).</p>
                         */
                        // @ts-ignore
                         getTargetPos(): any;
                        /**
                         * Gets whether the player is tab completing from a block's GUI.
                         * <p>In Vanilla, this will be <code>true</code> if the player is tab
                         * completing in a commandblock or commandblock minecart's GUI, and
                         * <code>false</code> otherwise.</p>
                         */
                        // @ts-ignore
                         isUsingBlock(): boolean;
                    }
                }
            }
        }
    }
}
