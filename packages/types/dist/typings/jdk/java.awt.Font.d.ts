declare namespace java {
    namespace awt {
        // @ts-ignore
         class Font extends java.lang.Object {
            /**
             * Creates a new <code>Font</code> from the specified name, style and
             * point size.
             * <p>
             * The font name can be a font face name or a font family name.
             * It is used together with the style to find an appropriate font face.
             * When a font family name is specified, the style argument is used to
             * select the most appropriate face from the family. When a font face
             * name is specified, the face's style and the style argument are
             * merged to locate the best matching font from the same family.
             * For example if face name "Arial Bold" is specified with style
             * <code>Font.ITALIC</code>, the font system looks for a face in the
             * "Arial" family that is bold and italic, and may associate the font
             * instance with the physical font face "Arial Bold Italic".
             * The style argument is merged with the specified face's style, not
             * added or subtracted.
             * This means, specifying a bold face and a bold style does not
             * double-embolden the font, and specifying a bold face and a plain
             * style does not lighten the font.
             * <p>
             * If no face for the requested style can be found, the font system
             * may apply algorithmic styling to achieve the desired style.
             * For example, if <code>ITALIC</code> is requested, but no italic
             * face is available, glyphs from the plain face may be algorithmically
             * obliqued (slanted).
             * <p>
             * Font name lookup is case insensitive, using the case folding
             * rules of the US locale.
             * <p>
             * If the <code>name</code> parameter represents something other than a
             * logical font, i.e. is interpreted as a physical font face or family, and
             * this cannot be mapped by the implementation to a physical font or a
             * compatible alternative, then the font system will map the Font
             * instance to "Dialog", such that for example, the family as reported
             * by {@link #getFamily() getFamily} will be "Dialog".
             * <p>
             */
            // @ts-ignore
            constructor(name: string, style: number, size: number)
            /**
             * Creates a new <code>Font</code> with the specified attributes.
             * Only keys defined in {@link java.awt.font.TextAttribute TextAttribute}
             * are recognized.  In addition the FONT attribute is
             * not recognized by this constructor
             * (see {@link #getAvailableAttributes}). Only attributes that have
             * values of valid types will affect the new <code>Font</code>.
             * <p>
             * If <code>attributes</code> is <code>null</code>, a new
             * <code>Font</code> is initialized with default values.
             */
            // @ts-ignore
            constructor(attributes: java.util.Map)
            /**
             * Creates a new <code>Font</code> from the specified <code>font</code>.
             * This constructor is intended for use by subclasses.
             */
            // @ts-ignore
            constructor(font: java.awt.Font)
            // @ts-ignore
            public static DIALOG: string;
            // @ts-ignore
            public static DIALOG_INPUT: string;
            // @ts-ignore
            public static SANS_SERIF: string;
            // @ts-ignore
            public static SERIF: string;
            // @ts-ignore
            public static MONOSPACED: string;
            // @ts-ignore
            public static PLAIN: number;
            // @ts-ignore
            public static BOLD: number;
            // @ts-ignore
            public static ITALIC: number;
            // @ts-ignore
            public static ROMAN_BASELINE: number;
            // @ts-ignore
            public static CENTER_BASELINE: number;
            // @ts-ignore
            public static HANGING_BASELINE: number;
            // @ts-ignore
            public static TRUETYPE_FONT: number;
            // @ts-ignore
            public static TYPE1_FONT: number;
            // @ts-ignore
            protected name: string;
            // @ts-ignore
            protected style: number;
            // @ts-ignore
            protected size: number;
            // @ts-ignore
            protected pointSize: number;
            // @ts-ignore
            public static LAYOUT_LEFT_TO_RIGHT: number;
            // @ts-ignore
            public static LAYOUT_RIGHT_TO_LEFT: number;
            // @ts-ignore
            public static LAYOUT_NO_START_CONTEXT: number;
            // @ts-ignore
            public static LAYOUT_NO_LIMIT_CONTEXT: number;
            /**
             * Gets the peer of this <code>Font</code>.
             */
            // @ts-ignore
            public getPeer(): java.awt.peer.FontPeer;
            /**
             * Returns a <code>Font</code> appropriate to the attributes.
             * If <code>attributes</code>contains a <code>FONT</code> attribute
             * with a valid <code>Font</code> as its value, it will be
             * merged with any remaining attributes.  See
             * {@link java.awt.font.TextAttribute#FONT} for more
             * information.
             */
            // @ts-ignore
            public static getFont(attributes: java.util.Map): java.awt.Font;
            /**
             * Returns a new <code>Font</code> using the specified font type
             * and input data.  The new <code>Font</code> is
             * created with a point size of 1 and style {@link #PLAIN PLAIN}.
             * This base font can then be used with the <code>deriveFont</code>
             * methods in this class to derive new <code>Font</code> objects with
             * varying sizes, styles, transforms and font features.  This
             * method does not close the {@link InputStream}.
             * <p>
             * To make the <code>Font</code> available to Font constructors the
             * returned <code>Font</code> must be registered in the
             * <code>GraphicsEnviroment</code> by calling
             * {@link GraphicsEnvironment#registerFont(Font) registerFont(Font)}.
             */
            // @ts-ignore
            public static createFont(fontFormat: number, fontStream: java.io.InputStream): java.awt.Font;
            /**
             * Returns a new <code>Font</code> using the specified font type
             * and the specified font file.  The new <code>Font</code> is
             * created with a point size of 1 and style {@link #PLAIN PLAIN}.
             * This base font can then be used with the <code>deriveFont</code>
             * methods in this class to derive new <code>Font</code> objects with
             * varying sizes, styles, transforms and font features.
             */
            // @ts-ignore
            public static createFont(fontFormat: number, fontFile: java.io.File): java.awt.Font;
            /**
             * Returns a copy of the transform associated with this
             * <code>Font</code>.  This transform is not necessarily the one
             * used to construct the font.  If the font has algorithmic
             * superscripting or width adjustment, this will be incorporated
             * into the returned <code>AffineTransform</code>.
             * <p>
             * Typically, fonts will not be transformed.  Clients generally
             * should call {@link #isTransformed} first, and only call this
             * method if <code>isTransformed</code> returns true.
             */
            // @ts-ignore
            public getTransform(): java.awt.geom.AffineTransform;
            /**
             * Returns the family name of this <code>Font</code>.
             * <p>The family name of a font is font specific. Two fonts such as
             * Helvetica Italic and Helvetica Bold have the same family name,
             * <i>Helvetica</i>, whereas their font face names are
             * <i>Helvetica Bold</i> and <i>Helvetica Italic</i>. The list of
             * available family names may be obtained by using the
             * {@link GraphicsEnvironment#getAvailableFontFamilyNames()} method.
             * <p>Use <code>getName</code> to get the logical name of the font.
             * Use <code>getFontName</code> to get the font face name of the font.
             */
            // @ts-ignore
            public getFamily(): string;
            /**
             * Returns the family name of this <code>Font</code>, localized for
             * the specified locale.
             * <p>The family name of a font is font specific. Two fonts such as
             * Helvetica Italic and Helvetica Bold have the same family name,
             * <i>Helvetica</i>, whereas their font face names are
             * <i>Helvetica Bold</i> and <i>Helvetica Italic</i>. The list of
             * available family names may be obtained by using the
             * {@link GraphicsEnvironment#getAvailableFontFamilyNames()} method.
             * <p>Use <code>getFontName</code> to get the font face name of the font.
             */
            // @ts-ignore
            public getFamily(l: java.util.Locale): string;
            /**
             * Returns the postscript name of this <code>Font</code>.
             * Use <code>getFamily</code> to get the family name of the font.
             * Use <code>getFontName</code> to get the font face name of the font.
             */
            // @ts-ignore
            public getPSName(): string;
            /**
             * Returns the logical name of this <code>Font</code>.
             * Use <code>getFamily</code> to get the family name of the font.
             * Use <code>getFontName</code> to get the font face name of the font.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns the font face name of this <code>Font</code>.  For example,
             * Helvetica Bold could be returned as a font face name.
             * Use <code>getFamily</code> to get the family name of the font.
             * Use <code>getName</code> to get the logical name of the font.
             */
            // @ts-ignore
            public getFontName(): string;
            /**
             * Returns the font face name of the <code>Font</code>, localized
             * for the specified locale. For example, Helvetica Fett could be
             * returned as the font face name.
             * Use <code>getFamily</code> to get the family name of the font.
             */
            // @ts-ignore
            public getFontName(l: java.util.Locale): string;
            /**
             * Returns the style of this <code>Font</code>.  The style can be
             * PLAIN, BOLD, ITALIC, or BOLD+ITALIC.
             */
            // @ts-ignore
            public getStyle(): number;
            /**
             * Returns the point size of this <code>Font</code>, rounded to
             * an integer.
             * Most users are familiar with the idea of using <i>point size</i> to
             * specify the size of glyphs in a font. This point size defines a
             * measurement between the baseline of one line to the baseline of the
             * following line in a single spaced text document. The point size is
             * based on <i>typographic points</i>, approximately 1/72 of an inch.
             * <p>
             * The Java(tm)2D API adopts the convention that one point is
             * equivalent to one unit in user coordinates.  When using a
             * normalized transform for converting user space coordinates to
             * device space coordinates 72 user
             * space units equal 1 inch in device space.  In this case one point
             * is 1/72 of an inch.
             */
            // @ts-ignore
            public getSize(): number;
            /**
             * Returns the point size of this <code>Font</code> in
             * <code>float</code> value.
             */
            // @ts-ignore
            public getSize2D(): number;
            /**
             * Indicates whether or not this <code>Font</code> object's style is
             * PLAIN.
             */
            // @ts-ignore
            public isPlain(): boolean;
            /**
             * Indicates whether or not this <code>Font</code> object's style is
             * BOLD.
             */
            // @ts-ignore
            public isBold(): boolean;
            /**
             * Indicates whether or not this <code>Font</code> object's style is
             * ITALIC.
             */
            // @ts-ignore
            public isItalic(): boolean;
            /**
             * Indicates whether or not this <code>Font</code> object has a
             * transform that affects its size in addition to the Size
             * attribute.
             */
            // @ts-ignore
            public isTransformed(): boolean;
            /**
             * Return true if this Font contains attributes that require extra
             * layout processing.
             */
            // @ts-ignore
            public hasLayoutAttributes(): boolean;
            /**
             * Returns a <code>Font</code> object from the system properties list.
             * <code>nm</code> is treated as the name of a system property to be
             * obtained.  The <code>String</code> value of this property is then
             * interpreted as a <code>Font</code> object according to the
             * specification of <code>Font.decode(String)</code>
             * If the specified property is not found, or the executing code does
             * not have permission to read the property, null is returned instead.
             */
            // @ts-ignore
            public static getFont(nm: string): java.awt.Font;
            /**
             * Returns the <code>Font</code> that the <code>str</code>
             * argument describes.
             * To ensure that this method returns the desired Font,
             * format the <code>str</code> parameter in
             * one of these ways
             * <ul>
             * <li><em>fontname-style-pointsize</em>
             * <li><em>fontname-pointsize</em>
             * <li><em>fontname-style</em>
             * <li><em>fontname</em>
             * <li><em>fontname style pointsize</em>
             * <li><em>fontname pointsize</em>
             * <li><em>fontname style</em>
             * <li><em>fontname</em>
             * </ul>
             * in which <i>style</i> is one of the four
             * case-insensitive strings:
             * <code>"PLAIN"</code>, <code>"BOLD"</code>, <code>"BOLDITALIC"</code>, or
             * <code>"ITALIC"</code>, and pointsize is a positive decimal integer
             * representation of the point size.
             * For example, if you want a font that is Arial, bold, with
             * a point size of 18, you would call this method with:
             * "Arial-BOLD-18".
             * This is equivalent to calling the Font constructor :
             * <code>new Font("Arial", Font.BOLD, 18);</code>
             * and the values are interpreted as specified by that constructor.
             * <p>
             * A valid trailing decimal field is always interpreted as the pointsize.
             * Therefore a fontname containing a trailing decimal value should not
             * be used in the fontname only form.
             * <p>
             * If a style name field is not one of the valid style strings, it is
             * interpreted as part of the font name, and the default style is used.
             * <p>
             * Only one of ' ' or '-' may be used to separate fields in the input.
             * The identified separator is the one closest to the end of the string
             * which separates a valid pointsize, or a valid style name from
             * the rest of the string.
             * Null (empty) pointsize and style fields are treated
             * as valid fields with the default value for that field.
             * <p>
             * Some font names may include the separator characters ' ' or '-'.
             * If <code>str</code> is not formed with 3 components, e.g. such that
             * <code>style</code> or <code>pointsize</code> fields are not present in
             * <code>str</code>, and <code>fontname</code> also contains a
             * character determined to be the separator character
             * then these characters where they appear as intended to be part of
             * <code>fontname</code> may instead be interpreted as separators
             * so the font name may not be properly recognised.
             * <p>
             * The default size is 12 and the default style is PLAIN.
             * If <code>str</code> does not specify a valid size, the returned
             * <code>Font</code> has a size of 12.  If <code>str</code> does not
             * specify a valid style, the returned Font has a style of PLAIN.
             * If you do not specify a valid font name in
             * the <code>str</code> argument, this method will return
             * a font with the family name "Dialog".
             * To determine what font family names are available on
             * your system, use the
             * {@link GraphicsEnvironment#getAvailableFontFamilyNames()} method.
             * If <code>str</code> is <code>null</code>, a new <code>Font</code>
             * is returned with the family name "Dialog", a size of 12 and a
             * PLAIN style.
             */
            // @ts-ignore
            public static decode(str: string): java.awt.Font;
            /**
             * Gets the specified <code>Font</code> from the system properties
             * list.  As in the <code>getProperty</code> method of
             * <code>System</code>, the first
             * argument is treated as the name of a system property to be
             * obtained.  The <code>String</code> value of this property is then
             * interpreted as a <code>Font</code> object.
             * <p>
             * The property value should be one of the forms accepted by
             * <code>Font.decode(String)</code>
             * If the specified property is not found, or the executing code does not
             * have permission to read the property, the <code>font</code>
             * argument is returned instead.
             */
            // @ts-ignore
            public static getFont(nm: string, font: java.awt.Font): java.awt.Font;
            /**
             * Returns a hashcode for this <code>Font</code>.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares this <code>Font</code> object to the specified
             * <code>Object</code>.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Converts this <code>Font</code> object to a <code>String</code>
             * representation.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns the number of glyphs in this <code>Font</code>. Glyph codes
             * for this <code>Font</code> range from 0 to
             * <code>getNumGlyphs()</code> - 1.
             */
            // @ts-ignore
            public getNumGlyphs(): number;
            /**
             * Returns the glyphCode which is used when this <code>Font</code>
             * does not have a glyph for a specified unicode code point.
             */
            // @ts-ignore
            public getMissingGlyphCode(): number;
            /**
             * Returns the baseline appropriate for displaying this character.
             * <p>
             * Large fonts can support different writing systems, and each system can
             * use a different baseline.
             * The character argument determines the writing system to use. Clients
             * should not assume all characters use the same baseline.
             */
            // @ts-ignore
            public getBaselineFor(c: string): number;
            /**
             * Returns a map of font attributes available in this
             * <code>Font</code>.  Attributes include things like ligatures and
             * glyph substitution.
             */
            // @ts-ignore
            public getAttributes(): java.util.Map;
            /**
             * Returns the keys of all the attributes supported by this
             * <code>Font</code>.  These attributes can be used to derive other
             * fonts.
             */
            // @ts-ignore
            public getAvailableAttributes(): java.text.AttributedCharacterIterator.Attribute[];
            /**
             * Creates a new <code>Font</code> object by replicating this
             * <code>Font</code> object and applying a new style and size.
             */
            // @ts-ignore
            public deriveFont(style: number, size: number): java.awt.Font;
            /**
             * Creates a new <code>Font</code> object by replicating this
             * <code>Font</code> object and applying a new style and transform.
             */
            // @ts-ignore
            public deriveFont(style: number, trans: java.awt.geom.AffineTransform): java.awt.Font;
            /**
             * Creates a new <code>Font</code> object by replicating the current
             * <code>Font</code> object and applying a new size to it.
             */
            // @ts-ignore
            public deriveFont(size: number): java.awt.Font;
            /**
             * Creates a new <code>Font</code> object by replicating the current
             * <code>Font</code> object and applying a new transform to it.
             */
            // @ts-ignore
            public deriveFont(trans: java.awt.geom.AffineTransform): java.awt.Font;
            /**
             * Creates a new <code>Font</code> object by replicating the current
             * <code>Font</code> object and applying a new style to it.
             */
            // @ts-ignore
            public deriveFont(style: number): java.awt.Font;
            /**
             * Creates a new <code>Font</code> object by replicating the current
             * <code>Font</code> object and applying a new set of font attributes
             * to it.
             */
            // @ts-ignore
            public deriveFont(attributes: java.util.Map): java.awt.Font;
            /**
             * Checks if this <code>Font</code> has a glyph for the specified
             * character.
             * <p> <b>Note:</b> This method cannot handle <a
             * href="../../java/lang/Character.html#supplementary"> supplementary
             * characters</a>. To support all Unicode characters, including
             * supplementary characters, use the {@link #canDisplay(int)}
             * method or <code>canDisplayUpTo</code> methods.
             */
            // @ts-ignore
            public canDisplay(c: string): boolean;
            /**
             * Checks if this <code>Font</code> has a glyph for the specified
             * character.
             */
            // @ts-ignore
            public canDisplay(codePoint: number): boolean;
            /**
             * Indicates whether or not this <code>Font</code> can display a
             * specified <code>String</code>.  For strings with Unicode encoding,
             * it is important to know if a particular font can display the
             * string. This method returns an offset into the <code>String</code>
             * <code>str</code> which is the first character this
             * <code>Font</code> cannot display without using the missing glyph
             * code. If the <code>Font</code> can display all characters, -1 is
             * returned.
             */
            // @ts-ignore
            public canDisplayUpTo(str: string): number;
            /**
             * Indicates whether or not this <code>Font</code> can display
             * the characters in the specified <code>text</code>
             * starting at <code>start</code> and ending at
             * <code>limit</code>.  This method is a convenience overload.
             */
            // @ts-ignore
            public canDisplayUpTo(text: string, start: number, limit: number): number;
            /**
             * Indicates whether or not this <code>Font</code> can display the
             * text specified by the <code>iter</code> starting at
             * <code>start</code> and ending at <code>limit</code>.
             */
            // @ts-ignore
            public canDisplayUpTo(iter: java.text.CharacterIterator, start: number, limit: number): number;
            /**
             * Returns the italic angle of this <code>Font</code>.  The italic angle
             * is the inverse slope of the caret which best matches the posture of this
             * <code>Font</code>.
             */
            // @ts-ignore
            public getItalicAngle(): number;
            /**
             * Checks whether or not this <code>Font</code> has uniform
             * line metrics.  A logical <code>Font</code> might be a
             * composite font, which means that it is composed of different
             * physical fonts to cover different code ranges.  Each of these
             * fonts might have different <code>LineMetrics</code>.  If the
             * logical <code>Font</code> is a single
             * font then the metrics would be uniform.
             */
            // @ts-ignore
            public hasUniformLineMetrics(): boolean;
            /**
             * Returns a {@link LineMetrics} object created with the specified
             * <code>String</code> and {@link FontRenderContext}.
             */
            // @ts-ignore
            public getLineMetrics(str: string, frc: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
            /**
             * Returns a <code>LineMetrics</code> object created with the
             * specified arguments.
             */
            // @ts-ignore
            public getLineMetrics(str: string, beginIndex: number, limit: number, frc: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
            /**
             * Returns a <code>LineMetrics</code> object created with the
             * specified arguments.
             */
            // @ts-ignore
            public getLineMetrics(chars: string, beginIndex: number, limit: number, frc: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
            /**
             * Returns a <code>LineMetrics</code> object created with the
             * specified arguments.
             */
            // @ts-ignore
            public getLineMetrics(ci: java.text.CharacterIterator, beginIndex: number, limit: number, frc: java.awt.font.FontRenderContext): java.awt.font.LineMetrics;
            /**
             * Returns the logical bounds of the specified <code>String</code> in
             * the specified <code>FontRenderContext</code>.  The logical bounds
             * contains the origin, ascent, advance, and height, which includes
             * the leading.  The logical bounds does not always enclose all the
             * text.  For example, in some languages and in some fonts, accent
             * marks can be positioned above the ascent or below the descent.
             * To obtain a visual bounding box, which encloses all the text,
             * use the {@link TextLayout#getBounds() getBounds} method of
             * <code>TextLayout</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.Font class notes}).
             */
            // @ts-ignore
            public getStringBounds(str: string, frc: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
            /**
             * Returns the logical bounds of the specified <code>String</code> in
             * the specified <code>FontRenderContext</code>.  The logical bounds
             * contains the origin, ascent, advance, and height, which includes
             * the leading.  The logical bounds does not always enclose all the
             * text.  For example, in some languages and in some fonts, accent
             * marks can be positioned above the ascent or below the descent.
             * To obtain a visual bounding box, which encloses all the text,
             * use the {@link TextLayout#getBounds() getBounds} method of
             * <code>TextLayout</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.Font class notes}).
             */
            // @ts-ignore
            public getStringBounds(str: string, beginIndex: number, limit: number, frc: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
            /**
             * Returns the logical bounds of the specified array of characters
             * in the specified <code>FontRenderContext</code>.  The logical
             * bounds contains the origin, ascent, advance, and height, which
             * includes the leading.  The logical bounds does not always enclose
             * all the text.  For example, in some languages and in some fonts,
             * accent marks can be positioned above the ascent or below the
             * descent.  To obtain a visual bounding box, which encloses all the
             * text, use the {@link TextLayout#getBounds() getBounds} method of
             * <code>TextLayout</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.Font class notes}).
             */
            // @ts-ignore
            public getStringBounds(chars: string, beginIndex: number, limit: number, frc: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
            /**
             * Returns the logical bounds of the characters indexed in the
             * specified {@link CharacterIterator} in the
             * specified <code>FontRenderContext</code>.  The logical bounds
             * contains the origin, ascent, advance, and height, which includes
             * the leading.  The logical bounds does not always enclose all the
             * text.  For example, in some languages and in some fonts, accent
             * marks can be positioned above the ascent or below the descent.
             * To obtain a visual bounding box, which encloses all the text,
             * use the {@link TextLayout#getBounds() getBounds} method of
             * <code>TextLayout</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.Font class notes}).
             */
            // @ts-ignore
            public getStringBounds(ci: java.text.CharacterIterator, beginIndex: number, limit: number, frc: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
            /**
             * Returns the bounds for the character with the maximum
             * bounds as defined in the specified <code>FontRenderContext</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.Font class notes}).
             */
            // @ts-ignore
            public getMaxCharBounds(frc: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D;
            /**
             * Creates a {@link java.awt.font.GlyphVector GlyphVector} by
             * mapping characters to glyphs one-to-one based on the
             * Unicode cmap in this <code>Font</code>.  This method does no other
             * processing besides the mapping of glyphs to characters.  This
             * means that this method is not useful for some scripts, such
             * as Arabic, Hebrew, Thai, and Indic, that require reordering,
             * shaping, or ligature substitution.
             */
            // @ts-ignore
            public createGlyphVector(frc: java.awt.font.FontRenderContext, str: string): java.awt.font.GlyphVector;
            /**
             * Creates a {@link java.awt.font.GlyphVector GlyphVector} by
             * mapping characters to glyphs one-to-one based on the
             * Unicode cmap in this <code>Font</code>.  This method does no other
             * processing besides the mapping of glyphs to characters.  This
             * means that this method is not useful for some scripts, such
             * as Arabic, Hebrew, Thai, and Indic, that require reordering,
             * shaping, or ligature substitution.
             */
            // @ts-ignore
            public createGlyphVector(frc: java.awt.font.FontRenderContext, chars: string): java.awt.font.GlyphVector;
            /**
             * Creates a {@link java.awt.font.GlyphVector GlyphVector} by
             * mapping the specified characters to glyphs one-to-one based on the
             * Unicode cmap in this <code>Font</code>.  This method does no other
             * processing besides the mapping of glyphs to characters.  This
             * means that this method is not useful for some scripts, such
             * as Arabic, Hebrew, Thai, and Indic, that require reordering,
             * shaping, or ligature substitution.
             */
            // @ts-ignore
            public createGlyphVector(frc: java.awt.font.FontRenderContext, ci: java.text.CharacterIterator): java.awt.font.GlyphVector;
            /**
             * Creates a {@link java.awt.font.GlyphVector GlyphVector} by
             * mapping characters to glyphs one-to-one based on the
             * Unicode cmap in this <code>Font</code>.  This method does no other
             * processing besides the mapping of glyphs to characters.  This
             * means that this method is not useful for some scripts, such
             * as Arabic, Hebrew, Thai, and Indic, that require reordering,
             * shaping, or ligature substitution.
             */
            // @ts-ignore
            public createGlyphVector(frc: java.awt.font.FontRenderContext, glyphCodes: number): java.awt.font.GlyphVector;
            /**
             * Returns a new <code>GlyphVector</code> object, performing full
             * layout of the text if possible.  Full layout is required for
             * complex text, such as Arabic or Hindi.  Support for different
             * scripts depends on the font and implementation.
             * <p>
             * Layout requires bidi analysis, as performed by
             * <code>Bidi</code>, and should only be performed on text that
             * has a uniform direction.  The direction is indicated in the
             * flags parameter,by using LAYOUT_RIGHT_TO_LEFT to indicate a
             * right-to-left (Arabic and Hebrew) run direction, or
             * LAYOUT_LEFT_TO_RIGHT to indicate a left-to-right (English)
             * run direction.
             * <p>
             * In addition, some operations, such as Arabic shaping, require
             * context, so that the characters at the start and limit can have
             * the proper shapes.  Sometimes the data in the buffer outside
             * the provided range does not have valid data.  The values
             * LAYOUT_NO_START_CONTEXT and LAYOUT_NO_LIMIT_CONTEXT can be
             * added to the flags parameter to indicate that the text before
             * start, or after limit, respectively, should not be examined
             * for context.
             * <p>
             * All other values for the flags parameter are reserved.
             */
            // @ts-ignore
            public layoutGlyphVector(frc: java.awt.font.FontRenderContext, text: string, start: number, limit: number, flags: number): java.awt.font.GlyphVector;
        }
    }
}
