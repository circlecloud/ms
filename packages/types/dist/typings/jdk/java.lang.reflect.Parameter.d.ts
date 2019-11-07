// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class Parameter extends java.lang.Object {
                /**
                 * Compares based on the executable and the index.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code based on the executable's hash code and the
                 * index.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns true if the parameter has a name according to the class
                 * file; returns false otherwise. Whether a parameter has a name
                 * is determined by the {@literal MethodParameters} attribute of
                 * the method which declares the parameter.
                 */
                // @ts-ignore
                public isNamePresent(): boolean;
                /**
                 * Returns a string describing this parameter.  The format is the
                 * modifiers for the parameter, if any, in canonical order as
                 * recommended by <cite>The Java&trade; Language
                 * Specification</cite>, followed by the fully- qualified type of
                 * the parameter (excluding the last [] if the parameter is
                 * variable arity), followed by "..." if the parameter is variable
                 * arity, followed by a space, followed by the name of the
                 * parameter.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Return the {@code Executable} which declares this parameter.
                 */
                // @ts-ignore
                public getDeclaringExecutable(): java.lang.reflect.Executable;
                /**
                 * Get the modifier flags for this the parameter represented by
                 * this {@code Parameter} object.
                 */
                // @ts-ignore
                public getModifiers(): number;
                /**
                 * Returns the name of the parameter.  If the parameter's name is
                 * {@linkplain #isNamePresent() present}, then this method returns
                 * the name provided by the class file. Otherwise, this method
                 * synthesizes a name of the form argN, where N is the index of
                 * the parameter in the descriptor of the method which declares
                 * the parameter.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Returns a {@code Type} object that identifies the parameterized
                 * type for the parameter represented by this {@code Parameter}
                 * object.
                 */
                // @ts-ignore
                public getParameterizedType(): java.lang.reflect.Type;
                /**
                 * Returns a {@code Class} object that identifies the
                 * declared type for the parameter represented by this
                 * {@code Parameter} object.
                 */
                // @ts-ignore
                public getType(): java.lang.Class;
                /**
                 * Returns an AnnotatedType object that represents the use of a type to
                 * specify the type of the formal parameter represented by this Parameter.
                 */
                // @ts-ignore
                public getAnnotatedType(): java.lang.reflect.AnnotatedType;
                /**
                 * Returns {@code true} if this parameter is implicitly declared
                 * in source code; returns {@code false} otherwise.
                 */
                // @ts-ignore
                public isImplicit(): boolean;
                /**
                 * Returns {@code true} if this parameter is neither implicitly
                 * nor explicitly declared in source code; returns {@code false}
                 * otherwise.
                 */
                // @ts-ignore
                public isSynthetic(): boolean;
                /**
                 * Returns {@code true} if this parameter represents a variable
                 * argument list; returns {@code false} otherwise.
                 */
                // @ts-ignore
                public isVarArgs(): boolean;
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
                // @ts-ignore
                public getDeclaredAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
                // @ts-ignore
                public getDeclaredAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getAnnotations(): java.lang.annotation.Annotation[];
            }
        }
    }
}
