declare namespace java {
    namespace text {
        // @ts-ignore
         class ChoiceFormat extends java.text.NumberFormat {
            /**
             * Constructs with limits and corresponding formats based on the pattern.
             */
            // @ts-ignore
            constructor(newPattern: string)
            /**
             * Constructs with the limits and the corresponding formats.
             */
            // @ts-ignore
            constructor(limits: number, formats: string)
            /**
             * Sets the pattern.
             */
            // @ts-ignore
            public applyPattern(newPattern: string): void;
            /**
             * Gets the pattern.
             */
            // @ts-ignore
            public toPattern(): string;
            /**
             * Set the choices to be used in formatting.
             */
            // @ts-ignore
            public setChoices(limits: number, formats: string): void;
            /**
             * Get the limits passed in the constructor.
             */
            // @ts-ignore
            public getLimits(): number[];
            /**
             * Get the formats passed in the constructor.
             */
            // @ts-ignore
            public getFormats(): java.lang.Object[];
            /**
             * Specialization of format. This method really calls
             * <code>format(double, StringBuffer, FieldPosition)</code>
             * thus the range of longs that are supported is only equal to
             * the range that can be stored by double. This will never be
             * a practical limitation.
             */
            // @ts-ignore
            public format(number: number, toAppendTo: java.lang.StringBuffer, status: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Returns pattern with formatted double.
             */
            // @ts-ignore
            public format(number: number, toAppendTo: java.lang.StringBuffer, status: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Parses a Number from the input text.
             */
            // @ts-ignore
            public parse(text: string, status: java.text.ParsePosition): java.lang.Number;
            /**
             * Finds the least double greater than {@code d}.
             * If {@code NaN}, returns same value.
             * <p>Used to make half-open intervals.
             */
            // @ts-ignore
            public static nextDouble(d: number): number;
            /**
             * Finds the greatest double less than {@code d}.
             * If {@code NaN}, returns same value.
             */
            // @ts-ignore
            public static previousDouble(d: number): number;
            /**
             * Overrides Cloneable
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Generates a hash code for the message format object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Equality comparision between two
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Finds the least double greater than {@code d} (if {@code positive} is
             * {@code true}), or the greatest double less than {@code d} (if
             * {@code positive} is {@code false}).
             * If {@code NaN}, returns same value.
             * Does not affect floating-point flags,
             * provided these member functions do not:
             * Double.longBitsToDouble(long)
             * Double.doubleToLongBits(double)
             * Double.isNaN(double)
             */
            // @ts-ignore
            public static nextDouble(d: number, positive: boolean): number;
        }
    }
}
