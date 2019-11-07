// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace registry {
            // @ts-ignore
            interface RegistryHandler {
                /**
                 * Returns a "stub" for contacting a remote registry
                 * on the specified host and port.
                 */
                // @ts-ignore
                 registryStub(host: string, port: number): java.rmi.registry.Registry;
                /**
                 * Constructs and exports a Registry on the specified port.
                 * The port must be non-zero.
                 */
                // @ts-ignore
                 registryImpl(port: number): java.rmi.registry.Registry;
            }
        }
    }
}
