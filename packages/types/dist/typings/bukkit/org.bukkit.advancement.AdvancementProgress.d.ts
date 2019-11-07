declare namespace org {
    namespace bukkit {
        namespace advancement {
            // @ts-ignore
            interface AdvancementProgress {
                /**
                 * The advancement this progress is concerning.
                 */
                // @ts-ignore
                 getAdvancement(): org.bukkit.advancement.Advancement;
                /**
                 * Check if all criteria for this advancement have been met.
                 */
                // @ts-ignore
                 isDone(): boolean;
                /**
                 * Mark the specified criteria as awarded at the current time.
                 */
                // @ts-ignore
                 awardCriteria(criteria: string): boolean;
                /**
                 * Mark the specified criteria as uncompleted.
                 */
                // @ts-ignore
                 revokeCriteria(criteria: string): boolean;
                /**
                 * Get the date the specified criteria was awarded.
                 */
                // @ts-ignore
                 getDateAwarded(criteria: string): java.util.Date;
                /**
                 * Get the criteria which have not been awarded.
                 */
                // @ts-ignore
                 getRemainingCriteria(): java.util.Collection;
                /**
                 * Gets the criteria which have been awarded.
                 */
                // @ts-ignore
                 getAwardedCriteria(): java.util.Collection;
            }
        }
    }
}
