declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class SignChangeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, thePlayer: org.bukkit.entity.Player, theLines: string)
                    /**
                     * Gets the player changing the sign involved in this event.
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player;
                    /**
                     * Gets all of the lines of text from the sign involved in this event.
                     */
                    // @ts-ignore
                    public getLines(): java.lang.String[];
                    /**
                     * Gets a single line of text from the sign involved in this event.
                     */
                    // @ts-ignore
                    public getLine(index: number): string;
                    /**
                     * Sets a single line for the sign involved in this event
                     */
                    // @ts-ignore
                    public setLine(index: number, line: string): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
