declare namespace org {
    namespace bukkit {
        namespace advancement {
            class AdvancementProgress {
                /**
                 * The advancement this progress is concerning.
                 */
                public getAdvancement(): org.bukkit.advancement.Advancement;
                /**
                 * Check if all criteria for this advancement have been met.
                 */
                public isDone(): boolean;
                /**
                 * Mark the specified criteria as awarded at the current time.
                 */
                public awardCriteria(criteria: string): boolean;
                /**
                 * Mark the specified criteria as uncompleted.
                 */
                public revokeCriteria(criteria: string): boolean;
                /**
                 * Get the date the specified criteria was awarded.
                 */
                public getDateAwarded(criteria: string): any /*java.util.Date*/;
                /**
                 * Get the criteria which have not been awarded.
                 */
                public getRemainingCriteria(): any[] /*java.util.Collection*/;
                /**
                 * Gets the criteria which have been awarded.
                 */
                public getAwardedCriteria(): any[] /*java.util.Collection*/;
            }
        }
    }
}
