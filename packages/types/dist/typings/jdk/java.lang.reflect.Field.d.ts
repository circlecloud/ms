// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class Field extends java.lang.reflect.AccessibleObject {
                /**
                 * Returns the {@code Class} object representing the class or interface
                 * that declares the field represented by this {@code Field} object.
                 */
                // @ts-ignore
                public getDeclaringClass(): java.lang.Class;
                /**
                 * Returns the name of the field represented by this {@code Field} object.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Returns the Java language modifiers for the field represented
                 * by this {@code Field} object, as an integer. The {@code Modifier} class should
                 * be used to decode the modifiers.
                 */
                // @ts-ignore
                public getModifiers(): number;
                /**
                 * Returns {@code true} if this field represents an element of
                 * an enumerated type; returns {@code false} otherwise.
                 */
                // @ts-ignore
                public isEnumConstant(): boolean;
                /**
                 * Returns {@code true} if this field is a synthetic
                 * field; returns {@code false} otherwise.
                 */
                // @ts-ignore
                public isSynthetic(): boolean;
                /**
                 * Returns a {@code Class} object that identifies the
                 * declared type for the field represented by this
                 * {@code Field} object.
                 */
                // @ts-ignore
                public getType(): java.lang.Class;
                /**
                 * Returns a {@code Type} object that represents the declared type for
                 * the field represented by this {@code Field} object.
                 * <p>If the {@code Type} is a parameterized type, the
                 * {@code Type} object returned must accurately reflect the
                 * actual type parameters used in the source code.
                 * <p>If the type of the underlying field is a type variable or a
                 * parameterized type, it is created. Otherwise, it is resolved.
                 */
                // @ts-ignore
                public getGenericType(): java.lang.reflect.Type;
                /**
                 * Compares this {@code Field} against the specified object.  Returns
                 * true if the objects are the same.  Two {@code Field} objects are the same if
                 * they were declared by the same class and have the same name
                 * and type.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hashcode for this {@code Field}.  This is computed as the
                 * exclusive-or of the hashcodes for the underlying field's
                 * declaring class name and its name.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string describing this {@code Field}.  The format is
                 * the access modifiers for the field, if any, followed
                 * by the field type, followed by a space, followed by
                 * the fully-qualified name of the class declaring the field,
                 * followed by a period, followed by the name of the field.
                 * For example:
                 * <pre>
                 * public static final int java.lang.Thread.MIN_PRIORITY
                 * private int java.io.FileDescriptor.fd
                 * </pre>
                 * <p>The modifiers are placed in canonical order as specified by
                 * "The Java Language Specification".  This is {@code public},
                 * {@code protected} or {@code private} first, and then other
                 * modifiers in the following order: {@code static}, {@code final},
                 * {@code transient}, {@code volatile}.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns a string describing this {@code Field}, including
                 * its generic type.  The format is the access modifiers for the
                 * field, if any, followed by the generic field type, followed by
                 * a space, followed by the fully-qualified name of the class
                 * declaring the field, followed by a period, followed by the name
                 * of the field.
                 * <p>The modifiers are placed in canonical order as specified by
                 * "The Java Language Specification".  This is {@code public},
                 * {@code protected} or {@code private} first, and then other
                 * modifiers in the following order: {@code static}, {@code final},
                 * {@code transient}, {@code volatile}.
                 */
                // @ts-ignore
                public toGenericString(): string;
                /**
                 * Returns the value of the field represented by this {@code Field}, on
                 * the specified object. The value is automatically wrapped in an
                 * object if it has a primitive type.
                 * <p>The underlying field's value is obtained as follows:
                 * <p>If the underlying field is a static field, the {@code obj} argument
                 * is ignored; it may be null.
                 * <p>Otherwise, the underlying field is an instance field.  If the
                 * specified {@code obj} argument is null, the method throws a
                 * {@code NullPointerException}. If the specified object is not an
                 * instance of the class or interface declaring the underlying
                 * field, the method throws an {@code IllegalArgumentException}.
                 * <p>If this {@code Field} object is enforcing Java language access control, and
                 * the underlying field is inaccessible, the method throws an
                 * {@code IllegalAccessException}.
                 * If the underlying field is static, the class that declared the
                 * field is initialized if it has not already been initialized.
                 * <p>Otherwise, the value is retrieved from the underlying instance
                 * or static field.  If the field has a primitive type, the value
                 * is wrapped in an object before being returned, otherwise it is
                 * returned as is.
                 * <p>If the field is hidden in the type of {@code obj},
                 * the field's value is obtained according to the preceding rules.
                 */
                // @ts-ignore
                public get(obj: java.lang.Object): java.lang.Object;
                /**
                 * Gets the value of a static or instance {@code boolean} field.
                 */
                // @ts-ignore
                public getBoolean(obj: java.lang.Object): boolean;
                /**
                 * Gets the value of a static or instance {@code byte} field.
                 */
                // @ts-ignore
                public getByte(obj: java.lang.Object): number;
                /**
                 * Gets the value of a static or instance field of type
                 * {@code char} or of another primitive type convertible to
                 * type {@code char} via a widening conversion.
                 */
                // @ts-ignore
                public getChar(obj: java.lang.Object): string;
                /**
                 * Gets the value of a static or instance field of type
                 * {@code short} or of another primitive type convertible to
                 * type {@code short} via a widening conversion.
                 */
                // @ts-ignore
                public getShort(obj: java.lang.Object): number;
                /**
                 * Gets the value of a static or instance field of type
                 * {@code int} or of another primitive type convertible to
                 * type {@code int} via a widening conversion.
                 */
                // @ts-ignore
                public getInt(obj: java.lang.Object): number;
                /**
                 * Gets the value of a static or instance field of type
                 * {@code long} or of another primitive type convertible to
                 * type {@code long} via a widening conversion.
                 */
                // @ts-ignore
                public getLong(obj: java.lang.Object): number;
                /**
                 * Gets the value of a static or instance field of type
                 * {@code float} or of another primitive type convertible to
                 * type {@code float} via a widening conversion.
                 */
                // @ts-ignore
                public getFloat(obj: java.lang.Object): number;
                /**
                 * Gets the value of a static or instance field of type
                 * {@code double} or of another primitive type convertible to
                 * type {@code double} via a widening conversion.
                 */
                // @ts-ignore
                public getDouble(obj: java.lang.Object): number;
                /**
                 * Sets the field represented by this {@code Field} object on the
                 * specified object argument to the specified new value. The new
                 * value is automatically unwrapped if the underlying field has a
                 * primitive type.
                 * <p>The operation proceeds as follows:
                 * <p>If the underlying field is static, the {@code obj} argument is
                 * ignored; it may be null.
                 * <p>Otherwise the underlying field is an instance field.  If the
                 * specified object argument is null, the method throws a
                 * {@code NullPointerException}.  If the specified object argument is not
                 * an instance of the class or interface declaring the underlying
                 * field, the method throws an {@code IllegalArgumentException}.
                 * <p>If this {@code Field} object is enforcing Java language access control, and
                 * the underlying field is inaccessible, the method throws an
                 * {@code IllegalAccessException}.
                 * <p>If the underlying field is final, the method throws an
                 * {@code IllegalAccessException} unless {@code setAccessible(true)}
                 * has succeeded for this {@code Field} object
                 * and the field is non-static. Setting a final field in this way
                 * is meaningful only during deserialization or reconstruction of
                 * instances of classes with blank final fields, before they are
                 * made available for access by other parts of a program. Use in
                 * any other context may have unpredictable effects, including cases
                 * in which other parts of a program continue to use the original
                 * value of this field.
                 * <p>If the underlying field is of a primitive type, an unwrapping
                 * conversion is attempted to convert the new value to a value of
                 * a primitive type.  If this attempt fails, the method throws an
                 * {@code IllegalArgumentException}.
                 * <p>If, after possible unwrapping, the new value cannot be
                 * converted to the type of the underlying field by an identity or
                 * widening conversion, the method throws an
                 * {@code IllegalArgumentException}.
                 * <p>If the underlying field is static, the class that declared the
                 * field is initialized if it has not already been initialized.
                 * <p>The field is set to the possibly unwrapped and widened new value.
                 * <p>If the field is hidden in the type of {@code obj},
                 * the field's value is set according to the preceding rules.
                 */
                // @ts-ignore
                public set(obj: java.lang.Object, value: java.lang.Object): void;
                /**
                 * Sets the value of a field as a {@code boolean} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, zObj)},
                 * where {@code zObj} is a {@code Boolean} object and
                 * {@code zObj.booleanValue() == z}.
                 */
                // @ts-ignore
                public setBoolean(obj: java.lang.Object, z: boolean): void;
                /**
                 * Sets the value of a field as a {@code byte} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, bObj)},
                 * where {@code bObj} is a {@code Byte} object and
                 * {@code bObj.byteValue() == b}.
                 */
                // @ts-ignore
                public setByte(obj: java.lang.Object, b: number): void;
                /**
                 * Sets the value of a field as a {@code char} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, cObj)},
                 * where {@code cObj} is a {@code Character} object and
                 * {@code cObj.charValue() == c}.
                 */
                // @ts-ignore
                public setChar(obj: java.lang.Object, c: string): void;
                /**
                 * Sets the value of a field as a {@code short} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, sObj)},
                 * where {@code sObj} is a {@code Short} object and
                 * {@code sObj.shortValue() == s}.
                 */
                // @ts-ignore
                public setShort(obj: java.lang.Object, s: number): void;
                /**
                 * Sets the value of a field as an {@code int} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, iObj)},
                 * where {@code iObj} is a {@code Integer} object and
                 * {@code iObj.intValue() == i}.
                 */
                // @ts-ignore
                public setInt(obj: java.lang.Object, i: number): void;
                /**
                 * Sets the value of a field as a {@code long} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, lObj)},
                 * where {@code lObj} is a {@code Long} object and
                 * {@code lObj.longValue() == l}.
                 */
                // @ts-ignore
                public setLong(obj: java.lang.Object, l: number): void;
                /**
                 * Sets the value of a field as a {@code float} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, fObj)},
                 * where {@code fObj} is a {@code Float} object and
                 * {@code fObj.floatValue() == f}.
                 */
                // @ts-ignore
                public setFloat(obj: java.lang.Object, f: number): void;
                /**
                 * Sets the value of a field as a {@code double} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, dObj)},
                 * where {@code dObj} is a {@code Double} object and
                 * {@code dObj.doubleValue() == d}.
                 */
                // @ts-ignore
                public setDouble(obj: java.lang.Object, d: number): void;
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
                 * Returns an AnnotatedType object that represents the use of a type to specify
                 * the declared type of the field represented by this Field.
                 */
                // @ts-ignore
                public getAnnotatedType(): java.lang.reflect.AnnotatedType;
            }
        }
    }
}
