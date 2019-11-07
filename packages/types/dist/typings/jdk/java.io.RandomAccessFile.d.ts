declare namespace java {
    namespace io {
        // @ts-ignore
         class RandomAccessFile extends java.lang.Object {
            /**
             * Creates a random access file stream to read from, and optionally
             * to write to, a file with the specified name. A new
             * {@link FileDescriptor} object is created to represent the
             * connection to the file.
             * <p> The <tt>mode</tt> argument specifies the access mode with which the
             * file is to be opened.  The permitted values and their meanings are as
             * specified for the <a
             * href="#mode"><tt>RandomAccessFile(File,String)</tt></a> constructor.
             * <p>
             * If there is a security manager, its {@code checkRead} method
             * is called with the {@code name} argument
             * as its argument to see if read access to the file is allowed.
             * If the mode allows writing, the security manager's
             * {@code checkWrite} method
             * is also called with the {@code name} argument
             * as its argument to see if write access to the file is allowed.
             */
            // @ts-ignore
            constructor(name: string, mode: string)
            /**
             * Creates a random access file stream to read from, and optionally to
             * write to, the file specified by the {@link File} argument.  A new {@link
             * FileDescriptor} object is created to represent this file connection.
             * <p>The <a name="mode"><tt>mode</tt></a> argument specifies the access mode
             * in which the file is to be opened.  The permitted values and their
             * meanings are:
             * <table summary="Access mode permitted values and meanings">
             * <tr><th align="left">Value</th><th align="left">Meaning</th></tr>
             * <tr><td valign="top"><tt>"r"</tt></td>
             * <td> Open for reading only.  Invoking any of the <tt>write</tt>
             * methods of the resulting object will cause an {@link
             * java.io.IOException} to be thrown. </td></tr>
             * <tr><td valign="top"><tt>"rw"</tt></td>
             * <td> Open for reading and writing.  If the file does not already
             * exist then an attempt will be made to create it. </td></tr>
             * <tr><td valign="top"><tt>"rws"</tt></td>
             * <td> Open for reading and writing, as with <tt>"rw"</tt>, and also
             * require that every update to the file's content or metadata be
             * written synchronously to the underlying storage device.  </td></tr>
             * <tr><td valign="top"><tt>"rwd"&nbsp;&nbsp;</tt></td>
             * <td> Open for reading and writing, as with <tt>"rw"</tt>, and also
             * require that every update to the file's content be written
             * synchronously to the underlying storage device. </td></tr>
             * </table>
             * The <tt>"rws"</tt> and <tt>"rwd"</tt> modes work much like the {@link
             * java.nio.channels.FileChannel#force(boolean) force(boolean)} method of
             * the {@link java.nio.channels.FileChannel} class, passing arguments of
             * <tt>true</tt> and <tt>false</tt>, respectively, except that they always
             * apply to every I/O operation and are therefore often more efficient.  If
             * the file resides on a local storage device then when an invocation of a
             * method of this class returns it is guaranteed that all changes made to
             * the file by that invocation will have been written to that device.  This
             * is useful for ensuring that critical information is not lost in the
             * event of a system crash.  If the file does not reside on a local device
             * then no such guarantee is made.
             * <p>The <tt>"rwd"</tt> mode can be used to reduce the number of I/O
             * operations performed.  Using <tt>"rwd"</tt> only requires updates to the
             * file's content to be written to storage; using <tt>"rws"</tt> requires
             * updates to both the file's content and its metadata to be written, which
             * generally requires at least one more low-level I/O operation.
             * <p>If there is a security manager, its {@code checkRead} method is
             * called with the pathname of the {@code file} argument as its
             * argument to see if read access to the file is allowed.  If the mode
             * allows writing, the security manager's {@code checkWrite} method is
             * also called with the path argument to see if write access to the file is
             * allowed.
             */
            // @ts-ignore
            constructor(file: java.io.File, mode: string)
            /**
             * Returns the opaque file descriptor object associated with this
             * stream.
             */
            // @ts-ignore
            public getFD(): java.io.FileDescriptor;
            /**
             * Returns the unique {@link java.nio.channels.FileChannel FileChannel}
             * object associated with this file.
             * <p> The {@link java.nio.channels.FileChannel#position()
             * position} of the returned channel will always be equal to
             * this object's file-pointer offset as returned by the {@link
             * #getFilePointer getFilePointer} method.  Changing this object's
             * file-pointer offset, whether explicitly or by reading or writing bytes,
             * will change the position of the channel, and vice versa.  Changing the
             * file's length via this object will change the length seen via the file
             * channel, and vice versa.
             */
            // @ts-ignore
            public getChannel(): java.nio.channels.FileChannel;
            /**
             * Reads a byte of data from this file. The byte is returned as an
             * integer in the range 0 to 255 ({@code 0x00-0x0ff}). This
             * method blocks if no input is yet available.
             * <p>
             * Although {@code RandomAccessFile} is not a subclass of
             * {@code InputStream}, this method behaves in exactly the same
             * way as the {@link InputStream#read()} method of
             * {@code InputStream}.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to {@code len} bytes of data from this file into an
             * array of bytes. This method blocks until at least one byte of input
             * is available.
             * <p>
             * Although {@code RandomAccessFile} is not a subclass of
             * {@code InputStream}, this method behaves in exactly the
             * same way as the {@link InputStream#read(byte[], int, int)} method of
             * {@code InputStream}.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Reads up to {@code b.length} bytes of data from this file
             * into an array of bytes. This method blocks until at least one byte
             * of input is available.
             * <p>
             * Although {@code RandomAccessFile} is not a subclass of
             * {@code InputStream}, this method behaves in exactly the
             * same way as the {@link InputStream#read(byte[])} method of
             * {@code InputStream}.
             */
            // @ts-ignore
            public read(b: number): number;
            /**
             * Reads {@code b.length} bytes from this file into the byte
             * array, starting at the current file pointer. This method reads
             * repeatedly from the file until the requested number of bytes are
             * read. This method blocks until the requested number of bytes are
             * read, the end of the stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readFully(b: number): void;
            /**
             * Reads exactly {@code len} bytes from this file into the byte
             * array, starting at the current file pointer. This method reads
             * repeatedly from the file until the requested number of bytes are
             * read. This method blocks until the requested number of bytes are
             * read, the end of the stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readFully(b: number, off: number, len: number): void;
            /**
             * Attempts to skip over {@code n} bytes of input discarding the
             * skipped bytes.
             * <p>
             * This method may skip over some smaller number of bytes, possibly zero.
             * This may result from any of a number of conditions; reaching end of
             * file before {@code n} bytes have been skipped is only one
             * possibility. This method never throws an {@code EOFException}.
             * The actual number of bytes skipped is returned.  If {@code n}
             * is negative, no bytes are skipped.
             */
            // @ts-ignore
            public skipBytes(n: number): number;
            /**
             * Writes the specified byte to this file. The write starts at
             * the current file pointer.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes {@code b.length} bytes from the specified byte array
             * to this file, starting at the current file pointer.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes {@code len} bytes from the specified byte array
             * starting at offset {@code off} to this file.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Returns the current offset in this file.
             */
            // @ts-ignore
            public getFilePointer(): number;
            /**
             * Sets the file-pointer offset, measured from the beginning of this
             * file, at which the next read or write occurs.  The offset may be
             * set beyond the end of the file. Setting the offset beyond the end
             * of the file does not change the file length.  The file length will
             * change only by writing after the offset has been set beyond the end
             * of the file.
             */
            // @ts-ignore
            public seek(pos: number): void;
            /**
             * Returns the length of this file.
             */
            // @ts-ignore
            public length(): number;
            /**
             * Sets the length of this file.
             * <p> If the present length of the file as returned by the
             * {@code length} method is greater than the {@code newLength}
             * argument then the file will be truncated.  In this case, if the file
             * offset as returned by the {@code getFilePointer} method is greater
             * than {@code newLength} then after this method returns the offset
             * will be equal to {@code newLength}.
             * <p> If the present length of the file as returned by the
             * {@code length} method is smaller than the {@code newLength}
             * argument then the file will be extended.  In this case, the contents of
             * the extended portion of the file are not defined.
             */
            // @ts-ignore
            public setLength(newLength: number): void;
            /**
             * Closes this random access file stream and releases any system
             * resources associated with the stream. A closed random access
             * file cannot perform input or output operations and cannot be
             * reopened.
             * <p> If this file has an associated channel then the channel is closed
             * as well.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Reads a {@code boolean} from this file. This method reads a
             * single byte from the file, starting at the current file pointer.
             * A value of {@code 0} represents
             * {@code false}. Any other value represents {@code true}.
             * This method blocks until the byte is read, the end of the stream
             * is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readBoolean(): boolean;
            /**
             * Reads a signed eight-bit value from this file. This method reads a
             * byte from the file, starting from the current file pointer.
             * If the byte read is {@code b}, where
             * <code>0&nbsp;&lt;=&nbsp;b&nbsp;&lt;=&nbsp;255</code>,
             * then the result is:
             * <blockquote><pre>
             * (byte)(b)
             * </pre></blockquote>
             * <p>
             * This method blocks until the byte is read, the end of the stream
             * is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readByte(): number;
            /**
             * Reads an unsigned eight-bit number from this file. This method reads
             * a byte from this file, starting at the current file pointer,
             * and returns that byte.
             * <p>
             * This method blocks until the byte is read, the end of the stream
             * is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readUnsignedByte(): number;
            /**
             * Reads a signed 16-bit number from this file. The method reads two
             * bytes from this file, starting at the current file pointer.
             * If the two bytes read, in order, are
             * {@code b1} and {@code b2}, where each of the two values is
             * between {@code 0} and {@code 255}, inclusive, then the
             * result is equal to:
             * <blockquote><pre>
             * (short)((b1 &lt;&lt; 8) | b2)
             * </pre></blockquote>
             * <p>
             * This method blocks until the two bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readShort(): number;
            /**
             * Reads an unsigned 16-bit number from this file. This method reads
             * two bytes from the file, starting at the current file pointer.
             * If the bytes read, in order, are
             * {@code b1} and {@code b2}, where
             * <code>0&nbsp;&lt;=&nbsp;b1, b2&nbsp;&lt;=&nbsp;255</code>,
             * then the result is equal to:
             * <blockquote><pre>
             * (b1 &lt;&lt; 8) | b2
             * </pre></blockquote>
             * <p>
             * This method blocks until the two bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readUnsignedShort(): number;
            /**
             * Reads a character from this file. This method reads two
             * bytes from the file, starting at the current file pointer.
             * If the bytes read, in order, are
             * {@code b1} and {@code b2}, where
             * <code>0&nbsp;&lt;=&nbsp;b1,&nbsp;b2&nbsp;&lt;=&nbsp;255</code>,
             * then the result is equal to:
             * <blockquote><pre>
             * (char)((b1 &lt;&lt; 8) | b2)
             * </pre></blockquote>
             * <p>
             * This method blocks until the two bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readChar(): string;
            /**
             * Reads a signed 32-bit integer from this file. This method reads 4
             * bytes from the file, starting at the current file pointer.
             * If the bytes read, in order, are {@code b1},
             * {@code b2}, {@code b3}, and {@code b4}, where
             * <code>0&nbsp;&lt;=&nbsp;b1, b2, b3, b4&nbsp;&lt;=&nbsp;255</code>,
             * then the result is equal to:
             * <blockquote><pre>
             * (b1 &lt;&lt; 24) | (b2 &lt;&lt; 16) + (b3 &lt;&lt; 8) + b4
             * </pre></blockquote>
             * <p>
             * This method blocks until the four bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readInt(): number;
            /**
             * Reads a signed 64-bit integer from this file. This method reads eight
             * bytes from the file, starting at the current file pointer.
             * If the bytes read, in order, are
             * {@code b1}, {@code b2}, {@code b3},
             * {@code b4}, {@code b5}, {@code b6},
             * {@code b7}, and {@code b8,} where:
             * <blockquote><pre>
             * 0 &lt;= b1, b2, b3, b4, b5, b6, b7, b8 &lt;=255,
             * </pre></blockquote>
             * <p>
             * then the result is equal to:
             * <blockquote><pre>
             * ((long)b1 &lt;&lt; 56) + ((long)b2 &lt;&lt; 48)
             * + ((long)b3 &lt;&lt; 40) + ((long)b4 &lt;&lt; 32)
             * + ((long)b5 &lt;&lt; 24) + ((long)b6 &lt;&lt; 16)
             * + ((long)b7 &lt;&lt; 8) + b8
             * </pre></blockquote>
             * <p>
             * This method blocks until the eight bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readLong(): number;
            /**
             * Reads a {@code float} from this file. This method reads an
             * {@code int} value, starting at the current file pointer,
             * as if by the {@code readInt} method
             * and then converts that {@code int} to a {@code float}
             * using the {@code intBitsToFloat} method in class
             * {@code Float}.
             * <p>
             * This method blocks until the four bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readFloat(): number;
            /**
             * Reads a {@code double} from this file. This method reads a
             * {@code long} value, starting at the current file pointer,
             * as if by the {@code readLong} method
             * and then converts that {@code long} to a {@code double}
             * using the {@code longBitsToDouble} method in
             * class {@code Double}.
             * <p>
             * This method blocks until the eight bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readDouble(): number;
            /**
             * Reads the next line of text from this file.  This method successively
             * reads bytes from the file, starting at the current file pointer,
             * until it reaches a line terminator or the end
             * of the file.  Each byte is converted into a character by taking the
             * byte's value for the lower eight bits of the character and setting the
             * high eight bits of the character to zero.  This method does not,
             * therefore, support the full Unicode character set.
             * <p> A line of text is terminated by a carriage-return character
             * ({@code '\r'}), a newline character ({@code '\n'}), a
             * carriage-return character immediately followed by a newline character,
             * or the end of the file.  Line-terminating characters are discarded and
             * are not included as part of the string returned.
             * <p> This method blocks until a newline character is read, a carriage
             * return and the byte following it are read (to see if it is a newline),
             * the end of the file is reached, or an exception is thrown.
             */
            // @ts-ignore
            public readLine(): string;
            /**
             * Reads in a string from this file. The string has been encoded
             * using a
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a>
             * format.
             * <p>
             * The first two bytes are read, starting from the current file
             * pointer, as if by
             * {@code readUnsignedShort}. This value gives the number of
             * following bytes that are in the encoded string, not
             * the length of the resulting string. The following bytes are then
             * interpreted as bytes encoding characters in the modified UTF-8 format
             * and are converted into characters.
             * <p>
             * This method blocks until all the bytes are read, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public readUTF(): string;
            /**
             * Writes a {@code boolean} to the file as a one-byte value. The
             * value {@code true} is written out as the value
             * {@code (byte)1}; the value {@code false} is written out
             * as the value {@code (byte)0}. The write starts at
             * the current position of the file pointer.
             */
            // @ts-ignore
            public writeBoolean(v: boolean): void;
            /**
             * Writes a {@code byte} to the file as a one-byte value. The
             * write starts at the current position of the file pointer.
             */
            // @ts-ignore
            public writeByte(v: number): void;
            /**
             * Writes a {@code short} to the file as two bytes, high byte first.
             * The write starts at the current position of the file pointer.
             */
            // @ts-ignore
            public writeShort(v: number): void;
            /**
             * Writes a {@code char} to the file as a two-byte value, high
             * byte first. The write starts at the current position of the
             * file pointer.
             */
            // @ts-ignore
            public writeChar(v: number): void;
            /**
             * Writes an {@code int} to the file as four bytes, high byte first.
             * The write starts at the current position of the file pointer.
             */
            // @ts-ignore
            public writeInt(v: number): void;
            /**
             * Writes a {@code long} to the file as eight bytes, high byte first.
             * The write starts at the current position of the file pointer.
             */
            // @ts-ignore
            public writeLong(v: number): void;
            /**
             * Converts the float argument to an {@code int} using the
             * {@code floatToIntBits} method in class {@code Float},
             * and then writes that {@code int} value to the file as a
             * four-byte quantity, high byte first. The write starts at the
             * current position of the file pointer.
             */
            // @ts-ignore
            public writeFloat(v: number): void;
            /**
             * Converts the double argument to a {@code long} using the
             * {@code doubleToLongBits} method in class {@code Double},
             * and then writes that {@code long} value to the file as an
             * eight-byte quantity, high byte first. The write starts at the current
             * position of the file pointer.
             */
            // @ts-ignore
            public writeDouble(v: number): void;
            /**
             * Writes the string to the file as a sequence of bytes. Each
             * character in the string is written out, in sequence, by discarding
             * its high eight bits. The write starts at the current position of
             * the file pointer.
             */
            // @ts-ignore
            public writeBytes(s: string): void;
            /**
             * Writes a string to the file as a sequence of characters. Each
             * character is written to the data output stream as if by the
             * {@code writeChar} method. The write starts at the current
             * position of the file pointer.
             */
            // @ts-ignore
            public writeChars(s: string): void;
            /**
             * Writes a string to the file using
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a>
             * encoding in a machine-independent manner.
             * <p>
             * First, two bytes are written to the file, starting at the
             * current file pointer, as if by the
             * {@code writeShort} method giving the number of bytes to
             * follow. This value is the number of bytes actually written out,
             * not the length of the string. Following the length, each character
             * of the string is output, in sequence, using the modified UTF-8 encoding
             * for each character.
             */
            // @ts-ignore
            public writeUTF(str: string): void;
        }
    }
}
