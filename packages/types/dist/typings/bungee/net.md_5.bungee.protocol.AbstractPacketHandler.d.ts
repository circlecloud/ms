declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace protocol {
                // @ts-ignore
                abstract class AbstractPacketHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public handle(ping: net.md_5.bungee.protocol.packet.LegacyPing): void;
                    // @ts-ignore
                    public handle(tabResponse: net.md_5.bungee.protocol.packet.TabCompleteResponse): void;
                    // @ts-ignore
                    public handle(ping: net.md_5.bungee.protocol.packet.PingPacket): void;
                    // @ts-ignore
                    public handle(statusRequest: net.md_5.bungee.protocol.packet.StatusRequest): void;
                    // @ts-ignore
                    public handle(statusResponse: net.md_5.bungee.protocol.packet.StatusResponse): void;
                    // @ts-ignore
                    public handle(handshake: net.md_5.bungee.protocol.packet.Handshake): void;
                    // @ts-ignore
                    public handle(keepAlive: net.md_5.bungee.protocol.packet.KeepAlive): void;
                    // @ts-ignore
                    public handle(login: net.md_5.bungee.protocol.packet.Login): void;
                    // @ts-ignore
                    public handle(chat: net.md_5.bungee.protocol.packet.Chat): void;
                    // @ts-ignore
                    public handle(respawn: net.md_5.bungee.protocol.packet.Respawn): void;
                    // @ts-ignore
                    public handle(loginRequest: net.md_5.bungee.protocol.packet.LoginRequest): void;
                    // @ts-ignore
                    public handle(settings: net.md_5.bungee.protocol.packet.ClientSettings): void;
                    // @ts-ignore
                    public handle(clientStatus: net.md_5.bungee.protocol.packet.ClientStatus): void;
                    // @ts-ignore
                    public handle(playerListItem: net.md_5.bungee.protocol.packet.PlayerListItem): void;
                    // @ts-ignore
                    public handle(playerListHeaderFooter: net.md_5.bungee.protocol.packet.PlayerListHeaderFooter): void;
                    // @ts-ignore
                    public handle(tabComplete: net.md_5.bungee.protocol.packet.TabCompleteRequest): void;
                    // @ts-ignore
                    public handle(scoreboardObjective: net.md_5.bungee.protocol.packet.ScoreboardObjective): void;
                    // @ts-ignore
                    public handle(scoreboardScore: net.md_5.bungee.protocol.packet.ScoreboardScore): void;
                    // @ts-ignore
                    public handle(encryptionRequest: net.md_5.bungee.protocol.packet.EncryptionRequest): void;
                    // @ts-ignore
                    public handle(displayScoreboard: net.md_5.bungee.protocol.packet.ScoreboardDisplay): void;
                    // @ts-ignore
                    public handle(team: net.md_5.bungee.protocol.packet.Team): void;
                    // @ts-ignore
                    public handle(title: net.md_5.bungee.protocol.packet.Title): void;
                    // @ts-ignore
                    public handle(pluginMessage: net.md_5.bungee.protocol.packet.PluginMessage): void;
                    // @ts-ignore
                    public handle(kick: net.md_5.bungee.protocol.packet.Kick): void;
                    // @ts-ignore
                    public handle(encryptionResponse: net.md_5.bungee.protocol.packet.EncryptionResponse): void;
                    // @ts-ignore
                    public handle(loginSuccess: net.md_5.bungee.protocol.packet.LoginSuccess): void;
                    // @ts-ignore
                    public handle(legacyHandshake: net.md_5.bungee.protocol.packet.LegacyHandshake): void;
                    // @ts-ignore
                    public handle(setCompression: net.md_5.bungee.protocol.packet.SetCompression): void;
                    // @ts-ignore
                    public handle(bossBar: net.md_5.bungee.protocol.packet.BossBar): void;
                    // @ts-ignore
                    public handle(request: net.md_5.bungee.protocol.packet.LoginPayloadRequest): void;
                    // @ts-ignore
                    public handle(response: net.md_5.bungee.protocol.packet.LoginPayloadResponse): void;
                    // @ts-ignore
                    public handle(status: net.md_5.bungee.protocol.packet.EntityStatus): void;
                    // @ts-ignore
                    public handle(commands: net.md_5.bungee.protocol.packet.Commands): void;
                    // @ts-ignore
                    public handle(viewDistance: net.md_5.bungee.protocol.packet.ViewDistance): void;
                }
            }
        }
    }
}
