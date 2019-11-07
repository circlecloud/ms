declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class DatagramSocketImpl extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected localPort: number;
            // @ts-ignore
            protected fd: java.io.FileDescriptor;
            /**
             * Creates a datagram socket.
             */
            // @ts-ignore
            protected abstract create(): void;
            /**
             * Binds a datagram socket to a local port and address.
             */
            // @ts-ignore
            protected abstract bind(lport: number, laddr: java.net.InetAddress): void;
            /**
             * Sends a datagram packet. The packet contains the data and the
             * destination address to send the packet to.
             */
            // @ts-ignore
            protected abstract send(p: java.net.DatagramPacket): void;
            /**
             * Connects a datagram socket to a remote destination. This associates the remote
             * address with the local socket so that datagrams may only be sent to this destination
             * and received from this destination. This may be overridden to call a native
             * system connect.
             * <p>If the remote destination to which the socket is connected does not
             * exist, or is otherwise unreachable, and if an ICMP destination unreachable
             * packet has been received for that address, then a subsequent call to
             * send or receive may throw a PortUnreachableException.
             * Note, there is no guarantee that the exception will be thrown.
             */
            // @ts-ignore
            protected connect(address: java.net.InetAddress, port: number): void;
            /**
             * Disconnects a datagram socket from its remote destination.
             */
            // @ts-ignore
            protected disconnect(): void;
            /**
             * Peek at the packet to see who it is from. Updates the specified {@code InetAddress}
             * to the address which the packet came from.
             */
            // @ts-ignore
            protected abstract peek(i: java.net.InetAddress): number;
            /**
             * Peek at the packet to see who it is from. The data is copied into the specified
             * {@code DatagramPacket}. The data is returned,
             * but not consumed, so that a subsequent peekData/receive operation
             * will see the same data.
             */
            // @ts-ignore
            protected abstract peekData(p: java.net.DatagramPacket): number;
            /**
             * Receive the datagram packet.
             */
            // @ts-ignore
            protected abstract receive(p: java.net.DatagramPacket): void;
            /**
             * Set the TTL (time-to-live) option.
             */
            // @ts-ignore
            protected abstract setTTL(ttl: number): void;
            /**
             * Retrieve the TTL (time-to-live) option.
             */
            // @ts-ignore
            protected abstract getTTL(): number;
            /**
             * Set the TTL (time-to-live) option.
             */
            // @ts-ignore
            protected abstract setTimeToLive(ttl: number): void;
            /**
             * Retrieve the TTL (time-to-live) option.
             */
            // @ts-ignore
            protected abstract getTimeToLive(): number;
            /**
             * Join the multicast group.
             */
            // @ts-ignore
            protected abstract join(inetaddr: java.net.InetAddress): void;
            /**
             * Leave the multicast group.
             */
            // @ts-ignore
            protected abstract leave(inetaddr: java.net.InetAddress): void;
            /**
             * Join the multicast group.
             */
            // @ts-ignore
            protected abstract joinGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void;
            /**
             * Leave the multicast group.
             */
            // @ts-ignore
            protected abstract leaveGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void;
            /**
             * Close the socket.
             */
            // @ts-ignore
            protected abstract close(): void;
            /**
             * Gets the local port.
             */
            // @ts-ignore
            protected getLocalPort(): number;
            /**
             * Gets the datagram socket file descriptor.
             */
            // @ts-ignore
            protected getFileDescriptor(): java.io.FileDescriptor;
        }
    }
}
