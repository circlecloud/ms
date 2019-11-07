declare namespace java {
    namespace rmi {
        namespace activation {
            // @ts-ignore
             class ActivationGroupID extends java.lang.Object {
                /**
                 * Constructs a unique group id.
                 */
                // @ts-ignore
                constructor(system: java.rmi.activation.ActivationSystem)
                /**
                 * Returns the group's activation system.
                 */
                // @ts-ignore
                public getSystem(): java.rmi.activation.ActivationSystem;
                /**
                 * Returns a hashcode for the group's identifier.  Two group
                 * identifiers that refer to the same remote group will have the
                 * same hash code.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Compares two group identifiers for content equality.
                 * Returns true if both of the following conditions are true:
                 * 1) the unique identifiers are equivalent (by content), and
                 * 2) the activation system specified in each
                 * refers to the same remote object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
