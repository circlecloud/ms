declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                abstract class UserPrincipalLookupService extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Lookup a user principal by name.
                     */
                    // @ts-ignore
                    public abstract lookupPrincipalByName(name: string): java.nio.file.attribute.UserPrincipal;
                    /**
                     * Lookup a group principal by group name.
                     * <p> Where an implementation does not support any notion of group then
                     * this method always throws {@link UserPrincipalNotFoundException}. Where
                     * the namespace for user accounts and groups is the same, then this method
                     * is identical to invoking {@link #lookupPrincipalByName
                     * lookupPrincipalByName}.
                     */
                    // @ts-ignore
                    public abstract lookupPrincipalByGroupName(group: string): java.nio.file.attribute.GroupPrincipal;
                }
            }
        }
    }
}
