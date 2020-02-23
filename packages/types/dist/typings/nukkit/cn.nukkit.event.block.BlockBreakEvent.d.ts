declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class BlockBreakEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item, instaBreak: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item, instaBreak: boolean, fastBreak: boolean)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, block: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, item: cn.nukkit.item.Item, drops: cn.nukkit.item.Item, instaBreak: boolean, fastBreak: boolean)
                    // @ts-ignore
                    protected player: cn.nukkit.Player;
                    // @ts-ignore
                    protected item: cn.nukkit.item.Item;
                    // @ts-ignore
                    protected face: cn.nukkit.math.BlockFace;
                    // @ts-ignore
                    protected instaBreak: boolean;
                    // @ts-ignore
                    protected blockDrops: cn.nukkit.item.Item[];
                    // @ts-ignore
                    protected blockXP: number;
                    // @ts-ignore
                    protected fastBreak: boolean;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player;
                    // @ts-ignore
                    public getFace(): cn.nukkit.math.BlockFace;
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item;
                    // @ts-ignore
                    public getInstaBreak(): boolean;
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[];
                    // @ts-ignore
                    public setDrops(drops: cn.nukkit.item.Item): void;
                    // @ts-ignore
                    public getDropExp(): number;
                    // @ts-ignore
                    public setDropExp(xp: number): void;
                    // @ts-ignore
                    public setInstaBreak(instaBreak: boolean): void;
                    // @ts-ignore
                    public isFastBreak(): boolean;
                }
            }
        }
    }
}
