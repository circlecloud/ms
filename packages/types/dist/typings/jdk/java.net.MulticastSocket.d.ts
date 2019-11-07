declare namespace java {
    namespace net {
        // @ts-ignore
         class MulticastSocket extends java.net.DatagramSocket {
            /**
             * Create a multicast socket.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with 0 as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * <p>
             * When the socket is created the
             * {@link DatagramSocket#setReuseAddress(boolean)} method is
             * called to enable the SO_REUSEADDR socket option.
             */
            // @ts-ignore
            constructor()
            /**
             * Create a multicast socket and bind it to a specific port.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with the {@code port} argument
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * <p>
             * When the socket is created the
             * {@link DatagramSocket#setReuseAddress(boolean)} method is
             * called to enable the SO_REUSEADDR socket option.
             */
            // @ts-ignore
            constructor(port: number)
            /**
             * Create a MulticastSocket bound to the specified socket address.
             * <p>
             * Or, if the address is {@code null}, create an unbound socket.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with the SocketAddress port as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * <p>
             * When the socket is created the
             * {@link DatagramSocket#setReuseAddress(boolean)} method is
             * called to enable the SO_REUSEADDR socket option.
             */
            // @ts-ignore
            constructor(bindaddr: java.net.SocketAddress)
            /**
             * Set the default time-to-live for multicast packets sent out
             * on this {@code MulticastSocket} in order to control the
             * scope of the multicasts.
             * <p>The ttl is an <b>unsigned</b> 8-bit quantity, and so <B>must</B> be
             * in the range {@code 0 <= ttl <= 0xFF }.
             */
            // @ts-ignore
            public setTTL(ttl: number): void;
            /**
             * Set the default time-to-live for multicast packets sent out
             * on this {@code MulticastSocket} in order to control the
             * scope of the multicasts.
             * <P> The ttl <B>must</B> be in the range {@code  0 <= ttl <=
             * 255} or an {@code IllegalArgumentException} will be thrown.
             * Multicast packets sent with a TTL of {@code 0} are not transmitted
             * on the network but may be delivered locally.
             */
            // @ts-ignore
            public setTimeToLive(ttl: number): void;
            /**
             * Get the default time-to-live for multicast packets sent out on
             * the socket.
             */
            // @ts-ignore
            public getTTL(): number;
            /**
             * Get the default time-to-live for multicast packets sent out on
             * the socket.
             */
            // @ts-ignore
            public getTimeToLive(): number;
            /**
             * Joins a multicast group. Its behavior may be affected by
             * {@code setInterface} or {@code setNetworkInterface}.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             */
            // @ts-ignore
            public joinGroup(mcastaddr: java.net.InetAddress): void;
            /**
             * Leave a multicast group. Its behavior may be affected by
             * {@code setInterface} or {@code setNetworkInterface}.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             */
            // @ts-ignore
            public leaveGroup(mcastaddr: java.net.InetAddress): void;
            /**
             * Joins the specified multicast group at the specified interface.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             */
            // @ts-ignore
            public joinGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void;
            /**
             * Leave a multicast group on a specified local interface.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             */
            // @ts-ignore
            public leaveGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void;
            /**
             * Set the multicast network interface used by methods
             * whose behavior would be affected by the value of the
             * network interface. Useful for multihomed hosts.
             */
            // @ts-ignore
            public setInterface(inf: java.net.InetAddress): void;
            /**
             * Retrieve the address of the network interface used for
             * multicast packets.
             */
            // @ts-ignore
            public getInterface(): java.net.InetAddress;
            /**
             * Specify the network interface for outgoing multicast datagrams
             * sent on this socket.
             */
            // @ts-ignore
            public setNetworkInterface(netIf: java.net.NetworkInterface): void;
            /**
             * Get the multicast network interface set.
             */
            // @ts-ignore
            public getNetworkInterface(): java.net.NetworkInterface;
            /**
             * Disable/Enable local loopback of multicast datagrams
             * The option is used by the platform's networking code as a hint
             * for setting whether multicast data will be looped back to
             * the local socket.
             * <p>Because this option is a hint, applications that want to
             * verify what loopback mode is set to should call
             * {@link #getLoopbackMode()}
             */
            // @ts-ignore
            public setLoopbackMode(disable: boolean): void;
            /**
             * Get the setting for local loopback of multicast datagrams.
             */
            // @ts-ignore
            public getLoopbackMode(): boolean;
            /**
             * Sends a datagram packet to the destination, with a TTL (time-
             * to-live) other than the default for the socket.  This method
             * need only be used in instances where a particular TTL is desired;
             * otherwise it is preferable to set a TTL once on the socket, and
             * use that default TTL for all packets.  This method does <B>not
             * </B> alter the default TTL for the socket. Its behavior may be
             * affected by {@code setInterface}.
             * <p>If there is a security manager, this method first performs some
             * security checks. First, if {@code p.getAddress().isMulticastAddress()}
             * is true, this method calls the
             * security manager's {@code checkMulticast} method
             * with {@code p.getAddress()} and {@code ttl} as its arguments.
             * If the evaluation of that expression is false,
             * this method instead calls the security manager's
             * {@code checkConnect} method with arguments
             * {@code p.getAddress().getHostAddress()} and
             * {@code p.getPort()}. Each call to a security manager method
             * could result in a SecurityException if the operation is not allowed.
             */
            // @ts-ignore
            public send(p: java.net.DatagramPacket, ttl: number): void;
        }
    }
}
