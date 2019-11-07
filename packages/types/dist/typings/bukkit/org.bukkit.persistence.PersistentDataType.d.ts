declare namespace org {
    namespace bukkit {
        namespace persistence {
            // @ts-ignore
            interface PersistentDataType {
                // @ts-ignore
                 BYTE: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 SHORT: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 INTEGER: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 LONG: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 FLOAT: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 DOUBLE: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 STRING: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 BYTE_ARRAY: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 INTEGER_ARRAY: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 LONG_ARRAY: org.bukkit.persistence.PersistentDataType;
                // @ts-ignore
                 TAG_CONTAINER: org.bukkit.persistence.PersistentDataType;
                /**
                 * Returns the primitive data type of this tag.
                 */
                // @ts-ignore
                 getPrimitiveType(): java.lang.Class;
                /**
                 * Returns the complex object type the primitive value resembles.
                 */
                // @ts-ignore
                 getComplexType(): java.lang.Class;
                /**
                 * Returns the primitive data that resembles the complex object passed to
                 * this method.
                 */
                // @ts-ignore
                 toPrimitive(complex: java.lang.Object, context: org.bukkit.persistence.PersistentDataAdapterContext): java.lang.Object;
                /**
                 * Creates a complex object based of the passed primitive value
                 */
                // @ts-ignore
                 fromPrimitive(primitive: java.lang.Object, context: org.bukkit.persistence.PersistentDataAdapterContext): java.lang.Object;
            }
        }
    }
}
