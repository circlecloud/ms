declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class DataAlreadyRegisteredException extends org.spongepowered.api.data.DataException {
                    /**
                     * Constructs a new data already registered exception.
                     */
                    // @ts-ignore
                    constructor(manipulatorClass: java.lang.Class, immutableManipulatorClass: java.lang.Class, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Constructs a new data already registered exception with a message.
                     */
                    // @ts-ignore
                    constructor(message: string, manipulatorClass: java.lang.Class, immutableManipulatorClass: java.lang.Class, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Constructs a new data already registered exception with a message and
                     * a throwable cause.
                     */
                    // @ts-ignore
                    constructor(message: string, cause: java.lang.Throwable, manipulatorClass: java.lang.Class, immutableManipulatorClass: java.lang.Class, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Constructs a new data already registered exception with
                     * a throwable cause.
                     */
                    // @ts-ignore
                    constructor(cause: java.lang.Throwable, manipulatorClass: java.lang.Class, immutableManipulatorClass: java.lang.Class, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Gets the related data manipulator class.
                     */
                    // @ts-ignore
                    public getManipulatorClass(): java.lang.Class;
                    /**
                     * Gets the related immutable data manipulator class.
                     */
                    // @ts-ignore
                    public getImmutableManipulatorClass(): java.lang.Class;
                    /**
                     * Gets the related data manipulator builder.
                     */
                    // @ts-ignore
                    public getBuilder(): org.spongepowered.api.data.manipulator.DataManipulatorBuilder;
                }
            }
        }
    }
}
