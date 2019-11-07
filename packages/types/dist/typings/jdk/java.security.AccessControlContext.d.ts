// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class AccessControlContext extends java.lang.Object {
            /**
             * Constructs a new instance of this class given an array of
             * protection domains.
             */
            // @ts-ignore
            constructor(fromContext: java.security.ProtectionDomain)
            /**
             * Constructs a new instance of this class given a context
             * and a DomainCombiner
             */
            // @ts-ignore
            constructor(acc: java.security.AccessControlContext, combiner: java.security.DomainCombiner)
            /**
             * Checks if the permission <code>perm</code> is allowed in this context.
             * All ProtectionDomains must grant the permission for it to be granted.
             */
            // @ts-ignore
            public checkPermission(perm: java.security.Permission): void;
            /**
             * Compares the argument to the receiver, and answers true
             * if they represent the <em>same</em> object using a class
             * specific comparison. In this case, they must both be
             * AccessControlContexts and contain the same protection domains.
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Answers an integer hash code for the receiver. Any two
             * objects which answer <code>true</code> when passed to
             * <code>equals</code> must answer the same value for this
             * method.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Answers the DomainCombiner for the receiver.
             */
            // @ts-ignore
            public getDomainCombiner(): java.security.DomainCombiner;
        }
    }
}
