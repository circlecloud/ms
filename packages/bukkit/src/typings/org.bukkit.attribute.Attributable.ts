declare namespace org {
    namespace bukkit {
        namespace attribute {
            // @ts-ignore
            interface Attributable {
                /**
                 * Gets the specified attribute instance from the object. This instance will
                 * be backed directly to the object and any changes will be visible at once.
                 */
                 getAttribute(attribute: org.bukkit.attribute.Attribute): org.bukkit.attribute.AttributeInstance;
            }
        }
    }
}
