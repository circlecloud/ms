// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class DataOutputStream extends java.io.FilterOutputStream {
            /**
             * Creates a new data output stream to write data to the specified
             * underlying output stream. The counter <code>written</code> is
             * set to zero.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            // @ts-ignore
            protected written: number;
            /**
             * Writes the specified byte (the low eight bits of the argument
             * <code>b</code>) to the underlying output stream. If no exception
             * is thrown, the counter <code>written</code> is incremented by
             * <code>1</code>.
             * <p>
             * Implements the <code>write</code> method of <code>OutputStream</code>.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to the underlying output stream.
             * If no exception is thrown, the counter <code>written</code> is
             * incremented by <code>len</code>.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Flushes this data output stream. This forces any buffered output
             * bytes to be written out to the stream.
             * <p>
             * The <code>flush</code> method of <code>DataOutputStream</code>
             * calls the <code>flush</code> method of its underlying output stream.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Writes a <code>boolean</code> to the underlying output stream as
             * a 1-byte value. The value <code>true</code> is written out as the
             * value <code>(byte)1</code>; the value <code>false</code> is
             * written out as the value <code>(byte)0</code>. If no exception is
             * thrown, the counter <code>written</code> is incremented by
             * <code>1</code>.
             */
            // @ts-ignore
            public writeBoolean(v: boolean): void;
            /**
             * Writes out a <code>byte</code> to the underlying output stream as
             * a 1-byte value. If no exception is thrown, the counter
             * <code>written</code> is incremented by <code>1</code>.
             */
            // @ts-ignore
            public writeByte(v: number): void;
            /**
             * Writes a <code>short</code> to the underlying output stream as two
             * bytes, high byte first. If no exception is thrown, the counter
             * <code>written</code> is incremented by <code>2</code>.
             */
            // @ts-ignore
            public writeShort(v: number): void;
            /**
             * Writes a <code>char</code> to the underlying output stream as a
             * 2-byte value, high byte first. If no exception is thrown, the
             * counter <code>written</code> is incremented by <code>2</code>.
             */
            // @ts-ignore
            public writeChar(v: number): void;
            /**
             * Writes an <code>int</code> to the underlying output stream as four
             * bytes, high byte first. If no exception is thrown, the counter
             * <code>written</code> is incremented by <code>4</code>.
             */
            // @ts-ignore
            public writeInt(v: number): void;
            /**
             * Writes a <code>long</code> to the underlying output stream as eight
             * bytes, high byte first. In no exception is thrown, the counter
             * <code>written</code> is incremented by <code>8</code>.
             */
            // @ts-ignore
            public writeLong(v: number): void;
            /**
             * Converts the float argument to an <code>int</code> using the
             * <code>floatToIntBits</code> method in class <code>Float</code>,
             * and then writes that <code>int</code> value to the underlying
             * output stream as a 4-byte quantity, high byte first. If no
             * exception is thrown, the counter <code>written</code> is
             * incremented by <code>4</code>.
             */
            // @ts-ignore
            public writeFloat(v: number): void;
            /**
             * Converts the double argument to a <code>long</code> using the
             * <code>doubleToLongBits</code> method in class <code>Double</code>,
             * and then writes that <code>long</code> value to the underlying
             * output stream as an 8-byte quantity, high byte first. If no
             * exception is thrown, the counter <code>written</code> is
             * incremented by <code>8</code>.
             */
            // @ts-ignore
            public writeDouble(v: number): void;
            /**
             * Writes out the string to the underlying output stream as a
             * sequence of bytes. Each character in the string is written out, in
             * sequence, by discarding its high eight bits. If no exception is
             * thrown, the counter <code>written</code> is incremented by the
             * length of <code>s</code>.
             */
            // @ts-ignore
            public writeBytes(s: string): void;
            /**
             * Writes a string to the underlying output stream as a sequence of
             * characters. Each character is written to the data output stream as
             * if by the <code>writeChar</code> method. If no exception is
             * thrown, the counter <code>written</code> is incremented by twice
             * the length of <code>s</code>.
             */
            // @ts-ignore
            public writeChars(s: string): void;
            /**
             * Writes a string to the underlying output stream using
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a>
             * encoding in a machine-independent manner.
             * <p>
             * First, two bytes are written to the output stream as if by the
             * <code>writeShort</code> method giving the number of bytes to
             * follow. This value is the number of bytes actually written out,
             * not the length of the string. Following the length, each character
             * of the string is output, in sequence, using the modified UTF-8 encoding
             * for the character. If no exception is thrown, the counter
             * <code>written</code> is incremented by the total number of
             * bytes written to the output stream. This will be at least two
             * plus the length of <code>str</code>, and at most two plus
             * thrice the length of <code>str</code>.
             */
            // @ts-ignore
            public writeUTF(str: string): void;
            /**
             * Returns the current value of the counter <code>written</code>,
             * the number of bytes written to this data output stream so far.
             * If the counter overflows, it will be wrapped to Integer.MAX_VALUE.
             */
            // @ts-ignore
            public size(): number;
        }
    }
}
