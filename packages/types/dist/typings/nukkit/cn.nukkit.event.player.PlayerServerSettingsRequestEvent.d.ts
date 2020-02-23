declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerServerSettingsRequestEvent extends cn.nukkit.event.player.PlayerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, settings: java.util.Map)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getSettings(): java.util.Map;
                    // @ts-ignore
                    public setSettings(settings: java.util.Map): void;
                    // @ts-ignore
                    public setSettings(id: number, window: cn.nukkit.form.window.FormWindow): void;
                }
            }
        }
    }
}
