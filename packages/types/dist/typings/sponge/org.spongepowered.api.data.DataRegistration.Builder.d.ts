declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace DataRegistration {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.CatalogBuilder {
                        /**
                         * Sets the {@link DataManipulator} class to be used. For the sake of
                         * generics, this method must be called prior to
                         * {@link #immutableClass(Class)} to properly infer generic usage
                         * by the compiler and at runtime.
                         */
                        // @ts-ignore
                         dataClass(manipulatorClass: java.lang.Class): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Sets the immutable class. <strong>THIS MUST BE CALLED AFTER
                         * {@link #dataClass(Class)}!</strong>
                         */
                        // @ts-ignore
                         immutableClass(immutableDataClass: java.lang.Class): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Optionally sets a separate implementation class for the
                         * {@link DataManipulator}. <strong>THIS MUST BE CALLED AFTER
                         * {@link #dataClass(Class)}!</strong>
                         */
                        // @ts-ignore
                         dataImplementation(dataImplementationClass: java.lang.Class): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Optionally sets a separate implementation class for the
                         * {@link ImmutableDataManipulator}. <strong>THIS MUST BE CALLED AFTER
                         * {@link #dataClass(Class)}!</strong>
                         */
                        // @ts-ignore
                         immutableImplementation(immutableImplementationClass: java.lang.Class): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Sets the id for the manipulator. The id should be formatted
                         * according to the normal {@link CatalogType} standard:
                         * <code>&#123;manipulator-id&#124;</code> since the
                         * <code>&quot;pluginid&quot;</code>
                         * is gathered from {@link #buildAndRegister(PluginContainer)} provided
                         * {@link PluginContainer}.
                         * <p>The importance of the id is that the id is what will be used for
                         * serialization and deserialization of custom plugin provided data,
                         * such that if the string changes, or a plugin is no longer available
                         * to register the data, the custom data being deserialized will not be
                         * available through the system, and may be lost.</p>
                         */
                        // @ts-ignore
                         manipulatorId(id: string): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Sets a more generalized name to refer to the registered
                         * {@link DataManipulator} as a common name.
                         * <p>As an example: if I have a DummyTestData, a name could be "Dummy".
                         * </p>
                         */
                        // @ts-ignore
                         dataName(name: string): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Sets the {@link DataManipulatorBuilder} to be used to generate new
                         * {@link DataManipulator DataManipulators} and
                         * {@link ImmutableDataManipulator ImmutableDataManipulators}.
                         */
                        // @ts-ignore
                         builder(builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Since {@link DataRegistration} objects should be considered
                         * singletons in that the data registered upon creation is already
                         * preformed, creating a new {@link DataRegistration} will always
                         * fail.
                         */
                        // @ts-ignore
                         from(value: org.spongepowered.api.data.DataRegistration): org.spongepowered.api.data.DataRegistration.Builder;
                        // @ts-ignore
                         reset(): org.spongepowered.api.data.DataRegistration.Builder;
                        /**
                         * Registers all of the objects for the provided {@link DataRegistration}
                         * object, including the registration's
                         * {@link DataRegistration#getManipulatorClass()} for the
                         * {@link DataManipulator} and
                         * {@link DataRegistration#getImmutableManipulatorClass()}
                         * and {@link DataRegistration#getDataManipulatorBuilder()} object. More
                         * importantly, this also allows the proper identification of the
                         * {@link DataManipulator} itself by the provided
                         * {@link DataRegistration#getId()},
                         * which, much like {@link CatalogType#getId()} is formatted with
                         * <code>&#123;plugin-id&#124;&#58;&#123;manipulator-id&#124;</code>.
                         * <p>It is expected that as the required {@link PluginContainer} is used
                         * is not a default container from Sponge. The
                         * {@link PluginContainer#getId()} is utilized to generate the final
                         * {@link DataRegistration#getId()} for serialization purposes.</p>
                         */
                        // @ts-ignore
                         buildAndRegister(container: org.spongepowered.api.plugin.PluginContainer): org.spongepowered.api.data.DataRegistration;
                        /**
                         * {@inheritDoc}
                         * All of the objects for the provided {@link DataRegistration}
                         * object, including the registration's
                         * {@link DataRegistration#getManipulatorClass()} for the
                         * {@link DataManipulator} and
                         * {@link DataRegistration#getImmutableManipulatorClass()}
                         * and {@link DataRegistration#getDataManipulatorBuilder()}
                         * object will also be registered.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.data.DataRegistration;
                    }
                }
            }
        }
    }
}
