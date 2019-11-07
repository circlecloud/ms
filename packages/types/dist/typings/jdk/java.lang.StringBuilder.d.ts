declare namespace java {
    namespace lang {
        // @ts-ignore
         class StringBuilder extends java.lang.AbstractStringBuilder {
            /**
             * Constructs a new StringBuffer using the default capacity.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new StringBuilder using the specified capacity.
             */
            // @ts-ignore
            constructor(capacity: number)
            /**
             * Constructs a new StringBuilder containing the characters in
             * the specified string and the default capacity.
             */
            // @ts-ignore
            constructor(string: string)
            /**
             * Constructs a new StringBuilder containing the characters in
             * the specified CharSequence and the default capacity.
             */
            // @ts-ignore
            constructor(sequence: java.lang.CharSequence)
            /**
             * Adds the character array to the end of this StringBuilder.
             */
            // @ts-ignore
            public append(chars: string): java.lang.StringBuilder;
            /**
             * Adds the specified sequence of characters to the end of
             * this StringBuilder.
             */
            // @ts-ignore
            public append(chars: string, start: number, length: number): java.lang.StringBuilder;
            /**
             * Adds the specified character to the end of
             * this StringBuilder.
             */
            // @ts-ignore
            public append(ch: string): java.lang.StringBuilder;
            /**
             * Adds the string representation of the specified double to the
             * end of this StringBuilder.
             */
            // @ts-ignore
            public append(value: number): java.lang.StringBuilder;
            /**
             * Adds the string representation of the specified float to the
             * end of this StringBuilder.
             */
            // @ts-ignore
            public append(value: number): java.lang.StringBuilder;
            /**
             * Adds the string representation of the specified integer to the
             * end of this StringBuilder.
             */
            // @ts-ignore
            public append(value: number): java.lang.StringBuilder;
            /**
             * Adds the string representation of the specified long to the
             * end of this StringBuilder.
             */
            // @ts-ignore
            public append(value: number): java.lang.StringBuilder;
            /**
             * Adds the string representation of the specified object to the
             * end of this StringBuilder.
             */
            // @ts-ignore
            public append(value: java.lang.Object): java.lang.StringBuilder;
            /**
             * Adds the specified string to the end of this StringBuilder.
             */
            // @ts-ignore
            public append(string: string): java.lang.StringBuilder;
            /**
             * Adds the string representation of the specified boolean to the
             * end of this StringBuilder.
             */
            // @ts-ignore
            public append(value: boolean): java.lang.StringBuilder;
            /**
             * Answers the number of characters this StringBuilder can hold without
             * growing.
             */
            // @ts-ignore
            public capacity(): number;
            /**
             * Answers the character at the specified offset in this StringBuilder.
             */
            // @ts-ignore
            public charAt(index: number): string;
            /**
             * Deletes a range of characters.
             */
            // @ts-ignore
            public delete(start: number, end: number): java.lang.StringBuilder;
            /**
             * Deletes a single character
             */
            // @ts-ignore
            public deleteCharAt(location: number): java.lang.StringBuilder;
            /**
             * Ensures that this StringBuilder can hold the specified number of characters
             * without growing.
             */
            // @ts-ignore
            public ensureCapacity(min: number): void;
            /**
             * Copies the specified characters in this StringBuilder to the character array
             * starting at the specified offset in the character array.
             */
            // @ts-ignore
            public getChars(start: number, end: number, buffer: string, index: number): void;
            /**
             * Inserts the character array at the specified offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, chars: string): java.lang.StringBuilder;
            /**
             * Inserts the specified sequence of characters at the
             * specified offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, chars: string, start: number, length: number): java.lang.StringBuilder;
            /**
             * Inserts the character at the specified offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, ch: string): java.lang.StringBuilder;
            /**
             * Inserts the string representation of the specified double at the specified
             * offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, value: number): java.lang.StringBuilder;
            /**
             * Inserts the string representation of the specified float at the specified
             * offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, value: number): java.lang.StringBuilder;
            /**
             * Inserts the string representation of the specified integer at the specified
             * offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, value: number): java.lang.StringBuilder;
            /**
             * Inserts the string representation of the specified long at the specified
             * offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, value: number): java.lang.StringBuilder;
            /**
             * Inserts the string representation of the specified object at the specified
             * offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, value: java.lang.Object): java.lang.StringBuilder;
            /**
             * Inserts the string at the specified offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, string: string): java.lang.StringBuilder;
            /**
             * Inserts the string representation of the specified boolean at the specified
             * offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, value: boolean): java.lang.StringBuilder;
            /**
             * Answers the size of this StringBuilder.
             */
            // @ts-ignore
            public length(): number;
            /**
             * Replace a range of characters with the characters in the specified String.
             */
            // @ts-ignore
            public replace(start: number, end: number, string: string): java.lang.StringBuilder;
            /**
             * Reverses the order of characters in this StringBuilder.
             */
            // @ts-ignore
            public reverse(): java.lang.StringBuilder;
            /**
             * Sets the character at the specified offset in this StringBuilder.
             */
            // @ts-ignore
            public setCharAt(index: number, ch: string): void;
            /**
             * Sets the length of this StringBuilder to the specified length. If there
             * are more than length characters in this StringBuilder, the characters
             * at end are lost. If there are less than length characters in the
             * StringBuilder, the additional characters are set to {@code \\u0000}.
             */
            // @ts-ignore
            public setLength(length: number): void;
            /**
             * Copies a range of characters into a new String.
             */
            // @ts-ignore
            public substring(start: number): string;
            /**
             * Copies a range of characters into a new String.
             */
            // @ts-ignore
            public substring(start: number, end: number): string;
            /**
             * Answers the contents of this StringBuilder.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Adds the specified StringBuffer to the end of this StringBuilder.
             */
            // @ts-ignore
            public append(buffer: java.lang.StringBuffer): java.lang.StringBuilder;
            /**
             * Copies a range of characters into a new String.
             */
            // @ts-ignore
            public subSequence(start: number, end: number): java.lang.CharSequence;
            /**
             * Searches in this StringBuilder for the first index of the specified character. The
             * search for the character starts at the beginning and moves towards the
             * end.
             */
            // @ts-ignore
            public indexOf(string: string): number;
            /**
             * Searches in this StringBuilder for the index of the specified character. The
             * search for the character starts at the specified offset and moves towards
             * the end.
             */
            // @ts-ignore
            public indexOf(subString: string, start: number): number;
            /**
             * Searches in this StringBuilder for the last index of the specified character. The
             * search for the character starts at the end and moves towards the beginning.
             */
            // @ts-ignore
            public lastIndexOf(string: string): number;
            /**
             * Searches in this StringBuilder for the index of the specified character. The
             * search for the character starts at the specified offset and moves towards
             * the beginning.
             */
            // @ts-ignore
            public lastIndexOf(subString: string, start: number): number;
            /**
             * Adds the specified CharSequence to the end of this StringBuilder.
             */
            // @ts-ignore
            public append(sequence: java.lang.CharSequence): java.lang.StringBuilder;
            /**
             * Adds the specified CharSequence to the end of this StringBuilder.
             */
            // @ts-ignore
            public append(sequence: java.lang.CharSequence, start: number, end: number): java.lang.StringBuilder;
            /**
             * Inserts the CharSequence at the specified offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, sequence: java.lang.CharSequence): java.lang.StringBuilder;
            /**
             * Inserts the CharSequence at the specified offset in this StringBuilder.
             */
            // @ts-ignore
            public insert(index: number, sequence: java.lang.CharSequence, start: number, end: number): java.lang.StringBuilder;
            /**
             * Optionally modify the underlying char array to only
             * be large enough to hold the characters in this StringBuffer.
             */
            // @ts-ignore
            public trimToSize(): void;
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
             * Returns the index of the code point that was offset by {@code codePointCount}.
             */
            // @ts-ignore
            public offsetByCodePoints(start: number, codePointCount: number): number;
            /**
             * Adds the specified code point to the end of this StringBuffer.
             */
            // @ts-ignore
            public appendCodePoint(codePoint: number): java.lang.StringBuilder;
        }
    }
}
