declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class DataRegistrationNotFoundException extends org.spongepowered.api.data.DataException {
                    /**
                     * Constructs a basic data registration not found exception.
                     */
                    constructor()
                    /**
                     * Constructs a data registration not found exception with a specified
                     * registration query, which will be used as the message.
                     */
                    constructor(registrationQuery: string)
                    /**
                     * Constructs a data registration not found exception with a specified
                     * message and registration query.
                     */
                    constructor(message: string, registrationQuery: string)
                    /**
                     * Constructs a data registration not found exception with a message and a
                     * specified data manipulator class.
                     */
                    constructor(message: string, manipulatorClass: any)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * a throwable cause, and a specified data manipulator class.
                     */
                    constructor(message: string, cause: any, manipulatorClass: any)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * an immutable data manipulator class, and a mutable
                     * data manipulator class.
                     */
                    constructor(message: string, manipulatorClass: any, immutableClass: any)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * a throwable cause, an immutable data manipulator class,
                     * and a mutable data manipulator class.
                     */
                    constructor(message: string, cause: any, manipulatorClass: any, immutableClass: any)
                    /**
                     * Gets the specified registration query, if present.
                     */
                    // @ts-ignore
                    public getRegistrationQuery(): string;
                    /**
                     * Gets the data manipulator class, if present.
                     */
                    // @ts-ignore
                    public getManipulatorClass(): any;
                    /**
                     * Gets the immutable data manipulator class, if present.
                     */
                    // @ts-ignore
                    public getImmutableClass(): any;
                }
            }
        }
    }
}
