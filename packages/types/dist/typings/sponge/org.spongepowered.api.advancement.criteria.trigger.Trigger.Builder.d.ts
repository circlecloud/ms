// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace trigger {
                        namespace Trigger {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a {@link DataSerializable}. The configuration will be constructed
                                 * using the {@link DataBuilder} that is registered for
                                 * the {@link DataSerializable}.
                                 */
                                // @ts-ignore
                                 dataSerializableConfig(dataConfigClass: java.lang.Class): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a config serializable. This configuration will be constructed
                                 * using Configurate (with {@link TypeSerializer}s).
                                 */
                                // @ts-ignore
                                 typeSerializableConfig(configClass: java.lang.Class): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a config serializable. This configuration will be constructed using
                                 * Configurate (with {@link TypeSerializer}s) with a
                                 * specific {@link TypeSerializerCollection} instead of the global one.
                                 */
                                // @ts-ignore
                                 typeSerializableConfig(configClass: java.lang.Class, typeSerializerCollection: any /*TypeSerializerCollection*/): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a json serializable. This configuration will be constructed using
                                 * the provided {@link Gson} instance.
                                 */
                                // @ts-ignore
                                 jsonSerializableConfig(configClass: java.lang.Class, gson: any /*Gson*/): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a json serializable. This configuration will be constructed using
                                 * the default {@link Gson} instance.
                                 */
                                // @ts-ignore
                                 jsonSerializableConfig(configClass: java.lang.Class): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} to use
                                 * {@link FilteredTriggerConfiguration.Empty}.
                                 */
                                // @ts-ignore
                                 emptyConfig(): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Adds the {@link Consumer} to handle the triggers. If no handler is
                                 * provided then will the result of the trigger always be {@code true},
                                 * which results in triggering the {@link Criterion}.
                                 * <p>The {@link Cause} of the event should be used to determine
                                 * whether the configuration matches the requirements to trigger
                                 * the criterion.</p>
                                 */
                                // @ts-ignore
                                 listener(eventListener: java.util.function$.Consumer): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Sets the identifier of the {@link Trigger}
                                 * (without the namespace).
                                 */
                                // @ts-ignore
                                 id(id: string): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Sets the name of the {@link Trigger}. Defaults
                                 * to the identifier ({@link #id(String)}).
                                 */
                                // @ts-ignore
                                 name(name: string): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                                /**
                                 * Builds a {@link Trigger}.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.advancement.criteria.trigger.Trigger;
                                // @ts-ignore
                                 from(value: org.spongepowered.api.advancement.criteria.trigger.Trigger): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                            }
                        }
                    }
                }
            }
        }
    }
}
