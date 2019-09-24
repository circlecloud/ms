declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface BubbleColumn extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'drag' property.
                         */
                         isDrag(): boolean;
                        /**
                         * Sets the value of the 'drag' property.
                         */
                         setDrag(drag: boolean): void;
                    }
                }
            }
        }
    }
}
