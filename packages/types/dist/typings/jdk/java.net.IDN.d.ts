// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class IDN extends java.lang.Object {
            // @ts-ignore
            public static ALLOW_UNASSIGNED: number;
            // @ts-ignore
            public static USE_STD3_ASCII_RULES: number;
            /**
             * Translates a string from Unicode to ASCII Compatible Encoding (ACE),
             * as defined by the ToASCII operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p>ToASCII operation can fail. ToASCII fails if any step of it fails.
             * If ToASCII operation fails, an IllegalArgumentException will be thrown.
             * In this case, the input string should not be used in an internationalized domain name.
             * <p> A label is an individual part of a domain name. The original ToASCII operation,
             * as defined in RFC 3490, only operates on a single label. This method can handle
             * both label and entire domain name, by assuming that labels in a domain name are
             * always separated by dots. The following characters are recognized as dots:
             * &#0092;u002E (full stop), &#0092;u3002 (ideographic full stop), &#0092;uFF0E (fullwidth full stop),
             * and &#0092;uFF61 (halfwidth ideographic full stop). if dots are
             * used as label separators, this method also changes all of them to &#0092;u002E (full stop)
             * in output translated string.
             */
            // @ts-ignore
            public static toASCII(input: string, flag: number): string;
            /**
             * Translates a string from Unicode to ASCII Compatible Encoding (ACE),
             * as defined by the ToASCII operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p> This convenience method works as if by invoking the
             * two-argument counterpart as follows:
             * <blockquote>
             * {@link #toASCII(String, int) toASCII}(input,&nbsp;0);
             * </blockquote>
             */
            // @ts-ignore
            public static toASCII(input: string): string;
            /**
             * Translates a string from ASCII Compatible Encoding (ACE) to Unicode,
             * as defined by the ToUnicode operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p>ToUnicode never fails. In case of any error, the input string is returned unmodified.
             * <p> A label is an individual part of a domain name. The original ToUnicode operation,
             * as defined in RFC 3490, only operates on a single label. This method can handle
             * both label and entire domain name, by assuming that labels in a domain name are
             * always separated by dots. The following characters are recognized as dots:
             * &#0092;u002E (full stop), &#0092;u3002 (ideographic full stop), &#0092;uFF0E (fullwidth full stop),
             * and &#0092;uFF61 (halfwidth ideographic full stop).
             */
            // @ts-ignore
            public static toUnicode(input: string, flag: number): string;
            /**
             * Translates a string from ASCII Compatible Encoding (ACE) to Unicode,
             * as defined by the ToUnicode operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p> This convenience method works as if by invoking the
             * two-argument counterpart as follows:
             * <blockquote>
             * {@link #toUnicode(String, int) toUnicode}(input,&nbsp;0);
             * </blockquote>
             */
            // @ts-ignore
            public static toUnicode(input: string): string;
        }
    }
}
