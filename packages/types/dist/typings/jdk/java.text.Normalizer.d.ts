declare namespace java {
    namespace text {
        // @ts-ignore
         class Normalizer extends java.lang.Object {
            /**
             * Normalize a sequence of char values.
             * The sequence will be normalized according to the specified normalization
             * from.
             */
            // @ts-ignore
            public static normalize(src: java.lang.CharSequence, form: java.text.Normalizer.Form): string;
            /**
             * Determines if the given sequence of char values is normalized.
             */
            // @ts-ignore
            public static isNormalized(src: java.lang.CharSequence, form: java.text.Normalizer.Form): boolean;
        }
    }
}
