declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface ChannelBuf {
                    /**
                     * Gets the number of bytes this buffer can contain.
                     */
                    // @ts-ignore
                     getCapacity(): number;
                    /**
                     * Gets the number of bytes available between the reader and the writer.
                     */
                    // @ts-ignore
                     available(): number;
                    /**
                     * Returns a buffer with the specified endianness which shares the whole
                     * region, indexes, and marks of this buffer. Modifying the content, the
                     * indexes, or the marks of the returned buffer or this buffer affects
                     * each other's content, indexes, and marks.
                     * <p>If the specified endianness is identical to this buffer's byte
                     * order, this method can return this.</p>
                     * <p>This method does not modify readerIndex or writerIndex of this
                     * buffer.</p>
                     */
                    // @ts-ignore
                     order(order: any): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Returns the endianness ({@link ByteOrder}) of this buffer.
                     */
                    // @ts-ignore
                     getByteOrder(): any;
                    /**
                     * Gets the readerIndex of this buffer.
                     */
                    // @ts-ignore
                     readerIndex(): number;
                    /**
                     * Sets the readerIndex of this buffer.
                     */
                    // @ts-ignore
                     setReadIndex(index: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets the writerIndex of this buffer.
                     */
                    // @ts-ignore
                     writerIndex(): number;
                    /**
                     * Sets the writerIndex of this buffer.
                     */
                    // @ts-ignore
                     setWriteIndex(index: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets both the reader and writer indices.
                     */
                    // @ts-ignore
                     setIndex(readIndex: number, writeIndex: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the readerIndex and writerIndex of this buffer to 0.
                     * This method is identical to {@link #setIndex(int, int)}.
                     */
                    // @ts-ignore
                     clear(): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Marks the current readerIndex in this buffer. You can reposition
                     * the current readerIndex to the marked readerIndex by calling
                     * resetRead(). The initial value of the marked readerIndex is 0.
                     */
                    // @ts-ignore
                     markRead(): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Marks the current writerIndex in this buffer. You can reposition
                     * the current writerIndex to the marked writerIndex by calling
                     * resetWrite(). The initial value of the marked writerIndex is 0.
                     */
                    // @ts-ignore
                     markWrite(): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Resets the current readerIndex in this buffer to the marked reader
                     * index.
                     */
                    // @ts-ignore
                     resetRead(): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Resets the current writerIndex in this buffer to the marked writer
                     * index.
                     */
                    // @ts-ignore
                     resetWrite(): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Returns a slice of this buffer's readable bytes. Modifying the content
                     * of the returned buffer or this buffer affects each other's content
                     * while they maintain separate indexes and marks. This method is
                     * identical to buf.slice(buf.readerIndex(), buf.readableBytes()).
                     * This method does not modify readerIndex or writerIndex of this buffer.
                     */
                    // @ts-ignore
                     slice(): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Returns a slice of this buffer's sub-region. Modifying the content of
                     * the returned buffer or this buffer affects each other's content while
                     * they maintain separate indexes and marks. This method does not modify
                     * readerIndex or writerIndex of this buffer.
                     */
                    // @ts-ignore
                     slice(index: number, length: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Returns {@code true} if and only if this buffer has a backing byte array.
                     * <p>If this method returns true, you can safely call {@link #array()}.</p>
                     */
                    // @ts-ignore
                     hasArray(): boolean;
                    /**
                     * Gets the backing byte array of this stream.
                     */
                    // @ts-ignore
                     array(): number[];
                    /**
                     * Sets the specified boolean at the current writerIndex and increases
                     * the writerIndex by 1 in this buffer.
                     */
                    // @ts-ignore
                     writeBoolean(data: boolean): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the boolean at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setBoolean(index: number, data: boolean): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a boolean at the current readerIndex and increases the
                     * readerIndex by 1 in this buffer.
                     */
                    // @ts-ignore
                     readBoolean(): boolean;
                    /**
                     * Gets a boolean at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getBoolean(index: number): boolean;
                    /**
                     * Sets the specified byte at the current writerIndex and increases
                     * the writerIndex by 1 in this buffer.
                     */
                    // @ts-ignore
                     writeByte(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the byte at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setByte(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a byte at the current readerIndex and increases the
                     * readerIndex by 1 in this buffer.
                     */
                    // @ts-ignore
                     readByte(): number;
                    /**
                     * Gets a byte at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getByte(index: number): number;
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the number of bytes and the size of the length as a
                     * varint.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     */
                    // @ts-ignore
                     writeByteArray(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the length specified and the size of the length as a
                     * varint.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     */
                    // @ts-ignore
                     writeByteArray(data: number, start: number, length: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     */
                    // @ts-ignore
                     setByteArray(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The length of the array is written preceding the data as a varint.</p>
                     */
                    // @ts-ignore
                     setByteArray(index: number, data: number, start: number, length: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a byte array at the current readerIndex and increases the
                     * readerIndex by the length of the array and the length of the array size.
                     * <p>The length of the array is expected to be preceding the array as a
                     * varint.</p>
                     */
                    // @ts-ignore
                     readByteArray(): number[];
                    /**
                     * Gets a byte array at the specified absolute index in this buffer.
                     * <p>The length of the array is expected to be preceding the array as a
                     * varint.</p>
                     */
                    // @ts-ignore
                     readByteArray(index: number): number[];
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the number of bytes.
                     */
                    // @ts-ignore
                     writeBytes(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the specified byte array at the current writerIndex and increases
                     * the writerIndex by the length specified.
                     */
                    // @ts-ignore
                     writeBytes(data: number, start: number, length: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setBytes(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the specified byte array at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setBytes(index: number, data: number, start: number, length: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a byte array at the current readerIndex and increases the
                     * readerIndex by the length of the array.
                     */
                    // @ts-ignore
                     readBytes(length: number): number[];
                    /**
                     * Gets a byte array at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     readBytes(index: number, length: number): number[];
                    /**
                     * Sets the specified short integer at the current writerIndex and
                     * increases the writerIndex by 2 in this buffer.
                     */
                    // @ts-ignore
                     writeShort(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the short at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setShort(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a short integer at the current readerIndex and increases the
                     * readerIndex by 2 in this buffer.
                     */
                    // @ts-ignore
                     readShort(): number;
                    /**
                     * Gets a short integer at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getShort(index: number): number;
                    /**
                     * Sets the specified character at the current writerIndex and
                     * increases the writerIndex by 2 in this buffer.
                     */
                    // @ts-ignore
                     writeChar(data: string): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the char at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setChar(index: number, data: string): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a character at the current readerIndex and increases the
                     * readerIndex by 2 in this buffer.
                     */
                    // @ts-ignore
                     readChar(): string;
                    /**
                     * Gets a character at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getChar(index: number): string;
                    /**
                     * Sets the specified integer at the current writerIndex and increases
                     * the writerIndex by 4 in this buffer.
                     */
                    // @ts-ignore
                     writeInteger(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the integer at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setInteger(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets an integer at the current readerIndex and increases the
                     * readerIndex by 4 in this buffer.
                     */
                    // @ts-ignore
                     readInteger(): number;
                    /**
                     * Gets an integer at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getInteger(index: number): number;
                    /**
                     * Sets the specified long integer at the current writerIndex and
                     * increases the writerIndex by 8 in this buffer.
                     */
                    // @ts-ignore
                     writeLong(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the long integer at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setLong(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a long integer at the current readerIndex and increases the
                     * readerIndex by 8 in this buffer.
                     */
                    // @ts-ignore
                     readLong(): number;
                    /**
                     * Gets a long integer at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getLong(index: number): number;
                    /**
                     * Sets the specified float at the current writerIndex and increases
                     * the writerIndex by 4 in this buffer.
                     */
                    // @ts-ignore
                     writeFloat(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the float at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setFloat(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a float at the current readerIndex and increases the
                     * readerIndex by 4 in this buffer.
                     */
                    // @ts-ignore
                     readFloat(): number;
                    /**
                     * Gets a float at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getFloat(index: number): number;
                    /**
                     * Sets the specified double at the current writerIndex and increases
                     * the writerIndex by 8 in this buffer.
                     */
                    // @ts-ignore
                     writeDouble(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the double at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setDouble(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a double at the current readerIndex and increases the
                     * readerIndex by 8 in this buffer.
                     */
                    // @ts-ignore
                     readDouble(): number;
                    /**
                     * Gets a double at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getDouble(index: number): number;
                    /**
                     * Sets the specified varint at the current writerIndex and increases the
                     * writerIndex by the number of bytes written.
                     * <p>The number of bytes written depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     */
                    // @ts-ignore
                     writeVarInt(data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the specified varint at the specified absolute index in this buffer.
                     * This method does not modify readerIndex or writerIndex of this buffer.
                     * <p>The number of bytes written depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     */
                    // @ts-ignore
                     setVarInt(index: number, data: number): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a varint at the current readerIndex and increases the readerIndex by
                     * the number of bytes read.
                     * <p>The number of bytes read depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     */
                    // @ts-ignore
                     readVarInt(): number;
                    /**
                     * Gets a varint at the specified absolute index in this buffer.
                     * <p>The number of bytes read depends on the size of the value, see <a
                     * href=
                     * "https://developers.google.com/protocol-buffers/docs/encoding#varints">
                     * https://developers.google.com/protocol-buffers/docs/encoding#varints</a>
                     * for a full description.</p>
                     */
                    // @ts-ignore
                     getVarInt(index: number): number;
                    /**
                     * Sets the specified string at the current writerIndex and increases the
                     * writerIndex by the length of the string.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     writeString(data: string): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the string at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     setString(index: number, data: string): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a string at the current readerIndex and increases the readerIndex by
                     * the length of a varint followed by the utf-8 bytes of the string.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     readString(): string;
                    /**
                     * Gets a string at the specified absolute index in this buffer.
                     * <p>The string will be encoded as the utf length as a varint followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     getString(index: number): string;
                    /**
                     * Sets the specified string at the current writerIndex and increases the
                     * writerIndex by the length of the string.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     writeUTF(data: string): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the string at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     setUTF(index: number, data: string): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a string at the current readerIndex and increases the readerIndex by
                     * the length of a varint followed by the utf-8 bytes of the string.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     readUTF(): string;
                    /**
                     * Gets a string at the specified absolute index in this buffer.
                     * <p>The string will be encoded as the utf length as a short followed by
                     * the UTF-8 bytes of the string.</p>
                     */
                    // @ts-ignore
                     getUTF(index: number): string;
                    /**
                     * Sets the specified {@link UUID} at the current writerIndex and
                     * increases the writerIndex by 16 in this buffer.
                     */
                    // @ts-ignore
                     writeUniqueId(data: any): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the {@link UUID} at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setUniqueId(index: number, data: any): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a UUID at the current readerIndex and increases the
                     * readerIndex by 16 in this buffer.
                     */
                    // @ts-ignore
                     readUniqueId(): any;
                    /**
                     * Gets a {@link UUID} at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getUniqueId(index: number): any;
                    /**
                     * Sets the specified {@link DataView} at the current writerIndex and
                     * increases the writerIndex according to the length of the data view
                     * in this buffer.
                     */
                    // @ts-ignore
                     writeDataView(data: org.spongepowered.api.data.DataView): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Sets the {@link DataView} at the specified absolute index in this
                     * buffer. This method does not modify readerIndex or writerIndex
                     * of this buffer.
                     */
                    // @ts-ignore
                     setDataView(index: number, data: org.spongepowered.api.data.DataView): org.spongepowered.api.network.ChannelBuf;
                    /**
                     * Gets a {@link DataView} at the current readerIndex and increases the
                     * readerIndex according to the length of the data view in this buffer.
                     */
                    // @ts-ignore
                     readDataView(): org.spongepowered.api.data.DataView;
                    /**
                     * Gets a {@link DataView} at the specified absolute index in this buffer.
                     */
                    // @ts-ignore
                     getDataView(index: number): org.spongepowered.api.data.DataView;
                }
            }
        }
    }
}
