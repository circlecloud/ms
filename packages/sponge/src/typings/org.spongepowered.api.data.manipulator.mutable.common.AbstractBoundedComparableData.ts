declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractBoundedComparableData extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData {
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
                                protected getValueGetter(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                // @ts-ignore
                                public setValue(value: any): org.spongepowered.api.data.manipulator.DataManipulator;
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer;
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
