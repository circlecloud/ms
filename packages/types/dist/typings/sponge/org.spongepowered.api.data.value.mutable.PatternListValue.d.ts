declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface PatternListValue extends org.spongepowered.api.data.value.mutable.ListValue {
                            // @ts-ignore
                             add(element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue;
                            /**
                             * Creates and adds a new {@link PatternLayer} based on the provided
                             * {@link BannerPatternShape} and {@link DyeColor}.
                             */
                            // @ts-ignore
                             add(patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             add(index: number, value: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue;
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left.
                             */
                            // @ts-ignore
                             add(index: number, patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             add(index: number, values: java.lang.Iterable): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             set(index: number, element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             set(value: java.util.List): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             transform(func: java.util.function$.Function): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             addAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             remove(index: number): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             remove(element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             removeAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             removeAll(predicate: java.util.function$.Predicate): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             filter(predicate: java.util.function$.Predicate): org.spongepowered.api.data.value.mutable.PatternListValue;
                            // @ts-ignore
                             asImmutable(): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                        }
                    }
                }
            }
        }
    }
}
