declare namespace org {
    namespace bukkit {
        namespace permissions {
            class ServerOperator {
                /**
                 * Checks if this object is a server operator
                 */
                public isOp(): boolean;
                /**
                 * Sets the operator status of this object
                 */
                public setOp(value: boolean): void;
            }
        }
    }
}
