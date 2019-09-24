declare namespace org {
    namespace bukkit {
        namespace advancement {
            // @ts-ignore
            interface AdvancementProgress {
                /**
                 * The advancement this progress is concerning.
                 */
                 getAdvancement(): org.bukkit.advancement.Advancement;
                /**
                 * Check if all criteria for this advancement have been met.
                 */
                 isDone(): boolean;
                /**
                 * Mark the specified criteria as awarded at the current time.
                 */
                 awardCriteria(criteria: string): boolean;
                /**
                 * Mark the specified criteria as uncompleted.
                 */
                 revokeCriteria(criteria: string): boolean;
                /**
                 * Get the date the specified criteria was awarded.
                 */
                 getDateAwarded(criteria: string): any /*java.util.Date*/;
                /**
                 * Get the criteria which have not been awarded.
                 */
                 getRemainingCriteria(): any[] /*java.util.Collection*/;
                /**
                 * Gets the criteria which have been awarded.
                 */
                 getAwardedCriteria(): any[] /*java.util.Collection*/;
            }
        }
    }
}
