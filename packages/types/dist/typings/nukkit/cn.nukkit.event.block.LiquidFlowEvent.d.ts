declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class LiquidFlowEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(to: cn.nukkit.block.Block, source: cn.nukkit.block.BlockLiquid, newFlowDecay: number)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getNewFlowDecay(): number;
                    // @ts-ignore
                    public getSource(): cn.nukkit.block.BlockLiquid;
                    // @ts-ignore
                    public getTo(): cn.nukkit.block.Block;
                }
            }
        }
    }
}
