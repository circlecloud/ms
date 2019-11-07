// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace im {
            namespace spi {
                // @ts-ignore
                interface InputMethodDescriptor {
                    /**
                     * Returns the locales supported by the corresponding input method.
                     * The locale may describe just the language, or may also include
                     * country and variant information if needed.
                     * The information is used to select input methods by locale
                     * ({@link java.awt.im.InputContext#selectInputMethod(Locale)}). It may also
                     * be used to sort input methods by locale in a user-visible
                     * list of input methods.
                     * <p>
                     * Only the input method's primary locales should be returned.
                     * For example, if a Japanese input method also has a pass-through
                     * mode for Roman characters, typically still only Japanese would
                     * be returned. Thus, the list of locales returned is typically
                     * a subset of the locales for which the corresponding input method's
                     * implementation of {@link java.awt.im.spi.InputMethod#setLocale} returns true.
                     * <p>
                     * If {@link #hasDynamicLocaleList} returns true, this method is
                     * called each time the information is needed. This
                     * gives input methods that depend on network resources the chance
                     * to add or remove locales as resources become available or
                     * unavailable.
                     */
                    // @ts-ignore
                     getAvailableLocales(): java.util.Locale[];
                    /**
                     * Returns whether the list of available locales can change
                     * at runtime. This may be the case, for example, for adapters
                     * that access real input methods over the network.
                     */
                    // @ts-ignore
                     hasDynamicLocaleList(): boolean;
                    /**
                     * Returns the user-visible name of the corresponding
                     * input method for the given input locale in the language in which
                     * the name will be displayed.
                     * <p>
                     * The inputLocale parameter specifies the locale for which text
                     * is input.
                     * This parameter can only take values obtained from this descriptor's
                     * {@link #getAvailableLocales} method or null. If it is null, an
                     * input locale independent name for the input method should be
                     * returned.
                     * <p>
                     * If a name for the desired display language is not available, the
                     * method may fall back to some other language.
                     */
                    // @ts-ignore
                     getInputMethodDisplayName(inputLocale: java.util.Locale, displayLanguage: java.util.Locale): string;
                    /**
                     * Returns an icon for the corresponding input method.
                     * The icon may be used by a user interface for selecting input methods.
                     * <p>
                     * The inputLocale parameter specifies the locale for which text
                     * is input.
                     * This parameter can only take values obtained from this descriptor's
                     * {@link #getAvailableLocales} method or null. If it is null, an
                     * input locale independent icon for the input method should be
                     * returned.
                     * <p>
                     * The icon's size should be 16&times;16 pixels.
                     */
                    // @ts-ignore
                     getInputMethodIcon(inputLocale: java.util.Locale): java.awt.Image;
                    /**
                     * Creates a new instance of the corresponding input method.
                     */
                    // @ts-ignore
                     createInputMethod(): java.awt.im.spi.InputMethod;
                }
            }
        }
    }
}
