declare namespace java {
    namespace lang {
        // @ts-ignore
         class String extends java.lang.Object {
            /**
             * Answers an empty string.
             */
            // @ts-ignore
            constructor()
            /**
             * Converts the byte array to a String using the default encoding as specified by the file.encoding system property. If the system property is not
             * defined, the default encoding is ISO8859_1 (ISO-Latin-1). If 8859-1 is not available, an ASCII encoding is used.
             */
            // @ts-ignore
            constructor(data: number)
            /**
             * Converts the byte array to a String, setting the high byte of every character to the specified value.
             */
            // @ts-ignore
            constructor(data: number, high: number)
            /**
             * Converts the byte array to a String using the default encoding as specified by the file.encoding system property. If the system property is not
             * defined, the default encoding is ISO8859_1 (ISO-Latin-1). If 8859-1 is not available, an ASCII encoding is used.
             */
            // @ts-ignore
            constructor(data: number, start: number, length: number)
            /**
             * Converts the byte array to a String, setting the high byte of every character to the specified value.
             */
            // @ts-ignore
            constructor(data: number, high: number, start: number, length: number)
            /**
             * Converts the byte array to a String using the specified encoding.
             */
            // @ts-ignore
            constructor(data: number, start: number, length: number, encoding: string)
            /**
             * Converts the byte array to a String using the specified encoding.
             */
            // @ts-ignore
            constructor(data: number, encoding: string)
            /**
             * Initializes this String to contain the characters in the specified character array. Modifying the character array after creating the String has
             * no effect on the String.
             */
            // @ts-ignore
            constructor(data: string)
            /**
             * Initializes this String to contain the specified characters in the character array. Modifying the character array after creating the String has
             * no effect on the String.
             */
            // @ts-ignore
            constructor(data: string, start: number, length: number)
            /**
             * Creates a string that is a copy of another string
             */
            // @ts-ignore
            constructor(string: string)
            /**
             * Creates a string from the contents of a StringBuffer.
             */
            // @ts-ignore
            constructor(buffer: java.lang.StringBuffer)
            // @ts-ignore
            constructor(data: number, start: number, length: number)
            /**
             * Creates a string from the contents of a StringBuilder.
             */
            // @ts-ignore
            constructor(builder: java.lang.StringBuilder)
            /**
             * Converts the byte array to a String using the specified Charset.
             */
            // @ts-ignore
            constructor(data: number, charset: java.nio.charset.Charset)
            /**
             * Converts the byte array to a String using the specified Charset.
             */
            // @ts-ignore
            constructor(data: number, start: number, length: number, charset: java.nio.charset.Charset)
            // @ts-ignore
            public static CASE_INSENSITIVE_ORDER: java.util.Comparator;
            /**
             * Answers the character at the specified offset in this String.
             */
            // @ts-ignore
            public charAt(index: number): string;
            /**
             * Compares the specified String to this String using the Unicode values of the characters. Answer 0 if the strings contain the same characters in
             * the same order. Answer a negative integer if the first non-equal character in this String has a Unicode value which is less than the Unicode
             * value of the character at the same position in the specified string, or if this String is a prefix of the specified string. Answer a positive
             * integer if the first non-equal character in this String has a Unicode value which is greater than the Unicode value of the character at the same
             * position in the specified string, or if the specified String is a prefix of the this String.
             */
            // @ts-ignore
            public compareTo(string: string): number;
            /**
             * Compare the receiver to the specified String to determine the relative ordering when the case of the characters is ignored.
             */
            // @ts-ignore
            public compareToIgnoreCase(string: string): number;
            /**
             * Concatenates this String and the specified string.
             */
            // @ts-ignore
            public concat(string: string): string;
            /**
             * Creates a new String containing the characters in the specified character array. Modifying the character array after creating the String has no
             * effect on the String.
             */
            // @ts-ignore
            public static copyValueOf(data: string): string;
            /**
             * Creates a new String containing the specified characters in the character array. Modifying the character array after creating the String has no
             * effect on the String.
             */
            // @ts-ignore
            public static copyValueOf(data: string, start: number, length: number): string;
            /**
             * Compares the specified string to this String to determine if the specified string is a suffix.
             */
            // @ts-ignore
            public endsWith(suffix: string): boolean;
            /**
             * Compares the specified object to this String and answer if they are equal. The object must be an instance of String with the same characters in
             * the same order.
             */
            // @ts-ignore
            public equals(object: java.lang.Object): boolean;
            /**
             * Compares the specified String to this String ignoring the case of the characters and answer if they are equal.
             */
            // @ts-ignore
            public equalsIgnoreCase(string: string): boolean;
            /**
             * Converts this String to a byte encoding using the default encoding as specified by the file.encoding system property. If the system property is
             * not defined, the default encoding is ISO8859_1 (ISO-Latin-1). If 8859-1 is not available, an ASCII encoding is used.
             */
            // @ts-ignore
            public getBytes(): number[];
            /**
             * Converts this String to a byte array, ignoring the high order bits of each character.
             */
            // @ts-ignore
            public getBytes(start: number, end: number, data: number, index: number): void;
            /**
             * Converts this String to a byte encoding using the specified encoding.
             */
            // @ts-ignore
            public getBytes(encoding: string): number[];
            /**
             * Copies the specified characters in this String to the character array starting at the specified offset in the character array.
             */
            // @ts-ignore
            public getChars(start: number, end: number, data: string, index: number): void;
            /**
             * Answers an integer hash code for the receiver. Objects which are equal answer the same value for this method.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Searches in this String for the first index of the specified character. The search for the character starts at the beginning and moves towards
             * the end of this String.
             */
            // @ts-ignore
            public indexOf(c: number): number;
            /**
             * Searches in this String for the index of the specified character. The search for the character starts at the specified offset and moves towards
             * the end of this String.
             */
            // @ts-ignore
            public indexOf(c: number, start: number): number;
            /**
             * Searches in this String for the first index of the specified string. The search for the string starts at the beginning and moves towards the end
             * of this String.
             */
            // @ts-ignore
            public indexOf(string: string): number;
            /**
             * Searches in this String for the index of the specified string. The search for the string starts at the specified offset and moves towards the
             * end of this String.
             */
            // @ts-ignore
            public indexOf(subString: string, start: number): number;
            /**
             * Searches an internal table of strings for a string equal to this String. If the string is not in the table, it is added. Answers the string
             * contained in the table which is equal to this String. The same string object is always answered for strings which are equal.
             */
            // @ts-ignore
            public intern(): string;
            /**
             * Searches in this String for the last index of the specified character. The search for the character starts at the end and moves towards the
             * beginning of this String.
             */
            // @ts-ignore
            public lastIndexOf(c: number): number;
            /**
             * Searches in this String for the index of the specified character. The search for the character starts at the specified offset and moves towards
             * the beginning of this String.
             */
            // @ts-ignore
            public lastIndexOf(c: number, start: number): number;
            /**
             * Searches in this String for the last index of the specified string. The search for the string starts at the end and moves towards the beginning
             * of this String.
             */
            // @ts-ignore
            public lastIndexOf(string: string): number;
            /**
             * Searches in this String for the index of the specified string. The search for the string starts at the specified offset and moves towards the
             * beginning of this String.
             */
            // @ts-ignore
            public lastIndexOf(subString: string, start: number): number;
            /**
             * Answers the size of this String.
             */
            // @ts-ignore
            public length(): number;
            /**
             * Compares the specified string to this String and compares the specified range of characters to determine if they are the same.
             */
            // @ts-ignore
            public regionMatches(thisStart: number, string: string, start: number, length: number): boolean;
            /**
             * Compares the specified string to this String and compares the specified range of characters to determine if they are the same. When ignoreCase
             * is true, the case of the characters is ignored during the comparison.
             */
            // @ts-ignore
            public regionMatches(ignoreCase: boolean, thisStart: number, string: string, start: number, length: number): boolean;
            /**
             * Replaces occurrences of the specified character with another character.
             */
            // @ts-ignore
            public replace(oldChar: string, newChar: string): string;
            /**
             * Compares the specified string to this String to determine if the specified string is a prefix.
             */
            // @ts-ignore
            public startsWith(prefix: string): boolean;
            /**
             * Compares the specified string to this String, starting at the specified offset, to determine if the specified string is a prefix.
             */
            // @ts-ignore
            public startsWith(prefix: string, start: number): boolean;
            /**
             * Copies a range of characters into a new String.
             */
            // @ts-ignore
            public substring(start: number): string;
            /**
             * Copies a range of characters.
             */
            // @ts-ignore
            public substring(start: number, end: number): string;
            /**
             * Copies the characters in this String to a character array.
             */
            // @ts-ignore
            public toCharArray(): string[];
            /**
             * Converts the characters in this String to lowercase, using the default Locale. To convert to lower case independent of any locale, use
             * toLowerCase(Locale.ROOT).
             */
            // @ts-ignore
            public toLowerCase(): string;
            /**
             * Converts the characters in this String to lowercase, using the specified Locale.
             */
            // @ts-ignore
            public toLowerCase(locale: java.util.Locale): string;
            /**
             * Answers a string containing a concise, human-readable description of the receiver.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Converts the characters in this String to uppercase, using the default Locale. To convert to upper case independent of any locale, use
             * toUpperCase(Locale.ROOT).
             */
            // @ts-ignore
            public toUpperCase(): string;
            /**
             * Converts the characters in this String to uppercase, using the specified Locale.
             */
            // @ts-ignore
            public toUpperCase(locale: java.util.Locale): string;
            /**
             * Removes white space characters from the beginning and end of the string.
             */
            // @ts-ignore
            public trim(): string;
            /**
             * Returns a String containing the characters in the specified character array. Modifying the character array after creating the String has no
             * effect on the String.
             */
            // @ts-ignore
            public static valueOf(data: string): string;
            /**
             * Returns a String containing the specified characters in the character array. Modifying the character array after creating the String has no
             * effect on the String.
             */
            // @ts-ignore
            public static valueOf(data: string, start: number, length: number): string;
            /**
             * Converts the specified character to its string representation.
             */
            // @ts-ignore
            public static valueOf(value: string): string;
            /**
             * Converts the specified double to its string representation.
             */
            // @ts-ignore
            public static valueOf(value: number): string;
            /**
             * Converts the specified float to its string representation.
             */
            // @ts-ignore
            public static valueOf(value: number): string;
            /**
             * Converts the specified integer to its string representation.
             */
            // @ts-ignore
            public static valueOf(value: number): string;
            /**
             * Converts the specified long to its string representation.
             */
            // @ts-ignore
            public static valueOf(value: number): string;
            /**
             * Converts the specified object to its string representation. If the object is null answer the string {@code "null"}, otherwise use
             * {@code toString()} to get the string representation.
             */
            // @ts-ignore
            public static valueOf(value: java.lang.Object): string;
            /**
             * Converts the specified boolean to its string representation. When the boolean is true answer {@code "true"}, otherwise answer
             * {@code "false"}.
             */
            // @ts-ignore
            public static valueOf(value: boolean): string;
            /**
             * Answers whether the characters in the StringBuffer buffer are the same as those in this String.
             */
            // @ts-ignore
            public contentEquals(buffer: java.lang.StringBuffer): boolean;
            /**
             * Determines whether a this String matches a given regular expression.
             */
            // @ts-ignore
            public matches(expr: string): boolean;
            /**
             * Replace any substrings within this String that match the supplied regular expression expr, with the String substitute.
             */
            // @ts-ignore
            public replaceAll(regex: string, substitute: string): string;
            /**
             * Replace any substrings within this String that match the supplied regular expression expr, with the String substitute.
             */
            // @ts-ignore
            public replaceFirst(expr: string, substitute: string): string;
            /**
             * Splits this string around matches of the given regular expression. Calling this method is same as calling split(regex,0). Therefore, empty
             * string(s) at the end of the returned array will be discarded.
             */
            // @ts-ignore
            public split(regex: string): java.lang.String[];
            /**
             * Splits this String using the given regular expression.
             * max controls the number of times the regex is applied to this string.
             * If max is positive, then regex can be applied to this String max-1 times.
             * The returned array size can not be bigger than max, and the last element of
             * the returned array contains all input after the last match of the regex.
             * If max is negative or zero, then regex can be applied to this string as many times as
             * possible and there is no size limit in the returned array.
             * If max is 0, all the empty string(s) at the end of the returned array will be discarded.
             */
            // @ts-ignore
            public split(regex: string, max: number): java.lang.String[];
            /**
             * Has the same result as the substring function, but is present so that String may implement the CharSequence interface.
             */
            // @ts-ignore
            public subSequence(start: number, end: number): java.lang.CharSequence;
            /**
             * Returns the Unicode character at the given point.
             */
            // @ts-ignore
            public codePointAt(index: number): number;
            /**
             * Returns the Unicode character before the given point.
             */
            // @ts-ignore
            public codePointBefore(index: number): number;
            /**
             * Returns the total Unicode values in the specified range.
             */
            // @ts-ignore
            public codePointCount(start: number, end: number): number;
            /**
             * Returns the index of the code point that was offset by codePointCount.
             */
            // @ts-ignore
            public offsetByCodePoints(start: number, codePointCount: number): number;
            /**
             * Compares the content of the character sequence to this String
             */
            // @ts-ignore
            public contentEquals(sequence: java.lang.CharSequence): boolean;
            // @ts-ignore
            public contains(sequence: java.lang.CharSequence): boolean;
            // @ts-ignore
            public replace(sequence1: java.lang.CharSequence, sequence2: java.lang.CharSequence): string;
            /**
             * Format the receiver using the specified format and args.
             */
            // @ts-ignore
            public static format(format: string, args: java.lang.Object): string;
            /**
             * Format the receiver using the specified local, format and args.
             */
            // @ts-ignore
            public static format(locale: java.util.Locale, format: string, args: java.lang.Object): string;
            /**
             * Answers if this String has no characters, a length of zero.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Converts this String to a byte encoding using the specified Charset.
             */
            // @ts-ignore
            public getBytes(charset: java.nio.charset.Charset): number[];
            /**
             * Creates a new String by putting each element together joined by the delimiter. If an element is null, then "null" is used as string to join.
             */
            // @ts-ignore
            public static join(delimiter: java.lang.CharSequence, elements: java.lang.CharSequence): string;
            /**
             * Creates a new String by putting each element together joined by the delimiter. If an element is null, then "null" is used as string to join.
             */
            // @ts-ignore
            public static join(delimiter: java.lang.CharSequence, elements: java.lang.Iterable): string;
        }
    }
}
