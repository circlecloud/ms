declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
            interface ServerOperator {
                /**
                 * Checks if this object is a server operator
                 */
                 isOp(): boolean;
                /**
                 * Sets the operator status of this object
                 */
                 setOp(value: boolean): void;
            }
        }
    }
}
