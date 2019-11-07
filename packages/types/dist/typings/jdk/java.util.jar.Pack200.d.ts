// @ts-nocheck
declare namespace java {
    namespace util {
        namespace jar {
            // @ts-ignore
            abstract class Pack200 extends java.lang.Object {
                /**
                 * Obtain new instance of a class that implements Packer.
                 * <ul>
                 * <li><p>If the system property <tt>java.util.jar.Pack200.Packer</tt>
                 * is defined, then the value is taken to be the fully-qualified name
                 * of a concrete implementation class, which must implement Packer.
                 * This class is loaded and instantiated.  If this process fails
                 * then an unspecified error is thrown.</p></li>
                 * <li><p>If an implementation has not been specified with the system
                 * property, then the system-default implementation class is instantiated,
                 * and the result is returned.</p></li>
                 * </ul>
                 * <p>Note:  The returned object is not guaranteed to operate
                 * correctly if multiple threads use it at the same time.
                 * A multi-threaded application should either allocate multiple
                 * packer engines, or else serialize use of one engine with a lock.
                 */
                // @ts-ignore
                public static newPacker(): java.util.jar.Pack200.Packer;
                /**
                 * Obtain new instance of a class that implements Unpacker.
                 * <ul>
                 * <li><p>If the system property <tt>java.util.jar.Pack200.Unpacker</tt>
                 * is defined, then the value is taken to be the fully-qualified
                 * name of a concrete implementation class, which must implement Unpacker.
                 * The class is loaded and instantiated.  If this process fails
                 * then an unspecified error is thrown.</p></li>
                 * <li><p>If an implementation has not been specified with the
                 * system property, then the system-default implementation class
                 * is instantiated, and the result is returned.</p></li>
                 * </ul>
                 * <p>Note:  The returned object is not guaranteed to operate
                 * correctly if multiple threads use it at the same time.
                 * A multi-threaded application should either allocate multiple
                 * unpacker engines, or else serialize use of one engine with a lock.
                 */
                // @ts-ignore
                public static newUnpacker(): java.util.jar.Pack200.Unpacker;
            }
        }
    }
}
