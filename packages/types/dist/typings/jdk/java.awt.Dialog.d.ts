declare namespace java {
    namespace awt {
        // @ts-ignore
         class Dialog extends java.awt.Window {
            /**
             * Constructs an initially invisible, modeless <code>Dialog</code> with
             * the specified owner <code>Frame</code> and an empty title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Frame)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the specified
             * owner <code>Frame</code> and modality and an empty title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Frame, modal: boolean)
            /**
             * Constructs an initially invisible, modeless <code>Dialog</code> with
             * the specified owner <code>Frame</code> and title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Frame, title: string)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the
             * specified owner <code>Frame</code>, title and modality.
             */
            // @ts-ignore
            constructor(owner: java.awt.Frame, title: string, modal: boolean)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the specified owner
             * <code>Frame</code>, title, modality, and <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            constructor(owner: java.awt.Frame, title: string, modal: boolean, gc: java.awt.GraphicsConfiguration)
            /**
             * Constructs an initially invisible, modeless <code>Dialog</code> with
             * the specified owner <code>Dialog</code> and an empty title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Dialog)
            /**
             * Constructs an initially invisible, modeless <code>Dialog</code>
             * with the specified owner <code>Dialog</code> and title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Dialog, title: string)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the
             * specified owner <code>Dialog</code>, title, and modality.
             */
            // @ts-ignore
            constructor(owner: java.awt.Dialog, title: string, modal: boolean)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the
             * specified owner <code>Dialog</code>, title, modality and
             * <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            constructor(owner: java.awt.Dialog, title: string, modal: boolean, gc: java.awt.GraphicsConfiguration)
            /**
             * Constructs an initially invisible, modeless <code>Dialog</code> with the
             * specified owner <code>Window</code> and an empty title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Window)
            /**
             * Constructs an initially invisible, modeless <code>Dialog</code> with
             * the specified owner <code>Window</code> and title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Window, title: string)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the
             * specified owner <code>Window</code> and modality and an empty title.
             */
            // @ts-ignore
            constructor(owner: java.awt.Window, modalityType: java.awt.Dialog.ModalityType)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the
             * specified owner <code>Window</code>, title and modality.
             */
            // @ts-ignore
            constructor(owner: java.awt.Window, title: string, modalityType: java.awt.Dialog.ModalityType)
            /**
             * Constructs an initially invisible <code>Dialog</code> with the
             * specified owner <code>Window</code>, title, modality and
             * <code>GraphicsConfiguration</code>.
             */
            // @ts-ignore
            constructor(owner: java.awt.Window, title: string, modalityType: java.awt.Dialog.ModalityType, gc: java.awt.GraphicsConfiguration)
            // @ts-ignore
            public static DEFAULT_MODALITY_TYPE: java.awt.Dialog.ModalityType;
            /**
             * Makes this Dialog displayable by connecting it to
             * a native screen resource.  Making a dialog displayable will
             * cause any of its children to be made displayable.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Indicates whether the dialog is modal.
             * <p>
             * This method is obsolete and is kept for backwards compatibility only.
             * Use {@link #getModalityType getModalityType()} instead.
             */
            // @ts-ignore
            public isModal(): boolean;
            /**
             * Specifies whether this dialog should be modal.
             * <p>
             * This method is obsolete and is kept for backwards compatibility only.
             * Use {@link #setModalityType setModalityType()} instead.
             * <p>
             * Note: changing modality of the visible dialog may have no effect
             * until it is hidden and then shown again.
             */
            // @ts-ignore
            public setModal(modal: boolean): void;
            /**
             * Returns the modality type of this dialog.
             */
            // @ts-ignore
            public getModalityType(): java.awt.Dialog.ModalityType;
            /**
             * Sets the modality type for this dialog. See {@link
             * java.awt.Dialog.ModalityType ModalityType} for possible modality types.
             * <p>
             * If the given modality type is not supported, <code>MODELESS</code>
             * is used. You may want to call <code>getModalityType()</code> after calling
             * this method to ensure that the modality type has been set.
             * <p>
             * Note: changing modality of the visible dialog may have no effect
             * until it is hidden and then shown again.
             */
            // @ts-ignore
            public setModalityType(type: java.awt.Dialog.ModalityType): void;
            /**
             * Gets the title of the dialog. The title is displayed in the
             * dialog's border.
             */
            // @ts-ignore
            public getTitle(): string;
            /**
             * Sets the title of the Dialog.
             */
            // @ts-ignore
            public setTitle(title: string): void;
            /**
             * Shows or hides this {@code Dialog} depending on the value of parameter
             * {@code b}.
             */
            // @ts-ignore
            public setVisible(b: boolean): void;
            /**
             * Makes the {@code Dialog} visible. If the dialog and/or its owner
             * are not yet displayable, both are made displayable.  The
             * dialog will be validated prior to being made visible.
             * If the dialog is already visible, this will bring the dialog
             * to the front.
             * <p>
             * If the dialog is modal and is not already visible, this call
             * will not return until the dialog is hidden by calling hide or
             * dispose. It is permissible to show modal dialogs from the event
             * dispatching thread because the toolkit will ensure that another
             * event pump runs while the one which invoked this method is blocked.
             */
            // @ts-ignore
            public show(): void;
            /**
             * Hides the Dialog and then causes {@code show} to return if it is currently
             * blocked.
             */
            // @ts-ignore
            public hide(): void;
            /**
             * {@inheritDoc}
             * <p>
             * If this dialog is modal and blocks some windows, then all of them are
             * also sent to the back to keep them below the blocking dialog.
             */
            // @ts-ignore
            public toBack(): void;
            /**
             * Indicates whether this dialog is resizable by the user.
             * By default, all dialogs are initially resizable.
             */
            // @ts-ignore
            public isResizable(): boolean;
            /**
             * Sets whether this dialog is resizable by the user.
             */
            // @ts-ignore
            public setResizable(resizable: boolean): void;
            /**
             * Disables or enables decorations for this dialog.
             * <p>
             * This method can only be called while the dialog is not displayable. To
             * make this dialog decorated, it must be opaque and have the default shape,
             * otherwise the {@code IllegalComponentStateException} will be thrown.
             * Refer to {@link Window#setShape}, {@link Window#setOpacity} and {@link
             * Window#setBackground} for details
             */
            // @ts-ignore
            public setUndecorated(undecorated: boolean): void;
            /**
             * Indicates whether this dialog is undecorated.
             * By default, all dialogs are initially decorated.
             */
            // @ts-ignore
            public isUndecorated(): boolean;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setOpacity(opacity: number): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setShape(shape: java.awt.Shape): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setBackground(bgColor: java.awt.Color): void;
            /**
             * Returns a string representing the state of this dialog. This
             * method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the AccessibleContext associated with this Dialog.
             * For dialogs, the AccessibleContext takes the form of an
             * AccessibleAWTDialog.
             * A new AccessibleAWTDialog instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
