// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace spi {
                // @ts-ignore
                abstract class FileTypeDetector extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Probes the given file to guess its content type.
                     * <p> The means by which this method determines the file type is highly
                     * implementation specific. It may simply examine the file name, it may use
                     * a file <a href="../attribute/package-summary.html">attribute</a>,
                     * or it may examines bytes in the file.
                     * <p> The probe result is the string form of the value of a
                     * Multipurpose Internet Mail Extension (MIME) content type as
                     * defined by <a href="http://www.ietf.org/rfc/rfc2045.txt"><i>RFC&nbsp;2045:
                     * Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet
                     * Message Bodies</i></a>. The string must be parsable according to the
                     * grammar in the RFC 2045.
                     */
                    // @ts-ignore
                    public abstract probeContentType(path: java.nio.file.Path): string;
                }
            }
        }
    }
}
