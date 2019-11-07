// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface Unreferenced {
                /**
                 * Called by the RMI runtime sometime after the runtime determines that
                 * the reference list, the list of clients referencing the remote object,
                 * becomes empty.
                 */
                // @ts-ignore
                 unreferenced(): void;
            }
        }
    }
}
