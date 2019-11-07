// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    // @ts-ignore
                    interface MutableMessageChannel extends org.spongepowered.api.text.channel.MessageChannel {
                        /**
                         * Adds a member to this channel.
                         */
                        // @ts-ignore
                         addMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean;
                        /**
                         * Removes a member from this channel.
                         */
                        // @ts-ignore
                         removeMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean;
                        /**
                         * Removes all of the members from this channel.
                         */
                        // @ts-ignore
                         clearMembers(): void;
                        // @ts-ignore
                         asMutable(): org.spongepowered.api.text.channel.MutableMessageChannel;
                    }
                }
            }
        }
    }
}
