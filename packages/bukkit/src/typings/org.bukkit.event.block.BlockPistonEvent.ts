declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                abstract class BlockPistonEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, direction: org.bukkit.block.BlockFace)
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    /**
                     * Returns true if the Piston in the event is sticky.
                     */
                    public isSticky(): boolean;
                    /**
                     * Return the direction in which the piston will operate.
                     */
                    public getDirection(): org.bukkit.block.BlockFace;
                }
            }
        }
    }
}
