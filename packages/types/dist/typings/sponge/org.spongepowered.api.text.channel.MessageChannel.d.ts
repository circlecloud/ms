declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    // @ts-ignore
                    interface MessageChannel {
                        // @ts-ignore
                         TO_NONE: org.spongepowered.api.text.channel.MessageChannel;
                        // @ts-ignore
                         TO_PLAYERS: org.spongepowered.api.text.channel.MessageChannel;
                        // @ts-ignore
                         TO_CONSOLE: org.spongepowered.api.text.channel.MessageChannel;
                        // @ts-ignore
                         TO_ALL: org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Creates a message channel that targets all subjects with the given
                         * permission.
                         */
                        // @ts-ignore
                         permission(permission: string): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Creates a message channel that targets all subjects contained within the
                         * given channels and applies the message transformations of each channel in
                         * order.
                         */
                        // @ts-ignore
                         combined(channels: org.spongepowered.api.text.channel.MessageChannel): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Gets a message channel that targets all subjects contained within the
                         * given channels and applies the message transformations of each channel in
                         * order.
                         */
                        // @ts-ignore
                         combined(channels: java.util.Collection): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Creates a message channel that targets the given sources.
                         */
                        // @ts-ignore
                         fixed(recipients: org.spongepowered.api.text.channel.MessageReceiver): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Creates a message channel that targets the given recipients.
                         */
                        // @ts-ignore
                         fixed(recipients: java.util.Collection): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Creates a message channel that targets the given world.
                         */
                        // @ts-ignore
                         world(world: org.spongepowered.api.world.World): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Broadcast a message to this channel, transforming and sending it to
                         * the members.
                         */
                        // @ts-ignore
                         send(original: org.spongepowered.api.text.Text): void;
                        /**
                         * Sends a message to this channel, transforming and sending it to
                         * the members.
                         * <p>By default, the {@link ChatTypes#SYSTEM} type is used when sending
                         * messages to applicable recipients of this channel.</p>
                         */
                        // @ts-ignore
                         send(original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): void;
                        /**
                         * Send a message to this channel, transforming and sending it to the
                         * members.
                         */
                        // @ts-ignore
                         send(sender: java.lang.Object, original: org.spongepowered.api.text.Text): void;
                        /**
                         * Send a message to this channel, transforming and sending it to the
                         * members.
                         */
                        // @ts-ignore
                         send(sender: java.lang.Object, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): void;
                        /**
                         * Handle transforming the input message appropriately.
                         */
                        // @ts-ignore
                         transformMessage(sender: java.lang.Object, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): java.util.Optional;
                        /**
                         * Gets a collection of all members in this channel.
                         */
                        // @ts-ignore
                         getMembers(): java.util.Collection;
                        /**
                         * Gets or creates a mutable version of this channel.
                         * <p>The default behaviour of this method is to copy the current member
                         * list into a {@link DelegateMutableMessageChannel}, which calls the
                         * {@link #transformMessage(Object, MessageReceiver, Text, ChatType)} method
                         * on this channel.</p>
                         */
                        // @ts-ignore
                         asMutable(): org.spongepowered.api.text.channel.MutableMessageChannel;
                    }
                }
            }
        }
    }
}
