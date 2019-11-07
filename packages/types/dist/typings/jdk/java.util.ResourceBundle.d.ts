declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class ResourceBundle extends java.lang.Object {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected parent: java.util.ResourceBundle;
            /**
             * Returns the base name of this bundle, if known, or {@code null} if unknown.
             * If not null, then this is the value of the {@code baseName} parameter
             * that was passed to the {@code ResourceBundle.getBundle(...)} method
             * when the resource bundle was loaded.
             */
            // @ts-ignore
            public getBaseBundleName(): string;
            /**
             * Gets a string for the given key from this resource bundle or one of its parents.
             * Calling this method is equivalent to calling
             * <blockquote>
             * <code>(String) {@link #getObject(java.lang.String) getObject}(key)</code>.
             * </blockquote>
             */
            // @ts-ignore
            public getString(key: string): string;
            /**
             * Gets a string array for the given key from this resource bundle or one of its parents.
             * Calling this method is equivalent to calling
             * <blockquote>
             * <code>(String[]) {@link #getObject(java.lang.String) getObject}(key)</code>.
             * </blockquote>
             */
            // @ts-ignore
            public getStringArray(key: string): java.lang.String[];
            /**
             * Gets an object for the given key from this resource bundle or one of its parents.
             * This method first tries to obtain the object from this resource bundle using
             * {@link #handleGetObject(java.lang.String) handleGetObject}.
             * If not successful, and the parent resource bundle is not null,
             * it calls the parent's <code>getObject</code> method.
             * If still not successful, it throws a MissingResourceException.
             */
            // @ts-ignore
            public getObject(key: string): java.lang.Object;
            /**
             * Returns the locale of this resource bundle. This method can be used after a
             * call to getBundle() to determine whether the resource bundle returned really
             * corresponds to the requested locale or is a fallback.
             */
            // @ts-ignore
            public getLocale(): java.util.Locale;
            /**
             * Sets the parent bundle of this bundle.
             * The parent bundle is searched by {@link #getObject getObject}
             * when this bundle does not contain a particular resource.
             */
            // @ts-ignore
            protected setParent(parent: java.util.ResourceBundle): void;
            /**
             * Gets a resource bundle using the specified base name, the default locale,
             * and the caller's class loader. Calling this method is equivalent to calling
             * <blockquote>
             * <code>getBundle(baseName, Locale.getDefault(), this.getClass().getClassLoader())</code>,
             * </blockquote>
             * except that <code>getClassLoader()</code> is run with the security
             * privileges of <code>ResourceBundle</code>.
             * See {@link #getBundle(String, Locale, ClassLoader) getBundle}
             * for a complete description of the search and instantiation strategy.
             */
            // @ts-ignore
            public static getBundle(baseName: string): java.util.ResourceBundle;
            /**
             * Returns a resource bundle using the specified base name, the
             * default locale and the specified control. Calling this method
             * is equivalent to calling
             * <pre>
             * getBundle(baseName, Locale.getDefault(),
             * this.getClass().getClassLoader(), control),
             * </pre>
             * except that <code>getClassLoader()</code> is run with the security
             * privileges of <code>ResourceBundle</code>.  See {@link
             * #getBundle(String, Locale, ClassLoader, Control) getBundle} for the
             * complete description of the resource bundle loading process with a
             * <code>ResourceBundle.Control</code>.
             */
            // @ts-ignore
            public static getBundle(baseName: string, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
            /**
             * Gets a resource bundle using the specified base name and locale,
             * and the caller's class loader. Calling this method is equivalent to calling
             * <blockquote>
             * <code>getBundle(baseName, locale, this.getClass().getClassLoader())</code>,
             * </blockquote>
             * except that <code>getClassLoader()</code> is run with the security
             * privileges of <code>ResourceBundle</code>.
             * See {@link #getBundle(String, Locale, ClassLoader) getBundle}
             * for a complete description of the search and instantiation strategy.
             */
            // @ts-ignore
            public static getBundle(baseName: string, locale: java.util.Locale): java.util.ResourceBundle;
            /**
             * Returns a resource bundle using the specified base name, target
             * locale and control, and the caller's class loader. Calling this
             * method is equivalent to calling
             * <pre>
             * getBundle(baseName, targetLocale, this.getClass().getClassLoader(),
             * control),
             * </pre>
             * except that <code>getClassLoader()</code> is run with the security
             * privileges of <code>ResourceBundle</code>.  See {@link
             * #getBundle(String, Locale, ClassLoader, Control) getBundle} for the
             * complete description of the resource bundle loading process with a
             * <code>ResourceBundle.Control</code>.
             */
            // @ts-ignore
            public static getBundle(baseName: string, targetLocale: java.util.Locale, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
            /**
             * Gets a resource bundle using the specified base name, locale, and class
             * loader.
             * <p>This method behaves the same as calling
             * {@link #getBundle(String, Locale, ClassLoader, Control)} passing a
             * default instance of {@link Control} unless another {@link Control} is
             * provided with the {@link ResourceBundleControlProvider} SPI. Refer to the
             * description of <a href="#modify_default_behavior">modifying the default
             * behavior</a>.
             * <p><a name="default_behavior">The following describes the default
             * behavior</a>.
             * <p><code>getBundle</code> uses the base name, the specified locale, and
             * the default locale (obtained from {@link java.util.Locale#getDefault()
             * Locale.getDefault}) to generate a sequence of <a
             * name="candidates"><em>candidate bundle names</em></a>.  If the specified
             * locale's language, script, country, and variant are all empty strings,
             * then the base name is the only candidate bundle name.  Otherwise, a list
             * of candidate locales is generated from the attribute values of the
             * specified locale (language, script, country and variant) and appended to
             * the base name.  Typically, this will look like the following:
             * <pre>
             * baseName + "_" + language + "_" + script + "_" + country + "_" + variant
             * baseName + "_" + language + "_" + script + "_" + country
             * baseName + "_" + language + "_" + script
             * baseName + "_" + language + "_" + country + "_" + variant
             * baseName + "_" + language + "_" + country
             * baseName + "_" + language
             * </pre>
             * <p>Candidate bundle names where the final component is an empty string
             * are omitted, along with the underscore.  For example, if country is an
             * empty string, the second and the fifth candidate bundle names above
             * would be omitted.  Also, if script is an empty string, the candidate names
             * including script are omitted.  For example, a locale with language "de"
             * and variant "JAVA" will produce candidate names with base name
             * "MyResource" below.
             * <pre>
             * MyResource_de__JAVA
             * MyResource_de
             * </pre>
             * In the case that the variant contains one or more underscores ('_'), a
             * sequence of bundle names generated by truncating the last underscore and
             * the part following it is inserted after a candidate bundle name with the
             * original variant.  For example, for a locale with language "en", script
             * "Latn, country "US" and variant "WINDOWS_VISTA", and bundle base name
             * "MyResource", the list of candidate bundle names below is generated:
             * <pre>
             * MyResource_en_Latn_US_WINDOWS_VISTA
             * MyResource_en_Latn_US_WINDOWS
             * MyResource_en_Latn_US
             * MyResource_en_Latn
             * MyResource_en_US_WINDOWS_VISTA
             * MyResource_en_US_WINDOWS
             * MyResource_en_US
             * MyResource_en
             * </pre>
             * <blockquote><b>Note:</b> For some <code>Locale</code>s, the list of
             * candidate bundle names contains extra names, or the order of bundle names
             * is slightly modified.  See the description of the default implementation
             * of {@link Control#getCandidateLocales(String, Locale)
             * getCandidateLocales} for details.</blockquote>
             * <p><code>getBundle</code> then iterates over the candidate bundle names
             * to find the first one for which it can <em>instantiate</em> an actual
             * resource bundle. It uses the default controls' {@link Control#getFormats
             * getFormats} method, which generates two bundle names for each generated
             * name, the first a class name and the second a properties file name. For
             * each candidate bundle name, it attempts to create a resource bundle:
             * <ul><li>First, it attempts to load a class using the generated class name.
             * If such a class can be found and loaded using the specified class
             * loader, is assignment compatible with ResourceBundle, is accessible from
             * ResourceBundle, and can be instantiated, <code>getBundle</code> creates a
             * new instance of this class and uses it as the <em>result resource
             * bundle</em>.
             * <li>Otherwise, <code>getBundle</code> attempts to locate a property
             * resource file using the generated properties file name.  It generates a
             * path name from the candidate bundle name by replacing all "." characters
             * with "/" and appending the string ".properties".  It attempts to find a
             * "resource" with this name using {@link
             * java.lang.ClassLoader#getResource(java.lang.String)
             * ClassLoader.getResource}.  (Note that a "resource" in the sense of
             * <code>getResource</code> has nothing to do with the contents of a
             * resource bundle, it is just a container of data, such as a file.)  If it
             * finds a "resource", it attempts to create a new {@link
             * PropertyResourceBundle} instance from its contents.  If successful, this
             * instance becomes the <em>result resource bundle</em>.  </ul>
             * <p>This continues until a result resource bundle is instantiated or the
             * list of candidate bundle names is exhausted.  If no matching resource
             * bundle is found, the default control's {@link Control#getFallbackLocale
             * getFallbackLocale} method is called, which returns the current default
             * locale.  A new sequence of candidate locale names is generated using this
             * locale and and searched again, as above.
             * <p>If still no result bundle is found, the base name alone is looked up. If
             * this still fails, a <code>MissingResourceException</code> is thrown.
             * <p><a name="parent_chain"> Once a result resource bundle has been found,
             * its <em>parent chain</em> is instantiated</a>.  If the result bundle already
             * has a parent (perhaps because it was returned from a cache) the chain is
             * complete.
             * <p>Otherwise, <code>getBundle</code> examines the remainder of the
             * candidate locale list that was used during the pass that generated the
             * result resource bundle.  (As before, candidate bundle names where the
             * final component is an empty string are omitted.)  When it comes to the
             * end of the candidate list, it tries the plain bundle name.  With each of the
             * candidate bundle names it attempts to instantiate a resource bundle (first
             * looking for a class and then a properties file, as described above).
             * <p>Whenever it succeeds, it calls the previously instantiated resource
             * bundle's {@link #setParent(java.util.ResourceBundle) setParent} method
             * with the new resource bundle.  This continues until the list of names
             * is exhausted or the current bundle already has a non-null parent.
             * <p>Once the parent chain is complete, the bundle is returned.
             * <p><b>Note:</b> <code>getBundle</code> caches instantiated resource
             * bundles and might return the same resource bundle instance multiple times.
             * <p><b>Note:</b>The <code>baseName</code> argument should be a fully
             * qualified class name. However, for compatibility with earlier versions,
             * Sun's Java SE Runtime Environments do not verify this, and so it is
             * possible to access <code>PropertyResourceBundle</code>s by specifying a
             * path name (using "/") instead of a fully qualified class name (using
             * ".").
             * <p><a name="default_behavior_example">
             * <strong>Example:</strong></a>
             * <p>
             * The following class and property files are provided:
             * <pre>
             * MyResources.class
             * MyResources.properties
             * MyResources_fr.properties
             * MyResources_fr_CH.class
             * MyResources_fr_CH.properties
             * MyResources_en.properties
             * MyResources_es_ES.class
             * </pre>
             * The contents of all files are valid (that is, public non-abstract
             * subclasses of <code>ResourceBundle</code> for the ".class" files,
             * syntactically correct ".properties" files).  The default locale is
             * <code>Locale("en", "GB")</code>.
             * <p>Calling <code>getBundle</code> with the locale arguments below will
             * instantiate resource bundles as follows:
             * <table summary="getBundle() locale to resource bundle mapping">
             * <tr><td>Locale("fr", "CH")</td><td>MyResources_fr_CH.class, parent MyResources_fr.properties, parent MyResources.class</td></tr>
             * <tr><td>Locale("fr", "FR")</td><td>MyResources_fr.properties, parent MyResources.class</td></tr>
             * <tr><td>Locale("de", "DE")</td><td>MyResources_en.properties, parent MyResources.class</td></tr>
             * <tr><td>Locale("en", "US")</td><td>MyResources_en.properties, parent MyResources.class</td></tr>
             * <tr><td>Locale("es", "ES")</td><td>MyResources_es_ES.class, parent MyResources.class</td></tr>
             * </table>
             * <p>The file MyResources_fr_CH.properties is never used because it is
             * hidden by the MyResources_fr_CH.class. Likewise, MyResources.properties
             * is also hidden by MyResources.class.
             */
            // @ts-ignore
            public static getBundle(baseName: string, locale: java.util.Locale, loader: java.lang.ClassLoader): java.util.ResourceBundle;
            /**
             * Returns a resource bundle using the specified base name, target
             * locale, class loader and control. Unlike the {@linkplain
             * #getBundle(String, Locale, ClassLoader) <code>getBundle</code>
             * factory methods with no <code>control</code> argument}, the given
             * <code>control</code> specifies how to locate and instantiate resource
             * bundles. Conceptually, the bundle loading process with the given
             * <code>control</code> is performed in the following steps.
             * <ol>
             * <li>This factory method looks up the resource bundle in the cache for
             * the specified <code>baseName</code>, <code>targetLocale</code> and
             * <code>loader</code>.  If the requested resource bundle instance is
             * found in the cache and the time-to-live periods of the instance and
             * all of its parent instances have not expired, the instance is returned
             * to the caller. Otherwise, this factory method proceeds with the
             * loading process below.</li>
             * <li>The {@link ResourceBundle.Control#getFormats(String)
             * control.getFormats} method is called to get resource bundle formats
             * to produce bundle or resource names. The strings
             * <code>"java.class"</code> and <code>"java.properties"</code>
             * designate class-based and {@linkplain PropertyResourceBundle
             * property}-based resource bundles, respectively. Other strings
             * starting with <code>"java."</code> are reserved for future extensions
             * and must not be used for application-defined formats. Other strings
             * designate application-defined formats.</li>
             * <li>The {@link ResourceBundle.Control#getCandidateLocales(String,
             * Locale) control.getCandidateLocales} method is called with the target
             * locale to get a list of <em>candidate <code>Locale</code>s</em> for
             * which resource bundles are searched.</li>
             * <li>The {@link ResourceBundle.Control#newBundle(String, Locale,
             * String, ClassLoader, boolean) control.newBundle} method is called to
             * instantiate a <code>ResourceBundle</code> for the base bundle name, a
             * candidate locale, and a format. (Refer to the note on the cache
             * lookup below.) This step is iterated over all combinations of the
             * candidate locales and formats until the <code>newBundle</code> method
             * returns a <code>ResourceBundle</code> instance or the iteration has
             * used up all the combinations. For example, if the candidate locales
             * are <code>Locale("de", "DE")</code>, <code>Locale("de")</code> and
             * <code>Locale("")</code> and the formats are <code>"java.class"</code>
             * and <code>"java.properties"</code>, then the following is the
             * sequence of locale-format combinations to be used to call
             * <code>control.newBundle</code>.
             * <table style="width: 50%; text-align: left; margin-left: 40px;"
             * border="0" cellpadding="2" cellspacing="2" summary="locale-format combinations for newBundle">
             * <tbody>
             * <tr>
             * <td
             * style="vertical-align: top; text-align: left; font-weight: bold; width: 50%;"><code>Locale</code><br>
             * </td>
             * <td
             * style="vertical-align: top; text-align: left; font-weight: bold; width: 50%;"><code>format</code><br>
             * </td>
             * </tr>
             * <tr>
             * <td style="vertical-align: top; width: 50%;"><code>Locale("de", "DE")</code><br>
             * </td>
             * <td style="vertical-align: top; width: 50%;"><code>java.class</code><br>
             * </td>
             * </tr>
             * <tr>
             * <td style="vertical-align: top; width: 50%;"><code>Locale("de", "DE")</code></td>
             * <td style="vertical-align: top; width: 50%;"><code>java.properties</code><br>
             * </td>
             * </tr>
             * <tr>
             * <td style="vertical-align: top; width: 50%;"><code>Locale("de")</code></td>
             * <td style="vertical-align: top; width: 50%;"><code>java.class</code></td>
             * </tr>
             * <tr>
             * <td style="vertical-align: top; width: 50%;"><code>Locale("de")</code></td>
             * <td style="vertical-align: top; width: 50%;"><code>java.properties</code></td>
             * </tr>
             * <tr>
             * <td style="vertical-align: top; width: 50%;"><code>Locale("")</code><br>
             * </td>
             * <td style="vertical-align: top; width: 50%;"><code>java.class</code></td>
             * </tr>
             * <tr>
             * <td style="vertical-align: top; width: 50%;"><code>Locale("")</code></td>
             * <td style="vertical-align: top; width: 50%;"><code>java.properties</code></td>
             * </tr>
             * </tbody>
             * </table>
             * </li>
             * <li>If the previous step has found no resource bundle, proceed to
             * Step 6. If a bundle has been found that is a base bundle (a bundle
             * for <code>Locale("")</code>), and the candidate locale list only contained
             * <code>Locale("")</code>, return the bundle to the caller. If a bundle
             * has been found that is a base bundle, but the candidate locale list
             * contained locales other than Locale(""), put the bundle on hold and
             * proceed to Step 6. If a bundle has been found that is not a base
             * bundle, proceed to Step 7.</li>
             * <li>The {@link ResourceBundle.Control#getFallbackLocale(String,
             * Locale) control.getFallbackLocale} method is called to get a fallback
             * locale (alternative to the current target locale) to try further
             * finding a resource bundle. If the method returns a non-null locale,
             * it becomes the next target locale and the loading process starts over
             * from Step 3. Otherwise, if a base bundle was found and put on hold in
             * a previous Step 5, it is returned to the caller now. Otherwise, a
             * MissingResourceException is thrown.</li>
             * <li>At this point, we have found a resource bundle that's not the
             * base bundle. If this bundle set its parent during its instantiation,
             * it is returned to the caller. Otherwise, its <a
             * href="./ResourceBundle.html#parent_chain">parent chain</a> is
             * instantiated based on the list of candidate locales from which it was
             * found. Finally, the bundle is returned to the caller.</li>
             * </ol>
             * <p>During the resource bundle loading process above, this factory
             * method looks up the cache before calling the {@link
             * Control#newBundle(String, Locale, String, ClassLoader, boolean)
             * control.newBundle} method.  If the time-to-live period of the
             * resource bundle found in the cache has expired, the factory method
             * calls the {@link ResourceBundle.Control#needsReload(String, Locale,
             * String, ClassLoader, ResourceBundle, long) control.needsReload}
             * method to determine whether the resource bundle needs to be reloaded.
             * If reloading is required, the factory method calls
             * <code>control.newBundle</code> to reload the resource bundle.  If
             * <code>control.newBundle</code> returns <code>null</code>, the factory
             * method puts a dummy resource bundle in the cache as a mark of
             * nonexistent resource bundles in order to avoid lookup overhead for
             * subsequent requests. Such dummy resource bundles are under the same
             * expiration control as specified by <code>control</code>.
             * <p>All resource bundles loaded are cached by default. Refer to
             * {@link Control#getTimeToLive(String,Locale)
             * control.getTimeToLive} for details.
             * <p>The following is an example of the bundle loading process with the
             * default <code>ResourceBundle.Control</code> implementation.
             * <p>Conditions:
             * <ul>
             * <li>Base bundle name: <code>foo.bar.Messages</code>
             * <li>Requested <code>Locale</code>: {@link Locale#ITALY}</li>
             * <li>Default <code>Locale</code>: {@link Locale#FRENCH}</li>
             * <li>Available resource bundles:
             * <code>foo/bar/Messages_fr.properties</code> and
             * <code>foo/bar/Messages.properties</code></li>
             * </ul>
             * <p>First, <code>getBundle</code> tries loading a resource bundle in
             * the following sequence.
             * <ul>
             * <li>class <code>foo.bar.Messages_it_IT</code>
             * <li>file <code>foo/bar/Messages_it_IT.properties</code>
             * <li>class <code>foo.bar.Messages_it</code></li>
             * <li>file <code>foo/bar/Messages_it.properties</code></li>
             * <li>class <code>foo.bar.Messages</code></li>
             * <li>file <code>foo/bar/Messages.properties</code></li>
             * </ul>
             * <p>At this point, <code>getBundle</code> finds
             * <code>foo/bar/Messages.properties</code>, which is put on hold
             * because it's the base bundle.  <code>getBundle</code> calls {@link
             * Control#getFallbackLocale(String, Locale)
             * control.getFallbackLocale("foo.bar.Messages", Locale.ITALY)} which
             * returns <code>Locale.FRENCH</code>. Next, <code>getBundle</code>
             * tries loading a bundle in the following sequence.
             * <ul>
             * <li>class <code>foo.bar.Messages_fr</code></li>
             * <li>file <code>foo/bar/Messages_fr.properties</code></li>
             * <li>class <code>foo.bar.Messages</code></li>
             * <li>file <code>foo/bar/Messages.properties</code></li>
             * </ul>
             * <p><code>getBundle</code> finds
             * <code>foo/bar/Messages_fr.properties</code> and creates a
             * <code>ResourceBundle</code> instance. Then, <code>getBundle</code>
             * sets up its parent chain from the list of the candidate locales.  Only
             * <code>foo/bar/Messages.properties</code> is found in the list and
             * <code>getBundle</code> creates a <code>ResourceBundle</code> instance
             * that becomes the parent of the instance for
             * <code>foo/bar/Messages_fr.properties</code>.
             */
            // @ts-ignore
            public static getBundle(baseName: string, targetLocale: java.util.Locale, loader: java.lang.ClassLoader, control: java.util.ResourceBundle.Control): java.util.ResourceBundle;
            /**
             * Removes all resource bundles from the cache that have been loaded
             * using the caller's class loader.
             */
            // @ts-ignore
            public static clearCache(): void;
            /**
             * Removes all resource bundles from the cache that have been loaded
             * using the given class loader.
             */
            // @ts-ignore
            public static clearCache(loader: java.lang.ClassLoader): void;
            /**
             * Gets an object for the given key from this resource bundle.
             * Returns null if this resource bundle does not contain an
             * object for the given key.
             */
            // @ts-ignore
            protected abstract handleGetObject(key: string): java.lang.Object;
            /**
             * Returns an enumeration of the keys.
             */
            // @ts-ignore
            public abstract getKeys(): java.util.Enumeration;
            /**
             * Determines whether the given <code>key</code> is contained in
             * this <code>ResourceBundle</code> or its parent bundles.
             */
            // @ts-ignore
            public containsKey(key: string): boolean;
            /**
             * Returns a <code>Set</code> of all keys contained in this
             * <code>ResourceBundle</code> and its parent bundles.
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            /**
             * Returns a <code>Set</code> of the keys contained <em>only</em>
             * in this <code>ResourceBundle</code>.
             * <p>The default implementation returns a <code>Set</code> of the
             * keys returned by the {@link #getKeys() getKeys} method except
             * for the ones for which the {@link #handleGetObject(String)
             * handleGetObject} method returns <code>null</code>. Once the
             * <code>Set</code> has been created, the value is kept in this
             * <code>ResourceBundle</code> in order to avoid producing the
             * same <code>Set</code> in subsequent calls. Subclasses can
             * override this method for faster handling.
             */
            // @ts-ignore
            protected handleKeySet(): java.util.Set;
        }
    }
}
