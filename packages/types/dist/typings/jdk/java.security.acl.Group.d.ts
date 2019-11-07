// @ts-nocheck
declare namespace java {
    namespace security {
        namespace acl {
            // @ts-ignore
            interface Group {
                /**
                 * Adds the specified member to the group.
                 */
                // @ts-ignore
                 addMember(user: java.security.Principal): boolean;
                /**
                 * Removes the specified member from the group.
                 */
                // @ts-ignore
                 removeMember(user: java.security.Principal): boolean;
                /**
                 * Returns true if the passed principal is a member of the group.
                 * This method does a recursive search, so if a principal belongs to a
                 * group which is a member of this group, true is returned.
                 */
                // @ts-ignore
                 isMember(member: java.security.Principal): boolean;
                /**
                 * Returns an enumeration of the members in the group.
                 * The returned objects can be instances of either Principal
                 * or Group (which is a subclass of Principal).
                 */
                // @ts-ignore
                 members(): java.util.Enumeration;
            }
        }
    }
}
