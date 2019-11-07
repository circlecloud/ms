declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class KeyStoreSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the key associated with the given alias, using the given
             * password to recover it.  The key must have been associated with
             * the alias by a call to {@code setKeyEntry},
             * or by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry} or {@code SecretKeyEntry}.
             */
            // @ts-ignore
            public abstract engineGetKey(alias: string, password: string): java.security.Key;
            /**
             * Returns the certificate chain associated with the given alias.
             * The certificate chain must have been associated with the alias
             * by a call to {@code setKeyEntry},
             * or by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry}.
             */
            // @ts-ignore
            public abstract engineGetCertificateChain(alias: string): java.security.cert.Certificate[];
            /**
             * Returns the certificate associated with the given alias.
             * <p> If the given alias name identifies an entry
             * created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry},
             * then the trusted certificate contained in that entry is returned.
             * <p> If the given alias name identifies an entry
             * created by a call to {@code setKeyEntry},
             * or created by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry},
             * then the first element of the certificate chain in that entry
             * (if a chain exists) is returned.
             */
            // @ts-ignore
            public abstract engineGetCertificate(alias: string): java.security.cert.Certificate;
            /**
             * Returns the creation date of the entry identified by the given alias.
             */
            // @ts-ignore
            public abstract engineGetCreationDate(alias: string): java.util.Date;
            /**
             * Assigns the given key to the given alias, protecting it with the given
             * password.
             * <p>If the given key is of type {@code java.security.PrivateKey},
             * it must be accompanied by a certificate chain certifying the
             * corresponding public key.
             * <p>If the given alias already exists, the keystore information
             * associated with it is overridden by the given key (and possibly
             * certificate chain).
             */
            // @ts-ignore
            public abstract engineSetKeyEntry(alias: string, key: java.security.Key, password: string, chain: java.security.cert.Certificate): void;
            /**
             * Assigns the given certificate to the given alias.
             * <p> If the given alias identifies an existing entry
             * created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry},
             * the trusted certificate in the existing entry
             * is overridden by the given certificate.
             */
            // @ts-ignore
            public abstract engineSetCertificateEntry(alias: string, cert: java.security.cert.Certificate): void;
            /**
             * Deletes the entry identified by the given alias from this keystore.
             */
            // @ts-ignore
            public abstract engineDeleteEntry(alias: string): void;
            /**
             * Lists all the alias names of this keystore.
             */
            // @ts-ignore
            public abstract engineAliases(): java.util.Enumeration;
            /**
             * Checks if the given alias exists in this keystore.
             */
            // @ts-ignore
            public abstract engineContainsAlias(alias: string): boolean;
            /**
             * Retrieves the number of entries in this keystore.
             */
            // @ts-ignore
            public abstract engineSize(): number;
            /**
             * Returns true if the entry identified by the given alias
             * was created by a call to {@code setKeyEntry},
             * or created by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry} or a {@code SecretKeyEntry}.
             */
            // @ts-ignore
            public abstract engineIsKeyEntry(alias: string): boolean;
            /**
             * Returns true if the entry identified by the given alias
             * was created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry}.
             */
            // @ts-ignore
            public abstract engineIsCertificateEntry(alias: string): boolean;
            /**
             * Returns the (alias) name of the first keystore entry whose certificate
             * matches the given certificate.
             * <p>This method attempts to match the given certificate with each
             * keystore entry. If the entry being considered was
             * created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry},
             * then the given certificate is compared to that entry's certificate.
             * <p> If the entry being considered was
             * created by a call to {@code setKeyEntry},
             * or created by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry},
             * then the given certificate is compared to the first
             * element of that entry's certificate chain.
             */
            // @ts-ignore
            public abstract engineGetCertificateAlias(cert: java.security.cert.Certificate): string;
            /**
             * Stores this keystore to the given output stream, and protects its
             * integrity with the given password.
             */
            // @ts-ignore
            public abstract engineStore(stream: java.io.OutputStream, password: string): void;
            /**
             * Stores this keystore using the given
             * {@code KeyStore.LoadStoreParmeter}.
             */
            // @ts-ignore
            public engineStore(param: java.security.KeyStore.LoadStoreParameter): void;
            /**
             * Loads the keystore from the given input stream.
             * <p>A password may be given to unlock the keystore
             * (e.g. the keystore resides on a hardware token device),
             * or to check the integrity of the keystore data.
             * If a password is not given for integrity checking,
             * then integrity checking is not performed.
             */
            // @ts-ignore
            public abstract engineLoad(stream: java.io.InputStream, password: string): void;
            /**
             * Loads the keystore using the given
             * {@code KeyStore.LoadStoreParameter}.
             * <p> Note that if this KeyStore has already been loaded, it is
             * reinitialized and loaded again from the given parameter.
             */
            // @ts-ignore
            public engineLoad(param: java.security.KeyStore.LoadStoreParameter): void;
            /**
             * Gets a {@code KeyStore.Entry} for the specified alias
             * with the specified protection parameter.
             */
            // @ts-ignore
            public engineGetEntry(alias: string, protParam: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Entry;
            /**
             * Saves a {@code KeyStore.Entry} under the specified alias.
             * The specified protection parameter is used to protect the
             * {@code Entry}.
             * <p> If an entry already exists for the specified alias,
             * it is overridden.
             */
            // @ts-ignore
            public engineSetEntry(alias: string, entry: java.security.KeyStore.Entry, protParam: java.security.KeyStore.ProtectionParameter): void;
            /**
             * Determines if the keystore {@code Entry} for the specified
             * {@code alias} is an instance or subclass of the specified
             * {@code entryClass}.
             */
            // @ts-ignore
            public engineEntryInstanceOf(alias: string, entryClass: java.lang.Class): boolean;
        }
    }
}
