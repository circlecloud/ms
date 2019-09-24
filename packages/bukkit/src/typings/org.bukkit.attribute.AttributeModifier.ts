declare namespace org {
    namespace bukkit {
        namespace attribute {
            // @ts-ignore
             class AttributeModifier implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                constructor(name: string, amount: number, operation: org.bukkit.attribute.AttributeModifier.Operation)
                constructor(uuid: any, name: string, amount: number, operation: org.bukkit.attribute.AttributeModifier.Operation)
                constructor(uuid: any, name: string, amount: number, operation: org.bukkit.attribute.AttributeModifier.Operation, slot: org.bukkit.inventory.EquipmentSlot)
                /**
                 * Get the unique ID for this modifier.
                 */
                public getUniqueId(): any;
                /**
                 * Get the name of this modifier.
                 */
                public getName(): string;
                /**
                 * Get the amount by which this modifier will apply its {@link Operation}.
                 */
                public getAmount(): number;
                /**
                 * Get the operation this modifier will apply.
                 */
                public getOperation(): org.bukkit.attribute.AttributeModifier.Operation;
                /**
                 * Get the {@link EquipmentSlot} this AttributeModifier is active on,
                 * or null if this modifier is applicable for any slot.
                 */
                public getSlot(): org.bukkit.inventory.EquipmentSlot;
                public serialize(): Map<any, any> /*java.util.Map*/;
                public equals(other: any): boolean;
                public hashCode(): number;
                public toString(): string;
                public static deserialize(args: Map<any, any> /*java.util.Map*/): org.bukkit.attribute.AttributeModifier;
            }
        }
    }
}
