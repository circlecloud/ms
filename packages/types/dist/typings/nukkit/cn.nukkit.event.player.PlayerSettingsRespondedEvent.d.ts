declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerSettingsRespondedEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, formID: number, window: cn.nukkit.form.window.FormWindow)
                    // @ts-ignore
                    protected formID: number;
                    // @ts-ignore
                    protected window: cn.nukkit.form.window.FormWindow;
                    // @ts-ignore
                    protected closed: boolean;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getFormID(): number;
                    // @ts-ignore
                    public getWindow(): cn.nukkit.form.window.FormWindow;
                    /**
                     * Can be null if player closed the window instead of submitting it
                     */
                    // @ts-ignore
                    public getResponse(): cn.nukkit.form.response.FormResponse;
                    /**
                     * Defines if player closed the window or submitted it
                     */
                    // @ts-ignore
                    public wasClosed(): boolean;
                    // @ts-ignore
                    public setCancelled(): void;
                }
            }
        }
    }
}
