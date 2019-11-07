// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Character extends java.lang.Object {
            /**
             * Constructs a newly allocated {@code Character} object that
             * represents the specified {@code char} value.
             */
            // @ts-ignore
            constructor(value: string)
            // @ts-ignore
            public static MIN_RADIX: number;
            // @ts-ignore
            public static MAX_RADIX: number;
            // @ts-ignore
            public static MIN_VALUE: string;
            // @ts-ignore
            public static MAX_VALUE: string;
            // @ts-ignore
            public static TYPE: java.lang.Class;
            // @ts-ignore
            public static UNASSIGNED: number;
            // @ts-ignore
            public static UPPERCASE_LETTER: number;
            // @ts-ignore
            public static LOWERCASE_LETTER: number;
            // @ts-ignore
            public static TITLECASE_LETTER: number;
            // @ts-ignore
            public static MODIFIER_LETTER: number;
            // @ts-ignore
            public static OTHER_LETTER: number;
            // @ts-ignore
            public static NON_SPACING_MARK: number;
            // @ts-ignore
            public static ENCLOSING_MARK: number;
            // @ts-ignore
            public static COMBINING_SPACING_MARK: number;
            // @ts-ignore
            public static DECIMAL_DIGIT_NUMBER: number;
            // @ts-ignore
            public static LETTER_NUMBER: number;
            // @ts-ignore
            public static OTHER_NUMBER: number;
            // @ts-ignore
            public static SPACE_SEPARATOR: number;
            // @ts-ignore
            public static LINE_SEPARATOR: number;
            // @ts-ignore
            public static PARAGRAPH_SEPARATOR: number;
            // @ts-ignore
            public static CONTROL: number;
            // @ts-ignore
            public static FORMAT: number;
            // @ts-ignore
            public static PRIVATE_USE: number;
            // @ts-ignore
            public static SURROGATE: number;
            // @ts-ignore
            public static DASH_PUNCTUATION: number;
            // @ts-ignore
            public static START_PUNCTUATION: number;
            // @ts-ignore
            public static END_PUNCTUATION: number;
            // @ts-ignore
            public static CONNECTOR_PUNCTUATION: number;
            // @ts-ignore
            public static OTHER_PUNCTUATION: number;
            // @ts-ignore
            public static MATH_SYMBOL: number;
            // @ts-ignore
            public static CURRENCY_SYMBOL: number;
            // @ts-ignore
            public static MODIFIER_SYMBOL: number;
            // @ts-ignore
            public static OTHER_SYMBOL: number;
            // @ts-ignore
            public static INITIAL_QUOTE_PUNCTUATION: number;
            // @ts-ignore
            public static FINAL_QUOTE_PUNCTUATION: number;
            // @ts-ignore
            public static DIRECTIONALITY_UNDEFINED: number;
            // @ts-ignore
            public static DIRECTIONALITY_LEFT_TO_RIGHT: number;
            // @ts-ignore
            public static DIRECTIONALITY_RIGHT_TO_LEFT: number;
            // @ts-ignore
            public static DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC: number;
            // @ts-ignore
            public static DIRECTIONALITY_EUROPEAN_NUMBER: number;
            // @ts-ignore
            public static DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR: number;
            // @ts-ignore
            public static DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR: number;
            // @ts-ignore
            public static DIRECTIONALITY_ARABIC_NUMBER: number;
            // @ts-ignore
            public static DIRECTIONALITY_COMMON_NUMBER_SEPARATOR: number;
            // @ts-ignore
            public static DIRECTIONALITY_NONSPACING_MARK: number;
            // @ts-ignore
            public static DIRECTIONALITY_BOUNDARY_NEUTRAL: number;
            // @ts-ignore
            public static DIRECTIONALITY_PARAGRAPH_SEPARATOR: number;
            // @ts-ignore
            public static DIRECTIONALITY_SEGMENT_SEPARATOR: number;
            // @ts-ignore
            public static DIRECTIONALITY_WHITESPACE: number;
            // @ts-ignore
            public static DIRECTIONALITY_OTHER_NEUTRALS: number;
            // @ts-ignore
            public static DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING: number;
            // @ts-ignore
            public static DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE: number;
            // @ts-ignore
            public static DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING: number;
            // @ts-ignore
            public static DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE: number;
            // @ts-ignore
            public static DIRECTIONALITY_POP_DIRECTIONAL_FORMAT: number;
            // @ts-ignore
            public static MIN_HIGH_SURROGATE: string;
            // @ts-ignore
            public static MAX_HIGH_SURROGATE: string;
            // @ts-ignore
            public static MIN_LOW_SURROGATE: string;
            // @ts-ignore
            public static MAX_LOW_SURROGATE: string;
            // @ts-ignore
            public static MIN_SURROGATE: string;
            // @ts-ignore
            public static MAX_SURROGATE: string;
            // @ts-ignore
            public static MIN_SUPPLEMENTARY_CODE_POINT: number;
            // @ts-ignore
            public static MIN_CODE_POINT: number;
            // @ts-ignore
            public static MAX_CODE_POINT: number;
            // @ts-ignore
            public static SIZE: number;
            // @ts-ignore
            public static BYTES: number;
            /**
             * Returns a <tt>Character</tt> instance representing the specified
             * <tt>char</tt> value.
             * If a new <tt>Character</tt> instance is not required, this method
             * should generally be used in preference to the constructor
             * {@link #Character(char)}, as this method is likely to yield
             * significantly better space and time performance by caching
             * frequently requested values.
             * This method will always cache values in the range {@code
             * '\u0000'} to {@code '\u007F'}, inclusive, and may
             * cache other values outside of this range.
             */
            // @ts-ignore
            public static valueOf(c: string): java.lang.Character;
            /**
             * Returns the value of this {@code Character} object.
             */
            // @ts-ignore
            public charValue(): string;
            /**
             * Returns a hash code for this {@code Character}; equal to the result
             * of invoking {@code charValue()}.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a hash code for a {@code char} value; compatible with
             * {@code Character.hashCode()}.
             */
            // @ts-ignore
            public static hashCode(value: string): number;
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is not
             * {@code null} and is a {@code Character} object that
             * represents the same {@code char} value as this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a {@code String} object representing this
             * {@code Character}'s value.  The result is a string of
             * length 1 whose sole component is the primitive
             * {@code char} value represented by this
             * {@code Character} object.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a {@code String} object representing the
             * specified {@code char}.  The result is a string of length
             * 1 consisting solely of the specified {@code char}.
             */
            // @ts-ignore
            public static toString(c: string): string;
            /**
             * Determines whether the specified code point is a valid
             * <a href="http://www.unicode.org/glossary/#code_point">
             * Unicode code point value</a>.
             */
            // @ts-ignore
            public static isValidCodePoint(codePoint: number): boolean;
            /**
             * Determines whether the specified character (Unicode code point)
             * is in the <a href="#BMP">Basic Multilingual Plane (BMP)</a>.
             * Such code points can be represented using a single {@code char}.
             */
            // @ts-ignore
            public static isBmpCodePoint(codePoint: number): boolean;
            /**
             * Determines whether the specified character (Unicode code point)
             * is in the <a href="#supplementary">supplementary character</a> range.
             */
            // @ts-ignore
            public static isSupplementaryCodePoint(codePoint: number): boolean;
            /**
             * Determines if the given {@code char} value is a
             * <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">
             * Unicode high-surrogate code unit</a>
             * (also known as <i>leading-surrogate code unit</i>).
             * <p>Such values do not represent characters by themselves,
             * but are used in the representation of
             * <a href="#supplementary">supplementary characters</a>
             * in the UTF-16 encoding.
             */
            // @ts-ignore
            public static isHighSurrogate(ch: string): boolean;
            /**
             * Determines if the given {@code char} value is a
             * <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">
             * Unicode low-surrogate code unit</a>
             * (also known as <i>trailing-surrogate code unit</i>).
             * <p>Such values do not represent characters by themselves,
             * but are used in the representation of
             * <a href="#supplementary">supplementary characters</a>
             * in the UTF-16 encoding.
             */
            // @ts-ignore
            public static isLowSurrogate(ch: string): boolean;
            /**
             * Determines if the given {@code char} value is a Unicode
             * <i>surrogate code unit</i>.
             * <p>Such values do not represent characters by themselves,
             * but are used in the representation of
             * <a href="#supplementary">supplementary characters</a>
             * in the UTF-16 encoding.
             * <p>A char value is a surrogate code unit if and only if it is either
             * a {@linkplain #isLowSurrogate(char) low-surrogate code unit} or
             * a {@linkplain #isHighSurrogate(char) high-surrogate code unit}.
             */
            // @ts-ignore
            public static isSurrogate(ch: string): boolean;
            /**
             * Determines whether the specified pair of {@code char}
             * values is a valid
             * <a href="http://www.unicode.org/glossary/#surrogate_pair">
             * Unicode surrogate pair</a>.
             * <p>This method is equivalent to the expression:
             * <blockquote><pre>{@code
             * isHighSurrogate(high) && isLowSurrogate(low)
             * }</pre></blockquote>
             */
            // @ts-ignore
            public static isSurrogatePair(high: string, low: string): boolean;
            /**
             * Determines the number of {@code char} values needed to
             * represent the specified character (Unicode code point). If the
             * specified character is equal to or greater than 0x10000, then
             * the method returns 2. Otherwise, the method returns 1.
             * <p>This method doesn't validate the specified character to be a
             * valid Unicode code point. The caller must validate the
             * character value using {@link #isValidCodePoint(int) isValidCodePoint}
             * if necessary.
             */
            // @ts-ignore
            public static charCount(codePoint: number): number;
            /**
             * Converts the specified surrogate pair to its supplementary code
             * point value. This method does not validate the specified
             * surrogate pair. The caller must validate it using {@link
             * #isSurrogatePair(char, char) isSurrogatePair} if necessary.
             */
            // @ts-ignore
            public static toCodePoint(high: string, low: string): number;
            /**
             * Returns the code point at the given index of the
             * {@code CharSequence}. If the {@code char} value at
             * the given index in the {@code CharSequence} is in the
             * high-surrogate range, the following index is less than the
             * length of the {@code CharSequence}, and the
             * {@code char} value at the following index is in the
             * low-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at the given index is returned.
             */
            // @ts-ignore
            public static codePointAt(seq: java.lang.CharSequence, index: number): number;
            /**
             * Returns the code point at the given index of the
             * {@code char} array. If the {@code char} value at
             * the given index in the {@code char} array is in the
             * high-surrogate range, the following index is less than the
             * length of the {@code char} array, and the
             * {@code char} value at the following index is in the
             * low-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at the given index is returned.
             */
            // @ts-ignore
            public static codePointAt(a: string, index: number): number;
            /**
             * Returns the code point at the given index of the
             * {@code char} array, where only array elements with
             * {@code index} less than {@code limit} can be used. If
             * the {@code char} value at the given index in the
             * {@code char} array is in the high-surrogate range, the
             * following index is less than the {@code limit}, and the
             * {@code char} value at the following index is in the
             * low-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at the given index is returned.
             */
            // @ts-ignore
            public static codePointAt(a: string, index: number, limit: number): number;
            /**
             * Returns the code point preceding the given index of the
             * {@code CharSequence}. If the {@code char} value at
             * {@code (index - 1)} in the {@code CharSequence} is in
             * the low-surrogate range, {@code (index - 2)} is not
             * negative, and the {@code char} value at {@code (index - 2)}
             * in the {@code CharSequence} is in the
             * high-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at {@code (index - 1)} is
             * returned.
             */
            // @ts-ignore
            public static codePointBefore(seq: java.lang.CharSequence, index: number): number;
            /**
             * Returns the code point preceding the given index of the
             * {@code char} array. If the {@code char} value at
             * {@code (index - 1)} in the {@code char} array is in
             * the low-surrogate range, {@code (index - 2)} is not
             * negative, and the {@code char} value at {@code (index - 2)}
             * in the {@code char} array is in the
             * high-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at {@code (index - 1)} is
             * returned.
             */
            // @ts-ignore
            public static codePointBefore(a: string, index: number): number;
            /**
             * Returns the code point preceding the given index of the
             * {@code char} array, where only array elements with
             * {@code index} greater than or equal to {@code start}
             * can be used. If the {@code char} value at {@code (index - 1)}
             * in the {@code char} array is in the
             * low-surrogate range, {@code (index - 2)} is not less than
             * {@code start}, and the {@code char} value at
             * {@code (index - 2)} in the {@code char} array is in
             * the high-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at {@code (index - 1)} is
             * returned.
             */
            // @ts-ignore
            public static codePointBefore(a: string, index: number, start: number): number;
            /**
             * Returns the leading surrogate (a
             * <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">
             * high surrogate code unit</a>) of the
             * <a href="http://www.unicode.org/glossary/#surrogate_pair">
             * surrogate pair</a>
             * representing the specified supplementary character (Unicode
             * code point) in the UTF-16 encoding.  If the specified character
             * is not a
             * <a href="Character.html#supplementary">supplementary character</a>,
             * an unspecified {@code char} is returned.
             * <p>If
             * {@link #isSupplementaryCodePoint isSupplementaryCodePoint(x)}
             * is {@code true}, then
             * {@link #isHighSurrogate isHighSurrogate}{@code (highSurrogate(x))} and
             * {@link #toCodePoint toCodePoint}{@code (highSurrogate(x), }{@link #lowSurrogate lowSurrogate}{@code (x)) == x}
             * are also always {@code true}.
             */
            // @ts-ignore
            public static highSurrogate(codePoint: number): string;
            /**
             * Returns the trailing surrogate (a
             * <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">
             * low surrogate code unit</a>) of the
             * <a href="http://www.unicode.org/glossary/#surrogate_pair">
             * surrogate pair</a>
             * representing the specified supplementary character (Unicode
             * code point) in the UTF-16 encoding.  If the specified character
             * is not a
             * <a href="Character.html#supplementary">supplementary character</a>,
             * an unspecified {@code char} is returned.
             * <p>If
             * {@link #isSupplementaryCodePoint isSupplementaryCodePoint(x)}
             * is {@code true}, then
             * {@link #isLowSurrogate isLowSurrogate}{@code (lowSurrogate(x))} and
             * {@link #toCodePoint toCodePoint}{@code (}{@link #highSurrogate highSurrogate}{@code (x), lowSurrogate(x)) == x}
             * are also always {@code true}.
             */
            // @ts-ignore
            public static lowSurrogate(codePoint: number): string;
            /**
             * Converts the specified character (Unicode code point) to its
             * UTF-16 representation. If the specified code point is a BMP
             * (Basic Multilingual Plane or Plane 0) value, the same value is
             * stored in {@code dst[dstIndex]}, and 1 is returned. If the
             * specified code point is a supplementary character, its
             * surrogate values are stored in {@code dst[dstIndex]}
             * (high-surrogate) and {@code dst[dstIndex+1]}
             * (low-surrogate), and 2 is returned.
             */
            // @ts-ignore
            public static toChars(codePoint: number, dst: string, dstIndex: number): number;
            /**
             * Converts the specified character (Unicode code point) to its
             * UTF-16 representation stored in a {@code char} array. If
             * the specified code point is a BMP (Basic Multilingual Plane or
             * Plane 0) value, the resulting {@code char} array has
             * the same value as {@code codePoint}. If the specified code
             * point is a supplementary code point, the resulting
             * {@code char} array has the corresponding surrogate pair.
             */
            // @ts-ignore
            public static toChars(codePoint: number): string[];
            /**
             * Returns the number of Unicode code points in the text range of
             * the specified char sequence. The text range begins at the
             * specified {@code beginIndex} and extends to the
             * {@code char} at index {@code endIndex - 1}. Thus the
             * length (in {@code char}s) of the text range is
             * {@code endIndex-beginIndex}. Unpaired surrogates within
             * the text range count as one code point each.
             */
            // @ts-ignore
            public static codePointCount(seq: java.lang.CharSequence, beginIndex: number, endIndex: number): number;
            /**
             * Returns the number of Unicode code points in a subarray of the
             * {@code char} array argument. The {@code offset}
             * argument is the index of the first {@code char} of the
             * subarray and the {@code count} argument specifies the
             * length of the subarray in {@code char}s. Unpaired
             * surrogates within the subarray count as one code point each.
             */
            // @ts-ignore
            public static codePointCount(a: string, offset: number, count: number): number;
            /**
             * Returns the index within the given char sequence that is offset
             * from the given {@code index} by {@code codePointOffset}
             * code points. Unpaired surrogates within the text range given by
             * {@code index} and {@code codePointOffset} count as
             * one code point each.
             */
            // @ts-ignore
            public static offsetByCodePoints(seq: java.lang.CharSequence, index: number, codePointOffset: number): number;
            /**
             * Returns the index within the given {@code char} subarray
             * that is offset from the given {@code index} by
             * {@code codePointOffset} code points. The
             * {@code start} and {@code count} arguments specify a
             * subarray of the {@code char} array. Unpaired surrogates
             * within the text range given by {@code index} and
             * {@code codePointOffset} count as one code point each.
             */
            // @ts-ignore
            public static offsetByCodePoints(a: string, start: number, count: number, index: number, codePointOffset: number): number;
            /**
             * Determines if the specified character is a lowercase character.
             * <p>
             * A character is lowercase if its general category type, provided
             * by {@code Character.getType(ch)}, is
             * {@code LOWERCASE_LETTER}, or it has contributory property
             * Other_Lowercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of lowercase characters:
             * <blockquote><pre>
             * a b c d e f g h i j k l m n o p q r s t u v w x y z
             * '&#92;u00DF' '&#92;u00E0' '&#92;u00E1' '&#92;u00E2' '&#92;u00E3' '&#92;u00E4' '&#92;u00E5' '&#92;u00E6'
             * '&#92;u00E7' '&#92;u00E8' '&#92;u00E9' '&#92;u00EA' '&#92;u00EB' '&#92;u00EC' '&#92;u00ED' '&#92;u00EE'
             * '&#92;u00EF' '&#92;u00F0' '&#92;u00F1' '&#92;u00F2' '&#92;u00F3' '&#92;u00F4' '&#92;u00F5' '&#92;u00F6'
             * '&#92;u00F8' '&#92;u00F9' '&#92;u00FA' '&#92;u00FB' '&#92;u00FC' '&#92;u00FD' '&#92;u00FE' '&#92;u00FF'
             * </pre></blockquote>
             * <p> Many other Unicode characters are lowercase too.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isLowerCase(int)} method.
             */
            // @ts-ignore
            public static isLowerCase(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is a
             * lowercase character.
             * <p>
             * A character is lowercase if its general category type, provided
             * by {@link Character#getType getType(codePoint)}, is
             * {@code LOWERCASE_LETTER}, or it has contributory property
             * Other_Lowercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of lowercase characters:
             * <blockquote><pre>
             * a b c d e f g h i j k l m n o p q r s t u v w x y z
             * '&#92;u00DF' '&#92;u00E0' '&#92;u00E1' '&#92;u00E2' '&#92;u00E3' '&#92;u00E4' '&#92;u00E5' '&#92;u00E6'
             * '&#92;u00E7' '&#92;u00E8' '&#92;u00E9' '&#92;u00EA' '&#92;u00EB' '&#92;u00EC' '&#92;u00ED' '&#92;u00EE'
             * '&#92;u00EF' '&#92;u00F0' '&#92;u00F1' '&#92;u00F2' '&#92;u00F3' '&#92;u00F4' '&#92;u00F5' '&#92;u00F6'
             * '&#92;u00F8' '&#92;u00F9' '&#92;u00FA' '&#92;u00FB' '&#92;u00FC' '&#92;u00FD' '&#92;u00FE' '&#92;u00FF'
             * </pre></blockquote>
             * <p> Many other Unicode characters are lowercase too.
             */
            // @ts-ignore
            public static isLowerCase(codePoint: number): boolean;
            /**
             * Determines if the specified character is an uppercase character.
             * <p>
             * A character is uppercase if its general category type, provided by
             * {@code Character.getType(ch)}, is {@code UPPERCASE_LETTER}.
             * or it has contributory property Other_Uppercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of uppercase characters:
             * <blockquote><pre>
             * A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
             * '&#92;u00C0' '&#92;u00C1' '&#92;u00C2' '&#92;u00C3' '&#92;u00C4' '&#92;u00C5' '&#92;u00C6' '&#92;u00C7'
             * '&#92;u00C8' '&#92;u00C9' '&#92;u00CA' '&#92;u00CB' '&#92;u00CC' '&#92;u00CD' '&#92;u00CE' '&#92;u00CF'
             * '&#92;u00D0' '&#92;u00D1' '&#92;u00D2' '&#92;u00D3' '&#92;u00D4' '&#92;u00D5' '&#92;u00D6' '&#92;u00D8'
             * '&#92;u00D9' '&#92;u00DA' '&#92;u00DB' '&#92;u00DC' '&#92;u00DD' '&#92;u00DE'
             * </pre></blockquote>
             * <p> Many other Unicode characters are uppercase too.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isUpperCase(int)} method.
             */
            // @ts-ignore
            public static isUpperCase(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is an uppercase character.
             * <p>
             * A character is uppercase if its general category type, provided by
             * {@link Character#getType(int) getType(codePoint)}, is {@code UPPERCASE_LETTER},
             * or it has contributory property Other_Uppercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of uppercase characters:
             * <blockquote><pre>
             * A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
             * '&#92;u00C0' '&#92;u00C1' '&#92;u00C2' '&#92;u00C3' '&#92;u00C4' '&#92;u00C5' '&#92;u00C6' '&#92;u00C7'
             * '&#92;u00C8' '&#92;u00C9' '&#92;u00CA' '&#92;u00CB' '&#92;u00CC' '&#92;u00CD' '&#92;u00CE' '&#92;u00CF'
             * '&#92;u00D0' '&#92;u00D1' '&#92;u00D2' '&#92;u00D3' '&#92;u00D4' '&#92;u00D5' '&#92;u00D6' '&#92;u00D8'
             * '&#92;u00D9' '&#92;u00DA' '&#92;u00DB' '&#92;u00DC' '&#92;u00DD' '&#92;u00DE'
             * </pre></blockquote>
             * <p> Many other Unicode characters are uppercase too.<p>
             */
            // @ts-ignore
            public static isUpperCase(codePoint: number): boolean;
            /**
             * Determines if the specified character is a titlecase character.
             * <p>
             * A character is a titlecase character if its general
             * category type, provided by {@code Character.getType(ch)},
             * is {@code TITLECASE_LETTER}.
             * <p>
             * Some characters look like pairs of Latin letters. For example, there
             * is an uppercase letter that looks like "LJ" and has a corresponding
             * lowercase letter that looks like "lj". A third form, which looks like "Lj",
             * is the appropriate form to use when rendering a word in lowercase
             * with initial capitals, as for a book title.
             * <p>
             * These are some of the Unicode characters for which this method returns
             * {@code true}:
             * <ul>
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON}
             * <li>{@code LATIN CAPITAL LETTER L WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER N WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z}
             * </ul>
             * <p> Many other Unicode characters are titlecase too.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isTitleCase(int)} method.
             */
            // @ts-ignore
            public static isTitleCase(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is a titlecase character.
             * <p>
             * A character is a titlecase character if its general
             * category type, provided by {@link Character#getType(int) getType(codePoint)},
             * is {@code TITLECASE_LETTER}.
             * <p>
             * Some characters look like pairs of Latin letters. For example, there
             * is an uppercase letter that looks like "LJ" and has a corresponding
             * lowercase letter that looks like "lj". A third form, which looks like "Lj",
             * is the appropriate form to use when rendering a word in lowercase
             * with initial capitals, as for a book title.
             * <p>
             * These are some of the Unicode characters for which this method returns
             * {@code true}:
             * <ul>
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON}
             * <li>{@code LATIN CAPITAL LETTER L WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER N WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z}
             * </ul>
             * <p> Many other Unicode characters are titlecase too.<p>
             */
            // @ts-ignore
            public static isTitleCase(codePoint: number): boolean;
            /**
             * Determines if the specified character is a digit.
             * <p>
             * A character is a digit if its general category type, provided
             * by {@code Character.getType(ch)}, is
             * {@code DECIMAL_DIGIT_NUMBER}.
             * <p>
             * Some Unicode character ranges that contain digits:
             * <ul>
             * <li>{@code '\u0030'} through {@code '\u0039'},
             * ISO-LATIN-1 digits ({@code '0'} through {@code '9'})
             * <li>{@code '\u0660'} through {@code '\u0669'},
             * Arabic-Indic digits
             * <li>{@code '\u06F0'} through {@code '\u06F9'},
             * Extended Arabic-Indic digits
             * <li>{@code '\u0966'} through {@code '\u096F'},
             * Devanagari digits
             * <li>{@code '\uFF10'} through {@code '\uFF19'},
             * Fullwidth digits
             * </ul>
             * Many other character ranges contain digits as well.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isDigit(int)} method.
             */
            // @ts-ignore
            public static isDigit(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is a digit.
             * <p>
             * A character is a digit if its general category type, provided
             * by {@link Character#getType(int) getType(codePoint)}, is
             * {@code DECIMAL_DIGIT_NUMBER}.
             * <p>
             * Some Unicode character ranges that contain digits:
             * <ul>
             * <li>{@code '\u0030'} through {@code '\u0039'},
             * ISO-LATIN-1 digits ({@code '0'} through {@code '9'})
             * <li>{@code '\u0660'} through {@code '\u0669'},
             * Arabic-Indic digits
             * <li>{@code '\u06F0'} through {@code '\u06F9'},
             * Extended Arabic-Indic digits
             * <li>{@code '\u0966'} through {@code '\u096F'},
             * Devanagari digits
             * <li>{@code '\uFF10'} through {@code '\uFF19'},
             * Fullwidth digits
             * </ul>
             * Many other character ranges contain digits as well.
             */
            // @ts-ignore
            public static isDigit(codePoint: number): boolean;
            /**
             * Determines if a character is defined in Unicode.
             * <p>
             * A character is defined if at least one of the following is true:
             * <ul>
             * <li>It has an entry in the UnicodeData file.
             * <li>It has a value in a range defined by the UnicodeData file.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isDefined(int)} method.
             */
            // @ts-ignore
            public static isDefined(ch: string): boolean;
            /**
             * Determines if a character (Unicode code point) is defined in Unicode.
             * <p>
             * A character is defined if at least one of the following is true:
             * <ul>
             * <li>It has an entry in the UnicodeData file.
             * <li>It has a value in a range defined by the UnicodeData file.
             * </ul>
             */
            // @ts-ignore
            public static isDefined(codePoint: number): boolean;
            /**
             * Determines if the specified character is a letter.
             * <p>
             * A character is considered to be a letter if its general
             * category type, provided by {@code Character.getType(ch)},
             * is any of the following:
             * <ul>
             * <li> {@code UPPERCASE_LETTER}
             * <li> {@code LOWERCASE_LETTER}
             * <li> {@code TITLECASE_LETTER}
             * <li> {@code MODIFIER_LETTER}
             * <li> {@code OTHER_LETTER}
             * </ul>
             * Not all letters have case. Many characters are
             * letters but are neither uppercase nor lowercase nor titlecase.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isLetter(int)} method.
             */
            // @ts-ignore
            public static isLetter(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is a letter.
             * <p>
             * A character is considered to be a letter if its general
             * category type, provided by {@link Character#getType(int) getType(codePoint)},
             * is any of the following:
             * <ul>
             * <li> {@code UPPERCASE_LETTER}
             * <li> {@code LOWERCASE_LETTER}
             * <li> {@code TITLECASE_LETTER}
             * <li> {@code MODIFIER_LETTER}
             * <li> {@code OTHER_LETTER}
             * </ul>
             * Not all letters have case. Many characters are
             * letters but are neither uppercase nor lowercase nor titlecase.
             */
            // @ts-ignore
            public static isLetter(codePoint: number): boolean;
            /**
             * Determines if the specified character is a letter or digit.
             * <p>
             * A character is considered to be a letter or digit if either
             * {@code Character.isLetter(char ch)} or
             * {@code Character.isDigit(char ch)} returns
             * {@code true} for the character.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isLetterOrDigit(int)} method.
             */
            // @ts-ignore
            public static isLetterOrDigit(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is a letter or digit.
             * <p>
             * A character is considered to be a letter or digit if either
             * {@link #isLetter(int) isLetter(codePoint)} or
             * {@link #isDigit(int) isDigit(codePoint)} returns
             * {@code true} for the character.
             */
            // @ts-ignore
            public static isLetterOrDigit(codePoint: number): boolean;
            /**
             * Determines if the specified character is permissible as the first
             * character in a Java identifier.
             * <p>
             * A character may start a Java identifier if and only if
             * one of the following is true:
             * <ul>
             * <li> {@link #isLetter(char) isLetter(ch)} returns {@code true}
             * <li> {@link #getType(char) getType(ch)} returns {@code LETTER_NUMBER}
             * <li> {@code ch} is a currency symbol (such as {@code '$'})
             * <li> {@code ch} is a connecting punctuation character (such as {@code '_'}).
             * </ul>
             */
            // @ts-ignore
            public static isJavaLetter(ch: string): boolean;
            /**
             * Determines if the specified character may be part of a Java
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Java identifier if and only if any
             * of the following are true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a currency symbol (such as {@code '$'})
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for the character.
             * </ul>
             */
            // @ts-ignore
            public static isJavaLetterOrDigit(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is an alphabet.
             * <p>
             * A character is considered to be alphabetic if its general category type,
             * provided by {@link Character#getType(int) getType(codePoint)}, is any of
             * the following:
             * <ul>
             * <li> <code>UPPERCASE_LETTER</code>
             * <li> <code>LOWERCASE_LETTER</code>
             * <li> <code>TITLECASE_LETTER</code>
             * <li> <code>MODIFIER_LETTER</code>
             * <li> <code>OTHER_LETTER</code>
             * <li> <code>LETTER_NUMBER</code>
             * </ul>
             * or it has contributory property Other_Alphabetic as defined by the
             * Unicode Standard.
             */
            // @ts-ignore
            public static isAlphabetic(codePoint: number): boolean;
            /**
             * Determines if the specified character (Unicode code point) is a CJKV
             * (Chinese, Japanese, Korean and Vietnamese) ideograph, as defined by
             * the Unicode Standard.
             */
            // @ts-ignore
            public static isIdeographic(codePoint: number): boolean;
            /**
             * Determines if the specified character is
             * permissible as the first character in a Java identifier.
             * <p>
             * A character may start a Java identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(char) isLetter(ch)} returns {@code true}
             * <li> {@link #getType(char) getType(ch)} returns {@code LETTER_NUMBER}
             * <li> {@code ch} is a currency symbol (such as {@code '$'})
             * <li> {@code ch} is a connecting punctuation character (such as {@code '_'}).
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isJavaIdentifierStart(int)} method.
             */
            // @ts-ignore
            public static isJavaIdentifierStart(ch: string): boolean;
            /**
             * Determines if the character (Unicode code point) is
             * permissible as the first character in a Java identifier.
             * <p>
             * A character may start a Java identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(int) isLetter(codePoint)}
             * returns {@code true}
             * <li> {@link #getType(int) getType(codePoint)}
             * returns {@code LETTER_NUMBER}
             * <li> the referenced character is a currency symbol (such as {@code '$'})
             * <li> the referenced character is a connecting punctuation character
             * (such as {@code '_'}).
             * </ul>
             */
            // @ts-ignore
            public static isJavaIdentifierStart(codePoint: number): boolean;
            /**
             * Determines if the specified character may be part of a Java
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Java identifier if any of the following
             * are true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a currency symbol (such as {@code '$'})
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for the character
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isJavaIdentifierPart(int)} method.
             */
            // @ts-ignore
            public static isJavaIdentifierPart(ch: string): boolean;
            /**
             * Determines if the character (Unicode code point) may be part of a Java
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Java identifier if any of the following
             * are true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a currency symbol (such as {@code '$'})
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@link #isIdentifierIgnorable(int)
             * isIdentifierIgnorable(codePoint)} returns {@code true} for
             * the character
             * </ul>
             */
            // @ts-ignore
            public static isJavaIdentifierPart(codePoint: number): boolean;
            /**
             * Determines if the specified character is permissible as the
             * first character in a Unicode identifier.
             * <p>
             * A character may start a Unicode identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(char) isLetter(ch)} returns {@code true}
             * <li> {@link #getType(char) getType(ch)} returns
             * {@code LETTER_NUMBER}.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isUnicodeIdentifierStart(int)} method.
             */
            // @ts-ignore
            public static isUnicodeIdentifierStart(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is permissible as the
             * first character in a Unicode identifier.
             * <p>
             * A character may start a Unicode identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(int) isLetter(codePoint)}
             * returns {@code true}
             * <li> {@link #getType(int) getType(codePoint)}
             * returns {@code LETTER_NUMBER}.
             * </ul>
             */
            // @ts-ignore
            public static isUnicodeIdentifierStart(codePoint: number): boolean;
            /**
             * Determines if the specified character may be part of a Unicode
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Unicode identifier if and only if
             * one of the following statements is true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for this character.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isUnicodeIdentifierPart(int)} method.
             */
            // @ts-ignore
            public static isUnicodeIdentifierPart(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) may be part of a Unicode
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Unicode identifier if and only if
             * one of the following statements is true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for this character.
             * </ul>
             */
            // @ts-ignore
            public static isUnicodeIdentifierPart(codePoint: number): boolean;
            /**
             * Determines if the specified character should be regarded as
             * an ignorable character in a Java identifier or a Unicode identifier.
             * <p>
             * The following Unicode characters are ignorable in a Java identifier
             * or a Unicode identifier:
             * <ul>
             * <li>ISO control characters that are not whitespace
             * <ul>
             * <li>{@code '\u0000'} through {@code '\u0008'}
             * <li>{@code '\u000E'} through {@code '\u001B'}
             * <li>{@code '\u007F'} through {@code '\u009F'}
             * </ul>
             * <li>all characters that have the {@code FORMAT} general
             * category value
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isIdentifierIgnorable(int)} method.
             */
            // @ts-ignore
            public static isIdentifierIgnorable(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) should be regarded as
             * an ignorable character in a Java identifier or a Unicode identifier.
             * <p>
             * The following Unicode characters are ignorable in a Java identifier
             * or a Unicode identifier:
             * <ul>
             * <li>ISO control characters that are not whitespace
             * <ul>
             * <li>{@code '\u0000'} through {@code '\u0008'}
             * <li>{@code '\u000E'} through {@code '\u001B'}
             * <li>{@code '\u007F'} through {@code '\u009F'}
             * </ul>
             * <li>all characters that have the {@code FORMAT} general
             * category value
             * </ul>
             */
            // @ts-ignore
            public static isIdentifierIgnorable(codePoint: number): boolean;
            /**
             * Converts the character argument to lowercase using case
             * mapping information from the UnicodeData file.
             * <p>
             * Note that
             * {@code Character.isLowerCase(Character.toLowerCase(ch))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toLowerCase()} should be used to map
             * characters to lowercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #toLowerCase(int)} method.
             */
            // @ts-ignore
            public static toLowerCase(ch: string): string;
            /**
             * Converts the character (Unicode code point) argument to
             * lowercase using case mapping information from the UnicodeData
             * file.
             * <p> Note that
             * {@code Character.isLowerCase(Character.toLowerCase(codePoint))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toLowerCase()} should be used to map
             * characters to lowercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             */
            // @ts-ignore
            public static toLowerCase(codePoint: number): number;
            /**
             * Converts the character argument to uppercase using case mapping
             * information from the UnicodeData file.
             * <p>
             * Note that
             * {@code Character.isUpperCase(Character.toUpperCase(ch))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toUpperCase()} should be used to map
             * characters to uppercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #toUpperCase(int)} method.
             */
            // @ts-ignore
            public static toUpperCase(ch: string): string;
            /**
             * Converts the character (Unicode code point) argument to
             * uppercase using case mapping information from the UnicodeData
             * file.
             * <p>Note that
             * {@code Character.isUpperCase(Character.toUpperCase(codePoint))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toUpperCase()} should be used to map
             * characters to uppercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             */
            // @ts-ignore
            public static toUpperCase(codePoint: number): number;
            /**
             * Converts the character argument to titlecase using case mapping
             * information from the UnicodeData file. If a character has no
             * explicit titlecase mapping and is not itself a titlecase char
             * according to UnicodeData, then the uppercase mapping is
             * returned as an equivalent titlecase mapping. If the
             * {@code char} argument is already a titlecase
             * {@code char}, the same {@code char} value will be
             * returned.
             * <p>
             * Note that
             * {@code Character.isTitleCase(Character.toTitleCase(ch))}
             * does not always return {@code true} for some ranges of
             * characters.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #toTitleCase(int)} method.
             */
            // @ts-ignore
            public static toTitleCase(ch: string): string;
            /**
             * Converts the character (Unicode code point) argument to titlecase using case mapping
             * information from the UnicodeData file. If a character has no
             * explicit titlecase mapping and is not itself a titlecase char
             * according to UnicodeData, then the uppercase mapping is
             * returned as an equivalent titlecase mapping. If the
             * character argument is already a titlecase
             * character, the same character value will be
             * returned.
             * <p>Note that
             * {@code Character.isTitleCase(Character.toTitleCase(codePoint))}
             * does not always return {@code true} for some ranges of
             * characters.
             */
            // @ts-ignore
            public static toTitleCase(codePoint: number): number;
            /**
             * Returns the numeric value of the character {@code ch} in the
             * specified radix.
             * <p>
             * If the radix is not in the range {@code MIN_RADIX} &le;
             * {@code radix} &le; {@code MAX_RADIX} or if the
             * value of {@code ch} is not a valid digit in the specified
             * radix, {@code -1} is returned. A character is a valid digit
             * if at least one of the following is true:
             * <ul>
             * <li>The method {@code isDigit} is {@code true} of the character
             * and the Unicode decimal digit value of the character (or its
             * single-character decomposition) is less than the specified radix.
             * In this case the decimal digit value is returned.
             * <li>The character is one of the uppercase Latin letters
             * {@code 'A'} through {@code 'Z'} and its code is less than
             * {@code radix + 'A' - 10}.
             * In this case, {@code ch - 'A' + 10}
             * is returned.
             * <li>The character is one of the lowercase Latin letters
             * {@code 'a'} through {@code 'z'} and its code is less than
             * {@code radix + 'a' - 10}.
             * In this case, {@code ch - 'a' + 10}
             * is returned.
             * <li>The character is one of the fullwidth uppercase Latin letters A
             * ({@code '\uFF21'}) through Z ({@code '\uFF3A'})
             * and its code is less than
             * {@code radix + '\uFF21' - 10}.
             * In this case, {@code ch - '\uFF21' + 10}
             * is returned.
             * <li>The character is one of the fullwidth lowercase Latin letters a
             * ({@code '\uFF41'}) through z ({@code '\uFF5A'})
             * and its code is less than
             * {@code radix + '\uFF41' - 10}.
             * In this case, {@code ch - '\uFF41' + 10}
             * is returned.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #digit(int, int)} method.
             */
            // @ts-ignore
            public static digit(ch: string, radix: number): number;
            /**
             * Returns the numeric value of the specified character (Unicode
             * code point) in the specified radix.
             * <p>If the radix is not in the range {@code MIN_RADIX} &le;
             * {@code radix} &le; {@code MAX_RADIX} or if the
             * character is not a valid digit in the specified
             * radix, {@code -1} is returned. A character is a valid digit
             * if at least one of the following is true:
             * <ul>
             * <li>The method {@link #isDigit(int) isDigit(codePoint)} is {@code true} of the character
             * and the Unicode decimal digit value of the character (or its
             * single-character decomposition) is less than the specified radix.
             * In this case the decimal digit value is returned.
             * <li>The character is one of the uppercase Latin letters
             * {@code 'A'} through {@code 'Z'} and its code is less than
             * {@code radix + 'A' - 10}.
             * In this case, {@code codePoint - 'A' + 10}
             * is returned.
             * <li>The character is one of the lowercase Latin letters
             * {@code 'a'} through {@code 'z'} and its code is less than
             * {@code radix + 'a' - 10}.
             * In this case, {@code codePoint - 'a' + 10}
             * is returned.
             * <li>The character is one of the fullwidth uppercase Latin letters A
             * ({@code '\uFF21'}) through Z ({@code '\uFF3A'})
             * and its code is less than
             * {@code radix + '\uFF21' - 10}.
             * In this case,
             * {@code codePoint - '\uFF21' + 10}
             * is returned.
             * <li>The character is one of the fullwidth lowercase Latin letters a
             * ({@code '\uFF41'}) through z ({@code '\uFF5A'})
             * and its code is less than
             * {@code radix + '\uFF41'- 10}.
             * In this case,
             * {@code codePoint - '\uFF41' + 10}
             * is returned.
             * </ul>
             */
            // @ts-ignore
            public static digit(codePoint: number, radix: number): number;
            /**
             * Returns the {@code int} value that the specified Unicode
             * character represents. For example, the character
             * {@code '\u216C'} (the roman numeral fifty) will return
             * an int with a value of 50.
             * <p>
             * The letters A-Z in their uppercase ({@code '\u0041'} through
             * {@code '\u005A'}), lowercase
             * ({@code '\u0061'} through {@code '\u007A'}), and
             * full width variant ({@code '\uFF21'} through
             * {@code '\uFF3A'} and {@code '\uFF41'} through
             * {@code '\uFF5A'}) forms have numeric values from 10
             * through 35. This is independent of the Unicode specification,
             * which does not assign numeric values to these {@code char}
             * values.
             * <p>
             * If the character does not have a numeric value, then -1 is returned.
             * If the character has a numeric value that cannot be represented as a
             * nonnegative integer (for example, a fractional value), then -2
             * is returned.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #getNumericValue(int)} method.
             */
            // @ts-ignore
            public static getNumericValue(ch: string): number;
            /**
             * Returns the {@code int} value that the specified
             * character (Unicode code point) represents. For example, the character
             * {@code '\u216C'} (the Roman numeral fifty) will return
             * an {@code int} with a value of 50.
             * <p>
             * The letters A-Z in their uppercase ({@code '\u0041'} through
             * {@code '\u005A'}), lowercase
             * ({@code '\u0061'} through {@code '\u007A'}), and
             * full width variant ({@code '\uFF21'} through
             * {@code '\uFF3A'} and {@code '\uFF41'} through
             * {@code '\uFF5A'}) forms have numeric values from 10
             * through 35. This is independent of the Unicode specification,
             * which does not assign numeric values to these {@code char}
             * values.
             * <p>
             * If the character does not have a numeric value, then -1 is returned.
             * If the character has a numeric value that cannot be represented as a
             * nonnegative integer (for example, a fractional value), then -2
             * is returned.
             */
            // @ts-ignore
            public static getNumericValue(codePoint: number): number;
            /**
             * Determines if the specified character is ISO-LATIN-1 white space.
             * This method returns {@code true} for the following five
             * characters only:
             * <table summary="truechars">
             * <tr><td>{@code '\t'}</td>            <td>{@code U+0009}</td>
             * <td>{@code HORIZONTAL TABULATION}</td></tr>
             * <tr><td>{@code '\n'}</td>            <td>{@code U+000A}</td>
             * <td>{@code NEW LINE}</td></tr>
             * <tr><td>{@code '\f'}</td>            <td>{@code U+000C}</td>
             * <td>{@code FORM FEED}</td></tr>
             * <tr><td>{@code '\r'}</td>            <td>{@code U+000D}</td>
             * <td>{@code CARRIAGE RETURN}</td></tr>
             * <tr><td>{@code ' '}</td>             <td>{@code U+0020}</td>
             * <td>{@code SPACE}</td></tr>
             * </table>
             */
            // @ts-ignore
            public static isSpace(ch: string): boolean;
            /**
             * Determines if the specified character is a Unicode space character.
             * A character is considered to be a space character if and only if
             * it is specified to be a space character by the Unicode Standard. This
             * method returns true if the character's general category type is any of
             * the following:
             * <ul>
             * <li> {@code SPACE_SEPARATOR}
             * <li> {@code LINE_SEPARATOR}
             * <li> {@code PARAGRAPH_SEPARATOR}
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isSpaceChar(int)} method.
             */
            // @ts-ignore
            public static isSpaceChar(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is a
             * Unicode space character.  A character is considered to be a
             * space character if and only if it is specified to be a space
             * character by the Unicode Standard. This method returns true if
             * the character's general category type is any of the following:
             * <ul>
             * <li> {@link #SPACE_SEPARATOR}
             * <li> {@link #LINE_SEPARATOR}
             * <li> {@link #PARAGRAPH_SEPARATOR}
             * </ul>
             */
            // @ts-ignore
            public static isSpaceChar(codePoint: number): boolean;
            /**
             * Determines if the specified character is white space according to Java.
             * A character is a Java whitespace character if and only if it satisfies
             * one of the following criteria:
             * <ul>
             * <li> It is a Unicode space character ({@code SPACE_SEPARATOR},
             * {@code LINE_SEPARATOR}, or {@code PARAGRAPH_SEPARATOR})
             * but is not also a non-breaking space ({@code '\u00A0'},
             * {@code '\u2007'}, {@code '\u202F'}).
             * <li> It is {@code '\t'}, U+0009 HORIZONTAL TABULATION.
             * <li> It is {@code '\n'}, U+000A LINE FEED.
             * <li> It is {@code '\u000B'}, U+000B VERTICAL TABULATION.
             * <li> It is {@code '\f'}, U+000C FORM FEED.
             * <li> It is {@code '\r'}, U+000D CARRIAGE RETURN.
             * <li> It is {@code '\u001C'}, U+001C FILE SEPARATOR.
             * <li> It is {@code '\u001D'}, U+001D GROUP SEPARATOR.
             * <li> It is {@code '\u001E'}, U+001E RECORD SEPARATOR.
             * <li> It is {@code '\u001F'}, U+001F UNIT SEPARATOR.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isWhitespace(int)} method.
             */
            // @ts-ignore
            public static isWhitespace(ch: string): boolean;
            /**
             * Determines if the specified character (Unicode code point) is
             * white space according to Java.  A character is a Java
             * whitespace character if and only if it satisfies one of the
             * following criteria:
             * <ul>
             * <li> It is a Unicode space character ({@link #SPACE_SEPARATOR},
             * {@link #LINE_SEPARATOR}, or {@link #PARAGRAPH_SEPARATOR})
             * but is not also a non-breaking space ({@code '\u00A0'},
             * {@code '\u2007'}, {@code '\u202F'}).
             * <li> It is {@code '\t'}, U+0009 HORIZONTAL TABULATION.
             * <li> It is {@code '\n'}, U+000A LINE FEED.
             * <li> It is {@code '\u000B'}, U+000B VERTICAL TABULATION.
             * <li> It is {@code '\f'}, U+000C FORM FEED.
             * <li> It is {@code '\r'}, U+000D CARRIAGE RETURN.
             * <li> It is {@code '\u001C'}, U+001C FILE SEPARATOR.
             * <li> It is {@code '\u001D'}, U+001D GROUP SEPARATOR.
             * <li> It is {@code '\u001E'}, U+001E RECORD SEPARATOR.
             * <li> It is {@code '\u001F'}, U+001F UNIT SEPARATOR.
             * </ul>
             * <p>
             */
            // @ts-ignore
            public static isWhitespace(codePoint: number): boolean;
            /**
             * Determines if the specified character is an ISO control
             * character.  A character is considered to be an ISO control
             * character if its code is in the range {@code '\u0000'}
             * through {@code '\u001F'} or in the range
             * {@code '\u007F'} through {@code '\u009F'}.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isISOControl(int)} method.
             */
            // @ts-ignore
            public static isISOControl(ch: string): boolean;
            /**
             * Determines if the referenced character (Unicode code point) is an ISO control
             * character.  A character is considered to be an ISO control
             * character if its code is in the range {@code '\u0000'}
             * through {@code '\u001F'} or in the range
             * {@code '\u007F'} through {@code '\u009F'}.
             */
            // @ts-ignore
            public static isISOControl(codePoint: number): boolean;
            /**
             * Returns a value indicating a character's general category.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #getType(int)} method.
             */
            // @ts-ignore
            public static getType(ch: string): number;
            /**
             * Returns a value indicating a character's general category.
             */
            // @ts-ignore
            public static getType(codePoint: number): number;
            /**
             * Determines the character representation for a specific digit in
             * the specified radix. If the value of {@code radix} is not a
             * valid radix, or the value of {@code digit} is not a valid
             * digit in the specified radix, the null character
             * ({@code '\u0000'}) is returned.
             * <p>
             * The {@code radix} argument is valid if it is greater than or
             * equal to {@code MIN_RADIX} and less than or equal to
             * {@code MAX_RADIX}. The {@code digit} argument is valid if
             * {@code 0 <= digit < radix}.
             * <p>
             * If the digit is less than 10, then
             * {@code '0' + digit} is returned. Otherwise, the value
             * {@code 'a' + digit - 10} is returned.
             */
            // @ts-ignore
            public static forDigit(digit: number, radix: number): string;
            /**
             * Returns the Unicode directionality property for the given
             * character.  Character directionality is used to calculate the
             * visual ordering of text. The directionality value of undefined
             * {@code char} values is {@code DIRECTIONALITY_UNDEFINED}.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #getDirectionality(int)} method.
             */
            // @ts-ignore
            public static getDirectionality(ch: string): number;
            /**
             * Returns the Unicode directionality property for the given
             * character (Unicode code point).  Character directionality is
             * used to calculate the visual ordering of text. The
             * directionality value of undefined character is {@link
             * #DIRECTIONALITY_UNDEFINED}.
             */
            // @ts-ignore
            public static getDirectionality(codePoint: number): number;
            /**
             * Determines whether the character is mirrored according to the
             * Unicode specification.  Mirrored characters should have their
             * glyphs horizontally mirrored when displayed in text that is
             * right-to-left.  For example, {@code '\u0028'} LEFT
             * PARENTHESIS is semantically defined to be an <i>opening
             * parenthesis</i>.  This will appear as a "(" in text that is
             * left-to-right but as a ")" in text that is right-to-left.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isMirrored(int)} method.
             */
            // @ts-ignore
            public static isMirrored(ch: string): boolean;
            /**
             * Determines whether the specified character (Unicode code point)
             * is mirrored according to the Unicode specification.  Mirrored
             * characters should have their glyphs horizontally mirrored when
             * displayed in text that is right-to-left.  For example,
             * {@code '\u0028'} LEFT PARENTHESIS is semantically
             * defined to be an <i>opening parenthesis</i>.  This will appear
             * as a "(" in text that is left-to-right but as a ")" in text
             * that is right-to-left.
             */
            // @ts-ignore
            public static isMirrored(codePoint: number): boolean;
            /**
             * Compares two {@code Character} objects numerically.
             */
            // @ts-ignore
            public compareTo(anotherCharacter: java.lang.Character): number;
            /**
             * Compares two {@code char} values numerically.
             * The value returned is identical to what would be returned by:
             * <pre>
             * Character.valueOf(x).compareTo(Character.valueOf(y))
             * </pre>
             */
            // @ts-ignore
            public static compare(x: string, y: string): number;
            /**
             * Returns the value obtained by reversing the order of the bytes in the
             * specified <tt>char</tt> value.
             */
            // @ts-ignore
            public static reverseBytes(ch: string): string;
            /**
             * Returns the Unicode name of the specified character
             * {@code codePoint}, or null if the code point is
             * {@link #UNASSIGNED unassigned}.
             * <p>
             * Note: if the specified character is not assigned a name by
             * the <i>UnicodeData</i> file (part of the Unicode Character
             * Database maintained by the Unicode Consortium), the returned
             * name is the same as the result of expression.
             * <blockquote>{@code
             * Character.UnicodeBlock.of(codePoint).toString().replace('_', ' ')
             * + " "
             * + Integer.toHexString(codePoint).toUpperCase(Locale.ENGLISH);
             * }</blockquote>
             */
            // @ts-ignore
            public static getName(codePoint: number): string;
        }
    }
}
