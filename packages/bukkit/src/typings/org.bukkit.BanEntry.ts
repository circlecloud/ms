declare namespace org {
    namespace bukkit {
        class BanEntry {
            /**
             * Gets the target involved. This may be in the form of an IP or a player
             * name.
             */
            public getTarget(): string;
            /**
             * Gets the date this ban entry was created.
             */
            public getCreated(): any /*java.util.Date*/;
            /**
             * Sets the date this ban entry was created.
             */
            public setCreated(created: any /*java.util.Date*/): void;
            /**
             * Gets the source of this ban.
             * <p>
             * Note: A source is considered any String, although this is generally a
             * player name.
             */
            public getSource(): string;
            /**
             * Sets the source of this ban.
             * <p>
             * Note: A source is considered any String, although this is generally a
             * player name.
             */
            public setSource(source: string): void;
            /**
             * Gets the date this ban expires on, or null for no defined end date.
             */
            public getExpiration(): any /*java.util.Date*/;
            /**
             * Sets the date this ban expires on. Null values are considered
             * "infinite" bans.
             */
            public setExpiration(expiration: any /*java.util.Date*/): void;
            /**
             * Gets the reason for this ban.
             */
            public getReason(): string;
            /**
             * Sets the reason for this ban. Reasons must not be null.
             */
            public setReason(reason: string): void;
            /**
             * Saves the ban entry, overwriting any previous data in the ban list.
             * <p>
             * Saving the ban entry of an unbanned player will cause the player to be
             * banned once again.
             */
            public save(): void;
        }
    }
}
