declare namespace java {
    namespace net {
        // @ts-ignore
         class NetworkInterface extends java.lang.Object {
            /**
             * Get the name of this network interface.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Convenience method to return an Enumeration with all or a
             * subset of the InetAddresses bound to this network interface.
             * <p>
             * If there is a security manager, its {@code checkConnect}
             * method is called for each InetAddress. Only InetAddresses where
             * the {@code checkConnect} doesn't throw a SecurityException
             * will be returned in the Enumeration. However, if the caller has the
             * {@link NetPermission}("getNetworkInformation") permission, then all
             * InetAddresses are returned.
             */
            // @ts-ignore
            public getInetAddresses(): java.util.Enumeration;
            /**
             * Get a List of all or a subset of the {@code InterfaceAddresses}
             * of this network interface.
             * <p>
             * If there is a security manager, its {@code checkConnect}
             * method is called with the InetAddress for each InterfaceAddress.
             * Only InterfaceAddresses where the {@code checkConnect} doesn't throw
             * a SecurityException will be returned in the List.
             */
            // @ts-ignore
            public getInterfaceAddresses(): java.util.List;
            /**
             * Get an Enumeration with all the subinterfaces (also known as virtual
             * interfaces) attached to this network interface.
             * <p>
             * For instance eth0:1 will be a subinterface to eth0.
             */
            // @ts-ignore
            public getSubInterfaces(): java.util.Enumeration;
            /**
             * Returns the parent NetworkInterface of this interface if this is
             * a subinterface, or {@code null} if it is a physical
             * (non virtual) interface or has no parent.
             */
            // @ts-ignore
            public getParent(): java.net.NetworkInterface;
            /**
             * Returns the index of this network interface. The index is an integer greater
             * or equal to zero, or {@code -1} for unknown. This is a system specific value
             * and interfaces with the same name can have different indexes on different
             * machines.
             */
            // @ts-ignore
            public getIndex(): number;
            /**
             * Get the display name of this network interface.
             * A display name is a human readable String describing the network
             * device.
             */
            // @ts-ignore
            public getDisplayName(): string;
            /**
             * Searches for the network interface with the specified name.
             */
            // @ts-ignore
            public static getByName(name: string): java.net.NetworkInterface;
            /**
             * Get a network interface given its index.
             */
            // @ts-ignore
            public static getByIndex(index: number): java.net.NetworkInterface;
            /**
             * Convenience method to search for a network interface that
             * has the specified Internet Protocol (IP) address bound to
             * it.
             * <p>
             * If the specified IP address is bound to multiple network
             * interfaces it is not defined which network interface is
             * returned.
             */
            // @ts-ignore
            public static getByInetAddress(addr: java.net.InetAddress): java.net.NetworkInterface;
            /**
             * Returns all the interfaces on this machine. The {@code Enumeration}
             * contains at least one element, possibly representing a loopback
             * interface that only supports communication between entities on
             * this machine.
             * NOTE: can use getNetworkInterfaces()+getInetAddresses()
             * to obtain all IP addresses for this node
             */
            // @ts-ignore
            public static getNetworkInterfaces(): java.util.Enumeration;
            /**
             * Returns whether a network interface is up and running.
             */
            // @ts-ignore
            public isUp(): boolean;
            /**
             * Returns whether a network interface is a loopback interface.
             */
            // @ts-ignore
            public isLoopback(): boolean;
            /**
             * Returns whether a network interface is a point to point interface.
             * A typical point to point interface would be a PPP connection through
             * a modem.
             */
            // @ts-ignore
            public isPointToPoint(): boolean;
            /**
             * Returns whether a network interface supports multicasting or not.
             */
            // @ts-ignore
            public supportsMulticast(): boolean;
            /**
             * Returns the hardware address (usually MAC) of the interface if it
             * has one and if it can be accessed given the current privileges.
             * If a security manager is set, then the caller must have
             * the permission {@link NetPermission}("getNetworkInformation").
             */
            // @ts-ignore
            public getHardwareAddress(): number[];
            /**
             * Returns the Maximum Transmission Unit (MTU) of this interface.
             */
            // @ts-ignore
            public getMTU(): number;
            /**
             * Returns whether this interface is a virtual interface (also called
             * subinterface).
             * Virtual interfaces are, on some systems, interfaces created as a child
             * of a physical interface and given different settings (like address or
             * MTU). Usually the name of the interface will the name of the parent
             * followed by a colon (:) and a number identifying the child since there
             * can be several virtual interfaces attached to a single physical
             * interface.
             */
            // @ts-ignore
            public isVirtual(): boolean;
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same NetworkInterface
             * as this object.
             * <p>
             * Two instances of {@code NetworkInterface} represent the same
             * NetworkInterface if both name and addrs are the same for both.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public toString(): string;
        }
    }
}
