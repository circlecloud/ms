declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    // @ts-ignore
                    interface ProxiedPlayer extends net.md_5.bungee.api.connection.Connection, net.md_5.bungee.api.CommandSender {
                        /**
                         * Gets this player's display name.
                         */
                        // @ts-ignore
                         getDisplayName(): string;
                        /**
                         * Sets this players display name to be used as their nametag and tab list
                         * name.
                         */
                        // @ts-ignore
                         setDisplayName(name: string): void;
                        /**
                         * Send a message to the specified screen position of this player.
                         */
                        // @ts-ignore
                         sendMessage(position: ChatMessageType, message: BaseComponent): void;
                        /**
                         * Send a message to the specified screen position of this player.
                         */
                        // @ts-ignore
                         sendMessage(position: ChatMessageType, message: BaseComponent): void;
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         */
                        // @ts-ignore
                         connect(target: net.md_5.bungee.api.config.ServerInfo): void;
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         */
                        // @ts-ignore
                         connect(target: net.md_5.bungee.api.config.ServerInfo, reason: net.md_5.bungee.api.event.ServerConnectEvent.Reason): void;
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         */
                        // @ts-ignore
                         connect(target: net.md_5.bungee.api.config.ServerInfo, callback: net.md_5.bungee.api.Callback): void;
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         */
                        // @ts-ignore
                         connect(target: net.md_5.bungee.api.config.ServerInfo, callback: net.md_5.bungee.api.Callback, reason: net.md_5.bungee.api.event.ServerConnectEvent.Reason): void;
                        /**
                         * Connects / transfers this user to the specified connection, gracefully
                         * closing the current one. Depending on the implementation, this method
                         * might return before the user has been connected.
                         */
                        // @ts-ignore
                         connect(request: net.md_5.bungee.api.ServerConnectRequest): void;
                        /**
                         * Gets the server this player is connected to.
                         */
                        // @ts-ignore
                         getServer(): net.md_5.bungee.api.connection.Server;
                        /**
                         * Gets the ping time between the proxy and this connection.
                         */
                        // @ts-ignore
                         getPing(): number;
                        /**
                         * Send a plugin message to this player.
                         * In recent Minecraft versions channel names must contain a colon separator
                         * and consist of [a-z0-9/._-]. This will be enforced in a future version.
                         * The "BungeeCord" channel is an exception and may only take this form.
                         */
                        // @ts-ignore
                         sendData(channel: string, data: number): void;
                        /**
                         * Get the pending connection that belongs to this player.
                         */
                        // @ts-ignore
                         getPendingConnection(): net.md_5.bungee.api.connection.PendingConnection;
                        /**
                         * Make this player chat (say something), to the server he is currently on.
                         */
                        // @ts-ignore
                         chat(message: string): void;
                        /**
                         * Get the server which this player will be sent to next time the log in.
                         */
                        // @ts-ignore
                         getReconnectServer(): net.md_5.bungee.api.config.ServerInfo;
                        /**
                         * Set the server which this player will be sent to next time the log in.
                         */
                        // @ts-ignore
                         setReconnectServer(server: net.md_5.bungee.api.config.ServerInfo): void;
                        /**
                         * Get this connection's UUID, if set.
                         */
                        // @ts-ignore
                         getUUID(): string;
                        /**
                         * Get this connection's UUID, if set.
                         */
                        // @ts-ignore
                         getUniqueId(): java.util.UUID;
                        /**
                         * Gets this player's locale.
                         */
                        // @ts-ignore
                         getLocale(): java.util.Locale;
                        /**
                         * Gets this player's view distance.
                         */
                        // @ts-ignore
                         getViewDistance(): number;
                        /**
                         * Gets this player's chat mode.
                         */
                        // @ts-ignore
                         getChatMode(): net.md_5.bungee.api.connection.ProxiedPlayer.ChatMode;
                        /**
                         * Gets if this player has chat colors enabled or disabled.
                         */
                        // @ts-ignore
                         hasChatColors(): boolean;
                        /**
                         * Gets this player's skin settings.
                         */
                        // @ts-ignore
                         getSkinParts(): net.md_5.bungee.api.SkinConfiguration;
                        /**
                         * Gets this player's main hand setting.
                         */
                        // @ts-ignore
                         getMainHand(): net.md_5.bungee.api.connection.ProxiedPlayer.MainHand;
                        /**
                         * Set the header and footer displayed in the tab player list.
                         */
                        // @ts-ignore
                         setTabHeader(header: BaseComponent, footer: BaseComponent): void;
                        /**
                         * Set the header and footer displayed in the tab player list.
                         */
                        // @ts-ignore
                         setTabHeader(header: BaseComponent, footer: BaseComponent): void;
                        /**
                         * Clears the header and footer displayed in the tab player list.
                         */
                        // @ts-ignore
                         resetTabHeader(): void;
                        /**
                         * Sends a {@link Title} to this player. This is the same as calling
                         * {@link Title#send(ProxiedPlayer)}.
                         */
                        // @ts-ignore
                         sendTitle(title: net.md_5.bungee.api.Title): void;
                        /**
                         * Gets whether this player is using a FML client.
                         * <p>
                         * This method is only reliable if BungeeCord links Minecraft 1.8 servers
                         * together, as Bungee can pick up whether a user is a Forge user with the
                         * initial handshake. If this is used for a 1.7 network, this might return
                         * <code>false</code> even if the user is a FML user, as Bungee can only
                         * determine this information if a handshake successfully completes.
                         * </p>
                         */
                        // @ts-ignore
                         isForgeUser(): boolean;
                        /**
                         * Gets this player's Forge Mod List, if the player has sent this
                         * information during the lifetime of their connection to Bungee. There is
                         * no guarantee that information is available at any time, as it is only
                         * sent during a FML handshake. Therefore, this will only contain
                         * information for a user that has attempted joined a Forge server.
                         * <p>
                         * Consumers of this API should be aware that an empty mod list does
                         * <em>not</em> indicate that a user is not a Forge user, and so should not
                         * use this API to check for this. See the {@link #isForgeUser()
                         * isForgeUser} method instead.
                         * </p>
                         * <p>
                         * Calling this when handling a
                         * {@link net.md_5.bungee.api.event.ServerConnectedEvent} may be the best
                         * place to do so as this event occurs after a FML handshake has completed,
                         * if any has occurred.
                         * </p>
                         */
                        // @ts-ignore
                         getModList(): java.util.Map;
                        /**
                         * Get the {@link Scoreboard} that belongs to this player.
                         */
                        // @ts-ignore
                         getScoreboard(): net.md_5.bungee.api.score.Scoreboard;
                    }
                }
            }
        }
    }
}
