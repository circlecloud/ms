// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace CriterionEvent {
                        namespace Score {
                            // @ts-ignore
                            interface Change extends org.spongepowered.api.event.advancement.CriterionEvent.Score, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the previous score.
                                 */
                                // @ts-ignore
                                 getPreviousScore(): number;
                                /**
                                 * Gets the new score.
                                 */
                                // @ts-ignore
                                 getNewScore(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}
