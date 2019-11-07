// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Blob {
            /**
             * Returns the number of bytes in the <code>BLOB</code> value
             * designated by this <code>Blob</code> object.
             */
            // @ts-ignore
             length(): number;
            /**
             * Retrieves all or part of the <code>BLOB</code>
             * value that this <code>Blob</code> object represents, as an array of
             * bytes.  This <code>byte</code> array contains up to <code>length</code>
             * consecutive bytes starting at position <code>pos</code>.
             */
            // @ts-ignore
             getBytes(pos: number, length: number): number[];
            /**
             * Retrieves the <code>BLOB</code> value designated by this
             * <code>Blob</code> instance as a stream.
             */
            // @ts-ignore
             getBinaryStream(): java.io.InputStream;
            /**
             * Retrieves the byte position at which the specified byte array
             * <code>pattern</code> begins within the <code>BLOB</code>
             * value that this <code>Blob</code> object represents.  The
             * search for <code>pattern</code> begins at position
             * <code>start</code>.
             */
            // @ts-ignore
             position(pattern: number, start: number): number;
            /**
             * Retrieves the byte position in the <code>BLOB</code> value
             * designated by this <code>Blob</code> object at which
             * <code>pattern</code> begins.  The search begins at position
             * <code>start</code>.
             */
            // @ts-ignore
             position(pattern: java.sql.Blob, start: number): number;
            /**
             * Writes the given array of bytes to the <code>BLOB</code> value that
             * this <code>Blob</code> object represents, starting at position
             * <code>pos</code>, and returns the number of bytes written.
             * The array of bytes will overwrite the existing bytes
             * in the <code>Blob</code> object starting at the position
             * <code>pos</code>.  If the end of the <code>Blob</code> value is reached
             * while writing the array of bytes, then the length of the <code>Blob</code>
             * value will be increased to accommodate the extra bytes.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>BLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             setBytes(pos: number, bytes: number): number;
            /**
             * Writes all or part of the given <code>byte</code> array to the
             * <code>BLOB</code> value that this <code>Blob</code> object represents
             * and returns the number of bytes written.
             * Writing starts at position <code>pos</code> in the <code>BLOB</code>
             * value; <code>len</code> bytes from the given byte array are written.
             * The array of bytes will overwrite the existing bytes
             * in the <code>Blob</code> object starting at the position
             * <code>pos</code>.  If the end of the <code>Blob</code> value is reached
             * while writing the array of bytes, then the length of the <code>Blob</code>
             * value will be increased to accommodate the extra bytes.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>BLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             setBytes(pos: number, bytes: number, offset: number, len: number): number;
            /**
             * Retrieves a stream that can be used to write to the <code>BLOB</code>
             * value that this <code>Blob</code> object represents.  The stream begins
             * at position <code>pos</code>.
             * The  bytes written to the stream will overwrite the existing bytes
             * in the <code>Blob</code> object starting at the position
             * <code>pos</code>.  If the end of the <code>Blob</code> value is reached
             * while writing to the stream, then the length of the <code>Blob</code>
             * value will be increased to accommodate the extra bytes.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>BLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             setBinaryStream(pos: number): java.io.OutputStream;
            /**
             * Truncates the <code>BLOB</code> value that this <code>Blob</code>
             * object represents to be <code>len</code> bytes in length.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>BLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             truncate(len: number): void;
            /**
             * This method frees the <code>Blob</code> object and releases the resources that
             * it holds. The object is invalid once the <code>free</code>
             * method is called.
             * <p>
             * After <code>free</code> has been called, any attempt to invoke a
             * method other than <code>free</code> will result in a <code>SQLException</code>
             * being thrown.  If <code>free</code> is called multiple times, the subsequent
             * calls to <code>free</code> are treated as a no-op.
             * <p>
             */
            // @ts-ignore
             free(): void;
            /**
             * Returns an <code>InputStream</code> object that contains a partial <code>Blob</code> value,
             * starting  with the byte specified by pos, which is length bytes in length.
             */
            // @ts-ignore
             getBinaryStream(pos: number, length: number): java.io.InputStream;
        }
    }
}
