declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    // @ts-ignore
                    interface ItemTagType {
                         BYTE: org.bukkit.inventory.meta.tags.ItemTagType;
                         SHORT: org.bukkit.inventory.meta.tags.ItemTagType;
                         INTEGER: org.bukkit.inventory.meta.tags.ItemTagType;
                         LONG: org.bukkit.inventory.meta.tags.ItemTagType;
                         FLOAT: org.bukkit.inventory.meta.tags.ItemTagType;
                         DOUBLE: org.bukkit.inventory.meta.tags.ItemTagType;
                         STRING: org.bukkit.inventory.meta.tags.ItemTagType;
                         BYTE_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                         INTEGER_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                         LONG_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                         TAG_CONTAINER: org.bukkit.inventory.meta.tags.ItemTagType;
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
                         toPrimitive(complex: any, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): any;
                        /**
                         * Creates a complex object based of the passed primitive value
                         */
                         fromPrimitive(primitive: any, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): any;
                    }
                }
            }
        }
    }
}
