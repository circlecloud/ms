declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                abstract class InventoryInteractEvent extends org.bukkit.event.inventory.InventoryEvent implements org.bukkit.event.Cancellable {
                    constructor(transaction: org.bukkit.inventory.InventoryView)
                    /**
                     * Gets the player who performed the click.
                     */
                    public getWhoClicked(): org.bukkit.entity.HumanEntity;
                    /**
                     * Sets the result of this event. This will change whether or not this
                     * event is considered cancelled.
                     */
                    public setResult(newResult: org.bukkit.event.Event.Result): void;
                    /**
                     * Gets the {@link org.bukkit.event.Event.Result} of this event. The Result describes the
                     * behavior that will be applied to the inventory in relation to this
                     * event.
                     */
                    public getResult(): org.bukkit.event.Event.Result;
                    /**
                     * Gets whether or not this event is cancelled. This is based off of the
                     * Result value returned by {@link #getResult()}.  Result.ALLOW and
                     * Result.DEFAULT will result in a returned value of false, but
                     * Result.DENY will result in a returned value of true.
                     * <p>
                     * {@inheritDoc}
                     */
                    public isCancelled(): boolean;
                    /**
                     * Proxy method to {@link #setResult(org.bukkit.event.Event.Result)} for the Cancellable
                     * interface. {@link #setResult(org.bukkit.event.Event.Result)} is preferred, as it allows
                     * you to specify the Result beyond Result.DENY and Result.ALLOW.
                     * <p>
                     * {@inheritDoc}
                     */
                    public setCancelled(toCancel: boolean): void;
                }
            }
        }
    }
}
