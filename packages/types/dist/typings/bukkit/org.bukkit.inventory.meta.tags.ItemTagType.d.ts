declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    // @ts-ignore
                    interface ItemTagType {
                        // @ts-ignore
                         BYTE: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         SHORT: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         INTEGER: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         LONG: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         FLOAT: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         DOUBLE: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         STRING: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         BYTE_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         INTEGER_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         LONG_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                        // @ts-ignore
                         TAG_CONTAINER: org.bukkit.inventory.meta.tags.ItemTagType;
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
                         toPrimitive(complex: java.lang.Object, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): java.lang.Object;
                        /**
                         * Creates a complex object based of the passed primitive value
                         */
                        // @ts-ignore
                         fromPrimitive(primitive: java.lang.Object, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): java.lang.Object;
                    }
                }
            }
        }
    }
}
