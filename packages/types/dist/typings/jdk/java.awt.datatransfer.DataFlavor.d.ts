// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
             class DataFlavor extends java.lang.Object {
                /**
                 * Constructs a new <code>DataFlavor</code>.  This constructor is
                 * provided only for the purpose of supporting the
                 * <code>Externalizable</code> interface.  It is not
                 * intended for public (client) use.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>DataFlavor</code> that represents a Java class.
                 * <p>
                 * The returned <code>DataFlavor</code> will have the following
                 * characteristics:
                 * <pre>
                 * representationClass = representationClass
                 * mimeType            = application/x-java-serialized-object
                 * </pre>
                 */
                // @ts-ignore
                constructor(representationClass: java.lang.Class, humanPresentableName: string)
                /**
                 * Constructs a <code>DataFlavor</code> that represents a
                 * <code>MimeType</code>.
                 * <p>
                 * The returned <code>DataFlavor</code> will have the following
                 * characteristics:
                 * <p>
                 * If the <code>mimeType</code> is
                 * "application/x-java-serialized-object; class=&lt;representation class&gt;",
                 * the result is the same as calling
                 * <code>new DataFlavor(Class:forName(&lt;representation class&gt;)</code>.
                 * <p>
                 * Otherwise:
                 * <pre>
                 * representationClass = InputStream
                 * mimeType            = mimeType
                 * </pre>
                 */
                // @ts-ignore
                constructor(mimeType: string, humanPresentableName: string)
                /**
                 * Constructs a <code>DataFlavor</code> that represents a
                 * <code>MimeType</code>.
                 * <p>
                 * The returned <code>DataFlavor</code> will have the following
                 * characteristics:
                 * <p>
                 * If the mimeType is
                 * "application/x-java-serialized-object; class=&lt;representation class&gt;",
                 * the result is the same as calling
                 * <code>new DataFlavor(Class:forName(&lt;representation class&gt;)</code>.
                 * <p>
                 * Otherwise:
                 * <pre>
                 * representationClass = InputStream
                 * mimeType            = mimeType
                 * </pre>
                 */
                // @ts-ignore
                constructor(mimeType: string, humanPresentableName: string, classLoader: java.lang.ClassLoader)
                /**
                 * Constructs a <code>DataFlavor</code> from a <code>mimeType</code> string.
                 * The string can specify a "class=&lt;fully specified Java class name&gt;"
                 * parameter to create a <code>DataFlavor</code> with the desired
                 * representation class. If the string does not contain "class=" parameter,
                 * <code>java.io.InputStream</code> is used as default.
                 */
                // @ts-ignore
                constructor(mimeType: string)
                // @ts-ignore
                public static stringFlavor: java.awt.datatransfer.DataFlavor;
                // @ts-ignore
                public static imageFlavor: java.awt.datatransfer.DataFlavor;
                // @ts-ignore
                public static plainTextFlavor: java.awt.datatransfer.DataFlavor;
                // @ts-ignore
                public static javaSerializedObjectMimeType: string;
                // @ts-ignore
                public static javaFileListFlavor: java.awt.datatransfer.DataFlavor;
                // @ts-ignore
                public static javaJVMLocalObjectMimeType: string;
                // @ts-ignore
                public static javaRemoteObjectMimeType: string;
                // @ts-ignore
                public static selectionHtmlFlavor: java.awt.datatransfer.DataFlavor;
                // @ts-ignore
                public static fragmentHtmlFlavor: java.awt.datatransfer.DataFlavor;
                // @ts-ignore
                public static allHtmlFlavor: java.awt.datatransfer.DataFlavor;
                /**
                 * Tries to load a class from: the bootstrap loader, the system loader,
                 * the context loader (if one is present) and finally the loader specified.
                 */
                // @ts-ignore
                protected static tryToLoadClass(className: string, fallback: java.lang.ClassLoader): java.lang.Class;
                /**
                 * String representation of this <code>DataFlavor</code> and its
                 * parameters. The resulting <code>String</code> contains the name of
                 * the <code>DataFlavor</code> class, this flavor's MIME type, and its
                 * representation class. If this flavor has a primary MIME type of "text",
                 * supports the charset parameter, and has an encoded representation, the
                 * flavor's charset is also included. See <code>selectBestTextFlavor</code>
                 * for a list of text flavors which support the charset parameter.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns a <code>DataFlavor</code> representing plain text with Unicode
                 * encoding, where:
                 * <pre>
                 * representationClass = java.io.InputStream
                 * mimeType            = "text/plain;
                 * charset=&lt;platform default Unicode encoding&gt;"
                 * </pre>
                 * Sun's implementation for Microsoft Windows uses the encoding <code>utf-16le</code>.
                 * Sun's implementation for Solaris and Linux uses the encoding
                 * <code>iso-10646-ucs-2</code>.
                 */
                // @ts-ignore
                public static getTextPlainUnicodeFlavor(): java.awt.datatransfer.DataFlavor;
                /**
                 * Selects the best text <code>DataFlavor</code> from an array of <code>
                 * DataFlavor</code>s. Only <code>DataFlavor.stringFlavor</code>, and
                 * equivalent flavors, and flavors that have a primary MIME type of "text",
                 * are considered for selection.
                 * <p>
                 * Flavors are first sorted by their MIME types in the following order:
                 * <ul>
                 * <li>"text/sgml"
                 * <li>"text/xml"
                 * <li>"text/html"
                 * <li>"text/rtf"
                 * <li>"text/enriched"
                 * <li>"text/richtext"
                 * <li>"text/uri-list"
                 * <li>"text/tab-separated-values"
                 * <li>"text/t140"
                 * <li>"text/rfc822-headers"
                 * <li>"text/parityfec"
                 * <li>"text/directory"
                 * <li>"text/css"
                 * <li>"text/calendar"
                 * <li>"application/x-java-serialized-object"
                 * <li>"text/plain"
                 * <li>"text/&lt;other&gt;"
                 * </ul>
                 * <p>For example, "text/sgml" will be selected over
                 * "text/html", and <code>DataFlavor.stringFlavor</code> will be chosen
                 * over <code>DataFlavor.plainTextFlavor</code>.
                 * <p>
                 * If two or more flavors share the best MIME type in the array, then that
                 * MIME type will be checked to see if it supports the charset parameter.
                 * <p>
                 * The following MIME types support, or are treated as though they support,
                 * the charset parameter:
                 * <ul>
                 * <li>"text/sgml"
                 * <li>"text/xml"
                 * <li>"text/html"
                 * <li>"text/enriched"
                 * <li>"text/richtext"
                 * <li>"text/uri-list"
                 * <li>"text/directory"
                 * <li>"text/css"
                 * <li>"text/calendar"
                 * <li>"application/x-java-serialized-object"
                 * <li>"text/plain"
                 * </ul>
                 * The following MIME types do not support, or are treated as though they
                 * do not support, the charset parameter:
                 * <ul>
                 * <li>"text/rtf"
                 * <li>"text/tab-separated-values"
                 * <li>"text/t140"
                 * <li>"text/rfc822-headers"
                 * <li>"text/parityfec"
                 * </ul>
                 * For "text/&lt;other&gt;" MIME types, the first time the JRE needs to
                 * determine whether the MIME type supports the charset parameter, it will
                 * check whether the parameter is explicitly listed in an arbitrarily
                 * chosen <code>DataFlavor</code> which uses that MIME type. If so, the JRE
                 * will assume from that point on that the MIME type supports the charset
                 * parameter and will not check again. If the parameter is not explicitly
                 * listed, the JRE will assume from that point on that the MIME type does
                 * not support the charset parameter and will not check again. Because
                 * this check is performed on an arbitrarily chosen
                 * <code>DataFlavor</code>, developers must ensure that all
                 * <code>DataFlavor</code>s with a "text/&lt;other&gt;" MIME type specify
                 * the charset parameter if it is supported by that MIME type. Developers
                 * should never rely on the JRE to substitute the platform's default
                 * charset for a "text/&lt;other&gt;" DataFlavor. Failure to adhere to this
                 * restriction will lead to undefined behavior.
                 * <p>
                 * If the best MIME type in the array does not support the charset
                 * parameter, the flavors which share that MIME type will then be sorted by
                 * their representation classes in the following order:
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>,
                 * <code>[B</code>, &lt;all others&gt;.
                 * <p>
                 * If two or more flavors share the best representation class, or if no
                 * flavor has one of the three specified representations, then one of those
                 * flavors will be chosen non-deterministically.
                 * <p>
                 * If the best MIME type in the array does support the charset parameter,
                 * the flavors which share that MIME type will then be sorted by their
                 * representation classes in the following order:
                 * <code>java.io.Reader</code>, <code>java.lang.String</code>,
                 * <code>java.nio.CharBuffer</code>, <code>[C</code>, &lt;all others&gt;.
                 * <p>
                 * If two or more flavors share the best representation class, and that
                 * representation is one of the four explicitly listed, then one of those
                 * flavors will be chosen non-deterministically. If, however, no flavor has
                 * one of the four specified representations, the flavors will then be
                 * sorted by their charsets. Unicode charsets, such as "UTF-16", "UTF-8",
                 * "UTF-16BE", "UTF-16LE", and their aliases, are considered best. After
                 * them, the platform default charset and its aliases are selected.
                 * "US-ASCII" and its aliases are worst. All other charsets are chosen in
                 * alphabetical order, but only charsets supported by this implementation
                 * of the Java platform will be considered.
                 * <p>
                 * If two or more flavors share the best charset, the flavors will then
                 * again be sorted by their representation classes in the following order:
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>,
                 * <code>[B</code>, &lt;all others&gt;.
                 * <p>
                 * If two or more flavors share the best representation class, or if no
                 * flavor has one of the three specified representations, then one of those
                 * flavors will be chosen non-deterministically.
                 */
                // @ts-ignore
                public static selectBestTextFlavor(availableFlavors: java.awt.datatransfer.DataFlavor): java.awt.datatransfer.DataFlavor;
                /**
                 * Gets a Reader for a text flavor, decoded, if necessary, for the expected
                 * charset (encoding). The supported representation classes are
                 * <code>java.io.Reader</code>, <code>java.lang.String</code>,
                 * <code>java.nio.CharBuffer</code>, <code>[C</code>,
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>,
                 * and <code>[B</code>.
                 * <p>
                 * Because text flavors which do not support the charset parameter are
                 * encoded in a non-standard format, this method should not be called for
                 * such flavors. However, in order to maintain backward-compatibility,
                 * if this method is called for such a flavor, this method will treat the
                 * flavor as though it supports the charset parameter and attempt to
                 * decode it accordingly. See <code>selectBestTextFlavor</code> for a list
                 * of text flavors which do not support the charset parameter.
                 */
                // @ts-ignore
                public getReaderForText(transferable: java.awt.datatransfer.Transferable): java.io.Reader;
                /**
                 * Returns the MIME type string for this <code>DataFlavor</code>.
                 */
                // @ts-ignore
                public getMimeType(): string;
                /**
                 * Returns the <code>Class</code> which objects supporting this
                 * <code>DataFlavor</code> will return when this <code>DataFlavor</code>
                 * is requested.
                 */
                // @ts-ignore
                public getRepresentationClass(): java.lang.Class;
                /**
                 * Returns the human presentable name for the data format that this
                 * <code>DataFlavor</code> represents.  This name would be localized
                 * for different countries.
                 */
                // @ts-ignore
                public getHumanPresentableName(): string;
                /**
                 * Returns the primary MIME type for this <code>DataFlavor</code>.
                 */
                // @ts-ignore
                public getPrimaryType(): string;
                /**
                 * Returns the sub MIME type of this <code>DataFlavor</code>.
                 */
                // @ts-ignore
                public getSubType(): string;
                /**
                 * Returns the human presentable name for this <code>DataFlavor</code>
                 * if <code>paramName</code> equals "humanPresentableName".  Otherwise
                 * returns the MIME type value associated with <code>paramName</code>.
                 */
                // @ts-ignore
                public getParameter(paramName: string): string;
                /**
                 * Sets the human presentable name for the data format that this
                 * <code>DataFlavor</code> represents. This name would be localized
                 * for different countries.
                 */
                // @ts-ignore
                public setHumanPresentableName(humanPresentableName: string): void;
                /**
                 * {@inheritDoc}
                 * <p>
                 * The equals comparison for the {@code DataFlavor} class is implemented
                 * as follows: Two <code>DataFlavor</code>s are considered equal if and
                 * only if their MIME primary type and subtype and representation class are
                 * equal. Additionally, if the primary type is "text", the subtype denotes
                 * a text flavor which supports the charset parameter, and the
                 * representation class is not <code>java.io.Reader</code>,
                 * <code>java.lang.String</code>, <code>java.nio.CharBuffer</code>, or
                 * <code>[C</code>, the <code>charset</code> parameter must also be equal.
                 * If a charset is not explicitly specified for one or both
                 * <code>DataFlavor</code>s, the platform default encoding is assumed. See
                 * <code>selectBestTextFlavor</code> for a list of text flavors which
                 * support the charset parameter.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * This method has the same behavior as {@link #equals(Object)}.
                 * The only difference being that it takes a {@code DataFlavor} instance
                 * as a parameter.
                 */
                // @ts-ignore
                public equals(that: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * Compares only the <code>mimeType</code> against the passed in
                 * <code>String</code> and <code>representationClass</code> is
                 * not considered in the comparison.
                 * If <code>representationClass</code> needs to be compared, then
                 * <code>equals(new DataFlavor(s))</code> may be used.
                 */
                // @ts-ignore
                public equals(s: string): boolean;
                /**
                 * Returns hash code for this <code>DataFlavor</code>.
                 * For two equal <code>DataFlavor</code>s, hash codes are equal.
                 * For the <code>String</code>
                 * that matches <code>DataFlavor.equals(String)</code>, it is not
                 * guaranteed that <code>DataFlavor</code>'s hash code is equal
                 * to the hash code of the <code>String</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Identical to {@link #equals(DataFlavor)}.
                 */
                // @ts-ignore
                public match(that: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * Returns whether the string representation of the MIME type passed in
                 * is equivalent to the MIME type of this <code>DataFlavor</code>.
                 * Parameters are not included in the comparison.
                 */
                // @ts-ignore
                public isMimeTypeEqual(mimeType: string): boolean;
                /**
                 * Compares the <code>mimeType</code> of two <code>DataFlavor</code>
                 * objects. No parameters are considered.
                 */
                // @ts-ignore
                public isMimeTypeEqual(dataFlavor: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * Does the <code>DataFlavor</code> represent a serialized object?
                 */
                // @ts-ignore
                public isMimeTypeSerializedObject(): boolean;
                // @ts-ignore
                public getDefaultRepresentationClass(): java.lang.Class;
                // @ts-ignore
                public getDefaultRepresentationClassAsString(): string;
                /**
                 * Does the <code>DataFlavor</code> represent a
                 * <code>java.io.InputStream</code>?
                 */
                // @ts-ignore
                public isRepresentationClassInputStream(): boolean;
                /**
                 * Returns whether the representation class for this
                 * <code>DataFlavor</code> is <code>java.io.Reader</code> or a subclass
                 * thereof.
                 */
                // @ts-ignore
                public isRepresentationClassReader(): boolean;
                /**
                 * Returns whether the representation class for this
                 * <code>DataFlavor</code> is <code>java.nio.CharBuffer</code> or a
                 * subclass thereof.
                 */
                // @ts-ignore
                public isRepresentationClassCharBuffer(): boolean;
                /**
                 * Returns whether the representation class for this
                 * <code>DataFlavor</code> is <code>java.nio.ByteBuffer</code> or a
                 * subclass thereof.
                 */
                // @ts-ignore
                public isRepresentationClassByteBuffer(): boolean;
                /**
                 * Returns true if the representation class can be serialized.
                 */
                // @ts-ignore
                public isRepresentationClassSerializable(): boolean;
                /**
                 * Returns true if the representation class is <code>Remote</code>.
                 */
                // @ts-ignore
                public isRepresentationClassRemote(): boolean;
                /**
                 * Returns true if the <code>DataFlavor</code> specified represents
                 * a serialized object.
                 */
                // @ts-ignore
                public isFlavorSerializedObjectType(): boolean;
                /**
                 * Returns true if the <code>DataFlavor</code> specified represents
                 * a remote object.
                 */
                // @ts-ignore
                public isFlavorRemoteObjectType(): boolean;
                /**
                 * Returns true if the <code>DataFlavor</code> specified represents
                 * a list of file objects.
                 */
                // @ts-ignore
                public isFlavorJavaFileListType(): boolean;
                /**
                 * Returns whether this <code>DataFlavor</code> is a valid text flavor for
                 * this implementation of the Java platform. Only flavors equivalent to
                 * <code>DataFlavor.stringFlavor</code> and <code>DataFlavor</code>s with
                 * a primary MIME type of "text" can be valid text flavors.
                 * <p>
                 * If this flavor supports the charset parameter, it must be equivalent to
                 * <code>DataFlavor.stringFlavor</code>, or its representation must be
                 * <code>java.io.Reader</code>, <code>java.lang.String</code>,
                 * <code>java.nio.CharBuffer</code>, <code>[C</code>,
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>, or
                 * <code>[B</code>. If the representation is
                 * <code>java.io.InputStream</code>, <code>java.nio.ByteBuffer</code>, or
                 * <code>[B</code>, then this flavor's <code>charset</code> parameter must
                 * be supported by this implementation of the Java platform. If a charset
                 * is not specified, then the platform default charset, which is always
                 * supported, is assumed.
                 * <p>
                 * If this flavor does not support the charset parameter, its
                 * representation must be <code>java.io.InputStream</code>,
                 * <code>java.nio.ByteBuffer</code>, or <code>[B</code>.
                 * <p>
                 * See <code>selectBestTextFlavor</code> for a list of text flavors which
                 * support the charset parameter.
                 */
                // @ts-ignore
                public isFlavorTextType(): boolean;
                /**
                 * Serializes this <code>DataFlavor</code>.
                 */
                // @ts-ignore
                public writeExternal(os: java.io.ObjectOutput): void;
                /**
                 * Restores this <code>DataFlavor</code> from a Serialized state.
                 */
                // @ts-ignore
                public readExternal(is: java.io.ObjectInput): void;
                /**
                 * Returns a clone of this <code>DataFlavor</code>.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Called on <code>DataFlavor</code> for every MIME Type parameter
                 * to allow <code>DataFlavor</code> subclasses to handle special
                 * parameters like the text/plain <code>charset</code>
                 * parameters, whose values are case insensitive.  (MIME type parameter
                 * values are supposed to be case sensitive.
                 * <p>
                 * This method is called for each parameter name/value pair and should
                 * return the normalized representation of the <code>parameterValue</code>.
                 * This method is never invoked by this implementation from 1.1 onwards.
                 */
                // @ts-ignore
                protected normalizeMimeTypeParameter(parameterName: string, parameterValue: string): string;
                /**
                 * Called for each MIME type string to give <code>DataFlavor</code> subtypes
                 * the opportunity to change how the normalization of MIME types is
                 * accomplished.  One possible use would be to add default
                 * parameter/value pairs in cases where none are present in the MIME
                 * type string passed in.
                 * This method is never invoked by this implementation from 1.1 onwards.
                 */
                // @ts-ignore
                protected normalizeMimeType(mimeType: string): string;
            }
        }
    }
}
