declare namespace cn {
    namespace nukkit {
        namespace permission {
            // @ts-ignore
            interface ServerOperator {
                /**
                 * 返回这个对象是不是服务器管理员。<br>
                 * Returns if this object is an operator.
                 */
                // @ts-ignore
                 isOp(): boolean;
                /**
                 * 把这个对象设置成服务器管理员。<br>
                 * Sets this object to be an operator or not to be.
                 */
                // @ts-ignore
                 setOp(value: boolean): void;
            }
        }
    }
}
