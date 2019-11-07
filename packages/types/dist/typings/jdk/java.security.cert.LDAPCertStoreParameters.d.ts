// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class LDAPCertStoreParameters extends java.lang.Object {
                /**
                 * Creates an instance of {@code LDAPCertStoreParameters} with the
                 * specified parameter values.
                 */
                // @ts-ignore
                constructor(serverName: string, port: number)
                /**
                 * Creates an instance of {@code LDAPCertStoreParameters} with the
                 * specified server name and a default port of 389.
                 */
                // @ts-ignore
                constructor(serverName: string)
                /**
                 * Creates an instance of {@code LDAPCertStoreParameters} with the
                 * default parameter values (server name "localhost", port 389).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the DNS name of the LDAP server.
                 */
                // @ts-ignore
                public getServerName(): string;
                /**
                 * Returns the port number of the LDAP server.
                 */
                // @ts-ignore
                public getPort(): number;
                /**
                 * Returns a copy of this object. Changes to the copy will not affect
                 * the original and vice versa.
                 * <p>
                 * Note: this method currently performs a shallow copy of the object
                 * (simply calls {@code Object.clone()}). This may be changed in a
                 * future revision to perform a deep copy if new parameters are added
                 * that should not be shared.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns a formatted string describing the parameters.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
