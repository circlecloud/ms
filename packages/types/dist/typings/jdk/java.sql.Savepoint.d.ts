// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Savepoint {
            /**
             * Retrieves the generated ID for the savepoint that this
             * <code>Savepoint</code> object represents.
             */
            // @ts-ignore
             getSavepointId(): number;
            /**
             * Retrieves the name of the savepoint that this <code>Savepoint</code>
             * object represents.
             */
            // @ts-ignore
             getSavepointName(): string;
        }
    }
}
