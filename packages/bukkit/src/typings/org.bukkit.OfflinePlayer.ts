declare namespace org {
    namespace bukkit {
        class OfflinePlayer {
            /**
             * Checks if this player is currently online
             */
            public isOnline(): boolean;
            /**
             * Returns the name of this player
             * <p>
             * Names are no longer unique past a single game session. For persistent storage
             * it is recommended that you use {@link #getUniqueId()} instead.
             */
            public getName(): string;
            /**
             * Returns the UUID of this player
             */
            public getUniqueId(): any;
            /**
             * Checks if this player is banned or not
             */
            public isBanned(): boolean;
            /**
             * Checks if this player is whitelisted or not
             */
            public isWhitelisted(): boolean;
            /**
             * Sets if this player is whitelisted or not
             */
            public setWhitelisted(value: boolean): void;
            /**
             * Gets a {@link Player} object that this represents, if there is one
             * <p>
             * If the player is online, this will return that player. Otherwise,
             * it will return null.
             */
            public getPlayer(): org.bukkit.entity.Player;
            /**
             * Gets the first date and time that this player was witnessed on this
             * server.
             * <p>
             * If the player has never played before, this will return 0. Otherwise,
             * it will be the amount of milliseconds since midnight, January 1, 1970
             * UTC.
             */
            public getFirstPlayed(): number;
            /**
             * Gets the last date and time that this player was witnessed on this
             * server.
             * <p>
             * If the player has never played before, this will return 0. Otherwise,
             * it will be the amount of milliseconds since midnight, January 1, 1970
             * UTC.
             */
            public getLastPlayed(): number;
            /**
             * Checks if this player has played on this server before.
             */
            public hasPlayedBefore(): boolean;
            /**
             * Gets the Location where the player will spawn at their bed, null if
             * they have not slept in one or their current bed spawn is invalid.
             */
            public getBedSpawnLocation(): org.bukkit.Location;
        }
    }
}
