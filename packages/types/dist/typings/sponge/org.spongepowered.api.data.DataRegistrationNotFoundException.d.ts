// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class DataRegistrationNotFoundException extends org.spongepowered.api.data.DataException {
                    /**
                     * Constructs a basic data registration not found exception.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a data registration not found exception with a specified
                     * registration query, which will be used as the message.
                     */
                    // @ts-ignore
                    constructor(registrationQuery: string)
                    /**
                     * Constructs a data registration not found exception with a specified
                     * message and registration query.
                     */
                    // @ts-ignore
                    constructor(message: string, registrationQuery: string)
                    /**
                     * Constructs a data registration not found exception with a message and a
                     * specified data manipulator class.
                     */
                    // @ts-ignore
                    constructor(message: string, manipulatorClass: java.lang.Class)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * a throwable cause, and a specified data manipulator class.
                     */
                    // @ts-ignore
                    constructor(message: string, cause: java.lang.Throwable, manipulatorClass: java.lang.Class)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * an immutable data manipulator class, and a mutable
                     * data manipulator class.
                     */
                    // @ts-ignore
                    constructor(message: string, manipulatorClass: java.lang.Class, immutableClass: java.lang.Class)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * a throwable cause, an immutable data manipulator class,
                     * and a mutable data manipulator class.
                     */
                    // @ts-ignore
                    constructor(message: string, cause: java.lang.Throwable, manipulatorClass: java.lang.Class, immutableClass: java.lang.Class)
                    /**
                     * Gets the specified registration query, if present.
                     */
                    // @ts-ignore
                    public getRegistrationQuery(): string;
                    /**
                     * Gets the data manipulator class, if present.
                     */
                    // @ts-ignore
                    public getManipulatorClass(): java.lang.Class;
                    /**
                     * Gets the immutable data manipulator class, if present.
                     */
                    // @ts-ignore
                    public getImmutableClass(): java.lang.Class;
                }
            }
        }
    }
}
