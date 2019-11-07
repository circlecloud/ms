// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class Method extends java.lang.reflect.Executable {
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getDeclaringClass(): java.lang.Class;
                /**
                 * Returns the name of the method represented by this {@code Method}
                 * object, as a {@code String}.
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
                 * Returns a {@code Class} object that represents the formal return type
                 * of the method represented by this {@code Method} object.
                 */
                // @ts-ignore
                public getReturnType(): java.lang.Class;
                /**
                 * Returns a {@code Type} object that represents the formal return
                 * type of the method represented by this {@code Method} object.
                 * <p>If the return type is a parameterized type,
                 * the {@code Type} object returned must accurately reflect
                 * the actual type parameters used in the source code.
                 * <p>If the return type is a type variable or a parameterized type, it
                 * is created. Otherwise, it is resolved.
                 */
                // @ts-ignore
                public getGenericReturnType(): java.lang.reflect.Type;
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
                 * Compares this {@code Method} against the specified object.  Returns
                 * true if the objects are the same.  Two {@code Methods} are the same if
                 * they were declared by the same class and have the same name
                 * and formal parameter types and return type.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hashcode for this {@code Method}.  The hashcode is computed
                 * as the exclusive-or of the hashcodes for the underlying
                 * method's declaring class name and the method's name.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string describing this {@code Method}.  The string is
                 * formatted as the method access modifiers, if any, followed by
                 * the method return type, followed by a space, followed by the
                 * class declaring the method, followed by a period, followed by
                 * the method name, followed by a parenthesized, comma-separated
                 * list of the method's formal parameter types. If the method
                 * throws checked exceptions, the parameter list is followed by a
                 * space, followed by the word throws followed by a
                 * comma-separated list of the thrown exception types.
                 * For example:
                 * <pre>
                 * public boolean java.lang.Object.equals(java.lang.Object)
                 * </pre>
                 * <p>The access modifiers are placed in canonical order as
                 * specified by "The Java Language Specification".  This is
                 * {@code public}, {@code protected} or {@code private} first,
                 * and then other modifiers in the following order:
                 * {@code abstract}, {@code default}, {@code static}, {@code final},
                 * {@code synchronized}, {@code native}, {@code strictfp}.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns a string describing this {@code Method}, including
                 * type parameters.  The string is formatted as the method access
                 * modifiers, if any, followed by an angle-bracketed
                 * comma-separated list of the method's type parameters, if any,
                 * followed by the method's generic return type, followed by a
                 * space, followed by the class declaring the method, followed by
                 * a period, followed by the method name, followed by a
                 * parenthesized, comma-separated list of the method's generic
                 * formal parameter types.
                 * If this method was declared to take a variable number of
                 * arguments, instead of denoting the last parameter as
                 * "<tt><i>Type</i>[]</tt>", it is denoted as
                 * "<tt><i>Type</i>...</tt>".
                 * A space is used to separate access modifiers from one another
                 * and from the type parameters or return type.  If there are no
                 * type parameters, the type parameter list is elided; if the type
                 * parameter list is present, a space separates the list from the
                 * class name.  If the method is declared to throw exceptions, the
                 * parameter list is followed by a space, followed by the word
                 * throws followed by a comma-separated list of the generic thrown
                 * exception types.
                 * <p>The access modifiers are placed in canonical order as
                 * specified by "The Java Language Specification".  This is
                 * {@code public}, {@code protected} or {@code private} first,
                 * and then other modifiers in the following order:
                 * {@code abstract}, {@code default}, {@code static}, {@code final},
                 * {@code synchronized}, {@code native}, {@code strictfp}.
                 */
                // @ts-ignore
                public toGenericString(): string;
                /**
                 * Invokes the underlying method represented by this {@code Method}
                 * object, on the specified object with the specified parameters.
                 * Individual parameters are automatically unwrapped to match
                 * primitive formal parameters, and both primitive and reference
                 * parameters are subject to method invocation conversions as
                 * necessary.
                 * <p>If the underlying method is static, then the specified {@code obj}
                 * argument is ignored. It may be null.
                 * <p>If the number of formal parameters required by the underlying method is
                 * 0, the supplied {@code args} array may be of length 0 or null.
                 * <p>If the underlying method is an instance method, it is invoked
                 * using dynamic method lookup as documented in The Java Language
                 * Specification, Second Edition, section 15.12.4.4; in particular,
                 * overriding based on the runtime type of the target object will occur.
                 * <p>If the underlying method is static, the class that declared
                 * the method is initialized if it has not already been initialized.
                 * <p>If the method completes normally, the value it returns is
                 * returned to the caller of invoke; if the value has a primitive
                 * type, it is first appropriately wrapped in an object. However,
                 * if the value has the type of an array of a primitive type, the
                 * elements of the array are <i>not</i> wrapped in objects; in
                 * other words, an array of primitive type is returned.  If the
                 * underlying method return type is void, the invocation returns
                 * null.
                 */
                // @ts-ignore
                public invoke(obj: java.lang.Object, args: java.lang.Object): java.lang.Object;
                /**
                 * Returns {@code true} if this method is a bridge
                 * method; returns {@code false} otherwise.
                 */
                // @ts-ignore
                public isBridge(): boolean;
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
                 * Returns {@code true} if this method is a default
                 * method; returns {@code false} otherwise.
                 * A default method is a public non-abstract instance method, that
                 * is, a non-static method with a body, declared in an interface
                 * type.
                 */
                // @ts-ignore
                public isDefault(): boolean;
                /**
                 * Returns the default value for the annotation member represented by
                 * this {@code Method} instance.  If the member is of a primitive type,
                 * an instance of the corresponding wrapper type is returned. Returns
                 * null if no default is associated with the member, or if the method
                 * instance does not represent a declared member of an annotation type.
                 */
                // @ts-ignore
                public getDefaultValue(): java.lang.Object;
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
            }
        }
    }
}
