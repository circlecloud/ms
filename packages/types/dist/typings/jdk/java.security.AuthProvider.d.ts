declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class AuthProvider extends java.security.Provider {
            /**
             * Constructs a provider with the specified name, version number,
             * and information.
             */
            // @ts-ignore
            constructor(name: string, version: number, info: string)
            /**
             * Log in to this provider.
             * <p> The provider relies on a {@code CallbackHandler}
             * to obtain authentication information from the caller
             * (a PIN, for example).  If the caller passes a {@code null}
             * handler to this method, the provider uses the handler set in the
             * {@code setCallbackHandler} method.
             * If no handler was set in that method, the provider queries the
             * <i>auth.login.defaultCallbackHandler</i> security property
             * for the fully qualified class name of a default handler implementation.
             * If the security property is not set,
             * the provider is assumed to have alternative means
             * for obtaining authentication information.
             */
            // @ts-ignore
            public abstract login(subject: any /*javax.security.auth.Subject*/, handler: any /*javax.security.auth.callback.CallbackHandler*/): void;
            /**
             * Log out from this provider.
             */
            // @ts-ignore
            public abstract logout(): void;
            /**
             * Set a {@code CallbackHandler}.
             * <p> The provider uses this handler if one is not passed to the
             * {@code login} method.  The provider also uses this handler
             * if it invokes {@code login} on behalf of callers.
             * In either case if a handler is not set via this method,
             * the provider queries the
             * <i>auth.login.defaultCallbackHandler</i> security property
             * for the fully qualified class name of a default handler implementation.
             * If the security property is not set,
             * the provider is assumed to have alternative means
             * for obtaining authentication information.
             */
            // @ts-ignore
            public abstract setCallbackHandler(handler: any /*javax.security.auth.callback.CallbackHandler*/): void;
        }
    }
}
