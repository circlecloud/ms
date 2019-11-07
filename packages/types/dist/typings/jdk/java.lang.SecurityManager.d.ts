declare namespace java {
    namespace lang {
        // @ts-ignore
         class SecurityManager extends java.lang.Object {
            /**
             * Constructs a new <code>SecurityManager</code>.
             * <p> If there is a security manager already installed, this method first
             * calls the security manager's <code>checkPermission</code> method
             * with the <code>RuntimePermission("createSecurityManager")</code>
             * permission to ensure the calling thread has permission to create a new
             * security manager.
             * This may result in throwing a <code>SecurityException</code>.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected inCheck: boolean;
            /**
             * Tests if there is a security check in progress.
             */
            // @ts-ignore
            public getInCheck(): boolean;
            /**
             * Returns the current execution stack as an array of classes.
             * <p>
             * The length of the array is the number of methods on the execution
             * stack. The element at index <code>0</code> is the class of the
             * currently executing method, the element at index <code>1</code> is
             * the class of that method's caller, and so on.
             */
            // @ts-ignore
            protected getClassContext(): java.lang.Class[];
            /**
             * Returns the class loader of the most recently executing method from
             * a class defined using a non-system class loader. A non-system
             * class loader is defined as being a class loader that is not equal to
             * the system class loader (as returned
             * by {@link ClassLoader#getSystemClassLoader}) or one of its ancestors.
             * <p>
             * This method will return
             * <code>null</code> in the following three cases:
             * <ol>
             * <li>All methods on the execution stack are from classes
             * defined using the system class loader or one of its ancestors.
             * <li>All methods on the execution stack up to the first
             * "privileged" caller
             * (see {@link java.security.AccessController#doPrivileged})
             * are from classes
             * defined using the system class loader or one of its ancestors.
             * <li> A call to <code>checkPermission</code> with
             * <code>java.security.AllPermission</code> does not
             * result in a SecurityException.
             * </ol>
             */
            // @ts-ignore
            protected currentClassLoader(): java.lang.ClassLoader;
            /**
             * Returns the class of the most recently executing method from
             * a class defined using a non-system class loader. A non-system
             * class loader is defined as being a class loader that is not equal to
             * the system class loader (as returned
             * by {@link ClassLoader#getSystemClassLoader}) or one of its ancestors.
             * <p>
             * This method will return
             * <code>null</code> in the following three cases:
             * <ol>
             * <li>All methods on the execution stack are from classes
             * defined using the system class loader or one of its ancestors.
             * <li>All methods on the execution stack up to the first
             * "privileged" caller
             * (see {@link java.security.AccessController#doPrivileged})
             * are from classes
             * defined using the system class loader or one of its ancestors.
             * <li> A call to <code>checkPermission</code> with
             * <code>java.security.AllPermission</code> does not
             * result in a SecurityException.
             * </ol>
             */
            // @ts-ignore
            protected currentLoadedClass(): java.lang.Class;
            /**
             * Returns the stack depth of the specified class.
             */
            // @ts-ignore
            protected classDepth(name: string): number;
            /**
             * Returns the stack depth of the most recently executing method
             * from a class defined using a non-system class loader.  A non-system
             * class loader is defined as being a class loader that is not equal to
             * the system class loader (as returned
             * by {@link ClassLoader#getSystemClassLoader}) or one of its ancestors.
             * <p>
             * This method will return
             * -1 in the following three cases:
             * <ol>
             * <li>All methods on the execution stack are from classes
             * defined using the system class loader or one of its ancestors.
             * <li>All methods on the execution stack up to the first
             * "privileged" caller
             * (see {@link java.security.AccessController#doPrivileged})
             * are from classes
             * defined using the system class loader or one of its ancestors.
             * <li> A call to <code>checkPermission</code> with
             * <code>java.security.AllPermission</code> does not
             * result in a SecurityException.
             * </ol>
             */
            // @ts-ignore
            protected classLoaderDepth(): number;
            /**
             * Tests if a method from a class with the specified
             * name is on the execution stack.
             */
            // @ts-ignore
            protected inClass(name: string): boolean;
            /**
             * Basically, tests if a method from a class defined using a
             * class loader is on the execution stack.
             */
            // @ts-ignore
            protected inClassLoader(): boolean;
            /**
             * Creates an object that encapsulates the current execution
             * environment. The result of this method is used, for example, by the
             * three-argument <code>checkConnect</code> method and by the
             * two-argument <code>checkRead</code> method.
             * These methods are needed because a trusted method may be called
             * on to read a file or open a socket on behalf of another method.
             * The trusted method needs to determine if the other (possibly
             * untrusted) method would be allowed to perform the operation on its
             * own.
             * <p> The default implementation of this method is to return
             * an <code>AccessControlContext</code> object.
             */
            // @ts-ignore
            public getSecurityContext(): java.lang.Object;
            /**
             * Throws a <code>SecurityException</code> if the requested
             * access, specified by the given permission, is not permitted based
             * on the security policy currently in effect.
             * <p>
             * This method calls <code>AccessController.checkPermission</code>
             * with the given permission.
             */
            // @ts-ignore
            public checkPermission(perm: java.security.Permission): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * specified security context is denied access to the resource
             * specified by the given permission.
             * The context must be a security
             * context returned by a previous call to
             * <code>getSecurityContext</code> and the access control
             * decision is based upon the configured security policy for
             * that security context.
             * <p>
             * If <code>context</code> is an instance of
             * <code>AccessControlContext</code> then the
             * <code>AccessControlContext.checkPermission</code> method is
             * invoked with the specified permission.
             * <p>
             * If <code>context</code> is not an instance of
             * <code>AccessControlContext</code> then a
             * <code>SecurityException</code> is thrown.
             */
            // @ts-ignore
            public checkPermission(perm: java.security.Permission, context: java.lang.Object): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to create a new class loader.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("createClassLoader")</code>
             * permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkCreateClassLoader</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkCreateClassLoader(): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to modify the thread argument.
             * <p>
             * This method is invoked for the current security manager by the
             * <code>stop</code>, <code>suspend</code>, <code>resume</code>,
             * <code>setPriority</code>, <code>setName</code>, and
             * <code>setDaemon</code> methods of class <code>Thread</code>.
             * <p>
             * If the thread argument is a system thread (belongs to
             * the thread group with a <code>null</code> parent) then
             * this method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("modifyThread")</code> permission.
             * If the thread argument is <i>not</i> a system thread,
             * this method just returns silently.
             * <p>
             * Applications that want a stricter policy should override this
             * method. If this method is overridden, the method that overrides
             * it should additionally check to see if the calling thread has the
             * <code>RuntimePermission("modifyThread")</code> permission, and
             * if so, return silently. This is to ensure that code granted
             * that permission (such as the JDK itself) is allowed to
             * manipulate any thread.
             * <p>
             * If this method is overridden, then
             * <code>super.checkAccess</code> should
             * be called by the first statement in the overridden method, or the
             * equivalent security check should be placed in the overridden method.
             */
            // @ts-ignore
            public checkAccess(t: java.lang.Thread): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to modify the thread group argument.
             * <p>
             * This method is invoked for the current security manager when a
             * new child thread or child thread group is created, and by the
             * <code>setDaemon</code>, <code>setMaxPriority</code>,
             * <code>stop</code>, <code>suspend</code>, <code>resume</code>, and
             * <code>destroy</code> methods of class <code>ThreadGroup</code>.
             * <p>
             * If the thread group argument is the system thread group (
             * has a <code>null</code> parent) then
             * this method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("modifyThreadGroup")</code> permission.
             * If the thread group argument is <i>not</i> the system thread group,
             * this method just returns silently.
             * <p>
             * Applications that want a stricter policy should override this
             * method. If this method is overridden, the method that overrides
             * it should additionally check to see if the calling thread has the
             * <code>RuntimePermission("modifyThreadGroup")</code> permission, and
             * if so, return silently. This is to ensure that code granted
             * that permission (such as the JDK itself) is allowed to
             * manipulate any thread.
             * <p>
             * If this method is overridden, then
             * <code>super.checkAccess</code> should
             * be called by the first statement in the overridden method, or the
             * equivalent security check should be placed in the overridden method.
             */
            // @ts-ignore
            public checkAccess(g: java.lang.ThreadGroup): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to cause the Java Virtual Machine to
             * halt with the specified status code.
             * <p>
             * This method is invoked for the current security manager by the
             * <code>exit</code> method of class <code>Runtime</code>. A status
             * of <code>0</code> indicates success; other values indicate various
             * errors.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("exitVM."+status)</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkExit</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkExit(status: number): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to create a subprocess.
             * <p>
             * This method is invoked for the current security manager by the
             * <code>exec</code> methods of class <code>Runtime</code>.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>FilePermission(cmd,"execute")</code> permission
             * if cmd is an absolute path, otherwise it calls
             * <code>checkPermission</code> with
             * <code>FilePermission("&lt;&lt;ALL FILES&gt;&gt;","execute")</code>.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkExec</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkExec(cmd: string): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to dynamic link the library code
             * specified by the string argument file. The argument is either a
             * simple library name or a complete filename.
             * <p>
             * This method is invoked for the current security manager by
             * methods <code>load</code> and <code>loadLibrary</code> of class
             * <code>Runtime</code>.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("loadLibrary."+lib)</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkLink</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkLink(lib: string): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to read from the specified file
             * descriptor.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("readFileDescriptor")</code>
             * permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkRead</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkRead(fd: java.io.FileDescriptor): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to read the file specified by the
             * string argument.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>FilePermission(file,"read")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkRead</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkRead(file: string): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * specified security context is not allowed to read the file
             * specified by the string argument. The context must be a security
             * context returned by a previous call to
             * <code>getSecurityContext</code>.
             * <p> If <code>context</code> is an instance of
             * <code>AccessControlContext</code> then the
             * <code>AccessControlContext.checkPermission</code> method will
             * be invoked with the <code>FilePermission(file,"read")</code> permission.
             * <p> If <code>context</code> is not an instance of
             * <code>AccessControlContext</code> then a
             * <code>SecurityException</code> is thrown.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkRead</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkRead(file: string, context: java.lang.Object): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to write to the specified file
             * descriptor.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("writeFileDescriptor")</code>
             * permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkWrite</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkWrite(fd: java.io.FileDescriptor): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to write to the file specified by
             * the string argument.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>FilePermission(file,"write")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkWrite</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkWrite(file: string): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to delete the specified file.
             * <p>
             * This method is invoked for the current security manager by the
             * <code>delete</code> method of class <code>File</code>.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>FilePermission(file,"delete")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkDelete</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkDelete(file: string): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to open a socket connection to the
             * specified host and port number.
             * <p>
             * A port number of <code>-1</code> indicates that the calling
             * method is attempting to determine the IP address of the specified
             * host name.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>SocketPermission(host+":"+port,"connect")</code> permission if
             * the port is not equal to -1. If the port is equal to -1, then
             * it calls <code>checkPermission</code> with the
             * <code>SocketPermission(host,"resolve")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkConnect</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkConnect(host: string, port: number): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * specified security context is not allowed to open a socket
             * connection to the specified host and port number.
             * <p>
             * A port number of <code>-1</code> indicates that the calling
             * method is attempting to determine the IP address of the specified
             * host name.
             * <p> If <code>context</code> is not an instance of
             * <code>AccessControlContext</code> then a
             * <code>SecurityException</code> is thrown.
             * <p>
             * Otherwise, the port number is checked. If it is not equal
             * to -1, the <code>context</code>'s <code>checkPermission</code>
             * method is called with a
             * <code>SocketPermission(host+":"+port,"connect")</code> permission.
             * If the port is equal to -1, then
             * the <code>context</code>'s <code>checkPermission</code> method
             * is called with a
             * <code>SocketPermission(host,"resolve")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkConnect</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkConnect(host: string, port: number, context: java.lang.Object): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to wait for a connection request on
             * the specified local port number.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>SocketPermission("localhost:"+port,"listen")</code>.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkListen</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkListen(port: number): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not permitted to accept a socket connection from
             * the specified host and port number.
             * <p>
             * This method is invoked for the current security manager by the
             * <code>accept</code> method of class <code>ServerSocket</code>.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>SocketPermission(host+":"+port,"accept")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkAccept</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkAccept(host: string, port: number): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to use
             * (join/leave/send/receive) IP multicast.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>java.net.SocketPermission(maddr.getHostAddress(),
             * "accept,connect")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkMulticast</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkMulticast(maddr: java.net.InetAddress): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to use
             * (join/leave/send/receive) IP multicast.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>java.net.SocketPermission(maddr.getHostAddress(),
             * "accept,connect")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkMulticast</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkMulticast(maddr: java.net.InetAddress, ttl: number): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to access or modify the system
             * properties.
             * <p>
             * This method is used by the <code>getProperties</code> and
             * <code>setProperties</code> methods of class <code>System</code>.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>PropertyPermission("*", "read,write")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkPropertiesAccess</code>
             * at the point the overridden method would normally throw an
             * exception.
             * <p>
             */
            // @ts-ignore
            public checkPropertiesAccess(): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to access the system property with
             * the specified <code>key</code> name.
             * <p>
             * This method is used by the <code>getProperty</code> method of
             * class <code>System</code>.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>PropertyPermission(key, "read")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkPropertyAccess</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkPropertyAccess(key: string): void;
            /**
             * Returns <code>false</code> if the calling
             * thread is not trusted to bring up the top-level window indicated
             * by the <code>window</code> argument. In this case, the caller can
             * still decide to show the window, but the window should include
             * some sort of visual warning. If the method returns
             * <code>true</code>, then the window can be shown without any
             * special restrictions.
             * <p>
             * See class <code>Window</code> for more information on trusted and
             * untrusted windows.
             * <p>
             * This method calls
             * <code>checkPermission</code> with the
             * <code>AWTPermission("showWindowWithoutWarningBanner")</code> permission,
             * and returns <code>true</code> if a SecurityException is not thrown,
             * otherwise it returns <code>false</code>.
             * In the case of subset Profiles of Java SE that do not include the
             * {@code java.awt} package, {@code checkPermission} is instead called
             * to check the permission {@code java.security.AllPermission}.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkTopLevelWindow</code>
             * at the point the overridden method would normally return
             * <code>false</code>, and the value of
             * <code>super.checkTopLevelWindow</code> should
             * be returned.
             */
            // @ts-ignore
            public checkTopLevelWindow(window: java.lang.Object): boolean;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to initiate a print job request.
             * <p>
             * This method calls
             * <code>checkPermission</code> with the
             * <code>RuntimePermission("queuePrintJob")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkPrintJobAccess</code>
             * at the point the overridden method would normally throw an
             * exception.
             * <p>
             */
            // @ts-ignore
            public checkPrintJobAccess(): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to access the system clipboard.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>AWTPermission("accessClipboard")</code>
             * permission.
             * In the case of subset Profiles of Java SE that do not include the
             * {@code java.awt} package, {@code checkPermission} is instead called
             * to check the permission {@code java.security.AllPermission}.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkSystemClipboardAccess</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkSystemClipboardAccess(): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to access the AWT event queue.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>AWTPermission("accessEventQueue")</code> permission.
             * In the case of subset Profiles of Java SE that do not include the
             * {@code java.awt} package, {@code checkPermission} is instead called
             * to check the permission {@code java.security.AllPermission}.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkAwtEventQueueAccess</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkAwtEventQueueAccess(): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to access the package specified by
             * the argument.
             * <p>
             * This method is used by the <code>loadClass</code> method of class
             * loaders.
             * <p>
             * This method first gets a list of
             * restricted packages by obtaining a comma-separated list from
             * a call to
             * <code>java.security.Security.getProperty("package.access")</code>,
             * and checks to see if <code>pkg</code> starts with or equals
             * any of the restricted packages. If it does, then
             * <code>checkPermission</code> gets called with the
             * <code>RuntimePermission("accessClassInPackage."+pkg)</code>
             * permission.
             * <p>
             * If this method is overridden, then
             * <code>super.checkPackageAccess</code> should be called
             * as the first line in the overridden method.
             */
            // @ts-ignore
            public checkPackageAccess(pkg: string): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to define classes in the package
             * specified by the argument.
             * <p>
             * This method is used by the <code>loadClass</code> method of some
             * class loaders.
             * <p>
             * This method first gets a list of restricted packages by
             * obtaining a comma-separated list from a call to
             * <code>java.security.Security.getProperty("package.definition")</code>,
             * and checks to see if <code>pkg</code> starts with or equals
             * any of the restricted packages. If it does, then
             * <code>checkPermission</code> gets called with the
             * <code>RuntimePermission("defineClassInPackage."+pkg)</code>
             * permission.
             * <p>
             * If this method is overridden, then
             * <code>super.checkPackageDefinition</code> should be called
             * as the first line in the overridden method.
             */
            // @ts-ignore
            public checkPackageDefinition(pkg: string): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to set the socket factory used by
             * <code>ServerSocket</code> or <code>Socket</code>, or the stream
             * handler factory used by <code>URL</code>.
             * <p>
             * This method calls <code>checkPermission</code> with the
             * <code>RuntimePermission("setFactory")</code> permission.
             * <p>
             * If you override this method, then you should make a call to
             * <code>super.checkSetFactory</code>
             * at the point the overridden method would normally throw an
             * exception.
             * <p>
             */
            // @ts-ignore
            public checkSetFactory(): void;
            /**
             * Throws a <code>SecurityException</code> if the
             * calling thread is not allowed to access members.
             * <p>
             * The default policy is to allow access to PUBLIC members, as well
             * as access to classes that have the same class loader as the caller.
             * In all other cases, this method calls <code>checkPermission</code>
             * with the <code>RuntimePermission("accessDeclaredMembers")
             * </code> permission.
             * <p>
             * If this method is overridden, then a call to
             * <code>super.checkMemberAccess</code> cannot be made,
             * as the default implementation of <code>checkMemberAccess</code>
             * relies on the code being checked being at a stack depth of
             * 4.
             */
            // @ts-ignore
            public checkMemberAccess(clazz: java.lang.Class, which: number): void;
            /**
             * Determines whether the permission with the specified permission target
             * name should be granted or denied.
             * <p> If the requested permission is allowed, this method returns
             * quietly. If denied, a SecurityException is raised.
             * <p> This method creates a <code>SecurityPermission</code> object for
             * the given permission target name and calls <code>checkPermission</code>
             * with it.
             * <p> See the documentation for
             * <code>{@link java.security.SecurityPermission}</code> for
             * a list of possible permission target names.
             * <p> If you override this method, then you should make a call to
             * <code>super.checkSecurityAccess</code>
             * at the point the overridden method would normally throw an
             * exception.
             */
            // @ts-ignore
            public checkSecurityAccess(target: string): void;
            /**
             * Returns the thread group into which to instantiate any new
             * thread being created at the time this is being called.
             * By default, it returns the thread group of the current
             * thread. This should be overridden by a specific security
             * manager to return the appropriate thread group.
             */
            // @ts-ignore
            public getThreadGroup(): java.lang.ThreadGroup;
        }
    }
}
