declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
            interface TemporalAmount {
                /**
                 * Returns the value of the requested unit.
                 * The units returned from {@link #getUnits()} uniquely define the
                 * value of the {@code TemporalAmount}.  A value must be returned
                 * for each unit listed in {@code getUnits}.
                 */
                // @ts-ignore
                 get(unit: java.time.temporal.TemporalUnit): number;
                /**
                 * Returns the list of units uniquely defining the value of this TemporalAmount.
                 * The list of {@code TemporalUnits} is defined by the implementation class.
                 * The list is a snapshot of the units at the time {@code getUnits}
                 * is called and is not mutable.
                 * The units are ordered from longest duration to the shortest duration
                 * of the unit.
                 */
                // @ts-ignore
                 getUnits(): java.util.List;
                /**
                 * Adds to the specified temporal object.
                 * <p>
                 * Adds the amount to the specified temporal object using the logic
                 * encapsulated in the implementing class.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link Temporal#plus(TemporalAmount)}:
                 * <pre>
                 * // These two lines are equivalent, but the second approach is recommended
                 * dateTime = amount.addTo(dateTime);
                 * dateTime = dateTime.plus(adder);
                 * </pre>
                 * It is recommended to use the second approach, {@code plus(TemporalAmount)},
                 * as it is a lot clearer to read in code.
                 */
                // @ts-ignore
                 addTo(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
                /**
                 * Subtracts this object from the specified temporal object.
                 * <p>
                 * Subtracts the amount from the specified temporal object using the logic
                 * encapsulated in the implementing class.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link Temporal#minus(TemporalAmount)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * dateTime = amount.subtractFrom(dateTime);
                 * dateTime = dateTime.minus(amount);
                 * </pre>
                 * It is recommended to use the second approach, {@code minus(TemporalAmount)},
                 * as it is a lot clearer to read in code.
                 */
                // @ts-ignore
                 subtractFrom(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            }
        }
    }
}
