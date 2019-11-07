// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class PropertyEditorManager extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Registers an editor class to edit values of the given target class.
             * If the editor class is {@code null},
             * then any existing definition will be removed.
             * Thus this method can be used to cancel the registration.
             * The registration is canceled automatically
             * if either the target or editor class is unloaded.
             * <p>
             * If there is a security manager, its {@code checkPropertiesAccess}
             * method is called. This could result in a {@linkplain SecurityException}.
             */
            // @ts-ignore
            public static registerEditor(targetType: java.lang.Class, editorClass: java.lang.Class): void;
            /**
             * Locate a value editor for a given target type.
             */
            // @ts-ignore
            public static findEditor(targetType: java.lang.Class): java.beans.PropertyEditor;
            /**
             * Gets the package names that will be searched for property editors.
             */
            // @ts-ignore
            public static getEditorSearchPath(): java.lang.String[];
            /**
             * Change the list of package names that will be used for
             * finding property editors.
             * <p>First, if there is a security manager, its <code>checkPropertiesAccess</code>
             * method is called. This could result in a SecurityException.
             */
            // @ts-ignore
            public static setEditorSearchPath(path: string): void;
        }
    }
}
