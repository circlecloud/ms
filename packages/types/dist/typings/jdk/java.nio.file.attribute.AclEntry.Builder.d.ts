// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                namespace AclEntry {
                    // @ts-ignore
                     class Builder extends java.lang.Object {
                        /**
                         * Constructs an {@link AclEntry} from the components of this builder.
                         * The type and who components are required to have been set in order
                         * to construct an {@code AclEntry}.
                         */
                        // @ts-ignore
                        public build(): java.nio.file.attribute.AclEntry;
                        /**
                         * Sets the type component of this builder.
                         */
                        // @ts-ignore
                        public setType(type: java.nio.file.attribute.AclEntryType): java.nio.file.attribute.AclEntry.Builder;
                        /**
                         * Sets the principal component of this builder.
                         */
                        // @ts-ignore
                        public setPrincipal(who: java.nio.file.attribute.UserPrincipal): java.nio.file.attribute.AclEntry.Builder;
                        /**
                         * Sets the permissions component of this builder. On return, the
                         * permissions component of this builder is a copy of the given set.
                         */
                        // @ts-ignore
                        public setPermissions(perms: java.util.Set): java.nio.file.attribute.AclEntry.Builder;
                        /**
                         * Sets the permissions component of this builder. On return, the
                         * permissions component of this builder is a copy of the permissions in
                         * the given array.
                         */
                        // @ts-ignore
                        public setPermissions(perms: java.nio.file.attribute.AclEntryPermission): java.nio.file.attribute.AclEntry.Builder;
                        /**
                         * Sets the flags component of this builder. On return, the flags
                         * component of this builder is a copy of the given set.
                         */
                        // @ts-ignore
                        public setFlags(flags: java.util.Set): java.nio.file.attribute.AclEntry.Builder;
                        /**
                         * Sets the flags component of this builder. On return, the flags
                         * component of this builder is a copy of the flags in the given
                         * array.
                         */
                        // @ts-ignore
                        public setFlags(flags: java.nio.file.attribute.AclEntryFlag): java.nio.file.attribute.AclEntry.Builder;
                    }
                }
            }
        }
    }
}
