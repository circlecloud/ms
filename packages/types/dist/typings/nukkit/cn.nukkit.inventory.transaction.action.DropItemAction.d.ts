declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace action {
                    // @ts-ignore
                     class DropItemAction extends cn.nukkit.inventory.transaction.action.InventoryAction {
                        // @ts-ignore
                        constructor(source: cn.nukkit.item.Item, target: cn.nukkit.item.Item)
                        /**
                         * Verifies that the source item of a drop-item action must be air. This is not strictly necessary, just a sanity
                         * check.
                         */
                        // @ts-ignore
                        public isValid(source: cn.nukkit.Player): boolean;
                        // @ts-ignore
                        public onPreExecute(source: cn.nukkit.Player): boolean;
                        /**
                         * Drops the target item in front of the player.
                         */
                        // @ts-ignore
                        public execute(source: cn.nukkit.Player): boolean;
                        // @ts-ignore
                        public onExecuteSuccess(source: cn.nukkit.Player): void;
                        // @ts-ignore
                        public onExecuteFail(source: cn.nukkit.Player): void;
                    }
                }
            }
        }
    }
}
