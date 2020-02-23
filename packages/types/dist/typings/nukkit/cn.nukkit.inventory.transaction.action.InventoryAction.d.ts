declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace action {
                    // @ts-ignore
                    abstract class InventoryAction extends java.lang.Object {
                        // @ts-ignore
                        constructor(sourceItem: cn.nukkit.item.Item, targetItem: cn.nukkit.item.Item)
                        // @ts-ignore
                        protected sourceItem: cn.nukkit.item.Item;
                        // @ts-ignore
                        protected targetItem: cn.nukkit.item.Item;
                        // @ts-ignore
                        public getCreationTime(): number;
                        /**
                         * Returns the item that was present before the action took place.
                         */
                        // @ts-ignore
                        public getSourceItem(): cn.nukkit.item.Item;
                        /**
                         * Returns the item that the action attempted to replace the source item with.
                         */
                        // @ts-ignore
                        public getTargetItem(): cn.nukkit.item.Item;
                        /**
                         * Called by inventory transactions before any actions are processed. If this returns false, the transaction will
                         * be cancelled.
                         */
                        // @ts-ignore
                        public onPreExecute(source: cn.nukkit.Player): boolean;
                        /**
                         * Returns whether this action is currently valid. This should perform any necessary sanity checks.
                         */
                        // @ts-ignore
                        public abstract isValid(source: cn.nukkit.Player): boolean;
                        /**
                         * Called when the action is added to the specified InventoryTransaction.
                         */
                        // @ts-ignore
                        public onAddToTransaction(transaction: cn.nukkit.inventory.transaction.InventoryTransaction): void;
                        /**
                         * Performs actions needed to complete the inventory-action server-side. Returns if it was successful. Will return
                         * false if plugins cancelled events. This will only be called if the transaction which it is part of is considered
                         * valid.
                         */
                        // @ts-ignore
                        public abstract execute(source: cn.nukkit.Player): boolean;
                        /**
                         * Performs additional actions when this inventory-action completed successfully.
                         */
                        // @ts-ignore
                        public abstract onExecuteSuccess(source: cn.nukkit.Player): void;
                        /**
                         * Performs additional actions when this inventory-action did not complete successfully.
                         */
                        // @ts-ignore
                        public abstract onExecuteFail(source: cn.nukkit.Player): void;
                    }
                }
            }
        }
    }
}
