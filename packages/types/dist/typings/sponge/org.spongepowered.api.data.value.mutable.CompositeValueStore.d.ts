declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace value {
                    namespace mutable {
                        // @ts-ignore
                        interface CompositeValueStore extends org.spongepowered.api.data.value.ValueContainer {
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. Since the return type is an
                             * {@link Optional}, a short way of checking compatibility and presence
                             * of the requested data is to mimic the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />
                             * MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.get(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />
                             * &nbsp; &nbsp; // We know that we have a present DataManipulator and it's
                             * supported<br />&nbsp; &nbsp;
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
                             * <code>null</code> {@link ValueContainer}.</p>
                             */
                            // @ts-ignore
                             get(containerClass: java.lang.Class): java.util.Optional;
                            /**
                             * Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible.
                             * <p>If the container class is not supported or
                             * available, {@link NoSuchElementException} will be thrown.</p>
                             */
                            // @ts-ignore
                             require(containerClass: java.lang.Class): org.spongepowered.api.data.value.ValueContainer;
                            /**
                             * <p>Gets the desired {@link ValueContainer} of type <code>H</code> if the
                             * {@link ValueContainer} is compatible. If insufficient data is available
                             * to provide a {@link ValueContainer} with all {@link Value}s preset, a
                             * new instance of the {@link ValueContainer} is returned with "default"
                             * values. Since the return type is an {@link Optional}, a short way of
                             * checking compatibility and presence of the requested data is to mimic
                             * the following:</p>
                             * <blockquote><code>// MyCompositeValueStore extends
                             * CompositeValueStore&lt;MyCompositeValueStore,
                             * DataManipulator&lt;?&gt;&gt;<br />
                             * MyCompositeValueStore valueStore;<br />
                             * final Optional&lt;DisplayNameData&gt; displayOptional =
                             * valueStore.getOrCreate(DisplayNameData.class);<br />
                             * if (displayOptional.isPresent()) {<br />
                             * &nbsp; &nbsp; // We know that we have a present DataManipulator and it's
                             * supported<br />&nbsp; &nbsp;
                             * System.out.println(displayOptional.get().displayName().get().toString()
                             * );<br />}</code></blockquote>
                             * <p>This is the equivalent to performing the following:</p>
                             * <blockquote><code>MyCompositeValueStore valueStore;<br />
                             * if (valueStore.supports(DisplayNameData.class)) {<br />&nbsp; &nbsp;
                             * System.out.println(valueStore.get(DisplayNameData.class
                             * ).get().displayName().get().toString());<br />}</code></blockquote>
                             * <p>The advantage of this returning an {@link Optional} is that the
                             * {@link ValueContainer} may be unsupported, the required data missing
                             * and ignoring the possibility of {@code null}s, it is a guarantee that if
                             * the {@link Optional#isPresent()} is {@code true}, the
                             * {@link ValueContainer} not only is supported, but some default values
                             * can be generated to create the desired {@link ValueContainer}.</p>
                             * <p>If it is necessary to ignore the {@link Optional},
                             * {@link Optional#orElse(Object)} can be used to return a potentially
                             * <code>null</code> {@link ValueContainer}.</p>
                             */
                            // @ts-ignore
                             getOrCreate(containerClass: java.lang.Class): java.util.Optional;
                            /**
                             * Checks if the given {@link Class} of type {@link ValueContainer} is
                             * supported by this {@link CompositeValueStore}.
                             */
                            // @ts-ignore
                             supports(holderClass: java.lang.Class): boolean;
                            /**
                             * Applies a transformation on the provided {@link BaseValue} such that
                             * the return value of {@link Function#apply(Object)} will become the end
                             * resulting value set into this {@link CompositeValueStore}. It is not
                             * necessary that the input is actually present, in which case the
                             * {@link Key}ed data is compatible, but not necessarily present. Writing
                             * a {@link Function} to properly handle the potential for a null input
                             * is required for this method to execute without exception.
                             */
                            // @ts-ignore
                             transform(key: org.spongepowered.api.data.key.Key, func: java.util.function$.Function): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that a {@link DataTransactionResult} is returned for any
                             * successful, rejected, and replaced {@link BaseValue}s from this
                             * {@link CompositeValueStore}.
                             */
                            // @ts-ignore
                             offer(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@link BaseValue} as defined by the provided
                             * {@link Key} such that a {@link DataTransactionResult} is returned for
                             * any successful, rejected, and replaced {@link BaseValue}s from this
                             * {@link CompositeValueStore}.
                             */
                            // @ts-ignore
                             offer(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. The end result of the values
                             * successfully offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}.
                             */
                            // @ts-ignore
                             offer(valueContainer: org.spongepowered.api.data.value.ValueContainer): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. The end result of the values
                             * successfully offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}. Any overlaps of data are merged via
                             * the {@link MergeFunction}.
                             */
                            // @ts-ignore
                             offer(valueContainer: org.spongepowered.api.data.value.ValueContainer, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers all provided {@link ValueContainer}s to this
                             * {@link CompositeValueStore} much like {@link #offer(ValueContainer)}
                             * except all in a single batch. The end result of the values successfully
                             * offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}.
                             */
                            // @ts-ignore
                             offer(valueContainers: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers all provided {@link ValueContainer}s to this
                             * {@link CompositeValueStore} much like {@link #offer(ValueContainer)}
                             * except all in a single batch. The end result of the values successfully
                             * offered, rejected, and replaced are stored in the returned
                             * {@link DataTransactionResult}. Any merge conflicts are resolved through
                             * the {@link MergeFunction}.
                             */
                            // @ts-ignore
                             offer(valueContainers: java.lang.Iterable, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that a {@link DataTransactionResult} is returned for any
                             * successful {@link BaseValue}s from this {@link CompositeValueStore}.
                             * Intentionally, however, this differs from {@link #offer(Key, Object)}
                             * as it will intentionally throw an exception if the result was a failure.
                             */
                            // @ts-ignore
                             tryOffer(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@code value} as defined by the provided {@link Key}
                             * such that a {@link DataTransactionResult} is returned for any
                             * successful {@link BaseValue}s from this {@link CompositeValueStore}.
                             * Intentionally, however, this differs from {@link #offer(Key, Object)}
                             * as it will intentionally throw an exception if the result was a failure.
                             */
                            // @ts-ignore
                             tryOffer(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. Intentionally, however, this differs
                             * from {@link #offer(ValueContainer)} as it will intentionally throw an
                             * exception if the result was a failure.
                             */
                            // @ts-ignore
                             tryOffer(valueContainer: org.spongepowered.api.data.value.ValueContainer): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Offers the given {@link ValueContainer} such that all of the available
                             * {@link BaseValue}s from the given {@link ValueContainer} are offered
                             * to this {@link CompositeValueStore}. Any overlaps of data are merged via
                             * the {@link MergeFunction}. Intentionally, however, this differs
                             * from {@link #offer(ValueContainer)} as it will intentionally throw an
                             * exception if the result was a failure.
                             */
                            // @ts-ignore
                             tryOffer(valueContainer: org.spongepowered.api.data.value.ValueContainer, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Attempts to remove all {@link Value}s associated with the class of the
                             * provided {@link ValueContainer} class. All values that were successfully
                             * removed will be provided in
                             * {@link DataTransactionResult#getReplacedData()}. If the data can not be
                             * removed, the result will be an expected
                             * {@link org.spongepowered.api.data.DataTransactionResult.Type#FAILURE}.
                             */
                            // @ts-ignore
                             remove(containerClass: java.lang.Class): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Attempts to remove the provided {@link BaseValue}. All values that were
                             * successfully removed will be provided in
                             * {@link DataTransactionResult#getReplacedData()}. If the data can not be
                             * removed, the result will be an expected
                             * {@link org.spongepowered.api.data.DataTransactionResult.Type#FAILURE}.
                             */
                            // @ts-ignore
                             remove(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Attempts to remove the data associated with the provided {@link Key}.
                             * All values that were successfully removed will be provided in
                             * {@link DataTransactionResult#getReplacedData()}. If the data can not be
                             * removed, the result will be an expected
                             * {@link org.spongepowered.api.data.DataTransactionResult.Type#FAILURE}.
                             */
                            // @ts-ignore
                             remove(key: org.spongepowered.api.data.key.Key): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Attempts to "revert" a {@link DataTransactionResult} such that any
                             * of the {@link DataTransactionResult#getReplacedData()} are offered
                             * back, and any {@link DataTransactionResult#getSuccessfulData()} are
                             * removed if they were not the same types as any exising in the
                             * replaced values.
                             */
                            // @ts-ignore
                             undo(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Performs an absolute copy of all {@link Value}s and
                             * {@link ValueContainer}s to this {@link CompositeValueStore} such that
                             * any overlapping {@link Value}s are offered for replacement. The
                             * result is provided as a {@link DataTransactionResult}.
                             */
                            // @ts-ignore
                             copyFrom(that: org.spongepowered.api.data.value.mutable.CompositeValueStore): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Performs an absolute copy of all {@link Value}s and
                             * {@link ValueContainer}s to this {@link CompositeValueStore} such that
                             * any overlapping {@link Value}s are offered for replacement. The
                             * result is provided as a {@link DataTransactionResult}.
                             */
                            // @ts-ignore
                             copyFrom(that: org.spongepowered.api.data.value.mutable.CompositeValueStore, func: org.spongepowered.api.data.merge.MergeFunction): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Gets an copied collection of all known {@link ValueContainer}s
                             * belonging to this {@link CompositeValueStore}. An individual
                             * {@link ValueContainer} can be used for data processing for various
                             * purposes.
                             */
                            // @ts-ignore
                             getContainers(): java.util.Collection;
                        }
                    }
                }
            }
        }
    }
}
