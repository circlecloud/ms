declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class MenuComponent extends java.lang.Object {
            /**
             * Creates a <code>MenuComponent</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the name of the menu component.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Sets the name of the component to the specified string.
             */
            // @ts-ignore
            public setName(name: string): void;
            /**
             * Returns the parent container for this menu component.
             */
            // @ts-ignore
            public getParent(): java.awt.MenuContainer;
            // @ts-ignore
            public getPeer(): java.awt.peer.MenuComponentPeer;
            /**
             * Gets the font used for this menu component.
             */
            // @ts-ignore
            public getFont(): java.awt.Font;
            /**
             * Sets the font to be used for this menu component to the specified
             * font. This font is also used by all subcomponents of this menu
             * component, unless those subcomponents specify a different font.
             * <p>
             * Some platforms may not support setting of all font attributes
             * of a menu component; in such cases, calling <code>setFont</code>
             * will have no effect on the unsupported font attributes of this
             * menu component.  Unless subcomponents of this menu component
             * specify a different font, this font will be used by those
             * subcomponents if supported by the underlying platform.
             */
            // @ts-ignore
            public setFont(f: java.awt.Font): void;
            /**
             * Removes the menu component's peer.  The peer allows us to modify the
             * appearance of the menu component without changing the functionality of
             * the menu component.
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Posts the specified event to the menu.
             * This method is part of the Java&nbsp;1.0 event system
             * and it is maintained only for backwards compatibility.
             * Its use is discouraged, and it may not be supported
             * in the future.
             */
            // @ts-ignore
            public postEvent(evt: java.awt.Event): boolean;
            /**
             * Delivers an event to this component or one of its sub components.
             */
            // @ts-ignore
            public dispatchEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes events occurring on this menu component.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Returns a string representing the state of this
             * <code>MenuComponent</code>. This method is intended to be used
             * only for debugging purposes, and the content and format of the
             * returned string may vary between implementations. The returned
             * string may be empty but may not be <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Returns a representation of this menu component as a string.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Gets this component's locking object (the object that owns the thread
             * synchronization monitor) for AWT component-tree and layout
             * operations.
             */
            // @ts-ignore
            protected getTreeLock(): java.lang.Object;
            /**
             * Gets the <code>AccessibleContext</code> associated with
             * this <code>MenuComponent</code>.
             * The method implemented by this base class returns <code>null</code>.
             * Classes that extend <code>MenuComponent</code>
             * should implement this method to return the
             * <code>AccessibleContext</code> associated with the subclass.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
