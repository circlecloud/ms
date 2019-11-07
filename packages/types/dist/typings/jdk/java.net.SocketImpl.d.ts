// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class SocketImpl extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected fd: java.io.FileDescriptor;
            // @ts-ignore
            protected address: java.net.InetAddress;
            // @ts-ignore
            protected port: number;
            // @ts-ignore
            protected localport: number;
            /**
             * Creates either a stream or a datagram socket.
             */
            // @ts-ignore
            protected abstract create(stream: boolean): void;
            /**
             * Connects this socket to the specified port on the named host.
             */
            // @ts-ignore
            protected abstract connect(host: string, port: number): void;
            /**
             * Binds this socket to the specified local IP address and port number.
             */
            // @ts-ignore
            protected abstract bind(host: java.net.InetAddress, port: number): void;
            /**
             * Sets the maximum queue length for incoming connection indications
             * (a request to connect) to the {@code count} argument. If a
             * connection indication arrives when the queue is full, the
             * connection is refused.
             */
            // @ts-ignore
            protected abstract listen(backlog: number): void;
            /**
             * Accepts a connection.
             */
            // @ts-ignore
            protected abstract accept(s: java.net.SocketImpl): void;
            /**
             * Returns an input stream for this socket.
             */
            // @ts-ignore
            protected abstract getInputStream(): java.io.InputStream;
            /**
             * Returns an output stream for this socket.
             */
            // @ts-ignore
            protected abstract getOutputStream(): java.io.OutputStream;
            /**
             * Returns the number of bytes that can be read from this socket
             * without blocking.
             */
            // @ts-ignore
            protected abstract available(): number;
            /**
             * Closes this socket.
             */
            // @ts-ignore
            protected abstract close(): void;
            /**
             * Places the input stream for this socket at "end of stream".
             * Any data sent to this socket is acknowledged and then
             * silently discarded.
             * If you read from a socket input stream after invoking this method on the
             * socket, the stream's {@code available} method will return 0, and its
             * {@code read} methods will return {@code -1} (end of stream).
             */
            // @ts-ignore
            protected shutdownInput(): void;
            /**
             * Disables the output stream for this socket.
             * For a TCP socket, any previously written data will be sent
             * followed by TCP's normal connection termination sequence.
             * If you write to a socket output stream after invoking
             * shutdownOutput() on the socket, the stream will throw
             * an IOException.
             */
            // @ts-ignore
            protected shutdownOutput(): void;
            /**
             * Returns the value of this socket's {@code fd} field.
             */
            // @ts-ignore
            protected getFileDescriptor(): java.io.FileDescriptor;
            /**
             * Returns the value of this socket's {@code address} field.
             */
            // @ts-ignore
            protected getInetAddress(): java.net.InetAddress;
            /**
             * Returns the value of this socket's {@code port} field.
             */
            // @ts-ignore
            protected getPort(): number;
            /**
             * Returns whether or not this SocketImpl supports sending
             * urgent data. By default, false is returned
             * unless the method is overridden in a sub-class
             */
            // @ts-ignore
            protected supportsUrgentData(): boolean;
            /**
             * Send one byte of urgent data on the socket.
             * The byte to be sent is the low eight bits of the parameter
             */
            // @ts-ignore
            protected abstract sendUrgentData(data: number): void;
            /**
             * Returns the value of this socket's {@code localport} field.
             */
            // @ts-ignore
            protected getLocalPort(): number;
            /**
             * Returns the address and port of this socket as a {@code String}.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Sets performance preferences for this socket.
             * <p> Sockets use the TCP/IP protocol by default.  Some implementations
             * may offer alternative protocols which have different performance
             * characteristics than TCP/IP.  This method allows the application to
             * express its own preferences as to how these tradeoffs should be made
             * when the implementation chooses from the available protocols.
             * <p> Performance preferences are described by three integers
             * whose values indicate the relative importance of short connection time,
             * low latency, and high bandwidth.  The absolute values of the integers
             * are irrelevant; in order to choose a protocol the values are simply
             * compared, with larger values indicating stronger preferences. Negative
             * values represent a lower priority than positive values. If the
             * application prefers short connection time over both low latency and high
             * bandwidth, for example, then it could invoke this method with the values
             * {@code (1, 0, 0)}.  If the application prefers high bandwidth above low
             * latency, and low latency above short connection time, then it could
             * invoke this method with the values {@code (0, 1, 2)}.
             * By default, this method does nothing, unless it is overridden in a
             * a sub-class.
             */
            // @ts-ignore
            protected setPerformancePreferences(connectionTime: number, latency: number, bandwidth: number): void;
        }
    }
}
