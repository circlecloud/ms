// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractAttackEntityEvent extends org.spongepowered.api.event.impl.AbstractModifierEvent implements org.spongepowered.api.event.entity.AttackEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        protected originalDamage: number;
                        // @ts-ignore
                        protected originalFunctions: java.util.List;
                        // @ts-ignore
                        protected baseDamage: number;
                        // @ts-ignore
                        protected init(): void;
                        // @ts-ignore
                        public getOriginalModifierDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number;
                        // @ts-ignore
                        public getOriginalFinalDamage(): number;
                        // @ts-ignore
                        public getOriginalDamages(): java.util.Map;
                        // @ts-ignore
                        public getFinalOutputDamage(): number;
                        // @ts-ignore
                        public isModifierApplicable(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): boolean;
                        // @ts-ignore
                        public getOutputDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number;
                        // @ts-ignore
                        public setOutputDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator): void;
                        // @ts-ignore
                        public addDamageModifierBefore(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, before: java.util.Set): void;
                        // @ts-ignore
                        public addDamageModifierAfter(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, after: java.util.Set): void;
                        // @ts-ignore
                        public getBaseOutputDamage(): number;
                        // @ts-ignore
                        public setBaseOutputDamage(baseDamage: number): void;
                        // @ts-ignore
                        protected convertTuple(obj: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.damage.DamageFunction;
                        // @ts-ignore
                        public getModifiers(): java.util.List;
                    }
                }
            }
        }
    }
}
