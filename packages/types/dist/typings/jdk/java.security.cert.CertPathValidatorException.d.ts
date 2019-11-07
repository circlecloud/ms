// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class CertPathValidatorException extends java.security.GeneralSecurityException {
                /**
                 * Creates a {@code CertPathValidatorException} with
                 * no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code CertPathValidatorException} with the given
                 * detail message. A detail message is a {@code String} that
                 * describes this particular exception.
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Creates a {@code CertPathValidatorException} that wraps the
                 * specified throwable. This allows any exception to be converted into a
                 * {@code CertPathValidatorException}, while retaining information
                 * about the wrapped exception, which may be useful for debugging. The
                 * detail message is set to ({@code cause==null ? null : cause.toString()})
                 * (which typically contains the class and detail message of
                 * cause).
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable)
                /**
                 * Creates a {@code CertPathValidatorException} with the specified
                 * detail message and cause.
                 */
                // @ts-ignore
                constructor(msg: string, cause: java.lang.Throwable)
                /**
                 * Creates a {@code CertPathValidatorException} with the specified
                 * detail message, cause, certification path, and index.
                 */
                // @ts-ignore
                constructor(msg: string, cause: java.lang.Throwable, certPath: java.security.cert.CertPath, index: number)
                /**
                 * Creates a {@code CertPathValidatorException} with the specified
                 * detail message, cause, certification path, index, and reason.
                 */
                // @ts-ignore
                constructor(msg: string, cause: java.lang.Throwable, certPath: java.security.cert.CertPath, index: number, reason: java.security.cert.CertPathValidatorException.Reason)
                /**
                 * Returns the certification path that was being validated when
                 * the exception was thrown.
                 */
                // @ts-ignore
                public getCertPath(): java.security.cert.CertPath;
                /**
                 * Returns the index of the certificate in the certification path
                 * that caused the exception to be thrown. Note that the list of
                 * certificates in a {@code CertPath} is zero based. If no
                 * index has been set, -1 is returned.
                 */
                // @ts-ignore
                public getIndex(): number;
                /**
                 * Returns the reason that the validation failed. The reason is
                 * associated with the index of the certificate returned by
                 * {@link #getIndex}.
                 */
                // @ts-ignore
                public getReason(): java.security.cert.CertPathValidatorException.Reason;
            }
        }
    }
}
