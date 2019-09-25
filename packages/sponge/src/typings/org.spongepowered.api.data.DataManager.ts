declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface DataManager {
                    /**
                     * Registers a {@link DataBuilder} that will dynamically build
                     * the given {@link DataSerializable} from a {@link DataContainer}.
                     * <p>Builders may not always exist for a given {@link DataSerializable},
                     * nor is it guaranteed that a provided builder will function with all
                     * {@link DataContainer}s.
                     * </p>
                     */
                    // @ts-ignore
                     registerBuilder(clazz: any, builder: org.spongepowered.api.data.persistence.DataBuilder): void;
                    /**
                     * Registers a {@link DataContentUpdater} for the desired
                     * {@link DataSerializable} such that any versioned data may be updated to
                     * newer versions for the most up to date {@link DataBuilder}.
                     */
                    // @ts-ignore
                     registerContentUpdater(clazz: any, updater: org.spongepowered.api.data.persistence.DataContentUpdater): void;
                    /**
                     * Gets a wrapped fake {@link DataContentUpdater} that may wrap several
                     * {@link DataContentUpdater}s to translate versioned data from the desired
                     * {@code fromVersion} to the {@code toVersion}. If the version jump is too
                     * great or a {@link DataContentUpdater} has not been registered to cover
                     * the complete jump, {@link Optional#empty()} may be returned.
                     */
                    // @ts-ignore
                     getWrappedContentUpdater(clazz: any, fromVersion: number, toVersion: number): any;
                    /**
                     * Attempts to retrieve the {@link DataBuilder} for the desired
                     * {@link DataSerializable} class.
                     * <p>Builders may not always exist for a given {@link DataSerializable},
                     * nor is it guaranteed that a provided builder will function with all
                     * {@link DataContainer}s.</p>
                     */
                    // @ts-ignore
                     getBuilder(clazz: any): any;
                    /**
                     * Attempts to translate an instance of the {@link DataSerializable} from
                     * the provided {@link DataView}. If there is no {@link DataBuilder}
                     * registered for the provided {@link DataSerializable}, then
                     * {@link Optional#empty()} may be returned.
                     */
                    // @ts-ignore
                     deserialize(clazz: any, dataView: org.spongepowered.api.data.DataView): any;
                    /**
                     * Registers the given {@link ImmutableDataHolder} class with it's
                     * associated {@link ImmutableDataBuilder}. The builder can be used to
                     * create new instances of the given {@link ImmutableDataHolder} for data
                     * retrieval, data representation, etc.
                     */
                    // @ts-ignore
                     register(holderClass: any, builder: org.spongepowered.api.data.ImmutableDataBuilder): void;
                    /**
                     * Registers a legacy {@code id} that is used by a previous version of
                     * {@link DataRegistration} from a plugin such that the custom data can
                     * be retained, while not being lost.
                     */
                    // @ts-ignore
                     registerLegacyManipulatorIds(legacyId: string, registration: org.spongepowered.api.data.DataRegistration): void;
                    /**
                     * Attempts to retrieve the builder for the given
                     * {@link ImmutableDataHolder}.
                     * <p>If the {@link ImmutableDataHolder} was not registered, multiple
                     * systems could fail to retrieve specific data.</p>
                     */
                    // @ts-ignore
                     getImmutableBuilder(holderClass: any): any;
                    /**
                     * Attempts to retrieve the builder for the given {@link DataManipulator}.
                     * <p>If the {@link DataManipulator} was not registered, multiple systems
                     * could fail to retrieve specific data.</p>
                     */
                    // @ts-ignore
                     getManipulatorBuilder(manipulatorClass: any): any;
                    /**
                     * Attempts to retrieve the builder for the given
                     * {@link ImmutableDataManipulator}.
                     * <p>If the {@link ImmutableDataManipulator} was not registered, multiple
                     * systems could fail to retrieve specific data.</p>
                     */
                    // @ts-ignore
                     getImmutableManipulatorBuilder(immutableManipulatorClass: any): any;
                    /**
                     * Registers a {@link DataTranslator} for the desired class.
                     */
                    // @ts-ignore
                     registerTranslator(objectClass: any, translator: org.spongepowered.api.data.persistence.DataTranslator): void;
                    /**
                     * Gets the desired {@link DataTranslator} for the provided class.
                     */
                    // @ts-ignore
                     getTranslator(objectClass: any): any;
                    /**
                     * Gets all {@link Class}es of all {@link DataManipulator}s registered for
                     * the provided {@link PluginContainer}. The provided {@link Collection} is
                     * considered immutable and can not be modified.
                     */
                    // @ts-ignore
                     getAllRegistrationsFor(container: org.spongepowered.api.plugin.PluginContainer): any[] /*java.util.Collection*/;
                    /**
                     * Creates a new {@link DataContainer} with a default
                     * {@link org.spongepowered.api.data.DataView.SafetyMode} of
                     * {@link org.spongepowered.api.data.DataView.SafetyMode#ALL_DATA_CLONED}.
                     */
                    // @ts-ignore
                     createContainer(): org.spongepowered.api.data.DataContainer;
                    /**
                     * Creates a new {@link DataContainer} with the provided
                     * {@link org.spongepowered.api.data.DataView.SafetyMode}.
                     */
                    // @ts-ignore
                     createContainer(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer;
                }
            }
        }
    }
}
