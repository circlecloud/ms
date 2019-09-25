declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractSingleCatalogData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData implements org.spongepowered.api.data.manipulator.mutable.VariantData {
                                constructor(value: org.spongepowered.api.CatalogType, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: org.spongepowered.api.CatalogType)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: org.spongepowered.api.CatalogType, defaultValue: org.spongepowered.api.CatalogType)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.Value;
                                // @ts-ignore
                                public type(): org.spongepowered.api.data.value.mutable.Value;
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer;
                            }
                        }
                    }
                }
            }
        }
    }
}
