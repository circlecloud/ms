declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface OfflinePlayer extends org.bukkit.permissions.ServerOperator, org.bukkit.entity.AnimalTamer, org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Checks if this player is currently online
             */
             isOnline(): boolean;
            /**
             * Returns the name of this player
             * <p>
             * Names are no longer unique past a single game session. For persistent storage
             * it is recommended that you use {@link #getUniqueId()} instead.
             */
             getName(): string;
            /**
             * Returns the UUID of this player
             */
             getUniqueId(): any;
            /**
             * Checks if this player is banned or not
             */
             isBanned(): boolean;
            /**
             * Checks if this player is whitelisted or not
             */
             isWhitelisted(): boolean;
            /**
             * Sets if this player is whitelisted or not
             */
             setWhitelisted(value: boolean): void;
            /**
             * Gets a {@link Player} object that this represents, if there is one
             * <p>
             * If the player is online, this will return that player. Otherwise,
             * it will return null.
             */
             getPlayer(): org.bukkit.entity.Player;
            /**
             * Gets the first date and time that this player was witnessed on this
             * server.
             * <p>
             * If the player has never played before, this will return 0. Otherwise,
             * it will be the amount of milliseconds since midnight, January 1, 1970
             * UTC.
             */
             getFirstPlayed(): number;
            /**
             * Gets the last date and time that this player was witnessed on this
             * server.
             * <p>
             * If the player has never played before, this will return 0. Otherwise,
             * it will be the amount of milliseconds since midnight, January 1, 1970
             * UTC.
             */
             getLastPlayed(): number;
            /**
             * Checks if this player has played on this server before.
             */
             hasPlayedBefore(): boolean;
            /**
             * Gets the Location where the player will spawn at their bed, null if
             * they have not slept in one or their current bed spawn is invalid.
             */
             getBedSpawnLocation(): org.bukkit.Location;
        }
    }
}
