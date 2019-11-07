// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace ProcessBuilder {
            // @ts-ignore
            abstract class Redirect extends java.lang.Object {
                // @ts-ignore
                public static PIPE: java.lang.ProcessBuilder.Redirect;
                // @ts-ignore
                public static INHERIT: java.lang.ProcessBuilder.Redirect;
                /**
                 * Returns the type of this {@code Redirect}.
                 */
                // @ts-ignore
                public abstract type(): java.lang.ProcessBuilder.Redirect.Type;
                /**
                 * Returns the {@link File} source or destination associated
                 * with this redirect, or {@code null} if there is no such file.
                 */
                // @ts-ignore
                public file(): java.io.File;
                /**
                 * Returns a redirect to read from the specified file.
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.from(file).file() == file &&
                 * Redirect.from(file).type() == Redirect.Type.READ
                 * }</pre>
                 */
                // @ts-ignore
                public static from(file: java.io.File): java.lang.ProcessBuilder.Redirect;
                /**
                 * Returns a redirect to write to the specified file.
                 * If the specified file exists when the subprocess is started,
                 * its previous contents will be discarded.
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.to(file).file() == file &&
                 * Redirect.to(file).type() == Redirect.Type.WRITE
                 * }</pre>
                 */
                // @ts-ignore
                public static to(file: java.io.File): java.lang.ProcessBuilder.Redirect;
                /**
                 * Returns a redirect to append to the specified file.
                 * Each write operation first advances the position to the
                 * end of the file and then writes the requested data.
                 * Whether the advancement of the position and the writing
                 * of the data are done in a single atomic operation is
                 * system-dependent and therefore unspecified.
                 * <p>It will always be true that
                 * <pre> {@code
                 * Redirect.appendTo(file).file() == file &&
                 * Redirect.appendTo(file).type() == Redirect.Type.APPEND
                 * }</pre>
                 */
                // @ts-ignore
                public static appendTo(file: java.io.File): java.lang.ProcessBuilder.Redirect;
                /**
                 * Compares the specified object with this {@code Redirect} for
                 * equality.  Returns {@code true} if and only if the two
                 * objects are identical or both objects are {@code Redirect}
                 * instances of the same type associated with non-null equal
                 * {@code File} instances.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code value for this {@code Redirect}.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
