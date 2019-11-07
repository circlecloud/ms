declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Career extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets the parent profession of this career. The profession is permanent
                         * and can not be changed.
                         */
                        // @ts-ignore
                         getProfession(): org.spongepowered.api.data.type.Profession;
                    }
                }
            }
        }
    }
}
