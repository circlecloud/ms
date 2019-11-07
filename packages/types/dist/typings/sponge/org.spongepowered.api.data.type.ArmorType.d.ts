declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface ArmorType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the {@link ItemType} that can be used to
                         * "repair" the armor type.
                         */
                        // @ts-ignore
                         getRepairItemType(): java.util.Optional;
                    }
                }
            }
        }
    }
}
