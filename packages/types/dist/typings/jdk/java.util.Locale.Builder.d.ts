declare namespace java {
    namespace util {
        namespace Locale {
            // @ts-ignore
             class Builder extends java.lang.Object {
                /**
                 * Constructs an empty Builder. The default value of all
                 * fields, extensions, and private use information is the
                 * empty string.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Resets the <code>Builder</code> to match the provided
                 * <code>locale</code>.  Existing state is discarded.
                 * <p>All fields of the locale must be well-formed, see {@link Locale}.
                 * <p>Locales with any ill-formed fields cause
                 * <code>IllformedLocaleException</code> to be thrown, except for the
                 * following three cases which are accepted for compatibility
                 * reasons:<ul>
                 * <li>Locale("ja", "JP", "JP") is treated as "ja-JP-u-ca-japanese"
                 * <li>Locale("th", "TH", "TH") is treated as "th-TH-u-nu-thai"
                 * <li>Locale("no", "NO", "NY") is treated as "nn-NO"</ul>
                 */
                // @ts-ignore
                public setLocale(locale: java.util.Locale): java.util.Locale.Builder;
                /**
                 * Resets the Builder to match the provided IETF BCP 47
                 * language tag.  Discards the existing state.  Null and the
                 * empty string cause the builder to be reset, like {@link
                 * #clear}.  Grandfathered tags (see {@link
                 * Locale#forLanguageTag}) are converted to their canonical
                 * form before being processed.  Otherwise, the language tag
                 * must be well-formed (see {@link Locale}) or an exception is
                 * thrown (unlike <code>Locale.forLanguageTag</code>, which
                 * just discards ill-formed and following portions of the
                 * tag).
                 */
                // @ts-ignore
                public setLanguageTag(languageTag: string): java.util.Locale.Builder;
                /**
                 * Sets the language.  If <code>language</code> is the empty string or
                 * null, the language in this <code>Builder</code> is removed.  Otherwise,
                 * the language must be <a href="./Locale.html#def_language">well-formed</a>
                 * or an exception is thrown.
                 * <p>The typical language value is a two or three-letter language
                 * code as defined in ISO639.
                 */
                // @ts-ignore
                public setLanguage(language: string): java.util.Locale.Builder;
                /**
                 * Sets the script. If <code>script</code> is null or the empty string,
                 * the script in this <code>Builder</code> is removed.
                 * Otherwise, the script must be <a href="./Locale.html#def_script">well-formed</a> or an
                 * exception is thrown.
                 * <p>The typical script value is a four-letter script code as defined by ISO 15924.
                 */
                // @ts-ignore
                public setScript(script: string): java.util.Locale.Builder;
                /**
                 * Sets the region.  If region is null or the empty string, the region
                 * in this <code>Builder</code> is removed.  Otherwise,
                 * the region must be <a href="./Locale.html#def_region">well-formed</a> or an
                 * exception is thrown.
                 * <p>The typical region value is a two-letter ISO 3166 code or a
                 * three-digit UN M.49 area code.
                 * <p>The country value in the <code>Locale</code> created by the
                 * <code>Builder</code> is always normalized to upper case.
                 */
                // @ts-ignore
                public setRegion(region: string): java.util.Locale.Builder;
                /**
                 * Sets the variant.  If variant is null or the empty string, the
                 * variant in this <code>Builder</code> is removed.  Otherwise, it
                 * must consist of one or more <a href="./Locale.html#def_variant">well-formed</a>
                 * subtags, or an exception is thrown.
                 * <p><b>Note:</b> This method checks if <code>variant</code>
                 * satisfies the IETF BCP 47 variant subtag's syntax requirements,
                 * and normalizes the value to lowercase letters.  However,
                 * the <code>Locale</code> class does not impose any syntactic
                 * restriction on variant, and the variant value in
                 * <code>Locale</code> is case sensitive.  To set such a variant,
                 * use a Locale constructor.
                 */
                // @ts-ignore
                public setVariant(variant: string): java.util.Locale.Builder;
                /**
                 * Sets the extension for the given key. If the value is null or the
                 * empty string, the extension is removed.  Otherwise, the extension
                 * must be <a href="./Locale.html#def_extensions">well-formed</a> or an exception
                 * is thrown.
                 * <p><b>Note:</b> The key {@link Locale#UNICODE_LOCALE_EXTENSION
                 * UNICODE_LOCALE_EXTENSION} ('u') is used for the Unicode locale extension.
                 * Setting a value for this key replaces any existing Unicode locale key/type
                 * pairs with those defined in the extension.
                 * <p><b>Note:</b> The key {@link Locale#PRIVATE_USE_EXTENSION
                 * PRIVATE_USE_EXTENSION} ('x') is used for the private use code. To be
                 * well-formed, the value for this key needs only to have subtags of one to
                 * eight alphanumeric characters, not two to eight as in the general case.
                 */
                // @ts-ignore
                public setExtension(key: string, value: string): java.util.Locale.Builder;
                /**
                 * Sets the Unicode locale keyword type for the given key.  If the type
                 * is null, the Unicode keyword is removed.  Otherwise, the key must be
                 * non-null and both key and type must be <a
                 * href="./Locale.html#def_locale_extension">well-formed</a> or an exception
                 * is thrown.
                 * <p>Keys and types are converted to lower case.
                 * <p><b>Note</b>:Setting the 'u' extension via {@link #setExtension}
                 * replaces all Unicode locale keywords with those defined in the
                 * extension.
                 */
                // @ts-ignore
                public setUnicodeLocaleKeyword(key: string, type: string): java.util.Locale.Builder;
                /**
                 * Adds a unicode locale attribute, if not already present, otherwise
                 * has no effect.  The attribute must not be null and must be <a
                 * href="./Locale.html#def_locale_extension">well-formed</a> or an exception
                 * is thrown.
                 */
                // @ts-ignore
                public addUnicodeLocaleAttribute(attribute: string): java.util.Locale.Builder;
                /**
                 * Removes a unicode locale attribute, if present, otherwise has no
                 * effect.  The attribute must not be null and must be <a
                 * href="./Locale.html#def_locale_extension">well-formed</a> or an exception
                 * is thrown.
                 * <p>Attribute comparision for removal is case-insensitive.
                 */
                // @ts-ignore
                public removeUnicodeLocaleAttribute(attribute: string): java.util.Locale.Builder;
                /**
                 * Resets the builder to its initial, empty state.
                 */
                // @ts-ignore
                public clear(): java.util.Locale.Builder;
                /**
                 * Resets the extensions to their initial, empty state.
                 * Language, script, region and variant are unchanged.
                 */
                // @ts-ignore
                public clearExtensions(): java.util.Locale.Builder;
                /**
                 * Returns an instance of <code>Locale</code> created from the fields set
                 * on this builder.
                 * <p>This applies the conversions listed in {@link Locale#forLanguageTag}
                 * when constructing a Locale. (Grandfathered tags are handled in
                 * {@link #setLanguageTag}.)
                 */
                // @ts-ignore
                public build(): java.util.Locale;
            }
        }
    }
}
