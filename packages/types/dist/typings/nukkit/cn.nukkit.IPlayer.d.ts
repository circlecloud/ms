declare namespace cn {
    namespace nukkit {
        // @ts-ignore
        interface IPlayer extends cn.nukkit.permission.ServerOperator, cn.nukkit.metadata.Metadatable {
            /**
             * 返回这个玩家是否在线。<br>
             * Returns if this player is online.
             */
            // @ts-ignore
             isOnline(): boolean;
            /**
             * 返回这个玩家的名称。<br>
             * Returns the name of this player.
             * <p>如果是在线的玩家，这个函数只会返回登录名字。如果要返回显示的名字，参见{@link cn.nukkit.Player#getDisplayName}<br>
             * Notice that this will only return its login name. If you need its display name, turn to
             * {@link cn.nukkit.Player#getDisplayName}</p>
             */
            // @ts-ignore
             getName(): string;
            // @ts-ignore
             getUniqueId(): java.util.UUID;
            /**
             * 返回这个玩家是否被封禁(ban)。<br>
             * Returns if this player is banned.
             */
            // @ts-ignore
             isBanned(): boolean;
            /**
             * 设置这个玩家是否被封禁(ban)。<br>
             * Sets this player to be banned or to be pardoned.
             */
            // @ts-ignore
             setBanned(value: boolean): void;
            /**
             * 返回这个玩家是否已加入白名单。<br>
             * Returns if this player is pardoned by whitelist.
             */
            // @ts-ignore
             isWhitelisted(): boolean;
            /**
             * 把这个玩家加入白名单，或者取消这个玩家的白名单。<br>
             * Adds this player to the white list, or removes it from the whitelist.
             */
            // @ts-ignore
             setWhitelisted(value: boolean): void;
            /**
             * 得到这个接口的{@code Player}对象。<br>
             * Returns a {@code Player} object for this interface.
             */
            // @ts-ignore
             getPlayer(): cn.nukkit.Player;
            /**
             * 返回玩家所在的服务器。<br>
             * Returns the server carrying this player.
             */
            // @ts-ignore
             getServer(): cn.nukkit.Server;
            /**
             * 得到这个玩家第一次游戏的时间。<br>
             * Returns the time this player first played in this server.
             */
            // @ts-ignore
             getFirstPlayed(): java.lang.Long;
            /**
             * 得到这个玩家上次加入游戏的时间。<br>
             * Returns the time this player last joined in this server.
             */
            // @ts-ignore
             getLastPlayed(): java.lang.Long;
            /**
             * 返回这个玩家以前是否来过服务器。<br>
             * Returns if this player has played in this server before.
             * <p>如果想得到这个玩家是不是第一次玩，可以使用：<br>
             * If you want to know if this player is the first time playing in this server, you can use:<br>
             * </p>
             * <pre>if(!player.hasPlayerBefore()) {...}</pre>
             */
            // @ts-ignore
             hasPlayedBefore(): boolean;
        }
    }
}
