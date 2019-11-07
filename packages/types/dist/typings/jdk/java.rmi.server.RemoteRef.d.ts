// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            interface RemoteRef {
                // @ts-ignore
                 serialVersionUID: number;
                // @ts-ignore
                 packagePrefix: string;
                /**
                 * Invoke a method. This form of delegating method invocation
                 * to the reference allows the reference to take care of
                 * setting up the connection to the remote host, marshaling
                 * some representation for the method and parameters, then
                 * communicating the method invocation to the remote host.
                 * This method either returns the result of a method invocation
                 * on the remote object which resides on the remote host or
                 * throws a RemoteException if the call failed or an
                 * application-level exception if the remote invocation throws
                 * an exception.
                 */
                // @ts-ignore
                 invoke(obj: java.rmi.Remote, method: java.lang.reflect.Method, params: java.lang.Object, opnum: number): java.lang.Object;
                /**
                 * Creates an appropriate call object for a new remote method
                 * invocation on this object.  Passing operation array and index,
                 * allows the stubs generator to assign the operation indexes and
                 * interpret them. The remote reference may need the operation to
                 * encode in the call.
                 */
                // @ts-ignore
                 newCall(obj: java.rmi.server.RemoteObject, op: java.rmi.server.Operation, opnum: number, hash: number): java.rmi.server.RemoteCall;
                /**
                 * Executes the remote call.
                 * Invoke will raise any "user" exceptions which
                 * should pass through and not be caught by the stub.  If any
                 * exception is raised during the remote invocation, invoke should
                 * take care of cleaning up the connection before raising the
                 * "user" or remote exception.
                 */
                // @ts-ignore
                 invoke(call: java.rmi.server.RemoteCall): void;
                /**
                 * Allows the remote reference to clean up (or reuse) the connection.
                 * Done should only be called if the invoke returns successfully
                 * (non-exceptionally) to the stub.
                 */
                // @ts-ignore
                 done(call: java.rmi.server.RemoteCall): void;
                /**
                 * Returns the class name of the ref type to be serialized onto
                 * the stream 'out'.
                 */
                // @ts-ignore
                 getRefClass(out: java.io.ObjectOutput): string;
                /**
                 * Returns a hashcode for a remote object.  Two remote object stubs
                 * that refer to the same remote object will have the same hash code
                 * (in order to support remote objects as keys in hash tables).
                 */
                // @ts-ignore
                 remoteHashCode(): number;
                /**
                 * Compares two remote objects for equality.
                 * Returns a boolean that indicates whether this remote object is
                 * equivalent to the specified Object. This method is used when a
                 * remote object is stored in a hashtable.
                 */
                // @ts-ignore
                 remoteEquals(obj: java.rmi.server.RemoteRef): boolean;
                /**
                 * Returns a String that represents the reference of this remote
                 * object.
                 */
                // @ts-ignore
                 remoteToString(): string;
            }
        }
    }
}
