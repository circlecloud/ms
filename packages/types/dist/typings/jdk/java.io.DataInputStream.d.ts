// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class DataInputStream extends java.io.FilterInputStream {
            /**
             * Creates a DataInputStream that uses the specified
             * underlying InputStream.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Reads some number of bytes from the contained input stream and
             * stores them into the buffer array <code>b</code>. The number of
             * bytes actually read is returned as an integer. This method blocks
             * until input data is available, end of file is detected, or an
             * exception is thrown.
             * <p>If <code>b</code> is null, a <code>NullPointerException</code> is
             * thrown. If the length of <code>b</code> is zero, then no bytes are
             * read and <code>0</code> is returned; otherwise, there is an attempt
             * to read at least one byte. If no byte is available because the
             * stream is at end of file, the value <code>-1</code> is returned;
             * otherwise, at least one byte is read and stored into <code>b</code>.
             * <p>The first byte read is stored into element <code>b[0]</code>, the
             * next one into <code>b[1]</code>, and so on. The number of bytes read
             * is, at most, equal to the length of <code>b</code>. Let <code>k</code>
             * be the number of bytes actually read; these bytes will be stored in
             * elements <code>b[0]</code> through <code>b[k-1]</code>, leaving
             * elements <code>b[k]</code> through <code>b[b.length-1]</code>
             * unaffected.
             * <p>The <code>read(b)</code> method has the same effect as:
             * <blockquote><pre>
             * read(b, 0, b.length)
             * </pre></blockquote>
             */
            // @ts-ignore
            public read(b: number): number;
            /**
             * Reads up to <code>len</code> bytes of data from the contained
             * input stream into an array of bytes.  An attempt is made to read
             * as many as <code>len</code> bytes, but a smaller number may be read,
             * possibly zero. The number of bytes actually read is returned as an
             * integer.
             * <p> This method blocks until input data is available, end of file is
             * detected, or an exception is thrown.
             * <p> If <code>len</code> is zero, then no bytes are read and
             * <code>0</code> is returned; otherwise, there is an attempt to read at
             * least one byte. If no byte is available because the stream is at end of
             * file, the value <code>-1</code> is returned; otherwise, at least one
             * byte is read and stored into <code>b</code>.
             * <p> The first byte read is stored into element <code>b[off]</code>, the
             * next one into <code>b[off+1]</code>, and so on. The number of bytes read
             * is, at most, equal to <code>len</code>. Let <i>k</i> be the number of
             * bytes actually read; these bytes will be stored in elements
             * <code>b[off]</code> through <code>b[off+</code><i>k</i><code>-1]</code>,
             * leaving elements <code>b[off+</code><i>k</i><code>]</code> through
             * <code>b[off+len-1]</code> unaffected.
             * <p> In every case, elements <code>b[0]</code> through
             * <code>b[off]</code> and elements <code>b[off+len]</code> through
             * <code>b[b.length-1]</code> are unaffected.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * See the general contract of the <code>readFully</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readFully(b: number): void;
            /**
             * See the general contract of the <code>readFully</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readFully(b: number, off: number, len: number): void;
            /**
             * See the general contract of the <code>skipBytes</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public skipBytes(n: number): number;
            /**
             * See the general contract of the <code>readBoolean</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readBoolean(): boolean;
            /**
             * See the general contract of the <code>readByte</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readByte(): number;
            /**
             * See the general contract of the <code>readUnsignedByte</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readUnsignedByte(): number;
            /**
             * See the general contract of the <code>readShort</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readShort(): number;
            /**
             * See the general contract of the <code>readUnsignedShort</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readUnsignedShort(): number;
            /**
             * See the general contract of the <code>readChar</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readChar(): string;
            /**
             * See the general contract of the <code>readInt</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readInt(): number;
            /**
             * See the general contract of the <code>readLong</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readLong(): number;
            /**
             * See the general contract of the <code>readFloat</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readFloat(): number;
            /**
             * See the general contract of the <code>readDouble</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readDouble(): number;
            /**
             * See the general contract of the <code>readLine</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readLine(): string;
            /**
             * See the general contract of the <code>readUTF</code>
             * method of <code>DataInput</code>.
             * <p>
             * Bytes
             * for this operation are read from the contained
             * input stream.
             */
            // @ts-ignore
            public readUTF(): string;
            /**
             * Reads from the
             * stream <code>in</code> a representation
             * of a Unicode  character string encoded in
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a> format;
             * this string of characters is then returned as a <code>String</code>.
             * The details of the modified UTF-8 representation
             * are  exactly the same as for the <code>readUTF</code>
             * method of <code>DataInput</code>.
             */
            // @ts-ignore
            public static readUTF(input: java.io.DataInput): string;
        }
    }
}
