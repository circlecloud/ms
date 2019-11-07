declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
            abstract class RemoteObject extends java.lang.Object {
                /**
                 * Creates a remote object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a remote object, initialized with the specified remote
                 * reference.
                 */
                // @ts-ignore
                constructor(newref: java.rmi.server.RemoteRef)
                // @ts-ignore
                protected ref: java.rmi.server.RemoteRef;
                /**
                 * Returns the remote reference for the remote object.
                 * <p>Note: The object returned from this method may be an instance of
                 * an implementation-specific class.  The <code>RemoteObject</code>
                 * class ensures serialization portability of its instances' remote
                 * references through the behavior of its custom
                 * <code>writeObject</code> and <code>readObject</code> methods.  An
                 * instance of <code>RemoteRef</code> should not be serialized outside
                 * of its <code>RemoteObject</code> wrapper instance or the result may
                 * be unportable.
                 */
                // @ts-ignore
                public getRef(): java.rmi.server.RemoteRef;
                /**
                 * Returns the stub for the remote object <code>obj</code> passed
                 * as a parameter. This operation is only valid <i>after</i>
                 * the object has been exported.
                 */
                // @ts-ignore
                public static toStub(obj: java.rmi.Remote): java.rmi.Remote;
                /**
                 * Returns a hashcode for a remote object.  Two remote object stubs
                 * that refer to the same remote object will have the same hash code
                 * (in order to support remote objects as keys in hash tables).
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Compares two remote objects for equality.
                 * Returns a boolean that indicates whether this remote object is
                 * equivalent to the specified Object. This method is used when a
                 * remote object is stored in a hashtable.
                 * If the specified Object is not itself an instance of RemoteObject,
                 * then this method delegates by returning the result of invoking the
                 * <code>equals</code> method of its parameter with this remote object
                 * as the argument.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a String that represents the value of this remote object.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
