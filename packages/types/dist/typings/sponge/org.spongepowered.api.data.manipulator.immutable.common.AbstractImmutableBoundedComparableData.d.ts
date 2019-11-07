// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            // @ts-ignore
                            abstract class AbstractImmutableBoundedComparableData extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData {
                                // @ts-ignore
                                constructor(value: java.lang.Comparable, usedKey: org.spongepowered.api.data.key.Key, comparator: java.util.Comparator, lowerBound: java.lang.Comparable, upperBound: java.lang.Comparable, defaultValue: java.lang.Comparable)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Comparable, lowerBound: java.lang.Comparable, upperBound: java.lang.Comparable, comparator: java.util.Comparator)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key, value: java.lang.Comparable, defaultValue: java.lang.Comparable, lowerBound: java.lang.Comparable, upperBound: java.lang.Comparable, comparator: java.util.Comparator)
                                // @ts-ignore
                                protected comparator: java.util.Comparator;
                                // @ts-ignore
                                protected lowerBound: java.lang.Comparable;
                                // @ts-ignore
                                protected upperBound: java.lang.Comparable;
                                // @ts-ignore
                                protected defaultValue: java.lang.Comparable;
                                // @ts-ignore
                                protected getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                // @ts-ignore
                                public hashCode(): number;
                                // @ts-ignore
                                public equals(obj: java.lang.Object): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}
