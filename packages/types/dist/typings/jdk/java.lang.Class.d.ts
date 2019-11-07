// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Class extends java.lang.Object {
            /**
             * Answers a Class object which represents the class
             * named by the argument. The name should be the name
             * of a class as described in the class definition of
             * java.lang.Class, however Classes representing base
             * types can not be found using this method.
             */
            // @ts-ignore
            public static forName(className: string): java.lang.Class;
            /**
             * Answers a Class object which represents the class
             * named by the argument. The name should be the name
             * of a class as described in the class definition of
             * java.lang.Class, however Classes representing base
             * types can not be found using this method.
             * Security rules will be obeyed.
             */
            // @ts-ignore
            public static forName(className: string, initializeBoolean: boolean, classLoader: java.lang.ClassLoader): java.lang.Class;
            /**
             * Answers an array containing all public class members
             * of the class which the receiver represents and its
             * superclasses and interfaces
             */
            // @ts-ignore
            public getClasses(): java.lang.Class[];
            /**
             * Answers the classloader which was used to load the
             * class represented by the receiver. Answer null if the
             * class was loaded by the system class loader.
             */
            // @ts-ignore
            public getClassLoader(): java.lang.ClassLoader;
            /**
             * Answers a Class object which represents the receiver's
             * component type if the receiver represents an array type.
             * Otherwise answers nil. The component type of an array
             * type is the type of the elements of the array.
             */
            // @ts-ignore
            public getComponentType(): java.lang.Class;
            /**
             * Answers a public Constructor object which represents the
             * constructor described by the arguments.
             */
            // @ts-ignore
            public getConstructor(parameterTypes: java.lang.Class): java.lang.reflect.Constructor;
            /**
             * Answers an array containing Constructor objects describing
             * all constructors which are visible from the current execution
             * context.
             */
            // @ts-ignore
            public getConstructors(): java.lang.reflect.Constructor[];
            /**
             * Answers an array containing all class members of the class
             * which the receiver represents. Note that some of the fields
             * which are returned may not be visible in the current
             * execution context.
             */
            // @ts-ignore
            public getDeclaredClasses(): java.lang.Class[];
            /**
             * Answers a Constructor object which represents the
             * constructor described by the arguments.
             */
            // @ts-ignore
            public getDeclaredConstructor(parameterTypes: java.lang.Class): java.lang.reflect.Constructor;
            /**
             * Answers an array containing Constructor objects describing
             * all constructor which are defined by the receiver. Note that
             * some of the fields which are returned may not be visible
             * in the current execution context.
             */
            // @ts-ignore
            public getDeclaredConstructors(): java.lang.reflect.Constructor[];
            /**
             * Answers a Field object describing the field in the receiver
             * named by the argument. Note that the Constructor may not be
             * visible from the current execution context.
             */
            // @ts-ignore
            public getDeclaredField(name: string): java.lang.reflect.Field;
            /**
             * Answers an array containing Field objects describing
             * all fields which are defined by the receiver. Note that
             * some of the fields which are returned may not be visible
             * in the current execution context.
             */
            // @ts-ignore
            public getDeclaredFields(): java.lang.reflect.Field[];
            /**
             * Answers a Method object which represents the method
             * described by the arguments. Note that the associated
             * method may not be visible from the current execution
             * context.
             */
            // @ts-ignore
            public getDeclaredMethod(name: string, parameterTypes: java.lang.Class): java.lang.reflect.Method;
            /**
             * Answers an array containing Method objects describing
             * all methods which are defined by the receiver. Note that
             * some of the methods which are returned may not be visible
             * in the current execution context.
             */
            // @ts-ignore
            public getDeclaredMethods(): java.lang.reflect.Method[];
            /**
             * Answers the class which declared the class represented
             * by the receiver. This will return null if the receiver
             * is not a member of another class.
             */
            // @ts-ignore
            public getDeclaringClass(): java.lang.Class;
            /**
             * Answers a Field object describing the field in the receiver
             * named by the argument which must be visible from the current
             * execution context.
             */
            // @ts-ignore
            public getField(name: string): java.lang.reflect.Field;
            /**
             * Answers an array containing Field objects describing
             * all fields which are visible from the current execution
             * context.
             */
            // @ts-ignore
            public getFields(): java.lang.reflect.Field[];
            /**
             * Answers an array of Class objects which match the interfaces
             * specified in the receiver classes <code>implements</code>
             * declaration
             */
            // @ts-ignore
            public getInterfaces(): java.lang.Class[];
            /**
             * Answers a Method object which represents the method
             * described by the arguments.
             */
            // @ts-ignore
            public getMethod(name: string, parameterTypes: java.lang.Class): java.lang.reflect.Method;
            /**
             * Answers an array containing Method objects describing
             * all methods which are visible from the current execution
             * context.
             */
            // @ts-ignore
            public getMethods(): java.lang.reflect.Method[];
            /**
             * Answers an integer which which is the receiver's modifiers.
             * Note that the constants which describe the bits which are
             * returned are implemented in class java.lang.reflect.Modifier
             * which may not be available on the target.
             */
            // @ts-ignore
            public getModifiers(): number;
            /**
             * Answers the name of the class which the receiver represents.
             * For a description of the format which is used, see the class
             * definition of java.lang.Class.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Answers the ProtectionDomain of the receiver.
             * <p>
             * Note: In order to conserve space in embedded targets, we allow this
             * method to answer null for classes in the system protection domain
             * (i.e. for system classes). System classes are always given full
             * permissions (i.e. AllPermission). This is not changeable via the
             * java.security.Policy.
             */
            // @ts-ignore
            public getProtectionDomain(): java.security.ProtectionDomain;
            /**
             * Answers a URL referring to the
             * resource specified by resName. The mapping between
             * the resource name and the URL is managed by the
             * class's class loader.
             */
            // @ts-ignore
            public getResource(resName: string): java.net.URL;
            /**
             * Answers a read-only stream on the contents of the
             * resource specified by resName. The mapping between
             * the resource name and the stream is managed by the
             * class's class loader.
             */
            // @ts-ignore
            public getResourceAsStream(resName: string): java.io.InputStream;
            /**
             * Answers the signers for the class represented by the
             * receiver, or null if there are no signers.
             */
            // @ts-ignore
            public getSigners(): java.lang.Object[];
            /**
             * Answers the Class which represents the receiver's
             * superclass. For Classes which represent base types,
             * interfaces, and for java.lang.Object the method
             * answers null.
             */
            // @ts-ignore
            public getSuperclass(): java.lang.Class;
            /**
             * Answers true if the receiver represents an array class.
             */
            // @ts-ignore
            public isArray(): boolean;
            /**
             * Answers true if the type represented by the argument
             * can be converted via an identity conversion or a widening
             * reference conversion (i.e. if either the receiver or the
             * argument represent primitive types, only the identity
             * conversion applies).
             */
            // @ts-ignore
            public isAssignableFrom(cls: java.lang.Class): boolean;
            /**
             * Answers true if the argument is non-null and can be
             * cast to the type of the receiver. This is the runtime
             * version of the <code>instanceof</code> operator.
             */
            // @ts-ignore
            public isInstance(object: java.lang.Object): boolean;
            /**
             * Answers true if the receiver represents an interface.
             */
            // @ts-ignore
            public isInterface(): boolean;
            /**
             * Answers true if the receiver represents a base type.
             */
            // @ts-ignore
            public isPrimitive(): boolean;
            /**
             * Answers a new instance of the class represented by the
             * receiver, created by invoking the default (i.e. zero-argument)
             * constructor. If there is no such constructor, or if the
             * creation fails (either because of a lack of available memory or
             * because an exception is thrown by the constructor), an
             * InstantiationException is thrown. If the default constructor
             * exists, but is not accessible from the context where this
             * message is sent, an IllegalAccessException is thrown.
             */
            // @ts-ignore
            public newInstance(): java.lang.Object;
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a formatted string describing this Class. The string has
             * the following format:
             * <i>modifier1 modifier2 ... kind name&lt;typeparam1, typeparam2, ...&gt;</i>.
             * kind is one of <code>class</code>, <code>enum</code>, <code>interface</code>,
             * <code>&#64;interface</code>, or
             * the empty string for primitive types. The type parameter list is
             * omitted if there are no type parameters.
             */
            // @ts-ignore
            public toGenericString(): string;
            /**
             * Returns the Package of which this class is a member.
             * A class has a Package iff it was loaded from a SecureClassLoader.
             */
            // @ts-ignore
            public getPackage(): java.lang.Package;
            /**
             * Returns the assertion status for this class.
             * Assertion is enabled/disabled based on
             * classloader default, package or class default at runtime
             */
            // @ts-ignore
            public desiredAssertionStatus(): boolean;
            /**
             * Return the specified Annotation for this Class. Inherited Annotations
             * are searched.
             */
            // @ts-ignore
            public getAnnotation(annotation: java.lang.Class): java.lang.annotation.Annotation;
            /**
             * Return the directly declared Annotations for this Class, including the Annotations
             * inherited from superclasses.
             * If an annotation type has been included before, then next occurrences will not be included.
             * Repeated annotations are not included since they will be stored in their container annotation.
             * But container annotations are included. (If a container annotation is repeatable and it is repeated,
             * then these container annotations' container annotation is included. )
             */
            // @ts-ignore
            public getAnnotations(): java.lang.annotation.Annotation[];
            /**
             * Looks through directly declared annotations for this class, not including Annotations inherited from superclasses.
             */
            // @ts-ignore
            public getDeclaredAnnotation(annotation: java.lang.Class): java.lang.annotation.Annotation;
            /**
             * Return the annotated types for the implemented interfaces.
             */
            // @ts-ignore
            public getAnnotatedInterfaces(): java.lang.reflect.AnnotatedType[];
            /**
             * Return the annotated superclass of this class.
             */
            // @ts-ignore
            public getAnnotatedSuperclass(): java.lang.reflect.AnnotatedType;
            /**
             * Answers the type name of the class which the receiver represents.
             */
            // @ts-ignore
            public getTypeName(): string;
            /**
             * Returns the annotations only for this Class, not including Annotations inherited from superclasses.
             * It includes all the directly declared annotations.
             * Repeated annotations are not included but their container annotation does.
             */
            // @ts-ignore
            public getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            /**
             * Terms used for annotations :
             * Repeatable Annotation :
             * An annotation which can be used more than once for the same class declaration.
             * Repeatable annotations are annotated with Repeatable annotation which tells the
             * container annotation for this repeatable annotation.
             * Example =
             */
            // @ts-ignore
            public getDeclaredAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
            /**
             * Gets the specified type annotations of this class.
             * If the specified type is not repeatable annotation, then returned array size will be 0 or 1.
             * If specified type is repeatable annotation, then all the annotations of that type will be returned. Array size might be 0, 1 or more.
             * It searches through superclasses until it finds the inherited specified annotationClass.
             */
            // @ts-ignore
            public getAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
            /**
             * Answer if this class is an Annotation.
             */
            // @ts-ignore
            public isAnnotation(): boolean;
            /**
             * Answer if the specified Annotation exists for this Class. Inherited
             * Annotations are searched.
             */
            // @ts-ignore
            public isAnnotationPresent(annotation: java.lang.Class): boolean;
            /**
             * Cast this Class to a subclass of the specified Class.
             */
            // @ts-ignore
            public asSubclass(cls: java.lang.Class): java.lang.Class;
            /**
             * Cast the specified object to this Class.
             */
            // @ts-ignore
            public cast(object: java.lang.Object): java.lang.Object;
            /**
             * Answer if this Class is an enum.
             */
            // @ts-ignore
            public isEnum(): boolean;
            /**
             * Answer the array of enum constants for this Class. Returns null if
             * this class is not an enum.
             */
            // @ts-ignore
            public getEnumConstants(): java.lang.Object[];
            /**
             * Answer if this Class is synthetic. A synthetic Class is created by
             * the compiler.
             */
            // @ts-ignore
            public isSynthetic(): boolean;
            /**
             * Answers an array of TypeVariable for the generic parameters declared
             * on this Class.
             */
            // @ts-ignore
            public getTypeParameters(): java.lang.reflect.TypeVariable[];
            /**
             * Answers an array of Type for the Class objects which match the
             * interfaces specified in the receiver classes <code>implements</code>
             * declaration.
             */
            // @ts-ignore
            public getGenericInterfaces(): java.lang.reflect.Type[];
            /**
             * Answers the Type for the Class which represents the receiver's
             * superclass. For classes which represent base types,
             * interfaces, and for java.lang.Object the method
             * answers null.
             */
            // @ts-ignore
            public getGenericSuperclass(): java.lang.reflect.Type;
            /**
             * If this Class is defined inside a constructor, return the Constructor.
             */
            // @ts-ignore
            public getEnclosingConstructor(): java.lang.reflect.Constructor;
            /**
             * If this Class is defined inside a method, return the Method.
             */
            // @ts-ignore
            public getEnclosingMethod(): java.lang.reflect.Method;
            /**
             * Return the enclosing Class of this Class. Unlike getDeclaringClass(),
             * this method works on any nested Class, not just classes nested directly
             * in other classes.
             */
            // @ts-ignore
            public getEnclosingClass(): java.lang.Class;
            /**
             * Return the simple name of this Class. The simple name does not include
             * the package or the name of the enclosing class. The simple name of an
             * anonymous class is "".
             */
            // @ts-ignore
            public getSimpleName(): string;
            /**
             * Return the canonical name of this Class. The canonical name is null
             * for a local or anonymous class. The canonical name includes the package
             * and the name of the enclosing class.
             */
            // @ts-ignore
            public getCanonicalName(): string;
            /**
             * Answer if this Class is anonymous. An unnamed Class defined
             * inside a method.
             */
            // @ts-ignore
            public isAnonymousClass(): boolean;
            /**
             * Answer if this Class is local. A named Class defined inside
             * a method.
             */
            // @ts-ignore
            public isLocalClass(): boolean;
            /**
             * Answer if this Class is a member Class. A Class defined inside another
             * Class.
             */
            // @ts-ignore
            public isMemberClass(): boolean;
        }
    }
}
