// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        interface DomainCombiner {
            /**
             * Modify or update the provided ProtectionDomains.
             * ProtectionDomains may be added to or removed from the given
             * ProtectionDomains.  The ProtectionDomains may be re-ordered.
             * Individual ProtectionDomains may be modified (with a new
             * set of Permissions, for example).
             * <p>
             */
            // @ts-ignore
             combine(currentDomains: java.security.ProtectionDomain, assignedDomains: java.security.ProtectionDomain): java.security.ProtectionDomain[];
        }
    }
}
