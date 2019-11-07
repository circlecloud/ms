// @ts-nocheck
declare namespace java {
    namespace security {
        namespace KeyStore {
            // @ts-ignore
             class SecretKeyEntry extends java.lang.Object {
                /**
                 * Constructs a {@code SecretKeyEntry} with a
                 * {@code SecretKey}.
                 */
                // @ts-ignore
                constructor(secretKey: any /*javax.crypto.SecretKey*/)
                /**
                 * Constructs a {@code SecretKeyEntry} with a {@code SecretKey} and
                 * associated entry attributes.
                 * <p> The specified {@code attributes} is cloned before it is stored
                 * in the new {@code SecretKeyEntry} object.
                 */
                // @ts-ignore
                constructor(secretKey: any /*javax.crypto.SecretKey*/, attributes: java.util.Set)
                /**
                 * Gets the {@code SecretKey} from this entry.
                 */
                // @ts-ignore
                public getSecretKey(): any /*javax.crypto.SecretKey*/;
                /**
                 * Retrieves the attributes associated with an entry.
                 * <p>
                 */
                // @ts-ignore
                public getAttributes(): java.util.Set;
                /**
                 * Returns a string representation of this SecretKeyEntry.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
