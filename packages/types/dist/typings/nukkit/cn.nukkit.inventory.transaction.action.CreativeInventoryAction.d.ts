declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                namespace action {
                    // @ts-ignore
                     class CreativeInventoryAction extends cn.nukkit.inventory.transaction.action.InventoryAction {
                        // @ts-ignore
                        constructor(source: cn.nukkit.item.Item, target: cn.nukkit.item.Item, action: number)
                        // @ts-ignore
                        public static TYPE_DELETE_ITEM: number;
                        // @ts-ignore
                        public static TYPE_CREATE_ITEM: number;
                        // @ts-ignore
                        protected actionType: number;
                        /**
                         * Checks that the player is in creative, and (if creating an item) that the item exists in the creative inventory.
                         */
                        // @ts-ignore
                        public isValid(source: cn.nukkit.Player): boolean;
                        /**
                         * Returns the type of the action.
                         */
                        // @ts-ignore
                        public getActionType(): number;
                        /**
                         * No need to do anything extra here: this type just provides a place for items to disappear or appear from.
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
