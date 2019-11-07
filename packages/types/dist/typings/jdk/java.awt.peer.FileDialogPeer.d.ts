// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface FileDialogPeer {
                /**
                 * Sets the selected file for this file dialog.
                 */
                // @ts-ignore
                 setFile(file: string): void;
                /**
                 * Sets the current directory for this file dialog.
                 */
                // @ts-ignore
                 setDirectory(dir: string): void;
                /**
                 * Sets the filename filter for filtering the displayed files.
                 */
                // @ts-ignore
                 setFilenameFilter(filter: java.io.FilenameFilter): void;
            }
        }
    }
}
