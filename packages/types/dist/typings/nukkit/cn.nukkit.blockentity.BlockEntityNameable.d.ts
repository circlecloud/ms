declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
            interface BlockEntityNameable {
                /**
                 * 返回这个事物的名字。<br>
                 * Gets the name of this object.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * 设置或更改这个事物的名字。<br>
                 * Changes the name of this object, or names it.
                 */
                // @ts-ignore
                 setName(name: string): void;
                /**
                 * 返回这个事物是否有名字。<br>
                 * Whether this object has a name.
                 */
                // @ts-ignore
                 hasName(): boolean;
            }
        }
    }
}
