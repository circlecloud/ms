// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface Skeleton {
                /**
                 * Unmarshals arguments, calls the actual remote object implementation,
                 * and marshals the return value or any exception.
                 */
                // @ts-ignore
                 dispatch(obj: java.rmi.Remote, theCall: java.rmi.server.RemoteCall, opnum: number, hash: number): void;
                /**
                 * Returns the operations supported by the skeleton.
                 */
                // @ts-ignore
                 getOperations(): java.rmi.server.Operation[];
            }
        }
    }
}
