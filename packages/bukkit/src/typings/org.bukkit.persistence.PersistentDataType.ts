declare namespace org {
    namespace bukkit {
        namespace persistence {
            class PersistentDataType {
                public static BYTE: org.bukkit.persistence.PersistentDataType;
                public static SHORT: org.bukkit.persistence.PersistentDataType;
                public static INTEGER: org.bukkit.persistence.PersistentDataType;
                public static LONG: org.bukkit.persistence.PersistentDataType;
                public static FLOAT: org.bukkit.persistence.PersistentDataType;
                public static DOUBLE: org.bukkit.persistence.PersistentDataType;
                public static STRING: org.bukkit.persistence.PersistentDataType;
                public static BYTE_ARRAY: org.bukkit.persistence.PersistentDataType;
                public static INTEGER_ARRAY: org.bukkit.persistence.PersistentDataType;
                public static LONG_ARRAY: org.bukkit.persistence.PersistentDataType;
                public static TAG_CONTAINER: org.bukkit.persistence.PersistentDataType;
                /**
                 * Returns the primitive data type of this tag.
                 */
                public getPrimitiveType(): any;
                /**
                 * Returns the complex object type the primitive value resembles.
                 */
                public getComplexType(): any;
                /**
                 * Returns the primitive data that resembles the complex object passed to
                 * this method.
                 */
                public toPrimitive(complex: any, context: org.bukkit.persistence.PersistentDataAdapterContext): any;
                /**
                 * Creates a complex object based of the passed primitive value
                 */
                public fromPrimitive(primitive: any, context: org.bukkit.persistence.PersistentDataAdapterContext): any;
            }
        }
    }
}
