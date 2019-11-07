// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    // @ts-ignore
                    abstract class AbstractMutableMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MutableMessageChannel {
                        /**
                         * The default implementation uses a {@link WeakHashMap} implementation of {@link Set}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new instance of {@link AbstractMutableMessageChannel} with the
                         * provided {@link Collection} as the underlying member list.
                         * <p>The passed {@link Collection} directly affects the members of this
                         * channel.</p>
                         * <p>It is recommended to use a weak collection to avoid memory leaks. If
                         * you do not use a weak collection, please ensure that members are  cleaned
                         * up properly.</p>
                         */
                        // @ts-ignore
                        constructor(members: java.util.Collection)
                        // @ts-ignore
                        protected members: java.util.Collection;
                        // @ts-ignore
                        public addMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean;
                        // @ts-ignore
                        public removeMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean;
                        // @ts-ignore
                        public clearMembers(): void;
                        // @ts-ignore
                        public getMembers(): java.util.Collection;
                    }
                }
            }
        }
    }
}
