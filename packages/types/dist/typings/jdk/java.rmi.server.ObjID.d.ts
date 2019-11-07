// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
             class ObjID extends java.lang.Object {
                /**
                 * Generates a unique object identifier.
                 * <p>If the system property <code>java.rmi.server.randomIDs</code>
                 * is defined to equal the string <code>"true"</code> (case insensitive),
                 * then this constructor will use a cryptographically
                 * strong random number generator to choose the object number of the
                 * returned <code>ObjID</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a "well-known" object identifier.
                 * <p>An <code>ObjID</code> created via this constructor will not
                 * clash with any <code>ObjID</code>s generated via the no-arg
                 * constructor.
                 */
                // @ts-ignore
                constructor(objNum: number)
                // @ts-ignore
                public static REGISTRY_ID: number;
                // @ts-ignore
                public static ACTIVATOR_ID: number;
                // @ts-ignore
                public static DGC_ID: number;
                /**
                 * Marshals a binary representation of this <code>ObjID</code> to
                 * an <code>ObjectOutput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link ObjectOutput#writeLong(long)} method with this object
                 * identifier's object number, and then it writes its address
                 * space identifier by invoking its {@link UID#write(DataOutput)}
                 * method with the stream.
                 */
                // @ts-ignore
                public write(out: java.io.ObjectOutput): void;
                /**
                 * Constructs and returns a new <code>ObjID</code> instance by
                 * unmarshalling a binary representation from an
                 * <code>ObjectInput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link ObjectInput#readLong()} method to read an object number,
                 * then it invokes {@link UID#read(DataInput)} with the
                 * stream to read an address space identifier, and then it
                 * creates and returns a new <code>ObjID</code> instance that
                 * contains the object number and address space identifier that
                 * were read from the stream.
                 */
                // @ts-ignore
                public static read(input: java.io.ObjectInput): java.rmi.server.ObjID;
                /**
                 * Returns the hash code value for this object identifier, the
                 * object number.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Compares the specified object with this <code>ObjID</code> for
                 * equality.
                 * This method returns <code>true</code> if and only if the
                 * specified object is an <code>ObjID</code> instance with the same
                 * object number and address space identifier as this one.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a string representation of this object identifier.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
