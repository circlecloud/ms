// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
             class ActivationID extends java.lang.Object {
                /**
                 * The constructor for <code>ActivationID</code> takes a single
                 * argument, activator, that specifies a remote reference to the
                 * activator responsible for activating the object associated with
                 * this identifier. An instance of <code>ActivationID</code> is globally
                 * unique.
                 */
                // @ts-ignore
                constructor(activator: java.rmi.activation.Activator)
                /**
                 * Activate the object for this id.
                 */
                // @ts-ignore
                public activate(force: boolean): java.rmi.Remote;
                /**
                 * Returns a hashcode for the activation id.  Two identifiers that
                 * refer to the same remote object will have the same hash code.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Compares two activation ids for content equality.
                 * Returns true if both of the following conditions are true:
                 * 1) the unique identifiers equivalent (by content), and
                 * 2) the activator specified in each identifier
                 * refers to the same remote object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
