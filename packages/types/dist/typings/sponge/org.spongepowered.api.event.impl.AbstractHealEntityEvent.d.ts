declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractHealEntityEvent extends org.spongepowered.api.event.impl.AbstractModifierEvent implements org.spongepowered.api.event.entity.HealEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        protected originalHealAmount: number;
                        // @ts-ignore
                        protected originalFunctions: java.util.List;
                        // @ts-ignore
                        protected baseHealAmount: number;
                        // @ts-ignore
                        protected init(): void;
                        // @ts-ignore
                        public getOriginalHealingModifierAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number;
                        // @ts-ignore
                        public getOriginalFinalHealAmount(): number;
                        // @ts-ignore
                        public getOriginalHealingAmounts(): java.util.Map;
                        // @ts-ignore
                        public getFinalHealAmount(): number;
                        // @ts-ignore
                        public isModifierApplicable(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): boolean;
                        // @ts-ignore
                        public getHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number;
                        // @ts-ignore
                        public setHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function$.DoubleUnaryOperator): void;
                        // @ts-ignore
                        public getBaseHealAmount(): number;
                        // @ts-ignore
                        public setBaseHealAmount(baseHealAmount: number): void;
                        // @ts-ignore
                        protected convertTuple(obj: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.health.HealthFunction;
                    }
                }
            }
        }
    }
}
