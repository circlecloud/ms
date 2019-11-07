declare namespace java {
    namespace util {
        // @ts-ignore
         class StringJoiner extends java.lang.Object {
            /**
             * Constructs a {@code StringJoiner} with no characters in it, with no
             * {@code prefix} or {@code suffix}, and a copy of the supplied
             * {@code delimiter}.
             * If no characters are added to the {@code StringJoiner} and methods
             * accessing the value of it are invoked, it will not return a
             * {@code prefix} or {@code suffix} (or properties thereof) in the result,
             * unless {@code setEmptyValue} has first been called.
             */
            // @ts-ignore
            constructor(delimiter: java.lang.CharSequence)
            /**
             * Constructs a {@code StringJoiner} with no characters in it using copies
             * of the supplied {@code prefix}, {@code delimiter} and {@code suffix}.
             * If no characters are added to the {@code StringJoiner} and methods
             * accessing the string value of it are invoked, it will return the
             * {@code prefix + suffix} (or properties thereof) in the result, unless
             * {@code setEmptyValue} has first been called.
             */
            // @ts-ignore
            constructor(delimiter: java.lang.CharSequence, prefix: java.lang.CharSequence, suffix: java.lang.CharSequence)
            /**
             * Sets the sequence of characters to be used when determining the string
             * representation of this {@code StringJoiner} and no elements have been
             * added yet, that is, when it is empty.  A copy of the {@code emptyValue}
             * parameter is made for this purpose. Note that once an add method has been
             * called, the {@code StringJoiner} is no longer considered empty, even if
             * the element(s) added correspond to the empty {@code String}.
             */
            // @ts-ignore
            public setEmptyValue(emptyValue: java.lang.CharSequence): java.util.StringJoiner;
            /**
             * Returns the current value, consisting of the {@code prefix}, the values
             * added so far separated by the {@code delimiter}, and the {@code suffix},
             * unless no elements have been added in which case, the
             * {@code prefix + suffix} or the {@code emptyValue} characters are returned
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Adds a copy of the given {@code CharSequence} value as the next
             * element of the {@code StringJoiner} value. If {@code newElement} is
             * {@code null}, then {@code "null"} is added.
             */
            // @ts-ignore
            public add(newElement: java.lang.CharSequence): java.util.StringJoiner;
            /**
             * Adds the contents of the given {@code StringJoiner} without prefix and
             * suffix as the next element if it is non-empty. If the given {@code
             * StringJoiner} is empty, the call has no effect.
             * <p>A {@code StringJoiner} is empty if {@link #add(CharSequence) add()}
             * has never been called, and if {@code merge()} has never been called
             * with a non-empty {@code StringJoiner} argument.
             * <p>If the other {@code StringJoiner} is using a different delimiter,
             * then elements from the other {@code StringJoiner} are concatenated with
             * that delimiter and the result is appended to this {@code StringJoiner}
             * as a single element.
             */
            // @ts-ignore
            public merge(other: java.util.StringJoiner): java.util.StringJoiner;
            /**
             * Returns the length of the {@code String} representation
             * of this {@code StringJoiner}. Note that if
             * no add methods have been called, then the length of the {@code String}
             * representation (either {@code prefix + suffix} or {@code emptyValue})
             * will be returned. The value should be equivalent to
             * {@code toString().length()}.
             */
            // @ts-ignore
            public length(): number;
        }
    }
}
