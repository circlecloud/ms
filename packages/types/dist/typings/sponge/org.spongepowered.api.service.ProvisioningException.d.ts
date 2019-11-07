// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                // @ts-ignore
                 class ProvisioningException extends java.lang.RuntimeException {
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service.
                     */
                    // @ts-ignore
                    constructor(service: java.lang.Class)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified message.
                     */
                    // @ts-ignore
                    constructor(message: string, service: java.lang.Class)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified service and cause.
                     */
                    // @ts-ignore
                    constructor(message: string, cause: java.lang.Throwable, service: java.lang.Class)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified cause and a null message.
                     */
                    // @ts-ignore
                    constructor(cause: java.lang.Throwable, service: java.lang.Class)
                    /**
                     * Gets the service that was requested.
                     */
                    // @ts-ignore
                    public getService(): java.lang.Class;
                }
            }
        }
    }
}
