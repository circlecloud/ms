// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface MulticastChannel {
                /**
                 * Closes this channel.
                 * <p> If the channel is a member of a multicast group then the membership
                 * is {@link MembershipKey#drop dropped}. Upon return, the {@link
                 * MembershipKey membership-key} will be {@link MembershipKey#isValid
                 * invalid}.
                 * <p> This method otherwise behaves exactly as specified by the {@link
                 * Channel} interface.
                 */
                // @ts-ignore
                 close(): void;
                /**
                 * Joins a multicast group to begin receiving all datagrams sent to the group,
                 * returning a membership key.
                 * <p> If this channel is currently a member of the group on the given
                 * interface to receive all datagrams then the membership key, representing
                 * that membership, is returned. Otherwise this channel joins the group and
                 * the resulting new membership key is returned. The resulting membership key
                 * is not {@link MembershipKey#sourceAddress source-specific}.
                 * <p> A multicast channel may join several multicast groups, including
                 * the same group on more than one interface. An implementation may impose a
                 * limit on the number of groups that may be joined at the same time.
                 */
                // @ts-ignore
                 join(group: java.net.InetAddress, interf: java.net.NetworkInterface): java.nio.channels.MembershipKey;
                /**
                 * Joins a multicast group to begin receiving datagrams sent to the group
                 * from a given source address.
                 * <p> If this channel is currently a member of the group on the given
                 * interface to receive datagrams from the given source address then the
                 * membership key, representing that membership, is returned. Otherwise this
                 * channel joins the group and the resulting new membership key is returned.
                 * The resulting membership key is {@link MembershipKey#sourceAddress
                 * source-specific}.
                 * <p> Membership is <em>cumulative</em> and this method may be invoked
                 * again with the same group and interface to allow receiving datagrams sent
                 * by other source addresses to the group.
                 */
                // @ts-ignore
                 join(group: java.net.InetAddress, interf: java.net.NetworkInterface, source: java.net.InetAddress): java.nio.channels.MembershipKey;
            }
        }
    }
}
