declare namespace java {
    namespace text {
        // @ts-ignore
        abstract class CollationKey extends java.lang.Object {
            /**
             * CollationKey constructor.
             */
            // @ts-ignore
            constructor(source: string)
            /**
             * Compare this CollationKey to the target CollationKey. The collation rules of the
             * Collator object which created these keys are applied. <strong>Note:</strong>
             * CollationKeys created by different Collators can not be compared.
             */
            // @ts-ignore
            public abstract compareTo(target: java.text.CollationKey): number;
            /**
             * Returns the String that this CollationKey represents.
             */
            // @ts-ignore
            public getSourceString(): string;
            /**
             * Converts the CollationKey to a sequence of bits. If two CollationKeys
             * could be legitimately compared, then one could compare the byte arrays
             * for each of those keys to obtain the same result.  Byte arrays are
             * organized most significant byte first.
             */
            // @ts-ignore
            public abstract toByteArray(): number[];
        }
    }
}
