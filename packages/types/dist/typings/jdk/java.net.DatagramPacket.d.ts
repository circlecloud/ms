declare namespace java {
    namespace net {
        // @ts-ignore
         class DatagramPacket extends java.lang.Object {
            /**
             * Constructs a {@code DatagramPacket} for receiving packets of
             * length {@code length}, specifying an offset into the buffer.
             * <p>
             * The {@code length} argument must be less than or equal to
             * {@code buf.length}.
             */
            // @ts-ignore
            constructor(buf: number, offset: number, length: number)
            /**
             * Constructs a {@code DatagramPacket} for receiving packets of
             * length {@code length}.
             * <p>
             * The {@code length} argument must be less than or equal to
             * {@code buf.length}.
             */
            // @ts-ignore
            constructor(buf: number, length: number)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} with offset {@code ioffset}to the
             * specified port number on the specified host. The
             * {@code length} argument must be less than or equal to
             * {@code buf.length}.
             */
            // @ts-ignore
            constructor(buf: number, offset: number, length: number, address: java.net.InetAddress, port: number)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} with offset {@code ioffset}to the
             * specified port number on the specified host. The
             * {@code length} argument must be less than or equal to
             * {@code buf.length}.
             */
            // @ts-ignore
            constructor(buf: number, offset: number, length: number, address: java.net.SocketAddress)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} to the specified port number on the specified
             * host. The {@code length} argument must be less than or equal
             * to {@code buf.length}.
             */
            // @ts-ignore
            constructor(buf: number, length: number, address: java.net.InetAddress, port: number)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} to the specified port number on the specified
             * host. The {@code length} argument must be less than or equal
             * to {@code buf.length}.
             */
            // @ts-ignore
            constructor(buf: number, length: number, address: java.net.SocketAddress)
            /**
             * Returns the IP address of the machine to which this datagram is being
             * sent or from which the datagram was received.
             */
            // @ts-ignore
            public getAddress(): java.net.InetAddress;
            /**
             * Returns the port number on the remote host to which this datagram is
             * being sent or from which the datagram was received.
             */
            // @ts-ignore
            public getPort(): number;
            /**
             * Returns the data buffer. The data received or the data to be sent
             * starts from the {@code offset} in the buffer,
             * and runs for {@code length} long.
             */
            // @ts-ignore
            public getData(): number[];
            /**
             * Returns the offset of the data to be sent or the offset of the
             * data received.
             */
            // @ts-ignore
            public getOffset(): number;
            /**
             * Returns the length of the data to be sent or the length of the
             * data received.
             */
            // @ts-ignore
            public getLength(): number;
            /**
             * Set the data buffer for this packet. This sets the
             * data, length and offset of the packet.
             */
            // @ts-ignore
            public setData(buf: number, offset: number, length: number): void;
            /**
             * Sets the IP address of the machine to which this datagram
             * is being sent.
             */
            // @ts-ignore
            public setAddress(iaddr: java.net.InetAddress): void;
            /**
             * Sets the port number on the remote host to which this datagram
             * is being sent.
             */
            // @ts-ignore
            public setPort(iport: number): void;
            /**
             * Sets the SocketAddress (usually IP address + port number) of the remote
             * host to which this datagram is being sent.
             */
            // @ts-ignore
            public setSocketAddress(address: java.net.SocketAddress): void;
            /**
             * Gets the SocketAddress (usually IP address + port number) of the remote
             * host that this packet is being sent to or is coming from.
             */
            // @ts-ignore
            public getSocketAddress(): java.net.SocketAddress;
            /**
             * Set the data buffer for this packet. With the offset of
             * this DatagramPacket set to 0, and the length set to
             * the length of {@code buf}.
             */
            // @ts-ignore
            public setData(buf: number): void;
            /**
             * Set the length for this packet. The length of the packet is
             * the number of bytes from the packet's data buffer that will be
             * sent, or the number of bytes of the packet's data buffer that
             * will be used for receiving data. The length must be lesser or
             * equal to the offset plus the length of the packet's buffer.
             */
            // @ts-ignore
            public setLength(length: number): void;
        }
    }
}
