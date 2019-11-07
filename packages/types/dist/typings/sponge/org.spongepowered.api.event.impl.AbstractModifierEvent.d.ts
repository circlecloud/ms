declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractModifierEvent extends org.spongepowered.api.event.impl.AbstractEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        protected originalFinalAmount: number;
                        // @ts-ignore
                        protected originalModifiers: java.util.List;
                        // @ts-ignore
                        protected originalModifierMap: java.util.Map;
                        // @ts-ignore
                        protected modifiers: java.util.LinkedHashMap;
                        // @ts-ignore
                        protected modifierFunctions: java.util.List;
                        // @ts-ignore
                        protected init(originalValue: number, originalFunctions: java.util.List): any;
                        // @ts-ignore
                        protected abstract convertTuple(obj: java.lang.Object, func: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.ModifierFunction;
                        // @ts-ignore
                        protected recalculateDamages(baseAmount: number): void;
                        // @ts-ignore
                        protected getFinalAmount(baseAmount: number): number;
                        /**
                         * Gets the modifiers affecting this event.
                         */
                        // @ts-ignore
                        public getModifiers(): java.util.List;
                    }
                }
            }
        }
    }
}
