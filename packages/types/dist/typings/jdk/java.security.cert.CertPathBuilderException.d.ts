// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class CertPathBuilderException extends java.security.GeneralSecurityException {
                /**
                 * Creates a {@code CertPathBuilderException} with {@code null}
                 * as its detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code CertPathBuilderException} with the given
                 * detail message. The detail message is a {@code String} that
                 * describes this particular exception in more detail.
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Creates a {@code CertPathBuilderException} that wraps the specified
                 * throwable. This allows any exception to be converted into a
                 * {@code CertPathBuilderException}, while retaining information
                 * about the wrapped exception, which may be useful for debugging. The
                 * detail message is set to ({@code cause==null ? null : cause.toString()})
                 * (which typically contains the class and detail message of
                 * cause).
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable)
                /**
                 * Creates a {@code CertPathBuilderException} with the specified
                 * detail message and cause.
                 */
                // @ts-ignore
                constructor(msg: string, cause: java.lang.Throwable)
            }
        }
    }
}
