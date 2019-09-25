declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableSingleCatalogData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData implements org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData {
                                constructor(value: org.spongepowered.api.CatalogType, defaultValue: org.spongepowered.api.CatalogType, usedKey: org.spongepowered.api.data.key.Key)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: org.spongepowered.api.CatalogType)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: org.spongepowered.api.CatalogType, defaultValue: org.spongepowered.api.CatalogType)
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer;
                                // @ts-ignore
                                public type(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
