declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractModifierEvent extends org.spongepowered.api.event.impl.AbstractEvent {
                        constructor()
                        // @ts-ignore
                        protected originalFinalAmount: number;
                        // @ts-ignore
                        protected originalModifiers: any[] /*java.util.List*/;
                        // @ts-ignore
                        protected originalModifierMap: Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                        protected modifiers: any;
                        // @ts-ignore
                        protected modifierFunctions: any[] /*java.util.List*/;
                        // @ts-ignore
                        protected init(originalValue: number, originalFunctions: any[] /*java.util.List*/): any;
                        // @ts-ignore
                        protected abstract convertTuple(obj: any, func: any): org.spongepowered.api.event.cause.entity.ModifierFunction;
                        // @ts-ignore
                        protected recalculateDamages(baseAmount: number): void;
                        // @ts-ignore
                        protected getFinalAmount(baseAmount: number): number;
                        /**
                         * Gets the modifiers affecting this event.
                         */
                        // @ts-ignore
                        public getModifiers(): any[] /*java.util.List*/;
                    }
                }
            }
        }
    }
}
