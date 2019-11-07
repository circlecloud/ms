// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class DatagramSocket extends java.lang.Object {
            /**
             * Constructs a datagram socket and binds it to any available port
             * on the local host machine.  The socket will be bound to the
             * {@link InetAddress#isAnyLocalAddress wildcard} address,
             * an IP address chosen by the kernel.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with 0 as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an unbound datagram socket with the specified
             * DatagramSocketImpl.
             */
            // @ts-ignore
            constructor(impl: java.net.DatagramSocketImpl)
            /**
             * Creates a datagram socket, bound to the specified local
             * socket address.
             * <p>
             * If, if the address is {@code null}, creates an unbound socket.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with the port from the socket address
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            constructor(bindaddr: java.net.SocketAddress)
            /**
             * Constructs a datagram socket and binds it to the specified port
             * on the local host machine.  The socket will be bound to the
             * {@link InetAddress#isAnyLocalAddress wildcard} address,
             * an IP address chosen by the kernel.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with the {@code port} argument
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            constructor(port: number)
            /**
             * Creates a datagram socket, bound to the specified local
             * address.  The local port must be between 0 and 65535 inclusive.
             * If the IP address is 0.0.0.0, the socket will be bound to the
             * {@link InetAddress#isAnyLocalAddress wildcard} address,
             * an IP address chosen by the kernel.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with the {@code port} argument
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            constructor(port: number, laddr: java.net.InetAddress)
            /**
             * Binds this DatagramSocket to a specific address and port.
             * <p>
             * If the address is {@code null}, then the system will pick up
             * an ephemeral port and a valid local address to bind the socket.
             * <p>
             */
            // @ts-ignore
            public bind(addr: java.net.SocketAddress): void;
            /**
             * Connects the socket to a remote address for this socket. When a
             * socket is connected to a remote address, packets may only be
             * sent to or received from that address. By default a datagram
             * socket is not connected.
             * <p>If the remote destination to which the socket is connected does not
             * exist, or is otherwise unreachable, and if an ICMP destination unreachable
             * packet has been received for that address, then a subsequent call to
             * send or receive may throw a PortUnreachableException. Note, there is no
             * guarantee that the exception will be thrown.
             * <p> If a security manager has been installed then it is invoked to check
             * access to the remote address. Specifically, if the given {@code address}
             * is a {@link InetAddress#isMulticastAddress multicast address},
             * the security manager's {@link
             * java.lang.SecurityManager#checkMulticast(InetAddress)
             * checkMulticast} method is invoked with the given {@code address}.
             * Otherwise, the security manager's {@link
             * java.lang.SecurityManager#checkConnect(String,int) checkConnect}
             * and {@link java.lang.SecurityManager#checkAccept checkAccept} methods
             * are invoked, with the given {@code address} and {@code port}, to
             * verify that datagrams are permitted to be sent and received
             * respectively.
             * <p> When a socket is connected, {@link #receive receive} and
             * {@link #send send} <b>will not perform any security checks</b>
             * on incoming and outgoing packets, other than matching the packet's
             * and the socket's address and port. On a send operation, if the
             * packet's address is set and the packet's address and the socket's
             * address do not match, an {@code IllegalArgumentException} will be
             * thrown. A socket connected to a multicast address may only be used
             * to send packets.
             */
            // @ts-ignore
            public connect(address: java.net.InetAddress, port: number): void;
            /**
             * Connects this socket to a remote socket address (IP address + port number).
             * <p> If given an {@link InetSocketAddress InetSocketAddress}, this method
             * behaves as if invoking {@link #connect(InetAddress,int) connect(InetAddress,int)}
             * with the the given socket addresses IP address and port number.
             */
            // @ts-ignore
            public connect(addr: java.net.SocketAddress): void;
            /**
             * Disconnects the socket. If the socket is closed or not connected,
             * then this method has no effect.
             */
            // @ts-ignore
            public disconnect(): void;
            /**
             * Returns the binding state of the socket.
             * <p>
             * If the socket was bound prior to being {@link #close closed},
             * then this method will continue to return {@code true}
             * after the socket is closed.
             */
            // @ts-ignore
            public isBound(): boolean;
            /**
             * Returns the connection state of the socket.
             * <p>
             * If the socket was connected prior to being {@link #close closed},
             * then this method will continue to return {@code true}
             * after the socket is closed.
             */
            // @ts-ignore
            public isConnected(): boolean;
            /**
             * Returns the address to which this socket is connected. Returns
             * {@code null} if the socket is not connected.
             * <p>
             * If the socket was connected prior to being {@link #close closed},
             * then this method will continue to return the connected address
             * after the socket is closed.
             */
            // @ts-ignore
            public getInetAddress(): java.net.InetAddress;
            /**
             * Returns the port number to which this socket is connected.
             * Returns {@code -1} if the socket is not connected.
             * <p>
             * If the socket was connected prior to being {@link #close closed},
             * then this method will continue to return the connected port number
             * after the socket is closed.
             */
            // @ts-ignore
            public getPort(): number;
            /**
             * Returns the address of the endpoint this socket is connected to, or
             * {@code null} if it is unconnected.
             * <p>
             * If the socket was connected prior to being {@link #close closed},
             * then this method will continue to return the connected address
             * after the socket is closed.
             */
            // @ts-ignore
            public getRemoteSocketAddress(): java.net.SocketAddress;
            /**
             * Returns the address of the endpoint this socket is bound to.
             */
            // @ts-ignore
            public getLocalSocketAddress(): java.net.SocketAddress;
            /**
             * Sends a datagram packet from this socket. The
             * {@code DatagramPacket} includes information indicating the
             * data to be sent, its length, the IP address of the remote host,
             * and the port number on the remote host.
             * <p>If there is a security manager, and the socket is not currently
             * connected to a remote address, this method first performs some
             * security checks. First, if {@code p.getAddress().isMulticastAddress()}
             * is true, this method calls the
             * security manager's {@code checkMulticast} method
             * with {@code p.getAddress()} as its argument.
             * If the evaluation of that expression is false,
             * this method instead calls the security manager's
             * {@code checkConnect} method with arguments
             * {@code p.getAddress().getHostAddress()} and
             * {@code p.getPort()}. Each call to a security manager method
             * could result in a SecurityException if the operation is not allowed.
             */
            // @ts-ignore
            public send(p: java.net.DatagramPacket): void;
            /**
             * Receives a datagram packet from this socket. When this method
             * returns, the {@code DatagramPacket}'s buffer is filled with
             * the data received. The datagram packet also contains the sender's
             * IP address, and the port number on the sender's machine.
             * <p>
             * This method blocks until a datagram is received. The
             * {@code length} field of the datagram packet object contains
             * the length of the received message. If the message is longer than
             * the packet's length, the message is truncated.
             * <p>
             * If there is a security manager, a packet cannot be received if the
             * security manager's {@code checkAccept} method
             * does not allow it.
             */
            // @ts-ignore
            public receive(p: java.net.DatagramPacket): void;
            /**
             * Gets the local address to which the socket is bound.
             * <p>If there is a security manager, its
             * {@code checkConnect} method is first called
             * with the host address and {@code -1}
             * as its arguments to see if the operation is allowed.
             */
            // @ts-ignore
            public getLocalAddress(): java.net.InetAddress;
            /**
             * Returns the port number on the local host to which this socket
             * is bound.
             */
            // @ts-ignore
            public getLocalPort(): number;
            /**
             * Enable/disable SO_TIMEOUT with the specified timeout, in
             * milliseconds. With this option set to a non-zero timeout,
             * a call to receive() for this DatagramSocket
             * will block for only this amount of time.  If the timeout expires,
             * a <B>java.net.SocketTimeoutException</B> is raised, though the
             * DatagramSocket is still valid.  The option <B>must</B> be enabled
             * prior to entering the blocking operation to have effect.  The
             * timeout must be {@code > 0}.
             * A timeout of zero is interpreted as an infinite timeout.
             */
            // @ts-ignore
            public setSoTimeout(timeout: number): void;
            /**
             * Retrieve setting for SO_TIMEOUT.  0 returns implies that the
             * option is disabled (i.e., timeout of infinity).
             */
            // @ts-ignore
            public getSoTimeout(): number;
            /**
             * Sets the SO_SNDBUF option to the specified value for this
             * {@code DatagramSocket}. The SO_SNDBUF option is used by the
             * network implementation as a hint to size the underlying
             * network I/O buffers. The SO_SNDBUF setting may also be used
             * by the network implementation to determine the maximum size
             * of the packet that can be sent on this socket.
             * <p>
             * As SO_SNDBUF is a hint, applications that want to verify
             * what size the buffer is should call {@link #getSendBufferSize()}.
             * <p>
             * Increasing the buffer size may allow multiple outgoing packets
             * to be queued by the network implementation when the send rate
             * is high.
             * <p>
             * Note: If {@link #send(DatagramPacket)} is used to send a
             * {@code DatagramPacket} that is larger than the setting
             * of SO_SNDBUF then it is implementation specific if the
             * packet is sent or discarded.
             */
            // @ts-ignore
            public setSendBufferSize(size: number): void;
            /**
             * Get value of the SO_SNDBUF option for this {@code DatagramSocket}, that is the
             * buffer size used by the platform for output on this {@code DatagramSocket}.
             */
            // @ts-ignore
            public getSendBufferSize(): number;
            /**
             * Sets the SO_RCVBUF option to the specified value for this
             * {@code DatagramSocket}. The SO_RCVBUF option is used by the
             * the network implementation as a hint to size the underlying
             * network I/O buffers. The SO_RCVBUF setting may also be used
             * by the network implementation to determine the maximum size
             * of the packet that can be received on this socket.
             * <p>
             * Because SO_RCVBUF is a hint, applications that want to
             * verify what size the buffers were set to should call
             * {@link #getReceiveBufferSize()}.
             * <p>
             * Increasing SO_RCVBUF may allow the network implementation
             * to buffer multiple packets when packets arrive faster than
             * are being received using {@link #receive(DatagramPacket)}.
             * <p>
             * Note: It is implementation specific if a packet larger
             * than SO_RCVBUF can be received.
             */
            // @ts-ignore
            public setReceiveBufferSize(size: number): void;
            /**
             * Get value of the SO_RCVBUF option for this {@code DatagramSocket}, that is the
             * buffer size used by the platform for input on this {@code DatagramSocket}.
             */
            // @ts-ignore
            public getReceiveBufferSize(): number;
            /**
             * Enable/disable the SO_REUSEADDR socket option.
             * <p>
             * For UDP sockets it may be necessary to bind more than one
             * socket to the same socket address. This is typically for the
             * purpose of receiving multicast packets
             * (See {@link java.net.MulticastSocket}). The
             * {@code SO_REUSEADDR} socket option allows multiple
             * sockets to be bound to the same socket address if the
             * {@code SO_REUSEADDR} socket option is enabled prior
             * to binding the socket using {@link #bind(SocketAddress)}.
             * <p>
             * Note: This functionality is not supported by all existing platforms,
             * so it is implementation specific whether this option will be ignored
             * or not. However, if it is not supported then
             * {@link #getReuseAddress()} will always return {@code false}.
             * <p>
             * When a {@code DatagramSocket} is created the initial setting
             * of {@code SO_REUSEADDR} is disabled.
             * <p>
             * The behaviour when {@code SO_REUSEADDR} is enabled or
             * disabled after a socket is bound (See {@link #isBound()})
             * is not defined.
             */
            // @ts-ignore
            public setReuseAddress(on: boolean): void;
            /**
             * Tests if SO_REUSEADDR is enabled.
             */
            // @ts-ignore
            public getReuseAddress(): boolean;
            /**
             * Enable/disable SO_BROADCAST.
             * <p> Some operating systems may require that the Java virtual machine be
             * started with implementation specific privileges to enable this option or
             * send broadcast datagrams.
             */
            // @ts-ignore
            public setBroadcast(on: boolean): void;
            /**
             * Tests if SO_BROADCAST is enabled.
             */
            // @ts-ignore
            public getBroadcast(): boolean;
            /**
             * Sets traffic class or type-of-service octet in the IP
             * datagram header for datagrams sent from this DatagramSocket.
             * As the underlying network implementation may ignore this
             * value applications should consider it a hint.
             * <P> The tc <B>must</B> be in the range {@code 0 <= tc <=
             * 255} or an IllegalArgumentException will be thrown.
             * <p>Notes:
             * <p>For Internet Protocol v4 the value consists of an
             * {@code integer}, the least significant 8 bits of which
             * represent the value of the TOS octet in IP packets sent by
             * the socket.
             * RFC 1349 defines the TOS values as follows:
             * <UL>
             * <LI><CODE>IPTOS_LOWCOST (0x02)</CODE></LI>
             * <LI><CODE>IPTOS_RELIABILITY (0x04)</CODE></LI>
             * <LI><CODE>IPTOS_THROUGHPUT (0x08)</CODE></LI>
             * <LI><CODE>IPTOS_LOWDELAY (0x10)</CODE></LI>
             * </UL>
             * The last low order bit is always ignored as this
             * corresponds to the MBZ (must be zero) bit.
             * <p>
             * Setting bits in the precedence field may result in a
             * SocketException indicating that the operation is not
             * permitted.
             * <p>
             * for Internet Protocol v6 {@code tc} is the value that
             * would be placed into the sin6_flowinfo field of the IP header.
             */
            // @ts-ignore
            public setTrafficClass(tc: number): void;
            /**
             * Gets traffic class or type-of-service in the IP datagram
             * header for packets sent from this DatagramSocket.
             * <p>
             * As the underlying network implementation may ignore the
             * traffic class or type-of-service set using {@link #setTrafficClass(int)}
             * this method may return a different value than was previously
             * set using the {@link #setTrafficClass(int)} method on this
             * DatagramSocket.
             */
            // @ts-ignore
            public getTrafficClass(): number;
            /**
             * Closes this datagram socket.
             * <p>
             * Any thread currently blocked in {@link #receive} upon this socket
             * will throw a {@link SocketException}.
             * <p> If this socket has an associated channel then the channel is closed
             * as well.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Returns whether the socket is closed or not.
             */
            // @ts-ignore
            public isClosed(): boolean;
            /**
             * Returns the unique {@link java.nio.channels.DatagramChannel} object
             * associated with this datagram socket, if any.
             * <p> A datagram socket will have a channel if, and only if, the channel
             * itself was created via the {@link java.nio.channels.DatagramChannel#open
             * DatagramChannel.open} method.
             */
            // @ts-ignore
            public getChannel(): java.nio.channels.DatagramChannel;
            /**
             * Sets the datagram socket implementation factory for the
             * application. The factory can be specified only once.
             * <p>
             * When an application creates a new datagram socket, the socket
             * implementation factory's {@code createDatagramSocketImpl} method is
             * called to create the actual datagram socket implementation.
             * <p>
             * Passing {@code null} to the method is a no-op unless the factory
             * was already set.
             * <p>If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             */
            // @ts-ignore
            public static setDatagramSocketImplFactory(fac: java.net.DatagramSocketImplFactory): void;
        }
    }
}
