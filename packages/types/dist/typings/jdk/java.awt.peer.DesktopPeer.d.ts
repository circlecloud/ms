declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface DesktopPeer {
                /**
                 * Returns whether the given action is supported on the current platform.
                 */
                // @ts-ignore
                 isSupported(action: java.awt.Desktop.Action): boolean;
                /**
                 * Launches the associated application to open the given file. The
                 * associated application is registered to be the default file viewer for
                 * the file type of the given file.
                 */
                // @ts-ignore
                 open(file: java.io.File): void;
                /**
                 * Launches the associated editor and opens the given file for editing. The
                 * associated editor is registered to be the default editor for the file
                 * type of the given file.
                 */
                // @ts-ignore
                 edit(file: java.io.File): void;
                /**
                 * Prints the given file with the native desktop printing facility, using
                 * the associated application's print command.
                 */
                // @ts-ignore
                 print(file: java.io.File): void;
                /**
                 * Launches the mail composing window of the user default mail client,
                 * filling the message fields including to, cc, etc, with the values
                 * specified by the given mailto URL.
                 */
                // @ts-ignore
                 mail(mailtoURL: java.net.URI): void;
                /**
                 * Launches the user default browser to display the given URI.
                 */
                // @ts-ignore
                 browse(uri: java.net.URI): void;
            }
        }
    }
}
