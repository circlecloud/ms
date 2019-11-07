declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
            interface ServerOperator {
                /**
                 * Checks if this object is a server operator
                 */
                // @ts-ignore
                 isOp(): boolean;
                /**
                 * Sets the operator status of this object
                 */
                // @ts-ignore
                 setOp(value: boolean): void;
            }
        }
    }
}
