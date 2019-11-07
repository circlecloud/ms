declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class MembershipKey extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Tells whether or not this membership is valid.
                 * <p> A multicast group membership is valid upon creation and remains
                 * valid until the membership is dropped by invoking the {@link #drop() drop}
                 * method, or the channel is closed.
                 */
                // @ts-ignore
                public abstract isValid(): boolean;
                /**
                 * Drop membership.
                 * <p> If the membership key represents a membership to receive all datagrams
                 * then the membership is dropped and the channel will no longer receive any
                 * datagrams sent to the group. If the membership key is source-specific
                 * then the channel will no longer receive datagrams sent to the group from
                 * that source address.
                 * <p> After membership is dropped it may still be possible to receive
                 * datagrams sent to the group. This can arise when datagrams are waiting to
                 * be received in the socket's receive buffer. After membership is dropped
                 * then the channel may {@link MulticastChannel#join join} the group again
                 * in which case a new membership key is returned.
                 * <p> Upon return, this membership object will be {@link #isValid() invalid}.
                 * If the multicast group membership is already invalid then invoking this
                 * method has no effect. Once a multicast group membership is invalid,
                 * it remains invalid forever.
                 */
                // @ts-ignore
                public abstract drop(): void;
                /**
                 * Block multicast datagrams from the given source address.
                 * <p> If this membership key is not source-specific, and the underlying
                 * operating system supports source filtering, then this method blocks
                 * multicast datagrams from the given source address. If the given source
                 * address is already blocked then this method has no effect.
                 * After a source address is blocked it may still be possible to receive
                 * datagrams from that source. This can arise when datagrams are waiting to
                 * be received in the socket's receive buffer.
                 */
                // @ts-ignore
                public abstract block(source: java.net.InetAddress): java.nio.channels.MembershipKey;
                /**
                 * Unblock multicast datagrams from the given source address that was
                 * previously blocked using the {@link #block(InetAddress) block} method.
                 */
                // @ts-ignore
                public abstract unblock(source: java.net.InetAddress): java.nio.channels.MembershipKey;
                /**
                 * Returns the channel for which this membership key was created. This
                 * method will continue to return the channel even after the membership
                 * becomes {@link #isValid invalid}.
                 */
                // @ts-ignore
                public abstract channel(): java.nio.channels.MulticastChannel;
                /**
                 * Returns the multicast group for which this membership key was created.
                 * This method will continue to return the group even after the membership
                 * becomes {@link #isValid invalid}.
                 */
                // @ts-ignore
                public abstract group(): java.net.InetAddress;
                /**
                 * Returns the network interface for which this membership key was created.
                 * This method will continue to return the network interface even after the
                 * membership becomes {@link #isValid invalid}.
                 */
                // @ts-ignore
                public abstract networkInterface(): java.net.NetworkInterface;
                /**
                 * Returns the source address if this membership key is source-specific,
                 * or {@code null} if this membership is not source-specific.
                 */
                // @ts-ignore
                public abstract sourceAddress(): java.net.InetAddress;
            }
        }
    }
}
