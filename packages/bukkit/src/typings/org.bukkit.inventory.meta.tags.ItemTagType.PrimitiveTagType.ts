declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    namespace ItemTagType {
                        class PrimitiveTagType {
                            public getPrimitiveType(): any;
                            public getComplexType(): any;
                            public toPrimitive(complex: any, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): any;
                            public fromPrimitive(primitive: any, context: org.bukkit.inventory.meta.tags.ItemTagAdapterContext): any;
                        }
                    }
                }
            }
        }
    }
}
