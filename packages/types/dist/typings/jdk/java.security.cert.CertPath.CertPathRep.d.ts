// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            namespace CertPath {
                // @ts-ignore
                protected class CertPathRep extends java.lang.Object {
                    /**
                     * Creates a {@code CertPathRep} with the specified
                     * type and encoded form of a certification path.
                     */
                    // @ts-ignore
                    constructor(type: string, data: number)
                    /**
                     * Returns a {@code CertPath} constructed from the type and data.
                     */
                    // @ts-ignore
                    protected readResolve(): java.lang.Object;
                }
            }
        }
    }
}
