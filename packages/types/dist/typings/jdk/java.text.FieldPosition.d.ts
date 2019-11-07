declare namespace java {
    namespace text {
        // @ts-ignore
         class FieldPosition extends java.lang.Object {
            /**
             * Creates a FieldPosition object for the given field.  Fields are
             * identified by constants, whose names typically end with _FIELD,
             * in the various subclasses of Format.
             */
            // @ts-ignore
            constructor(field: number)
            /**
             * Creates a FieldPosition object for the given field constant. Fields are
             * identified by constants defined in the various <code>Format</code>
             * subclasses. This is equivalent to calling
             * <code>new FieldPosition(attribute, -1)</code>.
             */
            // @ts-ignore
            constructor(attribute: java.text.Format.Field)
            /**
             * Creates a <code>FieldPosition</code> object for the given field.
             * The field is identified by an attribute constant from one of the
             * <code>Field</code> subclasses as well as an integer field ID
             * defined by the <code>Format</code> subclasses. <code>Format</code>
             * subclasses that are aware of <code>Field</code> should give precedence
             * to <code>attribute</code> and ignore <code>fieldID</code> if
             * <code>attribute</code> is not null. However, older <code>Format</code>
             * subclasses may not be aware of <code>Field</code> and rely on
             * <code>fieldID</code>. If the field has no corresponding integer
             * constant, <code>fieldID</code> should be -1.
             */
            // @ts-ignore
            constructor(attribute: java.text.Format.Field, fieldID: number)
            /**
             * Returns the field identifier as an attribute constant
             * from one of the <code>Field</code> subclasses. May return null if
             * the field is specified only by an integer field ID.
             */
            // @ts-ignore
            public getFieldAttribute(): java.text.Format.Field;
            /**
             * Retrieves the field identifier.
             */
            // @ts-ignore
            public getField(): number;
            /**
             * Retrieves the index of the first character in the requested field.
             */
            // @ts-ignore
            public getBeginIndex(): number;
            /**
             * Retrieves the index of the character following the last character in the
             * requested field.
             */
            // @ts-ignore
            public getEndIndex(): number;
            /**
             * Sets the begin index.  For use by subclasses of Format.
             */
            // @ts-ignore
            public setBeginIndex(bi: number): void;
            /**
             * Sets the end index.  For use by subclasses of Format.
             */
            // @ts-ignore
            public setEndIndex(ei: number): void;
            /**
             * Overrides equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hash code for this FieldPosition.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Return a string representation of this FieldPosition.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
