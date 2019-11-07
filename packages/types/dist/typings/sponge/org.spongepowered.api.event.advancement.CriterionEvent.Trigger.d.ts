// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace CriterionEvent {
                        // @ts-ignore
                        interface Trigger extends org.spongepowered.api.event.advancement.CriterionEvent, org.spongepowered.api.event.GenericEvent {
                            /**
                             * Gets the {@link FilteredTrigger}
                             * that is being processed.
                             */
                            // @ts-ignore
                             getTrigger(): org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger;
                            /**
                             * Gets the result of the trigger event.
                             */
                            // @ts-ignore
                             getResult(): boolean;
                            /**
                             * Sets the result of the trigger event.
                             */
                            // @ts-ignore
                             setResult(result: boolean): void;
                        }
                    }
                }
            }
        }
    }
}
