declare namespace java {
    namespace awt {
        // @ts-ignore
         class MenuBar extends java.awt.MenuComponent {
            /**
             * Creates a new menu bar.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates the menu bar's peer.  The peer allows us to change the
             * appearance of the menu bar without changing any of the menu bar's
             * functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Removes the menu bar's peer.  The peer allows us to change the
             * appearance of the menu bar without changing any of the menu bar's
             * functionality.
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Gets the help menu on the menu bar.
             */
            // @ts-ignore
            public getHelpMenu(): java.awt.Menu;
            /**
             * Sets the specified menu to be this menu bar's help menu.
             * If this menu bar has an existing help menu, the old help menu is
             * removed from the menu bar, and replaced with the specified menu.
             */
            // @ts-ignore
            public setHelpMenu(m: java.awt.Menu): void;
            /**
             * Adds the specified menu to the menu bar.
             * If the menu has been part of another menu bar,
             * removes it from that menu bar.
             */
            // @ts-ignore
            public add(m: java.awt.Menu): java.awt.Menu;
            /**
             * Removes the menu located at the specified
             * index from this menu bar.
             */
            // @ts-ignore
            public remove(index: number): void;
            /**
             * Removes the specified menu component from this menu bar.
             */
            // @ts-ignore
            public remove(m: java.awt.MenuComponent): void;
            /**
             * Gets the number of menus on the menu bar.
             */
            // @ts-ignore
            public getMenuCount(): number;
            // @ts-ignore
            public countMenus(): number;
            /**
             * Gets the specified menu.
             */
            // @ts-ignore
            public getMenu(i: number): java.awt.Menu;
            /**
             * Gets an enumeration of all menu shortcuts this menu bar
             * is managing.
             */
            // @ts-ignore
            public shortcuts(): java.util.Enumeration;
            /**
             * Gets the instance of <code>MenuItem</code> associated
             * with the specified <code>MenuShortcut</code> object,
             * or <code>null</code> if none of the menu items being managed
             * by this menu bar is associated with the specified menu
             * shortcut.
             */
            // @ts-ignore
            public getShortcutMenuItem(s: java.awt.MenuShortcut): java.awt.MenuItem;
            /**
             * Deletes the specified menu shortcut.
             */
            // @ts-ignore
            public deleteShortcut(s: java.awt.MenuShortcut): void;
            /**
             * Gets the AccessibleContext associated with this MenuBar.
             * For menu bars, the AccessibleContext takes the form of an
             * AccessibleAWTMenuBar.
             * A new AccessibleAWTMenuBar instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
