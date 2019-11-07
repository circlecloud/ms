declare namespace java {
    namespace awt {
        // @ts-ignore
         class AWTPermission extends java.security.BasicPermission {
            /**
             * Creates a new <code>AWTPermission</code> with the specified name.
             * The name is the symbolic name of the <code>AWTPermission</code>,
             * such as "topLevelWindow", "systemClipboard", etc. An asterisk
             * may be used to indicate all AWT permissions.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new <code>AWTPermission</code> object with the specified name.
             * The name is the symbolic name of the <code>AWTPermission</code>, and the
             * actions string is currently unused and should be <code>null</code>.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
        }
    }
}
