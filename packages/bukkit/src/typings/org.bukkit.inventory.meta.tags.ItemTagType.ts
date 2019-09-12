declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    class ItemTagType {
                        public static BYTE: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static SHORT: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static INTEGER: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static LONG: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static FLOAT: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static DOUBLE: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static STRING: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static BYTE_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static INTEGER_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static LONG_ARRAY: org.bukkit.inventory.meta.tags.ItemTagType;
                        public static TAG_CONTAINER: org.bukkit.inventory.meta.tags.ItemTagType;
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
                        public toPrimitive(complex: any, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): any;
                        /**
                         * Creates a complex object based of the passed primitive value
                         */
                        public fromPrimitive(primitive: any, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): any;
                    }
                }
            }
        }
    }
}
