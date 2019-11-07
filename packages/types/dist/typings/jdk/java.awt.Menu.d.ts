// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Menu extends java.awt.MenuItem {
            /**
             * Constructs a new menu with an empty label. This menu is not
             * a tear-off menu.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new menu with the specified label. This menu is not
             * a tear-off menu.
             */
            // @ts-ignore
            constructor(label: string)
            /**
             * Constructs a new menu with the specified label,
             * indicating whether the menu can be torn off.
             * <p>
             * Tear-off functionality may not be supported by all
             * implementations of AWT.  If a particular implementation doesn't
             * support tear-off menus, this value is silently ignored.
             */
            // @ts-ignore
            constructor(label: string, tearOff: boolean)
            /**
             * Creates the menu's peer.  The peer allows us to modify the
             * appearance of the menu without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Removes the menu's peer.  The peer allows us to modify the appearance
             * of the menu without changing its functionality.
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Indicates whether this menu is a tear-off menu.
             * <p>
             * Tear-off functionality may not be supported by all
             * implementations of AWT.  If a particular implementation doesn't
             * support tear-off menus, this value is silently ignored.
             */
            // @ts-ignore
            public isTearOff(): boolean;
            /**
             * Get the number of items in this menu.
             */
            // @ts-ignore
            public getItemCount(): number;
            // @ts-ignore
            public countItems(): number;
            /**
             * Gets the item located at the specified index of this menu.
             */
            // @ts-ignore
            public getItem(index: number): java.awt.MenuItem;
            /**
             * Adds the specified menu item to this menu. If the
             * menu item has been part of another menu, removes it
             * from that menu.
             */
            // @ts-ignore
            public add(mi: java.awt.MenuItem): java.awt.MenuItem;
            /**
             * Adds an item with the specified label to this menu.
             */
            // @ts-ignore
            public add(label: string): void;
            /**
             * Inserts a menu item into this menu
             * at the specified position.
             */
            // @ts-ignore
            public insert(menuitem: java.awt.MenuItem, index: number): void;
            /**
             * Inserts a menu item with the specified label into this menu
             * at the specified position.  This is a convenience method for
             * <code>insert(menuItem, index)</code>.
             */
            // @ts-ignore
            public insert(label: string, index: number): void;
            /**
             * Adds a separator line, or a hypen, to the menu at the current position.
             */
            // @ts-ignore
            public addSeparator(): void;
            /**
             * Inserts a separator at the specified position.
             */
            // @ts-ignore
            public insertSeparator(index: number): void;
            /**
             * Removes the menu item at the specified index from this menu.
             */
            // @ts-ignore
            public remove(index: number): void;
            /**
             * Removes the specified menu item from this menu.
             */
            // @ts-ignore
            public remove(item: java.awt.MenuComponent): void;
            /**
             * Removes all items from this menu.
             */
            // @ts-ignore
            public removeAll(): void;
            /**
             * Returns a string representing the state of this <code>Menu</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            public paramString(): string;
            /**
             * Gets the AccessibleContext associated with this Menu.
             * For menus, the AccessibleContext takes the form of an
             * AccessibleAWTMenu.
             * A new AccessibleAWTMenu instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
