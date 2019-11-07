// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class URLEncoder extends java.lang.Object {
            /**
             * Translates a string into {@code x-www-form-urlencoded}
             * format. This method uses the platform's default encoding
             * as the encoding scheme to obtain the bytes for unsafe characters.
             */
            // @ts-ignore
            public static encode(s: string): string;
            /**
             * Translates a string into {@code application/x-www-form-urlencoded}
             * format using a specific encoding scheme. This method uses the
             * supplied encoding scheme to obtain the bytes for unsafe
             * characters.
             * <p>
             * <em><strong>Note:</strong> The <a href=
             * "http://www.w3.org/TR/html40/appendix/notes.html#non-ascii-chars">
             * World Wide Web Consortium Recommendation</a> states that
             * UTF-8 should be used. Not doing so may introduce
             * incompatibilities.</em>
             */
            // @ts-ignore
            public static encode(s: string, enc: string): string;
        }
    }
}
