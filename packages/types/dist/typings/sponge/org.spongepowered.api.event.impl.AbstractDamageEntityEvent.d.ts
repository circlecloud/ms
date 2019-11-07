// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractDamageEntityEvent extends org.spongepowered.api.event.impl.AbstractModifierEvent implements org.spongepowered.api.event.entity.DamageEntityEvent {
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
                        public getFinalDamage(): number;
                        // @ts-ignore
                        public isModifierApplicable(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): boolean;
                        // @ts-ignore
                        public getDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number;
                        // @ts-ignore
                        public setDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator): void;
                        // @ts-ignore
                        public addDamageModifierBefore(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, before: java.util.Set): void;
                        // @ts-ignore
                        public addModifierAfter(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, after: java.util.Set): void;
                        // @ts-ignore
                        protected convertTuple(obj: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator): org.spongepowered.api.event.cause.entity.damage.DamageFunction;
                        // @ts-ignore
                        public getModifiers(): java.util.List;
                        // @ts-ignore
                        public getBaseDamage(): number;
                        // @ts-ignore
                        public setBaseDamage(baseDamage: number): void;
                        // @ts-ignore
                        public willCauseDeath(): boolean;
                    }
                }
            }
        }
    }
}
