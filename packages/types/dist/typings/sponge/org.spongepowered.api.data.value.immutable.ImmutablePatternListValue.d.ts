// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutablePatternListValue extends org.spongepowered.api.data.value.immutable.ImmutableListValue {
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left. This
                             * returns a new {@link ImmutablePatternListValue}.
                             */
                            // @ts-ignore
                             with(patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             with(index: number, value: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             with(index: number, values: java.lang.Iterable): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left.
                             */
                            // @ts-ignore
                             with(index: number, patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             with(collection: java.util.List): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             withElement(elements: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             withAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            /**
                             * Creates and adds a {@link PatternLayer} based on the
                             * {@link BannerPatternShape} and {@link DyeColor} at the desired index
                             * such that the element at the provided index is shifted to the left.
                             */
                            // @ts-ignore
                             set(index: number, patternShape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             set(index: number, element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             without(element: org.spongepowered.api.data.meta.PatternLayer): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             without(index: number): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             withoutAll(elements: java.lang.Iterable): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             withoutAll(predicate: java.util.function$.Predicate): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue;
                            // @ts-ignore
                             asMutable(): org.spongepowered.api.data.value.mutable.PatternListValue;
                        }
                    }
                }
            }
        }
    }
}
