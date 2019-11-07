// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace attribute {
            // @ts-ignore
            interface AttributeInstance {
                /**
                 * The attribute pertaining to this instance.
                 */
                // @ts-ignore
                 getAttribute(): org.bukkit.attribute.Attribute;
                /**
                 * Base value of this instance before modifiers are applied.
                 */
                // @ts-ignore
                 getBaseValue(): number;
                /**
                 * Set the base value of this instance.
                 */
                // @ts-ignore
                 setBaseValue(value: number): void;
                /**
                 * Get all modifiers present on this instance.
                 */
                // @ts-ignore
                 getModifiers(): java.util.Collection;
                /**
                 * Add a modifier to this instance.
                 */
                // @ts-ignore
                 addModifier(modifier: org.bukkit.attribute.AttributeModifier): void;
                /**
                 * Remove a modifier from this instance.
                 */
                // @ts-ignore
                 removeModifier(modifier: org.bukkit.attribute.AttributeModifier): void;
                /**
                 * Get the value of this instance after all associated modifiers have been
                 * applied.
                 */
                // @ts-ignore
                 getValue(): number;
                /**
                 * Gets the default value of the Attribute attached to this instance.
                 */
                // @ts-ignore
                 getDefaultValue(): number;
            }
        }
    }
}
