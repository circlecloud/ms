declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class DataAlreadyRegisteredException extends org.spongepowered.api.data.DataException {
                    /**
                     * Constructs a new data already registered exception.
                     */
                    constructor(manipulatorClass: any, immutableManipulatorClass: any, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Constructs a new data already registered exception with a message.
                     */
                    constructor(message: string, manipulatorClass: any, immutableManipulatorClass: any, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Constructs a new data already registered exception with a message and
                     * a throwable cause.
                     */
                    constructor(message: string, cause: any, manipulatorClass: any, immutableManipulatorClass: any, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Constructs a new data already registered exception with
                     * a throwable cause.
                     */
                    constructor(cause: any, manipulatorClass: any, immutableManipulatorClass: any, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder)
                    /**
                     * Gets the related data manipulator class.
                     */
                    // @ts-ignore
                    public getManipulatorClass(): any;
                    /**
                     * Gets the related immutable data manipulator class.
                     */
                    // @ts-ignore
                    public getImmutableManipulatorClass(): any;
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
