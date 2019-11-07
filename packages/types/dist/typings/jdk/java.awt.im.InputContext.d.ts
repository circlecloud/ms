// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace im {
            // @ts-ignore
             class InputContext extends java.lang.Object {
                /**
                 * Constructs an InputContext.
                 * This method is protected so clients cannot instantiate
                 * InputContext directly. Input contexts are obtained by
                 * calling {@link #getInstance}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new InputContext instance.
                 */
                // @ts-ignore
                public static getInstance(): java.awt.im.InputContext;
                /**
                 * Attempts to select an input method or keyboard layout that
                 * supports the given locale, and returns a value indicating whether such
                 * an input method or keyboard layout has been successfully selected. The
                 * following steps are taken until an input method has been selected:
                 * <ul>
                 * <li>
                 * If the currently selected input method or keyboard layout supports the
                 * requested locale, it remains selected.</li>
                 * <li>
                 * If there is no input method or keyboard layout available that supports
                 * the requested locale, the current input method or keyboard layout remains
                 * selected.</li>
                 * <li>
                 * If the user has previously selected an input method or keyboard layout
                 * for the requested locale from the user interface, then the most recently
                 * selected such input method or keyboard layout is reselected.</li>
                 * <li>
                 * Otherwise, an input method or keyboard layout that supports the requested
                 * locale is selected in an implementation dependent way.</li>
                 * </ul>
                 * Before switching away from an input method, any currently uncommitted text
                 * is committed. If no input method or keyboard layout supporting the requested
                 * locale is available, then false is returned.
                 * <p>
                 * Not all host operating systems provide API to determine the locale of
                 * the currently selected native input method or keyboard layout, and to
                 * select a native input method or keyboard layout by locale.
                 * For host operating systems that don't provide such API,
                 * <code>selectInputMethod</code> assumes that native input methods or
                 * keyboard layouts provided by the host operating system support only the
                 * system's default locale.
                 * <p>
                 * A text editing component may call this method, for example, when
                 * the user changes the insertion point, so that the user can
                 * immediately continue typing in the language of the surrounding text.
                 */
                // @ts-ignore
                public selectInputMethod(locale: java.util.Locale): boolean;
                /**
                 * Returns the current locale of the current input method or keyboard
                 * layout.
                 * Returns null if the input context does not have a current input method
                 * or keyboard layout or if the current input method's
                 * {@link java.awt.im.spi.InputMethod#getLocale()} method returns null.
                 * <p>
                 * Not all host operating systems provide API to determine the locale of
                 * the currently selected native input method or keyboard layout.
                 * For host operating systems that don't provide such API,
                 * <code>getLocale</code> assumes that the current locale of all native
                 * input methods or keyboard layouts provided by the host operating system
                 * is the system's default locale.
                 */
                // @ts-ignore
                public getLocale(): java.util.Locale;
                /**
                 * Sets the subsets of the Unicode character set that input methods of this input
                 * context should be allowed to input. Null may be passed in to
                 * indicate that all characters are allowed. The initial value
                 * is null. The setting applies to the current input method as well
                 * as input methods selected after this call is made. However,
                 * applications cannot rely on this call having the desired effect,
                 * since this setting cannot be passed on to all host input methods -
                 * applications still need to apply their own character validation.
                 * If no input methods are available, then this method has no effect.
                 */
                // @ts-ignore
                public setCharacterSubsets(subsets: java.lang.Character.Subset): void;
                /**
                 * Enables or disables the current input method for composition,
                 * depending on the value of the parameter <code>enable</code>.
                 * <p>
                 * An input method that is enabled for composition interprets incoming
                 * events for both composition and control purposes, while a
                 * disabled input method does not interpret events for composition.
                 * Note however that events are passed on to the input method regardless
                 * whether it is enabled or not, and that an input method that is disabled
                 * for composition may still interpret events for control purposes,
                 * including to enable or disable itself for composition.
                 * <p>
                 * For input methods provided by host operating systems, it is not always possible to
                 * determine whether this operation is supported. For example, an input method may enable
                 * composition only for some locales, and do nothing for other locales. For such input
                 * methods, it is possible that this method does not throw
                 * {@link java.lang.UnsupportedOperationException UnsupportedOperationException},
                 * but also does not affect whether composition is enabled.
                 */
                // @ts-ignore
                public setCompositionEnabled(enable: boolean): void;
                /**
                 * Determines whether the current input method is enabled for composition.
                 * An input method that is enabled for composition interprets incoming
                 * events for both composition and control purposes, while a
                 * disabled input method does not interpret events for composition.
                 */
                // @ts-ignore
                public isCompositionEnabled(): boolean;
                /**
                 * Asks the current input method to reconvert text from the
                 * current client component. The input method obtains the text to
                 * be reconverted from the client component using the
                 * {@link InputMethodRequests#getSelectedText InputMethodRequests.getSelectedText}
                 * method. The other <code>InputMethodRequests</code> methods
                 * must be prepared to deal with further information requests by
                 * the input method. The composed and/or committed text will be
                 * sent to the client component as a sequence of
                 * <code>InputMethodEvent</code>s. If the input method cannot
                 * reconvert the given text, the text is returned as committed
                 * text in an <code>InputMethodEvent</code>.
                 */
                // @ts-ignore
                public reconvert(): void;
                /**
                 * Dispatches an event to the active input method. Called by AWT.
                 * If no input method is available, then the event will never be consumed.
                 */
                // @ts-ignore
                public dispatchEvent(event: java.awt.AWTEvent): void;
                /**
                 * Notifies the input context that a client component has been
                 * removed from its containment hierarchy, or that input method
                 * support has been disabled for the component. This method is
                 * usually called from the client component's
                 * {@link java.awt.Component#removeNotify() Component.removeNotify}
                 * method. Potentially pending input from input methods
                 * for this component is discarded.
                 * If no input methods are available, then this method has no effect.
                 */
                // @ts-ignore
                public removeNotify(client: java.awt.Component): void;
                /**
                 * Ends any input composition that may currently be going on in this
                 * context. Depending on the platform and possibly user preferences,
                 * this may commit or delete uncommitted text. Any changes to the text
                 * are communicated to the active component using an input method event.
                 * If no input methods are available, then this method has no effect.
                 * <p>
                 * A text editing component may call this in a variety of situations,
                 * for example, when the user moves the insertion point within the text
                 * (but outside the composed text), or when the component's text is
                 * saved to a file or copied to the clipboard.
                 */
                // @ts-ignore
                public endComposition(): void;
                /**
                 * Releases the resources used by this input context.
                 * Called by AWT for the default input context of each Window.
                 * If no input methods are available, then this method
                 * has no effect.
                 */
                // @ts-ignore
                public dispose(): void;
                /**
                 * Returns a control object from the current input method, or null. A
                 * control object provides methods that control the behavior of the
                 * input method or obtain information from the input method. The type
                 * of the object is an input method specific class. Clients have to
                 * compare the result against known input method control object
                 * classes and cast to the appropriate class to invoke the methods
                 * provided.
                 * <p>
                 * If no input methods are available or the current input method does
                 * not provide an input method control object, then null is returned.
                 */
                // @ts-ignore
                public getInputMethodControlObject(): java.lang.Object;
            }
        }
    }
}
