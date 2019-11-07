// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                abstract class BlockPistonEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, direction: org.bukkit.block.BlockFace)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    /**
                     * Returns true if the Piston in the event is sticky.
                     */
                    // @ts-ignore
                    public isSticky(): boolean;
                    /**
                     * Return the direction in which the piston will operate.
                     */
                    // @ts-ignore
                    public getDirection(): org.bukkit.block.BlockFace;
                }
            }
        }
    }
}
