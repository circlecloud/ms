declare namespace org {
    namespace bukkit {
        namespace attribute {
            // @ts-ignore
            interface AttributeInstance {
                /**
                 * The attribute pertaining to this instance.
                 */
                 getAttribute(): org.bukkit.attribute.Attribute;
                /**
                 * Base value of this instance before modifiers are applied.
                 */
                 getBaseValue(): number;
                /**
                 * Set the base value of this instance.
                 */
                 setBaseValue(value: number): void;
                /**
                 * Get all modifiers present on this instance.
                 */
                 getModifiers(): any[] /*java.util.Collection*/;
                /**
                 * Add a modifier to this instance.
                 */
                 addModifier(modifier: org.bukkit.attribute.AttributeModifier): void;
                /**
                 * Remove a modifier from this instance.
                 */
                 removeModifier(modifier: org.bukkit.attribute.AttributeModifier): void;
                /**
                 * Get the value of this instance after all associated modifiers have been
                 * applied.
                 */
                 getValue(): number;
                /**
                 * Gets the default value of the Attribute attached to this instance.
                 */
                 getDefaultValue(): number;
            }
        }
    }
}
