declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockRedstoneEvent extends cn.nukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block, oldPower: number, newPower: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getOldPower(): number;
                    // @ts-ignore
                    public getNewPower(): number;
                }
            }
        }
    }
}
