// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
        abstract class ClassLoader extends java.lang.Object {
            /**
             * Constructs a new instance of this class with the system
             * class loader as its parent.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of this class with the given
             * class loader as its parent.
             */
            // @ts-ignore
            constructor(parentLoader: java.lang.ClassLoader)
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format.
             */
            // @ts-ignore
            protected defineClass(classRep: number, offset: number, length: number): java.lang.Class;
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format.
             */
            // @ts-ignore
            protected defineClass(className: string, classRep: number, offset: number, length: number): java.lang.Class;
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format and assigns the new
             * class to the specified protection domain.
             */
            // @ts-ignore
            protected defineClass(className: string, classRep: number, offset: number, length: number, protectionDomain: java.security.ProtectionDomain): java.lang.Class;
            /**
             * Overridden by subclasses, by default throws ClassNotFoundException.
             * This method is called by loadClass() after the parent ClassLoader
             * has failed to find a loaded class of the same name.
             */
            // @ts-ignore
            protected findClass(className: string): java.lang.Class;
            /**
             * Attempts to find and return a class which has already
             * been loaded by the virtual machine. Note that the class
             * may not have been linked and the caller should call
             * resolveClass() on the result if necessary.
             */
            // @ts-ignore
            protected findLoadedClass(className: string): java.lang.Class;
            /**
             * Attempts to load a class using the system class loader.
             * Note that the class has already been been linked.
             */
            // @ts-ignore
            protected findSystemClass(className: string): java.lang.Class;
            /**
             * Returns the specified ClassLoader's parent.
             */
            // @ts-ignore
            public getParent(): java.lang.ClassLoader;
            /**
             * Answers an URL which can be used to access the resource
             * described by resName, using the class loader's resource lookup
             * algorithm. The default behavior is just to return null.
             */
            // @ts-ignore
            public getResource(resName: string): java.net.URL;
            /**
             * Answers an Enumeration of URL which can be used to access the resources
             * described by resName, using the class loader's resource lookup
             * algorithm.
             */
            // @ts-ignore
            public getResources(resName: string): java.util.Enumeration;
            /**
             * Answers a stream on a resource found by looking up
             * resName using the class loader's resource lookup
             * algorithm. The default behavior is just to return null.
             */
            // @ts-ignore
            public getResourceAsStream(resName: string): java.io.InputStream;
            /**
             * Convenience operation to obtain a reference to the system class loader.
             * The system class loader is the parent of any new <code>ClassLoader</code>
             * objects created in the course of an application and will normally be the
             * same <code>ClassLoader</code> as that used to launch an application.
             */
            // @ts-ignore
            public static getSystemClassLoader(): java.lang.ClassLoader;
            /**
             * Answers an URL specifying a resource which can be found by
             * looking up resName using the system class loader's resource
             * lookup algorithm.
             */
            // @ts-ignore
            public static getSystemResource(resName: string): java.net.URL;
            /**
             * Answers an Enumeration of URL containing all resources which can be
             * found by looking up resName using the system class loader's resource
             * lookup algorithm.
             */
            // @ts-ignore
            public static getSystemResources(resName: string): java.util.Enumeration;
            /**
             * Answers a stream on a resource found by looking up
             * resName using the system class loader's resource lookup
             * algorithm. Basically, the contents of the java.class.path
             * are searched in order, looking for a path which matches
             * the specified resource.
             */
            // @ts-ignore
            public static getSystemResourceAsStream(resName: string): java.io.InputStream;
            /**
             * Invoked by the Virtual Machine when resolving class references.
             * Equivalent to loadClass(className, false);
             */
            // @ts-ignore
            public loadClass(className: string): java.lang.Class;
            /**
             * Attempts to load the type <code>className</code> in the running VM,
             * optionally linking the type after a successful load.
             */
            // @ts-ignore
            protected loadClass(className: string, resolveClass: boolean): java.lang.Class;
            /**
             * Attempts to register the  the ClassLoader as being capable of
             * parallel class loading.  This requires that all superclasses must
             * also be parallel capable.
             */
            // @ts-ignore
            protected static registerAsParallelCapable(): boolean;
            /**
             * Answers the lock object for class loading in parallel.
             * If this ClassLoader object has been registered as parallel capable,
             * a dedicated object associated with this specified class name is returned.
             * Otherwise, current ClassLoader object is returned.
             */
            // @ts-ignore
            protected getClassLoadingLock(className: string): java.lang.Object;
            /**
             * Forces a class to be linked (initialized).  If the class has
             * already been linked this operation has no effect.
             */
            // @ts-ignore
            protected resolveClass(clazz: java.lang.Class): void;
            /**
             * Answers an URL which can be used to access the resource
             * described by resName, using the class loader's resource lookup
             * algorithm. The default behavior is just to return null.
             * This should be implemented by a ClassLoader.
             */
            // @ts-ignore
            protected findResource(resName: string): java.net.URL;
            /**
             * Answers an Enumeration of URL which can be used to access the resources
             * described by resName, using the class loader's resource lookup
             * algorithm. The default behavior is just to return an empty Enumeration.
             */
            // @ts-ignore
            protected findResources(resName: string): java.util.Enumeration;
            /**
             * Answers the absolute path of the file containing the library
             * associated with the given name, or null. If null is answered,
             * the system searches the directories specified by the system
             * property "java.library.path".
             */
            // @ts-ignore
            protected findLibrary(libName: string): string;
            /**
             * Attempt to locate the requested package. If no package information
             * can be located, null is returned.
             */
            // @ts-ignore
            protected getPackage(name: string): java.lang.Package;
            /**
             * Answers all the packages known to this class loader.
             */
            // @ts-ignore
            protected getPackages(): java.lang.Package[];
            /**
             * Define a new Package using the specified information.
             */
            // @ts-ignore
            protected definePackage(name: string, specTitle: string, specVersion: string, specVendor: string, implTitle: string, implVersion: string, implVendor: string, sealBase: java.net.URL): java.lang.Package;
            /**
             * Sets the signers of a class.
             */
            // @ts-ignore
            protected setSigners(c: java.lang.Class, signers: java.lang.Object): void;
            /**
             * Sets the assertion status of a class.
             */
            // @ts-ignore
            public setClassAssertionStatus(cname: string, enable: boolean): void;
            /**
             * Sets the assertion status of a package.
             */
            // @ts-ignore
            public setPackageAssertionStatus(pname: string, enable: boolean): void;
            /**
             * Sets the default assertion status of a classloader
             */
            // @ts-ignore
            public setDefaultAssertionStatus(enable: boolean): void;
            /**
             * Clears the default, package and class assertion status of a classloader
             */
            // @ts-ignore
            public clearAssertionStatus(): void;
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format and assigns the new
             * class to the specified protection domain.
             */
            // @ts-ignore
            protected defineClass(name: string, buffer: java.nio.ByteBuffer, domain: java.security.ProtectionDomain): java.lang.Class;
            // @ts-ignore
            protected clone(): java.lang.Object;
        }
    }
}
