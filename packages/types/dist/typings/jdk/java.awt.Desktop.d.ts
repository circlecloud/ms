// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Desktop extends java.lang.Object {
            /**
             * Returns the <code>Desktop</code> instance of the current
             * browser context.  On some platforms the Desktop API may not be
             * supported; use the {@link #isDesktopSupported} method to
             * determine if the current desktop is supported.
             */
            // @ts-ignore
            public static getDesktop(): java.awt.Desktop;
            /**
             * Tests whether this class is supported on the current platform.
             * If it's supported, use {@link #getDesktop()} to retrieve an
             * instance.
             */
            // @ts-ignore
            public static isDesktopSupported(): boolean;
            /**
             * Tests whether an action is supported on the current platform.
             * <p>Even when the platform supports an action, a file or URI may
             * not have a registered application for the action.  For example,
             * most of the platforms support the {@link Desktop.Action#OPEN}
             * action.  But for a specific file, there may not be an
             * application registered to open it.  In this case, {@link
             * #isSupported} may return {@code true}, but the corresponding
             * action method will throw an {@link IOException}.
             */
            // @ts-ignore
            public isSupported(action: java.awt.Desktop.Action): boolean;
            /**
             * Launches the associated application to open the file.
             * <p> If the specified file is a directory, the file manager of
             * the current platform is launched to open it.
             */
            // @ts-ignore
            public open(file: java.io.File): void;
            /**
             * Launches the associated editor application and opens a file for
             * editing.
             */
            // @ts-ignore
            public edit(file: java.io.File): void;
            /**
             * Prints a file with the native desktop printing facility, using
             * the associated application's print command.
             */
            // @ts-ignore
            public print(file: java.io.File): void;
            /**
             * Launches the default browser to display a {@code URI}.
             * If the default browser is not able to handle the specified
             * {@code URI}, the application registered for handling
             * {@code URIs} of the specified type is invoked. The application
             * is determined from the protocol and path of the {@code URI}, as
             * defined by the {@code URI} class.
             * <p>
             * If the calling thread does not have the necessary permissions,
             * and this is invoked from within an applet,
             * {@code AppletContext.showDocument()} is used. Similarly, if the calling
             * does not have the necessary permissions, and this is invoked from within
             * a Java Web Started application, {@code BasicService.showDocument()}
             * is used.
             */
            // @ts-ignore
            public browse(uri: java.net.URI): void;
            /**
             * Launches the mail composing window of the user default mail
             * client.
             */
            // @ts-ignore
            public mail(): void;
            /**
             * Launches the mail composing window of the user default mail
             * client, filling the message fields specified by a {@code
             * mailto:} URI.
             * <p> A <code>mailto:</code> URI can specify message fields
             * including <i>"to"</i>, <i>"cc"</i>, <i>"subject"</i>,
             * <i>"body"</i>, etc.  See <a
             * href="http://www.ietf.org/rfc/rfc2368.txt">The mailto URL
             * scheme (RFC 2368)</a> for the {@code mailto:} URI specification
             * details.
             */
            // @ts-ignore
            public mail(mailtoURI: java.net.URI): void;
        }
    }
}
