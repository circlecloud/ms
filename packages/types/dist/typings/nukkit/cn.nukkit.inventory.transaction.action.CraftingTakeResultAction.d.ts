declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace action {
                    // @ts-ignore
                     class CraftingTakeResultAction extends cn.nukkit.inventory.transaction.action.InventoryAction {
                        // @ts-ignore
                        constructor(sourceItem: cn.nukkit.item.Item, targetItem: cn.nukkit.item.Item)
                        // @ts-ignore
                        public onAddToTransaction(transaction: cn.nukkit.inventory.transaction.InventoryTransaction): void;
                        // @ts-ignore
                        public isValid(source: cn.nukkit.Player): boolean;
                        // @ts-ignore
                        public execute(source: cn.nukkit.Player): boolean;
                        // @ts-ignore
                        public onExecuteSuccess($source: cn.nukkit.Player): void;
                        // @ts-ignore
                        public onExecuteFail(source: cn.nukkit.Player): void;
                    }
                }
            }
        }
    }
}
