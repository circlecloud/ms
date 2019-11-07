// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace attribute {
            // @ts-ignore
             class AttributeModifier extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                // @ts-ignore
                constructor(name: string, amount: number, operation: org.bukkit.attribute.AttributeModifier.Operation)
                // @ts-ignore
                constructor(uuid: java.util.UUID, name: string, amount: number, operation: org.bukkit.attribute.AttributeModifier.Operation)
                // @ts-ignore
                constructor(uuid: java.util.UUID, name: string, amount: number, operation: org.bukkit.attribute.AttributeModifier.Operation, slot: org.bukkit.inventory.EquipmentSlot)
                /**
                 * Get the unique ID for this modifier.
                 */
                // @ts-ignore
                public getUniqueId(): java.util.UUID;
                /**
                 * Get the name of this modifier.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Get the amount by which this modifier will apply its {@link Operation}.
                 */
                // @ts-ignore
                public getAmount(): number;
                /**
                 * Get the operation this modifier will apply.
                 */
                // @ts-ignore
                public getOperation(): org.bukkit.attribute.AttributeModifier.Operation;
                /**
                 * Get the {@link EquipmentSlot} this AttributeModifier is active on,
                 * or null if this modifier is applicable for any slot.
                 */
                // @ts-ignore
                public getSlot(): org.bukkit.inventory.EquipmentSlot;
                // @ts-ignore
                public serialize(): java.util.Map;
                // @ts-ignore
                public equals(other: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public static deserialize(args: java.util.Map): org.bukkit.attribute.AttributeModifier;
            }
        }
    }
}
