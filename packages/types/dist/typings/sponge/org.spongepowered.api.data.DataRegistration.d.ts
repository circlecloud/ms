// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface DataRegistration extends org.spongepowered.api.CatalogType {
                    /**
                     * Creates a new {@link Builder} to build a {@link DataRegistration}.
                     * Through the use of generics, this can be duck-typed to the generics of
                     * the desired {@link DataManipulator} type to be registered.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.data.DataRegistration.Builder;
                    /**
                     * Gets the {@link DataManipulator} class for this registration.
                     */
                    // @ts-ignore
                     getManipulatorClass(): java.lang.Class;
                    /**
                     * Gets the implementing class of the {@link DataManipulator} for this
                     * registration.
                     */
                    // @ts-ignore
                     getImplementationClass(): java.lang.Class;
                    /**
                     * Gets the {@link ImmutableDataManipulator} class for this registration.
                     */
                    // @ts-ignore
                     getImmutableManipulatorClass(): java.lang.Class;
                    /**
                     * Gets the implementing class of the {@link ImmutableDataManipulator} for
                     * this registration.
                     */
                    // @ts-ignore
                     getImmutableImplementationClass(): java.lang.Class;
                    /**
                     * Gets the {@link DataManipulatorBuilder} registered for this registration.
                     */
                    // @ts-ignore
                     getDataManipulatorBuilder(): org.spongepowered.api.data.manipulator.DataManipulatorBuilder;
                    /**
                     * Gets the owning {@link PluginContainer}.
                     */
                    // @ts-ignore
                     getPluginContainer(): org.spongepowered.api.plugin.PluginContainer;
                    // @ts-ignore
                     getId(): string;
                    // @ts-ignore
                     getName(): string;
                }
            }
        }
    }
}
