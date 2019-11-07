declare namespace java {
    namespace text {
        // @ts-ignore
         class AttributedString extends java.lang.Object {
            /**
             * Constructs an AttributedString instance with the given text.
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Constructs an AttributedString instance with the given text and attributes.
             */
            // @ts-ignore
            constructor(text: string, attributes: java.util.Map)
            /**
             * Constructs an AttributedString instance with the given attributed
             * text represented by AttributedCharacterIterator.
             */
            // @ts-ignore
            constructor(text: java.text.AttributedCharacterIterator)
            /**
             * Constructs an AttributedString instance with the subrange of
             * the given attributed text represented by
             * AttributedCharacterIterator. If the given range produces an
             * empty text, all attributes will be discarded.  Note that any
             * attributes wrapped by an Annotation object are discarded for a
             * subrange of the original attribute range.
             */
            // @ts-ignore
            constructor(text: java.text.AttributedCharacterIterator, beginIndex: number, endIndex: number)
            /**
             * Constructs an AttributedString instance with the subrange of
             * the given attributed text represented by
             * AttributedCharacterIterator.  Only attributes that match the
             * given attributes will be incorporated into the instance. If the
             * given range produces an empty text, all attributes will be
             * discarded. Note that any attributes wrapped by an Annotation
             * object are discarded for a subrange of the original attribute
             * range.
             */
            // @ts-ignore
            constructor(text: java.text.AttributedCharacterIterator, beginIndex: number, endIndex: number, attributes: java.text.AttributedCharacterIterator.Attribute)
            /**
             * Adds an attribute to the entire string.
             */
            // @ts-ignore
            public addAttribute(attribute: java.text.AttributedCharacterIterator.Attribute, value: java.lang.Object): void;
            /**
             * Adds an attribute to a subrange of the string.
             */
            // @ts-ignore
            public addAttribute(attribute: java.text.AttributedCharacterIterator.Attribute, value: java.lang.Object, beginIndex: number, endIndex: number): void;
            /**
             * Adds a set of attributes to a subrange of the string.
             */
            // @ts-ignore
            public addAttributes(attributes: java.util.Map, beginIndex: number, endIndex: number): void;
            /**
             * Creates an AttributedCharacterIterator instance that provides access to the entire contents of
             * this string.
             */
            // @ts-ignore
            public getIterator(): java.text.AttributedCharacterIterator;
            /**
             * Creates an AttributedCharacterIterator instance that provides access to
             * selected contents of this string.
             * Information about attributes not listed in attributes that the
             * implementor may have need not be made accessible through the iterator.
             * If the list is null, all available attribute information should be made
             * accessible.
             */
            // @ts-ignore
            public getIterator(attributes: java.text.AttributedCharacterIterator.Attribute): java.text.AttributedCharacterIterator;
            /**
             * Creates an AttributedCharacterIterator instance that provides access to
             * selected contents of this string.
             * Information about attributes not listed in attributes that the
             * implementor may have need not be made accessible through the iterator.
             * If the list is null, all available attribute information should be made
             * accessible.
             */
            // @ts-ignore
            public getIterator(attributes: java.text.AttributedCharacterIterator.Attribute, beginIndex: number, endIndex: number): java.text.AttributedCharacterIterator;
        }
    }
}
