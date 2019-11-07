// @ts-nocheck
declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
            interface TemporalAdjuster {
                /**
                 * Adjusts the specified temporal object.
                 * <p>
                 * This adjusts the specified temporal object using the logic
                 * encapsulated in the implementing class.
                 * Examples might be an adjuster that sets the date avoiding weekends, or one that
                 * sets the date to the last day of the month.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link Temporal#with(TemporalAdjuster)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisAdjuster.adjustInto(temporal);
                 * temporal = temporal.with(thisAdjuster);
                 * </pre>
                 * It is recommended to use the second approach, {@code with(TemporalAdjuster)},
                 * as it is a lot clearer to read in code.
                 */
                // @ts-ignore
                 adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            }
        }
    }
}
