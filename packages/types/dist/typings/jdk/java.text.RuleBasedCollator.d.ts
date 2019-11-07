// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
         class RuleBasedCollator extends java.text.Collator {
            /**
             * RuleBasedCollator constructor.  This takes the table rules and builds
             * a collation table out of them.  Please see RuleBasedCollator class
             * description for more details on the collation rule syntax.
             */
            // @ts-ignore
            constructor(rules: string)
            /**
             * Gets the table-based rules for the collation object.
             */
            // @ts-ignore
            public getRules(): string;
            /**
             * Returns a CollationElementIterator for the given String.
             */
            // @ts-ignore
            public getCollationElementIterator(source: string): java.text.CollationElementIterator;
            /**
             * Returns a CollationElementIterator for the given CharacterIterator.
             */
            // @ts-ignore
            public getCollationElementIterator(source: java.text.CharacterIterator): java.text.CollationElementIterator;
            /**
             * Compares the character data stored in two different strings based on the
             * collation rules.  Returns information about whether a string is less
             * than, greater than or equal to another string in a language.
             * This can be overriden in a subclass.
             */
            // @ts-ignore
            public compare(source: string, target: string): number;
            /**
             * Transforms the string into a series of characters that can be compared
             * with CollationKey.compareTo. This overrides java.text.Collator.getCollationKey.
             * It can be overriden in a subclass.
             */
            // @ts-ignore
            public getCollationKey(source: string): java.text.CollationKey;
            /**
             * Standard override; no change in semantics.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Compares the equality of two collation objects.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Generates the hash code for the table-based collation object
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
