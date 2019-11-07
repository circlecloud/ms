// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Base64 extends java.lang.Object {
            /**
             * Returns a {@link Encoder} that encodes using the
             * <a href="#basic">Basic</a> type base64 encoding scheme.
             */
            // @ts-ignore
            public static getEncoder(): java.util.Base64.Encoder;
            /**
             * Returns a {@link Encoder} that encodes using the
             * <a href="#url">URL and Filename safe</a> type base64
             * encoding scheme.
             */
            // @ts-ignore
            public static getUrlEncoder(): java.util.Base64.Encoder;
            /**
             * Returns a {@link Encoder} that encodes using the
             * <a href="#mime">MIME</a> type base64 encoding scheme.
             */
            // @ts-ignore
            public static getMimeEncoder(): java.util.Base64.Encoder;
            /**
             * Returns a {@link Encoder} that encodes using the
             * <a href="#mime">MIME</a> type base64 encoding scheme
             * with specified line length and line separators.
             */
            // @ts-ignore
            public static getMimeEncoder(lineLength: number, lineSeparator: number): java.util.Base64.Encoder;
            /**
             * Returns a {@link Decoder} that decodes using the
             * <a href="#basic">Basic</a> type base64 encoding scheme.
             */
            // @ts-ignore
            public static getDecoder(): java.util.Base64.Decoder;
            /**
             * Returns a {@link Decoder} that decodes using the
             * <a href="#url">URL and Filename safe</a> type base64
             * encoding scheme.
             */
            // @ts-ignore
            public static getUrlDecoder(): java.util.Base64.Decoder;
            /**
             * Returns a {@link Decoder} that decodes using the
             * <a href="#mime">MIME</a> type base64 decoding scheme.
             */
            // @ts-ignore
            public static getMimeDecoder(): java.util.Base64.Decoder;
        }
    }
}
