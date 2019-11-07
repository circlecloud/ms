// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class Authenticator extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Sets the authenticator that will be used by the networking code
             * when a proxy or an HTTP server asks for authentication.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("setDefaultAuthenticator")} permission.
             * This may result in a java.lang.SecurityException.
             */
            // @ts-ignore
            public static setDefault(a: java.net.Authenticator): void;
            /**
             * Ask the authenticator that has been registered with the system
             * for a password.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("requestPasswordAuthentication")} permission.
             * This may result in a java.lang.SecurityException.
             */
            // @ts-ignore
            public static requestPasswordAuthentication(addr: java.net.InetAddress, port: number, protocol: string, prompt: string, scheme: string): java.net.PasswordAuthentication;
            /**
             * Ask the authenticator that has been registered with the system
             * for a password. This is the preferred method for requesting a password
             * because the hostname can be provided in cases where the InetAddress
             * is not available.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("requestPasswordAuthentication")} permission.
             * This may result in a java.lang.SecurityException.
             */
            // @ts-ignore
            public static requestPasswordAuthentication(host: string, addr: java.net.InetAddress, port: number, protocol: string, prompt: string, scheme: string): java.net.PasswordAuthentication;
            /**
             * Ask the authenticator that has been registered with the system
             * for a password.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("requestPasswordAuthentication")} permission.
             * This may result in a java.lang.SecurityException.
             */
            // @ts-ignore
            public static requestPasswordAuthentication(host: string, addr: java.net.InetAddress, port: number, protocol: string, prompt: string, scheme: string, url: java.net.URL, reqType: java.net.Authenticator.RequestorType): java.net.PasswordAuthentication;
            /**
             * Gets the {@code hostname} of the
             * site or proxy requesting authentication, or {@code null}
             * if not available.
             */
            // @ts-ignore
            protected getRequestingHost(): string;
            /**
             * Gets the {@code InetAddress} of the
             * site requesting authorization, or {@code null}
             * if not available.
             */
            // @ts-ignore
            protected getRequestingSite(): java.net.InetAddress;
            /**
             * Gets the port number for the requested connection.
             */
            // @ts-ignore
            protected getRequestingPort(): number;
            /**
             * Give the protocol that's requesting the connection.  Often this
             * will be based on a URL, but in a future JDK it could be, for
             * example, "SOCKS" for a password-protected SOCKS5 firewall.
             */
            // @ts-ignore
            protected getRequestingProtocol(): string;
            /**
             * Gets the prompt string given by the requestor.
             */
            // @ts-ignore
            protected getRequestingPrompt(): string;
            /**
             * Gets the scheme of the requestor (the HTTP scheme
             * for an HTTP firewall, for example).
             */
            // @ts-ignore
            protected getRequestingScheme(): string;
            /**
             * Called when password authorization is needed.  Subclasses should
             * override the default implementation, which returns null.
             */
            // @ts-ignore
            protected getPasswordAuthentication(): java.net.PasswordAuthentication;
            /**
             * Returns the URL that resulted in this
             * request for authentication.
             */
            // @ts-ignore
            protected getRequestingURL(): java.net.URL;
            /**
             * Returns whether the requestor is a Proxy or a Server.
             */
            // @ts-ignore
            protected getRequestorType(): java.net.Authenticator.RequestorType;
        }
    }
}
