declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace connection {
                // @ts-ignore
                 class DownstreamBridge extends net.md_5.bungee.netty.PacketHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public exception(t: java.lang.Throwable): void;
                    // @ts-ignore
                    public disconnected(channel: any /*net.md_5.bungee.netty.ChannelWrapper*/): void;
                    // @ts-ignore
                    public shouldHandle(packet: PacketWrapper): boolean;
                    // @ts-ignore
                    public handle(packet: PacketWrapper): void;
                    // @ts-ignore
                    public handle(alive: KeepAlive): void;
                    // @ts-ignore
                    public handle(playerList: PlayerListItem): void;
                    // @ts-ignore
                    public handle(objective: ScoreboardObjective): void;
                    // @ts-ignore
                    public handle(score: ScoreboardScore): void;
                    // @ts-ignore
                    public handle(displayScoreboard: ScoreboardDisplay): void;
                    // @ts-ignore
                    public handle(team: any /*net.md_5.bungee.protocol.packet.Team*/): void;
                    // @ts-ignore
                    public handle(pluginMessage: PluginMessage): void;
                    // @ts-ignore
                    public handle(kick: Kick): void;
                    // @ts-ignore
                    public handle(setCompression: SetCompression): void;
                    // @ts-ignore
                    public handle(tabCompleteResponse: TabCompleteResponse): void;
                    // @ts-ignore
                    public handle(bossBar: BossBar): void;
                    // @ts-ignore
                    public handle(respawn: Respawn): void;
                    // @ts-ignore
                    public handle(commands: Commands): void;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
