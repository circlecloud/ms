declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class Constructor extends java.lang.reflect.Executable {
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getDeclaringClass(): java.lang.Class;
                /**
                 * Returns the name of this constructor, as a string.  This is
                 * the binary name of the constructor's declaring class.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getModifiers(): number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getTypeParameters(): java.lang.reflect.TypeVariable[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getParameterTypes(): java.lang.Class[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getParameterCount(): number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getGenericParameterTypes(): java.lang.reflect.Type[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getExceptionTypes(): java.lang.Class[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getGenericExceptionTypes(): java.lang.reflect.Type[];
                /**
                 * Compares this {@code Constructor} against the specified object.
                 * Returns true if the objects are the same.  Two {@code Constructor} objects are
                 * the same if they were declared by the same class and have the
                 * same formal parameter types.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hashcode for this {@code Constructor}. The hashcode is
                 * the same as the hashcode for the underlying constructor's
                 * declaring class name.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string describing this {@code Constructor}.  The string is
                 * formatted as the constructor access modifiers, if any,
                 * followed by the fully-qualified name of the declaring class,
                 * followed by a parenthesized, comma-separated list of the
                 * constructor's formal parameter types.  For example:
                 * <pre>
                 * public java.util.Hashtable(int,float)
                 * </pre>
                 * <p>The only possible modifiers for constructors are the access
                 * modifiers {@code public}, {@code protected} or
                 * {@code private}.  Only one of these may appear, or none if the
                 * constructor has default (package) access.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns a string describing this {@code Constructor},
                 * including type parameters.  The string is formatted as the
                 * constructor access modifiers, if any, followed by an
                 * angle-bracketed comma separated list of the constructor's type
                 * parameters, if any, followed by the fully-qualified name of the
                 * declaring class, followed by a parenthesized, comma-separated
                 * list of the constructor's generic formal parameter types.
                 * If this constructor was declared to take a variable number of
                 * arguments, instead of denoting the last parameter as
                 * "<tt><i>Type</i>[]</tt>", it is denoted as
                 * "<tt><i>Type</i>...</tt>".
                 * A space is used to separate access modifiers from one another
                 * and from the type parameters or return type.  If there are no
                 * type parameters, the type parameter list is elided; if the type
                 * parameter list is present, a space separates the list from the
                 * class name.  If the constructor is declared to throw
                 * exceptions, the parameter list is followed by a space, followed
                 * by the word "{@code throws}" followed by a
                 * comma-separated list of the thrown exception types.
                 * <p>The only possible modifiers for constructors are the access
                 * modifiers {@code public}, {@code protected} or
                 * {@code private}.  Only one of these may appear, or none if the
                 * constructor has default (package) access.
                 */
                // @ts-ignore
                public toGenericString(): string;
                /**
                 * Uses the constructor represented by this {@code Constructor} object to
                 * create and initialize a new instance of the constructor's
                 * declaring class, with the specified initialization parameters.
                 * Individual parameters are automatically unwrapped to match
                 * primitive formal parameters, and both primitive and reference
                 * parameters are subject to method invocation conversions as necessary.
                 * <p>If the number of formal parameters required by the underlying constructor
                 * is 0, the supplied {@code initargs} array may be of length 0 or null.
                 * <p>If the constructor's declaring class is an inner class in a
                 * non-static context, the first argument to the constructor needs
                 * to be the enclosing instance; see section 15.9.3 of
                 * <cite>The Java&trade; Language Specification</cite>.
                 * <p>If the required access and argument checks succeed and the
                 * instantiation will proceed, the constructor's declaring class
                 * is initialized if it has not already been initialized.
                 * <p>If the constructor completes normally, returns the newly
                 * created and initialized instance.
                 */
                // @ts-ignore
                public newInstance(initargs: java.lang.Object): java.lang.Object;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public isVarArgs(): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public isSynthetic(): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getDeclaredAnnotations(): java.lang.annotation.Annotation[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getParameterAnnotations(): java.lang.annotation.Annotation[][];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getAnnotatedReturnType(): java.lang.reflect.AnnotatedType;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getAnnotatedReceiverType(): java.lang.reflect.AnnotatedType;
            }
        }
    }
}
