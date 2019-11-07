// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace RenderingHints {
            // @ts-ignore
            abstract class Key extends java.lang.Object {
                /**
                 * Construct a key using the indicated private key.  Each
                 * subclass of Key maintains its own unique domain of integer
                 * keys.  No two objects with the same integer key and of the
                 * same specific subclass can be constructed.  An exception
                 * will be thrown if an attempt is made to construct another
                 * object of a given class with the same integer key as a
                 * pre-existing instance of that subclass of Key.
                 */
                // @ts-ignore
                constructor(privatekey: number)
                /**
                 * Returns true if the specified object is a valid value
                 * for this Key.
                 */
                // @ts-ignore
                public abstract isCompatibleValue(val: java.lang.Object): boolean;
                /**
                 * Returns the private integer key that the subclass
                 * instantiated this Key with.
                 */
                // @ts-ignore
                protected intKey(): number;
                /**
                 * The hash code for all Key objects will be the same as the
                 * system identity code of the object as defined by the
                 * System.identityHashCode() method.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * The equals method for all Key objects will return the same
                 * result as the equality operator '=='.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
            }
        }
    }
}
