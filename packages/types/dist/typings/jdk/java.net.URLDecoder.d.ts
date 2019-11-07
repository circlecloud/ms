// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class URLDecoder extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Decodes a {@code x-www-form-urlencoded} string.
             * The platform's default encoding is used to determine what characters
             * are represented by any consecutive sequences of the form
             * "<i>{@code %xy}</i>".
             */
            // @ts-ignore
            public static decode(s: string): string;
            /**
             * Decodes a {@code application/x-www-form-urlencoded} string using a specific
             * encoding scheme.
             * The supplied encoding is used to determine
             * what characters are represented by any consecutive sequences of the
             * form "<i>{@code %xy}</i>".
             * <p>
             * <em><strong>Note:</strong> The <a href=
             * "http://www.w3.org/TR/html40/appendix/notes.html#non-ascii-chars">
             * World Wide Web Consortium Recommendation</a> states that
             * UTF-8 should be used. Not doing so may introduce
             * incompatibilities.</em>
             */
            // @ts-ignore
            public static decode(s: string, enc: string): string;
        }
    }
}
