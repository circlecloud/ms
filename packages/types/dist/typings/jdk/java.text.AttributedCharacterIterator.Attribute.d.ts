declare namespace java {
    namespace text {
        namespace AttributedCharacterIterator {
            // @ts-ignore
             class Attribute extends java.lang.Object {
                /**
                 * Constructs an {@code Attribute} with the given name.
                 */
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                public static LANGUAGE: java.text.AttributedCharacterIterator.Attribute;
                // @ts-ignore
                public static READING: java.text.AttributedCharacterIterator.Attribute;
                // @ts-ignore
                public static INPUT_METHOD_SEGMENT: java.text.AttributedCharacterIterator.Attribute;
                /**
                 * Compares two objects for equality. This version only returns true
                 * for {@code x.equals(y)} if {@code x} and {@code y} refer
                 * to the same object, and guarantees this for all subclasses.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code value for the object. This version is identical to
                 * the one in {@code Object}, but is also final.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string representation of the object. This version returns the
                 * concatenation of class name, {@code "("}, a name identifying the attribute
                 * and {@code ")"}.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns the name of the attribute.
                 */
                // @ts-ignore
                protected getName(): string;
                /**
                 * Resolves instances being deserialized to the predefined constants.
                 */
                // @ts-ignore
                protected readResolve(): java.lang.Object;
            }
        }
    }
}
