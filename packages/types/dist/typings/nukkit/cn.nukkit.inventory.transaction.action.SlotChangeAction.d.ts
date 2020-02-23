declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace action {
                    // @ts-ignore
                     class SlotChangeAction extends cn.nukkit.inventory.transaction.action.InventoryAction {
                        // @ts-ignore
                        constructor(inventory: cn.nukkit.inventory.Inventory, inventorySlot: number, sourceItem: cn.nukkit.item.Item, targetItem: cn.nukkit.item.Item)
                        // @ts-ignore
                        protected inventory: cn.nukkit.inventory.Inventory;
                        /**
                         * Returns the inventory involved in this action.
                         */
                        // @ts-ignore
                        public getInventory(): cn.nukkit.inventory.Inventory;
                        /**
                         * Returns the inventorySlot in the inventory which this action modified.
                         */
                        // @ts-ignore
                        public getSlot(): number;
                        /**
                         * Checks if the item in the inventory at the specified inventorySlot is the same as this action's source item.
                         */
                        // @ts-ignore
                        public isValid(source: cn.nukkit.Player): boolean;
                        /**
                         * Sets the item into the target inventory.
                         */
                        // @ts-ignore
                        public execute(source: cn.nukkit.Player): boolean;
                        /**
                         * Sends inventorySlot changes to other viewers of the inventory. This will not send any change back to the source Player.
                         */
                        // @ts-ignore
                        public onExecuteSuccess(source: cn.nukkit.Player): void;
                        /**
                         * Sends the original inventorySlot contents to the source player to revert the action.
                         */
                        // @ts-ignore
                        public onExecuteFail(source: cn.nukkit.Player): void;
                        // @ts-ignore
                        public onAddToTransaction(transaction: cn.nukkit.inventory.transaction.InventoryTransaction): void;
                    }
                }
            }
        }
    }
}
