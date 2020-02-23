declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class SignChangeEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block, player: cn.nukkit.Player, lines: string)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player;
                    // @ts-ignore
                    public getLines(): java.lang.String[];
                    // @ts-ignore
                    public getLine(index: number): string;
                    // @ts-ignore
                    public setLine(index: number, line: string): void;
                }
            }
        }
    }
}
