declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class Modifier extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static PUBLIC: number;
                // @ts-ignore
                public static PRIVATE: number;
                // @ts-ignore
                public static PROTECTED: number;
                // @ts-ignore
                public static STATIC: number;
                // @ts-ignore
                public static FINAL: number;
                // @ts-ignore
                public static SYNCHRONIZED: number;
                // @ts-ignore
                public static VOLATILE: number;
                // @ts-ignore
                public static TRANSIENT: number;
                // @ts-ignore
                public static NATIVE: number;
                // @ts-ignore
                public static INTERFACE: number;
                // @ts-ignore
                public static ABSTRACT: number;
                // @ts-ignore
                public static STRICT: number;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code public} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isPublic(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code private} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isPrivate(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code protected} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isProtected(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code static} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isStatic(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code final} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isFinal(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code synchronized} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isSynchronized(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code volatile} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isVolatile(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code transient} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isTransient(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code native} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isNative(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code interface} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isInterface(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code abstract} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isAbstract(mod: number): boolean;
                /**
                 * Return {@code true} if the integer argument includes the
                 * {@code strictfp} modifier, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isStrict(mod: number): boolean;
                /**
                 * Return a string describing the access modifier flags in
                 * the specified modifier. For example:
                 * <blockquote><pre>
                 * public final synchronized strictfp
                 * </pre></blockquote>
                 * The modifier names are returned in an order consistent with the
                 * suggested modifier orderings given in sections 8.1.1, 8.3.1, 8.4.3, 8.8.3, and 9.1.1 of
                 * <cite>The Java&trade; Language Specification</cite>.
                 * The full modifier ordering used by this method is:
                 * <blockquote> {@code
                 * public protected private abstract static final transient
                 * volatile synchronized native strictfp
                 * interface } </blockquote>
                 * The {@code interface} modifier discussed in this class is
                 * not a true modifier in the Java language and it appears after
                 * all other modifiers listed by this method.  This method may
                 * return a string of modifiers that are not valid modifiers of a
                 * Java entity; in other words, no checking is done on the
                 * possible validity of the combination of modifiers represented
                 * by the input.
                 * Note that to perform such checking for a known kind of entity,
                 * such as a constructor or method, first AND the argument of
                 * {@code toString} with the appropriate mask from a method like
                 * {@link #constructorModifiers} or {@link #methodModifiers}.
                 */
                // @ts-ignore
                public static toString(mod: number): string;
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a class.
                 */
                // @ts-ignore
                public static classModifiers(): number;
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to an interface.
                 */
                // @ts-ignore
                public static interfaceModifiers(): number;
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a constructor.
                 */
                // @ts-ignore
                public static constructorModifiers(): number;
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a method.
                 */
                // @ts-ignore
                public static methodModifiers(): number;
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a field.
                 */
                // @ts-ignore
                public static fieldModifiers(): number;
                /**
                 * Return an {@code int} value OR-ing together the source language
                 * modifiers that can be applied to a parameter.
                 */
                // @ts-ignore
                public static parameterModifiers(): number;
            }
        }
    }
}
