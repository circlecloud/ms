declare namespace cn {
    namespace nukkit {
        namespace blockentity {
            // @ts-ignore
            interface BlockEntityContainer {
                /**
                 * 返回一个存储在容器里的物品的{@code Item}对象。<br>
                 * Returns an item that stores in this container, as an {@code Item} object.
                 */
                // @ts-ignore
                 getItem(index: number): cn.nukkit.item.Item;
                /**
                 * 把一个物品存储进容器。<br>
                 * Sets or stores this item into this container.
                 * <p>注意：如果这个容器相应的索引序号已经有了物品，那么新存储的物品将会替换原有的物品。<br>
                 * Notice: If there is already an item for this index number, the new item being stored will REPLACE the old one.</p>
                 */
                // @ts-ignore
                 setItem(index: number, item: cn.nukkit.item.Item): void;
                /**
                 * 返回这个容器最多能包含的物品数量。<br>
                 * Returns the max number of items that this container can contain.
                 */
                // @ts-ignore
                 getSize(): number;
            }
        }
    }
}
