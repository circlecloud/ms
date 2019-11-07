// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class ObjectInputStream extends java.io.InputStream {
            /**
             * Creates an ObjectInputStream that reads from the specified InputStream.
             * A serialization stream header is read from the stream and verified.
             * This constructor will block until the corresponding ObjectOutputStream
             * has written and flushed the header.
             * <p>If a security manager is installed, this constructor will check for
             * the "enableSubclassImplementation" SerializablePermission when invoked
             * directly or indirectly by the constructor of a subclass which overrides
             * the ObjectInputStream.readFields or ObjectInputStream.readUnshared
             * methods.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Provide a way for subclasses that are completely reimplementing
             * ObjectInputStream to not have to allocate private data just used by this
             * implementation of ObjectInputStream.
             * <p>If there is a security manager installed, this method first calls the
             * security manager's <code>checkPermission</code> method with the
             * <code>SerializablePermission("enableSubclassImplementation")</code>
             * permission to ensure it's ok to enable subclassing.
             */
            // @ts-ignore
            constructor()
            /**
             * Read an object from the ObjectInputStream.  The class of the object, the
             * signature of the class, and the values of the non-transient and
             * non-static fields of the class and all of its supertypes are read.
             * Default deserializing for a class can be overridden using the writeObject
             * and readObject methods.  Objects referenced by this object are read
             * transitively so that a complete equivalent graph of objects is
             * reconstructed by readObject.
             * <p>The root object is completely restored when all of its fields and the
             * objects it references are completely restored.  At this point the object
             * validation callbacks are executed in order based on their registered
             * priorities. The callbacks are registered by objects (in the readObject
             * special methods) as they are individually restored.
             * <p>Exceptions are thrown for problems with the InputStream and for
             * classes that should not be deserialized.  All exceptions are fatal to
             * the InputStream and leave it in an indeterminate state; it is up to the
             * caller to ignore or recover the stream state.
             */
            // @ts-ignore
            public readObject(): java.lang.Object;
            /**
             * This method is called by trusted subclasses of ObjectOutputStream that
             * constructed ObjectOutputStream using the protected no-arg constructor.
             * The subclass is expected to provide an override method with the modifier
             * "final".
             */
            // @ts-ignore
            protected readObjectOverride(): java.lang.Object;
            /**
             * Reads an "unshared" object from the ObjectInputStream.  This method is
             * identical to readObject, except that it prevents subsequent calls to
             * readObject and readUnshared from returning additional references to the
             * deserialized instance obtained via this call.  Specifically:
             * <ul>
             * <li>If readUnshared is called to deserialize a back-reference (the
             * stream representation of an object which has been written
             * previously to the stream), an ObjectStreamException will be
             * thrown.
             * <li>If readUnshared returns successfully, then any subsequent attempts
             * to deserialize back-references to the stream handle deserialized
             * by readUnshared will cause an ObjectStreamException to be thrown.
             * </ul>
             * Deserializing an object via readUnshared invalidates the stream handle
             * associated with the returned object.  Note that this in itself does not
             * always guarantee that the reference returned by readUnshared is unique;
             * the deserialized object may define a readResolve method which returns an
             * object visible to other parties, or readUnshared may return a Class
             * object or enum constant obtainable elsewhere in the stream or through
             * external means. If the deserialized object defines a readResolve method
             * and the invocation of that method returns an array, then readUnshared
             * returns a shallow clone of that array; this guarantees that the returned
             * array object is unique and cannot be obtained a second time from an
             * invocation of readObject or readUnshared on the ObjectInputStream,
             * even if the underlying data stream has been manipulated.
             * <p>ObjectInputStream subclasses which override this method can only be
             * constructed in security contexts possessing the
             * "enableSubclassImplementation" SerializablePermission; any attempt to
             * instantiate such a subclass without this permission will cause a
             * SecurityException to be thrown.
             */
            // @ts-ignore
            public readUnshared(): java.lang.Object;
            /**
             * Read the non-static and non-transient fields of the current class from
             * this stream.  This may only be called from the readObject method of the
             * class being deserialized. It will throw the NotActiveException if it is
             * called otherwise.
             */
            // @ts-ignore
            public defaultReadObject(): void;
            /**
             * Reads the persistent fields from the stream and makes them available by
             * name.
             */
            // @ts-ignore
            public readFields(): java.io.ObjectInputStream.GetField;
            /**
             * Register an object to be validated before the graph is returned.  While
             * similar to resolveObject these validations are called after the entire
             * graph has been reconstituted.  Typically, a readObject method will
             * register the object with the stream so that when all of the objects are
             * restored a final set of validations can be performed.
             */
            // @ts-ignore
            public registerValidation(obj: java.io.ObjectInputValidation, prio: number): void;
            /**
             * Load the local class equivalent of the specified stream class
             * description.  Subclasses may implement this method to allow classes to
             * be fetched from an alternate source.
             * <p>The corresponding method in <code>ObjectOutputStream</code> is
             * <code>annotateClass</code>.  This method will be invoked only once for
             * each unique class in the stream.  This method can be implemented by
             * subclasses to use an alternate loading mechanism but must return a
             * <code>Class</code> object. Once returned, if the class is not an array
             * class, its serialVersionUID is compared to the serialVersionUID of the
             * serialized class, and if there is a mismatch, the deserialization fails
             * and an {@link InvalidClassException} is thrown.
             * <p>The default implementation of this method in
             * <code>ObjectInputStream</code> returns the result of calling
             * <pre>
             * Class.forName(desc.getName(), false, loader)
             * </pre>
             * where <code>loader</code> is determined as follows: if there is a
             * method on the current thread's stack whose declaring class was
             * defined by a user-defined class loader (and was not a generated to
             * implement reflective invocations), then <code>loader</code> is class
             * loader corresponding to the closest such method to the currently
             * executing frame; otherwise, <code>loader</code> is
             * <code>null</code>. If this call results in a
             * <code>ClassNotFoundException</code> and the name of the passed
             * <code>ObjectStreamClass</code> instance is the Java language keyword
             * for a primitive type or void, then the <code>Class</code> object
             * representing that primitive type or void will be returned
             * (e.g., an <code>ObjectStreamClass</code> with the name
             * <code>"int"</code> will be resolved to <code>Integer.TYPE</code>).
             * Otherwise, the <code>ClassNotFoundException</code> will be thrown to
             * the caller of this method.
             */
            // @ts-ignore
            protected resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class;
            /**
             * Returns a proxy class that implements the interfaces named in a proxy
             * class descriptor; subclasses may implement this method to read custom
             * data from the stream along with the descriptors for dynamic proxy
             * classes, allowing them to use an alternate loading mechanism for the
             * interfaces and the proxy class.
             * <p>This method is called exactly once for each unique proxy class
             * descriptor in the stream.
             * <p>The corresponding method in <code>ObjectOutputStream</code> is
             * <code>annotateProxyClass</code>.  For a given subclass of
             * <code>ObjectInputStream</code> that overrides this method, the
             * <code>annotateProxyClass</code> method in the corresponding subclass of
             * <code>ObjectOutputStream</code> must write any data or objects read by
             * this method.
             * <p>The default implementation of this method in
             * <code>ObjectInputStream</code> returns the result of calling
             * <code>Proxy.getProxyClass</code> with the list of <code>Class</code>
             * objects for the interfaces that are named in the <code>interfaces</code>
             * parameter.  The <code>Class</code> object for each interface name
             * <code>i</code> is the value returned by calling
             * <pre>
             * Class.forName(i, false, loader)
             * </pre>
             * where <code>loader</code> is that of the first non-<code>null</code>
             * class loader up the execution stack, or <code>null</code> if no
             * non-<code>null</code> class loaders are on the stack (the same class
             * loader choice used by the <code>resolveClass</code> method).  Unless any
             * of the resolved interfaces are non-public, this same value of
             * <code>loader</code> is also the class loader passed to
             * <code>Proxy.getProxyClass</code>; if non-public interfaces are present,
             * their class loader is passed instead (if more than one non-public
             * interface class loader is encountered, an
             * <code>IllegalAccessError</code> is thrown).
             * If <code>Proxy.getProxyClass</code> throws an
             * <code>IllegalArgumentException</code>, <code>resolveProxyClass</code>
             * will throw a <code>ClassNotFoundException</code> containing the
             * <code>IllegalArgumentException</code>.
             */
            // @ts-ignore
            protected resolveProxyClass(interfaces: string): java.lang.Class;
            /**
             * This method will allow trusted subclasses of ObjectInputStream to
             * substitute one object for another during deserialization. Replacing
             * objects is disabled until enableResolveObject is called. The
             * enableResolveObject method checks that the stream requesting to resolve
             * object can be trusted. Every reference to serializable objects is passed
             * to resolveObject.  To insure that the private state of objects is not
             * unintentionally exposed only trusted streams may use resolveObject.
             * <p>This method is called after an object has been read but before it is
             * returned from readObject.  The default resolveObject method just returns
             * the same object.
             * <p>When a subclass is replacing objects it must insure that the
             * substituted object is compatible with every field where the reference
             * will be stored.  Objects whose type is not a subclass of the type of the
             * field or array element abort the serialization by raising an exception
             * and the object is not be stored.
             * <p>This method is called only once when each object is first
             * encountered.  All subsequent references to the object will be redirected
             * to the new object.
             */
            // @ts-ignore
            protected resolveObject(obj: java.lang.Object): java.lang.Object;
            /**
             * Enable the stream to allow objects read from the stream to be replaced.
             * When enabled, the resolveObject method is called for every object being
             * deserialized.
             * <p>If <i>enable</i> is true, and there is a security manager installed,
             * this method first calls the security manager's
             * <code>checkPermission</code> method with the
             * <code>SerializablePermission("enableSubstitution")</code> permission to
             * ensure it's ok to enable the stream to allow objects read from the
             * stream to be replaced.
             */
            // @ts-ignore
            protected enableResolveObject(enable: boolean): boolean;
            /**
             * The readStreamHeader method is provided to allow subclasses to read and
             * verify their own stream headers. It reads and verifies the magic number
             * and version number.
             */
            // @ts-ignore
            protected readStreamHeader(): void;
            /**
             * Read a class descriptor from the serialization stream.  This method is
             * called when the ObjectInputStream expects a class descriptor as the next
             * item in the serialization stream.  Subclasses of ObjectInputStream may
             * override this method to read in class descriptors that have been written
             * in non-standard formats (by subclasses of ObjectOutputStream which have
             * overridden the <code>writeClassDescriptor</code> method).  By default,
             * this method reads class descriptors according to the format defined in
             * the Object Serialization specification.
             */
            // @ts-ignore
            protected readClassDescriptor(): java.io.ObjectStreamClass;
            /**
             * Reads a byte of data. This method will block if no input is available.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads into an array of bytes.  This method will block until some input
             * is available. Consider using java.io.DataInputStream.readFully to read
             * exactly 'length' bytes.
             */
            // @ts-ignore
            public read(buf: number, off: number, len: number): number;
            /**
             * Returns the number of bytes that can be read without blocking.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Closes the input stream. Must be called to release any resources
             * associated with the stream.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Reads in a boolean.
             */
            // @ts-ignore
            public readBoolean(): boolean;
            /**
             * Reads an 8 bit byte.
             */
            // @ts-ignore
            public readByte(): number;
            /**
             * Reads an unsigned 8 bit byte.
             */
            // @ts-ignore
            public readUnsignedByte(): number;
            /**
             * Reads a 16 bit char.
             */
            // @ts-ignore
            public readChar(): string;
            /**
             * Reads a 16 bit short.
             */
            // @ts-ignore
            public readShort(): number;
            /**
             * Reads an unsigned 16 bit short.
             */
            // @ts-ignore
            public readUnsignedShort(): number;
            /**
             * Reads a 32 bit int.
             */
            // @ts-ignore
            public readInt(): number;
            /**
             * Reads a 64 bit long.
             */
            // @ts-ignore
            public readLong(): number;
            /**
             * Reads a 32 bit float.
             */
            // @ts-ignore
            public readFloat(): number;
            /**
             * Reads a 64 bit double.
             */
            // @ts-ignore
            public readDouble(): number;
            /**
             * Reads bytes, blocking until all bytes are read.
             */
            // @ts-ignore
            public readFully(buf: number): void;
            /**
             * Reads bytes, blocking until all bytes are read.
             */
            // @ts-ignore
            public readFully(buf: number, off: number, len: number): void;
            /**
             * Skips bytes.
             */
            // @ts-ignore
            public skipBytes(len: number): number;
            /**
             * Reads in a line that has been terminated by a \n, \r, \r\n or EOF.
             */
            // @ts-ignore
            public readLine(): string;
            /**
             * Reads a String in
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a>
             * format.
             */
            // @ts-ignore
            public readUTF(): string;
        }
    }
}
