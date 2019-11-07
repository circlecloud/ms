// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Package extends java.lang.Object {
            /**
             * Return the name of this package.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Return the title of the specification that this package implements.
             */
            // @ts-ignore
            public getSpecificationTitle(): string;
            /**
             * Returns the version number of the specification
             * that this package implements.
             * This version string must be a sequence of nonnegative decimal
             * integers separated by "."'s and may have leading zeros.
             * When version strings are compared the most significant
             * numbers are compared.
             */
            // @ts-ignore
            public getSpecificationVersion(): string;
            /**
             * Return the name of the organization, vendor,
             * or company that owns and maintains the specification
             * of the classes that implement this package.
             */
            // @ts-ignore
            public getSpecificationVendor(): string;
            /**
             * Return the title of this package.
             */
            // @ts-ignore
            public getImplementationTitle(): string;
            /**
             * Return the version of this implementation. It consists of any string
             * assigned by the vendor of this implementation and does
             * not have any particular syntax specified or expected by the Java
             * runtime. It may be compared for equality with other
             * package version strings used for this implementation
             * by this vendor for this package.
             */
            // @ts-ignore
            public getImplementationVersion(): string;
            /**
             * Returns the name of the organization,
             * vendor or company that provided this implementation.
             */
            // @ts-ignore
            public getImplementationVendor(): string;
            /**
             * Returns true if this package is sealed.
             */
            // @ts-ignore
            public isSealed(): boolean;
            /**
             * Returns true if this package is sealed with respect to the specified
             * code source url.
             */
            // @ts-ignore
            public isSealed(url: java.net.URL): boolean;
            /**
             * Compare this package's specification version with a
             * desired version. It returns true if
             * this packages specification version number is greater than or equal
             * to the desired version number. <p>
             * Version numbers are compared by sequentially comparing corresponding
             * components of the desired and specification strings.
             * Each component is converted as a decimal integer and the values
             * compared.
             * If the specification value is greater than the desired
             * value true is returned. If the value is less false is returned.
             * If the values are equal the period is skipped and the next pair of
             * components is compared.
             */
            // @ts-ignore
            public isCompatibleWith(desired: string): boolean;
            /**
             * Find a package by name in the callers {@code ClassLoader} instance.
             * The callers {@code ClassLoader} instance is used to find the package
             * instance corresponding to the named class. If the callers
             * {@code ClassLoader} instance is null then the set of packages loaded
             * by the system {@code ClassLoader} instance is searched to find the
             * named package. <p>
             * Packages have attributes for versions and specifications only if the class
             * loader created the package instance with the appropriate attributes. Typically,
             * those attributes are defined in the manifests that accompany the classes.
             */
            // @ts-ignore
            public static getPackage(name: string): java.lang.Package;
            /**
             * Get all the packages currently known for the caller's {@code ClassLoader}
             * instance.  Those packages correspond to classes loaded via or accessible by
             * name to that {@code ClassLoader} instance.  If the caller's
             * {@code ClassLoader} instance is the bootstrap {@code ClassLoader}
             * instance, which may be represented by {@code null} in some implementations,
             * only packages corresponding to classes loaded by the bootstrap
             * {@code ClassLoader} instance will be returned.
             */
            // @ts-ignore
            public static getPackages(): java.lang.Package[];
            /**
             * Return the hash code computed from the package name.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the string representation of this Package.
             * Its value is the string "package " and the package name.
             * If the package title is defined it is appended.
             * If the package version is defined it is appended.
             */
            // @ts-ignore
            public toString(): string;
            // @ts-ignore
            public getAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public isAnnotationPresent(annotationClass: java.lang.Class): boolean;
            // @ts-ignore
            public getAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
            // @ts-ignore
            public getAnnotations(): java.lang.annotation.Annotation[];
            // @ts-ignore
            public getDeclaredAnnotation(annotationClass: java.lang.Class): java.lang.annotation.Annotation;
            // @ts-ignore
            public getDeclaredAnnotationsByType(annotationClass: java.lang.Class): java.lang.annotation.Annotation[];
            // @ts-ignore
            public getDeclaredAnnotations(): java.lang.annotation.Annotation[];
        }
    }
}
