// @ts-nocheck
declare namespace java {
    namespace util {
        namespace jar {
            // @ts-ignore
             class Manifest extends java.lang.Object {
                /**
                 * Constructs a new, empty Manifest.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new Manifest from the specified input stream.
                 */
                // @ts-ignore
                constructor(is: java.io.InputStream)
                /**
                 * Constructs a new Manifest that is a copy of the specified Manifest.
                 */
                // @ts-ignore
                constructor(man: java.util.jar.Manifest)
                /**
                 * Returns the main Attributes for the Manifest.
                 */
                // @ts-ignore
                public getMainAttributes(): java.util.jar.Attributes;
                /**
                 * Returns a Map of the entries contained in this Manifest. Each entry
                 * is represented by a String name (key) and associated Attributes (value).
                 * The Map permits the {@code null} key, but no entry with a null key is
                 * created by {@link #read}, nor is such an entry written by using {@link
                 * #write}.
                 */
                // @ts-ignore
                public getEntries(): java.util.Map;
                /**
                 * Returns the Attributes for the specified entry name.
                 * This method is defined as:
                 * <pre>
                 * return (Attributes)getEntries().get(name)
                 * </pre>
                 * Though {@code null} is a valid {@code name}, when
                 * {@code getAttributes(null)} is invoked on a {@code Manifest}
                 * obtained from a jar file, {@code null} will be returned.  While jar
                 * files themselves do not allow {@code null}-named attributes, it is
                 * possible to invoke {@link #getEntries} on a {@code Manifest}, and
                 * on that result, invoke {@code put} with a null key and an
                 * arbitrary value.  Subsequent invocations of
                 * {@code getAttributes(null)} will return the just-{@code put}
                 * value.
                 * <p>
                 * Note that this method does not return the manifest's main attributes;
                 * see {@link #getMainAttributes}.
                 */
                // @ts-ignore
                public getAttributes(name: string): java.util.jar.Attributes;
                /**
                 * Clears the main Attributes as well as the entries in this Manifest.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Writes the Manifest to the specified OutputStream.
                 * Attributes.Name.MANIFEST_VERSION must be set in
                 * MainAttributes prior to invoking this method.
                 */
                // @ts-ignore
                public write(out: java.io.OutputStream): void;
                /**
                 * Reads the Manifest from the specified InputStream. The entry
                 * names and attributes read will be merged in with the current
                 * manifest entries.
                 */
                // @ts-ignore
                public read(is: java.io.InputStream): void;
                /**
                 * Returns true if the specified Object is also a Manifest and has
                 * the same main Attributes and entries.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * Returns the hash code for this Manifest.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a shallow copy of this Manifest.  The shallow copy is
                 * implemented as follows:
                 * <pre>
                 * public Object clone() { return new Manifest(this); }
                 * </pre>
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
