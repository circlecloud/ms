declare namespace java {
    namespace io {
        // @ts-ignore
         class ObjectOutputStream extends java.io.OutputStream {
            /**
             * Creates an ObjectOutputStream that writes to the specified OutputStream.
             * This constructor writes the serialization stream header to the
             * underlying stream; callers may wish to flush the stream immediately to
             * ensure that constructors for receiving ObjectInputStreams will not block
             * when reading the header.
             * <p>If a security manager is installed, this constructor will check for
             * the "enableSubclassImplementation" SerializablePermission when invoked
             * directly or indirectly by the constructor of a subclass which overrides
             * the ObjectOutputStream.putFields or ObjectOutputStream.writeUnshared
             * methods.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Provide a way for subclasses that are completely reimplementing
             * ObjectOutputStream to not have to allocate private data just used by
             * this implementation of ObjectOutputStream.
             * <p>If there is a security manager installed, this method first calls the
             * security manager's <code>checkPermission</code> method with a
             * <code>SerializablePermission("enableSubclassImplementation")</code>
             * permission to ensure it's ok to enable subclassing.
             */
            // @ts-ignore
            constructor()
            /**
             * Specify stream protocol version to use when writing the stream.
             * <p>This routine provides a hook to enable the current version of
             * Serialization to write in a format that is backwards compatible to a
             * previous version of the stream format.
             * <p>Every effort will be made to avoid introducing additional
             * backwards incompatibilities; however, sometimes there is no
             * other alternative.
             */
            // @ts-ignore
            public useProtocolVersion(version: number): void;
            /**
             * Write the specified object to the ObjectOutputStream.  The class of the
             * object, the signature of the class, and the values of the non-transient
             * and non-static fields of the class and all of its supertypes are
             * written.  Default serialization for a class can be overridden using the
             * writeObject and the readObject methods.  Objects referenced by this
             * object are written transitively so that a complete equivalent graph of
             * objects can be reconstructed by an ObjectInputStream.
             * <p>Exceptions are thrown for problems with the OutputStream and for
             * classes that should not be serialized.  All exceptions are fatal to the
             * OutputStream, which is left in an indeterminate state, and it is up to
             * the caller to ignore or recover the stream state.
             */
            // @ts-ignore
            public writeObject(obj: java.lang.Object): void;
            /**
             * Method used by subclasses to override the default writeObject method.
             * This method is called by trusted subclasses of ObjectInputStream that
             * constructed ObjectInputStream using the protected no-arg constructor.
             * The subclass is expected to provide an override method with the modifier
             * "final".
             */
            // @ts-ignore
            protected writeObjectOverride(obj: java.lang.Object): void;
            /**
             * Writes an "unshared" object to the ObjectOutputStream.  This method is
             * identical to writeObject, except that it always writes the given object
             * as a new, unique object in the stream (as opposed to a back-reference
             * pointing to a previously serialized instance).  Specifically:
             * <ul>
             * <li>An object written via writeUnshared is always serialized in the
             * same manner as a newly appearing object (an object that has not
             * been written to the stream yet), regardless of whether or not the
             * object has been written previously.
             * <li>If writeObject is used to write an object that has been previously
             * written with writeUnshared, the previous writeUnshared operation
             * is treated as if it were a write of a separate object.  In other
             * words, ObjectOutputStream will never generate back-references to
             * object data written by calls to writeUnshared.
             * </ul>
             * While writing an object via writeUnshared does not in itself guarantee a
             * unique reference to the object when it is deserialized, it allows a
             * single object to be defined multiple times in a stream, so that multiple
             * calls to readUnshared by the receiver will not conflict.  Note that the
             * rules described above only apply to the base-level object written with
             * writeUnshared, and not to any transitively referenced sub-objects in the
             * object graph to be serialized.
             * <p>ObjectOutputStream subclasses which override this method can only be
             * constructed in security contexts possessing the
             * "enableSubclassImplementation" SerializablePermission; any attempt to
             * instantiate such a subclass without this permission will cause a
             * SecurityException to be thrown.
             */
            // @ts-ignore
            public writeUnshared(obj: java.lang.Object): void;
            /**
             * Write the non-static and non-transient fields of the current class to
             * this stream.  This may only be called from the writeObject method of the
             * class being serialized. It will throw the NotActiveException if it is
             * called otherwise.
             */
            // @ts-ignore
            public defaultWriteObject(): void;
            /**
             * Retrieve the object used to buffer persistent fields to be written to
             * the stream.  The fields will be written to the stream when writeFields
             * method is called.
             */
            // @ts-ignore
            public putFields(): java.io.ObjectOutputStream.PutField;
            /**
             * Write the buffered fields to the stream.
             */
            // @ts-ignore
            public writeFields(): void;
            /**
             * Reset will disregard the state of any objects already written to the
             * stream.  The state is reset to be the same as a new ObjectOutputStream.
             * The current point in the stream is marked as reset so the corresponding
             * ObjectInputStream will be reset at the same point.  Objects previously
             * written to the stream will not be referred to as already being in the
             * stream.  They will be written to the stream again.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Subclasses may implement this method to allow class data to be stored in
             * the stream. By default this method does nothing.  The corresponding
             * method in ObjectInputStream is resolveClass.  This method is called
             * exactly once for each unique class in the stream.  The class name and
             * signature will have already been written to the stream.  This method may
             * make free use of the ObjectOutputStream to save any representation of
             * the class it deems suitable (for example, the bytes of the class file).
             * The resolveClass method in the corresponding subclass of
             * ObjectInputStream must read and use any data or objects written by
             * annotateClass.
             */
            // @ts-ignore
            protected annotateClass(cl: java.lang.Class): void;
            /**
             * Subclasses may implement this method to store custom data in the stream
             * along with descriptors for dynamic proxy classes.
             * <p>This method is called exactly once for each unique proxy class
             * descriptor in the stream.  The default implementation of this method in
             * <code>ObjectOutputStream</code> does nothing.
             * <p>The corresponding method in <code>ObjectInputStream</code> is
             * <code>resolveProxyClass</code>.  For a given subclass of
             * <code>ObjectOutputStream</code> that overrides this method, the
             * <code>resolveProxyClass</code> method in the corresponding subclass of
             * <code>ObjectInputStream</code> must read any data or objects written by
             * <code>annotateProxyClass</code>.
             */
            // @ts-ignore
            protected annotateProxyClass(cl: java.lang.Class): void;
            /**
             * This method will allow trusted subclasses of ObjectOutputStream to
             * substitute one object for another during serialization. Replacing
             * objects is disabled until enableReplaceObject is called. The
             * enableReplaceObject method checks that the stream requesting to do
             * replacement can be trusted.  The first occurrence of each object written
             * into the serialization stream is passed to replaceObject.  Subsequent
             * references to the object are replaced by the object returned by the
             * original call to replaceObject.  To ensure that the private state of
             * objects is not unintentionally exposed, only trusted streams may use
             * replaceObject.
             * <p>The ObjectOutputStream.writeObject method takes a parameter of type
             * Object (as opposed to type Serializable) to allow for cases where
             * non-serializable objects are replaced by serializable ones.
             * <p>When a subclass is replacing objects it must insure that either a
             * complementary substitution must be made during deserialization or that
             * the substituted object is compatible with every field where the
             * reference will be stored.  Objects whose type is not a subclass of the
             * type of the field or array element abort the serialization by raising an
             * exception and the object is not be stored.
             * <p>This method is called only once when each object is first
             * encountered.  All subsequent references to the object will be redirected
             * to the new object. This method should return the object to be
             * substituted or the original object.
             * <p>Null can be returned as the object to be substituted, but may cause
             * NullReferenceException in classes that contain references to the
             * original object since they may be expecting an object instead of
             * null.
             */
            // @ts-ignore
            protected replaceObject(obj: java.lang.Object): java.lang.Object;
            /**
             * Enable the stream to do replacement of objects in the stream.  When
             * enabled, the replaceObject method is called for every object being
             * serialized.
             * <p>If <code>enable</code> is true, and there is a security manager
             * installed, this method first calls the security manager's
             * <code>checkPermission</code> method with a
             * <code>SerializablePermission("enableSubstitution")</code> permission to
             * ensure it's ok to enable the stream to do replacement of objects in the
             * stream.
             */
            // @ts-ignore
            protected enableReplaceObject(enable: boolean): boolean;
            /**
             * The writeStreamHeader method is provided so subclasses can append or
             * prepend their own header to the stream.  It writes the magic number and
             * version to the stream.
             */
            // @ts-ignore
            protected writeStreamHeader(): void;
            /**
             * Write the specified class descriptor to the ObjectOutputStream.  Class
             * descriptors are used to identify the classes of objects written to the
             * stream.  Subclasses of ObjectOutputStream may override this method to
             * customize the way in which class descriptors are written to the
             * serialization stream.  The corresponding method in ObjectInputStream,
             * <code>readClassDescriptor</code>, should then be overridden to
             * reconstitute the class descriptor from its custom stream representation.
             * By default, this method writes class descriptors according to the format
             * defined in the Object Serialization specification.
             * <p>Note that this method will only be called if the ObjectOutputStream
             * is not using the old serialization stream format (set by calling
             * ObjectOutputStream's <code>useProtocolVersion</code> method).  If this
             * serialization stream is using the old format
             * (<code>PROTOCOL_VERSION_1</code>), the class descriptor will be written
             * internally in a manner that cannot be overridden or customized.
             */
            // @ts-ignore
            protected writeClassDescriptor(desc: java.io.ObjectStreamClass): void;
            /**
             * Writes a byte. This method will block until the byte is actually
             * written.
             */
            // @ts-ignore
            public write(val: number): void;
            /**
             * Writes an array of bytes. This method will block until the bytes are
             * actually written.
             */
            // @ts-ignore
            public write(buf: number): void;
            /**
             * Writes a sub array of bytes.
             */
            // @ts-ignore
            public write(buf: number, off: number, len: number): void;
            /**
             * Flushes the stream. This will write any buffered output bytes and flush
             * through to the underlying stream.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Drain any buffered data in ObjectOutputStream.  Similar to flush but
             * does not propagate the flush to the underlying stream.
             */
            // @ts-ignore
            protected drain(): void;
            /**
             * Closes the stream. This method must be called to release any resources
             * associated with the stream.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Writes a boolean.
             */
            // @ts-ignore
            public writeBoolean(val: boolean): void;
            /**
             * Writes an 8 bit byte.
             */
            // @ts-ignore
            public writeByte(val: number): void;
            /**
             * Writes a 16 bit short.
             */
            // @ts-ignore
            public writeShort(val: number): void;
            /**
             * Writes a 16 bit char.
             */
            // @ts-ignore
            public writeChar(val: number): void;
            /**
             * Writes a 32 bit int.
             */
            // @ts-ignore
            public writeInt(val: number): void;
            /**
             * Writes a 64 bit long.
             */
            // @ts-ignore
            public writeLong(val: number): void;
            /**
             * Writes a 32 bit float.
             */
            // @ts-ignore
            public writeFloat(val: number): void;
            /**
             * Writes a 64 bit double.
             */
            // @ts-ignore
            public writeDouble(val: number): void;
            /**
             * Writes a String as a sequence of bytes.
             */
            // @ts-ignore
            public writeBytes(str: string): void;
            /**
             * Writes a String as a sequence of chars.
             */
            // @ts-ignore
            public writeChars(str: string): void;
            /**
             * Primitive data write of this String in
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a>
             * format.  Note that there is a
             * significant difference between writing a String into the stream as
             * primitive data or as an Object. A String instance written by writeObject
             * is written into the stream as a String initially. Future writeObject()
             * calls write references to the string into the stream.
             */
            // @ts-ignore
            public writeUTF(str: string): void;
        }
    }
}
