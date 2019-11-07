// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class FileLock extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor(channel: java.nio.channels.FileChannel, position: number, size: number, shared: boolean)
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor(channel: java.nio.channels.AsynchronousFileChannel, position: number, size: number, shared: boolean)
                /**
                 * Returns the file channel upon whose file this lock was acquired.
                 * <p> This method has been superseded by the {@link #acquiredBy acquiredBy}
                 * method.
                 */
                // @ts-ignore
                public channel(): java.nio.channels.FileChannel;
                /**
                 * Returns the channel upon whose file this lock was acquired.
                 */
                // @ts-ignore
                public acquiredBy(): java.nio.channels.Channel;
                /**
                 * Returns the position within the file of the first byte of the locked
                 * region.
                 * <p> A locked region need not be contained within, or even overlap, the
                 * actual underlying file, so the value returned by this method may exceed
                 * the file's current size.  </p>
                 */
                // @ts-ignore
                public position(): number;
                /**
                 * Returns the size of the locked region in bytes.
                 * <p> A locked region need not be contained within, or even overlap, the
                 * actual underlying file, so the value returned by this method may exceed
                 * the file's current size.  </p>
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Tells whether this lock is shared.
                 */
                // @ts-ignore
                public isShared(): boolean;
                /**
                 * Tells whether or not this lock overlaps the given lock range.
                 */
                // @ts-ignore
                public overlaps(position: number, size: number): boolean;
                /**
                 * Tells whether or not this lock is valid.
                 * <p> A lock object remains valid until it is released or the associated
                 * file channel is closed, whichever comes first.  </p>
                 */
                // @ts-ignore
                public abstract isValid(): boolean;
                /**
                 * Releases this lock.
                 * <p> If this lock object is valid then invoking this method releases the
                 * lock and renders the object invalid.  If this lock object is invalid
                 * then invoking this method has no effect.  </p>
                 */
                // @ts-ignore
                public abstract release(): void;
                /**
                 * This method invokes the {@link #release} method. It was added
                 * to the class so that it could be used in conjunction with the
                 * automatic resource management block construct.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Returns a string describing the range, type, and validity of this lock.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
