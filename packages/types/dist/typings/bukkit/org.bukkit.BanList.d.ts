declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface BanList {
            /**
             * Gets a {@link BanEntry} by target.
             */
            // @ts-ignore
             getBanEntry(target: string): org.bukkit.BanEntry;
            /**
             * Adds a ban to the this list. If a previous ban exists, this will
             * update the previous entry.
             */
            // @ts-ignore
             addBan(target: string, reason: string, expires: java.util.Date, source: string): org.bukkit.BanEntry;
            /**
             * Gets a set containing every {@link BanEntry} in this list.
             */
            // @ts-ignore
             getBanEntries(): java.util.Set;
            /**
             * Gets if a {@link BanEntry} exists for the target, indicating an active
             * ban status.
             */
            // @ts-ignore
             isBanned(target: string): boolean;
            /**
             * Removes the specified target from this list, therefore indicating a
             * "not banned" status.
             */
            // @ts-ignore
             pardon(target: string): void;
        }
    }
}
