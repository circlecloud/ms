// @ts-nocheck
declare namespace java {
    namespace util {
        namespace ResourceBundle {
            // @ts-ignore
             class Control extends java.lang.Object {
                /**
                 * Sole constructor. (For invocation by subclass constructors,
                 * typically implicit.)
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static FORMAT_DEFAULT: java.util.List;
                // @ts-ignore
                public static FORMAT_CLASS: java.util.List;
                // @ts-ignore
                public static FORMAT_PROPERTIES: java.util.List;
                // @ts-ignore
                public static TTL_DONT_CACHE: number;
                // @ts-ignore
                public static TTL_NO_EXPIRATION_CONTROL: number;
                /**
                 * Returns a <code>ResourceBundle.Control</code> in which the {@link
                 * #getFormats(String) getFormats} method returns the specified
                 * <code>formats</code>. The <code>formats</code> must be equal to
                 * one of {@link Control#FORMAT_PROPERTIES}, {@link
                 * Control#FORMAT_CLASS} or {@link
                 * Control#FORMAT_DEFAULT}. <code>ResourceBundle.Control</code>
                 * instances returned by this method are singletons and thread-safe.
                 * <p>Specifying {@link Control#FORMAT_DEFAULT} is equivalent to
                 * instantiating the <code>ResourceBundle.Control</code> class,
                 * except that this method returns a singleton.
                 */
                // @ts-ignore
                public static getControl(formats: java.util.List): java.util.ResourceBundle.Control;
                /**
                 * Returns a <code>ResourceBundle.Control</code> in which the {@link
                 * #getFormats(String) getFormats} method returns the specified
                 * <code>formats</code> and the {@link
                 * Control#getFallbackLocale(String, Locale) getFallbackLocale}
                 * method returns <code>null</code>. The <code>formats</code> must
                 * be equal to one of {@link Control#FORMAT_PROPERTIES}, {@link
                 * Control#FORMAT_CLASS} or {@link Control#FORMAT_DEFAULT}.
                 * <code>ResourceBundle.Control</code> instances returned by this
                 * method are singletons and thread-safe.
                 */
                // @ts-ignore
                public static getNoFallbackControl(formats: java.util.List): java.util.ResourceBundle.Control;
                /**
                 * Returns a <code>List</code> of <code>String</code>s containing
                 * formats to be used to load resource bundles for the given
                 * <code>baseName</code>. The <code>ResourceBundle.getBundle</code>
                 * factory method tries to load resource bundles with formats in the
                 * order specified by the list. The list returned by this method
                 * must have at least one <code>String</code>. The predefined
                 * formats are <code>"java.class"</code> for class-based resource
                 * bundles and <code>"java.properties"</code> for {@linkplain
                 * PropertyResourceBundle properties-based} ones. Strings starting
                 * with <code>"java."</code> are reserved for future extensions and
                 * must not be used by application-defined formats.
                 * <p>It is not a requirement to return an immutable (unmodifiable)
                 * <code>List</code>.  However, the returned <code>List</code> must
                 * not be mutated after it has been returned by
                 * <code>getFormats</code>.
                 * <p>The default implementation returns {@link #FORMAT_DEFAULT} so
                 * that the <code>ResourceBundle.getBundle</code> factory method
                 * looks up first class-based resource bundles, then
                 * properties-based ones.
                 */
                // @ts-ignore
                public getFormats(baseName: string): java.util.List;
                /**
                 * Returns a <code>List</code> of <code>Locale</code>s as candidate
                 * locales for <code>baseName</code> and <code>locale</code>. This
                 * method is called by the <code>ResourceBundle.getBundle</code>
                 * factory method each time the factory method tries finding a
                 * resource bundle for a target <code>Locale</code>.
                 * <p>The sequence of the candidate locales also corresponds to the
                 * runtime resource lookup path (also known as the <I>parent
                 * chain</I>), if the corresponding resource bundles for the
                 * candidate locales exist and their parents are not defined by
                 * loaded resource bundles themselves.  The last element of the list
                 * must be a {@linkplain Locale#ROOT root locale} if it is desired to
                 * have the base bundle as the terminal of the parent chain.
                 * <p>If the given locale is equal to <code>Locale.ROOT</code> (the
                 * root locale), a <code>List</code> containing only the root
                 * <code>Locale</code> must be returned. In this case, the
                 * <code>ResourceBundle.getBundle</code> factory method loads only
                 * the base bundle as the resulting resource bundle.
                 * <p>It is not a requirement to return an immutable (unmodifiable)
                 * <code>List</code>. However, the returned <code>List</code> must not
                 * be mutated after it has been returned by
                 * <code>getCandidateLocales</code>.
                 * <p>The default implementation returns a <code>List</code> containing
                 * <code>Locale</code>s using the rules described below.  In the
                 * description below, <em>L</em>, <em>S</em>, <em>C</em> and <em>V</em>
                 * respectively represent non-empty language, script, country, and
                 * variant.  For example, [<em>L</em>, <em>C</em>] represents a
                 * <code>Locale</code> that has non-empty values only for language and
                 * country.  The form <em>L</em>("xx") represents the (non-empty)
                 * language value is "xx".  For all cases, <code>Locale</code>s whose
                 * final component values are empty strings are omitted.
                 * <ol><li>For an input <code>Locale</code> with an empty script value,
                 * append candidate <code>Locale</code>s by omitting the final component
                 * one by one as below:
                 * <ul>
                 * <li> [<em>L</em>, <em>C</em>, <em>V</em>] </li>
                 * <li> [<em>L</em>, <em>C</em>] </li>
                 * <li> [<em>L</em>] </li>
                 * <li> <code>Locale.ROOT</code> </li>
                 * </ul></li>
                 * <li>For an input <code>Locale</code> with a non-empty script value,
                 * append candidate <code>Locale</code>s by omitting the final component
                 * up to language, then append candidates generated from the
                 * <code>Locale</code> with country and variant restored:
                 * <ul>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>, <em>V</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>, <em>V</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul></li>
                 * <li>For an input <code>Locale</code> with a variant value consisting
                 * of multiple subtags separated by underscore, generate candidate
                 * <code>Locale</code>s by omitting the variant subtags one by one, then
                 * insert them after every occurrence of <code> Locale</code>s with the
                 * full variant value in the original list.  For example, if the
                 * the variant consists of two subtags <em>V1</em> and <em>V2</em>:
                 * <ul>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>, <em>V1</em>, <em>V2</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>, <em>V1</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>, <em>S</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>, <em>V1</em>, <em>V2</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>, <em>V1</em>]</li>
                 * <li> [<em>L</em>, <em>C</em>]</li>
                 * <li> [<em>L</em>]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul></li>
                 * <li>Special cases for Chinese.  When an input <code>Locale</code> has the
                 * language "zh" (Chinese) and an empty script value, either "Hans" (Simplified) or
                 * "Hant" (Traditional) might be supplied, depending on the country.
                 * When the country is "CN" (China) or "SG" (Singapore), "Hans" is supplied.
                 * When the country is "HK" (Hong Kong SAR China), "MO" (Macau SAR China),
                 * or "TW" (Taiwan), "Hant" is supplied.  For all other countries or when the country
                 * is empty, no script is supplied.  For example, for <code>Locale("zh", "CN")
                 * </code>, the candidate list will be:
                 * <ul>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hans"), <em>C</em>("CN")]</li>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hans")]</li>
                 * <li> [<em>L</em>("zh"), <em>C</em>("CN")]</li>
                 * <li> [<em>L</em>("zh")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul>
                 * For <code>Locale("zh", "TW")</code>, the candidate list will be:
                 * <ul>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hant"), <em>C</em>("TW")]</li>
                 * <li> [<em>L</em>("zh"), <em>S</em>("Hant")]</li>
                 * <li> [<em>L</em>("zh"), <em>C</em>("TW")]</li>
                 * <li> [<em>L</em>("zh")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul></li>
                 * <li>Special cases for Norwegian.  Both <code>Locale("no", "NO",
                 * "NY")</code> and <code>Locale("nn", "NO")</code> represent Norwegian
                 * Nynorsk.  When a locale's language is "nn", the standard candidate
                 * list is generated up to [<em>L</em>("nn")], and then the following
                 * candidates are added:
                 * <ul><li> [<em>L</em>("no"), <em>C</em>("NO"), <em>V</em>("NY")]</li>
                 * <li> [<em>L</em>("no"), <em>C</em>("NO")]</li>
                 * <li> [<em>L</em>("no")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul>
                 * If the locale is exactly <code>Locale("no", "NO", "NY")</code>, it is first
                 * converted to <code>Locale("nn", "NO")</code> and then the above procedure is
                 * followed.
                 * <p>Also, Java treats the language "no" as a synonym of Norwegian
                 * Bokm&#xE5;l "nb".  Except for the single case <code>Locale("no",
                 * "NO", "NY")</code> (handled above), when an input <code>Locale</code>
                 * has language "no" or "nb", candidate <code>Locale</code>s with
                 * language code "no" and "nb" are interleaved, first using the
                 * requested language, then using its synonym. For example,
                 * <code>Locale("nb", "NO", "POSIX")</code> generates the following
                 * candidate list:
                 * <ul>
                 * <li> [<em>L</em>("nb"), <em>C</em>("NO"), <em>V</em>("POSIX")]</li>
                 * <li> [<em>L</em>("no"), <em>C</em>("NO"), <em>V</em>("POSIX")]</li>
                 * <li> [<em>L</em>("nb"), <em>C</em>("NO")]</li>
                 * <li> [<em>L</em>("no"), <em>C</em>("NO")]</li>
                 * <li> [<em>L</em>("nb")]</li>
                 * <li> [<em>L</em>("no")]</li>
                 * <li> <code>Locale.ROOT</code></li>
                 * </ul>
                 * <code>Locale("no", "NO", "POSIX")</code> would generate the same list
                 * except that locales with "no" would appear before the corresponding
                 * locales with "nb".</li>
                 * </ol>
                 * <p>The default implementation uses an {@link ArrayList} that
                 * overriding implementations may modify before returning it to the
                 * caller. However, a subclass must not modify it after it has
                 * been returned by <code>getCandidateLocales</code>.
                 * <p>For example, if the given <code>baseName</code> is "Messages"
                 * and the given <code>locale</code> is
                 * <code>Locale("ja",&nbsp;"",&nbsp;"XX")</code>, then a
                 * <code>List</code> of <code>Locale</code>s:
                 * <pre>
                 * Locale("ja", "", "XX")
                 * Locale("ja")
                 * Locale.ROOT
                 * </pre>
                 * is returned. And if the resource bundles for the "ja" and
                 * "" <code>Locale</code>s are found, then the runtime resource
                 * lookup path (parent chain) is:
                 * <pre>{@code
                 * Messages_ja -> Messages
                 * }</pre>
                 */
                // @ts-ignore
                public getCandidateLocales(baseName: string, locale: java.util.Locale): java.util.List;
                /**
                 * Returns a <code>Locale</code> to be used as a fallback locale for
                 * further resource bundle searches by the
                 * <code>ResourceBundle.getBundle</code> factory method. This method
                 * is called from the factory method every time when no resulting
                 * resource bundle has been found for <code>baseName</code> and
                 * <code>locale</code>, where locale is either the parameter for
                 * <code>ResourceBundle.getBundle</code> or the previous fallback
                 * locale returned by this method.
                 * <p>The method returns <code>null</code> if no further fallback
                 * search is desired.
                 * <p>The default implementation returns the {@linkplain
                 * Locale#getDefault() default <code>Locale</code>} if the given
                 * <code>locale</code> isn't the default one.  Otherwise,
                 * <code>null</code> is returned.
                 */
                // @ts-ignore
                public getFallbackLocale(baseName: string, locale: java.util.Locale): java.util.Locale;
                /**
                 * Instantiates a resource bundle for the given bundle name of the
                 * given format and locale, using the given class loader if
                 * necessary. This method returns <code>null</code> if there is no
                 * resource bundle available for the given parameters. If a resource
                 * bundle can't be instantiated due to an unexpected error, the
                 * error must be reported by throwing an <code>Error</code> or
                 * <code>Exception</code> rather than simply returning
                 * <code>null</code>.
                 * <p>If the <code>reload</code> flag is <code>true</code>, it
                 * indicates that this method is being called because the previously
                 * loaded resource bundle has expired.
                 * <p>The default implementation instantiates a
                 * <code>ResourceBundle</code> as follows.
                 * <ul>
                 * <li>The bundle name is obtained by calling {@link
                 * #toBundleName(String, Locale) toBundleName(baseName,
                 * locale)}.</li>
                 * <li>If <code>format</code> is <code>"java.class"</code>, the
                 * {@link Class} specified by the bundle name is loaded by calling
                 * {@link ClassLoader#loadClass(String)}. Then, a
                 * <code>ResourceBundle</code> is instantiated by calling {@link
                 * Class#newInstance()}.  Note that the <code>reload</code> flag is
                 * ignored for loading class-based resource bundles in this default
                 * implementation.</li>
                 * <li>If <code>format</code> is <code>"java.properties"</code>,
                 * {@link #toResourceName(String, String) toResourceName(bundlename,
                 * "properties")} is called to get the resource name.
                 * If <code>reload</code> is <code>true</code>, {@link
                 * ClassLoader#getResource(String) load.getResource} is called
                 * to get a {@link URL} for creating a {@link
                 * URLConnection}. This <code>URLConnection</code> is used to
                 * {@linkplain URLConnection#setUseCaches(boolean) disable the
                 * caches} of the underlying resource loading layers,
                 * and to {@linkplain URLConnection#getInputStream() get an
                 * <code>InputStream</code>}.
                 * Otherwise, {@link ClassLoader#getResourceAsStream(String)
                 * loader.getResourceAsStream} is called to get an {@link
                 * InputStream}. Then, a {@link
                 * PropertyResourceBundle} is constructed with the
                 * <code>InputStream</code>.</li>
                 * <li>If <code>format</code> is neither <code>"java.class"</code>
                 * nor <code>"java.properties"</code>, an
                 * <code>IllegalArgumentException</code> is thrown.</li>
                 * </ul>
                 */
                // @ts-ignore
                public newBundle(baseName: string, locale: java.util.Locale, format: string, loader: java.lang.ClassLoader, reload: boolean): java.util.ResourceBundle;
                /**
                 * Returns the time-to-live (TTL) value for resource bundles that
                 * are loaded under this
                 * <code>ResourceBundle.Control</code>. Positive time-to-live values
                 * specify the number of milliseconds a bundle can remain in the
                 * cache without being validated against the source data from which
                 * it was constructed. The value 0 indicates that a bundle must be
                 * validated each time it is retrieved from the cache. {@link
                 * #TTL_DONT_CACHE} specifies that loaded resource bundles are not
                 * put in the cache. {@link #TTL_NO_EXPIRATION_CONTROL} specifies
                 * that loaded resource bundles are put in the cache with no
                 * expiration control.
                 * <p>The expiration affects only the bundle loading process by the
                 * <code>ResourceBundle.getBundle</code> factory method.  That is,
                 * if the factory method finds a resource bundle in the cache that
                 * has expired, the factory method calls the {@link
                 * #needsReload(String, Locale, String, ClassLoader, ResourceBundle,
                 * long) needsReload} method to determine whether the resource
                 * bundle needs to be reloaded. If <code>needsReload</code> returns
                 * <code>true</code>, the cached resource bundle instance is removed
                 * from the cache. Otherwise, the instance stays in the cache,
                 * updated with the new TTL value returned by this method.
                 * <p>All cached resource bundles are subject to removal from the
                 * cache due to memory constraints of the runtime environment.
                 * Returning a large positive value doesn't mean to lock loaded
                 * resource bundles in the cache.
                 * <p>The default implementation returns {@link #TTL_NO_EXPIRATION_CONTROL}.
                 */
                // @ts-ignore
                public getTimeToLive(baseName: string, locale: java.util.Locale): number;
                /**
                 * Determines if the expired <code>bundle</code> in the cache needs
                 * to be reloaded based on the loading time given by
                 * <code>loadTime</code> or some other criteria. The method returns
                 * <code>true</code> if reloading is required; <code>false</code>
                 * otherwise. <code>loadTime</code> is a millisecond offset since
                 * the <a href="Calendar.html#Epoch"> <code>Calendar</code>
                 * Epoch</a>.
                 * The calling <code>ResourceBundle.getBundle</code> factory method
                 * calls this method on the <code>ResourceBundle.Control</code>
                 * instance used for its current invocation, not on the instance
                 * used in the invocation that originally loaded the resource
                 * bundle.
                 * <p>The default implementation compares <code>loadTime</code> and
                 * the last modified time of the source data of the resource
                 * bundle. If it's determined that the source data has been modified
                 * since <code>loadTime</code>, <code>true</code> is
                 * returned. Otherwise, <code>false</code> is returned. This
                 * implementation assumes that the given <code>format</code> is the
                 * same string as its file suffix if it's not one of the default
                 * formats, <code>"java.class"</code> or
                 * <code>"java.properties"</code>.
                 */
                // @ts-ignore
                public needsReload(baseName: string, locale: java.util.Locale, format: string, loader: java.lang.ClassLoader, bundle: java.util.ResourceBundle, loadTime: number): boolean;
                /**
                 * Converts the given <code>baseName</code> and <code>locale</code>
                 * to the bundle name. This method is called from the default
                 * implementation of the {@link #newBundle(String, Locale, String,
                 * ClassLoader, boolean) newBundle} and {@link #needsReload(String,
                 * Locale, String, ClassLoader, ResourceBundle, long) needsReload}
                 * methods.
                 * <p>This implementation returns the following value:
                 * <pre>
                 * baseName + "_" + language + "_" + script + "_" + country + "_" + variant
                 * </pre>
                 * where <code>language</code>, <code>script</code>, <code>country</code>,
                 * and <code>variant</code> are the language, script, country, and variant
                 * values of <code>locale</code>, respectively. Final component values that
                 * are empty Strings are omitted along with the preceding '_'.  When the
                 * script is empty, the script value is omitted along with the preceding '_'.
                 * If all of the values are empty strings, then <code>baseName</code>
                 * is returned.
                 * <p>For example, if <code>baseName</code> is
                 * <code>"baseName"</code> and <code>locale</code> is
                 * <code>Locale("ja",&nbsp;"",&nbsp;"XX")</code>, then
                 * <code>"baseName_ja_&thinsp;_XX"</code> is returned. If the given
                 * locale is <code>Locale("en")</code>, then
                 * <code>"baseName_en"</code> is returned.
                 * <p>Overriding this method allows applications to use different
                 * conventions in the organization and packaging of localized
                 * resources.
                 */
                // @ts-ignore
                public toBundleName(baseName: string, locale: java.util.Locale): string;
                /**
                 * Converts the given <code>bundleName</code> to the form required
                 * by the {@link ClassLoader#getResource ClassLoader.getResource}
                 * method by replacing all occurrences of <code>'.'</code> in
                 * <code>bundleName</code> with <code>'/'</code> and appending a
                 * <code>'.'</code> and the given file <code>suffix</code>. For
                 * example, if <code>bundleName</code> is
                 * <code>"foo.bar.MyResources_ja_JP"</code> and <code>suffix</code>
                 * is <code>"properties"</code>, then
                 * <code>"foo/bar/MyResources_ja_JP.properties"</code> is returned.
                 */
                // @ts-ignore
                public toResourceName(bundleName: string, suffix: string): string;
            }
        }
    }
}
