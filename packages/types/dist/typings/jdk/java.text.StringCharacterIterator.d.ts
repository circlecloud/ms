// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
         class StringCharacterIterator extends java.lang.Object {
            /**
             * Constructs an iterator with an initial index of 0.
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Constructs an iterator with the specified initial index.
             */
            // @ts-ignore
            constructor(text: string, pos: number)
            /**
             * Constructs an iterator over the given range of the given string, with the
             * index set at the specified position.
             */
            // @ts-ignore
            constructor(text: string, begin: number, end: number, pos: number)
            /**
             * Reset this iterator to point to a new string.  This package-visible
             * method is used by other java.text classes that want to avoid allocating
             * new StringCharacterIterator objects every time their setText method
             * is called.
             */
            // @ts-ignore
            public setText(text: string): void;
            /**
             * Implements CharacterIterator.first() for String.
             */
            // @ts-ignore
            public first(): string;
            /**
             * Implements CharacterIterator.last() for String.
             */
            // @ts-ignore
            public last(): string;
            /**
             * Implements CharacterIterator.setIndex() for String.
             */
            // @ts-ignore
            public setIndex(p: number): string;
            /**
             * Implements CharacterIterator.current() for String.
             */
            // @ts-ignore
            public current(): string;
            /**
             * Implements CharacterIterator.next() for String.
             */
            // @ts-ignore
            public next(): string;
            /**
             * Implements CharacterIterator.previous() for String.
             */
            // @ts-ignore
            public previous(): string;
            /**
             * Implements CharacterIterator.getBeginIndex() for String.
             */
            // @ts-ignore
            public getBeginIndex(): number;
            /**
             * Implements CharacterIterator.getEndIndex() for String.
             */
            // @ts-ignore
            public getEndIndex(): number;
            /**
             * Implements CharacterIterator.getIndex() for String.
             */
            // @ts-ignore
            public getIndex(): number;
            /**
             * Compares the equality of two StringCharacterIterator objects.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Computes a hashcode for this iterator.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Creates a copy of this iterator.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
