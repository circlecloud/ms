declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableBoundedComparableData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData {
                                constructor(value: any, usedKey: org.spongepowered.api.data.key.Key, comparator: any, lowerBound: any, upperBound: any, defaultValue: any)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any, lowerBound: any, upperBound: any, comparator: any)
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: any, defaultValue: any, lowerBound: any, upperBound: any, comparator: any)
                                // @ts-ignore
                                protected comparator: any;
                                // @ts-ignore
                                protected lowerBound: any;
                                // @ts-ignore
                                protected upperBound: any;
                                // @ts-ignore
                                protected defaultValue: any;
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: any): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}
