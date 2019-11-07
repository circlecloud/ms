// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class KeyStore extends java.lang.Object {
            /**
             * Creates a KeyStore object of the given type, and encapsulates the given
             * provider implementation (SPI object) in it.
             */
            // @ts-ignore
            constructor(keyStoreSpi: java.security.KeyStoreSpi, provider: java.security.Provider, type: string)
            /**
             * Returns a keystore object of the specified type.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new KeyStore object encapsulating the
             * KeyStoreSpi implementation from the first
             * Provider that supports the specified type is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(type: string): java.security.KeyStore;
            /**
             * Returns a keystore object of the specified type.
             * <p> A new KeyStore object encapsulating the
             * KeyStoreSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(type: string, provider: string): java.security.KeyStore;
            /**
             * Returns a keystore object of the specified type.
             * <p> A new KeyStore object encapsulating the
             * KeyStoreSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             */
            // @ts-ignore
            public static getInstance(type: string, provider: java.security.Provider): java.security.KeyStore;
            /**
             * Returns the default keystore type as specified by the
             * {@code keystore.type} security property, or the string
             * {@literal "jks"} (acronym for {@literal "Java keystore"})
             * if no such property exists.
             * <p>The default keystore type can be used by applications that do not
             * want to use a hard-coded keystore type when calling one of the
             * {@code getInstance} methods, and want to provide a default keystore
             * type in case a user does not specify its own.
             * <p>The default keystore type can be changed by setting the value of the
             * {@code keystore.type} security property to the desired keystore type.
             */
            // @ts-ignore
            public static getDefaultType(): string;
            /**
             * Returns the provider of this keystore.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Returns the type of this keystore.
             */
            // @ts-ignore
            public getType(): string;
            /**
             * Returns the key associated with the given alias, using the given
             * password to recover it.  The key must have been associated with
             * the alias by a call to {@code setKeyEntry},
             * or by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry} or {@code SecretKeyEntry}.
             */
            // @ts-ignore
            public getKey(alias: string, password: string): java.security.Key;
            /**
             * Returns the certificate chain associated with the given alias.
             * The certificate chain must have been associated with the alias
             * by a call to {@code setKeyEntry},
             * or by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry}.
             */
            // @ts-ignore
            public getCertificateChain(alias: string): java.security.cert.Certificate[];
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
             * is returned.
             */
            // @ts-ignore
            public getCertificate(alias: string): java.security.cert.Certificate;
            /**
             * Returns the creation date of the entry identified by the given alias.
             */
            // @ts-ignore
            public getCreationDate(alias: string): java.util.Date;
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
            public setKeyEntry(alias: string, key: java.security.Key, password: string, chain: java.security.cert.Certificate): void;
            /**
             * Assigns the given key (that has already been protected) to the given
             * alias.
             * <p>If the protected key is of type
             * {@code java.security.PrivateKey}, it must be accompanied by a
             * certificate chain certifying the corresponding public key. If the
             * underlying keystore implementation is of type {@code jks},
             * {@code key} must be encoded as an
             * {@code EncryptedPrivateKeyInfo} as defined in the PKCS #8 standard.
             * <p>If the given alias already exists, the keystore information
             * associated with it is overridden by the given key (and possibly
             * certificate chain).
             */
            // @ts-ignore
            public setKeyEntry(alias: string, key: number, chain: java.security.cert.Certificate): void;
            /**
             * Assigns the given trusted certificate to the given alias.
             * <p> If the given alias identifies an existing entry
             * created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry},
             * the trusted certificate in the existing entry
             * is overridden by the given certificate.
             */
            // @ts-ignore
            public setCertificateEntry(alias: string, cert: java.security.cert.Certificate): void;
            /**
             * Deletes the entry identified by the given alias from this keystore.
             */
            // @ts-ignore
            public deleteEntry(alias: string): void;
            /**
             * Lists all the alias names of this keystore.
             */
            // @ts-ignore
            public aliases(): java.util.Enumeration;
            /**
             * Checks if the given alias exists in this keystore.
             */
            // @ts-ignore
            public containsAlias(alias: string): boolean;
            /**
             * Retrieves the number of entries in this keystore.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns true if the entry identified by the given alias
             * was created by a call to {@code setKeyEntry},
             * or created by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry} or a {@code SecretKeyEntry}.
             */
            // @ts-ignore
            public isKeyEntry(alias: string): boolean;
            /**
             * Returns true if the entry identified by the given alias
             * was created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry}.
             */
            // @ts-ignore
            public isCertificateEntry(alias: string): boolean;
            /**
             * Returns the (alias) name of the first keystore entry whose certificate
             * matches the given certificate.
             * <p> This method attempts to match the given certificate with each
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
            public getCertificateAlias(cert: java.security.cert.Certificate): string;
            /**
             * Stores this keystore to the given output stream, and protects its
             * integrity with the given password.
             */
            // @ts-ignore
            public store(stream: java.io.OutputStream, password: string): void;
            /**
             * Stores this keystore using the given {@code LoadStoreParameter}.
             */
            // @ts-ignore
            public store(param: java.security.KeyStore.LoadStoreParameter): void;
            /**
             * Loads this KeyStore from the given input stream.
             * <p>A password may be given to unlock the keystore
             * (e.g. the keystore resides on a hardware token device),
             * or to check the integrity of the keystore data.
             * If a password is not given for integrity checking,
             * then integrity checking is not performed.
             * <p>In order to create an empty keystore, or if the keystore cannot
             * be initialized from a stream, pass {@code null}
             * as the {@code stream} argument.
             * <p> Note that if this keystore has already been loaded, it is
             * reinitialized and loaded again from the given input stream.
             */
            // @ts-ignore
            public load(stream: java.io.InputStream, password: string): void;
            /**
             * Loads this keystore using the given {@code LoadStoreParameter}.
             * <p> Note that if this KeyStore has already been loaded, it is
             * reinitialized and loaded again from the given parameter.
             */
            // @ts-ignore
            public load(param: java.security.KeyStore.LoadStoreParameter): void;
            /**
             * Gets a keystore {@code Entry} for the specified alias
             * with the specified protection parameter.
             */
            // @ts-ignore
            public getEntry(alias: string, protParam: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Entry;
            /**
             * Saves a keystore {@code Entry} under the specified alias.
             * The protection parameter is used to protect the
             * {@code Entry}.
             * <p> If an entry already exists for the specified alias,
             * it is overridden.
             */
            // @ts-ignore
            public setEntry(alias: string, entry: java.security.KeyStore.Entry, protParam: java.security.KeyStore.ProtectionParameter): void;
            /**
             * Determines if the keystore {@code Entry} for the specified
             * {@code alias} is an instance or subclass of the specified
             * {@code entryClass}.
             */
            // @ts-ignore
            public entryInstanceOf(alias: string, entryClass: java.lang.Class): boolean;
        }
    }
}
