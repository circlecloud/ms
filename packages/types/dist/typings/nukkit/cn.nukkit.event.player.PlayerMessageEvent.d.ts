declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                abstract class PlayerMessageEvent extends cn.nukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    protected message: string;
                    // @ts-ignore
                    public getMessage(): string;
                    // @ts-ignore
                    public setMessage(message: string): void;
                }
            }
        }
    }
}
