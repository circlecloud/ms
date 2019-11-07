// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableValueStore extends org.spongepowered.api.data.value.ValueContainer {
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. Since the return type is an
                             * {@link Optional}, a short way of checking compatibility and presence
                             * of the requested data is to mimic the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.get(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />&nbsp; &nbsp;
                             * // We know that we have a present DataManipulator and it's supported
                             * <br />&nbsp; &nbsp; System.out.println(
                             * displayOptional.get().displayName().get().toString());<br />
                             * }</code></blockquote>
                             * <p>This is the equivalent to performing the following:</p>
                             * <blockquote><code>
                             * MyCompositeValueStore valueStore;<br />
                             * if (valueStore.supports(DisplayNameData.class)) {<br />
                             * &nbsp; &nbsp;
                             * System.out.println(valueStore.getOrNull(DisplayNameData.class
                             * ).displayName().get().toString());<br />}</code></blockquote>
                             * <p>The advantage of this returning an {@link Optional} is that the
                             * {@link ValueContainer} may be unsupported, the required data missing
                             * and ignoring the possibility of {@code null}s, it is a guarantee that if
                             * the {@link Optional#isPresent()} is {@code true}, the
                             * {@link ValueContainer} not only is supported, but there is already pre-
                             * existing data for the {@link ValueContainer}.</p>
                             * <p>If it is necessary to ignore the {@link Optional},
                             * {@link Optional#orElse(Object)} can be used to return a potentially
                             * {@code null} {@link ValueContainer}.</p>
                             */
                            // @ts-ignore
                             get(containerClass: java.lang.Class): java.util.Optional;
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. If insufficient data is available
                             * to provide a {@link ValueContainer} with all {@link ImmutableValue}s
                             * preset, a new instance of the {@link ValueContainer} is returned with
                             * "default" values. Since the return type is an {@link Optional}, a short
                             * way of checking compatibility and presence of the requested data is to
                             * mimic the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />
                             * MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.getOrCreate(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />&nbsp; &nbsp; // We know that we
                             * have a present DataManipulator and it's supported<br />&nbsp; &nbsp;
                             * System.out.println(displayOptional.get().displayName().get().toString());
                             * <br />}</code></blockquote>
                             * <p>This is the equivalent to performing the following:</p>
                             * <blockquote><code>MyCompositeValueStore valueStore;<br />
                             * if (valueStore.supports(DisplayNameData.class)) {<br />&nbsp; &nbsp;
                             * System.out.println(valueStore.getOrNull(DisplayNameData.class
                             * ).displayName().get().toString());<br />}</code></blockquote>
                             * <p>The advantage of this returning an {@link Optional} is that the
                             * {@link ValueContainer} may be unsupported, the required data missing
                             * and ignoring the possibility of {@code null}s, it is a guarantee that if
                             * the {@link Optional#isPresent()} is {@code true}, the
                             * {@link ValueContainer} not only is supported, but there is already pre-
                             * existing data for the {@link ValueContainer}.</p>
                             * <p>If it is necessary to ignore the {@link Optional},
                             * {@link Optional#orElse(Object)} can be used to return a potentially
                             * {@code null} {@link ValueContainer}.</p>
                             */
                            // @ts-ignore
                             getOrCreate(containerClass: java.lang.Class): java.util.Optional;
                            /**
                             * Checks if the given {@link Class} of type {@link ValueContainer} is
                             * supported by this {@link ImmutableValueStore}.
                             */
                            // @ts-ignore
                             supports(containerClass: java.lang.Class): boolean;
                            /**
                             * Applies a transformation on the provided {@link BaseValue} such that
                             * the return value of {@link Function#apply(Object)} will become the end
                             * resulting value set into the newly created {@link ImmutableValueStore}.
                             */
                            // @ts-ignore
                             transform(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Function): java.util.Optional;
                            /**
                             * Creates a new {@link ImmutableValueStore} with the provided
                             * value by {@link Key}. If the key is supported by this value store,
                             * the returned value store will be present.
                             */
                            // @ts-ignore
                             with(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): java.util.Optional;
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that if the {@link Key} is supported, a new
                             * {@link ImmutableValueStore} is created.
                             */
                            // @ts-ignore
                             with(value: org.spongepowered.api.data.value.BaseValue): java.util.Optional;
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to the newly created {@link ImmutableValueStore}.
                             */
                            // @ts-ignore
                             with(valueContainer: org.spongepowered.api.data.value.ValueContainer): java.util.Optional;
                            /**
                             * Gets an altered copy of this {@link ImmutableValueStore} with the given
                             * {@link DataManipulator} modified data. If the data is not compatible for
                             * any reason, {@link Optional#empty()} is returned.
                             * <p>This does not alter the current {@link ImmutableValueStore}.</p>
                             */
                            // @ts-ignore
                             with(valueContainers: java.lang.Iterable): java.util.Optional;
                            /**
                             * Gets an altered copy of this {@link ImmutableValueStore} without the
                             * given {@link ValueContainer} class. If the data represented by the
                             * manipulator can not exist without a "default state" of the
                             * {@link ValueContainer}, the {@link ValueContainer} is reset to the
                             * "default" state.
                             */
                            // @ts-ignore
                             without(containerClass: java.lang.Class): java.util.Optional;
                            /**
                             * Attempts to merge the {@link ImmutableValue}s from this
                             * {@link ImmutableValueStore} and the given {@link ImmutableValueStore} to
                             * produce a new instance of the merged result.
                             */
                            // @ts-ignore
                             merge(that: org.spongepowered.api.data.value.immutable.ImmutableValueStore): org.spongepowered.api.data.value.immutable.ImmutableValueStore;
                            /**
                             * Attempts to merge the {@link ImmutableValue}s from this
                             * {@link ImmutableValueStore} and the given {@link ImmutableValueStore} to
                             * produce a new instance of the merged result. Any overlapping
                             * {@link ValueContainer}s are merged through the {@link MergeFunction}.
                             */
                            // @ts-ignore
                             merge(that: org.spongepowered.api.data.value.immutable.ImmutableValueStore, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.value.immutable.ImmutableValueStore;
                            /**
                             * Gets an copied collection of all known {@link ValueContainer}s
                             * belonging to this {@link ImmutableValueStore}. An individual
                             * {@link ValueContainer} can be used for data processing for various
                             * purposes.
                             */
                            // @ts-ignore
                             getContainers(): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
