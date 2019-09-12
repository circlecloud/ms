declare namespace org {
    namespace bukkit {
        namespace attribute {
            class Attributable {
                /**
                 * Gets the specified attribute instance from the object. This instance will
                 * be backed directly to the object and any changes will be visible at once.
                 */
                public getAttribute(attribute: org.bukkit.attribute.Attribute): org.bukkit.attribute.AttributeInstance;
            }
        }
    }
}
