declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractMessageEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.message.MessageEvent {
                        constructor()
                        // @ts-ignore
                        protected formatter: org.spongepowered.api.event.message.MessageEvent.MessageFormatter;
                        // @ts-ignore
                        protected originalMessage: org.spongepowered.api.text.Text;
                        // @ts-ignore
                        protected init(): void;
                    }
                }
            }
        }
    }
}
