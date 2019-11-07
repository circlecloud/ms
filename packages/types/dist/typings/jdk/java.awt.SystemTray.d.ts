// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class SystemTray extends java.lang.Object {
            /**
             * Gets the <code>SystemTray</code> instance that represents the
             * desktop's tray area.  This always returns the same instance per
             * application.  On some platforms the system tray may not be
             * supported.  You may use the {@link #isSupported} method to
             * check if the system tray is supported.
             * <p>If a SecurityManager is installed, the AWTPermission
             * {@code accessSystemTray} must be granted in order to get the
             * {@code SystemTray} instance. Otherwise this method will throw a
             * SecurityException.
             */
            // @ts-ignore
            public static getSystemTray(): java.awt.SystemTray;
            /**
             * Returns whether the system tray is supported on the current
             * platform.  In addition to displaying the tray icon, minimal
             * system tray support includes either a popup menu (see {@link
             * TrayIcon#setPopupMenu(PopupMenu)}) or an action event (see
             * {@link TrayIcon#addActionListener(ActionListener)}).
             * <p>Developers should not assume that all of the system tray
             * functionality is supported.  To guarantee that the tray icon's
             * default action is always accessible, add the default action to
             * both the action listener and the popup menu.  See the {@link
             * SystemTray example} for an example of how to do this.
             * <p><b>Note</b>: When implementing <code>SystemTray</code> and
             * <code>TrayIcon</code> it is <em>strongly recommended</em> that
             * you assign different gestures to the popup menu and an action
             * event.  Overloading a gesture for both purposes is confusing
             * and may prevent the user from accessing one or the other.
             */
            // @ts-ignore
            public static isSupported(): boolean;
            /**
             * Adds a <code>TrayIcon</code> to the <code>SystemTray</code>.
             * The tray icon becomes visible in the system tray once it is
             * added.  The order in which icons are displayed in a tray is not
             * specified - it is platform and implementation-dependent.
             * <p> All icons added by the application are automatically
             * removed from the <code>SystemTray</code> upon application exit
             * and also when the desktop system tray becomes unavailable.
             */
            // @ts-ignore
            public add(trayIcon: java.awt.TrayIcon): void;
            /**
             * Removes the specified <code>TrayIcon</code> from the
             * <code>SystemTray</code>.
             * <p> All icons added by the application are automatically
             * removed from the <code>SystemTray</code> upon application exit
             * and also when the desktop system tray becomes unavailable.
             * <p> If <code>trayIcon</code> is <code>null</code> or was not
             * added to the system tray, no exception is thrown and no action
             * is performed.
             */
            // @ts-ignore
            public remove(trayIcon: java.awt.TrayIcon): void;
            /**
             * Returns an array of all icons added to the tray by this
             * application.  You can't access the icons added by another
             * application.  Some browsers partition applets in different
             * code bases into separate contexts, and establish walls between
             * these contexts.  In such a scenario, only the tray icons added
             * from this context will be returned.
             * <p> The returned array is a copy of the actual array and may be
             * modified in any way without affecting the system tray.  To
             * remove a <code>TrayIcon</code> from the
             * <code>SystemTray</code>, use the {@link
             * #remove(TrayIcon)} method.
             */
            // @ts-ignore
            public getTrayIcons(): java.awt.TrayIcon[];
            /**
             * Returns the size, in pixels, of the space that a tray icon will
             * occupy in the system tray.  Developers may use this methods to
             * acquire the preferred size for the image property of a tray icon
             * before it is created.  For convenience, there is a similar
             * method {@link TrayIcon#getSize} in the <code>TrayIcon</code> class.
             */
            // @ts-ignore
            public getTrayIconSize(): java.awt.Dimension;
            /**
             * Adds a {@code PropertyChangeListener} to the list of listeners for the
             * specific property. The following properties are currently supported:
             * <table border=1 summary="SystemTray properties">
             * <tr>
             * <th>Property</th>
             * <th>Description</th>
             * </tr>
             * <tr>
             * <td>{@code trayIcons}</td>
             * <td>The {@code SystemTray}'s array of {@code TrayIcon} objects.
             * The array is accessed via the {@link #getTrayIcons} method.<br>
             * This property is changed when a tray icon is added to (or removed
             * from) the system tray.<br> For example, this property is changed
             * when the system tray becomes unavailable on the desktop<br>
             * and the tray icons are automatically removed.</td>
             * </tr>
             * <tr>
             * <td>{@code systemTray}</td>
             * <td>This property contains {@code SystemTray} instance when the system tray
             * is available or <code>null</code> otherwise.<br> This property is changed
             * when the system tray becomes available or unavailable on the desktop.<br>
             * The property is accessed by the {@link #getSystemTray} method.</td>
             * </tr>
             * </table>
             * <p>
             * The {@code listener} listens to property changes only in this context.
             * <p>
             * If {@code listener} is {@code null}, no exception is thrown
             * and no action is performed.
             */
            // @ts-ignore
            public addPropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
            /**
             * Removes a {@code PropertyChangeListener} from the listener list
             * for a specific property.
             * <p>
             * The {@code PropertyChangeListener} must be from this context.
             * <p>
             * If {@code propertyName} or {@code listener} is {@code null} or invalid,
             * no exception is thrown and no action is taken.
             */
            // @ts-ignore
            public removePropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
            /**
             * Returns an array of all the listeners that have been associated
             * with the named property.
             * <p>
             * Only the listeners in this context are returned.
             */
            // @ts-ignore
            public getPropertyChangeListeners(propertyName: string): java.beans.PropertyChangeListener[];
        }
    }
}
