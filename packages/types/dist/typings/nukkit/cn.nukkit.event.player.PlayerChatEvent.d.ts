declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerChatEvent extends cn.nukkit.event.player.PlayerMessageEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, message: string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, message: string, format: string, recipients: java.util.Set)
                    // @ts-ignore
                    protected format: string;
                    // @ts-ignore
                    protected recipients: java.util.Set;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    /**
                     * Changes the player that is sending the message
                     */
                    // @ts-ignore
                    public setPlayer(player: cn.nukkit.Player): void;
                    // @ts-ignore
                    public getFormat(): string;
                    // @ts-ignore
                    public setFormat(format: string): void;
                    // @ts-ignore
                    public getRecipients(): java.util.Set;
                    // @ts-ignore
                    public setRecipients(recipients: java.util.Set): void;
                }
            }
        }
    }
}
