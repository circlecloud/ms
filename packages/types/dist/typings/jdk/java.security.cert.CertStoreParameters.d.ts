// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface CertStoreParameters {
                /**
                 * Makes a copy of this {@code CertStoreParameters}.
                 * <p>
                 * The precise meaning of "copy" may depend on the class of
                 * the {@code CertStoreParameters} object. A typical implementation
                 * performs a "deep copy" of this object, but this is not an absolute
                 * requirement. Some implementations may perform a "shallow copy" of some
                 * or all of the fields of this object.
                 * <p>
                 * Note that the {@code CertStore.getInstance} methods make a copy
                 * of the specified {@code CertStoreParameters}. A deep copy
                 * implementation of {@code clone} is safer and more robust, as it
                 * prevents the caller from corrupting a shared {@code CertStore} by
                 * subsequently modifying the contents of its initialization parameters.
                 * However, a shallow copy implementation of {@code clone} is more
                 * appropriate for applications that need to hold a reference to a
                 * parameter contained in the {@code CertStoreParameters}. For example,
                 * a shallow copy clone allows an application to release the resources of
                 * a particular {@code CertStore} initialization parameter immediately,
                 * rather than waiting for the garbage collection mechanism. This should
                 * be done with the utmost care, since the {@code CertStore} may still
                 * be in use by other threads.
                 * <p>
                 * Each subclass should state the precise behavior of this method so
                 * that users and developers know what to expect.
                 */
                // @ts-ignore
                 clone(): java.lang.Object;
            }
        }
    }
}
