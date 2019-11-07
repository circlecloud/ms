// @ts-nocheck
declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
            interface TemporalQuery {
                /**
                 * Queries the specified temporal object.
                 * <p>
                 * This queries the specified temporal object to return an object using the logic
                 * encapsulated in the implementing class.
                 * Examples might be a query that checks if the date is the day before February 29th
                 * in a leap year, or calculates the number of days to your next birthday.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link TemporalAccessor#query(TemporalQuery)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisQuery.queryFrom(temporal);
                 * temporal = temporal.query(thisQuery);
                 * </pre>
                 * It is recommended to use the second approach, {@code query(TemporalQuery)},
                 * as it is a lot clearer to read in code.
                 */
                // @ts-ignore
                 queryFrom(temporal: java.time.temporal.TemporalAccessor): java.lang.Object;
            }
        }
    }
}
