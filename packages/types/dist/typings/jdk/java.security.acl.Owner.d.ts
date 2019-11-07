// @ts-nocheck
declare namespace java {
    namespace security {
        namespace acl {
            // @ts-ignore
            interface Owner {
                /**
                 * Adds an owner. Only owners can modify ACL contents. The caller
                 * principal must be an owner of the ACL in order to invoke this method.
                 * That is, only an owner can add another owner. The initial owner is
                 * configured at ACL construction time.
                 */
                // @ts-ignore
                 addOwner(caller: java.security.Principal, owner: java.security.Principal): boolean;
                /**
                 * Deletes an owner. If this is the last owner in the ACL, an exception is
                 * raised.<p>
                 * The caller principal must be an owner of the ACL in order to invoke
                 * this method.
                 */
                // @ts-ignore
                 deleteOwner(caller: java.security.Principal, owner: java.security.Principal): boolean;
                /**
                 * Returns true if the given principal is an owner of the ACL.
                 */
                // @ts-ignore
                 isOwner(owner: java.security.Principal): boolean;
            }
        }
    }
}
