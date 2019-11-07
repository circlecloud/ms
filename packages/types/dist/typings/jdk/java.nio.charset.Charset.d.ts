// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace charset {
            // @ts-ignore
            abstract class Charset extends java.lang.Object {
                /**
                 * Initializes a new charset with the given canonical name and alias
                 * set.
                 */
                // @ts-ignore
                constructor(canonicalName: string, aliases: string)
                /**
                 * Tells whether the named charset is supported.
                 */
                // @ts-ignore
                public static isSupported(charsetName: string): boolean;
                /**
                 * Returns a charset object for the named charset.
                 */
                // @ts-ignore
                public static forName(charsetName: string): java.nio.charset.Charset;
                /**
                 * Constructs a sorted map from canonical charset names to charset objects.
                 * <p> The map returned by this method will have one entry for each charset
                 * for which support is available in the current Java virtual machine.  If
                 * two or more supported charsets have the same canonical name then the
                 * resulting map will contain just one of them; which one it will contain
                 * is not specified. </p>
                 * <p> The invocation of this method, and the subsequent use of the
                 * resulting map, may cause time-consuming disk or network I/O operations
                 * to occur.  This method is provided for applications that need to
                 * enumerate all of the available charsets, for example to allow user
                 * charset selection.  This method is not used by the {@link #forName
                 * forName} method, which instead employs an efficient incremental lookup
                 * algorithm.
                 * <p> This method may return different results at different times if new
                 * charset providers are dynamically made available to the current Java
                 * virtual machine.  In the absence of such changes, the charsets returned
                 * by this method are exactly those that can be retrieved via the {@link
                 * #forName forName} method.  </p>
                 */
                // @ts-ignore
                public static availableCharsets(): java.util.SortedMap;
                /**
                 * Returns the default charset of this Java virtual machine.
                 * <p> The default charset is determined during virtual-machine startup and
                 * typically depends upon the locale and charset of the underlying
                 * operating system.
                 */
                // @ts-ignore
                public static defaultCharset(): java.nio.charset.Charset;
                /**
                 * Returns this charset's canonical name.
                 */
                // @ts-ignore
                public name(): string;
                /**
                 * Returns a set containing this charset's aliases.
                 */
                // @ts-ignore
                public aliases(): java.util.Set;
                /**
                 * Returns this charset's human-readable name for the default locale.
                 * <p> The default implementation of this method simply returns this
                 * charset's canonical name.  Concrete subclasses of this class may
                 * override this method in order to provide a localized display name. </p>
                 */
                // @ts-ignore
                public displayName(): string;
                /**
                 * Tells whether or not this charset is registered in the <a
                 * href="http://www.iana.org/assignments/character-sets">IANA Charset
                 * Registry</a>.
                 */
                // @ts-ignore
                public isRegistered(): boolean;
                /**
                 * Returns this charset's human-readable name for the given locale.
                 * <p> The default implementation of this method simply returns this
                 * charset's canonical name.  Concrete subclasses of this class may
                 * override this method in order to provide a localized display name. </p>
                 */
                // @ts-ignore
                public displayName(locale: java.util.Locale): string;
                /**
                 * Tells whether or not this charset contains the given charset.
                 * <p> A charset <i>C</i> is said to <i>contain</i> a charset <i>D</i> if,
                 * and only if, every character representable in <i>D</i> is also
                 * representable in <i>C</i>.  If this relationship holds then it is
                 * guaranteed that every string that can be encoded in <i>D</i> can also be
                 * encoded in <i>C</i> without performing any replacements.
                 * <p> That <i>C</i> contains <i>D</i> does not imply that each character
                 * representable in <i>C</i> by a particular byte sequence is represented
                 * in <i>D</i> by the same byte sequence, although sometimes this is the
                 * case.
                 * <p> Every charset contains itself.
                 * <p> This method computes an approximation of the containment relation:
                 * If it returns <tt>true</tt> then the given charset is known to be
                 * contained by this charset; if it returns <tt>false</tt>, however, then
                 * it is not necessarily the case that the given charset is not contained
                 * in this charset.
                 */
                // @ts-ignore
                public abstract contains(cs: java.nio.charset.Charset): boolean;
                /**
                 * Constructs a new decoder for this charset.
                 */
                // @ts-ignore
                public abstract newDecoder(): java.nio.charset.CharsetDecoder;
                /**
                 * Constructs a new encoder for this charset.
                 */
                // @ts-ignore
                public abstract newEncoder(): java.nio.charset.CharsetEncoder;
                /**
                 * Tells whether or not this charset supports encoding.
                 * <p> Nearly all charsets support encoding.  The primary exceptions are
                 * special-purpose <i>auto-detect</i> charsets whose decoders can determine
                 * which of several possible encoding schemes is in use by examining the
                 * input byte sequence.  Such charsets do not support encoding because
                 * there is no way to determine which encoding should be used on output.
                 * Implementations of such charsets should override this method to return
                 * <tt>false</tt>. </p>
                 */
                // @ts-ignore
                public canEncode(): boolean;
                /**
                 * Convenience method that decodes bytes in this charset into Unicode
                 * characters.
                 * <p> An invocation of this method upon a charset <tt>cs</tt> returns the
                 * same result as the expression
                 * <pre>
                 * cs.newDecoder()
                 * .onMalformedInput(CodingErrorAction.REPLACE)
                 * .onUnmappableCharacter(CodingErrorAction.REPLACE)
                 * .decode(bb); </pre>
                 * except that it is potentially more efficient because it can cache
                 * decoders between successive invocations.
                 * <p> This method always replaces malformed-input and unmappable-character
                 * sequences with this charset's default replacement byte array.  In order
                 * to detect such sequences, use the {@link
                 * CharsetDecoder#decode(java.nio.ByteBuffer)} method directly.  </p>
                 */
                // @ts-ignore
                public decode(bb: java.nio.ByteBuffer): java.nio.CharBuffer;
                /**
                 * Convenience method that encodes Unicode characters into bytes in this
                 * charset.
                 * <p> An invocation of this method upon a charset <tt>cs</tt> returns the
                 * same result as the expression
                 * <pre>
                 * cs.newEncoder()
                 * .onMalformedInput(CodingErrorAction.REPLACE)
                 * .onUnmappableCharacter(CodingErrorAction.REPLACE)
                 * .encode(bb); </pre>
                 * except that it is potentially more efficient because it can cache
                 * encoders between successive invocations.
                 * <p> This method always replaces malformed-input and unmappable-character
                 * sequences with this charset's default replacement string.  In order to
                 * detect such sequences, use the {@link
                 * CharsetEncoder#encode(java.nio.CharBuffer)} method directly.  </p>
                 */
                // @ts-ignore
                public encode(cb: java.nio.CharBuffer): java.nio.ByteBuffer;
                /**
                 * Convenience method that encodes a string into bytes in this charset.
                 * <p> An invocation of this method upon a charset <tt>cs</tt> returns the
                 * same result as the expression
                 * <pre>
                 * cs.encode(CharBuffer.wrap(s)); </pre>
                 */
                // @ts-ignore
                public encode(str: string): java.nio.ByteBuffer;
                /**
                 * Compares this charset to another.
                 * <p> Charsets are ordered by their canonical names, without regard to
                 * case. </p>
                 */
                // @ts-ignore
                public compareTo(that: java.nio.charset.Charset): number;
                /**
                 * Computes a hashcode for this charset.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Tells whether or not this object is equal to another.
                 * <p> Two charsets are equal if, and only if, they have the same canonical
                 * names.  A charset is never equal to any other type of object.  </p>
                 */
                // @ts-ignore
                public equals(ob: java.lang.Object): boolean;
                /**
                 * Returns a string describing this charset.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
