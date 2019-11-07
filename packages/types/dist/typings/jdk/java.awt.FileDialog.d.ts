declare namespace java {
    namespace awt {
        // @ts-ignore
         class FileDialog extends java.awt.Dialog {
            /**
             * Creates a file dialog for loading a file.  The title of the
             * file dialog is initially empty.  This is a convenience method for
             * <code>FileDialog(parent, "", LOAD)</code>.
             */
            // @ts-ignore
            constructor(parent: java.awt.Frame)
            /**
             * Creates a file dialog window with the specified title for loading
             * a file. The files shown are those in the current directory.
             * This is a convenience method for
             * <code>FileDialog(parent, title, LOAD)</code>.
             */
            // @ts-ignore
            constructor(parent: java.awt.Frame, title: string)
            /**
             * Creates a file dialog window with the specified title for loading
             * or saving a file.
             * <p>
             * If the value of <code>mode</code> is <code>LOAD</code>, then the
             * file dialog is finding a file to read, and the files shown are those
             * in the current directory.   If the value of
             * <code>mode</code> is <code>SAVE</code>, the file dialog is finding
             * a place to write a file.
             */
            // @ts-ignore
            constructor(parent: java.awt.Frame, title: string, mode: number)
            /**
             * Creates a file dialog for loading a file.  The title of the
             * file dialog is initially empty.  This is a convenience method for
             * <code>FileDialog(parent, "", LOAD)</code>.
             */
            // @ts-ignore
            constructor(parent: java.awt.Dialog)
            /**
             * Creates a file dialog window with the specified title for loading
             * a file. The files shown are those in the current directory.
             * This is a convenience method for
             * <code>FileDialog(parent, title, LOAD)</code>.
             */
            // @ts-ignore
            constructor(parent: java.awt.Dialog, title: string)
            /**
             * Creates a file dialog window with the specified title for loading
             * or saving a file.
             * <p>
             * If the value of <code>mode</code> is <code>LOAD</code>, then the
             * file dialog is finding a file to read, and the files shown are those
             * in the current directory.   If the value of
             * <code>mode</code> is <code>SAVE</code>, the file dialog is finding
             * a place to write a file.
             */
            // @ts-ignore
            constructor(parent: java.awt.Dialog, title: string, mode: number)
            // @ts-ignore
            public static LOAD: number;
            // @ts-ignore
            public static SAVE: number;
            /**
             * Creates the file dialog's peer.  The peer allows us to change the look
             * of the file dialog without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Indicates whether this file dialog box is for loading from a file
             * or for saving to a file.
             */
            // @ts-ignore
            public getMode(): number;
            /**
             * Sets the mode of the file dialog.  If <code>mode</code> is not
             * a legal value, an exception will be thrown and <code>mode</code>
             * will not be set.
             */
            // @ts-ignore
            public setMode(mode: number): void;
            /**
             * Gets the directory of this file dialog.
             */
            // @ts-ignore
            public getDirectory(): string;
            /**
             * Sets the directory of this file dialog window to be the
             * specified directory. Specifying a <code>null</code> or an
             * invalid directory implies an implementation-defined default.
             * This default will not be realized, however, until the user
             * has selected a file. Until this point, <code>getDirectory()</code>
             * will return the value passed into this method.
             * <p>
             * Specifying "" as the directory is exactly equivalent to
             * specifying <code>null</code> as the directory.
             */
            // @ts-ignore
            public setDirectory(dir: string): void;
            /**
             * Gets the selected file of this file dialog.  If the user
             * selected <code>CANCEL</code>, the returned file is <code>null</code>.
             */
            // @ts-ignore
            public getFile(): string;
            /**
             * Returns files that the user selects.
             * <p>
             * If the user cancels the file dialog,
             * then the method returns an empty array.
             */
            // @ts-ignore
            public getFiles(): java.io.File[];
            /**
             * Sets the selected file for this file dialog window to be the
             * specified file. This file becomes the default file if it is set
             * before the file dialog window is first shown.
             * <p>
             * When the dialog is shown, the specified file is selected. The kind of
             * selection depends on the file existence, the dialog type, and the native
             * platform. E.g., the file could be highlighted in the file list, or a
             * file name editbox could be populated with the file name.
             * <p>
             * This method accepts either a full file path, or a file name with an
             * extension if used together with the {@code setDirectory} method.
             * <p>
             * Specifying "" as the file is exactly equivalent to specifying
             * {@code null} as the file.
             */
            // @ts-ignore
            public setFile(file: string): void;
            /**
             * Enables or disables multiple file selection for the file dialog.
             */
            // @ts-ignore
            public setMultipleMode(enable: boolean): void;
            /**
             * Returns whether the file dialog allows the multiple file selection.
             */
            // @ts-ignore
            public isMultipleMode(): boolean;
            /**
             * Determines this file dialog's filename filter. A filename filter
             * allows the user to specify which files appear in the file dialog
             * window.  Filename filters do not function in Sun's reference
             * implementation for Microsoft Windows.
             */
            // @ts-ignore
            public getFilenameFilter(): java.io.FilenameFilter;
            /**
             * Sets the filename filter for this file dialog window to the
             * specified filter.
             * Filename filters do not function in Sun's reference
             * implementation for Microsoft Windows.
             */
            // @ts-ignore
            public setFilenameFilter(filter: java.io.FilenameFilter): void;
            /**
             * Returns a string representing the state of this <code>FileDialog</code>
             * window. This method is intended to be used only for debugging purposes,
             * and the content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
        }
    }
}
