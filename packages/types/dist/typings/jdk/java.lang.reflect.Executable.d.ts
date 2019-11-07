declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            abstract class Executable extends java.lang.reflect.AccessibleObject {
                /**
                 * Returns the {@code Class} object representing the class or interface
                 * that declares the executable represented by this object.
                 */
                // @ts-ignore
                public abstract getDeclaringClass(): java.lang.Class;
                /**
                 * Returns the name of the executable represented by this object.
                 */
                // @ts-ignore
                public abstract getName(): string;
                /**
                 * Returns the Java language {@linkplain Modifier modifiers} for
                 * the executable represented by this object.
                 */
                // @ts-ignore
                public abstract getModifiers(): number;
                /**
                 * Returns an array of {@code TypeVariable} objects that represent the
                 * type variables declared by the generic declaration represented by this
                 * {@code GenericDeclaration} object, in declaration order.  Returns an
                 * array of length 0 if the underlying generic declaration declares no type
                 * variables.
                 */
                // @ts-ignore
                public abstract getTypeParameters(): java.lang.reflect.TypeVariable[];
                /**
                 * Returns an array of {@code Class} objects that represent the formal
                 * parameter types, in declaration order, of the executable
                 * represented by this object.  Returns an array of length
                 * 0 if the underlying executable takes no parameters.
                 */
                // @ts-ignore
                public abstract getParameterTypes(): java.lang.Class[];
                /**
                 * Returns the number of formal parameters (whether explicitly
                 * declared or implicitly declared or neither) for the executable
                 * represented by this object.
                 */
                // @ts-ignore
                public getParameterCount(): number;
                /**
                 * Returns an array of {@code Type} objects that represent the formal
                 * parameter types, in declaration order, of the executable represented by
                 * this object. Returns an array of length 0 if the
                 * underlying executable takes no parameters.
                 * <p>If a formal parameter type is a parameterized type,
                 * the {@code Type} object returned for it must accurately reflect
                 * the actual type parameters used in the source code.
                 * <p>If a formal parameter type is a type variable or a parameterized
                 * type, it is created. Otherwise, it is resolved.
                 */
                // @ts-ignore
                public getGenericParameterTypes(): java.lang.reflect.Type[];
                /**
                 * Returns an array of {@code Parameter} objects that represent
                 * all the parameters to the underlying executable represented by
                 * this object.  Returns an array of length 0 if the executable
                 * has no parameters.
                 * <p>The parameters of the underlying executable do not necessarily
                 * have unique names, or names that are legal identifiers in the
                 * Java programming language (JLS 3.8).
                 */
                // @ts-ignore
                public getParameters(): java.lang.reflect.Parameter[];
                /**
                 * Returns an array of {@code Class} objects that represent the
                 * types of exceptions declared to be thrown by the underlying
                 * executable represented by this object.  Returns an array of
                 * length 0 if the executable declares no exceptions in its {@code
                 * throws} clause.
                 */
                // @ts-ignore
                public abstract getExceptionTypes(): java.lang.Class[];
                /**
                 * Returns an array of {@code Type} objects that represent the
                 * exceptions declared to be thrown by this executable object.
                 * Returns an array of length 0 if the underlying executable declares
                 * no exceptions in its {@code throws} clause.
                 * <p>If an exception type is a type variable or a parameterized
                 * type, it is created. Otherwise, it is resolved.
                 */
                // @ts-ignore
                public getGenericExceptionTypes(): java.lang.reflect.Type[];
                /**
                 * Returns a string describing this {@code Executable}, including
                 * any type parameters.
                 */
                // @ts-ignore
                public abstract toGenericString(): string;
                /**
                 * Returns {@code true} if this executable was declared to take a
                 * variable number of arguments; returns {@code false} otherwise.
                 */
                // @ts-ignore
                public isVarArgs(): boolean;
                /**
                 * Returns {@code true} if this executable is a synthetic
                 * construct; returns {@code false} otherwise.
                 */
                // @ts-ignore
                public isSynthetic(): boolean;
                /**
                 * Returns an array of arrays of {@code Annotation}s that
                 * represent the annotations on the formal parameters, in
                 * declaration order, of the {@code Executable} represented by
                 * this object.  Synthetic and mandated parameters (see
                 * explanation below), such as the outer "this" parameter to an
                 * inner class constructor will be represented in the returned
                 * array.  If the executable has no parameters (meaning no formal,
                 * no synthetic, and no mandated parameters), a zero-length array
                 * will be returned.  If the {@code Executable} has one or more
                 * parameters, a nested array of length zero is returned for each
                 * parameter with no annotations. The annotation objects contained
                 * in the returned arrays are serializable.  The caller of this
                 * method is free to modify the returned arrays; it will have no
                 * effect on the arrays returned to other callers.
                 * A compiler may add extra parameters that are implicitly
                 * declared in source ("mandated"), as well as parameters that
                 * are neither implicitly nor explicitly declared in source
                 * ("synthetic") to the parameter list for a method.  See {@link
                 * java.lang.reflect.Parameter} for more information.
                 */
                // @ts-ignore
                public abstract getParameterAnnotations(): java.lang.annotation.Annotation[][];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getDeclaredAnnotations(): java.lang.annotation.Annotation[];
                /**
                 * Returns an {@code AnnotatedType} object that represents the use of a type to
                 * specify the return type of the method/constructor represented by this
                 * Executable.
                 * If this {@code Executable} object represents a constructor, the {@code
                 * AnnotatedType} object represents the type of the constructed object.
                 * If this {@code Executable} object represents a method, the {@code
                 * AnnotatedType} object represents the use of a type to specify the return
                 * type of the method.
                 */
                // @ts-ignore
                public abstract getAnnotatedReturnType(): java.lang.reflect.AnnotatedType;
                /**
                 * Returns an {@code AnnotatedType} object that represents the use of a
                 * type to specify the receiver type of the method/constructor represented
                 * by this Executable object. The receiver type of a method/constructor is
                 * available only if the method/constructor has a <em>receiver
                 * parameter</em> (JLS 8.4.1).
                 * If this {@code Executable} object represents a constructor or instance
                 * method that does not have a receiver parameter, or has a receiver
                 * parameter with no annotations on its type, then the return value is an
                 * {@code AnnotatedType} object representing an element with no
                 * annotations.
                 * If this {@code Executable} object represents a static method, then the
                 * return value is null.
                 */
                // @ts-ignore
                public getAnnotatedReceiverType(): java.lang.reflect.AnnotatedType;
                /**
                 * Returns an array of {@code AnnotatedType} objects that represent the use
                 * of types to specify formal parameter types of the method/constructor
                 * represented by this Executable. The order of the objects in the array
                 * corresponds to the order of the formal parameter types in the
                 * declaration of the method/constructor.
                 * Returns an array of length 0 if the method/constructor declares no
                 * parameters.
                 */
                // @ts-ignore
                public getAnnotatedParameterTypes(): java.lang.reflect.AnnotatedType[];
                /**
                 * Returns an array of {@code AnnotatedType} objects that represent the use
                 * of types to specify the declared exceptions of the method/constructor
                 * represented by this Executable. The order of the objects in the array
                 * corresponds to the order of the exception types in the declaration of
                 * the method/constructor.
                 * Returns an array of length 0 if the method/constructor declares no
                 * exceptions.
                 */
                // @ts-ignore
                public getAnnotatedExceptionTypes(): java.lang.reflect.AnnotatedType[];
            }
        }
    }
}
