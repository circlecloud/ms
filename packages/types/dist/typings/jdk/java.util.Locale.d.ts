// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Locale extends java.lang.Object {
            /**
             * Construct a locale from language, country and variant.
             * This constructor normalizes the language value to lowercase and
             * the country value to uppercase.
             * <p>
             * <b>Note:</b>
             * <ul>
             * <li>ISO 639 is not a stable standard; some of the language codes it defines
             * (specifically "iw", "ji", and "in") have changed.  This constructor accepts both the
             * old codes ("iw", "ji", and "in") and the new codes ("he", "yi", and "id"), but all other
             * API on Locale will return only the OLD codes.
             * <li>For backward compatibility reasons, this constructor does not make
             * any syntactic checks on the input.
             * <li>The two cases ("ja", "JP", "JP") and ("th", "TH", "TH") are handled specially,
             * see <a href="#special_cases_constructor">Special Cases</a> for more information.
             * </ul>
             */
            // @ts-ignore
            constructor(language: string, country: string, variant: string)
            /**
             * Construct a locale from language and country.
             * This constructor normalizes the language value to lowercase and
             * the country value to uppercase.
             * <p>
             * <b>Note:</b>
             * <ul>
             * <li>ISO 639 is not a stable standard; some of the language codes it defines
             * (specifically "iw", "ji", and "in") have changed.  This constructor accepts both the
             * old codes ("iw", "ji", and "in") and the new codes ("he", "yi", and "id"), but all other
             * API on Locale will return only the OLD codes.
             * <li>For backward compatibility reasons, this constructor does not make
             * any syntactic checks on the input.
             * </ul>
             */
            // @ts-ignore
            constructor(language: string, country: string)
            /**
             * Construct a locale from a language code.
             * This constructor normalizes the language value to lowercase.
             * <p>
             * <b>Note:</b>
             * <ul>
             * <li>ISO 639 is not a stable standard; some of the language codes it defines
             * (specifically "iw", "ji", and "in") have changed.  This constructor accepts both the
             * old codes ("iw", "ji", and "in") and the new codes ("he", "yi", and "id"), but all other
             * API on Locale will return only the OLD codes.
             * <li>For backward compatibility reasons, this constructor does not make
             * any syntactic checks on the input.
             * </ul>
             */
            // @ts-ignore
            constructor(language: string)
            // @ts-ignore
            public static ENGLISH: java.util.Locale;
            // @ts-ignore
            public static FRENCH: java.util.Locale;
            // @ts-ignore
            public static GERMAN: java.util.Locale;
            // @ts-ignore
            public static ITALIAN: java.util.Locale;
            // @ts-ignore
            public static JAPANESE: java.util.Locale;
            // @ts-ignore
            public static KOREAN: java.util.Locale;
            // @ts-ignore
            public static CHINESE: java.util.Locale;
            // @ts-ignore
            public static SIMPLIFIED_CHINESE: java.util.Locale;
            // @ts-ignore
            public static TRADITIONAL_CHINESE: java.util.Locale;
            // @ts-ignore
            public static FRANCE: java.util.Locale;
            // @ts-ignore
            public static GERMANY: java.util.Locale;
            // @ts-ignore
            public static ITALY: java.util.Locale;
            // @ts-ignore
            public static JAPAN: java.util.Locale;
            // @ts-ignore
            public static KOREA: java.util.Locale;
            // @ts-ignore
            public static CHINA: java.util.Locale;
            // @ts-ignore
            public static PRC: java.util.Locale;
            // @ts-ignore
            public static TAIWAN: java.util.Locale;
            // @ts-ignore
            public static UK: java.util.Locale;
            // @ts-ignore
            public static US: java.util.Locale;
            // @ts-ignore
            public static CANADA: java.util.Locale;
            // @ts-ignore
            public static CANADA_FRENCH: java.util.Locale;
            // @ts-ignore
            public static ROOT: java.util.Locale;
            // @ts-ignore
            public static PRIVATE_USE_EXTENSION: string;
            // @ts-ignore
            public static UNICODE_LOCALE_EXTENSION: string;
            /**
             * Gets the current value of the default locale for this instance
             * of the Java Virtual Machine.
             * <p>
             * The Java Virtual Machine sets the default locale during startup
             * based on the host environment. It is used by many locale-sensitive
             * methods if no locale is explicitly specified.
             * It can be changed using the
             * {@link #setDefault(java.util.Locale) setDefault} method.
             */
            // @ts-ignore
            public static getDefault(): java.util.Locale;
            /**
             * Gets the current value of the default locale for the specified Category
             * for this instance of the Java Virtual Machine.
             * <p>
             * The Java Virtual Machine sets the default locale during startup based
             * on the host environment. It is used by many locale-sensitive methods
             * if no locale is explicitly specified. It can be changed using the
             * setDefault(Locale.Category, Locale) method.
             */
            // @ts-ignore
            public static getDefault(category: java.util.Locale.Category): java.util.Locale;
            /**
             * Sets the default locale for this instance of the Java Virtual Machine.
             * This does not affect the host locale.
             * <p>
             * If there is a security manager, its <code>checkPermission</code>
             * method is called with a <code>PropertyPermission("user.language", "write")</code>
             * permission before the default locale is changed.
             * <p>
             * The Java Virtual Machine sets the default locale during startup
             * based on the host environment. It is used by many locale-sensitive
             * methods if no locale is explicitly specified.
             * <p>
             * Since changing the default locale may affect many different areas
             * of functionality, this method should only be used if the caller
             * is prepared to reinitialize locale-sensitive code running
             * within the same Java Virtual Machine.
             * <p>
             * By setting the default locale with this method, all of the default
             * locales for each Category are also set to the specified default locale.
             */
            // @ts-ignore
            public static setDefault(newLocale: java.util.Locale): void;
            /**
             * Sets the default locale for the specified Category for this instance
             * of the Java Virtual Machine. This does not affect the host locale.
             * <p>
             * If there is a security manager, its checkPermission method is called
             * with a PropertyPermission("user.language", "write") permission before
             * the default locale is changed.
             * <p>
             * The Java Virtual Machine sets the default locale during startup based
             * on the host environment. It is used by many locale-sensitive methods
             * if no locale is explicitly specified.
             * <p>
             * Since changing the default locale may affect many different areas of
             * functionality, this method should only be used if the caller is
             * prepared to reinitialize locale-sensitive code running within the
             * same Java Virtual Machine.
             * <p>
             */
            // @ts-ignore
            public static setDefault(category: java.util.Locale.Category, newLocale: java.util.Locale): void;
            /**
             * Returns an array of all installed locales.
             * The returned array represents the union of locales supported
             * by the Java runtime environment and by installed
             * {@link java.util.spi.LocaleServiceProvider LocaleServiceProvider}
             * implementations.  It must contain at least a <code>Locale</code>
             * instance equal to {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
            /**
             * Returns a list of all 2-letter country codes defined in ISO 3166.
             * Can be used to create Locales.
             * <p>
             * <b>Note:</b> The <code>Locale</code> class also supports other codes for
             * country (region), such as 3-letter numeric UN M.49 area codes.
             * Therefore, the list returned by this method does not contain ALL valid
             * codes that can be used to create Locales.
             */
            // @ts-ignore
            public static getISOCountries(): java.lang.String[];
            /**
             * Returns a list of all 2-letter language codes defined in ISO 639.
             * Can be used to create Locales.
             * <p>
             * <b>Note:</b>
             * <ul>
             * <li>ISO 639 is not a stable standard&mdash; some languages' codes have changed.
             * The list this function returns includes both the new and the old codes for the
             * languages whose codes have changed.
             * <li>The <code>Locale</code> class also supports language codes up to
             * 8 characters in length.  Therefore, the list returned by this method does
             * not contain ALL valid codes that can be used to create Locales.
             * </ul>
             */
            // @ts-ignore
            public static getISOLanguages(): java.lang.String[];
            /**
             * Returns the language code of this Locale.
             * <p><b>Note:</b> ISO 639 is not a stable standard&mdash; some languages' codes have changed.
             * Locale's constructor recognizes both the new and the old codes for the languages
             * whose codes have changed, but this function always returns the old code.  If you
             * want to check for a specific language whose code has changed, don't do
             * <pre>
             * if (locale.getLanguage().equals("he")) // BAD!
             * ...
             * </pre>
             * Instead, do
             * <pre>
             * if (locale.getLanguage().equals(new Locale("he").getLanguage()))
             * ...
             * </pre>
             */
            // @ts-ignore
            public getLanguage(): string;
            /**
             * Returns the script for this locale, which should
             * either be the empty string or an ISO 15924 4-letter script
             * code. The first letter is uppercase and the rest are
             * lowercase, for example, 'Latn', 'Cyrl'.
             */
            // @ts-ignore
            public getScript(): string;
            /**
             * Returns the country/region code for this locale, which should
             * either be the empty string, an uppercase ISO 3166 2-letter code,
             * or a UN M.49 3-digit code.
             */
            // @ts-ignore
            public getCountry(): string;
            /**
             * Returns the variant code for this locale.
             */
            // @ts-ignore
            public getVariant(): string;
            /**
             * Returns {@code true} if this {@code Locale} has any <a href="#def_extensions">
             * extensions</a>.
             */
            // @ts-ignore
            public hasExtensions(): boolean;
            /**
             * Returns a copy of this {@code Locale} with no <a href="#def_extensions">
             * extensions</a>. If this {@code Locale} has no extensions, this {@code Locale}
             * is returned.
             */
            // @ts-ignore
            public stripExtensions(): java.util.Locale;
            /**
             * Returns the extension (or private use) value associated with
             * the specified key, or null if there is no extension
             * associated with the key. To be well-formed, the key must be one
             * of <code>[0-9A-Za-z]</code>. Keys are case-insensitive, so
             * for example 'z' and 'Z' represent the same extension.
             */
            // @ts-ignore
            public getExtension(key: string): string;
            /**
             * Returns the set of extension keys associated with this locale, or the
             * empty set if it has no extensions. The returned set is unmodifiable.
             * The keys will all be lower-case.
             */
            // @ts-ignore
            public getExtensionKeys(): java.util.Set;
            /**
             * Returns the set of unicode locale attributes associated with
             * this locale, or the empty set if it has no attributes. The
             * returned set is unmodifiable.
             */
            // @ts-ignore
            public getUnicodeLocaleAttributes(): java.util.Set;
            /**
             * Returns the Unicode locale type associated with the specified Unicode locale key
             * for this locale. Returns the empty string for keys that are defined with no type.
             * Returns null if the key is not defined. Keys are case-insensitive. The key must
             * be two alphanumeric characters ([0-9a-zA-Z]), or an IllegalArgumentException is
             * thrown.
             */
            // @ts-ignore
            public getUnicodeLocaleType(key: string): string;
            /**
             * Returns the set of Unicode locale keys defined by this locale, or the empty set if
             * this locale has none.  The returned set is immutable.  Keys are all lower case.
             */
            // @ts-ignore
            public getUnicodeLocaleKeys(): java.util.Set;
            /**
             * Returns a string representation of this <code>Locale</code>
             * object, consisting of language, country, variant, script,
             * and extensions as below:
             * <blockquote>
             * language + "_" + country + "_" + (variant + "_#" | "#") + script + "-" + extensions
             * </blockquote>
             * Language is always lower case, country is always upper case, script is always title
             * case, and extensions are always lower case.  Extensions and private use subtags
             * will be in canonical order as explained in {@link #toLanguageTag}.
             * <p>When the locale has neither script nor extensions, the result is the same as in
             * Java 6 and prior.
             * <p>If both the language and country fields are missing, this function will return
             * the empty string, even if the variant, script, or extensions field is present (you
             * can't have a locale with just a variant, the variant must accompany a well-formed
             * language or country code).
             * <p>If script or extensions are present and variant is missing, no underscore is
             * added before the "#".
             * <p>This behavior is designed to support debugging and to be compatible with
             * previous uses of <code>toString</code> that expected language, country, and variant
             * fields only.  To represent a Locale as a String for interchange purposes, use
             * {@link #toLanguageTag}.
             * <p>Examples: <ul>
             * <li><tt>en</tt></li>
             * <li><tt>de_DE</tt></li>
             * <li><tt>_GB</tt></li>
             * <li><tt>en_US_WIN</tt></li>
             * <li><tt>de__POSIX</tt></li>
             * <li><tt>zh_CN_#Hans</tt></li>
             * <li><tt>zh_TW_#Hant-x-java</tt></li>
             * <li><tt>th_TH_TH_#u-nu-thai</tt></li></ul>
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a well-formed IETF BCP 47 language tag representing
             * this locale.
             * <p>If this <code>Locale</code> has a language, country, or
             * variant that does not satisfy the IETF BCP 47 language tag
             * syntax requirements, this method handles these fields as
             * described below:
             * <p><b>Language:</b> If language is empty, or not <a
             * href="#def_language" >well-formed</a> (for example "a" or
             * "e2"), it will be emitted as "und" (Undetermined).
             * <p><b>Country:</b> If country is not <a
             * href="#def_region">well-formed</a> (for example "12" or "USA"),
             * it will be omitted.
             * <p><b>Variant:</b> If variant <b>is</b> <a
             * href="#def_variant">well-formed</a>, each sub-segment
             * (delimited by '-' or '_') is emitted as a subtag.  Otherwise:
             * <ul>
             * <li>if all sub-segments match <code>[0-9a-zA-Z]{1,8}</code>
             * (for example "WIN" or "Oracle_JDK_Standard_Edition"), the first
             * ill-formed sub-segment and all following will be appended to
             * the private use subtag.  The first appended subtag will be
             * "lvariant", followed by the sub-segments in order, separated by
             * hyphen. For example, "x-lvariant-WIN",
             * "Oracle-x-lvariant-JDK-Standard-Edition".
             * <li>if any sub-segment does not match
             * <code>[0-9a-zA-Z]{1,8}</code>, the variant will be truncated
             * and the problematic sub-segment and all following sub-segments
             * will be omitted.  If the remainder is non-empty, it will be
             * emitted as a private use subtag as above (even if the remainder
             * turns out to be well-formed).  For example,
             * "Solaris_isjustthecoolestthing" is emitted as
             * "x-lvariant-Solaris", not as "solaris".</li></ul>
             * <p><b>Special Conversions:</b> Java supports some old locale
             * representations, including deprecated ISO language codes,
             * for compatibility. This method performs the following
             * conversions:
             * <ul>
             * <li>Deprecated ISO language codes "iw", "ji", and "in" are
             * converted to "he", "yi", and "id", respectively.
             * <li>A locale with language "no", country "NO", and variant
             * "NY", representing Norwegian Nynorsk (Norway), is converted
             * to a language tag "nn-NO".</li></ul>
             * <p><b>Note:</b> Although the language tag created by this
             * method is well-formed (satisfies the syntax requirements
             * defined by the IETF BCP 47 specification), it is not
             * necessarily a valid BCP 47 language tag.  For example,
             * <pre>
             * new Locale("xx", "YY").toLanguageTag();</pre>
             * will return "xx-YY", but the language subtag "xx" and the
             * region subtag "YY" are invalid because they are not registered
             * in the IANA Language Subtag Registry.
             */
            // @ts-ignore
            public toLanguageTag(): string;
            /**
             * Returns a locale for the specified IETF BCP 47 language tag string.
             * <p>If the specified language tag contains any ill-formed subtags,
             * the first such subtag and all following subtags are ignored.  Compare
             * to {@link Locale.Builder#setLanguageTag} which throws an exception
             * in this case.
             * <p>The following <b>conversions</b> are performed:<ul>
             * <li>The language code "und" is mapped to language "".
             * <li>The language codes "he", "yi", and "id" are mapped to "iw",
             * "ji", and "in" respectively. (This is the same canonicalization
             * that's done in Locale's constructors.)
             * <li>The portion of a private use subtag prefixed by "lvariant",
             * if any, is removed and appended to the variant field in the
             * result locale (without case normalization).  If it is then
             * empty, the private use subtag is discarded:
             * <pre>
             * Locale loc;
             * loc = Locale.forLanguageTag("en-US-x-lvariant-POSIX");
             * loc.getVariant(); // returns "POSIX"
             * loc.getExtension('x'); // returns null
             * loc = Locale.forLanguageTag("de-POSIX-x-URP-lvariant-Abc-Def");
             * loc.getVariant(); // returns "POSIX_Abc_Def"
             * loc.getExtension('x'); // returns "urp"
             * </pre>
             * <li>When the languageTag argument contains an extlang subtag,
             * the first such subtag is used as the language, and the primary
             * language subtag and other extlang subtags are ignored:
             * <pre>
             * Locale.forLanguageTag("ar-aao").getLanguage(); // returns "aao"
             * Locale.forLanguageTag("en-abc-def-us").toString(); // returns "abc_US"
             * </pre>
             * <li>Case is normalized except for variant tags, which are left
             * unchanged.  Language is normalized to lower case, script to
             * title case, country to upper case, and extensions to lower
             * case.
             * <li>If, after processing, the locale would exactly match either
             * ja_JP_JP or th_TH_TH with no extensions, the appropriate
             * extensions are added as though the constructor had been called:
             * <pre>
             * Locale.forLanguageTag("ja-JP-x-lvariant-JP").toLanguageTag();
             * // returns "ja-JP-u-ca-japanese-x-lvariant-JP"
             * Locale.forLanguageTag("th-TH-x-lvariant-TH").toLanguageTag();
             * // returns "th-TH-u-nu-thai-x-lvariant-TH"
             * </pre></ul>
             * <p>This implements the 'Language-Tag' production of BCP47, and
             * so supports grandfathered (regular and irregular) as well as
             * private use language tags.  Stand alone private use tags are
             * represented as empty language and extension 'x-whatever',
             * and grandfathered tags are converted to their canonical replacements
             * where they exist.
             * <p>Grandfathered tags with canonical replacements are as follows:
             * <table summary="Grandfathered tags with canonical replacements">
             * <tbody align="center">
             * <tr><th>grandfathered tag</th><th>&nbsp;</th><th>modern replacement</th></tr>
             * <tr><td>art-lojban</td><td>&nbsp;</td><td>jbo</td></tr>
             * <tr><td>i-ami</td><td>&nbsp;</td><td>ami</td></tr>
             * <tr><td>i-bnn</td><td>&nbsp;</td><td>bnn</td></tr>
             * <tr><td>i-hak</td><td>&nbsp;</td><td>hak</td></tr>
             * <tr><td>i-klingon</td><td>&nbsp;</td><td>tlh</td></tr>
             * <tr><td>i-lux</td><td>&nbsp;</td><td>lb</td></tr>
             * <tr><td>i-navajo</td><td>&nbsp;</td><td>nv</td></tr>
             * <tr><td>i-pwn</td><td>&nbsp;</td><td>pwn</td></tr>
             * <tr><td>i-tao</td><td>&nbsp;</td><td>tao</td></tr>
             * <tr><td>i-tay</td><td>&nbsp;</td><td>tay</td></tr>
             * <tr><td>i-tsu</td><td>&nbsp;</td><td>tsu</td></tr>
             * <tr><td>no-bok</td><td>&nbsp;</td><td>nb</td></tr>
             * <tr><td>no-nyn</td><td>&nbsp;</td><td>nn</td></tr>
             * <tr><td>sgn-BE-FR</td><td>&nbsp;</td><td>sfb</td></tr>
             * <tr><td>sgn-BE-NL</td><td>&nbsp;</td><td>vgt</td></tr>
             * <tr><td>sgn-CH-DE</td><td>&nbsp;</td><td>sgg</td></tr>
             * <tr><td>zh-guoyu</td><td>&nbsp;</td><td>cmn</td></tr>
             * <tr><td>zh-hakka</td><td>&nbsp;</td><td>hak</td></tr>
             * <tr><td>zh-min-nan</td><td>&nbsp;</td><td>nan</td></tr>
             * <tr><td>zh-xiang</td><td>&nbsp;</td><td>hsn</td></tr>
             * </tbody>
             * </table>
             * <p>Grandfathered tags with no modern replacement will be
             * converted as follows:
             * <table summary="Grandfathered tags with no modern replacement">
             * <tbody align="center">
             * <tr><th>grandfathered tag</th><th>&nbsp;</th><th>converts to</th></tr>
             * <tr><td>cel-gaulish</td><td>&nbsp;</td><td>xtg-x-cel-gaulish</td></tr>
             * <tr><td>en-GB-oed</td><td>&nbsp;</td><td>en-GB-x-oed</td></tr>
             * <tr><td>i-default</td><td>&nbsp;</td><td>en-x-i-default</td></tr>
             * <tr><td>i-enochian</td><td>&nbsp;</td><td>und-x-i-enochian</td></tr>
             * <tr><td>i-mingo</td><td>&nbsp;</td><td>see-x-i-mingo</td></tr>
             * <tr><td>zh-min</td><td>&nbsp;</td><td>nan-x-zh-min</td></tr>
             * </tbody>
             * </table>
             * <p>For a list of all grandfathered tags, see the
             * IANA Language Subtag Registry (search for "Type: grandfathered").
             * <p><b>Note</b>: there is no guarantee that <code>toLanguageTag</code>
             * and <code>forLanguageTag</code> will round-trip.
             */
            // @ts-ignore
            public static forLanguageTag(languageTag: string): java.util.Locale;
            /**
             * Returns a three-letter abbreviation of this locale's language.
             * If the language matches an ISO 639-1 two-letter code, the
             * corresponding ISO 639-2/T three-letter lowercase code is
             * returned.  The ISO 639-2 language codes can be found on-line,
             * see "Codes for the Representation of Names of Languages Part 2:
             * Alpha-3 Code".  If the locale specifies a three-letter
             * language, the language is returned as is.  If the locale does
             * not specify a language the empty string is returned.
             */
            // @ts-ignore
            public getISO3Language(): string;
            /**
             * Returns a three-letter abbreviation for this locale's country.
             * If the country matches an ISO 3166-1 alpha-2 code, the
             * corresponding ISO 3166-1 alpha-3 uppercase code is returned.
             * If the locale doesn't specify a country, this will be the empty
             * string.
             * <p>The ISO 3166-1 codes can be found on-line.
             */
            // @ts-ignore
            public getISO3Country(): string;
            /**
             * Returns a name for the locale's language that is appropriate for display to the
             * user.
             * If possible, the name returned will be localized for the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale.
             * For example, if the locale is fr_FR and the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale
             * is en_US, getDisplayLanguage() will return "French"; if the locale is en_US and
             * the default {@link Locale.Category#DISPLAY DISPLAY} locale is fr_FR,
             * getDisplayLanguage() will return "anglais".
             * If the name returned cannot be localized for the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale,
             * (say, we don't have a Japanese name for Croatian),
             * this function falls back on the English name, and uses the ISO code as a last-resort
             * value.  If the locale doesn't specify a language, this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayLanguage(): string;
            /**
             * Returns a name for the locale's language that is appropriate for display to the
             * user.
             * If possible, the name returned will be localized according to inLocale.
             * For example, if the locale is fr_FR and inLocale
             * is en_US, getDisplayLanguage() will return "French"; if the locale is en_US and
             * inLocale is fr_FR, getDisplayLanguage() will return "anglais".
             * If the name returned cannot be localized according to inLocale,
             * (say, we don't have a Japanese name for Croatian),
             * this function falls back on the English name, and finally
             * on the ISO code as a last-resort value.  If the locale doesn't specify a language,
             * this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayLanguage(inLocale: java.util.Locale): string;
            /**
             * Returns a name for the the locale's script that is appropriate for display to
             * the user. If possible, the name will be localized for the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale.  Returns
             * the empty string if this locale doesn't specify a script code.
             */
            // @ts-ignore
            public getDisplayScript(): string;
            /**
             * Returns a name for the locale's script that is appropriate
             * for display to the user. If possible, the name will be
             * localized for the given locale. Returns the empty string if
             * this locale doesn't specify a script code.
             */
            // @ts-ignore
            public getDisplayScript(inLocale: java.util.Locale): string;
            /**
             * Returns a name for the locale's country that is appropriate for display to the
             * user.
             * If possible, the name returned will be localized for the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale.
             * For example, if the locale is fr_FR and the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale
             * is en_US, getDisplayCountry() will return "France"; if the locale is en_US and
             * the default {@link Locale.Category#DISPLAY DISPLAY} locale is fr_FR,
             * getDisplayCountry() will return "Etats-Unis".
             * If the name returned cannot be localized for the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale,
             * (say, we don't have a Japanese name for Croatia),
             * this function falls back on the English name, and uses the ISO code as a last-resort
             * value.  If the locale doesn't specify a country, this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayCountry(): string;
            /**
             * Returns a name for the locale's country that is appropriate for display to the
             * user.
             * If possible, the name returned will be localized according to inLocale.
             * For example, if the locale is fr_FR and inLocale
             * is en_US, getDisplayCountry() will return "France"; if the locale is en_US and
             * inLocale is fr_FR, getDisplayCountry() will return "Etats-Unis".
             * If the name returned cannot be localized according to inLocale.
             * (say, we don't have a Japanese name for Croatia),
             * this function falls back on the English name, and finally
             * on the ISO code as a last-resort value.  If the locale doesn't specify a country,
             * this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayCountry(inLocale: java.util.Locale): string;
            /**
             * Returns a name for the locale's variant code that is appropriate for display to the
             * user.  If possible, the name will be localized for the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale.  If the locale
             * doesn't specify a variant code, this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayVariant(): string;
            /**
             * Returns a name for the locale's variant code that is appropriate for display to the
             * user.  If possible, the name will be localized for inLocale.  If the locale
             * doesn't specify a variant code, this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayVariant(inLocale: java.util.Locale): string;
            /**
             * Returns a name for the locale that is appropriate for display to the
             * user. This will be the values returned by getDisplayLanguage(),
             * getDisplayScript(), getDisplayCountry(), and getDisplayVariant() assembled
             * into a single string. The the non-empty values are used in order,
             * with the second and subsequent names in parentheses.  For example:
             * <blockquote>
             * language (script, country, variant)<br>
             * language (country)<br>
             * language (variant)<br>
             * script (country)<br>
             * country<br>
             * </blockquote>
             * depending on which fields are specified in the locale.  If the
             * language, script, country, and variant fields are all empty,
             * this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayName(): string;
            /**
             * Returns a name for the locale that is appropriate for display
             * to the user.  This will be the values returned by
             * getDisplayLanguage(), getDisplayScript(),getDisplayCountry(),
             * and getDisplayVariant() assembled into a single string.
             * The non-empty values are used in order,
             * with the second and subsequent names in parentheses.  For example:
             * <blockquote>
             * language (script, country, variant)<br>
             * language (country)<br>
             * language (variant)<br>
             * script (country)<br>
             * country<br>
             * </blockquote>
             * depending on which fields are specified in the locale.  If the
             * language, script, country, and variant fields are all empty,
             * this function returns the empty string.
             */
            // @ts-ignore
            public getDisplayName(inLocale: java.util.Locale): string;
            /**
             * Overrides Cloneable.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Override hashCode.
             * Since Locales are often used in hashtables, caches the value
             * for speed.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns true if this Locale is equal to another object.  A Locale is
             * deemed equal to another Locale with identical language, script, country,
             * variant and extensions, and unequal to all other objects.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a list of matching {@code Locale} instances using the filtering
             * mechanism defined in RFC 4647.
             */
            // @ts-ignore
            public static filter(priorityList: java.util.List, locales: java.util.Collection, mode: java.util.Locale.FilteringMode): java.util.List;
            /**
             * Returns a list of matching {@code Locale} instances using the filtering
             * mechanism defined in RFC 4647. This is equivalent to
             * {@link #filter(List, Collection, FilteringMode)} when {@code mode} is
             * {@link FilteringMode#AUTOSELECT_FILTERING}.
             */
            // @ts-ignore
            public static filter(priorityList: java.util.List, locales: java.util.Collection): java.util.List;
            /**
             * Returns a list of matching languages tags using the basic filtering
             * mechanism defined in RFC 4647.
             */
            // @ts-ignore
            public static filterTags(priorityList: java.util.List, tags: java.util.Collection, mode: java.util.Locale.FilteringMode): java.util.List;
            /**
             * Returns a list of matching languages tags using the basic filtering
             * mechanism defined in RFC 4647. This is equivalent to
             * {@link #filterTags(List, Collection, FilteringMode)} when {@code mode}
             * is {@link FilteringMode#AUTOSELECT_FILTERING}.
             */
            // @ts-ignore
            public static filterTags(priorityList: java.util.List, tags: java.util.Collection): java.util.List;
            /**
             * Returns a {@code Locale} instance for the best-matching language
             * tag using the lookup mechanism defined in RFC 4647.
             */
            // @ts-ignore
            public static lookup(priorityList: java.util.List, locales: java.util.Collection): java.util.Locale;
            /**
             * Returns the best-matching language tag using the lookup mechanism
             * defined in RFC 4647.
             */
            // @ts-ignore
            public static lookupTag(priorityList: java.util.List, tags: java.util.Collection): string;
        }
    }
}
