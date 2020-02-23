declare namespace cn {
    namespace nukkit {
        namespace inventory {
            namespace transaction {
                // @ts-ignore
                 class InventoryTransaction extends java.lang.Object {
                    // @ts-ignore
                    constructor(source: cn.nukkit.Player, actions: java.util.List)
                    // @ts-ignore
                    constructor(source: cn.nukkit.Player, actions: java.util.List, init: boolean)
                    // @ts-ignore
                    protected source: cn.nukkit.Player;
                    // @ts-ignore
                    protected inventories: java.util.Set;
                    // @ts-ignore
                    protected actions: java.util.Set;
                    // @ts-ignore
                    protected init(source: cn.nukkit.Player, actions: java.util.List): void;
                    // @ts-ignore
                    public getSource(): cn.nukkit.Player;
                    // @ts-ignore
                    public getCreationTime(): number;
                    // @ts-ignore
                    public getInventories(): java.util.Set;
                    // @ts-ignore
                    public getActions(): java.util.Set;
                    // @ts-ignore
                    public addAction(action: cn.nukkit.inventory.transaction.action.InventoryAction): void;
                    /**
                     * This method should not be used by plugins, it's used to add tracked inventories for InventoryActions
                     * involving inventories.
                     */
                    // @ts-ignore
                    public addInventory(inventory: cn.nukkit.inventory.Inventory): void;
                    // @ts-ignore
                    protected matchItems(needItems: java.util.List, haveItems: java.util.List): boolean;
                    // @ts-ignore
                    protected sendInventories(): void;
                    /**
                     * Iterates over SlotChangeActions in this transaction and compacts any which refer to the same inventorySlot in the same
                     * inventory so they can be correctly handled.
                     * <p>
                     * Under normal circumstances, the same inventorySlot would never be changed more than once in a single transaction. However,
                     * due to the way things like the crafting grid are "implemented" in MCPE 1.2 (a.k.a. hacked-in), we may get
                     * multiple inventorySlot changes referring to the same inventorySlot in a single transaction. These multiples are not even guaranteed
                     * to be in the correct order (inventorySlot splitting in the crafting grid for example, causes the actions to be sent in the
                     * wrong order), so this method also tries to chain them into order.
                     * </p>
                     */
                    // @ts-ignore
                    protected squashDuplicateSlotChanges(): boolean;
                    // @ts-ignore
                    public canExecute(): boolean;
                    // @ts-ignore
                    protected callExecuteEvent(): boolean;
                    // @ts-ignore
                    public execute(): boolean;
                    // @ts-ignore
                    public hasExecuted(): boolean;
                }
            }
        }
    }
}
