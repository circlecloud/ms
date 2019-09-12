declare namespace org {
    namespace bukkit {
        namespace attribute {
            class AttributeInstance {
                /**
                 * The attribute pertaining to this instance.
                 */
                public getAttribute(): org.bukkit.attribute.Attribute;
                /**
                 * Base value of this instance before modifiers are applied.
                 */
                public getBaseValue(): number;
                /**
                 * Set the base value of this instance.
                 */
                public setBaseValue(value: number): void;
                /**
                 * Get all modifiers present on this instance.
                 */
                public getModifiers(): any[] /*java.util.Collection*/;
                /**
                 * Add a modifier to this instance.
                 */
                public addModifier(modifier: org.bukkit.attribute.AttributeModifier): void;
                /**
                 * Remove a modifier from this instance.
                 */
                public removeModifier(modifier: org.bukkit.attribute.AttributeModifier): void;
                /**
                 * Get the value of this instance after all associated modifiers have been
                 * applied.
                 */
                public getValue(): number;
                /**
                 * Gets the default value of the Attribute attached to this instance.
                 */
                public getDefaultValue(): number;
            }
        }
    }
}
