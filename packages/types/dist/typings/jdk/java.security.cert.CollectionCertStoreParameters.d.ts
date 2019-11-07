// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class CollectionCertStoreParameters extends java.lang.Object {
                /**
                 * Creates an instance of {@code CollectionCertStoreParameters}
                 * which will allow certificates and CRLs to be retrieved from the
                 * specified {@code Collection}. If the specified
                 * {@code Collection} contains an object that is not a
                 * {@code Certificate} or {@code CRL}, that object will be
                 * ignored by the Collection {@code CertStore}.
                 * <p>
                 * The {@code Collection} is <b>not</b> copied. Instead, a
                 * reference is used. This allows the caller to subsequently add or
                 * remove {@code Certificates} or {@code CRL}s from the
                 * {@code Collection}, thus changing the set of
                 * {@code Certificates} or {@code CRL}s available to the
                 * Collection {@code CertStore}. The Collection {@code CertStore}
                 * will not modify the contents of the {@code Collection}.
                 * <p>
                 * If the {@code Collection} will be modified by one thread while
                 * another thread is calling a method of a Collection {@code CertStore}
                 * that has been initialized with this {@code Collection}, the
                 * {@code Collection} must have fail-fast iterators.
                 */
                // @ts-ignore
                constructor(collection: java.util.Collection)
                /**
                 * Creates an instance of {@code CollectionCertStoreParameters} with
                 * the default parameter values (an empty and immutable
                 * {@code Collection}).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the {@code Collection} from which {@code Certificate}s
                 * and {@code CRL}s are retrieved. This is <b>not</b> a copy of the
                 * {@code Collection}, it is a reference. This allows the caller to
                 * subsequently add or remove {@code Certificates} or
                 * {@code CRL}s from the {@code Collection}.
                 */
                // @ts-ignore
                public getCollection(): java.util.Collection;
                /**
                 * Returns a copy of this object. Note that only a reference to the
                 * {@code Collection} is copied, and not the contents.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns a formatted string describing the parameters.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
