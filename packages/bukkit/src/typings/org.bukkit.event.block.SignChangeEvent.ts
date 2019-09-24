declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class SignChangeEvent implements org.bukkit.event.Cancellable {
                    constructor(theBlock: org.bukkit.block.Block, thePlayer: org.bukkit.entity.Player, theLines: string)
                    /**
                     * Gets the player changing the sign involved in this event.
                     */
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets all of the lines of text from the sign involved in this event.
                     */
                    public getLines(): any;
                    /**
                     * Gets a single line of text from the sign involved in this event.
                     */
                    public getLine(index: number): string;
                    /**
                     * Sets a single line for the sign involved in this event
                     */
                    public setLine(index: number, line: string): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
