// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class URLClassLoader extends java.security.SecureClassLoader {
            /**
             * Constructs a new URLClassLoader for the given URLs. The URLs will be
             * searched in the order specified for classes and resources after first
             * searching in the specified parent class loader. Any URL that ends with
             * a '/' is assumed to refer to a directory. Otherwise, the URL is assumed
             * to refer to a JAR file which will be downloaded and opened as needed.
             * <p>If there is a security manager, this method first
             * calls the security manager's {@code checkCreateClassLoader} method
             * to ensure creation of a class loader is allowed.
             */
            // @ts-ignore
            constructor(urls: java.net.URL, parent: java.lang.ClassLoader)
            /**
             * Constructs a new URLClassLoader for the specified URLs using the
             * default delegation parent {@code ClassLoader}. The URLs will
             * be searched in the order specified for classes and resources after
             * first searching in the parent class loader. Any URL that ends with
             * a '/' is assumed to refer to a directory. Otherwise, the URL is
             * assumed to refer to a JAR file which will be downloaded and opened
             * as needed.
             * <p>If there is a security manager, this method first
             * calls the security manager's {@code checkCreateClassLoader} method
             * to ensure creation of a class loader is allowed.
             */
            // @ts-ignore
            constructor(urls: java.net.URL)
            /**
             * Constructs a new URLClassLoader for the specified URLs, parent
             * class loader, and URLStreamHandlerFactory. The parent argument
             * will be used as the parent class loader for delegation. The
             * factory argument will be used as the stream handler factory to
             * obtain protocol handlers when creating new jar URLs.
             * <p>If there is a security manager, this method first
             * calls the security manager's {@code checkCreateClassLoader} method
             * to ensure creation of a class loader is allowed.
             */
            // @ts-ignore
            constructor(urls: java.net.URL, parent: java.lang.ClassLoader, factory: java.net.URLStreamHandlerFactory)
            /**
             * Returns an input stream for reading the specified resource.
             * If this loader is closed, then any resources opened by this method
             * will be closed.
             * <p> The search order is described in the documentation for {@link
             * #getResource(String)}.  </p>
             */
            // @ts-ignore
            public getResourceAsStream(name: string): java.io.InputStream;
            /**
             * Closes this URLClassLoader, so that it can no longer be used to load
             * new classes or resources that are defined by this loader.
             * Classes and resources defined by any of this loader's parents in the
             * delegation hierarchy are still accessible. Also, any classes or resources
             * that are already loaded, are still accessible.
             * <p>
             * In the case of jar: and file: URLs, it also closes any files
             * that were opened by it. If another thread is loading a
             * class when the {@code close} method is invoked, then the result of
             * that load is undefined.
             * <p>
             * The method makes a best effort attempt to close all opened files,
             * by catching {@link IOException}s internally. Unchecked exceptions
             * and errors are not caught. Calling close on an already closed
             * loader has no effect.
             * <p>
             */
            // @ts-ignore
            public close(): void;
            /**
             * Appends the specified URL to the list of URLs to search for
             * classes and resources.
             * <p>
             * If the URL specified is {@code null} or is already in the
             * list of URLs, or if this loader is closed, then invoking this
             * method has no effect.
             */
            // @ts-ignore
            protected addURL(url: java.net.URL): void;
            /**
             * Returns the search path of URLs for loading classes and resources.
             * This includes the original list of URLs specified to the constructor,
             * along with any URLs subsequently appended by the addURL() method.
             */
            // @ts-ignore
            public getURLs(): java.net.URL[];
            /**
             * Finds and loads the class with the specified name from the URL search
             * path. Any URLs referring to JAR files are loaded and opened as needed
             * until the class is found.
             */
            // @ts-ignore
            protected findClass(name: string): java.lang.Class;
            /**
             * Defines a new package by name in this ClassLoader. The attributes
             * contained in the specified Manifest will be used to obtain package
             * version and sealing information. For sealed packages, the additional
             * URL specifies the code source URL from which the package was loaded.
             */
            // @ts-ignore
            protected definePackage(name: string, man: java.util.jar.Manifest, url: java.net.URL): java.lang.Package;
            /**
             * Finds the resource with the specified name on the URL search path.
             */
            // @ts-ignore
            public findResource(name: string): java.net.URL;
            /**
             * Returns an Enumeration of URLs representing all of the resources
             * on the URL search path having the specified name.
             */
            // @ts-ignore
            public findResources(name: string): java.util.Enumeration;
            /**
             * Returns the permissions for the given codesource object.
             * The implementation of this method first calls super.getPermissions
             * and then adds permissions based on the URL of the codesource.
             * <p>
             * If the protocol of this URL is "jar", then the permission granted
             * is based on the permission that is required by the URL of the Jar
             * file.
             * <p>
             * If the protocol is "file" and there is an authority component, then
             * permission to connect to and accept connections from that authority
             * may be granted. If the protocol is "file"
             * and the path specifies a file, then permission to read that
             * file is granted. If protocol is "file" and the path is
             * a directory, permission is granted to read all files
             * and (recursively) all files and subdirectories contained in
             * that directory.
             * <p>
             * If the protocol is not "file", then permission
             * to connect to and accept connections from the URL's host is granted.
             */
            // @ts-ignore
            protected getPermissions(codesource: java.security.CodeSource): java.security.PermissionCollection;
            /**
             * Creates a new instance of URLClassLoader for the specified
             * URLs and parent class loader. If a security manager is
             * installed, the {@code loadClass} method of the URLClassLoader
             * returned by this method will invoke the
             * {@code SecurityManager.checkPackageAccess} method before
             * loading the class.
             */
            // @ts-ignore
            public static newInstance(urls: java.net.URL, parent: java.lang.ClassLoader): java.net.URLClassLoader;
            /**
             * Creates a new instance of URLClassLoader for the specified
             * URLs and default parent class loader. If a security manager is
             * installed, the {@code loadClass} method of the URLClassLoader
             * returned by this method will invoke the
             * {@code SecurityManager.checkPackageAccess} before
             * loading the class.
             */
            // @ts-ignore
            public static newInstance(urls: java.net.URL): java.net.URLClassLoader;
        }
    }
}
