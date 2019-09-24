declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface BanList {
            /**
             * Gets a {@link BanEntry} by target.
             */
             getBanEntry(target: string): org.bukkit.BanEntry;
            /**
             * Adds a ban to the this list. If a previous ban exists, this will
             * update the previous entry.
             */
             addBan(target: string, reason: string, expires: any /*java.util.Date*/, source: string): org.bukkit.BanEntry;
            /**
             * Gets a set containing every {@link BanEntry} in this list.
             */
             getBanEntries(): any[] /*java.util.Set*/;
            /**
             * Gets if a {@link BanEntry} exists for the target, indicating an active
             * ban status.
             */
             isBanned(target: string): boolean;
            /**
             * Removes the specified target from this list, therefore indicating a
             * "not banned" status.
             */
             pardon(target: string): void;
        }
    }
}
