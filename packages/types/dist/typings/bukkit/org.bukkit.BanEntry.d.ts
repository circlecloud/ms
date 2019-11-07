declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface BanEntry {
            /**
             * Gets the target involved. This may be in the form of an IP or a player
             * name.
             */
            // @ts-ignore
             getTarget(): string;
            /**
             * Gets the date this ban entry was created.
             */
            // @ts-ignore
             getCreated(): java.util.Date;
            /**
             * Sets the date this ban entry was created.
             */
            // @ts-ignore
             setCreated(created: java.util.Date): void;
            /**
             * Gets the source of this ban.
             * <p>
             * Note: A source is considered any String, although this is generally a
             * player name.
             */
            // @ts-ignore
             getSource(): string;
            /**
             * Sets the source of this ban.
             * <p>
             * Note: A source is considered any String, although this is generally a
             * player name.
             */
            // @ts-ignore
             setSource(source: string): void;
            /**
             * Gets the date this ban expires on, or null for no defined end date.
             */
            // @ts-ignore
             getExpiration(): java.util.Date;
            /**
             * Sets the date this ban expires on. Null values are considered
             * "infinite" bans.
             */
            // @ts-ignore
             setExpiration(expiration: java.util.Date): void;
            /**
             * Gets the reason for this ban.
             */
            // @ts-ignore
             getReason(): string;
            /**
             * Sets the reason for this ban. Reasons must not be null.
             */
            // @ts-ignore
             setReason(reason: string): void;
            /**
             * Saves the ban entry, overwriting any previous data in the ban list.
             * <p>
             * Saving the ban entry of an unbanned player will cause the player to be
             * banned once again.
             */
            // @ts-ignore
             save(): void;
        }
    }
}
