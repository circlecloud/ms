// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
             class UID extends java.lang.Object {
                /**
                 * Generates a <code>UID</code> that is unique over time with
                 * respect to the host that it was generated on.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a "well-known" <code>UID</code>.
                 * There are 2<sup>16</sup> possible such well-known ids.
                 * <p>A <code>UID</code> created via this constructor will not
                 * clash with any <code>UID</code>s generated via the no-arg
                 * constructor.
                 */
                // @ts-ignore
                constructor(num: number)
                /**
                 * Returns the hash code value for this <code>UID</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Compares the specified object with this <code>UID</code> for
                 * equality.
                 * This method returns <code>true</code> if and only if the
                 * specified object is a <code>UID</code> instance with the same
                 * <code>unique</code>, <code>time</code>, and <code>count</code>
                 * values as this one.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a string representation of this <code>UID</code>.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Marshals a binary representation of this <code>UID</code> to
                 * a <code>DataOutput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link DataOutput#writeInt(int)} method with this <code>UID</code>'s
                 * <code>unique</code> value, then it invokes the stream's
                 * {@link DataOutput#writeLong(long)} method with this <code>UID</code>'s
                 * <code>time</code> value, and then it invokes the stream's
                 * {@link DataOutput#writeShort(int)} method with this <code>UID</code>'s
                 * <code>count</code> value.
                 */
                // @ts-ignore
                public write(out: java.io.DataOutput): void;
                /**
                 * Constructs and returns a new <code>UID</code> instance by
                 * unmarshalling a binary representation from an
                 * <code>DataInput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link DataInput#readInt()} method to read a <code>unique</code> value,
                 * then it invoke's the stream's
                 * {@link DataInput#readLong()} method to read a <code>time</code> value,
                 * then it invoke's the stream's
                 * {@link DataInput#readShort()} method to read a <code>count</code> value,
                 * and then it creates and returns a new <code>UID</code> instance
                 * that contains the <code>unique</code>, <code>time</code>, and
                 * <code>count</code> values that were read from the stream.
                 */
                // @ts-ignore
                public static read(input: java.io.DataInput): java.rmi.server.UID;
            }
        }
    }
}
