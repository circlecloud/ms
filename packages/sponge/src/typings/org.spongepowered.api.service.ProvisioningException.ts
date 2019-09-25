declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                // @ts-ignore
                 class ProvisioningException {
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service.
                     */
                    constructor(service: any)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified message.
                     */
                    constructor(message: string, service: any)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified service and cause.
                     */
                    constructor(message: string, cause: any, service: any)
                    /**
                     * Constructs a new {@link ProvisioningException} for the specified service with
                     * the specified cause and a null message.
                     */
                    constructor(cause: any, service: any)
                    /**
                     * Gets the service that was requested.
                     */
                    // @ts-ignore
                    public getService(): any;
                }
            }
        }
    }
}
