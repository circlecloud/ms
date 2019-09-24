declare namespace org {
    namespace bukkit {
        namespace persistence {
            // @ts-ignore
            interface PersistentDataType {
                 BYTE: org.bukkit.persistence.PersistentDataType;
                 SHORT: org.bukkit.persistence.PersistentDataType;
                 INTEGER: org.bukkit.persistence.PersistentDataType;
                 LONG: org.bukkit.persistence.PersistentDataType;
                 FLOAT: org.bukkit.persistence.PersistentDataType;
                 DOUBLE: org.bukkit.persistence.PersistentDataType;
                 STRING: org.bukkit.persistence.PersistentDataType;
                 BYTE_ARRAY: org.bukkit.persistence.PersistentDataType;
                 INTEGER_ARRAY: org.bukkit.persistence.PersistentDataType;
                 LONG_ARRAY: org.bukkit.persistence.PersistentDataType;
                 TAG_CONTAINER: org.bukkit.persistence.PersistentDataType;
                /**
                 * Returns the primitive data type of this tag.
                 */
                 getPrimitiveType(): any;
                /**
                 * Returns the complex object type the primitive value resembles.
                 */
                 getComplexType(): any;
                /**
                 * Returns the primitive data that resembles the complex object passed to
                 * this method.
                 */
                 toPrimitive(complex: any, context: org.bukkit.persistence.PersistentDataAdapterContext): any;
                /**
                 * Creates a complex object based of the passed primitive value
                 */
                 fromPrimitive(primitive: any, context: org.bukkit.persistence.PersistentDataAdapterContext): any;
            }
        }
    }
}
