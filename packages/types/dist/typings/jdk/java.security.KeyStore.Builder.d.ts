// @ts-nocheck
declare namespace java {
    namespace security {
        namespace KeyStore {
            // @ts-ignore
            abstract class Builder extends java.lang.Object {
                /**
                 * Construct a new Builder.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the KeyStore described by this object.
                 */
                // @ts-ignore
                public abstract getKeyStore(): java.security.KeyStore;
                /**
                 * Returns the ProtectionParameters that should be used to obtain
                 * the {@link KeyStore.Entry Entry} with the given alias.
                 * The {@code getKeyStore} method must be invoked before this
                 * method may be called.
                 */
                // @ts-ignore
                public abstract getProtectionParameter(alias: string): java.security.KeyStore.ProtectionParameter;
                /**
                 * Returns a new Builder that encapsulates the given KeyStore.
                 * The {@linkplain #getKeyStore} method of the returned object
                 * will return {@code keyStore}, the {@linkplain
                 * #getProtectionParameter getProtectionParameter()} method will
                 * return {@code protectionParameters}.
                 * <p> This is useful if an existing KeyStore object needs to be
                 * used with Builder-based APIs.
                 */
                // @ts-ignore
                public static newInstance(keyStore: java.security.KeyStore, protectionParameter: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder;
                /**
                 * Returns a new Builder object.
                 * <p>The first call to the {@link #getKeyStore} method on the returned
                 * builder will create a KeyStore of type {@code type} and call
                 * its {@link KeyStore#load load()} method.
                 * The {@code inputStream} argument is constructed from
                 * {@code file}.
                 * If {@code protection} is a
                 * {@code PasswordProtection}, the password is obtained by
                 * calling the {@code getPassword} method.
                 * Otherwise, if {@code protection} is a
                 * {@code CallbackHandlerProtection}, the password is obtained
                 * by invoking the CallbackHandler.
                 * <p>Subsequent calls to {@link #getKeyStore} return the same object
                 * as the initial call. If the initial call to failed with a
                 * KeyStoreException, subsequent calls also throw a
                 * KeyStoreException.
                 * <p>The KeyStore is instantiated from {@code provider} if
                 * non-null. Otherwise, all installed providers are searched.
                 * <p>Calls to {@link #getProtectionParameter getProtectionParameter()}
                 * will return a {@link KeyStore.PasswordProtection PasswordProtection}
                 * object encapsulating the password that was used to invoke the
                 * {@code load} method.
                 * <p><em>Note</em> that the {@link #getKeyStore} method is executed
                 * within the {@link AccessControlContext} of the code invoking this
                 * method.
                 */
                // @ts-ignore
                public static newInstance(type: string, provider: java.security.Provider, file: java.io.File, protection: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder;
                /**
                 * Returns a new Builder object.
                 * <p>Each call to the {@link #getKeyStore} method on the returned
                 * builder will return a new KeyStore object of type {@code type}.
                 * Its {@link KeyStore#load(KeyStore.LoadStoreParameter) load()}
                 * method is invoked using a
                 * {@code LoadStoreParameter} that encapsulates
                 * {@code protection}.
                 * <p>The KeyStore is instantiated from {@code provider} if
                 * non-null. Otherwise, all installed providers are searched.
                 * <p>Calls to {@link #getProtectionParameter getProtectionParameter()}
                 * will return {@code protection}.
                 * <p><em>Note</em> that the {@link #getKeyStore} method is executed
                 * within the {@link AccessControlContext} of the code invoking this
                 * method.
                 */
                // @ts-ignore
                public static newInstance(type: string, provider: java.security.Provider, protection: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder;
            }
        }
    }
}
