declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Clob {
            /**
             * Retrieves the number of characters
             * in the <code>CLOB</code> value
             * designated by this <code>Clob</code> object.
             */
            // @ts-ignore
             length(): number;
            /**
             * Retrieves a copy of the specified substring
             * in the <code>CLOB</code> value
             * designated by this <code>Clob</code> object.
             * The substring begins at position
             * <code>pos</code> and has up to <code>length</code> consecutive
             * characters.
             */
            // @ts-ignore
             getSubString(pos: number, length: number): string;
            /**
             * Retrieves the <code>CLOB</code> value designated by this <code>Clob</code>
             * object as a <code>java.io.Reader</code> object (or as a stream of
             * characters).
             */
            // @ts-ignore
             getCharacterStream(): java.io.Reader;
            /**
             * Retrieves the <code>CLOB</code> value designated by this <code>Clob</code>
             * object as an ascii stream.
             */
            // @ts-ignore
             getAsciiStream(): java.io.InputStream;
            /**
             * Retrieves the character position at which the specified substring
             * <code>searchstr</code> appears in the SQL <code>CLOB</code> value
             * represented by this <code>Clob</code> object.  The search
             * begins at position <code>start</code>.
             */
            // @ts-ignore
             position(searchstr: string, start: number): number;
            /**
             * Retrieves the character position at which the specified
             * <code>Clob</code> object <code>searchstr</code> appears in this
             * <code>Clob</code> object.  The search begins at position
             * <code>start</code>.
             */
            // @ts-ignore
             position(searchstr: java.sql.Clob, start: number): number;
            /**
             * Writes the given Java <code>String</code> to the <code>CLOB</code>
             * value that this <code>Clob</code> object designates at the position
             * <code>pos</code>. The string will overwrite the existing characters
             * in the <code>Clob</code> object starting at the position
             * <code>pos</code>.  If the end of the <code>Clob</code> value is reached
             * while writing the given string, then the length of the <code>Clob</code>
             * value will be increased to accommodate the extra characters.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>CLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             setString(pos: number, str: string): number;
            /**
             * Writes <code>len</code> characters of <code>str</code>, starting
             * at character <code>offset</code>, to the <code>CLOB</code> value
             * that this <code>Clob</code> represents.  The string will overwrite the existing characters
             * in the <code>Clob</code> object starting at the position
             * <code>pos</code>.  If the end of the <code>Clob</code> value is reached
             * while writing the given string, then the length of the <code>Clob</code>
             * value will be increased to accommodate the extra characters.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>CLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             setString(pos: number, str: string, offset: number, len: number): number;
            /**
             * Retrieves a stream to be used to write Ascii characters to the
             * <code>CLOB</code> value that this <code>Clob</code> object represents,
             * starting at position <code>pos</code>.  Characters written to the stream
             * will overwrite the existing characters
             * in the <code>Clob</code> object starting at the position
             * <code>pos</code>.  If the end of the <code>Clob</code> value is reached
             * while writing characters to the stream, then the length of the <code>Clob</code>
             * value will be increased to accommodate the extra characters.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>CLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             setAsciiStream(pos: number): java.io.OutputStream;
            /**
             * Retrieves a stream to be used to write a stream of Unicode characters
             * to the <code>CLOB</code> value that this <code>Clob</code> object
             * represents, at position <code>pos</code>. Characters written to the stream
             * will overwrite the existing characters
             * in the <code>Clob</code> object starting at the position
             * <code>pos</code>.  If the end of the <code>Clob</code> value is reached
             * while writing characters to the stream, then the length of the <code>Clob</code>
             * value will be increased to accommodate the extra characters.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>CLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             setCharacterStream(pos: number): java.io.Writer;
            /**
             * Truncates the <code>CLOB</code> value that this <code>Clob</code>
             * designates to have a length of <code>len</code>
             * characters.
             * <p>
             * <b>Note:</b> If the value specified for <code>pos</code>
             * is greater then the length+1 of the <code>CLOB</code> value then the
             * behavior is undefined. Some JDBC drivers may throw a
             * <code>SQLException</code> while other drivers may support this
             * operation.
             */
            // @ts-ignore
             truncate(len: number): void;
            /**
             * This method frees the <code>Clob</code> object and releases the resources the resources
             * that it holds.  The object is invalid once the <code>free</code> method
             * is called.
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
             * Returns a <code>Reader</code> object that contains a partial <code>Clob</code> value, starting
             * with the character specified by pos, which is length characters in length.
             */
            // @ts-ignore
             getCharacterStream(pos: number, length: number): java.io.Reader;
        }
    }
}
