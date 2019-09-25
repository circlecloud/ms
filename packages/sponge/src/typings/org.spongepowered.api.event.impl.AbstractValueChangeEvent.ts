declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractValueChangeEvent implements org.spongepowered.api.event.data.ChangeDataHolderEvent.ValueChange {
                        constructor()
                        // @ts-ignore
                        protected originalChanges: org.spongepowered.api.data.DataTransactionResult;
                        // @ts-ignore
                        protected endResult: org.spongepowered.api.data.DataTransactionResult;
                        // @ts-ignore
                        protected init(): void;
                        // @ts-ignore
                        public proposeChanges(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.event.data.ChangeDataHolderEvent.ValueChange;
                    }
                }
            }
        }
    }
}
