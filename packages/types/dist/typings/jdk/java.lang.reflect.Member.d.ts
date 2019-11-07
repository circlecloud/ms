declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface Member {
                // @ts-ignore
                 PUBLIC: number;
                // @ts-ignore
                 DECLARED: number;
                /**
                 * Returns the Class object representing the class or interface
                 * that declares the member or constructor represented by this Member.
                 */
                // @ts-ignore
                 getDeclaringClass(): java.lang.Class;
                /**
                 * Returns the simple name of the underlying member or constructor
                 * represented by this Member.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Returns the Java language modifiers for the member or
                 * constructor represented by this Member, as an integer.  The
                 * Modifier class should be used to decode the modifiers in
                 * the integer.
                 */
                // @ts-ignore
                 getModifiers(): number;
                /**
                 * Returns {@code true} if this member was introduced by
                 * the compiler; returns {@code false} otherwise.
                 */
                // @ts-ignore
                 isSynthetic(): boolean;
            }
        }
    }
}
